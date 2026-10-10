import type { Episode } from '../../engine/types';

export const EPISODE_09: Episode = {
  id: 'ep-09',
  date: '2026-04-15',
  title: '20260415 The China Card',
  description: 'Tuesday — JPMorgan and Citigroup smash earnings, oil plunges to $91, VIX drops below 23. But Trump threatens 50% tariffs on China over alleged arms shipments to Iran, adding a new front to the crisis.',
  actions: [
    // Start BGM
    { type: 'bgm', track: 'chill-lofi', command: 'play' },

    {
      type: 'narration',
      text: '週二深夜，食堂裡兩杯清酒已經見底。銀行財報全線報捷，油價暴跌，但一張「中國牌」讓所有人又緊張了起來⋯⋯',
      duration: 3500,
    },

    // ── Opening: rally extends, banks crush estimates ──
    {
      type: 'market-data',
      data: {
        tickers: [
          { symbol: 'SPY', price: 538.80, change: 1.2 },
          { symbol: 'QQQ', price: 455.60, change: 2.0 },
          { symbol: 'WTI', price: 91.20, change: -7.9 },
          { symbol: 'GOLD', price: 2418, change: -1.0 },
        ],
        volatility: 28,
        vix: 22.8,
        rsi: 58.0,
        beta: 1.15,
        priceHistory: [530, 531, 533, 535, 536, 537, 538, 539],
        volumeHistory: [88, 82, 78, 72, 68, 65, 62, 60],
        sectors: [
          { label: 'Finance', value: 1480, color: '#22cc55' },
          { label: 'Tech', value: 1650, color: '#22cc55' },
          { label: 'Software', value: 1280, color: '#22cc55' },
          { label: 'Energy', value: 980, color: '#ee4444' },
          { label: 'Defense', value: 870, color: '#cc8844' },
        ],
        headline: 'S&P 連漲兩日 — 銀行財報全線超預期，VIX 跌破 23',
      },
    },

    // Chef at stove
    { type: 'enter', character: 'chef', toTile: 'stove' },
    { type: 'wait', duration: 600 },
    { type: 'move', character: 'chef', toTile: 'prep-area' },
    { type: 'wait', duration: 400 },
    { type: 'move', character: 'chef', toTile: 'stove' },

    // Customer A enters — energized
    { type: 'enter', character: 'customer-a', toTile: 'entrance' },
    { type: 'move', character: 'chef', toTile: 'counter-center' },
    { type: 'dialogue', character: 'chef', text: 'いらっしゃい。連續兩晚來，看來財報季讓你很忙。' },

    { type: 'move', character: 'customer-a', toTile: 'random-stool' },
    { type: 'sit', character: 'customer-a' },

    { type: 'dialogue', character: 'customer-a', text: '摩根大通！EPS $5.94，預期才 $5.45。營收 500 億，年增 10%。昨晚在這裡我說的壓力測試，結果人家直接滿分。' },

    { type: 'move', character: 'chef', toTile: 'stove' },
    { type: 'wait', duration: 400 },

    { type: 'dialogue', character: 'chef', text: '比預期高了半塊？投行部門也在賺？' },

    { type: 'dialogue', character: 'customer-a', text: '投行費用年增 28%，管理資產破 4.8 兆。Jamie Dimon 的原話是「經濟健康」，但也加了一句「有烏雲」。' },

    { type: 'emote', character: 'customer-a', emote: 'surprise', duration: 800 },

    { type: 'dialogue', character: 'customer-a', text: '花旗更誇張——EPS $3.06，去年同期才 $1.96。營收 246 億，十年最佳季度。' },

    { type: 'sfx', sound: 'chimes' },

    // ── Bank earnings detail ──
    {
      type: 'market-data',
      data: {
        tickers: [
          { symbol: 'JPM', price: 248.60, change: 4.2 },
          { symbol: 'C', price: 76.80, change: 5.8 },
          { symbol: 'BAC', price: 46.20, change: 3.1 },
          { symbol: 'GS', price: 518.40, change: 3.2 },
        ],
        volatility: 26,
        vix: 22.5,
        rsi: 60.0,
        beta: 1.12,
        priceHistory: [238, 240, 242, 244, 246, 247, 248, 249],
        volumeHistory: [60, 65, 72, 78, 82, 80, 75, 70],
        headline: 'JPM +4%、花旗 +6% — 亂世銀行成最大贏家',
      },
    },

    { type: 'move', character: 'chef', toTile: 'counter-center' },
    { type: 'dialogue', character: 'chef', text: '美國銀行呢？今天早上也報了？' },

    { type: 'dialogue', character: 'customer-a', text: '也超預期。EPS $1.01，營收 299 億，年增 9%。四大銀行全部過關，這在戰時環境下太罕見了。' },

    { type: 'wait', duration: 300 },

    // Customer B enters — looking concerned despite rally
    { type: 'enter', character: 'customer-b', toTile: 'entrance' },
    { type: 'move', character: 'customer-b', toTile: 'random-stool' },
    { type: 'sit', character: 'customer-b' },

    { type: 'move', character: 'chef', toTile: 'counter-center' },
    { type: 'dialogue', character: 'chef', text: 'いらっしゃい。今天應該是好消息吧？' },
    { type: 'move', character: 'chef', toTile: 'stove' },

    { type: 'dialogue', character: 'customer-b', text: '銀行是好消息。油價暴跌也是好消息。但你們看到川普今天說了什麼嗎？' },

    { type: 'dialogue', character: 'customer-a', text: '⋯⋯50% 對中國關稅？' },

    { type: 'camera', effect: 'shake', duration: 300, intensity: 3 },

    { type: 'dialogue', character: 'customer-b', text: '有情報顯示中國在暗中向伊朗運送武器。川普直接威脅：如果查實，對中國加徵 50% 關稅。' },

    // ── China tariff threat ──
    {
      type: 'market-data',
      data: {
        tickers: [
          { symbol: 'FXI', price: 28.40, change: -3.8 },
          { symbol: 'BABA', price: 88.20, change: -4.5 },
          { symbol: 'KWEB', price: 31.60, change: -4.2 },
          { symbol: 'TSM', price: 162.80, change: -2.1 },
        ],
        volatility: 38,
        vix: 23.5,
        rsi: 42.0,
        beta: 1.28,
        priceHistory: [30, 29.8, 29.5, 29.2, 29, 28.8, 28.5, 28.4],
        volumeHistory: [45, 55, 68, 78, 85, 90, 88, 82],
        sectors: [
          { label: 'China Tech', value: 880, color: '#ee4444' },
          { label: 'Semicon', value: 1180, color: '#ee4444' },
          { label: 'US Finance', value: 1480, color: '#22cc55' },
          { label: 'US Tech', value: 1650, color: '#22cc55' },
          { label: 'Consumer', value: 920, color: '#cc8844' },
        ],
        headline: '川普威脅對中國加徵 50% 關稅 — 中概股重挫',
      },
    },

    { type: 'dialogue', character: 'customer-a', text: 'FXI 跌了快 4%，阿里巴巴跌 4.5%。好不容易的反彈行情，中概股直接被踢出局。' },

    { type: 'dialogue', character: 'customer-b', text: '這才是真正的風險。伊朗是區域問題，但中美貿易戰是全球問題。50% 的關稅會讓整條供應鏈重新洗牌。' },

    { type: 'move', character: 'chef', toTile: 'counter-center' },
    { type: 'dialogue', character: 'chef', text: '不是最高法院已經擋掉了之前的關稅嗎？' },

    { type: 'dialogue', character: 'customer-a', text: '擋掉的是 IEEPA 那批。川普改用 Section 122，10% 通用關稅到七月底前有效。但 50% 是另一個級別。' },

    { type: 'dialogue', character: 'customer-b', text: '而且 23 個州已經聯合起訴了。法律戰還在打，政策不確定性才是市場最怕的東西。' },

    { type: 'emote', character: 'chef', emote: 'surprise', duration: 800 },

    { type: 'wait', duration: 300 },

    // ── Oil plunge + peace dividend ──
    { type: 'dialogue', character: 'chef', text: '那油價怎麼反而大跌？' },

    { type: 'dialogue', character: 'customer-a', text: '跌到 91 了，一天跌了快 8%。市場在定價和談重啟——荷莫茲海峽可能重新開放。' },

    {
      type: 'market-data',
      data: {
        tickers: [
          { symbol: 'WTI', price: 91.20, change: -7.9 },
          { symbol: 'BRENT', price: 95.40, change: -4.1 },
          { symbol: 'XOM', price: 118.60, change: -4.5 },
          { symbol: 'BTC', price: 69200, change: -3.7 },
        ],
        volatility: 32,
        vix: 22.8,
        rsi: 38.0,
        beta: 1.20,
        priceHistory: [99, 98, 96, 95, 93, 92, 91, 91],
        volumeHistory: [100, 95, 90, 85, 80, 78, 75, 72],
        headline: 'WTI 暴跌至 $91 — 三週低點，和平股利浮現',
      },
    },

    { type: 'dialogue', character: 'customer-b', text: 'BTC 也繼續回落，從 73K 掉到 69K。避險資金在撤退，和昨天的邏輯一樣——risk-on 輪動。' },

    { type: 'dialogue', character: 'customer-a', text: '但油價跌對通膨是利好。今天 PPI 也出來了，月增 0.5%，低於預期的 1.1%。Fed 的壓力小了一點。' },

    { type: 'move', character: 'chef', toTile: 'stove' },
    { type: 'wait', duration: 400 },

    { type: 'dialogue', character: 'chef', text: '所以好消息是和平有望、銀行賺錢、油價在跌。壞消息是⋯⋯' },

    { type: 'dialogue', character: 'customer-b', text: '壞消息是又要打貿易戰了。而且這次是用伊朗當藉口打中國，地緣政治和經濟戰綁在一起。' },

    // ── Night wrap: two-front war ──
    {
      type: 'market-data',
      data: {
        tickers: [
          { symbol: 'SPY', price: 538.80, change: 1.2 },
          { symbol: 'QQQ', price: 455.60, change: 2.0 },
          { symbol: 'JPM', price: 248.60, change: 4.2 },
          { symbol: 'FXI', price: 28.40, change: -3.8 },
        ],
        volatility: 30,
        vix: 22.8,
        rsi: 58.0,
        beta: 1.18,
        priceHistory: [530, 533, 535, 537, 538, 539, 539, 539],
        volumeHistory: [88, 82, 75, 70, 68, 65, 62, 60],
        sectors: [
          { label: 'Finance', value: 1480, color: '#22cc55' },
          { label: 'Tech', value: 1650, color: '#22cc55' },
          { label: 'Software', value: 1280, color: '#22cc55' },
          { label: 'China', value: 880, color: '#ee4444' },
          { label: 'Energy', value: 980, color: '#ee4444' },
        ],
        headline: '盤後回顧 — 美股慶祝財報季，但中國牌讓多頭不敢全押',
      },
    },

    { type: 'move', character: 'chef', toTile: 'counter-center' },
    { type: 'dialogue', character: 'chef', text: 'Dimon 說的「烏雲」，是不是就是這個？' },

    { type: 'dialogue', character: 'customer-a', text: '他看得比我們遠。經濟數字好看，但地緣政治隨時能翻盤。一場戰爭還沒結束，另一場可能就要開始。' },

    { type: 'dialogue', character: 'customer-b', text: 'Nasdaq 已經連漲十天了。歷史上每次連漲超過一週，接下來不是加速就是急轉。' },

    { type: 'dialogue', character: 'chef', text: '那你們今晚的結論是？' },

    { type: 'dialogue', character: 'customer-a', text: '財報給了底氣，但別忘了頭上還有兩朵雲——伊朗和中國。任何一朵下雨，都會淋濕所有人。' },

    { type: 'dialogue', character: 'customer-b', text: '享受反彈，但別追高。這種市場裡，活著比贏更重要。' },

    { type: 'wait', duration: 500 },
    { type: 'move', character: 'chef', toTile: 'stove' },

    {
      type: 'narration',
      text: '週二的深夜食堂，財報的香氣和關稅的火藥味混在一起。老闆默默加了一道菜——中華涼麵。有時候，最複雜的局勢需要最冷靜的頭腦。',
      duration: 4000,
    },
  ],
};
