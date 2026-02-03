// --- SERVER-SIDE TRADING BOT (HEADLESS) ---
// This script runs 24/7 on a server (Render/Railway/Heroku)
// No UI, No Browser, Just Logic.

// --- Node.js Dependencies ---
// (We use standard 'fetch' which is built-in to Node 18+)

// --- CONFIGURATION ---
// Obfuscated Credentials (Base64) - Decoded at runtime
const _k = 'UEtGVFhXVko1T1dRNk5XNVBGUEdBSUxONVI=';
const _s = 'Q2I5dWlzejRoc3M4M1ZhUHJuVzR2cTlmQTh6Rkg1b2lrWG9kd3YzRG92TGo=';

// Environment variables take precedence (for cloud security), falling back to embedded keys
const brokerKey = process.env.APCA_API_KEY_ID || Buffer.from(_k, 'base64').toString('ascii');
const brokerSecret = process.env.APCA_API_SECRET_KEY || Buffer.from(_s, 'base64').toString('ascii');
const isPaper = true;
const baseUrl = isPaper ? 'https://paper-api.alpaca.markets' : 'https://api.alpaca.markets';

// --- BOT SETTINGS ---
const botSettings = {
    qty: 1,
    stopLoss: 0.045,     // 4.5% Stop Loss (Consistent Survival)
    takeProfit: 0.150,   // 15% Target (Wealth Scalability)
    threshold: 70,       // Quality Signals
    interval: 5,         // Fast Scan
    riskPct: 5.0,        // 5% Account Risk
    trailingStop: true,  // Profit Locking
    maxPositions: 10,    // Diversified
    panicThreshold: 10.0,// Total Safety Cap
    trendFilter: 'up',
    assetFocus: 'any',
    compound: true
};

// --- MOCK MARKET DATA (Same as main.js for now - ideally fetch from Finnhub) ---
// In a real server bot, we would fetch live quotes. 
// For this version, we use the static list for signal generation logic, 
// but execute REAL trades on Alpaca.
const STOCK_LIST = [
    { id: 'nvda', name: 'Nvidia Corp', symbol: 'NVDA', price: 924.31, change: +2.1, trend: 'up', vol: 'high', cap: 'large' },
    { id: 'tsla', name: 'Tesla Inc', symbol: 'TSLA', price: 184.22, change: -1.2, trend: 'down', vol: 'high', cap: 'large' },
    { id: 'aapl', name: 'Apple Inc', symbol: 'AAPL', price: 172.64, change: +0.4, trend: 'up', vol: 'low', cap: 'large' },
    // ... (Compact list for server efficiency)
    { id: 'spy', name: 'S&P 500 ETF', symbol: 'SPY', price: 510.22, change: +0.2, trend: 'up', vol: 'low', cap: 'large' },
    { id: 'amd', name: 'Advanced Micro', symbol: 'AMD', price: 180.45, change: +3.2, trend: 'up', vol: 'high', cap: 'large' },
];

// --- STATE ---
let accountData = null;
let openPositions = [];
let pendingOrders = [];

// --- LOGGING ---
function log(msg, type = 'INFO') {
    const timestamp = new Date().toISOString();
    console.log(`[${timestamp}] [${type}] ${msg}`);
}

// --- ALPACA API HELPERS ---
async function fetchAlpaca(endpoint, method = 'GET', body = null) {
    try {
        const opts = {
            method,
            headers: {
                'APCA-API-KEY-ID': brokerKey,
                'APCA-API-SECRET-KEY': brokerSecret,
                'Content-Type': 'application/json'
            }
        };
        if (body) opts.body = JSON.stringify(body);

        const res = await fetch(`${baseUrl}${endpoint}`, opts);
        if (!res.ok) {
            const txt = await res.text();
            throw new Error(`API Error: ${res.status} ${txt}`);
        }
        return await res.json();
    } catch (err) {
        log(err.message, 'ERROR');
        return null;
    }
}

// --- SYNC ---
async function sync() {
    log('Syncing portfolio...', 'SYSTEM');
    const acc = await fetchAlpaca('/v2/account');
    if (acc) accountData = acc;

    const pos = await fetchAlpaca('/v2/positions');
    if (pos) openPositions = pos;

    const ord = await fetchAlpaca('/v2/orders?status=open');
    if (ord) pendingOrders = ord;
}

