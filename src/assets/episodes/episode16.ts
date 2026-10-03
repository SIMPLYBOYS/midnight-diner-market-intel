import type { Episode } from '../../engine/types';

export const EPISODE_16: Episode = {
  id: 'ep-16',
  date: '2026-04-24',
  title: '20260424 The Tariff Cliff',
  description: 'Friday — The 90-day tariff exemption expires at midnight. Treasury finally posts refund mechanics at 10am but they read like a maze; Walmart files, Target holds. WTI refuses to break $95 and JBLU warns it may file for bankruptcy protection. GOOGL follows through +1.8%, MSFT announces it will cut its OpenAI stake to 35%. Polymarket\'s 4/30 regime-fall odds tick back up to 0.85% overnight — small but the only 2026 bet that moved. The week started with a war, got a cloud number, ends on a procedural cliff and a bankruptcy watch.',
  actions: [
    { type: 'bgm', track: 'chill-lofi', command: 'play' },

    {
      type: 'narration',
      text: '週五深夜。關稅豁免在子夜到期、Treasury 十點把退款流程放出來——厚得像迷宮。Walmart 交單、Target 按住。WTI 跌不破 $95、JBLU 放話可能 Chapter 11。GOOGL 再漲 1.8%、MSFT 宣布把 OpenAI 股份砍到 35%。Polymarket 4/30 那檔深夜從 0.55% 爬回 0.85%——小動，但本週唯一會動的 2026 合約。這週以戰爭開盤、雲端數字過半、現在以一道程序的懸崖收尾。',
      duration: 5200,
    },

    // ── Opening: Friday cliff-day setup, still positive but cautious ──
    {
      type: 'market-data',
      data: {
        tickers: [
          { symbol: 'SPY', price: 530.60, change: 0.2 },
          { symbol: 'QQQ', price: 449.80, change: 0.3 },
          { symbol: 'WTI', price: 95.40, change: -1.4 },
          { symbol: 'VIX', price: 25.80, change: -1.1 },
        ],
        volatility: 30,
        vix: 25.8,
        rsi: 54.0,
        beta: 1.08,
        priceHistory: [527, 528, 529, 529, 530, 530, 531, 530],
        volumeHistory: [78, 82, 86, 90, 86, 80, 76, 74],
        sectors: [
          { label: 'Cloud', value: 1480, color: '#22cc55' },
          { label: 'Retailers', value: 980, color: '#cc8844' },
          { label: 'Airlines', value: 680, color: '#ee4444' },
          { label: 'Energy', value: 1180, color: '#cc8844' },
          { label: 'Mega-Cap', value: 1420, color: '#22cc55' },
        ],
        headline: '關稅豁免倒數 — SPY 站穩 530、WTI 在 $95、VIX 退到 25.8，但退款流程今天才公布',
      },
    },

    // Chef prep
    { type: 'enter', character: 'chef', toTile: 'stove' },
    { type: 'wait', duration: 500 },
    { type: 'move', character: 'chef', toTile: 'prep-area' },
    { type: 'wait', duration: 400 },
    { type: 'move', character: 'chef', toTile: 'stove' },

    // Customer A enters — tariff angle
    { type: 'enter', character: 'customer-a', toTile: 'entrance' },
    { type: 'move', character: 'chef', toTile: 'counter-center' },
    { type: 'dialogue', character: 'chef', text: 'いらっしゃい。這個禮拜你第四次來，每次臉上寫的東西都不一樣。' },

    { type: 'move', character: 'customer-a', toTile: 'random-stool' },
    { type: 'sit', character: 'customer-a' },

    { type: 'dialogue', character: 'customer-a', text: '今天是政治戲劇。早上 10:00 財政部終於把退款流程放出來——43 頁、分 6 個步驟、要提供 42 個月的 entry-level data。Walmart 12:00 就交了、Target 按住、Best Buy 還在內部討論。' },

    { type: 'move', character: 'chef', toTile: 'stove' },
    { type: 'wait', duration: 400 },

    { type: 'dialogue', character: 'chef', text: '川普那句「I\'ll remember」的話呢？' },

    { type: 'dialogue', character: 'customer-a', text: '還在空氣裡漂。Walmart 的 CFO 下午接受 CNBC 訪問時講了一句很狠——「our duty is to shareholders, not to memory」。翻譯：我們按法律走、不管總統記不記得。股價盤中 -1.8%——但不是因為 Walmart 錯了，是因為其他零售商看完表單都嚇到。' },

    { type: 'dialogue', character: 'customer-a', text: 'Target 的反應就反過來——不申請。今天 +2.4%。市場用兩種方式解讀同一件事：「按規矩走」vs「識相」。兩邊都漲一半跌一半——沒有正確答案的一天。' },

    { type: 'emote', character: 'customer-a', emote: 'surprise', duration: 700 },

    { type: 'sfx', sound: 'chimes' },

    // ── Retail split: Walmart down, Target up, no consensus ──
    {
      type: 'market-data',
      data: {
        tickers: [
          { symbol: 'WMT', price: 82.40, change: -1.8 },
          { symbol: 'TGT', price: 152.20, change: 2.4 },
          { symbol: 'BBY', price: 74.80, change: -0.6 },
          { symbol: 'COST', price: 880.40, change: 0.4 },
        ],
        volatility: 34,
        vix: 25.8,
        rsi: 48.0,
        beta: 1.14,
        priceHistory: [82, 82, 83, 82, 82, 82, 82, 82],
        volumeHistory: [58, 72, 92, 102, 88, 78, 72, 68],
        sectors: [
          { label: 'Big-Box', value: 980, color: '#cc8844' },
          { label: 'Specialty', value: 780, color: '#ee4444' },
          { label: 'Warehouse', value: 1180, color: '#22cc55' },
          { label: 'E-commerce', value: 1380, color: '#22cc55' },
        ],
        headline: 'WMT 交退款 -1.8%、TGT 不交 +2.4% — 零售拆成兩派，沒人敢說誰押對',
      },
    },

    { type: 'wait', duration: 300 },

    // Customer B enters — MSFT / OpenAI angle
    { type: 'enter', character: 'customer-b', toTile: 'entrance' },
    { type: 'move', character: 'customer-b', toTile: 'random-stool' },
    { type: 'sit', character: 'customer-b' },

    { type: 'move', character: 'chef', toTile: 'counter-center' },
    { type: 'dialogue', character: 'chef', text: 'いらっしゃい。今天科技圈那邊呢？' },
    { type: 'move', character: 'chef', toTile: 'stove' },

    { type: 'dialogue', character: 'customer-b', text: 'MSFT 今早官宣：把 OpenAI 的 49% 股權降到 35%，換取治理權升級、未來收入分潤公式重寫。Satya 的備忘錄寫得很外交——「long-term partnership beyond equity」。市場翻譯：MSFT 不想再被 Sam 綁架。' },

    { type: 'dialogue', character: 'customer-a', text: '盤中 MSFT +1.2%、但盤中一度衝到 +3.5% 才回來。因為細節公布後——14% 的股權換回來的是「future capex cost-share」，等於 MSFT 把下一波 AI infra 投資義務也分出去一部分。省錢，但也降低了上行。' },

    { type: 'dialogue', character: 'customer-b', text: 'Bloomberg 今天下午還爆一個角度——OpenAI 本週跟三家 sovereign fund（UAE、Saudi、Singapore）接觸，討論 $500B 的 infra 融資。這是為什麼 MSFT 主動退一步：Sam 在外面找更多資金來源，MSFT 就算留著 49% 也控制不了下一輪。' },

    { type: 'camera', effect: 'flash', duration: 200 },

    // ── MSFT / OpenAI restructuring ──
    {
      type: 'market-data',
      data: {
        tickers: [
          { symbol: 'MSFT', price: 447.60, change: 1.2 },
          { symbol: 'GOOGL', price: 182.60, change: 1.8 },
          { symbol: 'ORCL', price: 148.40, change: -1.2 },
          { symbol: 'AMZN', price: 219.80, change: -0.4 },
        ],
        volatility: 30,
        vix: 25.8,
        rsi: 56.0,
        beta: 1.16,
        priceHistory: [442, 443, 445, 446, 447, 447, 448, 447],
        volumeHistory: [68, 78, 92, 96, 88, 82, 78, 74],
        sectors: [
          { label: 'MSFT-Stack', value: 1380, color: '#22cc55' },
          { label: 'Google-Cloud', value: 1420, color: '#22cc55' },
          { label: 'OpenAI-Ecosystem', value: 1480, color: '#22cc55' },
          { label: 'Legacy-DB', value: 780, color: '#ee4444' },
        ],
        headline: 'MSFT 把 OpenAI 股份砍到 35% — 治理升級、capex 分擔、但上行也被削一角',
      },
    },

    { type: 'dialogue', character: 'customer-a', text: '我的 desk 的判斷——MSFT 今天這招是在為「OpenAI 獨立 IPO 或被 SoftBank 系接手」做準備。14% 退出去，reduces regulatory exposure。這是下半年最大的 unlock。' },

    { type: 'dialogue', character: 'customer-b', text: '對比週一我們聊的 Cursor——SpaceX $60B option，Cursor 仍然在吸 SaaS 的氧氣。MSFT 用「股權換治理」，xAI 用「現金+option 換 IP」，這禮拜給大家上了一堂課：AI 的資本結構已經不是線性了。' },

    { type: 'wait', duration: 300 },

    // ── Airlines: JBLU bankruptcy rumor ──
    { type: 'move', character: 'chef', toTile: 'counter-center' },
    { type: 'dialogue', character: 'chef', text: '昨天那條「airlines 可能破產」的事呢？' },

    { type: 'dialogue', character: 'customer-a', text: 'JBLU 今早發 8-K——「exploring strategic alternatives including restructuring under Chapter 11」。不是「即將破產」、是「放話在考慮」。但 bond yield 跳到 16%、股價 -12%。市場已經 price in 了。' },

    { type: 'dialogue', character: 'customer-b', text: 'SAVE 已經破產過一次（2024），現在再傳是要進二次 Chapter 11。2026 年的第一批「War Casualty」——但實際上這不是戰爭打的，是週一海軍攔船之後油價永久上移的帳單。現在輪到最弱的那批付。' },

    { type: 'dialogue', character: 'customer-a', text: 'WTI 今天 -1.4% 收在 $95.40——比昨天再低一階，但還是跌不破 $95。JBLU 需要 $88 才能活過 Q3。不是技術分析、是會計常識。' },

    { type: 'emote', character: 'customer-b', emote: 'surprise', duration: 700 },

    {
      type: 'market-data',
      data: {
        tickers: [
          { symbol: 'JBLU', price: 4.20, change: -12.5 },
          { symbol: 'SAVE', price: 1.80, change: -14.2 },
          { symbol: 'UAL', price: 46.80, change: -0.8 },
          { symbol: 'DAL', price: 40.60, change: -0.5 },
        ],
        volatility: 48,
        vix: 25.8,
        rsi: 28.0,
        beta: 1.52,
        priceHistory: [5, 5, 5, 4, 4, 4, 4, 4],
        volumeHistory: [68, 82, 98, 112, 128, 118, 98, 82],
        sectors: [
          { label: 'LCC', value: 420, color: '#ee4444' },
          { label: 'Legacy', value: 820, color: '#ee4444' },
          { label: 'Regional', value: 480, color: '#ee4444' },
          { label: 'Aircraft-Lessors', value: 680, color: '#cc8844' },
        ],
        headline: 'JBLU 8-K 放話 Chapter 11 探路 — LCC 崩 12-14%、legacy 受壓、WTI 還在 $95 上方',
      },
    },

    { type: 'wait', duration: 400 },

    // ── Polymarket: Friday snapshot with overnight regime tick-up ──
    { type: 'move', character: 'chef', toTile: 'counter-center' },
    { type: 'dialogue', character: 'chef', text: '賠率市場這週收的如何？' },

    { type: 'dialogue', character: 'customer-a', text: '三條合約——2 條退、1 條紋絲不動、但有一個深夜的小異常。4/30 regime fall 從昨天的 0.65% 掉到午盤 0.55%——然後深夜爬回 0.85%。20 bp 的小動、看似雜訊，但它是本週唯一在「停火進行時」還會反覆的合約。' },

    {
      type: 'polymarket-odds',
      data: {
        asOf: '2026-04-24T01:03:33Z',
        highlightSlug: 'will-the-iranian-regime-fall-by-april-30',
        markets: [
          {
            slug: 'will-the-iranian-regime-fall-by-april-30',
            question: 'Will the Iranian regime fall by April 30?',
            yesProbability: 0.0085,
            volume: 40728193,
            endDate: '2026-04-30T00:00:00Z',
            history: [
              { t: 1776891604, p: 0.0065 }, { t: 1776895204, p: 0.0065 }, { t: 1776898805, p: 0.0065 }, { t: 1776902405, p: 0.0065 },
              { t: 1776906019, p: 0.0065 }, { t: 1776909605, p: 0.0055 }, { t: 1776913205, p: 0.0055 }, { t: 1776916805, p: 0.0055 },
              { t: 1776920404, p: 0.0055 }, { t: 1776924006, p: 0.0055 }, { t: 1776927605, p: 0.0065 }, { t: 1776931219, p: 0.0055 },
              { t: 1776934804, p: 0.0055 }, { t: 1776938404, p: 0.0055 }, { t: 1776942004, p: 0.0055 }, { t: 1776945607, p: 0.0055 },
              { t: 1776949207, p: 0.0055 }, { t: 1776952805, p: 0.0055 }, { t: 1776956404, p: 0.0065 }, { t: 1776960004, p: 0.0065 },
              { t: 1776963604, p: 0.0065 }, { t: 1776967206, p: 0.0065 }, { t: 1776970807, p: 0.0075 }, { t: 1776974406, p: 0.0075 },
              { t: 1776978007, p: 0.0075 }, { t: 1776981607, p: 0.0075 }, { t: 1776985206, p: 0.0075 }, { t: 1776988818, p: 0.0075 },
              { t: 1776992405, p: 0.0085 }, { t: 1776992523, p: 0.0085 },
            ],
          },
          {
            slug: 'will-the-iranian-regime-fall-by-june-30',
            question: 'Will the Iranian regime fall by June 30?',
            yesProbability: 0.0850,
            volume: 33460338,
            endDate: '2026-06-30T00:00:00Z',
            history: [
              { t: 1776891612, p: 0.0850 }, { t: 1776895209, p: 0.0850 }, { t: 1776898819, p: 0.0850 }, { t: 1776902417, p: 0.0850 },
              { t: 1776906021, p: 0.0850 }, { t: 1776909610, p: 0.0850 }, { t: 1776913215, p: 0.0850 }, { t: 1776916810, p: 0.0850 },
              { t: 1776920410, p: 0.0750 }, { t: 1776924017, p: 0.0750 }, { t: 1776927612, p: 0.0750 }, { t: 1776931225, p: 0.0750 },
              { t: 1776934809, p: 0.0750 }, { t: 1776938407, p: 0.0850 }, { t: 1776942006, p: 0.0750 }, { t: 1776945614, p: 0.0800 },
              { t: 1776949212, p: 0.0750 }, { t: 1776952818, p: 0.0750 }, { t: 1776956418, p: 0.0750 }, { t: 1776960015, p: 0.0750 },
              { t: 1776963629, p: 0.0750 }, { t: 1776967221, p: 0.0850 }, { t: 1776970813, p: 0.0850 }, { t: 1776974412, p: 0.0850 },
              { t: 1776978017, p: 0.0850 }, { t: 1776981612, p: 0.0850 }, { t: 1776985211, p: 0.0850 }, { t: 1776988832, p: 0.0850 },
              { t: 1776992410, p: 0.0850 }, { t: 1776992586, p: 0.0850 },
            ],
          },
          {
            slug: 'will-the-fed-decrease-interest-rates-by-50-bps-after-the-april-2026-meeting',
            question: 'Will the Fed decrease interest rates by 50+ bps after the April 2026 meeting?',
            yesProbability: 0.0015,
            volume: 46789393,
            endDate: '2026-04-29T00:00:00Z',
            history: [
              { t: 1776891610, p: 0.0015 }, { t: 1776895208, p: 0.0015 }, { t: 1776898815, p: 0.0015 }, { t: 1776902417, p: 0.0015 },
              { t: 1776906020, p: 0.0015 }, { t: 1776909608, p: 0.0015 }, { t: 1776913213, p: 0.0015 }, { t: 1776916809, p: 0.0015 },
              { t: 1776920408, p: 0.0015 }, { t: 1776924012, p: 0.0015 }, { t: 1776927609, p: 0.0015 }, { t: 1776931223, p: 0.0015 },
              { t: 1776934808, p: 0.0015 }, { t: 1776938407, p: 0.0015 }, { t: 1776942006, p: 0.0015 }, { t: 1776945613, p: 0.0015 },
              { t: 1776949211, p: 0.0015 }, { t: 1776952810, p: 0.0015 }, { t: 1776956414, p: 0.0015 }, { t: 1776960012, p: 0.0015 },
              { t: 1776963618, p: 0.0015 }, { t: 1776967217, p: 0.0015 }, { t: 1776970812, p: 0.0015 }, { t: 1776974411, p: 0.0015 },
              { t: 1776978014, p: 0.0015 }, { t: 1776981611, p: 0.0015 }, { t: 1776985210, p: 0.0015 }, { t: 1776988831, p: 0.0015 },
              { t: 1776992410, p: 0.0015 }, { t: 1776992524, p: 0.0015 },
            ],
          },
        ],
      },
    },

    { type: 'dialogue', character: 'customer-b', text: '6/30 合約反而有個耐人尋味的 intraday——美股下午還掉到 7.5%，收盤又回 8.5%。0.5% 左右的小區間但全天波動。這是在「停火有效」跟「6 月前誰也說不準」兩個 narrative 之間擠壓。成交量 $33.5M，小漲——籌碼在累積，不是在跑。' },

    { type: 'dialogue', character: 'customer-a', text: 'Fed -50bp 那檔就不用說了——0.15% 一整天沒動。Warsh 週二全院投票、Powell 週四最後一次會議。這兩個 event risk 讓降息 50bp 的期望徹底消失。這是 2026 年到目前為止最 boring 的合約，也是最誠實的。' },

    { type: 'dialogue', character: 'customer-b', text: '深夜那個 4/30 從 0.55% 回到 0.85% 的 tick——亞洲時段、低流動性、可能是一張 $50k 的單子推上去的。我不會當訊號讀，但下週如果 continue drifting up，就要當警鐘了。' },

    { type: 'wait', duration: 400 },

    // ── Warsh / Fed regime-change glide path ──
    { type: 'move', character: 'chef', toTile: 'stove' },
    { type: 'dialogue', character: 'chef', text: '下週二 Warsh 正式投票？' },

    { type: 'dialogue', character: 'customer-a', text: 'Tuesday night 9pm 結果出——分析師共識 confirmed by 52-48。但真正的 market event 是 Thursday Powell 的最後一次記者會。Powell 如果放鴿、10Y 有機會退到 4.30%、SPY 衝 540。如果維持 hawkish tone、那這週 SPY 530 就是短期天花板。' },

    { type: 'dialogue', character: 'customer-b', text: '我的 desk 今天收到 Citi 一張 note——「position for a Powell dove surprise」。邏輯：Warsh 要上、Powell 下週走、dual mandate 這個詞再也沒人講、所以 Powell 最後一次會議大概率會「留遺產」——這是他最後一次替勞動市場說話的機會。' },

    { type: 'camera', effect: 'shake', duration: 250, intensity: 1 },

    { type: 'wait', duration: 300 },

    // ── Tech misc ──
    { type: 'dialogue', character: 'customer-a', text: '科技圈今天三條值得記——' },

    { type: 'dialogue', character: 'customer-b', text: 'GOOGL 昨天 +4.2%、今天跟進 +1.8%——兩天 6% 的 re-rating。Cloud 38% 的數字讓 analysts 把 2026 EPS upgrade 6-8%。這是 mega-cap 這週的最大贏家——不是因為它最強，是因為它把「雲端敘事還在」這張牌替整條街撐住了。' },

    { type: 'dialogue', character: 'customer-a', text: 'NVDA 的 Blackwell 2 samples 今天真的出貨——三家 hyperscaler confirmed。股價 +2.4%。SMCI +6.2%。Jensen 昨天那句「enough」現在是週五的 meme。2026 下半年的 AI capex 這條線，被 GOOGL 的 $95B、MSFT 退 14%、NVDA 出 B2 這三件事定在了「高速前進」。' },

    { type: 'dialogue', character: 'customer-b', text: 'Anthropic 今早發 Claude 5 API——benchmarks 對 GPT-5 打平或微勝，但價格 -40%。AI 模型這條線進入「價格戰」了。好消息是 API 成本 downward pressure；壞消息是模型公司的 margin 被壓——Anthropic 下一輪估值可能要重算。' },

    { type: 'emote', character: 'customer-a', emote: 'surprise', duration: 600 },

    { type: 'wait', duration: 400 },

    // ── Friday / week wrap ──
    { type: 'dialogue', character: 'chef', text: '一週下來的關鍵詞？' },

    { type: 'dialogue', character: 'customer-a', text: '"A war, a cloud, a cliff"——週一美國海軍攔船、週三停火、週四 GOOGL cloud 38%、週五關稅豁免到期。這四個事件把 SPY 從 522 推回 531、VIX 從 32 退到 25、WTI 從 $104 掉回 $95。但實體經濟的帳——airlines guide down、JBLU 放話 Chapter 11、Walmart 的 retail split——都在。' },

    { type: 'dialogue', character: 'customer-b', text: '我補一個——"the transition week"。Cook 交棒、Warsh 等上任、Powell 下週走。制度交接這條線被戰爭頭條蓋住了，但它會是 2026 下半年決定 curve 的那張牌。本週最被低估的 story。' },

    { type: 'dialogue', character: 'customer-a', text: '週末要關注的——Iran 內部的「誰在主政」沒人確認，上週「seriously fractured」這個川普的用詞還沒人 walk back。Polymarket 4/30 那條深夜爬回 0.85% 的 tick，可能比我們想的更有訊息。週末是 dark pool 的時間。' },

    { type: 'dialogue', character: 'customer-b', text: '還有 —— 關稅退款 Monday 盤前要看 Walmart 有沒有繼續跌，Target 能不能守住今天的漲幅。最高法院那條判例還在、Treasury 的流程今天才剛發、下週 Q1 GDP 數字 advance 版要出。下週又是滿檔。' },

    // ── Night wrap ──
    {
      type: 'market-data',
      data: {
        tickers: [
          { symbol: 'SPY', price: 530.60, change: 0.2 },
          { symbol: 'QQQ', price: 449.80, change: 0.3 },
          { symbol: 'WTI', price: 95.40, change: -1.4 },
          { symbol: 'VIX', price: 25.80, change: -1.1 },
        ],
        volatility: 28,
        vix: 25.8,
        rsi: 52.0,
        beta: 1.06,
        priceHistory: [527, 528, 529, 529, 530, 530, 531, 530],
        volumeHistory: [78, 82, 86, 84, 80, 76, 72, 70],
        sectors: [
          { label: 'Cloud', value: 1480, color: '#22cc55' },
          { label: 'Mega-Cap', value: 1420, color: '#22cc55' },
          { label: 'LCC', value: 420, color: '#ee4444' },
          { label: 'Retail-Split', value: 880, color: '#cc8844' },
          { label: 'Energy', value: 1180, color: '#cc8844' },
        ],
        headline: '週五收盤 — SPY 530.60、VIX 25.8、WTI $95.40 — 戰爭被定價掉、帳單寫進 airlines 跟 retail',
      },
    },

    { type: 'move', character: 'chef', toTile: 'counter-center' },
    { type: 'dialogue', character: 'chef', text: '這週辛苦了。一碗熱的？' },

    { type: 'dialogue', character: 'customer-a', text: '要。我下週一早班要盯 Walmart 盤前、盤中盯 10Y、下午盯 Warsh 投票預期。週末先放空腦子。' },

    { type: 'dialogue', character: 'customer-b', text: '我週末要讀 MSFT 那份 OpenAI 改約的公開信——Sam 跟 Satya 各自的字選得很仔細。這種文件裡藏的情報比任何 earnings call 都多。本週最值得的一份閱讀材料。' },

    { type: 'wait', duration: 500 },
    { type: 'move', character: 'chef', toTile: 'stove' },

    {
      type: 'narration',
      text: '週五深夜的食堂，一碗熱拉麵、一杯冰麥茶。窗外的東京，週末的暖風在吹。太平洋這邊——Sundar 把 GOOGL cloud 再漲 1.8% 的數字放進週末的 board deck、Satya 在 Redmond 跟律師確認 MSFT-OpenAI 改約的最後一句、JBLU 的 CFO 在 Long Island City 熬第四個通宵、Walmart 的退款申請已經躺在財政部的收件匣、Warsh 在華盛頓整理下週二的 briefing。戰爭從頭條退了、停火在紙上、帳單散在每一家公司的 Q2 guidance 裡。這週開盤是一聲砲、收盤是一張表。明天是週六、後天是週日、下週還要重新出發。今晚先吃飽。',
      duration: 5600,
    },
  ],
};
