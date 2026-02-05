// --- HYBRID AUTH SYSTEM PATCH ---
// Overwrites the existing initAuthSystem to provide Cloud + Local fallback.

// 1. RE-DEFINE CRITICAL CONSTANTS (Fixes ReferenceError)
const ADMIN_HASH = 'RW1hbjE2NSo='; // btoa('Eman165*')
const ADMIN_KEY_PAYLOAD = 'UEtGVFhXVko1T1dRNk5XNVBGUEdBSUxONVI=';
const ADMIN_SECRET_PAYLOAD = 'Q2I5dWlzejRoc3M4M1ZhUHJuVzR2cTlmQTh6Rkg1b2lrWG9kd3YzRG92TGo=';

// 2. RE-CONNECT FIREBASE (Safely)
let db;
try {
    if (typeof firebase !== 'undefined') {
        // Check if already initialized in main.js
        if (!firebase.apps.length) {
            // Re-init if missing (Rare)
            firebase.initializeApp({
                apiKey: "AIzaSyAzPQe4vdjaJ-g44SOOFg9qOYsVZI3NnDo",
                authDomain: "vander-pulse.firebaseapp.com",
                projectId: "vander-pulse"
            });
        }
        db = firebase.firestore();
    }
} catch (e) {
    console.warn("[PATCH] Firebase Init Warning:", e);
}

