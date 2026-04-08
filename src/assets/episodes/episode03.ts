import type { Episode } from '../../engine/types';

export const EPISODE_03: Episode = {
  id: 'ep-03',
  title: 'Ceasefire Rally',
  description: 'Iran ceasefire news sparks a market rally — the diner buzzes with cautious optimism.',
  actions: [
    // Start BGM
    { type: 'bgm', track: 'bossa-lofi', command: 'play' },

    {
      type: 'narration',
      text: '停火消息傳來的深夜，食堂的電視還亮著⋯⋯',
      duration: 3000,
    },

    // ── Initial state: market closed higher on ceasefire hopes ──
    {
      type: 'market-data',
      data: {
        tickers: [
          { symbol: 'SPY', price: 528.40, change: 1.8 },
          { symbol: 'TSLA', price: 178.60, change: -2.1 },
          { symbol: 'NFLX', price: 645.20, change: 3.2 },
          { symbol: 'AMD', price: 162.30, change: 2.5 },
        ],
        volatility: 24,
        vix: 16.2,
        rsi: 58.0,
        beta: 1.02,
        priceHistory: [518, 520, 522, 519, 524, 526, 528, 528],
        volumeHistory: [42, 45, 50, 55, 60, 58, 52, 48],
        sectors: [
          { label: 'Tech', value: 1650, color: '#4488cc' },
          { label: 'Defense', value: 880, color: '#cc4444' },
          { label: 'Energy', value: 1100, color: '#cc8844' },
          { label: 'Consumer', value: 1020, color: '#44aa66' },
          { label: 'Finance', value: 1280, color: '#6644aa' },
        ],
      },
    },

    // Chef at stove
    { type: 'enter', character: 'chef', toTile: 'stove' },
    { type: 'wait', duration: 600 },
    { type: 'move', character: 'chef', toTile: 'prep-area' },
    { type: 'wait', duration: 400 },
    { type: 'move', character: 'chef', toTile: 'stove' },
    { type: 'wait', duration: 500 },

    // Customer A enters — optimistic trader
    { type: 'enter', character: 'customer-a', toTile: 'entrance' },
    { type: 'move', character: 'chef', toTile: 'counter-center' },
    { type: 'dialogue', character: 'chef', text: 'いらっしゃい。今晩は關東煮？' },

    { type: 'move', character: 'customer-a', toTile: 'random-stool' },
    { type: 'sit', character: 'customer-a' },

    { type: 'dialogue', character: 'customer-a', text: '來一份！Master，你看到停火的消息了嗎？' },

    { type: 'move', character: 'chef', toTile: 'stove' },
    { type: 'wait', duration: 400 },

    { type: 'dialogue', character: 'chef', text: '嗯，電視上一直在播。兩週停火⋯⋯' },

    { type: 'dialogue', character: 'customer-a', text: '期貨直接跳漲，油價暴跌。今天收盤 S&P 漲了快 2%。' },

    // ── Ceasefire rally data ──
    {
      type: 'market-data',
      data: {
        tickers: [
          { symbol: 'SPY', price: 528.40, change: 1.8 },
          { symbol: 'XOM', price: 98.20, change: -4.5 },
          { symbol: 'LMT', price: 442.10, change: -3.8 },
          { symbol: 'NFLX', price: 645.20, change: 3.2 },
        ],
        volatility: 30,
        vix: 18.5,
        priceHistory: [520, 522, 524, 526, 527, 528, 528, 529],
        volumeHistory: [55, 62, 70, 85, 78, 72, 65, 60],
        headline: '伊朗停火兩週 — 期貨大漲、油價重挫',
      },
    },

    { type: 'emote', character: 'chef', emote: 'surprise', duration: 800 },

    { type: 'move', character: 'chef', toTile: 'counter-center' },
    { type: 'dialogue', character: 'chef', text: '能源股不好過吧？' },

    { type: 'dialogue', character: 'customer-a', text: 'Exxon 跌了 4.5%，Lockheed 也崩。不過科技股全面拉升，Netflix 被升級到 Buy，漲了 3%。' },

    { type: 'move', character: 'chef', toTile: 'stove' },
    { type: 'wait', duration: 300 },

    // Customer B enters — the skeptic
    { type: 'enter', character: 'customer-b', toTile: 'entrance' },
    { type: 'move', character: 'customer-b', toTile: 'random-stool' },
    { type: 'sit', character: 'customer-b' },

    { type: 'move', character: 'chef', toTile: 'counter-center' },
    { type: 'dialogue', character: 'chef', text: 'いらっしゃい。' },
    { type: 'move', character: 'chef', toTile: 'stove' },

    { type: 'dialogue', character: 'customer-b', text: '你們在聊停火？別太樂觀，上次也是說停火，結果兩週後又打起來了。' },

    { type: 'dialogue', character: 'customer-a', text: '這次不一樣，連 Levi\'s 都上調了營收預期，說衝突影響有限。' },

    { type: 'dialogue', character: 'customer-b', text: '那 Tesla 呢？現金流出了問題，分析師都在警告了。' },

    // ── Tesla concern + tech divergence ──
    {
      type: 'market-data',
      data: {
        tickers: [
          { symbol: 'TSLA', price: 178.60, change: -2.1 },
          { symbol: 'AMD', price: 162.30, change: 2.5 },
          { symbol: 'INTC', price: 34.80, change: 1.8 },
          { symbol: 'NFLX', price: 645.20, change: 3.2 },
        ],
        volatility: 32,
        vix: 19.8,
        rsi: 52.0,
        beta: 1.15,
        priceHistory: [528, 529, 527, 528, 530, 529, 528, 527],
        sectors: [
          { label: 'Tech', value: 1750, color: '#22cc55' },
          { label: 'Defense', value: 720, color: '#ee4444' },
          { label: 'Energy', value: 850, color: '#ee4444' },
          { label: 'Consumer', value: 1150, color: '#22cc55' },
          { label: 'Finance', value: 1320, color: '#44aa66' },
        ],
        headline: 'TSLA 現金流疑慮 vs 科技股停火反彈分化',
      },
    },

    { type: 'camera', effect: 'shake', duration: 250, intensity: 2 },

    { type: 'dialogue', character: 'customer-a', text: 'Tesla 是個案，整體科技股很強。Citi 把 AMD 和 Analog Devices 列入正面催化觀察名單了。' },

    { type: 'move', character: 'chef', toTile: 'counter-center' },
    { type: 'dialogue', character: 'chef', text: '對了，Intel 也有動作吧？聽說要參與 Musk 的 Terafab 晶片計畫。' },

    { type: 'emote', character: 'customer-b', emote: 'surprise', duration: 800 },

    { type: 'dialogue', character: 'customer-b', text: '連 Intel 都搭上 Musk 了？半導體真的回美國了。' },

    { type: 'dialogue', character: 'customer-a', text: '還有 Nvidia 投資的 Firmus，亞洲 AI 資料中心估值已經 55 億了。AI 基建不會停。' },

    { type: 'move', character: 'chef', toTile: 'stove' },
    { type: 'wait', duration: 400 },

    { type: 'dialogue', character: 'customer-b', text: '但 Buffett 的 Berkshire 連跌七年最長紀錄⋯⋯連股神都擋不住。' },

    { type: 'dialogue', character: 'customer-a', text: '他自己都說了——「Berkshire 不需要我」。' },

    // ── Late-night outlook: cautious optimism ──
    {
      type: 'market-data',
      data: {
        tickers: [
          { symbol: 'SPY', price: 529.10, change: 1.9 },
          { symbol: 'AMD', price: 163.50, change: 3.2 },
          { symbol: 'NFLX', price: 647.80, change: 3.6 },
          { symbol: 'INTC', price: 35.20, change: 2.9 },
        ],
        volatility: 26,
        vix: 17.0,
        rsi: 62.0,
        priceHistory: [524, 526, 528, 529, 530, 529, 529, 529],
        headline: '盤後持穩 — 市場消化停火利多，聚焦財報季',
      },
    },

    { type: 'move', character: 'chef', toTile: 'counter-center' },
    { type: 'dialogue', character: 'chef', text: '停火是好事，但兩週很短。先吃碗關東煮，明天再看。' },

    { type: 'wait', duration: 300 },
    { type: 'move', character: 'chef', toTile: 'stove' },

    { type: 'dialogue', character: 'customer-b', text: '說得也是。市場永遠有下一個故事。' },

    { type: 'wait', duration: 500 },

    {
      type: 'narration',
      text: '停火的夜晚，食堂裡的對話比油價更有溫度。',
      duration: 4000,
    },
  ],
};
