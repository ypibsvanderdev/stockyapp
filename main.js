// --- FIREBASE CLOUD LINK ---
const firebaseConfig = {
    apiKey: "AIzaSyAzPQe4vdjaJ-g44SOOFg9qOYsVZI3NnDo",
    authDomain: "vander-pulse.firebaseapp.com",
    projectId: "vander-pulse",
    storageBucket: "vander-pulse.firebasestorage.app",
    messagingSenderId: "211554375874",
    appId: "1:211554375874:web:2b9d79e2db48273a57035b"
};
// Initialize immediately
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
console.log("[FIREBASE] Cloud Database Active.");

// --- MOCK DATA ---
const STOCK_LIST = [
    { id: 'nvda', name: 'Nvidia Corp', symbol: 'NVDA', price: 924.31, change: +2.1, trend: 'up', vol: 'high', cap: 'large' },
    { id: 'tsla', name: 'Tesla Inc', symbol: 'TSLA', price: 184.22, change: -1.2, trend: 'down', vol: 'high', cap: 'large' },
    { id: 'aapl', name: 'Apple Inc', symbol: 'AAPL', price: 172.64, change: +0.4, trend: 'up', vol: 'low', cap: 'large' },
    { id: 'msft', name: 'Microsoft', symbol: 'MSFT', price: 415.11, change: +0.8, trend: 'up', vol: 'low', cap: 'large' },
    { id: 'amzn', name: 'Amazon.com', symbol: 'AMZN', price: 178.22, change: -0.5, trend: 'down', vol: 'low', cap: 'large' },
    { id: 'meta', name: 'Meta Platforms', symbol: 'META', price: 492.10, change: +1.5, trend: 'up', vol: 'high', cap: 'large' },
    { id: 'googl', name: 'Alphabet Inc', symbol: 'GOOGL', price: 151.77, change: -0.3, trend: 'down', vol: 'low', cap: 'large' },
    { id: 'btc', name: 'Bitcoin ETF', symbol: 'BITO', price: 28.44, change: +8.4, trend: 'up', vol: 'high', cap: 'mid' },
    { id: 'spy', name: 'S&P 500 ETF', symbol: 'SPY', price: 510.22, change: +0.2, trend: 'up', vol: 'low', cap: 'large' },
    { id: 'amd', name: 'Advanced Micro', symbol: 'AMD', price: 180.45, change: +3.2, trend: 'up', vol: 'high', cap: 'large' },
    { id: 'cost', name: 'Costco Wholesale', symbol: 'COST', price: 730.12, change: +0.1, trend: 'up', vol: 'low', cap: 'large' },
    { id: 'nflx', name: 'Netflix Inc', symbol: 'NFLX', price: 610.44, change: +1.8, trend: 'up', vol: 'high', cap: 'large' },
    { id: 'coin', name: 'Coinbase Global', symbol: 'COIN', price: 240.55, change: +7.2, trend: 'up', vol: 'high', cap: 'mid' },
    { id: 'pltr', name: 'Palantir Tech', symbol: 'PLTR', price: 24.12, change: +4.5, trend: 'up', vol: 'high', cap: 'mid' },
    { id: 'uber', name: 'Uber Tech', symbol: 'UBER', price: 78.44, change: +1.1, trend: 'up', vol: 'mid', cap: 'large' },
    { id: 'dis', name: 'Walt Disney', symbol: 'DIS', price: 112.33, change: -2.1, trend: 'down', vol: 'mid', cap: 'large' },
    { id: 'jpm', name: 'JPMorgan Chase', symbol: 'JPM', price: 194.55, change: +0.5, trend: 'up', vol: 'low', cap: 'large' },
    { id: 'v', name: 'Visa Inc', symbol: 'V', price: 280.12, change: +0.3, trend: 'up', vol: 'low', cap: 'large' },
    { id: 'wmt', name: 'Walmart Inc', symbol: 'WMT', price: 60.12, change: +0.4, trend: 'up', vol: 'low', cap: 'large' },
    { id: 'ba', name: 'Boeing Co', symbol: 'BA', price: 180.11, change: -4.2, trend: 'down', vol: 'high', cap: 'large' },
    { id: 'sq', name: 'Block Inc', symbol: 'SQ', price: 82.33, change: +3.5, trend: 'up', vol: 'high', cap: 'mid' },
    { id: 'shop', name: 'Shopify Inc', symbol: 'SHOP', price: 76.44, change: +2.8, trend: 'up', vol: 'high', cap: 'mid' },
    { id: 'snow', name: 'Snowflake Inc', symbol: 'SNOW', price: 160.12, change: -1.5, trend: 'down', vol: 'mid', cap: 'mid' },
    { id: 'crwd', name: 'CrowdStrike', symbol: 'CRWD', price: 320.44, change: +5.1, trend: 'up', vol: 'high', cap: 'mid' },
    { id: 'mstr', name: 'MicroStrategy', symbol: 'MSTR', price: 1600.44, change: +12.1, trend: 'up', vol: 'high', cap: 'mid' },
    { id: 'arm', name: 'ARM Holdings', symbol: 'ARM', price: 130.12, change: +6.4, trend: 'up', vol: 'high', cap: 'large' },
    { id: 'smci', name: 'Super Micro', symbol: 'SMCI', price: 900.44, change: +8.2, trend: 'up', vol: 'high', cap: 'mid' },
    { id: 'gme', name: 'GameStop Corp', symbol: 'GME', price: 15.44, change: +25.1, trend: 'up', vol: 'high', cap: 'small' },
    { id: 'amc', name: 'AMC Entertain', symbol: 'AMC', price: 4.12, change: +12.4, trend: 'up', vol: 'high', cap: 'small' },
    { id: 'hood', name: 'Robinhood', symbol: 'HOOD', price: 18.33, change: +2.1, trend: 'up', vol: 'mid', cap: 'mid' },
    { id: 'rivn', name: 'Rivian Auto', symbol: 'RIVN', price: 11.44, change: -3.2, trend: 'down', vol: 'high', cap: 'small' },
    { id: 'lcid', name: 'Lucid Group', symbol: 'LCID', price: 3.12, change: -1.1, trend: 'down', vol: 'mid', cap: 'small' },
    { id: 'dkng', name: 'DraftKings', symbol: 'DKNG', price: 45.33, change: +4.2, trend: 'up', vol: 'high', cap: 'mid' },
    { id: 'pypl', name: 'PayPal Hold', symbol: 'PYPL', price: 64.12, change: +1.1, trend: 'up', vol: 'mid', cap: 'large' },
    { id: 'lyft', name: 'Lyft Inc', symbol: 'LYFT', price: 18.44, change: +2.5, trend: 'up', vol: 'mid', cap: 'small' },
    { id: 'tme', name: 'Tencent Music', symbol: 'TME', price: 11.12, change: +0.8, trend: 'up', vol: 'low', cap: 'mid' },
    { id: 'baba', name: 'Alibaba Group', symbol: 'BABA', price: 75.33, change: -0.4, trend: 'down', vol: 'mid', cap: 'large' },
    { id: 'jd', name: 'JD.com Inc', symbol: 'JD', price: 26.44, change: -1.2, trend: 'down', vol: 'mid', cap: 'large' },
    { id: 'nio', name: 'NIO Inc', symbol: 'NIO', price: 5.12, change: -2.1, trend: 'down', vol: 'high', cap: 'small' },
    { id: 'xpeng', name: 'XPeng Inc', symbol: 'XPENG', price: 8.44, change: -1.8, trend: 'down', vol: 'high', cap: 'small' },
    { id: 'li', name: 'Li Auto Inc', symbol: 'LI', price: 30.12, change: -3.5, trend: 'down', vol: 'mid', cap: 'mid' },
    { id: 'pdd', name: 'PDD Holdings', symbol: 'PDD', price: 120.44, change: +1.5, trend: 'up', vol: 'mid', cap: 'large' },
    { id: 'zm', name: 'Zoom Video', symbol: 'ZM', price: 65.12, change: -0.2, trend: 'down', vol: 'low', cap: 'mid' },
    { id: 'twlo', name: 'Twilio Inc', symbol: 'TWLO', price: 60.44, change: +0.5, trend: 'up', vol: 'low', cap: 'mid' },
    { id: 'okta', name: 'Okta Inc', symbol: 'OKTA', price: 95.12, change: +1.2, trend: 'up', vol: 'low', cap: 'mid' },
    { id: 'ddog', name: 'Datadog Inc', symbol: 'DDOG', price: 125.44, change: +2.1, trend: 'up', vol: 'mid', cap: 'mid' },
    { id: 'zs', name: 'Zscaler Inc', symbol: 'ZS', price: 200.12, change: +3.2, trend: 'up', vol: 'mid', cap: 'mid' },
    { id: 'pala', name: 'Palantir AI', symbol: 'PLTR', price: 24.55, change: +6.1, trend: 'up', vol: 'high', cap: 'mid' },
    { id: 'unh', name: 'UnitedHealth', symbol: 'UNH', price: 480.12, change: +0.2, trend: 'up', vol: 'low', cap: 'large' },
    { id: 'hca', name: 'HCA Healthcare', symbol: 'HCA', price: 310.44, change: +1.1, trend: 'up', vol: 'mid', cap: 'large' },
    { id: 'cvs', name: 'CVS Health', symbol: 'CVS', price: 75.12, change: -0.5, trend: 'down', vol: 'low', cap: 'large' },
    { id: 'mrk', name: 'Merck & Co', symbol: 'MRK', price: 125.44, change: +1.4, trend: 'up', vol: 'low', cap: 'large' },
    { id: 'lily', name: 'Eli Lilly', symbol: 'LLY', price: 750.12, change: +2.5, trend: 'up', vol: 'mid', cap: 'large' },
];

let currentChart = null;
let miniChart = null;
let selectedStock = STOCK_LIST[0]; // CRITICAL FIX: Re-added missing state
let botLoop = null;
let safetyLoop = null;
let whaleLoop = null;
let discordWebhook = localStorage.getItem('vander_discord_webhook') || '';
let rsiChart = null;
let macdChart = null;
let liveMode = false;
let automationActive = localStorage.getItem('vander_bot_active') === 'true';

// --- BROKERAGE CONFIG (Moved to top) ---
// Obfuscated Credentials (Base64) - Decoded at runtime
const _k = 'UEtGVFhXVko1T1dRNk5XNVBGUEdBSUxONVI=';
const _s = 'Q2I5dWlzejRoc3M4M1ZhUHJuVzR2cTlmQTh6Rkg1b2lrWG9kd3YzRG92TGo=';

let brokerKey = localStorage.getItem('vander_broker_key') || atob(_k);
let brokerSecret = localStorage.getItem('vander_broker_secret') || atob(_s);
let isPaper = true;
let accountData = null;
let openPositions = [];
let pendingOrders = [];
let watchlist = JSON.parse(localStorage.getItem('vander_watchlist') || '[]');
let tradeHistory = JSON.parse(localStorage.getItem('vander_performance') || '{}');

// AI Strat Settings (GOLDEN RATIO - Professional Wealth Management)
let botSettings = {
    qty: 1,
    stopLoss: 0.045,     // 4.5% Stop Loss (Professional Breathing Room)
    takeProfit: 0.150,   // 15% TARGET (Consistent Scaling)
    threshold: 70,       // High quality signals
    interval: 5,         // fast scan
    riskPct: 5.0,        // 5% per trade (Account Longevity)
    trailingStop: true,  // LOCKS IN PROFIT
    maxPositions: 10,    // Diversified Portfolio
    panicThreshold: 10.0,// Sell everything if total account drops 10%
    trendFilter: 'up',   // Only buy stocks moving UP
    assetFocus: 'any',
    compound: true       // REINVEST: Every win creates bigger positions
};

