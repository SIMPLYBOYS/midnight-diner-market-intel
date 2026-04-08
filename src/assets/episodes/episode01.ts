import type { Episode } from '../../engine/types';

export const EPISODE_01: Episode = {
  id: 'ep-01',
  title: 'First Customer',
  description: 'A quiet evening — the first customer arrives with market gossip.',
  actions: [
    {
      type: 'narration',
      text: '深夜，食堂的暖簾在微風中輕輕搖曳⋯⋯',
      duration: 3000,
    },

    // ── Initial market state: calm, pre-close ──
    {
      type: 'market-data',
      data: {
        tickers: [
          { symbol: 'NVDA', price: 920.50, change: 0.3 },
          { symbol: 'AAPL', price: 199.20, change: 0.8 },
          { symbol: 'TSLA', price: 248.10, change: 1.2 },
          { symbol: 'MSFT', price: 425.00, change: 0.4 },
        ],
        volatility: 22,
        vix: 14.2,
        rsi: 58.0,
        beta: 1.05,
        priceHistory: [900, 905, 908, 912, 910, 915, 918, 920],
        volumeHistory: [30, 35, 28, 42, 38, 40, 33, 36],
      },
    },

    // Chef spawns at stove (auto-faces LEFT from LocationMap)
    { type: 'enter', character: 'chef', toTile: 'stove' },

    // Chef moves around kitchen naturally
    { type: 'wait', duration: 700 },
    { type: 'move', character: 'chef', toTile: 'prep-area' },
    { type: 'wait', duration: 400 },
    { type: 'move', character: 'chef', toTile: 'stove' },
    { type: 'wait', duration: 500 },
    { type: 'move', character: 'chef', toTile: 'counter-center' },
    { type: 'wait', duration: 200 },
    { type: 'move', character: 'chef', toTile: 'stove' },

    // Customer A enters from door
    { type: 'enter', character: 'customer-a', toTile: 'entrance' },

    // Chef turns toward customer
    { type: 'move', character: 'chef', toTile: 'counter-center' },
    { type: 'dialogue', character: 'chef', text: 'いらっしゃい。何にしましょう？' },

    // Customer A auto-paths to a random stool
    { type: 'move', character: 'customer-a', toTile: 'random-stool' },
    { type: 'sit', character: 'customer-a' },

    // Chef returns to stove
    { type: 'move', character: 'chef', toTile: 'stove' },
    { type: 'wait', duration: 500 },

    { type: 'dialogue', character: 'customer-a', text: 'Master⋯⋯ 今天市場很不安定啊。' },

    // ── Market shifts: volatility rising ──
    {
      type: 'market-data',
      data: {
        volatility: 38,
        vix: 21.5,
        rsi: 44.0,
        priceHistory: [915, 918, 920, 910, 900, 895, 885],
        headline: '市場波動加劇 — 科技股承壓',
      },
    },

    // Chef reacts
    { type: 'move', character: 'chef', toTile: 'counter-center' },
    { type: 'emote', character: 'chef', emote: 'surprise', duration: 1000 },

    { type: 'dialogue', character: 'chef', text: '哦？聽說科技股跌了不少。' },

    // Chef tends stove while listening
    { type: 'move', character: 'chef', toTile: 'stove' },
    { type: 'wait', duration: 300 },

    { type: 'dialogue', character: 'customer-a', text: '是啊，NVIDIA 一天跌了 5%。不過有人說是買入機會。' },

    // ── NVDA crash data ──
    {
      type: 'market-data',
      data: {
        tickers: [
          { symbol: 'NVDA', price: 875.30, change: -5.2 },
          { symbol: 'AAPL', price: 198.11, change: -0.5 },
          { symbol: 'TSLA', price: 241.55, change: -2.8 },
          { symbol: 'MSFT', price: 420.10, change: -1.2 },
        ],
        volatility: 52,
        vix: 28.7,
        rsi: 32.0,
        beta: 1.35,
        priceHistory: [885, 870, 865, 878, 860, 855, 875],
        volumeHistory: [45, 62, 78, 95, 88, 72, 85, 90],
        sectors: [
          { label: 'Tech', value: 980, color: '#ee4444' },
          { label: 'Finance', value: 1320, color: '#44aa66' },
          { label: 'Energy', value: 1050, color: '#cc8844' },
          { label: 'Health', value: 880, color: '#aa4488' },
          { label: 'Retail', value: 620, color: '#6644aa' },
        ],
        headline: 'NVDA -5.2% | 單日跌幅創三個月新高',
      },
    },

    { type: 'camera', effect: 'shake', duration: 300, intensity: 2 },

    // Chef paces
    { type: 'move', character: 'chef', toTile: 'prep-area' },
    { type: 'wait', duration: 300 },
    { type: 'move', character: 'chef', toTile: 'stove' },

    // Customer B enters
    { type: 'enter', character: 'customer-b', toTile: 'entrance' },

    { type: 'move', character: 'chef', toTile: 'counter-center' },
    { type: 'wait', duration: 200 },

    // Customer B auto-paths to a random (different) stool
    { type: 'move', character: 'customer-b', toTile: 'random-stool' },
    { type: 'sit', character: 'customer-b' },

    { type: 'move', character: 'chef', toTile: 'stove' },

    { type: 'dialogue', character: 'customer-b', text: '你們也在聊市場？我剛從交易所回來⋯⋯' },

    // ── Late-night recovery signal ──
    {
      type: 'market-data',
      data: {
        tickers: [
          { symbol: 'NVDA', price: 882.10, change: -4.3 },
          { symbol: 'AAPL', price: 199.50, change: 0.2 },
        ],
        volatility: 45,
        vix: 24.1,
        rsi: 38.5,
        priceHistory: [855, 860, 870, 875, 878, 880, 882],
        headline: '盤後回穩 — NVDA 跌幅收窄至 4.3%',
      },
    },

    // Chef nods
    { type: 'move', character: 'chef', toTile: 'counter-center' },
    { type: 'wait', duration: 300 },
    { type: 'move', character: 'chef', toTile: 'stove' },

    {
      type: 'narration',
      text: '深夜食堂裡，市場的故事才正要開始。',
      duration: 4000,
    },
  ],
};
