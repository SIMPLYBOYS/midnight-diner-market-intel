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
      text: '週六中午前。市場關門、新聞稀薄、但 Polymarket 整夜都在動——4/30 那檔從昨天收盤的 0.85% 一路滑回 0.55%，6/30 從 8.5% 也退到 7.5%。Walmart 的退款表格躺在財政部、JBLU 的債券人週末加班、MSFT-OpenAI 的改約信在私訊群裡轉。原油 WTI 在夜盤上沒人想動 $95。下週二 Warsh 投票、週三 Q1 GDP 第一版數字、週四 Powell 最後一次站講台。今天是這一週唯一沒有 print 的日子——也是把位子做好的那一天。',
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
        headline: '週六 — 現股關門、標普期貨小綠 +0.1%、原油在 $95.20 沒人動、VIX 維持 25.8',
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

    { type: 'dialogue', character: 'customer-a', text: '原本是這樣計劃。但凌晨三點看了一眼手機——Polymarket 那檔賭「伊朗政權會不會在 4/30 之前倒台」的合約又掉了一階、剩 0.55%。從昨天收盤的 0.85% 整夜慢慢滑下來。' },

    { type: 'move', character: 'chef', toTile: 'stove' },
    { type: 'wait', duration: 400 },

    { type: 'dialogue', character: 'chef', text: '昨晚你不是還說 0.55% 爬回 0.85% 那一段要當警鐘？怎麼又退回去了？' },

    { type: 'dialogue', character: 'customer-a', text: '因為這檔合約只剩五天就到期了。離到期越近、什麼事都沒發生，「會發生」的機率自然越小——時間自己在把它壓扁。0.85% 退回 0.55% 不是「政權變穩了」，只是「過了半天還是沒事 + 還剩 120 個小時」這個簡單算術。' },

    { type: 'dialogue', character: 'customer-a', text: '6/30 那檔（賭 6 月底之前倒台）也跟著退——從 8.5% 到 7.5%。但 6/30 不一樣，它離到期還兩個月、時間沒那麼急。它退是因為 4/30 先退了——「短期不會、長期也順著降一階」。' },

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

    { type: 'dialogue', character: 'customer-a', text: '6/30 那條凌晨還閃過一次 9.0%——亞洲時段、兩分鐘內又退回 8.5%。但成交量沒跳、整檔的胃口只有 51 萬美金（很淺），看起來就是某個帳戶在試水溫。半小時就被吃回去了。' },

    { type: 'dialogue', character: 'customer-a', text: '真正值得記的是 Fed 那檔——賭「Fed 4 月會不會直接降 2 碼（50bp）」。整週累積成交 4700 萬美金、帳裡放了 1000 萬流動性，紋風不動的 0.15%。這等於市場在說：下週要看的不是 Fed 降幾碼，是 Powell 最後一次站講台會留下什麼一句話。' },

    { type: 'wait', duration: 400 },

    // Customer B enters — has read the MSFT-OpenAI letter overnight
    { type: 'enter', character: 'customer-b', toTile: 'entrance' },
    { type: 'move', character: 'customer-b', toTile: 'random-stool' },
    { type: 'sit', character: 'customer-b' },

    { type: 'move', character: 'chef', toTile: 'counter-center' },
    { type: 'dialogue', character: 'chef', text: 'いらっしゃい。MSFT 那封改約信看完了？' },
    { type: 'move', character: 'chef', toTile: 'stove' },

    { type: 'dialogue', character: 'customer-b', text: '昨晚熬夜讀完。22 頁、註腳 47 個、附件三份。Sam 跟 Satya 用的字很有意思——Sam 講了 5 次「夥伴關係」、3 次「託管」，整封信沒一次說「母公司」或「子公司」。Satya 反過來——4 次「保留選擇權」、2 次「鬆綁」。兩家公司在用文字互相放手。' },

    { type: 'dialogue', character: 'customer-a', text: '我同事昨晚跟一個前 MSFT 董事會列席的人通電話——關鍵不是股權從 49% 砍到 35%，是「拆帳公式」整個改了。OpenAI 年營收還沒到 50 億美金以前 MSFT 拿 75%、50 到 150 億這段拿 50%、超過 150 億只剩 25%。等於 OpenAI 越成功、MSFT 反而分得越少。' },

    { type: 'dialogue', character: 'customer-b', text: '那才是真正鬆開的東西。週一開盤前 GS、Morgan Stanley 那邊會把 OpenAI 的隱含估值（也就是市場目前用 MSFT 股價反推出來的）從 MSFT 拆出來——之前市場是用 3000 億美金在算，改約後可能要重新跳到 4000-5000 億的獨立估值。MSFT 自己的本益比反而會微縮，因為它從「OpenAI 最大的股東」變成「之一」。' },

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
        headline: '週末桌上推演：MSFT 改約 = OpenAI 估值要從 MSFT 拆出來、MSFT 本益比微縮、整個 AI 圈股權結構重寫',
      },
    },

    { type: 'dialogue', character: 'customer-a', text: '這就是為什麼 Citi 那張內部 note 寫「壓 Powell 會偏鴿（軟）這條」——下週四 Powell 最後一場、加上週一 OpenAI 估值要被拆出來、加上昨天 GOOGL 雲端 38% 那個強數字，「AI 基礎建設這條故事還在跑」如果再被 Powell 一句鴿派確認、那 SPY 衝 540 是預設目標。' },

    { type: 'wait', duration: 400 },

    // ── JBLU bondholders — weekend OTC chatter ──
    { type: 'move', character: 'chef', toTile: 'counter-center' },
    { type: 'dialogue', character: 'chef', text: 'JBLU 那邊呢？昨天放話在考慮 Chapter 11——週末他們的人不睡？' },

    { type: 'dialogue', character: 'customer-a', text: '做債券的週末沒有「不睡」這個選項。場外（沒有交易所、就是幾家券商之間互相報價）昨天收的時候是 16% 殖利率——白話講，就是市場覺得這檔債券很危險，所以要求很高的利息才願意接。亞洲時段被報到 17%、歐洲又退回 16.5%。沒有官方價、但圈內人聊起來，已經把「萬一倒了能拿回多少錢」從 60 cents 砍到 45 cents。' },

    { type: 'dialogue', character: 'customer-b', text: '我聽到的版本是——Apollo 跟 Cerberus 兩家專做不良資產的基金已經在討論借「續命錢」的條件（破產過程中還能繼續營運的緊急貸款）。如果週一 JBLU 真的聲請破產、那這筆錢可能 12 億美金、利率 16-18%、附帶日後可換股的選擇權。整個劇本就是 SAVE 在 2024 那次的翻版——原股東歸零、債主拿回六成、這些禿鷹基金最後拿走重整後的新公司股權。' },

    { type: 'dialogue', character: 'customer-a', text: '更狠的是同業——SAVE 今天場外被報到 $1.40（昨天才 $1.80），市場在說 SAVE 也撐不住。Frontier 的「違約保險費」（如果它倒了，買保險的人拿賠償）昨天又跳了 80bp，等於變貴一截。原油還在 $95、JBLU 倒、SAVE 跟、Frontier 進觀察名單——廉航整條線在週末就被「先在心裡標壞」了。' },

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
        headline: '週末場外行情：JBLU 債券 62 cents、SAVE -22%、廉航違約保險費 +18.5% — 禿鷹基金已在算續命錢條件',
      },
    },

    { type: 'wait', duration: 400 },

    // ── Walmart / Target — refund filing sits at Treasury until Monday ──
    { type: 'move', character: 'chef', toTile: 'stove' },
    { type: 'dialogue', character: 'chef', text: 'Walmart 那張表格現在在哪裡？' },

    { type: 'dialogue', character: 'customer-a', text: '靜靜躺在財政部的收件匣。週末政府不審。最快下週三才會收到第一個「我們收到了」——就這四個字。實質審核 30 天起跳。' },

    { type: 'dialogue', character: 'customer-b', text: 'Target 的策略今天回頭看更聰明——不交、就沒有審核風險、就不用煩股權那筆帳。週一開盤前 Best Buy 那邊的決定才是關鍵：他們週五沒表態、週末董事會在開、週一早上 8 點美東時間會有公告。如果 BBY 跟 Target 一樣不交——零售圈就正式裂成兩派了。' },

    { type: 'dialogue', character: 'customer-a', text: 'CFO 們週末在算的是另一筆——「不交退款 + 川普如果連任 / 共和黨控國會」會被怎麼修理。Walmart CFO 那句「我們對股東負責、不對總統的記憶力負責」會不會在 Q3 變成國稅局重點查核的標題？這不是法律問題、是給市場的形象問題。' },

    { type: 'wait', duration: 300 },

    // ── Iran / Energy / WTI — weekend tail risk ──
    { type: 'move', character: 'chef', toTile: 'counter-center' },
    { type: 'dialogue', character: 'chef', text: 'Iran 這邊週末沒什麼新消息？' },

    { type: 'dialogue', character: 'customer-a', text: 'Reuters 凌晨那則最值得讀——伊朗革命衛隊內部換了三個區域指揮官、但官方說法是「例行調動」。BBC 波斯語跟 Iran International 兩邊解讀完全相反。Polymarket 4/30 從 0.85% 退回 0.55%，就是「沒人能確認」的那種沉默。' },

    { type: 'dialogue', character: 'customer-b', text: '原油 24 小時電子盤週六凌晨摸到 $95.05、又回 $95.20。$95 那條線從週三停火後就變成新地板——交易員會說那是「戰爭沒打完但價格還高一截」的殘留費用，差不多 7-8 美金一桶就是定價在那裡。要回到 $88、需要伊朗那邊真正穩定 + 荷莫茲海峽通行率回到正常。兩個都還沒到。' },

    { type: 'dialogue', character: 'customer-a', text: 'OPEC+ 那邊週六沙烏地有一個非正式電話會——成員國代表沒發聲明、但 Bloomberg 的線人說沙烏地跟阿聯在討論「之前自願減產的份額要不要恢復供應」。如果週日傍晚有正式聲明、原油週一開盤可能直接跌 3 塊到 $92。但機率現在看不高。' },

    { type: 'camera', effect: 'shake', duration: 250, intensity: 1 },

    { type: 'wait', duration: 300 },

    // ── Look ahead: Tuesday Warsh / Wednesday GDP / Thursday Powell ──
    { type: 'move', character: 'chef', toTile: 'stove' },
    { type: 'dialogue', character: 'chef', text: '下週的行事曆怎麼排？' },

    { type: 'dialogue', character: 'customer-a', text: '三件事、三個方向——週二晚上 9 點 Warsh 確認投票，分析師預估 52-48 過關；週三早上 8:30 Q1 GDP 第一版數字，街上共識 +1.8%（換算成年率）、私下傳的版本是 +1.4-1.6%；週四下午 2 點 Powell 最後一次 FOMC 記者會。三件事擺一起、整條利率曲線（債券殖利率高低點）會被重寫。' },

    { type: 'dialogue', character: 'customer-b', text: '我們桌上排了三種劇本——A：GDP 比預期差 + Powell 偏鴿 + Warsh 過關 → SPY 週五衝 540、10 年期殖利率退到 4.30、美元偏弱。B：GDP 達標 + Powell 持平 + Warsh 過關 → SPY 在 530 區間、10 年期維持 4.45、美元偏強。C：GDP 差 + Powell 鷹 → SPY 跌 2% 到 520、債券殖利率曲線變平。三條路機率大概 35%、40%、25%。' },

    { type: 'dialogue', character: 'customer-a', text: '我個人押在 A 跟 C 中間——GDP 不會差太多，Powell 個性退場時偏鴿、但 Warsh 的影子已經先在影響債券價格。如果週四 Powell 講出「交棒」這兩個字、那「鴿派轉向」就確認了。如果他只說「延續」、那就是維持現狀。' },

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
        headline: '一週復盤：SPY +1.6% / WTI -8.6% / VIX -19.4% / 10Y -18bp — 戰爭溢價退出、帳單寫進弱者',
      },
    },

    { type: 'dialogue', character: 'customer-b', text: '一週收下來——SPY +1.6%、VIX 從 32 退到 25.8、10 年期殖利率收 18bp。這不是「市場敢冒險了」、是「戰爭加上去的溢價慢慢退掉」。差別在哪？敢冒險的話、應該是景氣循環股、能源、小型股領漲；這週領漲的反而是雲端跟超大型科技，其實是「最無聊的避風港」。' },

    { type: 'dialogue', character: 'customer-a', text: 'JBLU、SAVE、Walmart 裂成兩派——這三個就是戰爭溢價的真實帳單。砲沒打、但帳單分批寄。最弱的這個月就破產、中間的零售今天還在分裂、最強的（Costco、Target）甚至受惠。這不是 V 形反彈、是 K 形分帳——強的更強、弱的歸零。' },

    { type: 'wait', duration: 300 },

    // ── Sunday futures / Monday-open positioning ──
    { type: 'move', character: 'chef', toTile: 'counter-center' },
    { type: 'dialogue', character: 'chef', text: '週日傍晚期貨夜盤開了要看什麼？' },

    { type: 'dialogue', character: 'customer-a', text: '三個鬧鐘——下午 6 點美東時間標普期貨開、看 OPEC+ 是不是有正式聲明、看伊朗那邊有沒有突發狀況。任何一條動超過 1%、整週的局面就要重新算。' },

    { type: 'dialogue', character: 'customer-b', text: 'Polymarket 4/30 那檔我會盯——如果週日凌晨從 0.55% 又跳回 0.85% 以上、那是「有人提早知道消息」的痕跡。如果繼續往 0.45%、0.35% 滑、那就是時間在替我們減壓、可以放著睡。我會在 Discord 上設個提醒。' },

    { type: 'dialogue', character: 'customer-a', text: '週一開盤前 8 點美東時間三個事件——BBY 退款表態、JBLU 8-K（給投資人的重大事件公告）有沒有更新、Walmart 週末有沒有遞補檔案。9:30 開盤的方向就由這三條決定。' },

    { type: 'wait', duration: 400 },

    // ── Wrap: Saturday quiet, but full ──
    { type: 'move', character: 'chef', toTile: 'counter-center' },
    { type: 'dialogue', character: 'chef', text: '今天兩位都不點熱湯？' },

    { type: 'dialogue', character: 'customer-a', text: '要、一碗熱的、加蛋。下午要回辦公室把那三種劇本寫成週一早上發給客戶的 morning note。' },

    { type: 'dialogue', character: 'customer-b', text: '我也一碗。下午要打三通電話——一個前 MSFT 列席董事、一個 Apollo 的禿鷹基金經理、一個休士頓做能源的桌。週日下午寫成內部 memo。週六的午餐要吃飽——下午的工作量比週一還大。' },

    { type: 'sfx', sound: 'chimes' },

    { type: 'wait', duration: 500 },
    { type: 'move', character: 'chef', toTile: 'stove' },

    {
      type: 'narration',
      text: '週六中午前的食堂，兩碗熱拉麵、一壺麥茶、窗外是空蕩的東京週末。太平洋這邊——Sundar 在 Mountain View 看 Q1 雲端數字的內部儀表板、Satya 在週末董事會上跟 Sam 確認改約信的最後一句、Apollo 的不良資產團隊在 Park Avenue 會議室白板上寫 JBLU 的續命錢條件、Walmart 的稅務律師在 Bentonville 算 Q3 的退款抵稅、Warsh 在 Hoover 智庫跟兩位前 Fed 理事吃午飯。市場關門、但工作沒停。Polymarket 那條 0.55% 的線、像是這個週末最誠實的指標——沒事發生、所以時間在替我們減壓。下週一開盤、所有今天沒被定價的東西、會一起走進報價單。今天先把午餐吃完。',
      duration: 5800,
    },
  ],
};
