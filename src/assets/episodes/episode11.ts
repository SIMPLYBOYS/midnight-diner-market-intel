import type { Episode } from '../../engine/types';

export const EPISODE_11: Episode = {
  id: 'ep-11',
  date: '2026-04-17',
  title: '20260417 Cracks in the Wall',
  description: 'Thursday — Philly Fed plunges to -18.4, worst since 2023. Initial claims jump to 248K. Morgan Stanley beats on trading but guides down. Wells Fargo misses on ballooning loan loss reserves. The "two worlds" thesis starts to crack as trade war bleeds into Main Street.',
  actions: [
    // Start BGM
    { type: 'bgm', track: 'chill-lofi', command: 'play' },

    {
      type: 'narration',
      text: '週四深夜，食堂的收音機還開著。今天的數字不太好看——工廠在喊痛，銀行在備糧，而華爾街終於開始認真聽了⋯⋯',
      duration: 3500,
    },

    // ── Opening: weak macro data ──
    {
      type: 'market-data',
      data: {
        tickers: [
          { symbol: 'SPY', price: 529.40, change: -1.3 },
          { symbol: 'QQQ', price: 450.20, change: -1.8 },
          { symbol: 'WTI', price: 88.60, change: -1.3 },
          { symbol: 'GOLD', price: 2482, change: 1.1 },
        ],
        volatility: 36,
        vix: 28.4,
        rsi: 46.0,
        beta: 1.22,
        priceHistory: [536, 535, 533, 531, 530, 529, 529, 529],
        volumeHistory: [68, 75, 82, 90, 95, 92, 88, 85],
        sectors: [
          { label: 'Finance', value: 1280, color: '#ee4444' },
          { label: 'Industrial', value: 820, color: '#ee4444' },
          { label: 'Tech', value: 1480, color: '#ee4444' },
          { label: 'Healthcare', value: 1120, color: '#cc8844' },
          { label: 'Utilities', value: 680, color: '#22cc55' },
        ],
        headline: 'S&P 跌破 530 — Philly Fed 暴跌、初領失業金跳升',
      },
    },

    // Chef at stove
    { type: 'enter', character: 'chef', toTile: 'stove' },
    { type: 'wait', duration: 600 },
    { type: 'move', character: 'chef', toTile: 'prep-area' },
    { type: 'wait', duration: 400 },
    { type: 'move', character: 'chef', toTile: 'stove' },

    // Customer A enters — somber mood
    { type: 'enter', character: 'customer-a', toTile: 'entrance' },
    { type: 'move', character: 'chef', toTile: 'counter-center' },
    { type: 'dialogue', character: 'chef', text: 'いらっしゃい。你的臉色跟昨天不太一樣。' },

    { type: 'move', character: 'customer-a', toTile: 'random-stool' },
    { type: 'sit', character: 'customer-a' },

    { type: 'dialogue', character: 'customer-a', text: '昨天我說「分清楚自己站在哪個世界」。結果今天那面牆裂了。' },

    { type: 'move', character: 'chef', toTile: 'stove' },
    { type: 'wait', duration: 400 },

    { type: 'dialogue', character: 'chef', text: '發生什麼事了？' },

    { type: 'dialogue', character: 'customer-a', text: 'Philly Fed 製造業指數，-18.4。預期是 +2.0。這不是miss，這是墜崖。新訂單暴跌到 -34，2020 年以來最差。' },

    { type: 'emote', character: 'customer-a', emote: 'surprise', duration: 800 },

    { type: 'dialogue', character: 'customer-a', text: '初領失業金 248K，預期 225K。連續兩週上升。製造業跟就業同時亮紅燈——關稅的毒開始擴散了。' },

    { type: 'sfx', sound: 'chimes' },

    // ── Philly Fed + jobless claims detail ──
    {
      type: 'market-data',
      data: {
        tickers: [
          { symbol: 'IWM', price: 192.40, change: -2.8 },
          { symbol: 'XLI', price: 118.60, change: -3.2 },
          { symbol: 'CAT', price: 342.80, change: -4.1 },
          { symbol: 'DE', price: 408.20, change: -3.6 },
        ],
        volatility: 40,
        vix: 29.1,
        rsi: 38.0,
        beta: 1.35,
        priceHistory: [200, 198, 196, 195, 194, 193, 192, 192],
        volumeHistory: [55, 68, 78, 88, 95, 100, 96, 90],
        sectors: [
          { label: 'Machinery', value: 780, color: '#ee4444' },
          { label: 'Transport', value: 820, color: '#ee4444' },
          { label: 'Small Cap', value: 880, color: '#ee4444' },
          { label: 'Materials', value: 760, color: '#ee4444' },
          { label: 'Defense', value: 920, color: '#cc8844' },
        ],
        headline: 'Philly Fed -18.4（預期 +2.0）— 製造業寒冬訊號',
      },
    },

    { type: 'dialogue', character: 'chef', text: '小型股跟工業股被砸最慘？' },

    { type: 'dialogue', character: 'customer-a', text: 'IWM 跌了快 3%，Caterpillar 跌 4%。小型股的營收大部分來自美國本土——如果本土製造業在萎縮，它們無處躲。' },

    { type: 'wait', duration: 300 },

    // Customer B enters — bringing bank earnings
    { type: 'enter', character: 'customer-b', toTile: 'entrance' },
    { type: 'move', character: 'customer-b', toTile: 'random-stool' },
    { type: 'sit', character: 'customer-b' },

    { type: 'move', character: 'chef', toTile: 'counter-center' },
    { type: 'dialogue', character: 'chef', text: 'いらっしゃい。銀行財報今天也出了？' },
    { type: 'move', character: 'chef', toTile: 'stove' },

    { type: 'dialogue', character: 'customer-b', text: 'Morgan Stanley 跟 Wells Fargo，兩份都出了。故事完全不同。' },

    { type: 'dialogue', character: 'customer-a', text: '先說好的？' },

    { type: 'dialogue', character: 'customer-b', text: 'MS 交易部門營收 62 億，年增 22%。波動率就是他們的提款機——VIX 越高，做市越賺。EPS $2.60，超預期 15%。' },

    { type: 'camera', effect: 'flash', duration: 200 },

    // ── Morgan Stanley vs Wells Fargo ──
    {
      type: 'market-data',
      data: {
        tickers: [
          { symbol: 'MS', price: 112.40, change: 2.8 },
          { symbol: 'WFC', price: 62.80, change: -4.5 },
          { symbol: 'JPM', price: 244.20, change: -1.8 },
          { symbol: 'BAC', price: 44.60, change: -3.4 },
        ],
        volatility: 34,
        vix: 28.8,
        rsi: 44.0,
        beta: 1.25,
        priceHistory: [116, 115, 114, 113, 112, 112, 112, 112],
        volumeHistory: [52, 60, 68, 75, 80, 78, 72, 68],
        headline: 'MS 交易部門大賺 vs WFC 壞帳準備金暴增 — 銀行分裂',
      },
    },

    { type: 'move', character: 'chef', toTile: 'counter-center' },
    { type: 'dialogue', character: 'chef', text: '那壞消息呢？Wells Fargo？' },

    { type: 'dialogue', character: 'customer-b', text: 'Wells Fargo 的貸款損失準備金拉到 22 億，比上季多了 40%。商業地產跟小企業貸款的逾期率在爬——而且他們明確說是因為「關稅對中小企業的衝擊」。' },

    { type: 'dialogue', character: 'customer-a', text: '這就是裂縫。上週高盛跟 JPM 報的是華爾街的世界——交易大賺、投行費用高。Wells Fargo 報的是 Main Street 的世界——小企業在借不到錢、還不起錢。' },

    { type: 'emote', character: 'chef', emote: 'surprise', duration: 800 },

    { type: 'dialogue', character: 'chef', text: '同一個經濟體，一邊在賺一邊在崩？' },

    { type: 'dialogue', character: 'customer-b', text: '對。MS 靠波動率賺錢，Wells 靠放貸賺錢。波動率越高 MS 越爽，但放貸環境越差 Wells 越慘。它們在交易同一張經濟的兩面。' },

    { type: 'wait', duration: 300 },

    // ── Tech dragged down, safe havens rise ──
    { type: 'dialogue', character: 'customer-a', text: '科技也沒撐住。昨天 TSMC 的光環只維持了半天。今天開盤 TSM 回吐 3%，帶著 NVDA 一起跌。' },

    {
      type: 'market-data',
      data: {
        tickers: [
          { symbol: 'TSM', price: 172.80, change: -3.1 },
          { symbol: 'NVDA', price: 136.40, change: -4.5 },
          { symbol: 'TLT', price: 98.60, change: 1.8 },
          { symbol: 'GLD', price: 232.40, change: 1.2 },
        ],
        volatility: 38,
        vix: 28.4,
        rsi: 42.0,
        beta: 1.28,
        priceHistory: [178, 177, 176, 174, 173, 173, 173, 173],
        volumeHistory: [72, 80, 88, 92, 88, 82, 78, 75],
        sectors: [
          { label: 'Semicon', value: 1520, color: '#ee4444' },
          { label: 'Software', value: 1280, color: '#ee4444' },
          { label: 'Bond', value: 1080, color: '#22cc55' },
          { label: 'Gold', value: 1180, color: '#22cc55' },
          { label: 'Utilities', value: 680, color: '#22cc55' },
        ],
        headline: 'TSMC 光環消退、NVDA -4.5% — 資金湧入債券與黃金',
      },
    },

    { type: 'dialogue', character: 'customer-b', text: '重點看資金流向——TLT 漲了 1.8%，殖利率在下，代表市場在買債避險。黃金又創新高，2482。' },

    { type: 'dialogue', character: 'customer-a', text: '這是典型的 risk-off 訊號。不是恐慌性拋售，而是「我先躲一下、看看再說」。聰明錢在撤退。' },

    { type: 'move', character: 'chef', toTile: 'stove' },
    { type: 'wait', duration: 400 },

    // ── VIX spike + policy uncertainty ──
    { type: 'dialogue', character: 'chef', text: 'VIX 呢？又回到 28？' },

    { type: 'dialogue', character: 'customer-a', text: '28.4。三天前還在 22。稀土加上今天的 Philly Fed，市場終於意識到——關稅不只是「貿易摩擦」，是真的會殺死需求。' },

    { type: 'dialogue', character: 'customer-b', text: '更麻煩的是 Fed 在 blackout 裡，沒人出來說話。下週三開會，到時候如果 Powell 不鴿，市場會很難看。' },

    { type: 'dialogue', character: 'customer-a', text: 'CME 的六月降息定價今天從 58% 跳到 72%。市場在逼 Fed 的手——「你再不降息，製造業就要出事了」。' },

    { type: 'move', character: 'chef', toTile: 'counter-center' },
    { type: 'dialogue', character: 'chef', text: '但 Powell 不是說過「供給衝擊不應該用貨幣工具對抗」嗎？' },

    { type: 'dialogue', character: 'customer-b', text: '那是上週的 Powell。如果下週初領失業金繼續上升，他的語氣會變的。Fed 怕通膨，但更怕衰退。' },

    // ── Night wrap: wall is cracking ──
    {
      type: 'market-data',
      data: {
        tickers: [
          { symbol: 'SPY', price: 529.40, change: -1.3 },
          { symbol: 'QQQ', price: 450.20, change: -1.8 },
          { symbol: 'VIX', price: 28.40, change: 12.7 },
          { symbol: 'GOLD', price: 2482, change: 1.1 },
        ],
        volatility: 36,
        vix: 28.4,
        rsi: 46.0,
        beta: 1.22,
        priceHistory: [536, 535, 533, 531, 530, 529, 529, 529],
        volumeHistory: [68, 75, 82, 90, 95, 92, 88, 85],
        sectors: [
          { label: 'Utilities', value: 680, color: '#22cc55' },
          { label: 'Gold', value: 1180, color: '#22cc55' },
          { label: 'Bond', value: 1080, color: '#22cc55' },
          { label: 'Tech', value: 1480, color: '#ee4444' },
          { label: 'Industrial', value: 820, color: '#ee4444' },
        ],
        headline: '盤後回顧 — 裂縫從製造業蔓延，避險資產全線走強',
      },
    },

    { type: 'move', character: 'chef', toTile: 'counter-center' },
    { type: 'dialogue', character: 'chef', text: '所以昨天的「兩個世界」⋯⋯' },

    { type: 'dialogue', character: 'customer-a', text: '牆在裂。昨天科技跟 AI 還能獨善其身，今天連 NVDA 都跌了 4.5%。當實體經濟的數據開始惡化，沒有任何板塊是安全的。' },

    { type: 'dialogue', character: 'customer-b', text: '但也不是世界末日。Wells Fargo 的壞帳準備金是「預防性」的——他們在為最壞情況做準備，不代表最壞情況已經發生。' },

    { type: 'dialogue', character: 'chef', text: '那接下來看什麼？' },

    { type: 'dialogue', character: 'customer-a', text: '明天 P&G 跟 American Express 財報。一個是消費必需品，一個是消費信用。如果 P&G 說消費者在降級、AmEx 說刷卡量在掉，那就不是裂縫，是斷裂。' },

    { type: 'dialogue', character: 'customer-b', text: '還有密大消費者信心指數。上個月已經跌到 62 了，如果再破 60，那是 2022 年的水準。' },

    { type: 'dialogue', character: 'chef', text: '聽起來明天才是真正的考驗。' },

    { type: 'dialogue', character: 'customer-a', text: '今天是預警。明天是驗證。如果消費端也開始惡化，那「軟著陸」的敘事就要改寫了。' },

    { type: 'dialogue', character: 'customer-b', text: '持有現金不丟人。這種時候，耐心本身就是一種策略。' },

    { type: 'wait', duration: 500 },
    { type: 'move', character: 'chef', toTile: 'stove' },

    {
      type: 'narration',
      text: '週四的深夜食堂，一碗白粥、一碟醬菜。外面的風大了起來，老闆把門關上了一半。有些夜晚，最好的投資是一碗熱粥和一份清醒——牆在裂的時候，站得離牆遠一點。',
      duration: 4000,
    },
  ],
};
