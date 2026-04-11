import type { Episode } from '../../engine/types';

export const EPISODE_05: Episode = {
  id: 'ep-05',
  title: 'Sentiment Crash',
  description: 'Consumer sentiment hits a record low as inflation fears spike — but a moonshot splashdown offers a glimmer of hope.',
  actions: [
    // Start BGM
    { type: 'bgm', track: 'chill-lofi', command: 'play' },

    {
      type: 'narration',
      text: '週五深夜，空氣裡瀰漫著焦慮的味道。食堂的收音機傳來太空人返回地球的消息⋯⋯',
      duration: 3500,
    },

    // ── Initial state: market under pressure, CPI came in hot ──
    {
      type: 'market-data',
      data: {
        tickers: [
          { symbol: 'SPY', price: 528.40, change: -0.8 },
          { symbol: 'QQQ', price: 441.20, change: -1.2 },
          { symbol: 'SHEL', price: 72.50, change: 3.1 },
          { symbol: 'NVDA', price: 108.60, change: -1.5 },
        ],
        volatility: 34,
        vix: 22.4,
        rsi: 44.0,
        beta: 1.15,
        priceHistory: [535, 534, 532, 530, 529, 528, 527, 528],
        volumeHistory: [50, 55, 62, 70, 75, 72, 68, 65],
        sectors: [
          { label: 'Tech', value: 1580, color: '#ee4444' },
          { label: 'Energy', value: 1120, color: '#22cc55' },
          { label: 'Finance', value: 1200, color: '#cc8844' },
          { label: 'Health', value: 780, color: '#ee4444' },
          { label: 'Crypto', value: 520, color: '#44aa66' },
        ],
        headline: 'CPI 年增 3.3% — 伊朗衝突推升能源價格',
      },
    },

    // Chef at stove
    { type: 'enter', character: 'chef', toTile: 'stove' },
    { type: 'wait', duration: 600 },
    { type: 'move', character: 'chef', toTile: 'prep-area' },
    { type: 'wait', duration: 400 },
    { type: 'move', character: 'chef', toTile: 'stove' },

    // Customer A enters — macro watcher
    { type: 'enter', character: 'customer-a', toTile: 'entrance' },
    { type: 'move', character: 'chef', toTile: 'counter-center' },
    { type: 'dialogue', character: 'chef', text: 'いらっしゃい。臉色不太好啊。' },

    { type: 'move', character: 'customer-a', toTile: 'random-stool' },
    { type: 'sit', character: 'customer-a' },

    { type: 'dialogue', character: 'customer-a', text: '消費者信心指數跌到 47.6，歷史新低。Master，你聽到了嗎？' },

    { type: 'move', character: 'chef', toTile: 'stove' },
    { type: 'wait', duration: 400 },

    { type: 'dialogue', character: 'chef', text: '47.6⋯⋯比金融海嘯的時候還低？' },

    { type: 'dialogue', character: 'customer-a', text: '對。CPI 也出來了，年增 3.3%，能源價格因為伊朗衝突飆升。民眾的通膨預期完全失控。' },

    { type: 'camera', effect: 'shake', duration: 250, intensity: 2 },

    // ── Sentiment crash detail ──
    {
      type: 'market-data',
      data: {
        tickers: [
          { symbol: 'SPY', price: 527.60, change: -1.0 },
          { symbol: 'QQQ', price: 440.10, change: -1.5 },
          { symbol: 'XOM', price: 118.40, change: 2.8 },
          { symbol: 'SHEL', price: 73.10, change: 3.9 },
        ],
        volatility: 38,
        vix: 24.1,
        rsi: 41.0,
        beta: 1.18,
        priceHistory: [534, 532, 530, 528, 527, 526, 527, 528],
        volumeHistory: [55, 62, 70, 78, 82, 80, 75, 72],
        headline: '消費者信心 47.6 創歷史新低 — 通膨恐懼蔓延',
      },
    },

    { type: 'move', character: 'chef', toTile: 'counter-center' },
    { type: 'dialogue', character: 'chef', text: '能源股倒是在漲。Shell 今年已經漲了 24%。' },

    { type: 'dialogue', character: 'customer-a', text: '停火協議讓油價暫時穩住，但根本問題沒解決。軟體股被打得很慘。' },

    { type: 'wait', duration: 300 },

    // Customer B enters — tech/AI focused
    { type: 'enter', character: 'customer-b', toTile: 'entrance' },
    { type: 'move', character: 'customer-b', toTile: 'random-stool' },
    { type: 'sit', character: 'customer-b' },

    { type: 'move', character: 'chef', toTile: 'counter-center' },
    { type: 'dialogue', character: 'chef', text: 'いらっしゃい。' },
    { type: 'move', character: 'chef', toTile: 'stove' },

    { type: 'dialogue', character: 'customer-b', text: '你們在聊軟體股？確實慘，但 Bitcoin 反彈了，有人說這代表底部可能到了。' },

    { type: 'dialogue', character: 'customer-a', text: '加密貨幣反彈就代表底部？我不信這個邏輯。' },

    { type: 'dialogue', character: 'customer-b', text: '不是邏輯的問題，是資金流向。大家在找替代避險標的。對了，Anthropic 在考慮自己做 AI 晶片了。' },

    { type: 'emote', character: 'customer-a', emote: 'surprise', duration: 800 },

    { type: 'dialogue', character: 'customer-a', text: '自己做晶片？那不是要跟 NVIDIA 正面對決？' },

    // ── AI chips + software pain ──
    {
      type: 'market-data',
      data: {
        tickers: [
          { symbol: 'NVDA', price: 107.80, change: -2.2 },
          { symbol: 'AMD', price: 94.20, change: -1.8 },
          { symbol: 'INTC', price: 22.40, change: -0.9 },
          { symbol: 'AVGO', price: 168.50, change: -1.1 },
        ],
        volatility: 36,
        vix: 23.5,
        rsi: 42.0,
        sectors: [
          { label: 'Tech', value: 1520, color: '#ee4444' },
          { label: 'Energy', value: 1180, color: '#22cc55' },
          { label: 'Finance', value: 1150, color: '#cc8844' },
          { label: 'Health', value: 760, color: '#ee4444' },
          { label: 'Crypto', value: 580, color: '#22cc55' },
        ],
        headline: 'Anthropic 考慮自研 AI 晶片 — 半導體格局生變',
      },
    },

    { type: 'dialogue', character: 'customer-b', text: '不一定是對決。可能是為了降低對單一供應商的依賴。Google 和 Amazon 都已經在做了。' },

    { type: 'move', character: 'chef', toTile: 'counter-center' },
    { type: 'dialogue', character: 'chef', text: '說到太空，Artemis II 今天安全降落太平洋了。月球任務的太空人回來了。' },

    { type: 'sfx', sound: 'chimes' },

    { type: 'dialogue', character: 'customer-a', text: '至少有一個好消息。SpaceX 去年虧了 50 億美元，但 NASA 這次任務算是成功了。' },

    { type: 'dialogue', character: 'customer-b', text: '法國也宣布要把政府系統從 Windows 換成 Linux，說是要減少對美國科技的依賴。' },

    { type: 'emote', character: 'chef', emote: 'surprise', duration: 800 },

    { type: 'dialogue', character: 'chef', text: '連盟友都在去美國化？這風向⋯⋯' },

    { type: 'dialogue', character: 'customer-a', text: '地緣政治在重塑一切。供應鏈、軟體、能源、晶片——什麼都在重新洗牌。' },

    { type: 'move', character: 'chef', toTile: 'stove' },
    { type: 'wait', duration: 400 },

    // ── Late-night wrap: cautious, mixed signals ──
    {
      type: 'market-data',
      data: {
        tickers: [
          { symbol: 'SPY', price: 528.00, change: -0.9 },
          { symbol: 'QQQ', price: 440.80, change: -1.3 },
          { symbol: 'SHEL', price: 72.90, change: 3.5 },
          { symbol: 'NVDA', price: 108.10, change: -1.9 },
        ],
        volatility: 32,
        vix: 22.8,
        rsi: 43.0,
        priceHistory: [534, 532, 529, 527, 526, 527, 528, 528],
        volumeHistory: [55, 65, 75, 80, 78, 72, 68, 62],
        headline: '盤後整理 — 信心崩盤與科技重組並行',
      },
    },

    { type: 'move', character: 'chef', toTile: 'counter-center' },
    { type: 'dialogue', character: 'chef', text: '信心跌到谷底，但太空人還是平安回來了。有些事不是指數能衡量的。' },

    { type: 'dialogue', character: 'customer-b', text: '市場最怕的不是壞消息，是不確定性。現在什麼都不確定。' },

    { type: 'dialogue', character: 'customer-a', text: '唯一確定的是⋯⋯這碗味噌湯很好喝。' },

    { type: 'wait', duration: 500 },
    { type: 'move', character: 'chef', toTile: 'stove' },

    {
      type: 'narration',
      text: '信心指數可以歸零，但深夜食堂的燈不會熄。在最壞的數字裡，總有人還在煮湯。',
      duration: 4000,
    },
  ],
};
