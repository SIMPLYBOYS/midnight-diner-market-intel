import type { Episode } from '../../engine/types';

export const EPISODE_17: Episode = {
  id: 'ep-17',
  date: '2026-04-25',
  title: '20260425 Weekend Decay',
  description: 'Saturday — markets closed but the data did not stop. Polymarket\'s 4/30 regime-fall contract drifted from Friday\'s 0.85% close down to 0.55% overnight as the deadline shrinks; 6/30 followed from 0.085 to 0.075. Walmart\'s refund filing sits at Treasury until Monday, JBLU bond desks read the 8-K all weekend, the MSFT-OpenAI restructure letter circulates on private Slacks. Brent and WTI quiet on globex, $95 untested. Warsh confirmation Tuesday night, Powell\'s last presser Thursday, Q1 GDP advance Wednesday. The week\'s only day without a print — and the one where positioning gets done.',
  actions: [
    { type: 'bgm', track: 'chill-lofi', command: 'play' },

    {
      type: 'narration',
      text: '週六中午前。市場關門、新聞稀薄、但 Polymarket 整夜都在動——4/30 那條從昨天收盤的 0.85% 一路滑回 0.55%，6/30 從 8.5% 也退到 7.5%。Walmart 的退款表格躺在財政部、JBLU 的債券桌週末加班、MSFT-OpenAI 的改約信在私訊群裡轉。WTI 在 globex 上沒人想動 $95。下週二 Warsh 投票、週三 Q1 GDP advance、週四 Powell 最後一次站講台。今天是這一週唯一沒有 print 的日子——也是把 position 做好的那一天。',
      duration: 5400,
    },

    // ── Opening: Saturday "no-print" snapshot — Friday close + globex futures ──
    {
      type: 'market-data',
      data: {
        tickers: [
          { symbol: 'SPY', price: 530.60, change: 0.0 },
          { symbol: 'ES=F', price: 5318.50, change: 0.1 },
          { symbol: 'WTI', price: 95.20, change: -0.2 },
          { symbol: 'VIX', price: 25.80, change: 0.0 },
        ],
        volatility: 22,
        vix: 25.8,
        rsi: 52.0,
        beta: 1.04,
        priceHistory: [530, 530, 530, 530, 530, 530, 530, 530],
        volumeHistory: [12, 10, 8, 6, 6, 8, 10, 12],
        sectors: [
          { label: 'Cash-Equity', value: 0, color: '#888888' },
          { label: 'Globex-Futures', value: 480, color: '#cc8844' },
          { label: 'Bonds-OTC', value: 320, color: '#cc8844' },
          { label: 'Crypto-24/7', value: 680, color: '#22cc55' },
          { label: 'Polymarket', value: 220, color: '#22cc55' },
        ],
        headline: '週六 — 現股關門、ES 期貨小綠 +0.1%、WTI 在 $95.20 沒人動、VIX 維持 25.8',
      },
    },

    // Chef Saturday prep — quieter, slower
    { type: 'enter', character: 'chef', toTile: 'stove' },
    { type: 'wait', duration: 600 },
    { type: 'move', character: 'chef', toTile: 'prep-area' },
    { type: 'wait', duration: 500 },
    { type: 'move', character: 'chef', toTile: 'stove' },
    { type: 'wait', duration: 400 },

    // Customer A enters first — couldn't stop watching the screens
    { type: 'enter', character: 'customer-a', toTile: 'entrance' },
    { type: 'move', character: 'chef', toTile: 'counter-center' },
    { type: 'dialogue', character: 'chef', text: 'いらっしゃい。週六中午前——你不是說週末要把腦子放空？' },

    { type: 'move', character: 'customer-a', toTile: 'random-stool' },
    { type: 'sit', character: 'customer-a' },

    { type: 'dialogue', character: 'customer-a', text: '原本是這樣計劃。但凌晨三點看了一眼手機——Polymarket 的 4/30 又掉了一階、0.55%。從昨天收盤的 0.85% 整夜滑下來。' },

    { type: 'move', character: 'chef', toTile: 'stove' },
    { type: 'wait', duration: 400 },

    { type: 'dialogue', character: 'chef', text: '昨晚你不是還說 0.55 → 0.85 那個爬升要當警鐘？怎麼又退回去了？' },

    { type: 'dialogue', character: 'customer-a', text: '這就是合約還剩五天的好處——deadline decay 把所有 noise 都壓平。每過六小時、未發生的機率就被時間吃掉一塊。0.85% → 0.55% 不是「政權變穩了」，是「沒事發生 + 還剩 120 小時」這個簡單算術。' },

    { type: 'dialogue', character: 'customer-a', text: '6/30 那條也跟著退——從 0.085 到 0.075。但 6/30 不一樣，它離到期還兩個月、time decay 沒那麼狠。它退是因為 4/30 的 anchor 退了——「短期不會、長期也降一階」。' },

    { type: 'emote', character: 'customer-a', emote: 'thinking', duration: 700 },

    // Polymarket — Saturday morning snapshot, real history from latest.json
    {
      type: 'polymarket-odds',
      data: {
        asOf: '2026-04-25T11:38:05Z',
        highlightSlug: 'will-the-iranian-regime-fall-by-april-30',
        markets: [
          {
            slug: 'will-the-iranian-regime-fall-by-april-30',
            question: 'Will the Iranian regime fall by April 30?',
            yesProbability: 0.0055,
            volume: 41138672,
            endDate: '2026-04-30T00:00:00Z',
            history: [
              { t: 1776974406, p: 0.0075 }, { t: 1776978007, p: 0.0075 }, { t: 1776981607, p: 0.0075 }, { t: 1776985206, p: 0.0075 },
              { t: 1776988818, p: 0.0075 }, { t: 1776992405, p: 0.0085 }, { t: 1776996004, p: 0.0085 }, { t: 1776999615, p: 0.0085 },
              { t: 1777003204, p: 0.0085 }, { t: 1777006805, p: 0.0085 }, { t: 1777010404, p: 0.0075 }, { t: 1777014003, p: 0.0075 },
              { t: 1777017604, p: 0.0075 }, { t: 1777021204, p: 0.0075 }, { t: 1777024804, p: 0.0075 }, { t: 1777028404, p: 0.0065 },
              { t: 1777032004, p: 0.0065 }, { t: 1777035604, p: 0.0055 }, { t: 1777039218, p: 0.0055 }, { t: 1777042804, p: 0.0055 },
              { t: 1777046404, p: 0.0055 }, { t: 1777050004, p: 0.0055 }, { t: 1777053605, p: 0.0055 }, { t: 1777057203, p: 0.0055 },
              { t: 1777060805, p: 0.0055 }, { t: 1777064404, p: 0.0055 }, { t: 1777068006, p: 0.0055 }, { t: 1777071604, p: 0.0055 },
              { t: 1777075210, p: 0.0055 }, { t: 1777078685, p: 0.0055 },
            ],
          },
          {
            slug: 'will-the-iranian-regime-fall-by-june-30',
            question: 'Will the Iranian regime fall by June 30?',
            yesProbability: 0.0750,
            volume: 33664676,
            endDate: '2026-06-30T00:00:00Z',
            history: [
              { t: 1776974412, p: 0.0850 }, { t: 1776978017, p: 0.0850 }, { t: 1776981612, p: 0.0850 }, { t: 1776985211, p: 0.0850 },
              { t: 1776988832, p: 0.0850 }, { t: 1776992410, p: 0.0850 }, { t: 1776996010, p: 0.0850 }, { t: 1776999620, p: 0.0850 },
              { t: 1777003208, p: 0.0850 }, { t: 1777006809, p: 0.0850 }, { t: 1777010411, p: 0.0850 }, { t: 1777014006, p: 0.0850 },
              { t: 1777017608, p: 0.0850 }, { t: 1777021206, p: 0.0850 }, { t: 1777024805, p: 0.0900 }, { t: 1777028406, p: 0.0850 },
              { t: 1777032007, p: 0.0850 }, { t: 1777035606, p: 0.0850 }, { t: 1777039220, p: 0.0850 }, { t: 1777042811, p: 0.0850 },
              { t: 1777046407, p: 0.0750 }, { t: 1777050006, p: 0.0750 }, { t: 1777053611, p: 0.0750 }, { t: 1777057206, p: 0.0750 },
              { t: 1777060807, p: 0.0750 }, { t: 1777064410, p: 0.0750 }, { t: 1777068009, p: 0.0750 }, { t: 1777071607, p: 0.0750 },
              { t: 1777075215, p: 0.0750 }, { t: 1777078685, p: 0.0750 },
            ],
          },
          {
            slug: 'will-the-fed-decrease-interest-rates-by-50-bps-after-the-april-2026-meeting',
            question: 'Will the Fed decrease interest rates by 50+ bps after the April 2026 meeting?',
            yesProbability: 0.0015,
            volume: 47177384,
            endDate: '2026-04-29T00:00:00Z',
            history: [
              { t: 1776974411, p: 0.0015 }, { t: 1776978014, p: 0.0015 }, { t: 1776981611, p: 0.0015 }, { t: 1776985210, p: 0.0015 },
              { t: 1776988831, p: 0.0015 }, { t: 1776992410, p: 0.0015 }, { t: 1776996009, p: 0.0015 }, { t: 1776999620, p: 0.0015 },
              { t: 1777003208, p: 0.0015 }, { t: 1777006809, p: 0.0015 }, { t: 1777010411, p: 0.0015 }, { t: 1777014006, p: 0.0015 },
              { t: 1777017607, p: 0.0015 }, { t: 1777021206, p: 0.0015 }, { t: 1777024805, p: 0.0015 }, { t: 1777028406, p: 0.0015 },
              { t: 1777032007, p: 0.0015 }, { t: 1777035606, p: 0.0015 }, { t: 1777039219, p: 0.0015 }, { t: 1777042808, p: 0.0015 },
              { t: 1777046406, p: 0.0015 }, { t: 1777050006, p: 0.0015 }, { t: 1777053610, p: 0.0015 }, { t: 1777057205, p: 0.0015 },
              { t: 1777060807, p: 0.0015 }, { t: 1777064409, p: 0.0015 }, { t: 1777068008, p: 0.0015 }, { t: 1777071606, p: 0.0015 },
              { t: 1777075215, p: 0.0015 }, { t: 1777078685, p: 0.0015 },
            ],
          },
        ],
      },
    },

    { type: 'dialogue', character: 'customer-a', text: '6/30 那條凌晨還閃過一次 9.0%——亞洲時段、兩分鐘內又退回 8.5%。Volume 沒跳、liquidity 只有 $51 萬，看起來就是某個帳戶在試水溫。半小時後就被吃回去了。' },

    { type: 'dialogue', character: 'customer-a', text: '真正值得記的是 Fed -50bp——47M volume、liquidity $1014 萬，整週紋風不動的 0.15%。這檔在告訴你：下週的 event risk 不是降息幅度、是 Powell 的最後一句話會不會留下記號。' },

    { type: 'wait', duration: 400 },

    // Customer B enters — has read the MSFT-OpenAI letter overnight
    { type: 'enter', character: 'customer-b', toTile: 'entrance' },
    { type: 'move', character: 'customer-b', toTile: 'random-stool' },
    { type: 'sit', character: 'customer-b' },

    { type: 'move', character: 'chef', toTile: 'counter-center' },
    { type: 'dialogue', character: 'chef', text: 'いらっしゃい。MSFT 那封改約信看完了？' },
    { type: 'move', character: 'chef', toTile: 'stove' },

    { type: 'dialogue', character: 'customer-b', text: '昨晚紅眼讀完。22 頁、註腳 47 個、附件三份。Sam 跟 Satya 各自的字選得很有意思——Sam 用了 5 次「partnership」、3 次「stewardship」，沒有一次「parent」或「subsidiary」。Satya 反過來——4 次「optionality」、2 次「decoupling」。這是兩家公司在互相鬆綁。' },

    { type: 'dialogue', character: 'customer-a', text: '我同事昨晚跟一個 ex-MSFT board observer 通了電話——關鍵不是 49% → 35%，是「revenue share waterfall」改成 tiered。OpenAI 在 $5B ARR 之前 MSFT 拿 75%、$5B-$15B 變 50%、$15B 以上只剩 25%。等於 OpenAI 的成功不再 100% map 回 MSFT 估值。' },

    { type: 'dialogue', character: 'customer-b', text: '那才是真正的 unlock。週一盤前 GS、Morgan Stanley 的 desk 會把 OpenAI implied valuation 從 MSFT 股價剝出來——目前市場用 $300B impute、改約後可能要重新算到 $400-500B 獨立估值。MSFT 的 multiple 反而會微縮，因為它從「OpenAI 的最大持股者」變成「之一」。' },

    { type: 'camera', effect: 'flash', duration: 200 },

    // ── MSFT/OpenAI weekend re-rating ──
    {
      type: 'market-data',
      data: {
        tickers: [
          { symbol: 'MSFT-implied', price: 442.20, change: -1.2 },
          { symbol: 'OpenAI-shadow', price: 480.00, change: 4.8 },
          { symbol: 'GOOGL-fut', price: 183.40, change: 0.4 },
          { symbol: 'NVDA-fut', price: 1184.00, change: 0.6 },
        ],
        volatility: 26,
        vix: 25.8,
        rsi: 54.0,
        beta: 1.10,
        priceHistory: [447, 446, 445, 444, 443, 443, 442, 442],
        volumeHistory: [4, 6, 8, 12, 14, 12, 10, 8],
        sectors: [
          { label: 'MSFT-Stack', value: 1340, color: '#cc8844' },
          { label: 'OpenAI-Independent', value: 1480, color: '#22cc55' },
          { label: 'AI-Hyperscaler', value: 1420, color: '#22cc55' },
          { label: 'Cap-Table-Rewrite', value: 980, color: '#22cc55' },
        ],
        headline: '週末 desk 推演：MSFT 改約 = OpenAI 估值剝離、MSFT multiple 微縮、整體 AI cap-table 重寫',
      },
    },

    { type: 'dialogue', character: 'customer-a', text: '這就是為什麼 Citi 那張 note 寫「position for a Powell dove surprise」——下週四 Powell 的最後一場、加上週一 OpenAI 估值剝離、加上 GOOGL cloud 38% 的 anchor，AI infra 這條敘事如果再被 dove 確認、SPY 540 是預設目標。' },

    { type: 'wait', duration: 400 },

    // ── JBLU bondholders — weekend OTC chatter ──
    { type: 'move', character: 'chef', toTile: 'counter-center' },
    { type: 'dialogue', character: 'chef', text: 'JBLU 那邊呢？昨天放話 Chapter 11 explore——週末他們的人不睡？' },

    { type: 'dialogue', character: 'customer-a', text: '債券桌週末沒有「不睡」這個選項。OTC 的報價昨天收 16% yield，亞洲時段 dealer 報 17%、歐洲時段又退回 16.5%。沒有 official price、但 chatter 已經把 recovery rate 從 60% 砍到 45%。' },

    { type: 'dialogue', character: 'customer-b', text: '我聽到的版本是——Apollo 跟 Cerberus 兩家 distressed fund 已經在組 DIP financing 的初步條件。如果週一 JBLU 真的 file、那 DIP 額度可能 $1.2B、interest 16-18%、equity warrants attached。這是合 SAVE 2024 那次的範本——股東歸零、債券 60 cents、distressed fund 拿走 reorganized equity。' },

    { type: 'dialogue', character: 'customer-a', text: '更狠的是同業——SAVE 今天場外被報到 $1.40（昨天收 $1.80），就是市場在說 SAVE 也撐不住。Frontier 的 CDS spread 昨天加寬 80bp。WTI 還在 $95、JBLU 倒下、SAVE 跟、Frontier 觀察名單——LCC 整條線在週末就被 mark-to-thinking 了。' },

    { type: 'emote', character: 'customer-b', emote: 'surprise', duration: 700 },

    {
      type: 'market-data',
      data: {
        tickers: [
          { symbol: 'JBLU-bond', price: 62.00, change: -8.0 },
          { symbol: 'SAVE-OTC', price: 1.40, change: -22.2 },
          { symbol: 'ULCC-CDS', price: 740, change: 18.5 },
          { symbol: 'AAL-bond', price: 94.20, change: -1.8 },
        ],
        volatility: 52,
        vix: 25.8,
        rsi: 22.0,
        beta: 1.68,
        priceHistory: [70, 68, 66, 65, 64, 63, 62, 62],
        volumeHistory: [42, 56, 78, 92, 86, 72, 64, 58],
        sectors: [
          { label: 'LCC-Bonds', value: 320, color: '#ee4444' },
          { label: 'Distressed-Bid', value: 480, color: '#cc8844' },
          { label: 'Legacy-Bonds', value: 720, color: '#ee4444' },
          { label: 'CDS-Spreads', value: 880, color: '#ee4444' },
        ],
        headline: '週末 OTC：JBLU 債 62 cents、SAVE 場外 -22%、ULCC CDS +18.5% — distressed 桌已經在算 DIP',
      },
    },

    { type: 'wait', duration: 400 },

    // ── Walmart / Target — refund filing sits at Treasury until Monday ──
    { type: 'move', character: 'chef', toTile: 'stove' },
    { type: 'dialogue', character: 'chef', text: 'Walmart 那張表格現在在哪裡？' },

    { type: 'dialogue', character: 'customer-a', text: '靜靜躺在 Treasury 的 inbox。週末政府不審。最快下週三才會有第一個 receipt confirmation——也就是「我們收到了」這四個字。實質審核 30 天起跳。' },

    { type: 'dialogue', character: 'customer-b', text: 'Target 的策略今天看更聰明——不交、就沒有審核風險、就沒有 14% 股權帳的麻煩。週一盤前 BBY 那邊的 update 會是關鍵：他們週五沒表態、週末董事會在開、週一 8:00 ET pre-market 會有公告。如果 BBY 跟進 Target 不交——retail split 就定型了。' },

    { type: 'dialogue', character: 'customer-a', text: 'CFO 們週末在算的是另一筆——「不交退款 + 川普如果連任 / 共和黨控國會」的政治打擊。Walmart CFO 那句「duty to shareholders, not to memory」會不會在 Q3 變成 audit 的標題？這不是法律問題、是 narrative 風險。' },

    { type: 'wait', duration: 300 },

    // ── Iran / Energy / WTI — weekend tail risk ──
    { type: 'move', character: 'chef', toTile: 'counter-center' },
    { type: 'dialogue', character: 'chef', text: 'Iran 這邊週末沒什麼新消息？' },

    { type: 'dialogue', character: 'customer-a', text: 'Reuters 凌晨那則最值得讀——IRGC 內部換了三個區域指揮、但官方理由是「routine rotation」。BBC Persian 跟 Iran International 兩邊的解讀完全相反。Polymarket 4/30 從 0.85% 退回 0.55% 就是「沒人能 confirm」的那種沉默。' },

    { type: 'dialogue', character: 'customer-b', text: 'WTI globex 週六凌晨摸到 $95.05、又回 $95.20。$95 那條線從週三停火後就變成新地板——交易員會說那叫 "war-residual premium"，差不多 $7-8 是定價在那裡的。要回 $88、需要 Iran 那邊真正穩定 + Strait of Hormuz 通行率回到正常。兩個都沒到。' },

    { type: 'dialogue', character: 'customer-a', text: 'OPEC+ 那邊週六 Riyadh 有一個 informal phone call——成員國代表沒有 statement、但 Bloomberg 的 source 講 Saudi 跟 UAE 在討論「voluntary cut 是否要 unwind」。如果週日傍晚有 statement、WTI 週一開盤可能直接 -3 到 $92。但機率現在看不高。' },

    { type: 'camera', effect: 'shake', duration: 250, intensity: 1 },

    { type: 'wait', duration: 300 },

    // ── Look ahead: Tuesday Warsh / Wednesday GDP / Thursday Powell ──
    { type: 'move', character: 'chef', toTile: 'stove' },
    { type: 'dialogue', character: 'chef', text: '下週的 calendar 怎麼排？' },

    { type: 'dialogue', character: 'customer-a', text: '三個 event、三個方向——週二 9pm ET Warsh 投票，預期 confirmed by 52-48；週三 8:30am ET Q1 GDP advance，consensus +1.8% annualized、whisper number 落在 +1.4-1.6%；週四 2pm ET Powell 最後一次 FOMC 記者會。三件事擺一起、curve 會被重寫。' },

    { type: 'dialogue', character: 'customer-b', text: '我的 desk 排了 scenario tree——A：GDP miss + Powell dove + Warsh confirmed → SPY 540 by Friday、10Y 退到 4.30、USD 弱。B：GDP beat + Powell hold + Warsh confirmed → SPY 530 區間、10Y 持平 4.45、USD 強。C：GDP miss + Powell hawk → SPY -2% 到 520、bond curve flattening。三條路機率大概 35/40/25。' },

    { type: 'dialogue', character: 'customer-a', text: '我的個人偏 A 跟 C 中間——GDP 應該不會差太多，Powell 的退場 instinct 偏 dove，但 Warsh 的影子已經在整 curve。如果週四 Powell 的 statement 提到「passing the baton」這幾個字、那 dove pivot 就 confirmed。如果他只說「continuity」、就是 hold。' },

    { type: 'wait', duration: 400 },

    // ── Saturday-only data: week-on-week recap ──
    {
      type: 'market-data',
      data: {
        tickers: [
          { symbol: 'SPY-WoW', price: 530.60, change: 1.6 },
          { symbol: 'WTI-WoW', price: 95.40, change: -8.6 },
          { symbol: 'VIX-WoW', price: 25.80, change: -19.4 },
          { symbol: '10Y-WoW', price: 4.42, change: -0.18 },
        ],
        volatility: 28,
        vix: 25.8,
        rsi: 54.0,
        beta: 1.06,
        priceHistory: [522, 524, 527, 529, 530, 530, 531, 530],
        volumeHistory: [108, 124, 116, 102, 92, 86, 80, 74],
        sectors: [
          { label: 'War-Premium-Out', value: 1380, color: '#22cc55' },
          { label: 'Cloud-Anchor', value: 1480, color: '#22cc55' },
          { label: 'Cap-Table-Reset', value: 1280, color: '#22cc55' },
          { label: 'Tariff-Cliff', value: 880, color: '#cc8844' },
          { label: 'LCC-Casualty', value: 320, color: '#ee4444' },
        ],
        headline: '一週復盤：SPY +1.6% / WTI -8.6% / VIX -19.4% / 10Y -18bp — war-premium 退、bill 寫進弱者',
      },
    },

    { type: 'dialogue', character: 'customer-b', text: '一週收下來——SPY +1.6%、VIX 從 32 退到 25.8、10Y 收 18bp。這不是「risk-on」、是「war-premium 從漲價回到正常」。差別是：risk-on 應該帶 cyclical、energy、small-cap 領漲；這週領漲的是 cloud 跟 mega-cap，是「最 boring 的避風港」。' },

    { type: 'dialogue', character: 'customer-a', text: 'JBLU、SAVE、Walmart split——這三個是 war-premium 的真實帳單。砲沒打、但帳單分批寄。最弱的這個月就破產、中間的零售今天還在分裂、最強的（Costco、Target）甚至受惠。這不是 V-shape recovery、是 K-shape billing。' },

    { type: 'wait', duration: 300 },

    // ── Sunday futures / Monday-open positioning ──
    { type: 'move', character: 'chef', toTile: 'counter-center' },
    { type: 'dialogue', character: 'chef', text: '週日傍晚 globex 開盤要看什麼？' },

    { type: 'dialogue', character: 'customer-a', text: '三個鐘——6pm ET ES 期貨開、看 OPEC+ 是不是有 statement、看 Iran 那邊有沒有 incident。任何一條動超過 1%、整週的 setup 就要重新算。' },

    { type: 'dialogue', character: 'customer-b', text: 'Polymarket 4/30 那條我會盯——如果週日凌晨從 0.55% 又跳回 0.85% 以上、那是 information leak 的 footprint。如果繼續往 0.45%、0.35% 滑、那 deadline decay 在主導，可以放著。我會在 Discord 上設個 alert。' },

    { type: 'dialogue', character: 'customer-a', text: '週一 pre-market 8:00 ET 三個事件——BBY 退款表態、JBLU 8-K update、Walmart 週末有沒有遞補檔案。9:30 開盤的方向就由這三條決定。' },

    { type: 'wait', duration: 400 },

    // ── Wrap: Saturday quiet, but full ──
    { type: 'move', character: 'chef', toTile: 'counter-center' },
    { type: 'dialogue', character: 'chef', text: '今天兩位都不點熱湯？' },

    { type: 'dialogue', character: 'customer-a', text: '要、一碗熱的、加蛋。下午要回 desk 把 scenario tree 寫成週一 morning note。' },

    { type: 'dialogue', character: 'customer-b', text: '我也一碗。下午要打三通電話——一個 ex-MSFT board observer、一個 Apollo distressed、一個 Houston energy desk。週日下午寫成一份內部 memo。週六的午餐要吃飽——下午的工作量比週一還大。' },

    { type: 'sfx', sound: 'chimes' },

    { type: 'wait', duration: 500 },
    { type: 'move', character: 'chef', toTile: 'stove' },

    {
      type: 'narration',
      text: '週六中午前的食堂，兩碗熱拉麵、一壺麥茶、窗外是空蕩的東京週末。太平洋這邊——Sundar 在 Mountain View 看 Q1 cloud 數字的內部 dashboard、Satya 在週末 board call 上跟 Sam 確認改約信的最後一句、Apollo 的 distressed team 在 Park Avenue 的會議室白板上寫 JBLU DIP 的 term sheet、Walmart 的 tax counsel 在 Bentonville 算 Q3 的退款 credit、Warsh 在 Hoover Institution 跟兩位 ex-Fed governor 吃午飯。市場關門、但工作沒停。Polymarket 那條 0.55% 的線、像是這個週末最誠實的指標——沒事發生、所以時間在替我們減壓。下週一開盤、所有今天沒被定價的東西、會一起走進報價單。今天先把午餐吃完。',
      duration: 5800,
    },
  ],
};