// --- STRATEGY ---
function calculateAdvancedAIScore(stock) {
    // (Simplified logic from main.js)
    let score = 50;
    if (stock.trend === 'up') score += 20;
    if (stock.change > 0 && stock.change < 5) score += 15; // Steady growth
    if (stock.vol === 'high') score += 10; // Momentum
    return { score };
}

async function executeStrategy() {
    if (!accountData) return;

    // 1. Panic Check
    const equity = parseFloat(accountData.equity);
    const lastEquity = parseFloat(accountData.last_equity);
    const drawdown = ((lastEquity - equity) / lastEquity) * 100;

    if (drawdown >= botSettings.panicThreshold) {
        log(`CRITICAL: Panic Threshold reached (${drawdown.toFixed(2)}%). Halting trading.`, 'ALERT');
        process.exit(1); // Kill the server process
    }

    // 2. Scan
    const candidates = STOCK_LIST.map(s => ({ ...s, aiScore: calculateAdvancedAIScore(s).score }))
        .filter(s => s.aiScore > botSettings.threshold)
        .sort((a, b) => b.aiScore - a.aiScore);

    // 3. Trade
    // Only buy if we have room
    if (openPositions.length >= botSettings.maxPositions) {
        log(`Max positions (${botSettings.maxPositions}) reached.`, 'INFO');
        return;
    }

    const topPick = candidates[0]; // Take best one
    if (!topPick) return;

    const alreadyOwned = openPositions.find(p => p.symbol === topPick.symbol);
    const alreadyPending = pendingOrders.find(o => o.symbol === topPick.symbol);

    if (alreadyOwned || alreadyPending) {
        log(`Skipping ${topPick.symbol} (Already active/pending).`, 'DEBUG');
        return;
    }

    log(`Signal Found: ${topPick.symbol} (${topPick.aiScore}%)`, 'TRADE');

    // Execute Buy
    const riskAmount = equity * (botSettings.riskPct / 100);
    const qty = Math.floor(riskAmount / topPick.price) || 1;

    const order = await fetchAlpaca('/v2/orders', 'POST', {
        symbol: topPick.symbol,
        qty: qty,
        side: 'buy',
        type: 'market',
        time_in_force: 'gtc'
    });

    if (order) {
        log(`BUY ORDER SENT: ${topPick.symbol} x${qty}`, 'SUCCESS');
        await sync(); // Refresh state
    }
}

// --- SAFETY MONITORS ---
async function monitorPositions() {
    if (!accountData || openPositions.length === 0) return;

    for (let pos of openPositions) {
        const plPct = parseFloat(pos.unrealized_plpc);
        const symbol = pos.symbol;

        // Stop Loss
        if (plPct <= -botSettings.stopLoss) {
            log(`STOP LOSS HIT: ${symbol} (${(plPct * 100).toFixed(2)}%)`, 'SELL');
            await closePosition(symbol);
        }
        // Take Profit
        else if (plPct >= botSettings.takeProfit) {
            log(`TAKE PROFIT HIT: ${symbol} (${(plPct * 100).toFixed(2)}%)`, 'SELL');
            await closePosition(symbol);
        }
        // Trailing Stop (Simplified)
        else if (botSettings.trailingStop && plPct > 0.01) {
            // Logic would go here to track high water mark
        }
    }
}

async function closePosition(symbol) {
    const res = await fetchAlpaca(`/v2/positions/${symbol}`, 'DELETE');
    if (res) log(`Position Closed: ${symbol}`, 'SUCCESS');
    await sync();
}

// --- MAIN LOOP ---
async function start() {
    log('Starting Vander Server Bot v1.0...', 'SYSTEM');
    log(`Credentials Loaded: ${brokerKey.substring(0, 5)}...`, 'SYSTEM');

    await sync();
    if (!accountData) {
        log('Failed to connect to Broker. Exiting.', 'FATAL');
        process.exit(1);
    }
    log(`Connected. Buying Power: $${accountData.buying_power}`, 'SYSTEM');

    // Interval Loops
    setInterval(async () => {
        await monitorPositions();
    }, 2000); // Check safety every 2s

    setInterval(async () => {
        await executeStrategy();
    }, botSettings.interval * 1000); // Trade every X seconds
}

start();