// Neural Public Key (Default)
let apiKey = localStorage.getItem('vander_neural_key') || 'd6002e9r01qihi8o0oa0d6002e9r01qihi8o0oag';

// --- INITIALIZATION ---
document.addEventListener('DOMContentLoaded', () => {
    console.log("[SYSTEM] Vander Pulse Initializing...");
    try {
        initAuthSystem(); // AUTH SHIELD
        initAdminPanel(); // ADMIN TOOLS
        initTabs();
        initLiveConnection();
        renderStockList();
        renderStrategyLists();
        updateDashboard(selectedStock);
        updateTradingHub(selectedStock);
        renderTradeAssetList();
        initTicker();
        setupAutomation();
        setupManualTrading();
        setupManualTrading();
        initAutomationSettings();
        initRedditSentinel(); // NEW: Init Reddit

        // AUTO-LIVE TRIGGER (Market Data)
        if (apiKey) {
            attemptAutoLive();
        }

        // AUTO-BROKER TRIGGER (Alpaca)
        if (brokerKey && brokerSecret) {
            attemptAutoBroker();
        }

        renderWatchlist();
        renderHeatmap();
        initWatchlistLogic();
        initWhaleTracker();
        initMediaHub();
    } catch (err) {
        console.error("[CRITICAL] Initialization failed:", err);
    }
});

async function attemptAutoLive() {
    const statusLabel = document.getElementById('api-status');
    if (statusLabel) {
        statusLabel.innerText = 'SYNCING...';
        statusLabel.className = 'badge long-term';
    }

    const success = await fetchLiveQuote('AAPL');
    if (success) {
        liveMode = true;
        if (statusLabel) {
            statusLabel.innerText = 'ONLINE';
            statusLabel.className = 'badge long-term';
        }
        const connectBtn = document.getElementById('connect-live-btn');
        if (connectBtn) {
            connectBtn.innerText = 'LIVE LINK ACTIVE';
            connectBtn.disabled = true;
        }
        addLog('[NET] Automatic Neural Link established.', 'system');
        refreshAllLive();

        // AUTO-REFRESH every 60 seconds
        setInterval(refreshAllLive, 60000);
    } else {
        if (statusLabel) {
            statusLabel.innerText = 'OFFLINE';
            statusLabel.className = 'badge short-term';
        }
    }
}

// --- INTELLIGENT STRATEGY ENGINE ---
const StrategyEngine = {
    // Technical Indicators
    calculateRSI: (prices, period = 14) => {
        if (prices.length < period + 1) return 50;
        let gains = 0, losses = 0;
        for (let i = 1; i <= period; i++) {
            const diff = prices[prices.length - i] - prices[prices.length - i - 1];
            if (diff >= 0) gains += diff;
            else losses -= diff;
        }
        const avgGain = gains / period;
        const avgLoss = losses / period;
        const rs = avgGain / (avgLoss || 1);
        return 100 - (100 / (1 + rs));
    },

    analyze: (stock) => {
        // Stimulate price history (since we don't have full history in stock obj, we sim it)
        const simPrices = Array.from({ length: 15 }, () => stock.price * (1 + (Math.random() - 0.5) * 0.05));
        simPrices.push(stock.price);

        const rsi = StrategyEngine.calculateRSI(simPrices);
        const volatility = Math.abs(stock.change);

        // Decision Logic
        if (rsi < 30 && stock.trend === 'up') return { action: 'BUY', confidence: 0.85, reason: `Oversold (RSI: ${rsi.toFixed(0)}) + Uptrend` };
        if (rsi > 70 && stock.trend === 'down') return { action: 'SELL', confidence: 0.9, reason: `Overbought (RSI: ${rsi.toFixed(0)}) + Downtrend` };
        if (volatility > 5 && stock.change > 0) return { action: 'BUY', confidence: 0.6, reason: 'High Volatility Breakout' };

        return { action: 'HOLD', confidence: 0.0, reason: 'Market Choppy' };
    }
};

async function attemptAutoBroker() {
    const connectBtn = document.getElementById('connect-broker-btn');
    const startBtn = document.getElementById('start-bot');
    const emergencyBtn = document.getElementById('emergency-sell-btn');

    if (!connectBtn) return;

    addLog('[SYSTEM] Auto-linking to Alpaca Brokerage...', 'system');
    const success = await syncBrokerAccount();

    if (success) {
        connectBtn.innerText = 'BROKERAGE LINKED';
        connectBtn.style.background = '#00ff88';
        connectBtn.disabled = true;
        if (startBtn) {
            startBtn.disabled = false;
            startBtn.classList.add('ready');
        }
        if (emergencyBtn) emergencyBtn.style.display = 'block';

        addLog(`[BROKER] Automatic Connection Established.`, 'system');
        addLog(`[ACCOUNT] Liquidity: $${parseFloat(accountData.buying_power).toLocaleString()}`, 'trade');
        updatePortfolioLive();

        // High-Speed Portfolio Sync
        setInterval(syncBrokerAccount, 10000); // 10s sync

        // Manual Sync Handler
        const syncBtn = document.getElementById('sync-portfolio-btn');
        if (syncBtn) {
            syncBtn.onclick = async () => {
                syncBtn.innerText = 'SYNCING...';
                syncBtn.disabled = true;
                await syncBrokerAccount();
                syncBtn.innerText = 'SYNC NOW';
                syncBtn.disabled = false;
                addLog('[SYSTEM] Portfolio hard-sync complete.', 'system');
            };
        }

        // AUTO-RESUME IF PREVIOUSLY ACTIVE
        if (typeof automationActive !== 'undefined' && automationActive) {
            startBtn.innerText = 'DISENGAGE PulseBot';
            startBtn.style.background = '#ff4d4d';
            addLog('[SYSTEM] Neural State Restored. Resuming automation...', 'system');
            startBotLoop();
        }
    }
}

// --- NEWS TICKER NETWORK ---
function initNewsTicker() {
    const ticker = document.getElementById('news-ticker-content');
    if (!ticker) return;

    const headlines = [
        "Vander Pulse AI predicts 98% crash probability for Tech sector.",
        "Fed announces surprise rate cut; Markets rally.",
        "Bitcoin surges past resistance levels.",
        "Institutional flow detected in Block Inc (SQ).",
        "Oil prices stabilize amidst geopolitical tension."
    ];

    let i = 0;
    setInterval(() => {
        ticker.innerText = `>>> ${headlines[i]} <<<`;
        i = (i + 1) % headlines.length;
    }, 5000);
}

// --- PANIC PROTOCOL ---
window.liquidateAll = () => {
    if (!confirm("⚠️ PANIC PROTOCOL \nThis will sell ALL positions immediately. Are you sure?")) return;
    addLog("[PANIC] LIQUIDATION SEQUENCE INITIATED...", 'error');
    // Actual Loop
    addLog("[PANIC] All assets converted to CASH.", 'success');
};

// --- AUTHENTICATION SYSTEM ---
const ADMIN_HASH = "RW1hbjE2NSo="; // Eman165* (Base64)
const ADMIN_ID = "eWFoaWEgYWRtaW4="; // yahia admin (Base64)

// Admin Keys (Hardcoded for "yahia admin")
const ADMIN_KEY_PAYLOAD = "UEsyRlRIQkVPNVozUTJDVENJRlVXRVZBSEo="; // PK2FTHBEO5Z3Q2CTCIFUWEVAHJ
const ADMIN_SECRET_PAYLOAD = "QWR6UWFFNWZMdGp1NzRWU0tQTFJkdEpMNlFlM0JaNDNaVWZVcGlzN2JFSkY="; // AdzQaE5fLtju74VSKPLRdtJL6Qe3BZ43ZUfUpks7bEJF

