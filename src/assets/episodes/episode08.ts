import type { Episode } from '../../engine/types';

export const EPISODE_08: Episode = {
  id: 'ep-08',
  date: '2026-04-14',
  title: '20260414 Relief Rally',
  description: 'Monday — the Hormuz blockade takes effect at 10AM, but stocks stage a stunning comeback after Trump says Iran called to make a deal. Goldman Sachs posts record trading revenue. Oil retreats below $100.',
  actions: [
    // Start BGM
    { type: 'bgm', track: 'chill-lofi', command: 'play' },

    {
      type: 'narration',
      text: '週一深夜，食堂裡的氣氛意外地輕鬆。早上還人心惶惶的封鎖令，到了晚上竟成了反彈的燃料⋯⋯',
      duration: 3500,
    },

    // ── Opening: stunning reversal, S&P erases war losses ──
    {
      type: 'market-data',
      data: {
        tickers: [
          { symbol: 'SPY', price: 532.60, change: 1.0 },
          { symbol: 'QQQ', price: 446.80, change: 1.2 },
          { symbol: 'WTI', price: 99.08, change: -5.7 },
          { symbol: 'GOLD', price: 2442, change: 0.3 },
        ],
        volatility: 38,
        vix: 28.5,
        rsi: 52.0,
        beta: 1.22,
        priceHistory: [521, 522, 525, 528, 530, 531, 532, 533],
        volumeHistory: [92, 88, 82, 75, 70, 68, 65, 62],
        sectors: [
          { label: 'Tech', value: 1620, color: '#22cc55' },
          { label: 'Finance', value: 1280, color: '#22cc55' },
          { label: 'Software', value: 1150, color: '#22cc55' },
          { label: 'Energy', value: 1080, color: '#cc8844' },
          { label: 'Defense', value: 920, color: '#cc8844' },
        ],
        headline: 'S&P 收漲 1% — 川普稱伊朗主動致電求和',
      },
    },

    // Chef at stove
    { type: 'enter', character: 'chef', toTile: 'stove' },
    { type: 'wait', duration: 600 },
    { type: 'move', character: 'chef', toTile: 'prep-area' },
    { type: 'wait', duration: 400 },
    { type: 'move', character: 'chef', toTile: 'stove' },

    // Customer A enters — relieved but cautious
    { type: 'enter', character: 'customer-a', toTile: 'entrance' },
    { type: 'move', character: 'chef', toTile: 'counter-center' },
    { type: 'dialogue', character: 'chef', text: 'いらっしゃい。今天臉色好多了。' },

    { type: 'move', character: 'customer-a', toTile: 'random-stool' },
    { type: 'sit', character: 'customer-a' },

    { type: 'dialogue', character: 'customer-a', text: '昨晚在這裡嚇得半死，結果今天收盤漲了 1%。你敢信嗎？' },

    { type: 'move', character: 'chef', toTile: 'stove' },
    { type: 'wait', duration: 400 },

    { type: 'dialogue', character: 'chef', text: '封鎖令早上十點生效，股市不是應該崩盤嗎？' },

    { type: 'dialogue', character: 'customer-a', text: '本來是。開盤確實在跌。但川普中午發了一條消息，說今早接到「對的人」打來的電話——暗示伊朗想談判。' },

    { type: 'emote', character: 'customer-a', emote: 'surprise', duration: 800 },

    { type: 'dialogue', character: 'customer-a', text: '一句話，整個盤面就翻了。S&P 從低點拉了快兩百點。' },

    { type: 'camera', effect: 'flash', duration: 200 },

    // ── Intraday reversal detail ──
    {
      type: 'market-data',
      data: {
        tickers: [
          { symbol: 'SPY', price: 532.60, change: 1.0 },
          { symbol: 'ORCL', price: 168.40, change: 12.8 },
          { symbol: 'PLTR', price: 25.30, change: 3.3 },
          { symbol: 'MSFT', price: 412.80, change: 2.1 },
        ],
        volatility: 35,
        vix: 28.5,
        rsi: 54.0,
        beta: 1.18,
        priceHistory: [518, 519, 522, 526, 529, 531, 532, 533],
        volumeHistory: [95, 90, 85, 78, 72, 68, 65, 60],
        sectors: [
          { label: 'Software', value: 1250, color: '#22cc55' },
          { label: 'Tech', value: 1620, color: '#22cc55' },
          { label: 'Finance', value: 1280, color: '#22cc55' },
          { label: 'Consumer', value: 880, color: '#44aa66' },
          { label: 'Health', value: 760, color: '#cc8844' },
        ],
        headline: '軟體股領漲 — Oracle +13%、Palantir +3%',
      },
    },

    { type: 'move', character: 'chef', toTile: 'counter-center' },
    { type: 'dialogue', character: 'chef', text: 'Oracle 一天漲 13%？這是什麼情況？' },

    { type: 'dialogue', character: 'customer-a', text: '之前被戰爭恐慌壓太深了。一旦和平預期回來，超跌的軟體股反彈最猛。S&P 幾乎把整場戰爭的跌幅都收回來了。' },

    { type: 'wait', duration: 300 },

    // Customer B enters — excited about Goldman earnings
    { type: 'enter', character: 'customer-b', toTile: 'entrance' },
    { type: 'move', character: 'customer-b', toTile: 'random-stool' },
    { type: 'sit', character: 'customer-b' },

    { type: 'move', character: 'chef', toTile: 'counter-center' },
    { type: 'dialogue', character: 'chef', text: 'いらっしゃい。今天應該睡得好？' },
    { type: 'move', character: 'chef', toTile: 'stove' },

    { type: 'dialogue', character: 'customer-b', text: '高盛財報出來了！EPS $17.55，比預期高了一塊多。收入 172 億，也超預期。' },

    { type: 'dialogue', character: 'customer-a', text: '亂世出英雄？越是波動越賺錢的那種？' },

    { type: 'dialogue', character: 'customer-b', text: '沒錯。股票交易部門營收年增 27%，創歷史紀錄。波動率就是他們的印鈔機。' },

    { type: 'sfx', sound: 'chimes' },

    // ── Goldman Sachs earnings beat ──
    {
      type: 'market-data',
      data: {
        tickers: [
          { symbol: 'GS', price: 502.40, change: 3.5 },
          { symbol: 'JPM', price: 234.80, change: 1.2 },
          { symbol: 'MS', price: 108.60, change: 2.1 },
          { symbol: 'BAC', price: 43.50, change: 0.8 },
        ],
        volatility: 36,
        vix: 28.0,
        rsi: 55.0,
        priceHistory: [485, 488, 492, 495, 498, 500, 501, 502],
        volumeHistory: [55, 60, 68, 72, 75, 70, 65, 62],
        headline: '高盛 Q1 獲利超預期 — 股票交易創紀錄季度',
      },
    },

    { type: 'move', character: 'chef', toTile: 'counter-center' },
    { type: 'dialogue', character: 'chef', text: '管理資產也破紀錄了？3.65 兆？' },

    { type: 'dialogue', character: 'customer-b', text: '對。ROE 19.8%，效率比 60.5%。這種數字在亂世裡拿出來，華爾街當然買單。' },

    { type: 'dialogue', character: 'customer-a', text: '但固定收益下滑了 10%。明天 JPMorgan 報，那才是真正的壓力測試。' },

    { type: 'dialogue', character: 'customer-b', text: '摩根大通的預期是 EPS $5.45，營收年減 8%。如果他們也能超預期，這輪反彈就有底氣了。' },

    { type: 'wait', duration: 300 },

    { type: 'dialogue', character: 'chef', text: '那油價呢？昨晚不是破 105 了嗎？' },

    { type: 'dialogue', character: 'customer-a', text: '跌回 99 了。和談消息一出，多頭直接砍倉。但別高興太早——封鎖還在，美國中央司令部只是說不攔非伊朗港口的船。' },

    // ── Oil retreat + lingering risks ──
    {
      type: 'market-data',
      data: {
        tickers: [
          { symbol: 'WTI', price: 99.08, change: -5.7 },
          { symbol: 'BRENT', price: 99.36, change: -3.2 },
          { symbol: 'XOM', price: 124.20, change: -3.4 },
          { symbol: 'BTC', price: 71850, change: -1.7 },
        ],
        volatility: 40,
        vix: 28.5,
        rsi: 48.0,
        beta: 1.25,
        priceHistory: [105, 104, 103, 101, 100, 99, 99, 99],
        volumeHistory: [100, 95, 88, 82, 78, 75, 72, 70],
        headline: 'WTI 跌回 $99 — 和談預期降溫油市狂熱',
      },
    },

    { type: 'dialogue', character: 'customer-b', text: 'BTC 反而在跌，從 73K 回到 71.8K。風險偏好回來了，資金從避險標的撤出。' },

    { type: 'dialogue', character: 'customer-a', text: '典型的 risk-on 輪動。昨天人人逃命買 BTC，今天覺得沒事了就賣。' },

    { type: 'emote', character: 'chef', emote: 'surprise', duration: 800 },

    { type: 'dialogue', character: 'chef', text: '所以昨天的恐慌完全是白費？' },

    { type: 'dialogue', character: 'customer-b', text: '不是白費。VIX 還在 28 以上。市場是在定價「可能和平」，不是「已經和平」。' },

    { type: 'dialogue', character: 'customer-a', text: '而且通膨問題沒解決。CPI 3.4%，油價就算回到 99 也比戰前高了三成。Fed 被卡死了。' },

    { type: 'move', character: 'chef', toTile: 'stove' },
    { type: 'wait', duration: 400 },

    // ── Night wrap: hope vs reality ──
    {
      type: 'market-data',
      data: {
        tickers: [
          { symbol: 'SPY', price: 532.60, change: 1.0 },
          { symbol: 'QQQ', price: 446.80, change: 1.2 },
          { symbol: 'GS', price: 502.40, change: 3.5 },
          { symbol: 'WTI', price: 99.08, change: -5.7 },
        ],
        volatility: 36,
        vix: 28.5,
        rsi: 52.0,
        beta: 1.20,
        priceHistory: [518, 522, 526, 529, 531, 532, 533, 533],
        volumeHistory: [95, 88, 80, 72, 68, 65, 62, 60],
        sectors: [
          { label: 'Tech', value: 1620, color: '#22cc55' },
          { label: 'Finance', value: 1280, color: '#22cc55' },
          { label: 'Software', value: 1150, color: '#22cc55' },
          { label: 'Energy', value: 1080, color: '#cc8844' },
          { label: 'Crypto', value: 1720, color: '#ee4444' },
        ],
        headline: '盤後回顧 — 從恐慌到狂歡，一通電話改寫劇本',
      },
    },

    { type: 'move', character: 'chef', toTile: 'counter-center' },
    { type: 'dialogue', character: 'chef', text: '昨晚你們說不要在週日做決定。看來是對的。' },

    { type: 'dialogue', character: 'customer-a', text: '如果昨晚砍倉的人，今天得拍斷大腿。恐慌殺的永遠是散戶。' },

    { type: 'dialogue', character: 'customer-b', text: '但也別太樂觀。上次停火只撐了五天。這次的「電話」到底有多少分量，沒人知道。' },

    { type: 'dialogue', character: 'chef', text: '所以⋯⋯還是那句老話？' },

    { type: 'dialogue', character: 'customer-a', text: '保持清醒，減少槓桿。加一條：別被標題操控情緒。' },

    { type: 'dialogue', character: 'customer-b', text: '華爾街有句話——市場在爬牆壁。在恐懼中上漲，比在樂觀中上漲更有底氣。' },

    { type: 'wait', duration: 500 },
    { type: 'move', character: 'chef', toTile: 'stove' },

    {
      type: 'narration',
      text: '週一的深夜食堂，恐慌的味道被一通電話沖淡了。但老闆知道，明天又是新的一天，新的標題，新的劇本。湯永遠在爐上。',
      duration: 4000,
    },
  ],
};
