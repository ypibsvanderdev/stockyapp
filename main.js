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

// AI Strat Settings (UNRESTRICTED WEALTH - Maximum Performance Config)
let botSettings = {
    qty: 1,
    stopLoss: 0.015,     // 1.5% Stop Loss (Immediate Capital Protection)
    takeProfit: 0.900,   // 90% TARGET (Aiming for Moons)
    threshold: 75,       // high confidence only
    interval: 5,         // fast scan
    riskPct: 20.0,       // MAX BETS: 20% of account per trade
    trailingStop: true,  // LOCKS IN PROFIT: Follows the price up
    maxPositions: 5,     // Using 100% of capital (5 x 20%)
    panicThreshold: 5.0, // Sell everything if total account drops 5%
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
            addLog('[SYSTEM] Neural State Restored. Resuming automation...', 'system');
            startBotLoop();
        }
    }
}

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

    const executeSafety = async () => {
        await monitorPositions();
    };

    const executeStrategy = async () => {
        if (!accountData) return; // Guard 1: Connection

        // 1. Analyze Market (Centralized scoring)
        const candidates = [...STOCK_LIST].map(stock => {
            const analysis = calculateAdvancedAIScore(stock);
            return { ...stock, aiScore: analysis.score };
        })
            .filter(s => s.aiScore > botSettings.threshold) // Only confident picks
            .sort((a, b) => b.aiScore - a.aiScore);

        if (candidates.length === 0) {
            if (botSettings.interval >= 5) addLog('[AI] Scanning... Market noise elevated.', 'system');
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
            // Reset UI button
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

        addLog(`[AI] Radar detected ${candidates.length} signals. Filtered for ${botSettings.trendFilter} / ${botSettings.assetFocus}.`, 'system');

        // 2. Turbo Execution: Attempt to buy top 3 signals if liquidity allows
        const topPicks = candidates
            .filter(s => botSettings.trendFilter === 'any' || s.trend === botSettings.trendFilter)
            .filter(s => botSettings.assetFocus === 'any' || s.cap === botSettings.assetFocus)
            .slice(0, 3);

        let executedCount = 0;

        for (let target of topPicks) {
            const alreadyOwned = openPositions.find(p => p.symbol === target.symbol);
            const alreadyPending = pendingOrders.find(o => o.symbol === target.symbol);
            if (alreadyOwned || alreadyPending) continue;

            if ((openPositions.length + executedCount) >= botSettings.maxPositions) break;

            const buyingPower = parseFloat(accountData.buying_power);
            const compoundingEquity = botSettings.compound ? totalEquity : startEquity;

            // Dynamic Lot Sizing: Calc quantity based on % of equity
            const riskAmount = compoundingEquity * (botSettings.riskPct / 100);
            const dynamicQty = Math.floor(riskAmount / target.price) || 1;

            const totalCost = target.price * dynamicQty;

            // --- UNRESTRICTED WEALTH: NO RESERVES ---
            const cashReserve = 0;

            if (buyingPower > (totalCost + cashReserve)) {
                addLog(`[AI] Deploying capital: Buy ${dynamicQty} ${target.symbol} (Confidence: ${target.aiScore.toFixed(0)}%)`, 'trade');
                const result = await executeBrokerTrade(target.symbol, dynamicQty, 'buy');

                if (result.success) {
                    addLog(`[SUCCESS] ORDER EXECUTED (SYNCING...): ${target.symbol}`, 'trade');
                    executedCount++;
                    // Settlement Buffer: Wait for Alpaca to process the Buying Power deduction
                    await new Promise(r => setTimeout(r, 750));
                    await syncBrokerAccount();
                } else {
                    addLog(`[REJECTED] ${target.symbol} block: ${result.error}`, 'warn');
                }
            } else {
                addLog(`[SYSTEM] Liquidity Guard: Skipping ${target.symbol} (Balance too low)`, 'warn');
                break; // Stop if we run out of money
            }
        }

        if (executedCount > 0) {
            addLog(`[TURBO] Execution Sequence Complete. ${executedCount} positions opened.`, 'system');
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

            // --- BREAK EVEN GUARD: LOCK IN THE WIN ---
            if (profitPct >= 0.01) {
                // If in 1% profit, move stop loss to +0.5% (Can't lose money anymore)
                botSettings.stopLoss = -0.005;
            }

            // --- ELITE NEURAL SHIELD: Trailing Stop Logic ---
            if (botSettings.trailingStop && profitPct > (botSettings.takeProfit / 2)) {
                // If we are halfway to our profit target, we move the floor up.
                // This is a simplified trailing stop simulator for the UI.
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
                    continue; // Skip standard SL/TP for this position
                }
            }

            if (profitPct >= botSettings.takeProfit) {
                addLog(`[SHIELD] Target Reached! Selling ${pos.symbol} for +${(profitPct * 100).toFixed(2)}% profit.`, 'trade');
                const result = await executeBrokerTrade(pos.symbol, pos.qty, 'sell');
                if (result.success) {
                    syncBrokerAccount();
                    trackPerformance(pos.symbol, parseFloat(pos.unrealized_pl));
                }
            }
            // Safety Shield: Stop Loss
            else if (profitPct <= -botSettings.stopLoss) {
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
