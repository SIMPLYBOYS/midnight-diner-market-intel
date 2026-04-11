import type { Episode } from '../../engine/types';

export const EPISODE_04: Episode = {
  id: 'ep-04',
  date: '2026-04-09',
  title: '20260409 Fed Nightmare',
  description: 'The Fed\'s nightmare scenario looms as S&P rallies — the diner debates what comes next.',
  actions: [
    // Start BGM
    { type: 'bgm', track: 'chill-lofi', command: 'play' },

    {
      type: 'narration',
      text: '四月的夜風帶著一絲不安，食堂的燈還亮著⋯⋯',
      duration: 3000,
    },

    // ── Initial state: S&P rallied, but tension underneath ──
    {
      type: 'market-data',
      data: {
        tickers: [
          { symbol: 'SPY', price: 532.80, change: 1.4 },
          { symbol: 'QQQ', price: 448.20, change: 1.6 },
          { symbol: 'AAPL', price: 202.30, change: 1.8 },
          { symbol: 'PLTR', price: 24.50, change: -1.2 },
        ],
        volatility: 26,
        vix: 17.8,
        rsi: 62.0,
        beta: 1.08,
        priceHistory: [525, 526, 528, 530, 529, 531, 532, 533],
        volumeHistory: [45, 48, 52, 58, 55, 50, 48, 46],
        sectors: [
          { label: 'Tech', value: 1720, color: '#4488cc' },
          { label: 'Finance', value: 1280, color: '#44aa66' },
          { label: 'Energy', value: 950, color: '#cc8844' },
          { label: 'Health', value: 820, color: '#aa4488' },
          { label: 'Commodities', value: 680, color: '#6644aa' },
        ],
      },
    },

    // Chef at stove
    { type: 'enter', character: 'chef', toTile: 'stove' },
    { type: 'wait', duration: 600 },
    { type: 'move', character: 'chef', toTile: 'prep-area' },
    { type: 'wait', duration: 400 },
    { type: 'move', character: 'chef', toTile: 'stove' },

    // Customer A enters — tech-focused trader
    { type: 'enter', character: 'customer-a', toTile: 'entrance' },
    { type: 'move', character: 'chef', toTile: 'counter-center' },
    { type: 'dialogue', character: 'chef', text: 'いらっしゃい。今晩は冷えるね。' },

    { type: 'move', character: 'customer-a', toTile: 'random-stool' },
    { type: 'sit', character: 'customer-a' },

    { type: 'dialogue', character: 'customer-a', text: '來碗熱的。Master，S&P 今天突破兩條均線了，你知道嗎？' },

    { type: 'move', character: 'chef', toTile: 'stove' },
    { type: 'wait', duration: 400 },

    { type: 'dialogue', character: 'chef', text: '聽說是很罕見的強勢信號？' },

    { type: 'dialogue', character: 'customer-a', text: '歷史上出現這種形態後，後續幾乎都是漲的。AAPL 選擇權也出現異常看多活動。' },

    // ── S&P strength signal ──
    {
      type: 'market-data',
      data: {
        priceHistory: [526, 528, 530, 531, 532, 533, 534, 535],
        volumeHistory: [48, 55, 62, 70, 68, 65, 60, 58],
        headline: 'S&P 500 罕見突破雙均線 — 歷史顯示後市看漲',
      },
    },

    { type: 'move', character: 'chef', toTile: 'counter-center' },
    { type: 'dialogue', character: 'chef', text: '但我看到一篇說聯準會的噩夢情境正在成形⋯⋯' },

    { type: 'emote', character: 'customer-a', emote: 'surprise', duration: 800 },

    { type: 'dialogue', character: 'customer-a', text: '你說滯脹？通膨降不下來，經濟又在放緩？' },

    { type: 'move', character: 'chef', toTile: 'stove' },
    { type: 'wait', duration: 300 },

    // Customer B enters — macro-focused
    { type: 'enter', character: 'customer-b', toTile: 'entrance' },
    { type: 'move', character: 'customer-b', toTile: 'random-stool' },
    { type: 'sit', character: 'customer-b' },

    { type: 'move', character: 'chef', toTile: 'counter-center' },
    { type: 'dialogue', character: 'chef', text: 'いらっしゃい。' },
    { type: 'move', character: 'chef', toTile: 'stove' },

    { type: 'dialogue', character: 'customer-b', text: '剛好聽到你們在聊 Fed。今天降息機率跳到 43% 了，因為停火。' },

    { type: 'dialogue', character: 'customer-a', text: '停火歸停火，但那個停火很脆弱，分析師都說缺乏互信基礎。' },

    // ── Fed rate cut odds + fragile ceasefire ──
    {
      type: 'market-data',
      data: {
        tickers: [
          { symbol: 'SPY', price: 533.50, change: 1.5 },
          { symbol: 'QQQ', price: 449.10, change: 1.8 },
          { symbol: 'META', price: 535.60, change: 2.4 },
          { symbol: 'AAPL', price: 203.10, change: 2.2 },
        ],
        volatility: 30,
        vix: 19.2,
        rsi: 58.0,
        beta: 1.12,
        sectors: [
          { label: 'Tech', value: 1850, color: '#22cc55' },
          { label: 'Finance', value: 1350, color: '#44aa66' },
          { label: 'Energy', value: 880, color: '#cc8844' },
          { label: 'Health', value: 780, color: '#ee4444' },
          { label: 'Commodities', value: 620, color: '#ee4444' },
        ],
        headline: '降息機率升至 43% — 停火帶動市場轉向寬鬆預期',
      },
    },

    { type: 'dialogue', character: 'customer-b', text: '伊朗還打算對荷莫茲海峽通行收費，這等於是勒索牌。亞洲經濟體首當其衝。' },

    { type: 'camera', effect: 'shake', duration: 250, intensity: 2 },

    { type: 'dialogue', character: 'customer-a', text: '大宗商品全面下跌——玉米、棉花、大豆今天都跌了。' },

    { type: 'dialogue', character: 'customer-b', text: '所以 Fed 的噩夢就是：油價推高通膨，但實體經濟在萎縮。升息也不是，降息也不是。' },

    { type: 'move', character: 'chef', toTile: 'counter-center' },
    { type: 'wait', duration: 300 },

    { type: 'dialogue', character: 'chef', text: '對了，AI 那邊有什麼新消息？' },

    { type: 'dialogue', character: 'customer-a', text: 'Meta 發佈了新模型 Muse Spark，是他們超級智慧實驗室的第一個作品。Scale AI 的前 CEO 在帶隊。' },

    { type: 'dialogue', character: 'customer-b', text: '還有 AWS 老闆出來解釋為什麼同時投資 Anthropic 和 OpenAI 不算衝突。' },

    { type: 'emote', character: 'chef', emote: 'surprise', duration: 800 },

    { type: 'dialogue', character: 'chef', text: '兩邊都押？那 Palantir 的 CEO 說只有兩種人能在 AI 時代存活⋯⋯' },

    // ── AI narrative + market divergence ──
    {
      type: 'market-data',
      data: {
        tickers: [
          { symbol: 'META', price: 536.80, change: 2.6 },
          { symbol: 'PLTR', price: 24.20, change: -2.4 },
          { symbol: 'AMZN', price: 195.40, change: 1.5 },
          { symbol: 'GOOG', price: 174.60, change: 1.2 },
        ],
        volatility: 28,
        vix: 18.5,
        rsi: 60.0,
        priceHistory: [530, 532, 533, 534, 535, 534, 533, 534],
        headline: 'Meta 超級智慧實驗室首發模型 — AI 軍備競賽加速',
      },
    },

    { type: 'dialogue', character: 'customer-b', text: '打造 AI 的人和被 AI 取代的人。但他也說還有第三條路——學會使用 AI 的人。' },

    { type: 'dialogue', character: 'customer-a', text: '說到取代，130 間醫院聯合控告 HHS，Medicare 支付出了大問題。醫療板塊壓力不小。' },

    { type: 'move', character: 'chef', toTile: 'stove' },
    { type: 'wait', duration: 400 },

    // ── Late-night wrap: cautious amid rally ──
    {
      type: 'market-data',
      data: {
        tickers: [
          { symbol: 'SPY', price: 534.00, change: 1.6 },
          { symbol: 'QQQ', price: 449.50, change: 1.9 },
          { symbol: 'META', price: 537.20, change: 2.7 },
          { symbol: 'AAPL', price: 203.50, change: 2.4 },
        ],
        volatility: 25,
        vix: 17.5,
        rsi: 63.0,
        priceHistory: [531, 532, 533, 534, 535, 534, 534, 534],
        headline: '盤後穩定 — 技術面看多，但聯準會困境待解',
      },
    },

    { type: 'move', character: 'chef', toTile: 'counter-center' },
    { type: 'dialogue', character: 'chef', text: '均線突破是好事，但 Fed 的困境不會一夜消失。今晚先喝碗湯吧。' },

    { type: 'dialogue', character: 'customer-a', text: '至少方向暫時是往上的。' },

    { type: 'dialogue', character: 'customer-b', text: '暫時。這個字很重要。' },

    { type: 'wait', duration: 500 },
    { type: 'move', character: 'chef', toTile: 'stove' },

    {
      type: 'narration',
      text: '均線之上，是希望還是幻覺？深夜食堂不給答案，只給一碗熱湯。',
      duration: 4000,
    },
  ],
};
