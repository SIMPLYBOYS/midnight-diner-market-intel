import type { Episode } from '../../engine/types';

export const EPISODE_13: Episode = {
  id: 'ep-13',
  date: '2026-04-20',
  title: '20260420 Weekend War Gap',
  description: 'Monday — The U.S. Navy seized the Iranian-flagged Touska in the Gulf of Oman over the weekend. Dow futures gap down 400. Oil jumps as the Strait of Hormuz turns hot. A massive earnings week opens with Tesla and Boeing leading 88 S&P 500 reports. Tariff refunds launch today. Cursor raises at a $50B valuation while public AI bleeds. Blue Origin re-flies New Glenn — and misses an orbit. Monday opens on a war.',
  actions: [
    // Start BGM
    { type: 'bgm', track: 'chill-lofi', command: 'play' },

    {
      type: 'narration',
      text: '週一深夜。週末美國海軍在阿曼灣攔下一艘伊朗船——而那一槍的回音，是 Dow futures 開盤前 -400 點、油價跳空、整個亞洲開盤帶著一張新的臉。',
      duration: 4200,
    },

    // ── Opening: Monday gap-down on weekend war ──
    {
      type: 'market-data',
      data: {
        tickers: [
          { symbol: 'SPY', price: 522.40, change: -1.0 },
          { symbol: 'QQQ', price: 442.10, change: -1.1 },
          { symbol: 'WTI', price: 104.20, change: 5.5 },
          { symbol: 'VIX', price: 32.40, change: 11.3 },
        ],
        volatility: 48,
        vix: 32.4,
        rsi: 36.0,
        beta: 1.32,
        priceHistory: [528, 527, 525, 523, 522, 522, 522, 522],
        volumeHistory: [82, 92, 100, 108, 105, 98, 92, 88],
        sectors: [
          { label: 'Energy', value: 1480, color: '#22cc55' },
          { label: 'Defense', value: 1320, color: '#22cc55' },
          { label: 'Gold', value: 1280, color: '#22cc55' },
          { label: 'Tech', value: 1380, color: '#ee4444' },
          { label: 'Travel', value: 480, color: '#ee4444' },
        ],
        headline: 'Dow futures -400、WTI +5.5%、VIX 跳上 32 — 週末波斯灣事件直接寫進開盤價',
      },
    },

    // Chef at stove
    { type: 'enter', character: 'chef', toTile: 'stove' },
    { type: 'wait', duration: 600 },
    { type: 'move', character: 'chef', toTile: 'prep-area' },
    { type: 'wait', duration: 400 },
    { type: 'move', character: 'chef', toTile: 'stove' },

    // Customer A enters — bringing the war news
    { type: 'enter', character: 'customer-a', toTile: 'entrance' },
    { type: 'move', character: 'chef', toTile: 'counter-center' },
    { type: 'dialogue', character: 'chef', text: 'いらっしゃい。週一晚上你怎麼一臉打過仗的樣子。' },

    { type: 'move', character: 'customer-a', toTile: 'random-stool' },
    { type: 'sit', character: 'customer-a' },

    { type: 'dialogue', character: 'customer-a', text: '不是我打。是週日川普在阿曼灣派海軍攔下伊朗籍貨船 Touska——說它在 Treasury 制裁名單上。亞洲一開盤，Dow futures 直接 -400。' },

    { type: 'move', character: 'chef', toTile: 'stove' },
    { type: 'wait', duration: 400 },

    { type: 'dialogue', character: 'chef', text: '油價呢？週五 WTI 還在 $98。' },

    { type: 'dialogue', character: 'customer-a', text: '今天直接跳到 $104，+5.5%。市場最怕的不是「打」，是「Strait of Hormuz 真的會被關」這個尾端風險被重新定價。VIX 從 29 飆到 32，恐慌指數跳了一截。' },

    { type: 'emote', character: 'customer-a', emote: 'surprise', duration: 800 },

    { type: 'dialogue', character: 'customer-a', text: '更離譜的是 Energy Secretary Wright 直接放話：美國油價要等到「明年」才有機會回到 $3/加侖以下。換算就是——這次能源通膨不是季度問題，是全年的。' },

    { type: 'dialogue', character: 'chef', text: '上週還說 Iran 戰爭是「實體資產的牛市」，這週就要驗收？' },

    { type: 'dialogue', character: 'customer-a', text: '驗收得很乾脆。XLE +3.8%、LMT +2.4%、GLD +1.6%——上週末買進的人今天都笑了。但 SPY -1%、QQQ -1.1%、消費股集體被砸。資金在搬家。' },

    { type: 'sfx', sound: 'chimes' },

    // ── Energy + Defense + Gold rally ──
    {
      type: 'market-data',
      data: {
        tickers: [
          { symbol: 'XLE', price: 92.40, change: 3.8 },
          { symbol: 'LMT', price: 562.80, change: 2.4 },
          { symbol: 'GLD', price: 248.60, change: 1.6 },
          { symbol: 'XOM', price: 124.20, change: 3.2 },
        ],
        volatility: 42,
        vix: 32.4,
        rsi: 58.0,
        beta: 1.18,
        priceHistory: [86, 87, 88, 90, 91, 92, 92, 92],
        volumeHistory: [62, 72, 85, 95, 102, 96, 88, 82],
        sectors: [
          { label: 'Energy', value: 1480, color: '#22cc55' },
          { label: 'Defense', value: 1320, color: '#22cc55' },
          { label: 'Gold', value: 1280, color: '#22cc55' },
          { label: 'Pipelines', value: 920, color: '#22cc55' },
          { label: 'Tankers', value: 680, color: '#22cc55' },
        ],
        headline: '能源、國防、黃金齊揚 — Strait of Hormuz 風險溢價直接寫進三大板塊',
      },
    },

    { type: 'wait', duration: 300 },

    // Customer B enters with the earnings week angle
    { type: 'enter', character: 'customer-b', toTile: 'entrance' },
    { type: 'move', character: 'customer-b', toTile: 'random-stool' },
    { type: 'sit', character: 'customer-b' },

    { type: 'move', character: 'chef', toTile: 'counter-center' },
    { type: 'dialogue', character: 'chef', text: 'いらっしゃい。財報週開了？' },
    { type: 'move', character: 'chef', toTile: 'stove' },

    { type: 'dialogue', character: 'customer-b', text: '本週 88 家 S&P 500 公司公佈，主菜是 Tesla 跟 Boeing。Tesla 週三盤後、Boeing 週三盤前——一晚上看完整個產業鏈體溫。' },

    { type: 'dialogue', character: 'customer-a', text: 'Tesla 是真正的試金石。上週 Musk 的 Terafab 才把 Nvidia 嚇了一跳，這週要看 deliveries 撐不撐得住。如果交車數字弱，Terafab 只是「燒錢的故事」。' },

    { type: 'dialogue', character: 'customer-b', text: '還有 robotaxi——Tesla 上週末把服務擴到 Dallas 跟 Houston，現在三個城市都在德州。財報法說會一定會被問：什麼時候出德州？什麼時候有沒有 safety driver 的真正規模化？' },

    { type: 'camera', effect: 'flash', duration: 200 },

    // ── Earnings week setup: TSLA / BA / 88 S&P 500 ──
    {
      type: 'market-data',
      data: {
        tickers: [
          { symbol: 'TSLA', price: 268.40, change: -2.8 },
          { symbol: 'BA', price: 184.20, change: -1.6 },
          { symbol: 'GOOGL', price: 168.80, change: -1.4 },
          { symbol: 'IBM', price: 218.40, change: -0.8 },
        ],
        volatility: 44,
        vix: 32.4,
        rsi: 38.0,
        beta: 1.28,
        priceHistory: [278, 275, 273, 270, 268, 268, 268, 268],
        volumeHistory: [58, 68, 78, 86, 92, 88, 82, 76],
        sectors: [
          { label: 'EV', value: 980, color: '#ee4444' },
          { label: 'Aero', value: 880, color: '#ee4444' },
          { label: 'Cloud', value: 1380, color: '#ee4444' },
          { label: 'Earnings', value: 1280, color: '#cc8844' },
        ],
        headline: '本週 88 家 S&P 500 財報 — TSLA、BA、GOOGL、IBM 是四個壓力點',
      },
    },

    { type: 'dialogue', character: 'customer-b', text: 'Boeing 也不是輕鬆的。週末 Blue Origin 重新使用 New Glenn 火箭——歷史首次——但同一場任務客戶衛星進錯軌道。Aerospace 整個板塊信譽再被搖一次。' },

    { type: 'dialogue', character: 'customer-a', text: '同一家公司一天裡完成「historic milestone」跟「customer satellite mis-orbit」——這種戲劇性最傷市場神經。BA 開盤前就被砸 1.6%。' },

    { type: 'wait', duration: 300 },

    // ── Tariff refund day + China rotation ──
    { type: 'move', character: 'chef', toTile: 'counter-center' },
    { type: 'dialogue', character: 'chef', text: '聽說今天是關稅退款開放第一天？' },

    { type: 'dialogue', character: 'customer-b', text: '對。上個月最高法院判川普某些關稅違憲後，Treasury 今天正式啟動退款系統——付過違憲關稅的企業可以開始申請。' },

    { type: 'dialogue', character: 'customer-a', text: '這對誰最有感？進口大戶——零售、家電、自行車、服飾。Best Buy、Tractor Supply、Wayfair 這幾家盤前都漲。等等，但這只是 retroactive，未來新關稅還是新仗。' },

    { type: 'dialogue', character: 'customer-b', text: '更微妙的是 Alibaba。這個月是它今年一月以來最強的一個月——分析師喜歡它在 AI 購物、AI 影片的投入。當美國 AI 估值喊到瘋狂的時候，資金開始往中國 AI 找便宜貨。' },

    { type: 'emote', character: 'customer-a', emote: 'surprise', duration: 700 },

    { type: 'dialogue', character: 'customer-a', text: '說到瘋狂——Cursor 在談 $2B 募資、估值超過 $50B。一家寫 IDE plugin 的公司估值頂上 Adobe 一半。當公開市場在被砸的時候，私募市場在最後一輪 FOMO。' },

    { type: 'dialogue', character: 'customer-b', text: '這就是 2026 春天最詭異的地方——public 市場在 risk-off，private 市場在 risk-on。兩邊看的不是同一個未來。' },

    {
      type: 'market-data',
      data: {
        tickers: [
          { symbol: 'BABA', price: 102.40, change: 3.6 },
          { symbol: 'BBY', price: 86.40, change: 2.8 },
          { symbol: 'AMZN', price: 218.60, change: -1.8 },
          { symbol: 'PLTR', price: 28.40, change: -3.4 },
        ],
        volatility: 40,
        vix: 32.4,
        rsi: 44.0,
        beta: 1.22,
        priceHistory: [98, 99, 100, 101, 102, 102, 102, 103],
        volumeHistory: [54, 64, 76, 84, 88, 84, 78, 72],
        sectors: [
          { label: 'China-AI', value: 1080, color: '#22cc55' },
          { label: 'Retail', value: 880, color: '#22cc55' },
          { label: 'AI-Public', value: 1280, color: '#ee4444' },
          { label: 'AI-Private', value: 1480, color: '#22cc55' },
          { label: 'Mega-Cap', value: 1380, color: '#ee4444' },
        ],
        headline: 'BABA 月內最強、Cursor 私募 $50B、AMZN 被 Goldman 點名 — AI 估值在分裂',
      },
    },

    { type: 'dialogue', character: 'chef', text: 'Goldman 對 Amazon 說了什麼？' },

    { type: 'dialogue', character: 'customer-b', text: '在最近那筆大型併購之後，Goldman 給了「blunt words」——大白話：Amazon 的 AWS 成長要再加速，否則這次併購只是把資產負債表變難看。AMZN 盤前 -1.8%。' },

    { type: 'wait', duration: 400 },

    // ── Macro thread: Fed Wednesday + tariff dynamics + yen ──
    { type: 'move', character: 'chef', toTile: 'counter-center' },
    { type: 'dialogue', character: 'chef', text: '週三 Fed 還在嗎？' },

    { type: 'dialogue', character: 'customer-a', text: '在。而且現在 Powell 的劇本被改了——他原本要解釋「為什麼通膨還是黏」，現在還要多解釋「戰爭油價衝擊算不算暫時性」。如果他講錯一個字，VIX 就直接上 35。' },

    { type: 'dialogue', character: 'customer-b', text: '日本那邊也在加壓。ADB 主席公開說 BoJ 升息太慢、yen 壓力會爆。如果週四 BoJ 不動，USD/JPY 可能再往 158 試。' },

    { type: 'dialogue', character: 'customer-a', text: '日圓弱、油價高、美元強——這個組合對新興市場是雙重打擊。今天亞洲開盤就「mixed」，意思是「沒人敢下大注，等美國醒來再說」。' },

    { type: 'camera', effect: 'shake', duration: 300, intensity: 2 },

    // ── Strait of Hormuz pricing-in ──
    {
      type: 'market-data',
      data: {
        tickers: [
          { symbol: 'WTI', price: 104.20, change: 5.5 },
          { symbol: 'BRENT', price: 108.40, change: 5.8 },
          { symbol: 'JPY=X', price: 156.80, change: 0.6 },
          { symbol: 'DXY', price: 108.40, change: 0.4 },
        ],
        volatility: 46,
        vix: 32.4,
        rsi: 64.0,
        beta: 1.18,
        priceHistory: [98, 99, 100, 102, 103, 104, 104, 104],
        volumeHistory: [68, 78, 88, 96, 100, 96, 92, 88],
        headline: 'WTI $104 / Brent $108、Yen 156、DXY 108 — 「戰爭通膨」+ 「強勢美元」雙重組合',
      },
    },

    { type: 'dialogue', character: 'customer-b', text: 'Brent 上 $108 是 2024 以來第一次。這對 EM 央行是直接的政策壓力——本來想降息的，現在不能降；本來想撐匯率的，現在更難撐。' },

    { type: 'wait', duration: 300 },

    // ── Polymarket: prediction-market read on Iran + Fed ──
    { type: 'move', character: 'chef', toTile: 'counter-center' },
    { type: 'dialogue', character: 'chef', text: '這種時候賠率市場會誠實一點嗎？' },

    { type: 'dialogue', character: 'customer-a', text: '會，而且很冷靜。Polymarket 三個跟今天直接相關的合約——一個說 Iran 政權會在 4/30 前倒、一個說 6/30 前倒、一個說 Fed 四月會議會降 50bp。三個一起看，畫面就出來了。' },

    {
      type: 'polymarket-odds',
      data: {
        asOf: '2026-04-20T02:13:23Z',
        highlightSlug: 'will-the-iranian-regime-fall-by-april-30',
        markets: [
          {
            slug: 'will-the-iranian-regime-fall-by-april-30',
            question: 'Will the Iranian regime fall by April 30?',
            yesProbability: 0.0115,
            volume: 36293354,
            endDate: '2026-04-30T00:00:00Z',
            history: [
              { t: 1776542455, p: 0.0105 }, { t: 1776546050, p: 0.0115 }, { t: 1776549644, p: 0.0115 }, { t: 1776553245, p: 0.0125 },
              { t: 1776556850, p: 0.0110 }, { t: 1776560445, p: 0.0115 }, { t: 1776564043, p: 0.0105 }, { t: 1776567646, p: 0.0095 },
              { t: 1776571251, p: 0.0095 }, { t: 1776574841, p: 0.0095 }, { t: 1776578448, p: 0.0095 }, { t: 1776582036, p: 0.0095 },
              { t: 1776585652, p: 0.0105 }, { t: 1776589253, p: 0.0115 }, { t: 1776592846, p: 0.0105 }, { t: 1776596449, p: 0.0120 },
              { t: 1776603647, p: 0.0115 }, { t: 1776607251, p: 0.0105 }, { t: 1776610857, p: 0.0125 }, { t: 1776618048, p: 0.0125 },
              { t: 1776621657, p: 0.0095 }, { t: 1776625249, p: 0.0135 }, { t: 1776628850, p: 0.0125 }, { t: 1776632450, p: 0.0155 },
              { t: 1776636049, p: 0.0105 }, { t: 1776639644, p: 0.0105 }, { t: 1776643254, p: 0.0115 }, { t: 1776646842, p: 0.0105 },
              { t: 1776650442, p: 0.0115 }, { t: 1776651153, p: 0.0105 },
            ],
          },
          {
            slug: 'will-the-iranian-regime-fall-by-june-30',
            question: 'Will the Iranian regime fall by June 30?',
            yesProbability: 0.0950,
            volume: 32386702,
            endDate: '2026-06-30T00:00:00Z',
            history: [
              { t: 1776301250, p: 0.0750 }, { t: 1776312058, p: 0.0750 }, { t: 1776315658, p: 0.0750 }, { t: 1776322857, p: 0.0750 },
              { t: 1776337251, p: 0.0750 }, { t: 1776362458, p: 0.0650 }, { t: 1776387655, p: 0.0650 }, { t: 1776391259, p: 0.0650 },
              { t: 1776398451, p: 0.0650 }, { t: 1776402053, p: 0.0650 }, { t: 1776409256, p: 0.0650 }, { t: 1776412801, p: 0.0650 },
              { t: 1776423654, p: 0.0650 }, { t: 1776438033, p: 0.0650 }, { t: 1776445217, p: 0.0650 }, { t: 1776448838, p: 0.0650 },
              { t: 1776452407, p: 0.0650 }, { t: 1776456014, p: 0.0650 }, { t: 1776470421, p: 0.0650 }, { t: 1776495655, p: 0.0650 },
              { t: 1776499258, p: 0.0650 }, { t: 1776506459, p: 0.0650 }, { t: 1776510014, p: 0.0650 }, { t: 1776524435, p: 0.0650 },
              { t: 1776535212, p: 0.0650 }, { t: 1776560458, p: 0.0850 }, { t: 1776574855, p: 0.0750 }, { t: 1776582050, p: 0.0750 },
              { t: 1776614422, p: 0.0850 }, { t: 1776651102, p: 0.0950 },
            ],
          },
          {
            slug: 'will-the-fed-decrease-interest-rates-by-50-bps-after-the-april-2026-meeting',
            question: 'Will the Fed decrease interest rates by 50+ bps after the April 2026 meeting?',
            yesProbability: 0.0015,
            volume: 42956655,
            endDate: '2026-04-29T00:00:00Z',
            history: [
              { t: 1776362436, p: 0.0015 }, { t: 1776387652, p: 0.0015 }, { t: 1776391256, p: 0.0015 }, { t: 1776398448, p: 0.0015 },
              { t: 1776402050, p: 0.0015 }, { t: 1776409252, p: 0.0015 }, { t: 1776420057, p: 0.0015 }, { t: 1776423651, p: 0.0015 },
              { t: 1776430859, p: 0.0015 }, { t: 1776438027, p: 0.0015 }, { t: 1776445213, p: 0.0015 }, { t: 1776448833, p: 0.0015 },
              { t: 1776452403, p: 0.0015 }, { t: 1776456011, p: 0.0015 }, { t: 1776466858, p: 0.0015 }, { t: 1776470405, p: 0.0015 },
              { t: 1776484859, p: 0.0015 }, { t: 1776495652, p: 0.0015 }, { t: 1776499254, p: 0.0015 }, { t: 1776502859, p: 0.0015 },
              { t: 1776506456, p: 0.0015 }, { t: 1776510008, p: 0.0015 }, { t: 1776524425, p: 0.0015 }, { t: 1776531657, p: 0.0015 },
              { t: 1776560455, p: 0.0015 }, { t: 1776564059, p: 0.0015 }, { t: 1776574852, p: 0.0015 }, { t: 1776582047, p: 0.0015 },
              { t: 1776614417, p: 0.0015 }, { t: 1776651100, p: 0.0015 },
            ],
          },
        ],
      },
    },

    { type: 'dialogue', character: 'customer-b', text: '4/30 規模這檔倒在 1.1%——意思是即使 Touska 被攔，市場根本沒在押「政權崩」這個劇本。今天的事是「擴大衝突」，不是「政變」。' },

    { type: 'dialogue', character: 'customer-a', text: '有意思的是 6/30 那檔——昨天還在 6.5%，今天一路上去到 9.5%。不是大跳，但很堅定。長尾風險被重新定價。' },

    { type: 'dialogue', character: 'customer-b', text: '最殘酷的是 Fed -50bp 那檔——0.15%。市場在告訴 Powell：「你連大幅降息的選項都沒有，油價已經把它鎖死了。」明天他要面對的不是預期管理，是被預期管理。' },

    { type: 'emote', character: 'customer-a', emote: 'surprise', duration: 700 },

    { type: 'dialogue', character: 'customer-a', text: '這就是 prediction market 比新聞乾淨的地方——它不關心「誰開了哪一槍」，只算「這對結果意味著什麼」。三個百分比就把整個故事講完了。' },

    { type: 'wait', duration: 400 },

    // ── Tech subplot: AI 12-month window + Palantir / OpenAI ──
    { type: 'move', character: 'chef', toTile: 'stove' },

    { type: 'dialogue', character: 'customer-a', text: '科技還有兩條微妙的故事線。TechCrunch 寫的「12-month window」——很多 AI 新創存在的理由是 foundation model 還沒擴張到他們的領域，但這個窗口剩下的時間正在縮短。' },

    { type: 'dialogue', character: 'customer-b', text: '這就是為什麼 OpenAI 連環併購——他們在補上「存在性問題」。底層越來越強，套殼公司越來越危險，但能補位的「資料 + 工作流」公司現在最值錢。' },

    { type: 'dialogue', character: 'customer-a', text: 'Palantir 那邊就更像政治了。週末他們發了一份「mini-manifesto」反對 inclusivity 跟「regressive」文化。市場給負面評價——當你要拿政府單，你不該變成政治符號。PLTR -3.4%。' },

    { type: 'dialogue', character: 'customer-b', text: '還有一個被忽略的——VC 圈傳奇 Ron Conway 宣布罹癌。他不是新聞主軸，但他是 SV Angel、Twitter/Square/Plaid 的早期支持者。一個時代在慢慢翻頁。' },

    { type: 'wait', duration: 400 },

    // ── Monday wrap thesis ──
    { type: 'dialogue', character: 'chef', text: '今天的關鍵詞是什麼？' },

    { type: 'dialogue', character: 'customer-a', text: '"Weekend war gap"——市場禮拜五收的位置跟禮拜一開的位置中間，多了一場戰爭。週五是「even winners bleed」、今天是「war does the bleeding for you」。' },

    { type: 'dialogue', character: 'customer-b', text: '我加一個——「barbell tightens」。能源、國防、黃金一邊；現金、短債一邊。中間的東西今年都很危險，無論它叫成長股還是 quality。' },

    { type: 'dialogue', character: 'customer-a', text: '本週的劇本——週二 Tesla 盤後、週三 Boeing 盤前 + Fed 會議、週四 BoJ + GOOGL、週五關稅 90 天豁免到期。任何一個出錯，VIX 就是 35。' },

    { type: 'dialogue', character: 'customer-b', text: '但也要記得——當每個人都在說「VIX 會上 35」的時候，常常就是它不會上的時候。市場是反人性的。' },

    // ── Night wrap: Monday close projection ──
    {
      type: 'market-data',
      data: {
        tickers: [
          { symbol: 'SPY', price: 522.40, change: -1.0 },
          { symbol: 'QQQ', price: 442.10, change: -1.1 },
          { symbol: 'WTI', price: 104.20, change: 5.5 },
          { symbol: 'GLD', price: 248.60, change: 1.6 },
        ],
        volatility: 48,
        vix: 32.4,
        rsi: 36.0,
        beta: 1.32,
        priceHistory: [528, 527, 525, 523, 522, 522, 522, 522],
        volumeHistory: [82, 92, 100, 108, 105, 98, 92, 88],
        sectors: [
          { label: 'Energy', value: 1480, color: '#22cc55' },
          { label: 'Defense', value: 1320, color: '#22cc55' },
          { label: 'Gold', value: 1280, color: '#22cc55' },
          { label: 'Tech', value: 1380, color: '#ee4444' },
          { label: 'Consumer', value: 680, color: '#ee4444' },
        ],
        headline: '週一收盤 — SPY 跌穿 525、能源 / 國防 / 黃金齊揚，VIX 32 為本週揭幕',
      },
    },

    { type: 'move', character: 'chef', toTile: 'counter-center' },
    { type: 'dialogue', character: 'chef', text: '明天 Tesla 法說會。這個禮拜會很長嗎？' },

    { type: 'dialogue', character: 'customer-a', text: '會。從現在到週五，每天都有變數。但記住一件事——週末多了一場戰爭、開盤就這樣，這代表市場已經把第一波恐慌吃下去了。真正的危險是「第二波驚喜」。' },

    { type: 'dialogue', character: 'customer-b', text: '第二波驚喜可能是：Hormuz 真的關了、Powell 講錯話、Tesla 交車數字爛、Google 雲端成長放緩——任何一個都能再砸 SPY 一個 -2%。' },

    { type: 'dialogue', character: 'customer-a', text: '所以今天晚上要做的事——確認你的 stop-loss、確認你的現金部位、不要在恐慌中買「便宜」。便宜的東西明天可以更便宜。' },

    { type: 'dialogue', character: 'chef', text: '什麼時候算可以買？' },

    { type: 'dialogue', character: 'customer-b', text: 'VIX 從 32 回落到 25 以下、且 SPY 守住 520——那就是技術面的安全區。在那之前，現金是最好的部位。' },

    { type: 'wait', duration: 500 },
    { type: 'move', character: 'chef', toTile: 'stove' },

    {
      type: 'narration',
      text: '週一深夜的食堂，一碗熱拉麵、一杯麥茶。屋外的風帶著一點海上的硝煙——Touska 那艘船在阿曼灣上漂著、Powell 在 D.C. 翻著新版的講稿、Musk 在 Austin 數他的車、Cursor 的兩個 founder 在沙丘路上微笑。每一個人都在自己的時區裡，賭下一週會比上一週更安靜。市場通常會讓他們失望。',
      duration: 5000,
    },
  ],
};