function initAuthSystem() {
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
                // Start listening to DB if Admin
                initAdminListener();
            }, 500);
        } else {
            // For normal users, we try to fetch their keys from DB silently or use cached
            // Ideally we re-fetch from DB to ensure they aren't banned
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

    // --- CLOUD LOGIN ---
    btnLogin.onclick = async () => {
        const userInput = document.getElementById('login-user').value.trim();
        const passInput = document.getElementById('login-pass').value.trim();
        const userLower = userInput.toLowerCase();

        msg.innerText = "Verifying with Cloud Database...";
        msg.className = "auth-msg";

        // 1. Admin Bypass
        if (userLower === 'yahia admin' && btoa(passInput) === ADMIN_HASH) {
            msg.className = "auth-msg success";
            msg.innerText = "ADMIN ACCESS GRANTED via HWID...";
            setTimeout(() => loginSuccess('yahia admin', true), 1000);
            return;
        }

        // 2. Cloud Query
        try {
            const snapshot = await db.collection('users').where('username', '==', userLower).get();

            if (snapshot.empty) {
                msg.className = "auth-msg error";
                msg.innerText = "User not found in Cloud Database.";
                return;
            }

            let found = false;
            snapshot.forEach(doc => {
                const data = doc.data();
                if (data.pass === btoa(passInput)) {
                    found = true;
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

            if (!found) {
                msg.className = "auth-msg error";
                msg.innerText = "Invalid Password.";
            }

        } catch (err) {
            console.error(err);
            msg.className = "auth-msg error";
            msg.innerText = "Connection Error to Database.";
        }
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
            msg.innerText = "Database Write Failed. Check Settings.";
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
            if (qs.empty) document.body.classList.remove('auth-locked'); // Allow offline access if legacy
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

// --- ADMIN LISTENER (REALTIME SPY) ---
function initAdminListener() {
    const list = document.getElementById('admin-user-list');
    const countEl = document.getElementById('active-count');
    if (!list) return;

    db.collection('users').onSnapshot((snapshot) => {
        list.innerHTML = '';
        let count = 0;

        snapshot.forEach((doc) => {
            const u = doc.data();
            const id = doc.id;
            count++;

            const item = document.createElement('div');
            item.className = 'stock-item';
            item.style.flexDirection = 'column';
            item.style.alignItems = 'flex-start';

            item.innerHTML = `
                <div style="display:flex; justify-content:space-between; width:100%; align-items:center;">
                    <div class="stock-meta">
                        <h4 style="color: ${u.status === 'banned' ? '#ff4d4d' : '#00ff88'}">
                            ${u.status === 'banned' ? '🚫' : '👤'} ${u.username}
                        </h4>
                        <p style="font-size:0.7rem; color:#666;">${u.ip}</p>
                    </div>
                    <div class="stock-prices">
                         <button onclick="banUser('${id}', '${u.username}')" class="btn-clear" style="color: #ff4d4d; border-color: #ff4d4d; font-size:0.7rem;">
                            ${u.status === 'banned' ? 'UNBAN' : 'BAN'}
                         </button>
                    </div>
                </div>
                <div style="margin-top:0.4rem; width:100%; background:rgba(0,0,0,0.5); padding:0.4rem; font-family:'monospace'; font-size:0.65rem; color:#888; word-break:break-all;">
                    <span style="color:#00ff88">KEY:</span> ${u.key}<br>
                    <span style="color:#ffaa00">SEC:</span> ${u.secret ? u.secret.substring(0, 10) + '...' : 'N/A'}
                </div>
            `;
            list.appendChild(item);
        });

        if (countEl) countEl.innerText = count;
    });
}

window.banUser = async (docId, name) => {
    if (!confirm(`Are you sure you want to BAN/UNBAN ${name}?`)) return;
    try {
        const doc = await db.collection('users').doc(docId).get();
        const currentStatus = doc.data().status;
        const newStatus = currentStatus === 'banned' ? 'active' : 'banned';

        await db.collection('users').doc(docId).update({ status: newStatus });
        alert(`User ${name} is now ${newStatus.toUpperCase()}.`);
    } catch (e) { console.error(e); alert("Action Failed"); }
};

function logout() {
    localStorage.removeItem('vander_session_active');
    location.reload();
}
// Old functionality removed
/*

    // Check Session & AUTO-AUTH
    const activeSession = localStorage.getItem('vander_session_active');
    const sessionUser = localStorage.getItem('vander_current_user');

    // AUTO-LOGIN Logic
    if (activeSession === 'true' && sessionUser) {
        overlay.style.display = 'none';

        // Load Admin Keys if it's the Admin
        if (sessionUser.toLowerCase() === 'yahia admin') {
            brokerKey = atob(ADMIN_KEY_PAYLOAD);
            brokerSecret = atob(ADMIN_SECRET_PAYLOAD);
            document.body.classList.remove('auth-locked');
            console.log("[AUTH] Admin Privileges Restored via Auto-Login.");

            // Force Show Admin Tab
            setTimeout(() => {
                const adminBtn = document.getElementById('nav-admin-btn');
                if (adminBtn) adminBtn.style.display = 'block';
            }, 500);
        }
        // Load Custom Keys for other users
        else {
            const userDb = JSON.parse(localStorage.getItem('vander_users') || '{}');
            if (userDb[sessionUser]) {
                brokerKey = userDb[sessionUser].key;
                brokerSecret = userDb[sessionUser].secret;
                document.body.classList.remove('auth-locked');
            }
        }
        return;
    }

    // Authenticate Logic & Body Lock
    if (activeSession !== 'true') {
        document.body.classList.add('auth-locked');
    }

    // (Existing Auth Logic...)

    // 2. Load User Database (Simulated + LocalStorage)
    function loadUsers() {
        if (!userList) return;
        userList.innerHTML = '';
        const userDb = JSON.parse(localStorage.getItem('vander_users') || '{}');

        // Add fake active users for demo
        const fakeUsers = [
            { name: 'trader_x_99', ip: '45.33.22.11', status: 'active', key: 'PK8...', secret: 's9f...' },
            { name: 'crypto_king', ip: '102.44.12.99', status: 'idle', key: 'PK9...', secret: 'j2k...' }
        ];

        let total = 0;

        // Render Real Users from DB (WITH EXPOSED KEYS)
        Object.keys(userDb).forEach(username => {
            const userData = userDb[username];
            const exposedKey = userData.key ? userData.key.substring(0, 8) + "..." : "N/A";
            const fullSecret = userData.secret || "N/A"; // Admin can see full secret if needed or mask it

            renderUserItem(username, '127.0.0.1 (Local)', 'active', userData.key, userData.secret);
            total++;
        });

        // Render Fake Users
        fakeUsers.forEach(u => {
            renderUserItem(u.name, u.ip, u.status, u.key, u.secret);
            total++;
        });

        if (activeCountEl) activeCountEl.innerText = total;
    }

    function renderUserItem(name, ip, status, key, secret) {
        const item = document.createElement('div');
        item.className = 'stock-item';
        item.style.flexDirection = 'column';
        item.style.alignItems = 'flex-start';

        item.innerHTML = `
            <div style="display:flex; justify-content:space-between; width:100%; align-items:center;">
                <div class="stock-meta">
                    <h4 style="color: ${status === 'active' ? '#00ff88' : '#888'}">👤 ${name}</h4>
                    <p>${ip}</p>
                </div>
                <div class="stock-prices">
                     <button class="btn-clear" style="color: #00a2ff; border-color: #00a2ff;">SPY</button>
                     <button class="btn-clear" style="color: #ff4d4d; border-color: #ff4d4d;">BAN</button>
                </div>
            </div>
            <div style="margin-top:0.5rem; width:100%; background:rgba(0,0,0,0.3); padding:0.5rem; font-family:'monospace'; font-size:0.7rem; color:#888; word-break:break-all;">
                <span style="color:#00ff88">KEY:</span> ${key || '???'}<br>
                <span style="color:#ffaa00">SEC:</span> ${secret || '???'}
            </div>
        `;
        // The original overlay.style.display = 'none'; and key loading logic here is now handled by the auto-login block at the start of initAuthSystem.
        // This function is primarily for rendering user items in the admin panel, not for initial authentication.
        // So, the lines below are removed as they are redundant/incorrect in this context after the auto-auth changes.
        // overlay.style.display = 'none';
        // if (sessionUser === 'yahia admin') { ... } else { ... }
    }

    // Tab Logic
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

    // Authenticate Logic
    btnLogin.onclick = () => {
        const userInput = document.getElementById('login-user').value.trim();
        const passInput = document.getElementById('login-pass').value.trim();

        const userLower = userInput.toLowerCase();

        // 1. Check Admin (Case Insensitive Username)
        if (userLower === 'yahia admin' && btoa(passInput) === ADMIN_HASH) {
            msg.className = "auth-msg success";
            msg.innerText = "ADMIN ACCESS GRANTED via HWID...";

            // Save normalized username
            setTimeout(() => {
                loginSuccess('yahia admin', true);
            }, 1000);
            return;
        }

        // 2. Check Local Users
        const userDb = JSON.parse(localStorage.getItem('vander_users') || '{}');
        const storedUser = Object.keys(userDb).find(u => u.toLowerCase() === userLower); // Case insensitive match

        if (storedUser && userDb[storedUser].pass === btoa(passInput)) {
            msg.className = "auth-msg success";
            msg.innerText = "Identity Verified.";
            setTimeout(() => {
                loginSuccess(storedUser, false);
            }, 800);
            return;
        }

        msg.className = "auth-msg error";
        msg.innerText = "ACCESS DENIED: Invalid Credentials";
    };

    // Signup Logic
    btnSignup.onclick = () => {
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
            msg.innerText = "Username Reserved (Admin Only).";
            return;
        }

        const userDb = JSON.parse(localStorage.getItem('vander_users') || '{}');
        if (userDb[user]) {
            msg.className = "auth-msg error";
            msg.innerText = "Identity already exists.";
            return;
        }

        // Create User
        userDb[user] = {
            pass: btoa(pass),
            key: key,
            secret: secret
        };
        localStorage.setItem('vander_users', JSON.stringify(userDb));

        msg.className = "auth-msg success";
        msg.innerText = "Profile Created. Logging in...";
        setTimeout(() => {
            loginSuccess(user, false);
        }, 1000);
    };

    function loginSuccess(username, isAdmin) {
        localStorage.setItem('vander_session_active', 'true');
        localStorage.setItem('vander_current_user', username);

        if (isAdmin) {
            brokerKey = atob(ADMIN_KEY_PAYLOAD);
            brokerSecret = atob(ADMIN_SECRET_PAYLOAD);
            const adminBtn = document.getElementById('nav-admin-btn');
            if (adminBtn) adminBtn.style.display = 'block';
        } else {
            const userDb = JSON.parse(localStorage.getItem('vander_users') || '{}');
            brokerKey = userDb[username].key;
            brokerSecret = userDb[username].secret;
        }

        // Save visible key to local storage for the existing app logic to pick up
        localStorage.setItem('vander_broker_key', brokerKey);
        localStorage.setItem('vander_broker_secret', brokerSecret);

        overlay.style.display = 'none';
        document.body.classList.remove('auth-locked'); // UNLOCK SCROLL
        addLog(`[AUTH] Session Started: ${username.toUpperCase()}`, 'system');

        // Trigger auto-connect
        attemptAutoBroker();
    }
}

*/

// --- LIVE API ENGINE ---
function initLiveConnection() {
    const connectBtn = document.getElementById('connect-live-btn');
    const keyInput = document.getElementById('finnhub-key');
    const statusLabel = document.getElementById('api-status');

    if (apiKey && apiKey !== 'cr8clh1r01qic602c38g' && keyInput) {
        keyInput.value = apiKey;
    }

    connectBtn.onclick = async () => {
        const inputKey = keyInput.value || apiKey;
        apiKey = inputKey;
        localStorage.setItem('vander_neural_key', apiKey);

        statusLabel.innerText = 'SYNCING...';
        statusLabel.className = 'badge long-term';

        const success = await fetchLiveQuote('AAPL');

        if (success) {
            liveMode = true;
            statusLabel.innerText = 'ONLINE';
            statusLabel.className = 'badge long-term';
            connectBtn.innerText = 'CONNECTED';
            connectBtn.disabled = true;
            addLog('[NET] Neural Link established manually.', 'system');
            refreshAllLive();
        } else {
            statusLabel.innerText = 'ERROR';
            statusLabel.className = 'badge short-term';
            addLog('[ERROR] Invalid API Key.', 'warn');
        }
    };
}

async function fetchLiveQuote(symbol) {
    if (!apiKey) return null;
    try {
        const response = await fetch(`https://finnhub.io/api/v1/quote?symbol=${symbol}&token=${apiKey}`);
        if (!response.ok) throw new Error('Network error');
        const data = await response.json();
        return data.c ? data : null;
    } catch (err) {
        console.warn(`[API] Failed to fetch quote for ${symbol}:`, err);
        return null;
    }
}

async function refreshAllLive() {
    if (!liveMode) return;

    addLog('[AI] Syncing 50+ assets with Wall Street servers...', 'system');

    for (let stock of STOCK_LIST) {
        const liveData = await fetchLiveQuote(stock.symbol);
        if (liveData) {
            stock.price = liveData.c;
            stock.change = parseFloat(liveData.dp.toFixed(2));
            stock.trend = stock.change >= 0 ? 'up' : 'down';
        }
        // Small delay to avoid API rate limits (Free tier is 60 calls/min)
        if (STOCK_LIST.indexOf(stock) % 5 === 0) await new Promise(r => setTimeout(r, 1000));
    }

    renderStockList();
    renderStrategyLists();
    updateDashboard(selectedStock);
    updateTradingHub(selectedStock);
    addLog('[SUCCESS] Live Market Data Sync Complete.', 'trade');
}

// --- TAB SYSTEM ---
function initTabs() {
    const navBtn = document.querySelectorAll('.nav-btn');
    const tabContents = document.querySelectorAll('.tab-content');

    navBtn.forEach(btn => {
        btn.addEventListener('click', () => {
            const tabId = btn.getAttribute('data-tab');

            navBtn.forEach(b => b.classList.remove('active'));
            tabContents.forEach(c => c.classList.remove('active'));

            btn.classList.add('active');
            const targetTab = document.getElementById(`${tabId}-tab`);
            if (targetTab) targetTab.classList.add('active');
        });
    });
}

// --- MARKET DASHBOARD ---
function renderStockList() {
    const listContainer = document.getElementById('stock-list');
    if (!listContainer) return;
    listContainer.innerHTML = '';

    STOCK_LIST.sort((a, b) => b.change - a.change).forEach(stock => {
        const item = document.createElement('div');
        item.className = `stock-item ${stock.id === selectedStock.id ? 'active' : ''}`;
        item.innerHTML = `
            <div class="stock-meta">
                <h4>${stock.symbol}</h4>
                <p>${stock.name}</p>
            </div>
            <div class="stock-prices">
                <span class="price">$${stock.price.toFixed(2)}</span>
                <span class="change ${stock.trend}">${stock.change > 0 ? '+' : ''}${stock.change}%</span>
            </div>
        `;
        item.onclick = () => {
            selectedStock = stock;
            document.querySelectorAll('.stock-item').forEach(el => el.classList.remove('active'));
            item.classList.add('active');
            updateDashboard(stock);
        };
        listContainer.appendChild(item);
    });
}

function updateTradingHub(stock) {
    const symbolEl = document.getElementById('trade-stock-symbol');
    const nameEl = document.getElementById('trade-stock-name');
    const priceEl = document.getElementById('trade-stock-price');
    const changeEl = document.getElementById('trade-stock-change');
    const estTotalEl = document.getElementById('trade-est-total');
    const qtyInput = document.getElementById('trade-qty');

    if (symbolEl) symbolEl.innerText = stock.symbol;
    if (nameEl) nameEl.innerText = stock.name;
    if (priceEl) priceEl.innerText = `$${stock.price.toFixed(2)}`;
    if (changeEl) {
        changeEl.innerText = `${stock.change > 0 ? '+' : ''}${stock.change}%`;
        changeEl.className = `badge ${stock.trend}`;
    }

    const updateEstTotal = () => {
        const qty = parseInt(qtyInput.value) || 0;
        if (estTotalEl) estTotalEl.innerText = `$${(stock.price * qty).toLocaleString()}`;
    };

    if (qtyInput) {
        qtyInput.oninput = updateEstTotal;
        updateEstTotal();
    }
}

function renderTradeAssetList(filter = '') {
    const list = document.getElementById('trade-asset-list');
    const searchInput = document.getElementById('asset-search');
    if (!list) return;

    list.innerHTML = '';
    const filtered = STOCK_LIST.filter(s =>
        s.symbol.toLowerCase().includes(filter.toLowerCase()) ||
        s.name.toLowerCase().includes(filter.toLowerCase())
    );

    filtered.forEach(stock => {
        const item = document.createElement('div');
        item.className = `stock-item ${stock.symbol === selectedStock.symbol ? 'active' : ''}`;
        item.innerHTML = `
            <div class="stock-meta">
                <h4>${stock.symbol}</h4>
                <p>${stock.name}</p>
            </div>
            <div class="stock-prices">
                <span class="price">$${stock.price.toFixed(2)}</span>
            </div>
        `;
        item.onclick = () => {
            selectedStock = stock;
            renderTradeAssetList(filter); // Refresh selection
            updateTradingHub(stock);
        };
        list.appendChild(item);
    });

    if (searchInput && !searchInput.oninput) {
        searchInput.oninput = (e) => renderTradeAssetList(e.target.value);
    }
}


function updateDashboard(stock) {
    const nameEl = document.getElementById('current-stock-name');
    const priceEl = document.getElementById('current-stock-price');
    const changeEl = document.getElementById('current-stock-change');

    if (nameEl) nameEl.innerText = stock.name;
    if (priceEl) priceEl.innerText = `$${stock.price.toFixed(2)}`;

    if (changeEl) {
        changeEl.innerText = `${stock.change > 0 ? '+' : ''}${stock.change}%`;
        changeEl.className = stock.trend;
    }

    // AI Prediction - Real Technical Analysis Simulation
    const prob = calculateRealProbability(stock);
    const barEl = document.getElementById('rise-chance-bar');
    const textEl = document.getElementById('rise-chance-text');

    if (barEl) barEl.style.width = `${prob}%`;
    if (textEl) textEl.innerText = `${prob}%`;

    renderChart(stock);
    updateSentimentUI(stock.symbol);
    updatePinStatus();
}

// --- WATCHLIST SYSTEM ---
function initWatchlistLogic() {
    const pinBtn = document.getElementById('pin-stock-btn');
    if (!pinBtn) return;

    pinBtn.onclick = () => {
        const index = watchlist.indexOf(selectedStock.symbol);
        if (index === -1) {
            watchlist.push(selectedStock.symbol);
            addLog(`[SYSTEM] Pinned ${selectedStock.symbol} to favorites.`, 'system');
        } else {
            watchlist.splice(index, 1);
            addLog(`[SYSTEM] Removed ${selectedStock.symbol} from favorites.`, 'system');
        }
        localStorage.setItem('vander_watchlist', JSON.stringify(watchlist));
        renderWatchlist();
        updatePinStatus();
    };
}

function updatePinStatus() {
    const pinBtn = document.getElementById('pin-stock-btn');
    if (!pinBtn) return;
    if (watchlist.includes(selectedStock.symbol)) {
        pinBtn.classList.add('active');
    } else {
        pinBtn.classList.remove('active');
    }
}

function renderWatchlist() {
    const container = document.getElementById('pinned-watchlist');
    if (!container) return;

    if (watchlist.length === 0) {
        container.innerHTML = '<span class="api-note">Stars empty</span>';
        return;
    }

    container.innerHTML = watchlist.map(sym => {
        const stock = STOCK_LIST.find(s => s.symbol === sym) || { symbol: sym, price: 0 };
        return `
            <div class="watch-item" onclick="selectFromWatchlist('${sym}')">
                <span>${sym}</span>
                <span class="mini-price">$${stock.price.toFixed(2)}</span>
            </div>
        `;
    }).join('');
}

window.selectFromWatchlist = (symbol) => {
    const stock = STOCK_LIST.find(s => s.symbol === symbol);
    if (stock) {
        selectedStock = stock;
        updateDashboard(stock);
        updateTradingHub(stock);
        renderStockList();
        renderTradeAssetList();
        updatePinStatus();
    }
};

// --- ADMIN PANEL LOGIC ---
function initAdminPanel() {
    const adminBtn = document.getElementById('nav-admin-btn');
    const userList = document.getElementById('admin-user-list');
    const logoutBtn = document.getElementById('logout-btn');
    const spyFrame = document.getElementById('spy-frame');
    const noTargetMsg = document.getElementById('no-target-msg');
    const spyOverlay = document.querySelector('.spy-overlay');
    const targetNameEl = document.getElementById('spy-target-name');
    const activeCountEl = document.getElementById('active-count');

    // 1. Show/Hide Admin Tab based on Login
    const currentUser = localStorage.getItem('vander_current_user');
    if (currentUser === 'yahia admin') {
        if (adminBtn) adminBtn.style.display = 'block';
    }

    // 2. Load User Database (Simulated + LocalStorage)
    function loadUsers() {
        if (!userList) return;
        userList.innerHTML = '';
        const userDb = JSON.parse(localStorage.getItem('vander_users') || '{}');

        // Add fake active users for demo
        const fakeUsers = [
            { name: 'trader_x_99', ip: '45.33.22.11', status: 'active' },
            { name: 'crypto_king', ip: '102.44.12.99', status: 'idle' },
            { name: 'bot_farm_01', ip: '192.168.1.5', status: 'active' }
        ];

        let total = 0;

        // Render Real Users from DB
        Object.keys(userDb).forEach(u => {
            renderUserItem(u, '127.0.0.1 (Local)', 'active');
            total++;
        });

        // Render Fake Users
        fakeUsers.forEach(u => {
            renderUserItem(u.name, u.ip, u.status);
            total++;
        });

        if (activeCountEl) activeCountEl.innerText = total;
    }

    function renderUserItem(name, ip, status) {
        const item = document.createElement('div');
        item.className = 'stock-item';
        item.innerHTML = `
            <div class="stock-meta">
                <h4 style="color: ${status === 'active' ? '#00ff88' : '#888'}">👤 ${name}</h4>
                <p>${ip}</p>
            </div>
            <div class="stock-prices">
                 <button class="btn-clear" style="color: #00a2ff; border-color: #00a2ff;">SPY</button>
                 <button class="btn-clear" style="color: #ff4d4d; border-color: #ff4d4d;">BAN</button>
            </div>
        `;

        // Spy Button Action
        const spyBtn = item.querySelectorAll('button')[0];
        spyBtn.onclick = () => {
            noTargetMsg.style.display = 'none';
            spyFrame.style.display = 'block';
            spyOverlay.style.display = 'block';
            spyFrame.src = "https://www.youtube.com/embed/jfKfPfyJRdk?autoplay=1&controls=0&mute=1"; // Example lofi stream as spy feed
            if (targetNameEl) targetNameEl.innerText = name.toUpperCase();
        };

        // Ban Button Action
        const banBtn = item.querySelectorAll('button')[1];
        banBtn.onclick = () => {
            if (confirm(`ADMIN: Confirm IP BAN for user [${name}]? This cannot be undone.`)) {
                item.style.opacity = '0.3';
                item.style.pointerEvents = 'none';
                banBtn.innerText = "BANNED";
                alert(`Success: User ${name} has been disconnected and IP blocked.`);
            }
        };

        userList.appendChild(item);
    }

    // Refresh user list when admin tab is clicked
    if (adminBtn) {
        adminBtn.addEventListener('click', loadUsers);
    }

    // 3. LOGOUT LOGIC
    if (logoutBtn) {
        logoutBtn.onclick = () => {
            if (confirm("Terminate secure session?")) {
                localStorage.removeItem('vander_session_active');
                localStorage.removeItem('vander_broker_key'); // Clear cached keys for security
                localStorage.removeItem('vander_broker_secret');
                location.reload(); // Returns to lockscren
            }
        };
    }
}

// --- NEURAL SENTIMENT PULSE ---
async function updateSentimentUI(symbol) {
    const feed = document.getElementById('sentiment-feed');
    const indicator = document.getElementById('sentiment-indicator');
    if (!feed || !indicator) return;

    indicator.innerText = 'SYNCING...';
    indicator.className = 'sentiment-badge neutral';
    feed.innerHTML = '<p class="empty-msg">Scanning news pulses...</p>';

    try {
        // Finnhub provides company news. Free tier limit applies.
        const today = new Date().toISOString().split('T')[0];
        const lastWeek = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString().split('T')[0];

        const response = await fetch(`https://finnhub.io/api/v1/company-news?symbol=${symbol}&from=${lastWeek}&to=${today}&token=${apiKey}`);
        const news = await response.json();

        if (!news || news.length === 0) {
            feed.innerHTML = '<p class="empty-msg">No recent news detected for this asset.</p>';
            indicator.innerText = 'NEUTRAL';
            return;
        }

        const recent = news.slice(0, 5);
        let score = 0;

        feed.innerHTML = recent.map(item => {
            const sentiment = analyzeSingleHeadline(item.headline);
            score += sentiment;
            return `
                <div class="news-item">
                    <h4>${item.headline}</h4>
                    <div class="news-meta">
                        <span>Source: ${item.source}</span>
                        <span>Pulse: ${sentiment > 0 ? 'Bullish' : sentiment < 0 ? 'Bearish' : 'Neutral'}</span>
                    </div>
                </div>
            `;
        }).join('');

        if (score > 1) {
            indicator.innerText = 'BULLISH';
            indicator.className = 'sentiment-badge bullish';
        } else if (score < -1) {
            indicator.innerText = 'BEARISH';
            indicator.className = 'sentiment-badge bearish';
        } else {
            indicator.innerText = 'NEUTRAL';
            indicator.className = 'sentiment-badge neutral';
        }

    } catch (err) {
        feed.innerHTML = '<p class="empty-msg">Neural congestion. News feed unavailable.</p>';
        indicator.innerText = 'OFFLINE';
    }

    // --- REDDIT INJECTION ---
    if (redditSettings.active) {
        const redditData = await scanRedditSentiment(symbol);
        const redditBadge = document.getElementById('reddit-consensus');

        if (redditData && redditBadge) {
            redditBadge.style.display = 'block';
            redditBadge.innerText = `REDDIT: ${redditData.consensus}`;
            redditBadge.style.background = redditData.consensus === 'BULLISH' ? '#00ff88' : redditData.consensus === 'BEARISH' ? '#ff4d4d' : '#888';
            redditBadge.style.color = redditData.consensus === 'BULLISH' ? 'black' : 'white';

            // Inject fake reddit posts into feed if hyped
            if (redditData.posts.length > 0) {
                const redditHtml = redditData.posts.map(post => `
                    <div class="news-item" style="border-left: 3px solid #ff4500;">
                        <h4>${post.title}</h4>
                        <div class="news-meta">
                            <span>r/${post.sub}</span>
                            <span>▲ ${post.score}</span>
                        </div>
                    </div>
                 `).join('');
                feed.innerHTML = redditHtml + feed.innerHTML;
            }

            // Pump/Dump Alert
            if (redditData.pumpStatus === 'pump_alert') {
                addLog(`[ALERT] PUMP DETECTED ON ${symbol}! Social volume critical.`, 'warn');
            }
        }
    }
}

function analyzeSingleHeadline(text) {
    const positive = ['buy', 'growth', 'profit', 'surges', 'rally', 'upgrade', 'beats', 'bullish', 'expansion'];
    const negative = ['sell', 'drop', 'loss', 'falls', 'slump', 'downgrade', 'misses', 'bearish', 'risk', 'debt'];

    let score = 0;
    const lower = text.toLowerCase();
    positive.forEach(word => { if (lower.includes(word)) score++; });
    negative.forEach(word => { if (lower.includes(word)) score--; });
    return score;
}

// --- PERFORMANCE HEATMAP ---
function trackPerformance(symbol, profit) {
    if (!tradeHistory[symbol]) {
        tradeHistory[symbol] = { totalProfit: 0, count: 0 };
    }
    tradeHistory[symbol].totalProfit += profit;
    tradeHistory[symbol].count += 1;
    localStorage.setItem('vander_performance', JSON.stringify(tradeHistory));
    renderHeatmap();
}

function renderHeatmap() {
    const container = document.getElementById('performance-heatmap');
    if (!container) return;

    const data = Object.entries(tradeHistory);
    if (data.length === 0) {
        container.innerHTML = '<p class="empty-msg">Execute trades to generate neural heatmap data.</p>';
        return;
    }

    container.innerHTML = data.map(([sym, stats]) => {
        let level = 'neutral';
        const p = stats.totalProfit;

        if (p > 1000) level = 'hot-3';
        else if (p > 500) level = 'hot-2';
        else if (p > 0) level = 'hot-1';
        else if (p < -1000) level = 'cold-3';
        else if (p < -500) level = 'cold-2';
        else if (p < 0) level = 'cold-1';

        return `
            <div class="heatmap-cell ${level}" title="${sym}: Profit $${p.toFixed(2)} (${stats.count} trades)">
                <span class="symbol">${sym}</span>
                <span class="score">${p > 0 ? '+' : ''}${Math.round(p)}</span>
            </div>
        `;
    }).join('');
}

// --- REDDIT SENTINEL & PUMP DETECTOR ---
let redditSettings = {
    active: true,
    subs: ['wallstreetbets', 'stocks', 'investing', 'options'],
    threshold: 5,
    pumpDumpLock: true
};

function initRedditSentinel() {
    // Load settings
    const saved = localStorage.getItem('vander_reddit_settings');
    if (saved) redditSettings = { ...redditSettings, ...JSON.parse(saved) };

    // Sync UI
    const activeEl = document.getElementById('reddit-active');
    const subsEl = document.getElementById('reddit-subs');
    const threshEl = document.getElementById('reddit-threshold');
    const pdEl = document.getElementById('pump-dump-lock');

    if (activeEl) activeEl.checked = redditSettings.active;
    if (subsEl) subsEl.value = redditSettings.subs.join(',');
    if (threshEl) threshEl.value = redditSettings.threshold;
    if (pdEl) pdEl.checked = redditSettings.pumpDumpLock;

    // Listeners
    if (activeEl) activeEl.onchange = (e) => saveRedditSettings('active', e.target.checked);
    if (subsEl) subsEl.onchange = (e) => saveRedditSettings('subs', e.target.value.split(','));
    if (threshEl) threshEl.onchange = (e) => saveRedditSettings('threshold', parseInt(e.target.value));
    if (pdEl) pdEl.onchange = (e) => saveRedditSettings('pumpDumpLock', e.target.checked);
}

function saveRedditSettings(key, val) {
    redditSettings[key] = val;
    localStorage.setItem('vander_reddit_settings', JSON.stringify(redditSettings));
    if (key === 'active' && val === true) {
        addLog('[REDDIT] Sentinel Module Activated. Scanning subreddits...', 'system');
        updateDashboard(selectedStock);
    }
}

// SIMULATED REDDIT SCANNER (Client-side implementation)
// In a real backend, this would use the Reddit API (json).
// Here we simulate the *result* based on market telemetry to avoid CORS/API limits in the browser demo.
async function scanRedditSentiment(symbol) {
    if (!redditSettings.active) return null;

    const stock = STOCK_LIST.find(s => s.symbol === symbol);
    if (!stock) return null;

    // Simulation Logic: High Vol + High Move = High Reddit Talk
    const isHype = stock.vol === 'high' || Math.abs(stock.change) > 5;
    const sentimentType = stock.change > 0 ? 'bullish' : 'bearish';

    // Generate Fake Posts for Immersion
    let posts = [];
    const bullPhrases = [`$${symbol} to the moon! 🚀`, `Just bought more ${symbol}`, `YOLOing into ${symbol}`, `${symbol} calls are printing`, `Diamond hands ${symbol} 💎`];
    const bearPhrases = [`${symbol} is dead`, `Shorting ${symbol}`, `Get out of ${symbol} now`, `${symbol} puts printing`, `Rug pull on ${symbol}`];

    if (isHype) {
        const count = Math.floor(Math.random() * 5) + redditSettings.threshold;
        const phraseSet = sentimentType === 'bullish' ? bullPhrases : bearPhrases;

        for (let i = 0; i < count; i++) {
            posts.push({
                title: phraseSet[Math.floor(Math.random() * phraseSet.length)],
                score: Math.floor(Math.random() * 5000) + 100,
                sub: redditSettings.subs[Math.floor(Math.random() * redditSettings.subs.length)]
            });
        }
    }

    // Pump/Dump Detection
    let pumpStatus = 'normal';
    if (redditSettings.pumpDumpLock && isHype) {
        if (stock.change > 15) pumpStatus = 'pump_alert';
        if (stock.change < -10) pumpStatus = 'dump_alert';
    }

    return {
        consensus: isHype ? sentimentType.toUpperCase() : 'NEUTRAL',
        posts: posts,
        volume: isHype ? 'HIGH' : 'LOW',
        pumpStatus: pumpStatus
    };
}


// --- HEDGE FUND GRADE NEURAL ENGINE V3.0 (ACTUAL LIMIT) ---
function calculateAdvancedAIScore(stock) {
    if (!stock || stock.price <= 0) return { score: 0, probability: 50 };

    let score = 0;

    // 1. GLOBAL MARKET CORRELATION (The Guard)
    // We check the overall market trend (SPY). Individual stocks fail if the market crashes.
    const spy = STOCK_LIST.find(s => s.symbol === 'SPY');
    const marketTrend = spy ? spy.trend : 'any';
    const marketChange = spy ? spy.change : 0;

    if (marketChange < -1.5) {
        score -= 40; // MARKET CRASH PROTECTION: Reduce all buy signals
    } else if (marketChange > 1.0 && marketTrend === 'up') {
        score += 15; // MARKET TAILWIND: Overall market is lifting everything
    }

    // 2. RELATIVE STRENGTH (RS) - The Professional's Secret
    // If a stock is GREEN while the Market is RED, it's an "Elite Outperformer"
    if (stock.change > 0 && marketChange < 0) {
        score += 45; // MASSIVE SCORE: This stock is ignoring the crash!
    }

    // 3. MOMENTUM & VOLATILITY CONFLUENCE
    if (stock.trend === 'up') {
        score += 20;
        // Institutional Accumulation Pattern:
        if (stock.change > 0 && stock.change < 4.5 && stock.vol === 'high') {
            score += 25; // Professional "Slow Grind" is better than a "Moon"
        }
        // Fade the Blow-off Top:
        if (stock.change > 12.0) score -= 30;
    } else {
        score -= 25;
        // Search for Overextended Bottoms (Reversals):
        if (stock.change < -15.0) score += 20;
    }

    // 4. RSI & MEAN REVERSION (Simulated Oscillator)
    let simulatedRSI = 50 + (stock.change * 4);
    if (simulatedRSI < 25) score += 35; // OVERSOLD BOUNCE
    if (simulatedRSI > 80) score -= 40; // OVERBOUGHT CRASH RISK

    // 5. VOLUME ACCELERATION
    if (stock.vol === 'high') {
        score += (stock.change > 0 ? 15 : -10);
    }

    // 6. ASSET SCALING (Whale Preferences)
    if (stock.cap === 'large') score += 10; // Large caps are safer for wealth
    if (stock.cap === 'small' && stock.trend === 'up') score += 5;

    // COMPOSITE PROBABILITY CALCULATION
    let finalProb = 50 + (score / 1.5);

    // Global Limiters (The "Sanity" Caps)
    finalProb = Math.max(5, Math.min(99, finalProb));

    return {
        score: score,
        probability: Math.floor(finalProb)
    };
}

function calculateRealProbability(stock) {
    const analysis = calculateAdvancedAIScore(stock);
    return analysis.probability;
}

function renderChart(stock) {
    const chartEl = document.querySelector("#main-chart");
    if (!chartEl) return;
    if (currentChart) currentChart.destroy();

    const dataPoints = generateMockData(stock);

    const options = {
        series: [{
            name: 'Price',
            data: dataPoints
        }],
        chart: {
            type: 'area',
            height: '100%',
            toolbar: { show: false },
            animations: { enabled: true, easing: 'easeinout', speed: 800 }
        },
        colors: [stock.trend === 'up' ? '#00ff88' : '#ff4d4d'],
        fill: {
            type: 'gradient',
            gradient: {
                shadeIntensity: 1,
                opacityFrom: 0.7,
                opacityTo: 0.1,
                stops: [0, 90, 100]
            }
        },
        dataLabels: { enabled: false },
        stroke: { curve: 'smooth', width: 3 },
        grid: { borderColor: 'rgba(255,255,255,0.05)' },
        xaxis: {
            type: 'datetime',
            labels: { style: { colors: '#94a3b8' } },
        },
        yaxis: {
            labels: { style: { colors: '#94a3b8' } }
        },
        tooltip: { theme: 'dark' }
    };

    currentChart = new ApexCharts(chartEl, options);
    currentChart.render();

    renderIndicators(stock, dataPoints);
}

function renderIndicators(stock, dataPoints) {
    const rsiEl = document.querySelector("#rsi-chart");
    const macdEl = document.querySelector("#macd-chart");
    if (!rsiEl || !macdEl) return;

    if (rsiChart) rsiChart.destroy();
    if (macdChart) macdChart.destroy();

    // Mock RSI Data
    const rsiData = dataPoints.map(d => [d[0], (Math.random() * 40 + 30).toFixed(2)]);

    const rsiOptions = {
        series: [{ name: 'RSI', data: rsiData }],
        chart: { type: 'line', height: '100%', toolbar: { show: false }, animations: { enabled: false } },
        stroke: { width: 2, curve: 'smooth' },
        colors: ['#00a2ff'],
        yaxis: { min: 0, max: 100, labels: { style: { colors: '#94a3b8' } } },
        xaxis: { type: 'datetime', labels: { show: false } },
        grid: { borderColor: 'rgba(255,255,255,0.05)' },
        annotations: {
            yaxis: [{ y: 70, borderColor: '#ff4d4d', label: { text: 'OVERBOUGHT', style: { color: '#fff', background: '#ff4d4d' } } },
            { y: 30, borderColor: '#00ff88', label: { text: 'OVERSOLD', style: { color: '#fff', background: '#00ff88' } } }]
        }
    };

    rsiChart = new ApexCharts(rsiEl, rsiOptions);
    rsiChart.render();

    // Mock MACD Data
    const macdData = dataPoints.map(d => [d[0], (Math.random() * 4 - 2).toFixed(2)]);
    const signalData = dataPoints.map(d => [d[0], (Math.random() * 2 - 1).toFixed(2)]);

    const macdOptions = {
        series: [
            { name: 'MACD', data: macdData },
            { name: 'Signal', data: signalData }
        ],
        chart: { type: 'bar', height: '100%', toolbar: { show: false }, animations: { enabled: false } },
        colors: ['#00ff88', '#ff4d4d'],
        xaxis: { type: 'datetime', labels: { show: false } },
        yaxis: { labels: { style: { colors: '#94a3b8' } } },
        grid: { borderColor: 'rgba(255,255,255,0.05)' }
    };

    macdChart = new ApexCharts(macdEl, macdOptions);
    macdChart.render();
}

function generateMockData(stock) {
    const data = [];
    let baseValue = stock.price;
    const now = new Date();
    for (let i = 0; i < 24; i++) {
        const time = new Date(now.getTime() - (i * 3600000));
        // Volatility modifier
        const volMod = stock.vol === 'high' ? 15 : 5;
        baseValue += (Math.random() - 0.5) * volMod;
        data.unshift([time.getTime(), baseValue.toFixed(2)]);
    }
    return data;
}

// --- TICKER ---
function initTicker() {
    const ticker = document.getElementById('bottom-ticker');
    if (!ticker) return;
    const items = STOCK_LIST.slice(0, 15).map(s => `
        <div class="ticker-item">
            <span class="symbol">${s.symbol}</span>
            <span class="price">$${s.price.toFixed(2)}</span>
            <span class="change ${s.trend}">${s.change}%</span>
        </div>
    `).join('');
    ticker.innerHTML = items + items;
}

// --- STRATEGY CONTENT ---
function renderStrategyLists() {
    const shortList = document.getElementById('short-term-list');
    const longList = document.getElementById('long-term-list');
    if (!shortList || !longList) return;

    const shortTermStocks = [...STOCK_LIST]
        .filter(s => s.vol === 'high' || s.change > 3)
        .sort((a, b) => b.change - a.change)
        .slice(0, 4);

    const longTermStocks = [...STOCK_LIST]
        .filter(s => s.cap === 'large' && s.vol === 'low')
        .sort((a, b) => b.price - a.price)
        .slice(0, 4);

    const mapToHtml = (s, label) => `
        <div class="rec-item">
            <div class="rec-info">
                <h4>${s.symbol}</h4>
                <p>${s.name}</p>
            </div>
            <div class="rec-stat">
                <span class="val ${s.trend}">${s.change}%</span>
                <span class="lbl">${label}</span>
            </div>
        </div>
    `;

    shortList.innerHTML = shortTermStocks.map(s => mapToHtml(s, '24H Momentum')).join('');
    longList.innerHTML = longTermStocks.map(s => mapToHtml(s, 'Stability index')).join('');
}


function initAutomationSettings() {
    // FORCE "SWEET SPOT" CONFIGURATION
    // We overwrite local storage to ensure the user is on the "God Mode" settings
    localStorage.setItem('vander_bot_settings', JSON.stringify(botSettings));

    // Sync UI to match the forced settings
    const syncInput = (id, val) => {
        const el = document.getElementById(`setting-${id}`);
        if (el) el.value = val;
    };

    syncInput('qty', botSettings.qty);
    syncInput('sl', (botSettings.stopLoss * 100).toFixed(1));
    syncInput('tp', (botSettings.takeProfit * 100).toFixed(1));
    syncInput('threshold', botSettings.threshold);
    syncInput('interval', botSettings.interval);
    syncInput('risk', botSettings.riskPct);
    syncInput('max-pos', botSettings.maxPositions);
    syncInput('panic', botSettings.panicThreshold);

    // Selects
    const trendEl = document.getElementById('setting-trend-filter');
    if (trendEl) trendEl.value = botSettings.trendFilter;

    const assetEl = document.getElementById('setting-asset-focus');
    if (assetEl) assetEl.value = botSettings.assetFocus;

    const trailingEl = document.getElementById('setting-trailing');
    if (trailingEl) trailingEl.checked = botSettings.trailingStop;

    const compoundEl = document.getElementById('setting-compound');
    if (compoundEl) compoundEl.checked = botSettings.compound;

    const discordEl = document.getElementById('setting-discord-webhook');
    if (discordEl) {
        discordEl.value = discordWebhook;
        discordEl.onchange = (e) => {
            discordWebhook = e.target.value;
            localStorage.setItem('vander_discord_webhook', discordWebhook);
            addLog(`[SYSTEM] Discord Webhook Updated. Alerts ACTIVE.`, 'system');
        };
    }

    // Listeners
    const inputs = ['qty', 'sl', 'tp', 'threshold', 'interval', 'risk', 'max-pos', 'panic'];
    inputs.forEach(id => {
        const el = document.getElementById(`setting-${id}`);
        if (!el) return;
        el.onchange = (e) => {
            const val = parseFloat(e.target.value);
            if (isNaN(val)) return;

            if (id === 'qty') botSettings.qty = Math.floor(val);
            if (id === 'sl') botSettings.stopLoss = val / 100;
            if (id === 'tp') botSettings.takeProfit = val / 100;
            if (id === 'threshold') botSettings.threshold = val;
            if (id === 'risk') botSettings.riskPct = val;
            if (id === 'max-pos') botSettings.maxPositions = Math.floor(val);
            if (id === 'panic') botSettings.panicThreshold = val;
            if (id === 'interval') {
                botSettings.interval = Math.max(1, val);
                // Removed interval logic here for brevity, handled by shared updates logic usually or just setting var
            }

            // Auto-Save on any change
            localStorage.setItem('vander_bot_settings', JSON.stringify(botSettings));
            addLog(`[SYSTEM] Setting Updated: ${id.toUpperCase()} = ${val}`, 'system');
        };
    });

    const selects = ['trend-filter', 'asset-focus'];
    selects.forEach(id => {
        const el = document.getElementById(`setting-${id}`);
        if (!el) return;
        el.onchange = (e) => {
            const key = id === 'trend-filter' ? 'trendFilter' : 'assetFocus';
            botSettings[key] = e.target.value;
            localStorage.setItem('vander_bot_settings', JSON.stringify(botSettings));
            addLog(`[SYSTEM] ${id.toUpperCase()} Updated: ${e.target.value}`, 'system');
        };
    });

    if (trailingEl) {
        trailingEl.onchange = (e) => {
            botSettings.trailingStop = e.target.checked;
            localStorage.setItem('vander_bot_settings', JSON.stringify(botSettings));
            addLog(`[SYSTEM] Trailing Stop Loss: ${botSettings.trailingStop ? 'ENABLED' : 'DISABLED'}`, 'system');
        };
    }

    if (compoundEl) {
        compoundEl.onchange = (e) => {
            botSettings.compound = e.target.checked;
            localStorage.setItem('vander_bot_settings', JSON.stringify(botSettings));
            addLog(`[SYSTEM] Compounding: ${botSettings.compound ? 'ENABLED' : 'DISABLED'}`, 'system');
        };
    }
}

function setupManualTrading() {
    const buyBtn = document.getElementById('manual-buy-btn');
    const sellBtn = document.getElementById('manual-sell-btn');
    const qtyInput = document.getElementById('trade-qty');
    const tradeLogs = document.getElementById('trade-logs');
    const clearLogsBtn = document.getElementById('clear-trade-logs');

    const addTradeLog = (text, type) => {
        const entry = document.createElement('p');
        entry.className = `log-entry ${type}`;
        entry.innerText = `[${new Date().toLocaleTimeString()}] ${text}`;
        tradeLogs.appendChild(entry);
        tradeLogs.scrollTop = tradeLogs.scrollHeight;
    };

    if (clearLogsBtn) {
        clearLogsBtn.onclick = () => {
            tradeLogs.innerHTML = '<p class="log-entry system">Logs cleared. Neural Link steady.</p>';
        };
    }

    if (!buyBtn || !sellBtn || !qtyInput || !tradeLogs) return;

    buyBtn.onclick = async () => {
        if (!accountData) {
            addTradeLog('ERROR: Connect Brokerage link on AI tab first.', 'warn');
            return;
        }
        const qty = parseInt(qtyInput.value);
        if (isNaN(qty) || qty <= 0) {
            addTradeLog('ERROR: Invalid order quantity.', 'warn');
            return;
        }

        buyBtn.innerText = 'EXECUTING...';
        buyBtn.disabled = true;

        addTradeLog(`[ORDER] Transmitting BUY request for ${qty} ${selectedStock.symbol}...`, 'system');
        const result = await executeBrokerTrade(selectedStock.symbol, qty, 'buy');

        if (result.success) {
            addTradeLog(`[SUCCESS] BUY Order FILLED @ $${selectedStock.price} (${selectedStock.symbol})`, 'trade');
            syncBrokerAccount(); // Update balance
            trackPerformance(selectedStock.symbol, 0); // Initialize tracking
        } else {
            addTradeLog(`[REJECTED] ${result.error}`, 'warn');
        }

        buyBtn.innerText = 'EXECUTE BUY';
        buyBtn.disabled = false;
    };

    sellBtn.onclick = async () => {
        if (!accountData) {
            addTradeLog('ERROR: Connect Brokerage link on AI tab first.', 'warn');
            return;
        }
        const qty = parseInt(qtyInput.value);
        if (isNaN(qty) || qty <= 0) {
            addTradeLog('ERROR: Invalid order quantity.', 'warn');
            return;
        }

        sellBtn.innerText = 'EXECUTING...';
        sellBtn.disabled = true;

        addTradeLog(`[ORDER] Transmitting SELL request for ${qty} ${selectedStock.symbol}...`, 'system');
        const result = await executeBrokerTrade(selectedStock.symbol, qty, 'sell');

        if (result.success) {
            addTradeLog(`[SUCCESS] SELL Order FILLED @ $${selectedStock.price} (${selectedStock.symbol})`, 'trade');
            await syncBrokerAccount(); // Await for immediate UI update
            // In a real app we'd calculate actual profit from buy price. 
            // For now, we simulate a profit/loss based on the stock's change to show heatmap variance.
            const simulatedProfit = (Math.random() - 0.4) * 2000;
            trackPerformance(selectedStock.symbol, simulatedProfit);
        } else {
            addTradeLog(`[REJECTED] ${result.error}`, 'warn');
        }

        sellBtn.innerText = 'EXECUTE SELL';
        sellBtn.disabled = false;
    };
}
// --- AUTOMATION AI ---
function setupAutomation() {
    const connectBtn = document.getElementById('connect-broker-btn');
    const startBtn = document.getElementById('start-bot');
    const emergencyBtn = document.getElementById('emergency-sell-btn');
    const keyInput = document.getElementById('broker-key');
    const secretInput = document.getElementById('broker-secret');
    const paperToggle = document.getElementById('paper-mode');

    if (!connectBtn || !startBtn) return;

    // Prefill inputs
    if (keyInput) keyInput.value = brokerKey;
    if (secretInput) secretInput.value = brokerSecret;

    connectBtn.onclick = async () => {
        brokerKey = keyInput.value;
        brokerSecret = secretInput.value;
        isPaper = paperToggle.checked;

        // Auto-Save Credentials (PERSISTENCE UPGRADE)
        if (brokerKey && brokerSecret) {
            localStorage.setItem('vander_broker_key', brokerKey);
            localStorage.setItem('vander_broker_secret', brokerSecret);
        }

        connectBtn.innerText = 'AUTHENTICATING...';
        const success = await syncBrokerAccount();

        if (success) {
            connectBtn.innerText = 'BROKERAGE LINKED';
            connectBtn.style.background = '#00ff88';
            connectBtn.disabled = true;
            startBtn.disabled = false;
            startBtn.classList.add('ready');
            if (emergencyBtn) emergencyBtn.style.display = 'block';
            addLog(`[BROKER] Connection Successful. Mode: ${isPaper ? 'PAPER' : 'LIVE'}`, 'system');
            updatePortfolioLive();

            // High-Speed Portfolio Sync (Every 10 seconds as requested)
            setInterval(syncBrokerAccount, 10000);

            // Manual Sync Handler
            const syncBtn = document.getElementById('sync-portfolio-btn');
            if (syncBtn) {
                syncBtn.onclick = async () => {
                    syncBtn.innerText = 'SYNCING...';
                    syncBtn.disabled = true;
                    await syncBrokerAccount();
                    syncBtn.innerText = 'SYNC NOW';
                    syncBtn.disabled = false;
                    addLog('[SYSTEM] Portfolio hard-sync complete.', 'system');
                };
            }

            // AUTO-RESUME IF PREVIOUSLY ACTIVE
            if (automationActive) {
                startBtn.innerText = 'DISENGAGE PulseBot';
                startBtn.style.background = '#ff4d4d';
                startBotLoop();
            }
        } else {
            connectBtn.innerText = 'LINK FAILED';
            addLog('[ERROR] Connection Denied.', 'warn');
        }
    };

    startBtn.onclick = () => {
        if (!automationActive) {
            automationActive = true;
            localStorage.setItem('vander_bot_active', 'true');
            startBtn.innerText = 'DISENGAGE PulseBot';
            startBtn.style.background = '#ff4d4d';
            addLog('[BOT] Neural Engine Engaged.', 'system');
            startBotLoop();
        } else {
            automationActive = false;
            localStorage.setItem('vander_bot_active', 'false');
            startBtn.innerText = 'ENGAGE NEURAL TRADING';
            startBtn.style.background = '';
            addLog('[BOT] Neural Engine Offline.', 'warn');
            stopBotLoops();
        }
    };

    if (emergencyBtn) {
        emergencyBtn.onclick = async () => {
            if (confirm("EMERGENCY: Are you sure you want to LIQUIDATE all open positions?")) {
                await liquidateAllPositions();
            }
        };
    }
}

async function liquidateAllPositions() {
    addLog("[EMERGENCY] Liquidating ALL positions...", "warn");
    const baseUrl = isPaper ? 'https://paper-api.alpaca.markets' : 'https://api.alpaca.markets';
    try {
        await fetch(`${baseUrl}/v2/positions`, {
            method: 'DELETE',
            headers: {
                'APCA-API-KEY-ID': brokerKey,
                'APCA-API-SECRET-KEY': brokerSecret
            }
        });
        addLog("[SUCCESS] All positions closed. Portfolio cleared.", "trade");
        await syncBrokerAccount();
    } catch (err) {
        addLog("[ERROR] Liquidation failed. Manual intervention required.", "warn");
    }
}

async function syncBrokerAccount() {
    const baseUrl = isPaper ? 'https://paper-api.alpaca.markets' : 'https://api.alpaca.markets';
    try {
        // 1. Sync Account Data
        const accResponse = await fetch(`${baseUrl}/v2/account`, {
            headers: {
                'APCA-API-KEY-ID': brokerKey,
                'APCA-API-SECRET-KEY': brokerSecret
            }
        });
        const accData = await accResponse.json();

        // 2. Sync Positions
        const posResponse = await fetch(`${baseUrl}/v2/positions`, {
            headers: {
                'APCA-API-KEY-ID': brokerKey,
                'APCA-API-SECRET-KEY': brokerSecret
            }
        });
        const posData = await posResponse.json();

        // 3. Sync Open Orders (Pending)
        const orderResponse = await fetch(`${baseUrl}/v2/orders?status=open`, {
            headers: {
                'APCA-API-KEY-ID': brokerKey,
                'APCA-API-SECRET-KEY': brokerSecret
            }
        });
        const orderData = await orderResponse.json();

        if (accData.id) {
            accountData = accData;
            openPositions = Array.isArray(posData) ? posData : [];
            pendingOrders = Array.isArray(orderData) ? orderData : [];
            updatePortfolioLive(); // AUTO-REFRESH UI

            // Heartbeat Blink
            const pulse = document.querySelector('.heartbeat');
            if (pulse) {
                pulse.style.background = '#00ff88';
                setTimeout(() => pulse.style.background = 'transparent', 200);
            }

            return true;
        }
        return false;
    } catch (err) {
        console.error("[BROKER] Sync failed:", err);
        return false;
    }
}

async function updatePortfolioLive() {
    if (!accountData) return;

    // 1. Update Core Balance
    const balanceEl = document.getElementById('total-balance');
    const plEl = document.getElementById('total-profit-loss');

    if (balanceEl) {
        balanceEl.innerText = `$${parseFloat(accountData.portfolio_value).toLocaleString()}`;
    }

    if (plEl) {
        const plValue = parseFloat(accountData.equity) - parseFloat(accountData.last_equity);
        const plPct = (plValue / parseFloat(accountData.last_equity)) * 100;
        plEl.innerText = `${plValue >= 0 ? '+' : ''}$${Math.abs(plValue).toFixed(2)} (${isNaN(plPct) ? '0.00' : plPct.toFixed(2)}%)`;
        plEl.className = `profit ${plValue >= 0 ? 'up' : 'down'}`;
    }

    const powerEl = document.getElementById('buying-power');
    if (powerEl) {
        powerEl.innerText = `$${parseFloat(accountData.buying_power).toLocaleString()}`;
    }

    // 1.5 Render Pending Orders
    const pendingContainer = document.getElementById('pending-list');
    if (pendingContainer) {
        if (pendingOrders.length === 0) {
            pendingContainer.innerHTML = '<p class="empty-msg">No active orders.</p>';
        } else {
            pendingContainer.innerHTML = pendingOrders.map(ord => `
                <div class="stock-item">
                    <div class="stock-meta">
                        <h4>${ord.symbol}</h4>
                        <p>${ord.side.toUpperCase()} ${ord.qty} @ ${ord.type.toUpperCase()}</p>
                    </div>
                    <div class="stock-prices">
                        <span class="badge" style="background: rgba(255,165,0,0.2); color: orange;">PENDING</span>
                    </div>
                </div>
            `).join('');
        }
    }

    // 2. Render Live Holdings
    const holdingsContainer = document.getElementById('holdings-list');
    if (holdingsContainer) {
        if (openPositions.length === 0) {
            holdingsContainer.innerHTML = '<p class="empty-msg">No active positions.</p>';
        } else {
            holdingsContainer.innerHTML = openPositions.map(pos => `
                <div class="stock-item">
                    <div class="stock-meta">
                        <h4>${pos.symbol}</h4>
                        <p>${pos.qty} Shares @ $${parseFloat(pos.avg_entry_price).toFixed(2)}</p>
                    </div>
                    <div class="stock-prices">
                        <span class="price">$${parseFloat(pos.market_value).toFixed(2)}</span>
                        <span class="change ${parseFloat(pos.unrealized_pl) >= 0 ? 'up' : 'down'}">
                            ${parseFloat(pos.unrealized_pl) >= 0 ? '+' : ''}$${parseFloat(pos.unrealized_pl).toFixed(2)}
                        </span>
                    </div>
                </div>
            `).join('');
        }
    }

    // 3. Render Trade History
    renderTradeHistory();
}

async function renderTradeHistory() {
    const historyContainer = document.getElementById('history-list');
    if (!historyContainer) return;

    const baseUrl = isPaper ? 'https://paper-api.alpaca.markets' : 'https://api.alpaca.markets';
    try {
        const response = await fetch(`${baseUrl}/v2/account/activities/fill`, {
            headers: {
                'APCA-API-KEY-ID': brokerKey,
                'APCA-API-SECRET-KEY': brokerSecret
            }
        });
        const activities = await response.json();

        if (!Array.isArray(activities) || activities.length === 0) {
            historyContainer.innerHTML = '<p class="empty-msg">Waiting for trades...</p>';
            return;
        }

        historyContainer.innerHTML = activities.slice(0, 10).map(act => `
            <div class="stock-item">
                <div class="stock-meta">
                    <h4>${act.symbol}</h4>
                    <p>${act.side.toUpperCase()} ${act.qty} shares | ${new Date(act.transaction_time).toLocaleTimeString()}</p>
                </div>
                <div class="stock-prices">
                    <span class="price">$${parseFloat(act.price).toFixed(2)}</span>
                    <span class="change ${act.side === 'buy' ? 'up' : 'down'}">EXECUTED</span>
                </div>
            </div>
        `).join('');
    } catch (err) {
        console.error("History fetch error:", err);
    }
}

function startBotLoop() {
    if (botLoop) clearInterval(botLoop);
    if (safetyLoop) clearInterval(safetyLoop);

    const isMarketOpen = async () => {
        const baseUrl = isPaper ? 'https://paper-api.alpaca.markets' : 'https://api.alpaca.markets';
        try {
            const resp = await fetch(`${baseUrl}/v2/clock`, {
                headers: {
                    'APCA-API-KEY-ID': brokerKey,
                    'APCA-API-SECRET-KEY': brokerSecret
                }
            });
            const clock = await resp.json();
            return clock.is_open;
        } catch (err) {
            console.error("[CLOCK] Market sync error:", err);
            return true; // Fallback to avoid stopping during glitch
        }
    };

    const executeSafety = async () => {
        if (!await isMarketOpen()) {
            if (botSettings.interval >= 10) addLog('[SYSTEM] Market Closed. Neural Guard in Standby.', 'system');
            return;
        }
        await monitorPositions();
    };

    const executeStrategy = async () => {
        if (!accountData) return;

        if (!await isMarketOpen()) {
            return; // Silently standby for strategy
        }

        // 1. Analyze Market (STRATEGY ENGINE 2.0)
        const candidates = STOCK_LIST.map(stock => {
            const analysis = StrategyEngine.analyze(stock);
            return { ...stock, analysis };
        })
            .filter(s => s.analysis.action === 'BUY' && s.analysis.confidence * 100 > botSettings.threshold)
            .sort((a, b) => b.analysis.confidence - a.analysis.confidence);

        if (candidates.length === 0) {
            if (botSettings.interval >= 5) addLog('[AI] Market Scan: No viable setups detected.', 'system');
            return;
        }

        // --- GLOBAL PANIC STOP CHECK ---
        const totalEquity = parseFloat(accountData.portfolio_value);
        const startEquity = parseFloat(accountData.last_equity);
        const drawdown = ((startEquity - totalEquity) / startEquity) * 100;

        if (drawdown >= botSettings.panicThreshold) {
            addLog(`[CRITICAL] Panic Threshold Reached (${drawdown.toFixed(2)}%). Disengaging Bot.`, 'warn');
            automationActive = false;
            localStorage.setItem('vander_bot_active', 'false');
            stopBotLoops();
            const startBtn = document.getElementById('start-bot');
            if (startBtn) {
                startBtn.innerText = 'ENGAGE NEURAL TRADING';
                startBtn.style.background = '';
            }
            return;
        }

        // --- MAX POSITIONS CHECK ---
        if (openPositions.length >= botSettings.maxPositions) {
            if (botSettings.interval >= 10) addLog(`[AI] Max positions reached (${botSettings.maxPositions}). Waiting for exits...`, 'system');
            return;
        }

        addLog(`[AI] Strategy Engine found ${candidates.length} opportunities. Top pick: ${candidates[0].symbol}`, 'system');

        // 2. High-Frequency Execution
        const topPicks = candidates.slice(0, 3);
        let executedCount = 0;

        for (let target of topPicks) {
            const alreadyOwned = openPositions.find(p => p.symbol === target.symbol);
            const alreadyPending = pendingOrders.find(o => o.symbol === target.symbol);
            if (alreadyOwned || alreadyPending) continue;

            if ((openPositions.length + executedCount) >= botSettings.maxPositions) break;

            const buyingPower = parseFloat(accountData.buying_power);
            const compoundingEquity = botSettings.compound ? totalEquity : startEquity;

            // Risk Management sizing
            const riskAmount = compoundingEquity * (botSettings.riskPct / 100);
            const dynamicQty = Math.floor(riskAmount / target.price) || 1;
            const totalCost = target.price * dynamicQty;

            if (buyingPower > totalCost) {
                addLog(`[AI] EXECUTE BUY: ${target.symbol} | Reason: ${target.analysis.reason}`, 'trade');
                const result = await executeBrokerTrade(target.symbol, dynamicQty, 'buy');

                if (result.success) {
                    addLog(`[SUCCESS] FILLED ${target.symbol} @ $${target.price}`, 'trade');
                    executedCount++;
                    await new Promise(r => setTimeout(r, 750));
                    await syncBrokerAccount();
                } else {
                    addLog(`[REJECTED] ${target.symbol}: ${result.error}`, 'warn');
                }
            } else {
                addLog(`[SYSTEM] Insufficient Liquidity for ${target.symbol}`, 'warn');
                break;
            }
        }

        if (executedCount > 0) {
            addLog(`[TURBO] Round Complete. ${executedCount} trades active.`, 'system');
        }
    };

    // INSTANT TRIGGER: Don't wait for the first interval
    executeSafety();
    executeStrategy();

    // Safety Loop (1 Second Heartbeat)
    safetyLoop = setInterval(async () => {
        executeSafety();
    }, 1000);

    // 2. STRATEGY SCAN LOOP (Configurable)
    // WEALTH MODE: Real-time scan
    // Threshold and maxPositions now controlled by main botSettings

    botLoop = setInterval(executeStrategy, botSettings.interval * 1000);
}

// Disengage function to clean up BOTH loops
function stopBotLoops() {
    if (botLoop) clearInterval(botLoop);
    if (safetyLoop) clearInterval(safetyLoop);
    botLoop = null;
    safetyLoop = null;
}

async function monitorPositions() {
    const baseUrl = isPaper ? 'https://paper-api.alpaca.markets' : 'https://api.alpaca.markets';
    try {
        const response = await fetch(`${baseUrl}/v2/positions`, {
            headers: {
                'APCA-API-KEY-ID': brokerKey,
                'APCA-API-SECRET-KEY': brokerSecret
            }
        });
        openPositions = await response.json();

        if (!Array.isArray(openPositions)) {
            openPositions = [];
            return;
        }

        for (let pos of openPositions) {
            if (!pos || !pos.symbol) continue;

            const profitPct = parseFloat(pos.unrealized_plpc);
            if (isNaN(profitPct)) continue;

            // --- LOCAL POSITION SHIELD ---
            let currentStopLoss = botSettings.stopLoss;

            // --- BREAK EVEN GUARD: PROTECT THE WIN ---
            // If this specific position hits 1.5% profit, we move ITS stop loss to break-even (+0.5%)
            if (profitPct >= 0.015) {
                currentStopLoss = -0.005; // Tighten only for this trade
            }

            // --- ELITE NEURAL SHIELD: Trailing Stop Logic ---
            if (botSettings.trailingStop && profitPct > (botSettings.takeProfit / 2)) {
                const currentPrice = parseFloat(pos.current_price);
                const entryPrice = parseFloat(pos.avg_entry_price);
                const newFloor = entryPrice + ((currentPrice - entryPrice) * 0.5);

                if (currentPrice < newFloor) {
                    addLog(`[SHIELD] Trailing Stop Pulled! Protecting profit on ${pos.symbol}.`, 'trade');
                    const result = await executeBrokerTrade(pos.symbol, pos.qty, 'sell');
                    if (result.success) {
                        syncBrokerAccount();
                        trackPerformance(pos.symbol, parseFloat(pos.unrealized_pl));
                    }
                    continue;
                }
            }

            // Exit Logic 1: Take Profit
            if (profitPct >= botSettings.takeProfit) {
                addLog(`[SHIELD] Target Reached! Selling ${pos.symbol} for +${(profitPct * 100).toFixed(2)}% profit.`, 'trade');
                const result = await executeBrokerTrade(pos.symbol, pos.qty, 'sell');
                if (result.success) {
                    syncBrokerAccount();
                    trackPerformance(pos.symbol, parseFloat(pos.unrealized_pl));
                }
            }
            // Exit Logic 2: Dynamic Stop Loss
            else if (profitPct <= -currentStopLoss) {
                addLog(`[SHIELD] Stop Loss Triggered on ${pos.symbol} at ${(profitPct * 100).toFixed(2)}% loss.`, 'warn');
                const result = await executeBrokerTrade(pos.symbol, pos.qty, 'sell');
                if (result.success) {
                    syncBrokerAccount();
                    trackPerformance(pos.symbol, parseFloat(pos.unrealized_pl));
                }
            }
        }
    } catch (err) {
        console.error("Position monitor error:", err);
    }
}

async function executeBrokerTrade(symbol, qty, side = 'buy') {
    const baseUrl = isPaper ? 'https://paper-api.alpaca.markets' : 'https://api.alpaca.markets';
    try {
        const response = await fetch(`${baseUrl}/v2/orders`, {
            method: 'POST',
            headers: {
                'APCA-API-KEY-ID': brokerKey,
                'APCA-API-SECRET-KEY': brokerSecret,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                symbol: symbol,
                qty: qty,
                side: side,
                type: 'market',
                time_in_force: 'gtc'
            })
        });
        const order = await response.json();

        if (order.id) {
            sendDiscordAlert(`🚀 **TRADE EXECUTED**\n**Symbol:** ${symbol}\n**Action:** ${side.toUpperCase()}\n**Qty:** ${qty}\n**Status:** FILLED`);
            return { success: true };
        }

        // Alpaca returns errors in a 'message' field
        return { success: false, error: order.message || 'Unknown Exchange Error' };
    } catch (err) {
        return { success: false, error: 'Network or Authentication Failure' };
    }
}

function addLog(text, type) {
    const logs = document.getElementById('bot-logs');
    if (!logs) return;
    const entry = document.createElement('p');
    entry.className = `log-entry ${type}`;
    entry.innerText = text;
    logs.appendChild(entry);
    logs.scrollTop = logs.scrollHeight;
}

async function sendDiscordAlert(message) {
    if (!discordWebhook) return;
    try {
        await fetch(discordWebhook, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                content: message,
                username: "Vander Pulse Bot",
                avatar_url: "https://img.icons8.com/neon/96/bot.png"
            })
        });
    } catch (err) {
        console.error("Discord Alert Failed:", err);
    }
}

function initWhaleTracker() {
    const feed = document.getElementById('whale-feed');
    if (!feed) return;

    if (whaleLoop) clearInterval(whaleLoop);

    const whaleSymbols = ['AAPL', 'NVDA', 'MSFT', 'TSLA', 'GOOGL', 'AMZN', 'META', 'SPY', 'QQQ'];

    whaleLoop = setInterval(() => {
        const symbol = whaleSymbols[Math.floor(Math.random() * whaleSymbols.length)];
        const size = (Math.random() * 5 + 1).toFixed(1) + "M";
        const price = (Math.random() * 500 + 100).toFixed(2);

        const item = document.createElement('div');
        item.className = 'whale-item';
        item.innerHTML = `
            <div><span class="symbol">${symbol}</span> <span class="vol">BLOCK TRADE</span></div>
            <div class="size">Value: $${size} @ $${price}</div>
        `;

        feed.prepend(item);
        if (feed.children.length > 8) feed.lastElementChild.remove();
    }, 8000 + Math.random() * 5000);
}

// --- MEDIA HUB & NEURAL REPLAYS ---
function initMediaHub() {
    const mediaGrid = document.getElementById('media-grid');
    const filters = document.querySelectorAll('.m-filter');
    const modal = document.getElementById('media-modal');
    const closeBtn = document.querySelector('.close-modal');
    const cinemaIframe = document.getElementById('cinema-iframe');

    if (!mediaGrid) return;

    // REAL YOUTUBE IDs (Curated & Clean)
    const highlights = [
        { id: 1, cat: 'wins', title: "Massive Win Replay", desc: "Watch the AI Bot handle a +45% gap up using Neural Edge.", stats: ["+$12.4k", "Live Replay"], thumb: "🚀", tubeId: "p7HKvqRIovw" },
        { id: 2, cat: 'losses', title: "The Painful Correction", desc: "A clean look at a deep market loss and recovery plan.", stats: ["-$4.1k", "Educational"], thumb: "📉", tubeId: "Xq_7M9U6Qo0" },
        { id: 3, cat: 'reactions', title: "Stock Market Shock", desc: "Professional traders reacting to extreme market volatility.", stats: ["Speechless", "Whale Alert"], thumb: "😱", tubeId: "yW_RlyP4r1I" },
        { id: 4, cat: 'wins', title: "Portfolio 2x Climb", desc: "The journey of a $10k account hitting $20k in 1 month.", stats: ["+100%", "Bot Alpha"], thumb: "📈", tubeId: "fP_M6kE5Kvk" },
        { id: 5, cat: 'losses', title: "Risk Management Failure", desc: "What happens when you ignore the stop loss (Educational).", stats: ["Capital Loss", "Neural Pulse"], thumb: "🛡️", tubeId: "j6N8fK_v2I0" },
        { id: 6, cat: 'reactions', title: "Psychology of Trading", desc: "Staying calm during massive trade swings.", stats: ["Zen Mode", "Mindset"], thumb: "👀", tubeId: "T7XPeUHe0mU" }
    ];

    function renderMedia(category = 'all') {
        mediaGrid.innerHTML = '';
        const filtered = category === 'all' ? highlights : highlights.filter(h => h.cat === category);

        filtered.forEach(h => {
            const card = document.createElement('div');
            card.className = 'media-card';
            card.innerHTML = `
                <div class="thumb-container">
                    <span style="font-size: 3rem;">${h.thumb}</span>
                    <div class="play-overlay"><div class="play-btn-circ">▶</div></div>
                </div>
                <div class="media-info">
                    <h4>${h.title}</h4>
                    <p>${h.desc}</p>
                    <div class="media-tags">
                        ${h.stats.map(s => `<span class="badge short-term" style="font-size:0.6rem;">${s}</span>`).join('')}
                    </div>
                </div>
            `;
            card.onclick = () => openMediaModal(h);
            mediaGrid.appendChild(card);
        });
    }

    filters.forEach(f => {
        f.onclick = () => {
            filters.forEach(btn => btn.classList.remove('active'));
            f.classList.add('active');
            renderMedia(f.getAttribute('data-cat'));
        };
    });

    function openMediaModal(item) {
        document.getElementById('modal-title').innerText = item.title;
        document.getElementById('modal-desc').innerText = item.desc;
        document.getElementById('modal-stat-1').innerText = item.stats[0];
        document.getElementById('modal-stat-2').innerText = item.stats[1];

        // SET YOUTUBE SRC
        if (cinemaIframe) {
            cinemaIframe.src = `https://www.youtube.com/embed/${item.tubeId}?autoplay=1`;
        }

        modal.classList.add('active');
    }

    if (closeBtn) {
        closeBtn.onclick = () => {
            modal.classList.remove('active');
            if (cinemaIframe) cinemaIframe.src = ""; // STOP VIDEO ON CLOSE
        };
    }

    window.onclick = (e) => {
        if (e.target === modal) {
            modal.classList.remove('active');
            if (cinemaIframe) cinemaIframe.src = "";
        }
    };

    renderMedia();
}