function initAuthSystem() {
    console.log("[PATCH] Hybrid Auth System Loaded.");
    const overlay = document.getElementById('auth-overlay');
    const tabLogin = document.getElementById('tab-login');
    const tabSignup = document.getElementById('tab-signup');
    const loginForm = document.getElementById('login-form');
    const signupForm = document.getElementById('signup-form');
    const btnLogin = document.getElementById('btn-login');
    const btnSignup = document.getElementById('btn-signup');
    const msg = document.getElementById('auth-msg');

    if (!overlay) return;

    // Check Session (Local Persistence)
    const activeSession = localStorage.getItem('vander_session_active');
    const sessionUser = localStorage.getItem('vander_current_user');

    if (activeSession === 'true' && sessionUser) {
        overlay.style.display = 'none';
        if (sessionUser.toLowerCase() === 'yahia admin') {
            brokerKey = atob(ADMIN_KEY_PAYLOAD);
            brokerSecret = atob(ADMIN_SECRET_PAYLOAD);
            document.body.classList.remove('auth-locked');
            console.log("[AUTH] Admin Privileges Restored via Auto-Login.");
            setTimeout(() => {
                const adminBtn = document.getElementById('nav-admin-btn');
                if (adminBtn) adminBtn.style.display = 'block';
                initAdminListener();
            }, 500);
        } else {
            // For normal users, we try to fetch their keys from DB silently or use cached
            checkUserStatus(sessionUser);
        }
        return;
    } else {
        document.body.classList.add('auth-locked');
    }

    // Tabs
    tabLogin.onclick = () => {
        tabLogin.classList.add('active');
        tabSignup.classList.remove('active');
        loginForm.style.display = 'block';
        signupForm.style.display = 'none';
        msg.innerText = '';
    };

    tabSignup.onclick = () => {
        tabSignup.classList.add('active');
        tabLogin.classList.remove('active');
        signupForm.style.display = 'block';
        loginForm.style.display = 'none';
        msg.innerText = '';
    };

    // --- CLOUD LOGIN (Hybrid Fallback) ---
    btnLogin.onclick = async () => {
        const userInput = document.getElementById('login-user').value.trim();
        const passInput = document.getElementById('login-pass').value.trim();
        const userLower = userInput.toLowerCase();

        msg.innerText = "Verifying Identity...";
        msg.className = "auth-msg";

        // 1. Admin Bypass
        if (userLower === 'yahia admin' && btoa(passInput) === ADMIN_HASH) {
            msg.className = "auth-msg success";
            msg.innerText = "ADMIN ACCESS GRANTED via HWID...";
            setTimeout(() => loginSuccess('yahia admin', true), 1000);
            return;
        }

        // 2. Cloud Query
        let cloudSuccess = false;
        try {
            if (typeof db !== 'undefined') {
                const snapshot = await db.collection('users').where('username', '==', userLower).get();
                if (!snapshot.empty) {
                    snapshot.forEach(doc => {
                        const data = doc.data();
                        // Check Hash OR Plaintext (Backward compat)
                        if (data.pass === btoa(passInput) || data.pass === passInput) {
                            cloudSuccess = true;
                            if (data.status === 'banned') {
                                msg.className = "auth-msg error";
                                msg.innerText = "CRITICAL: This HWID has been BANNED by Admin.";
                            } else {
                                msg.className = "auth-msg success";
                                msg.innerText = "Identity Verified (Cloud Sync).";
                                setTimeout(() => loginSuccess(data.username, false, data), 800);
                            }
                        }
                    });
                }
            }
        } catch (err) {
            console.warn("Cloud Auth Failed, trying local:", err);
        }

        if (cloudSuccess) return;

        // 3. Local Storage Fallback (Legacy Support)
        const userDb = JSON.parse(localStorage.getItem('vander_users') || '{}');
        const storedUser = Object.keys(userDb).find(u => u.toLowerCase() === userLower);

        if (storedUser) {
            const localData = userDb[storedUser];
            // Check Hash OR Plaintext
            const localPass = localData.pass || localData.password; // Handle variants
            if (localPass === btoa(passInput) || localPass === passInput) {
                msg.className = "auth-msg success";
                msg.innerText = "Identity Verified (Local Cache).";

                // Silent Migration to Cloud (Self-Healing)
                try {
                    if (typeof db !== 'undefined') {
                        db.collection('users').add({
                            username: storedUser.toLowerCase(),
                            pass: btoa(passInput), // Store hashed
                            key: localData.key,
                            secret: localData.secret,
                            ip: 'Legacy Migration',
                            status: 'active',
                            joined: new Date().toISOString()
                        });
                        console.log("Migrated user to cloud: " + storedUser);
                    }
                } catch (e) { }

                setTimeout(() => loginSuccess(storedUser, false, localData), 800);
                return;
            }
        }

        msg.className = "auth-msg error";
        msg.innerText = "ACCESS DENIED: Invalid Credentials";
    };

    // --- CLOUD SIGNUP ---
    btnSignup.onclick = async () => {
        const user = document.getElementById('new-user').value.trim();
        const pass = document.getElementById('new-pass').value.trim();
        const key = document.getElementById('new-key').value.trim();
        const secret = document.getElementById('new-secret').value.trim();

        if (!user || !pass || !key || !secret) {
            msg.className = "auth-msg error";
            msg.innerText = "All fields required.";
            return;
        }

        if (user.toLowerCase() === 'yahia admin') {
            msg.className = "auth-msg error";
            msg.innerText = "Name Reserved.";
            return;
        }

        msg.innerText = "Registering in global network...";

        try {
            // Check existence
            const snapshot = await db.collection('users').where('username', '==', user.toLowerCase()).get();
            if (!snapshot.empty) {
                msg.className = "auth-msg error";
                msg.innerText = "Username taken globally.";
                return;
            }

            // Get IP
            let ip = "Unknown IP";
            try {
                const ipRes = await fetch('https://api.ipify.org?format=json');
                const ipData = await ipRes.json();
                ip = ipData.ip;
            } catch (e) { console.warn("IP fetch failed"); }

            // Create Doc
            await db.collection('users').add({
                username: user.toLowerCase(),
                pass: btoa(pass),
                key: key,
                secret: secret,
                ip: ip,
                status: 'active',
                joined: new Date().toISOString()
            });

            msg.className = "auth-msg success";
            msg.innerText = "Profile Created. Logging in...";
            setTimeout(() => {
                loginSuccess(user, false, { key, secret });
            }, 1000);

        } catch (err) {
            console.error(err);
            msg.className = "auth-msg error";
            if (err.code === 'permission-denied') {
                msg.innerText = "Database Permission Error. Enable Test Mode.";
            } else {
                msg.innerText = "Database Write Failed. Check Settings.";
            }
        }
    };

    async function checkUserStatus(username) {
        // Re-validate session silently
        try {
            const qs = await db.collection('users').where('username', '==', username).get();
            qs.forEach(doc => {
                const data = doc.data();
                if (data.status === 'banned') {
                    alert("YOUR ACCOUNT HAS BEEN BANNED BY ADMINISTRATOR.");
                    logout();
                } else {
                    // Sync keys just in case
                    brokerKey = data.key;
                    brokerSecret = data.secret;
                    localStorage.setItem('vander_broker_key', brokerKey);
                    localStorage.setItem('vander_broker_secret', brokerSecret);
                    document.body.classList.remove('auth-locked');
                }
            });
            if (qs.empty) {
                // Check legacy
                document.body.classList.remove('auth-locked');
            }
        } catch (e) { document.body.classList.remove('auth-locked'); }
    }

    function loginSuccess(username, isAdmin, userData = null) {
        localStorage.setItem('vander_session_active', 'true');
        localStorage.setItem('vander_current_user', username);

        if (isAdmin) {
            brokerKey = atob(ADMIN_KEY_PAYLOAD);
            brokerSecret = atob(ADMIN_SECRET_PAYLOAD);
            const adminBtn = document.getElementById('nav-admin-btn');
            if (adminBtn) adminBtn.style.display = 'block';
            initAdminListener();
        } else {
            if (userData) {
                brokerKey = userData.key;
                brokerSecret = userData.secret;
            }
        }

        localStorage.setItem('vander_broker_key', brokerKey);
        localStorage.setItem('vander_broker_secret', brokerSecret);

        overlay.style.display = 'none';
        document.body.classList.remove('auth-locked');
        addLog(`[AUTH] Cloud Connection Established: ${username.toUpperCase()}`, 'system');
        attemptAutoBroker();
    }
}
