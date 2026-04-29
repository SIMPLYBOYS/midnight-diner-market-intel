import type { Episode } from '../../engine/types';

export const EPISODE_21: Episode = {
  id: 'ep-21',
  date: '2026-04-29',
  title: '20260429 The Print',
  description: 'Wednesday evening Tokyo — GDP just printed +1.5% (below +1.8% consensus, vindicating yesterday\'s scenario-A push). Warsh confirmed 52-48 overnight as predicted, with three swing senators voting yes-with-dissent statements. SPY trading +0.6% pre-FOMC at $537.50, 10Y -5bp to 4.33%. The data anomaly worth talking about: at 12:00 UTC Tuesday (= 21:00 JST, exactly when ep20 customers were eating dinner) all three Polymarket contracts simultaneously jumped to ~0.50 for one hour, then snapped back — classic oracle/midprice fallback when the order book emptied during a feed bridge issue. JBLU filed Chapter 11 this morning ET, Apollo won the DIP loan auction. FOMC announcement in 5 hours (14:00 ET = Thu 03:00 JST), Powell\'s last presser tomorrow ET. The 4/30 Iran contract has 10 hours of life left.',
  actions: [
    { type: 'bgm', track: 'chill-lofi', command: 'play' },

    {
      type: 'narration',
      text: '禮拜三晚上 10 點 Tokyo——US GDP 第一版 30 分鐘前才出、+1.5%（共識 +1.8%）、比預期弱、市場立刻按下 A 劇本（鴿派預期）的第一個確認鍵。Warsh 凌晨 10 點東京時間 52-48 過關、跟我們桌押的數字一樣、三個搖擺州的民主黨投了「贊成但留紀錄」的票、債券殖利率投票出來那一刻跳 7bp、又被 GDP 退回去。SPY 收盤前在 $537.50、漲 0.6%。FOMC 還剩 5 個小時——這個禮拜真正的爆點還沒來。Polymarket 那邊 4/30 那檔 10 小時後到期、Fed 50bp 那檔 5 小時後跟著到。但今天的 chart 上有一個黑天鵝痕跡——昨天 9 點晚上、我們在這裡吃飯的時候、三檔合約同時跳到 50%、一小時後又退回來。',
      duration: 5400,
    },

    // ── Opening: Wed evening — post-GDP, pre-FOMC ──
    {
      type: 'market-data',
      data: {
        tickers: [
          { symbol: 'SPY', price: 537.50, change: 0.6 },
          { symbol: '10Y', price: 4.33, change: -0.05 },
          { symbol: 'DXY', price: 103.80, change: -0.3 },
          { symbol: 'USDJPY', price: 156.20, change: -0.2 },
        ],
        volatility: 28,
        vix: 23.6,
        rsi: 58.0,
        beta: 1.04,
        priceHistory: [534, 535, 536, 537, 537, 538, 538, 537],
        volumeHistory: [82, 96, 108, 142, 168, 156, 138, 120],
        sectors: [
          { label: 'GDP-Miss-Bid', value: 1180, color: '#22cc55' },
          { label: 'Pre-FOMC-Drift', value: 920, color: '#cc8844' },
          { label: 'Bond-Rally', value: 1320, color: '#22cc55' },
          { label: 'Yen-Bid', value: 480, color: '#22cc55' },
          { label: 'Polymarket-Bridge', value: 320, color: '#888888' },
        ],
        headline: 'GDP +1.5%（共識 +1.8%、比預期弱）— SPY +0.6% / 10Y -5bp / DXY -0.3% — 5 小時後 FOMC、A 劇本第一個確認鍵',
      },
    },

    // Chef Wed evening — early dinner crowd already cleared
    { type: 'enter', character: 'chef', toTile: 'stove' },
    { type: 'wait', duration: 500 },
    { type: 'move', character: 'chef', toTile: 'prep-area' },
    { type: 'wait', duration: 400 },
    { type: 'move', character: 'chef', toTile: 'stove' },
    { type: 'wait', duration: 400 },

    // Customer A enters — has been awake since 5am
    { type: 'enter', character: 'customer-a', toTile: 'entrance' },
    { type: 'move', character: 'chef', toTile: 'counter-center' },
    { type: 'dialogue', character: 'chef', text: 'いらっしゃい。GDP 那個 +1.5%——你昨晚押的數字。' },

    { type: 'move', character: 'customer-a', toTile: 'random-stool' },
    { type: 'sit', character: 'customer-a' },

    { type: 'dialogue', character: 'customer-a', text: '中了。但我跟合夥人都覺得——這次中得有點僥倖。我們桌算的是 +1.5%、市場共識 +1.8%、實際印出 +1.5%——剛好踩在我們押的那條。BEA 第二、第三次修正可能會把這個數字推回 +1.7% 左右。所以「中」這個字、我們不太敢用——更準確的說法是「方向對、第一版印的剛好我們在線」。' },

    { type: 'move', character: 'chef', toTile: 'stove' },
    { type: 'wait', duration: 400 },

    { type: 'dialogue', character: 'chef', text: 'Warsh 過關那一段——10 年期跳 7bp、又被 GDP 退回去？' },

    { type: 'dialogue', character: 'customer-a', text: '對。10 點東京時間 Warsh 確認、52-48、票數跟我們押的一樣、三個搖擺州——西維吉尼亞、蒙大拿、阿拉斯加——都投贊成但發了「我們不認可」的書面聲明。10 年期投票結果出來那一刻從 4.39 跳到 4.46（+7bp）、美元也跳了 0.2。但兩個半小時後 GDP 印出來、立刻又退到 4.32、現在 4.33 收。等於 Warsh 那條走完了、市場現在所有的注意力都在 5 個小時後的 FOMC。' },

    { type: 'dialogue', character: 'customer-a', text: '我同事在 GS 收益債桌的桌長今早給我們電話會——他說 Warsh 那票留下的疤、會在他正式上任那天再被市場拿出來算。今天先過、不代表 Q3 不會被秋後算帳。但這個禮拜、Warsh 已經是「過去式」。' },

    { type: 'emote', character: 'customer-a', emote: 'thinking', duration: 700 },

    // ── Polymarket — Wed evening snapshot, with Tuesday-noon anomaly visible ──
    {
      type: 'polymarket-odds',
      data: {
        asOf: '2026-04-29T01:07:16Z',
        highlightSlug: 'will-the-iranian-regime-fall-by-april-30',
        markets: [
          {
            slug: 'will-the-iranian-regime-fall-by-april-30',
            question: 'Will the Iranian regime fall by April 30?',
            yesProbability: 0.0025,
            volume: 46956649,
            endDate: '2026-04-30T00:00:00Z',
            history: [
              { t: 1777323618, p: 0.0025 }, { t: 1777327204, p: 0.0025 }, { t: 1777330803, p: 0.0025 }, { t: 1777334404, p: 0.0025 },
              { t: 1777338004, p: 0.0025 }, { t: 1777341604, p: 0.0025 }, { t: 1777345203, p: 0.0025 }, { t: 1777348805, p: 0.0025 },
              { t: 1777352404, p: 0.0025 }, { t: 1777356003, p: 0.0025 }, { t: 1777359616, p: 0.0025 }, { t: 1777363204, p: 0.0025 },
              { t: 1777366805, p: 0.0025 }, { t: 1777370403, p: 0.0025 }, { t: 1777374003, p: 0.0025 }, { t: 1777377603, p: 0.5010 },
              { t: 1777381204, p: 0.0025 }, { t: 1777384804, p: 0.0025 }, { t: 1777388404, p: 0.0025 }, { t: 1777392003, p: 0.0025 },
              { t: 1777395604, p: 0.0025 }, { t: 1777399204, p: 0.0025 }, { t: 1777402805, p: 0.0025 }, { t: 1777406418, p: 0.0025 },
              { t: 1777410003, p: 0.0025 }, { t: 1777413618, p: 0.0025 }, { t: 1777417204, p: 0.0025 }, { t: 1777420803, p: 0.0025 },
              { t: 1777424404, p: 0.0025 }, { t: 1777424776, p: 0.0025 },
            ],
          },
          {
            slug: 'will-the-iranian-regime-fall-by-june-30',
            question: 'Will the Iranian regime fall by June 30?',
            yesProbability: 0.0750,
            volume: 34435198,
            endDate: '2026-06-30T00:00:00Z',
            history: [
              { t: 1777323625, p: 0.0750 }, { t: 1777327207, p: 0.0750 }, { t: 1777330807, p: 0.0750 }, { t: 1777334412, p: 0.0750 },
              { t: 1777338007, p: 0.0750 }, { t: 1777341608, p: 0.0750 }, { t: 1777345209, p: 0.0750 }, { t: 1777348813, p: 0.0750 },
              { t: 1777352406, p: 0.0750 }, { t: 1777356008, p: 0.0750 }, { t: 1777359623, p: 0.0750 }, { t: 1777363206, p: 0.0750 },
              { t: 1777366814, p: 0.0750 }, { t: 1777370406, p: 0.0750 }, { t: 1777374004, p: 0.0750 }, { t: 1777377612, p: 0.5050 },
              { t: 1777381206, p: 0.0750 }, { t: 1777384807, p: 0.0750 }, { t: 1777388410, p: 0.0750 }, { t: 1777392005, p: 0.0750 },
              { t: 1777395606, p: 0.0750 }, { t: 1777399210, p: 0.0750 }, { t: 1777402807, p: 0.0750 }, { t: 1777406421, p: 0.0750 },
              { t: 1777410009, p: 0.0750 }, { t: 1777413620, p: 0.0750 }, { t: 1777417213, p: 0.0750 }, { t: 1777420810, p: 0.0750 },
              { t: 1777424406, p: 0.0750 }, { t: 1777424777, p: 0.0750 },
            ],
          },
          {
            slug: 'will-the-fed-decrease-interest-rates-by-50-bps-after-the-april-2026-meeting',
            question: 'Will the Fed decrease interest rates by 50+ bps after the April 2026 meeting?',
            yesProbability: 0.0005,
            volume: 60317022,
            endDate: '2026-04-29T00:00:00Z',
            history: [
              { t: 1777323624, p: 0.0005 }, { t: 1777327207, p: 0.0005 }, { t: 1777330807, p: 0.0005 }, { t: 1777334412, p: 0.0005 },
              { t: 1777338007, p: 0.0005 }, { t: 1777341607, p: 0.0005 }, { t: 1777345208, p: 0.0005 }, { t: 1777348812, p: 0.0005 },
              { t: 1777352406, p: 0.0005 }, { t: 1777356008, p: 0.0005 }, { t: 1777359622, p: 0.0005 }, { t: 1777363206, p: 0.0005 },
              { t: 1777366813, p: 0.0005 }, { t: 1777370406, p: 0.0005 }, { t: 1777374004, p: 0.0005 }, { t: 1777377610, p: 0.4955 },
              { t: 1777381206, p: 0.0005 }, { t: 1777384806, p: 0.0005 }, { t: 1777388410, p: 0.0005 }, { t: 1777392005, p: 0.0005 },
              { t: 1777395606, p: 0.0005 }, { t: 1777399210, p: 0.0005 }, { t: 1777402807, p: 0.0005 }, { t: 1777406420, p: 0.0005 },
              { t: 1777410008, p: 0.0005 }, { t: 1777413620, p: 0.0005 }, { t: 1777417213, p: 0.0005 }, { t: 1777420810, p: 0.0005 },
              { t: 1777424406, p: 0.0005 }, { t: 1777424703, p: 0.0005 },
            ],
          },
        ],
      },
    },

    { type: 'dialogue', character: 'customer-a', text: '看這條走勢圖中間那根直插上去再瞬間落下來——三檔合約的共同尖峰、發生在昨天 12:00 UTC、就是東京時間禮拜二晚上 9 點整。我們昨晚吃飯吃到一半！我手機螢幕上看到 4/30 從 0.25% 跳到 50%、第一反應是「螢幕死掉了重新整理一下」、結果重整後還是 50%、再過一陣子又退回 0.25%。當下不知道是什麼。今早查紀錄——三檔同步、同一個小時、全部跳到 0.50 附近、然後同時退回。' },

    { type: 'wait', duration: 400 },

    // ── Customer B enters — has the post-mortem on the anomaly ──
    { type: 'enter', character: 'customer-b', toTile: 'entrance' },
    { type: 'move', character: 'customer-b', toTile: 'random-stool' },
    { type: 'sit', character: 'customer-b' },

    { type: 'move', character: 'chef', toTile: 'counter-center' },
    { type: 'dialogue', character: 'chef', text: 'いらっしゃい。昨晚那個 50% 跳——你那邊查到原因了？' },
    { type: 'move', character: 'chef', toTile: 'stove' },

    { type: 'dialogue', character: 'customer-b', text: '查到了——那不是真的成交、是 oracle 出問題。Polymarket 的價格是訂單簿上面 best bid 跟 best ask 的中間值（midpoint）。昨天 12:00 UTC 整、訂單簿空了一個小時——可能是 CLOB 的 keeper 帳戶 gas 不夠、或者 RPC 節點掉線——所有 maker 的單同時失效。沒有 bid 跟 ask、預設值就是 0.50（不知道偏哪邊）。三檔合約的成交不一樣、所以三檔的「沒成交但被讀成 0.5」的數字小不一樣——0.501、0.505、0.4955。' },

    { type: 'dialogue', character: 'customer-a', text: '所以不是有人真的下單、是「沒有人下單」被系統當成 0.50？這個記在心裡——以後在 Polymarket 上看到所有合約同步跳到 50%、第一反應是「oracle 掉線」、不是「市場有事」。三條同時動、相關性 1.0、那不是市場、那是 bug。' },

    { type: 'dialogue', character: 'customer-b', text: '對——而且更重要的是、看那個 timestamp。12:00 UTC 整數、不是 12:00:30 或 11:59:48——是「整點抓資料」的那一秒、剛好抓到掉線中。下一個整點 13:00 UTC 抓的時候、訂單簿已經回來了、價格瞬間恢復。等於這是「採樣偏差」（sampling artifact）——如果你 30 秒採樣一次、你可能完全沒看到。我們公司昨晚的 risk dashboard 就完全沒看到——因為它每 5 分鐘採樣、剛好錯過。' },

    { type: 'camera', effect: 'flash', duration: 200 },

    // ── JBLU Chapter 11 + retail follow-up ──
    {
      type: 'market-data',
      data: {
        tickers: [
          { symbol: 'JBLU', price: 0.30, change: -89.8 },
          { symbol: 'SAVE-OTC', price: 0.18, change: -76.9 },
          { symbol: 'ULCC', price: 2.40, change: -42.9 },
          { symbol: 'ALGT', price: 51.20, change: 3.6 },
        ],
        volatility: 78,
        vix: 23.6,
        rsi: 12.0,
        beta: 1.92,
        priceHistory: [2.95, 1.20, 0.60, 0.40, 0.35, 0.32, 0.30, 0.30],
        volumeHistory: [88, 142, 168, 156, 132, 108, 86, 64],
        sectors: [
          { label: 'JBLU-Ch11-Filed', value: 480, color: '#ee4444' },
          { label: 'SAVE-Pennies', value: 180, color: '#ee4444' },
          { label: 'Apollo-DIP-Won', value: 920, color: '#22cc55' },
          { label: 'ALGT-Survivor', value: 680, color: '#22cc55' },
          { label: 'LCC-Cascade-Done', value: 380, color: '#cc8844' },
        ],
        headline: 'JBLU 上午 8:30 美東遞 Chapter 11 — 股價 -90% 到 $0.30、Apollo 得標 10 億 DIP 借款（17%、18% 換股）、原股東歸零',
      },
    },

    { type: 'dialogue', character: 'customer-b', text: 'JBLU 今早 8:30 美東——也就是禮拜三早上 21:30 JST、跟 GDP 同一個小時——遞 Chapter 11。Apollo 得標、條件比禮拜一漏出來那版稍緊一點：10 億美金、17%、18% 換股、強制重整。原股東今天歸零、明天股票會被 NYSE 摘牌。Frontier 那邊董事會今晚還在開——SAVE 場外 18 cents、被當作下一個。' },

    { type: 'dialogue', character: 'customer-a', text: '廉航三家死兩家——LCC cascade（連鎖）算告一段落。剩下 Frontier 還在掙扎、ALGT 是這條故事裡的最大贏家——市佔率重分配、地面服務商搶它、油價避險續約都比同業便宜。今天 ALGT +3.6% 收 $51.20、整個四月漲了 24%。我們桌四月初買進的那批（每股 $42）、現在 +22%。算這禮拜唯一一筆完全照腳本走的部位。' },

    { type: 'wait', duration: 400 },

    // ── FOMC in 5 hours ──
    { type: 'move', character: 'chef', toTile: 'counter-center' },
    { type: 'dialogue', character: 'chef', text: 'FOMC 5 小時後——東京凌晨 3 點。你們桌怎麼操作？' },

    { type: 'dialogue', character: 'customer-a', text: '我們桌的同事大部分今晚不睡——3 點看聲明、3:30 看 Powell 站講台、4:30 看完寫快訊、5 點半交給亞洲時段桌。我自己——3 點看完聲明就回家睡 3 小時、6 點半再起來看 Powell 影片重播跟市場第一輪反應整理。Powell 30 分鐘的記者會、有時候第三次重看才會聽出他卡頓在哪個字。' },

    { type: 'dialogue', character: 'customer-b', text: 'GDP +1.5% 這個版本——已經先把「鴿派預期」的 0.4% 漲幅做掉了。FOMC 聲明出來、如果只是「降 25bp + 維持原措辭」、SPY 可能不動或微跌（因為「沒驚喜」）。如果聲明把「expected」拿掉換成「committed」、那是 A 劇本的第二個鍵——SPY 跳到 539-540。如果聲明加上「inflation persistent」這種字、那 C 劇本啟動、SPY 跌到 532。' },

    { type: 'dialogue', character: 'customer-a', text: '我桌押 A 機率現在從 40% 升到 50%——GDP 弱已經是先確認的鍵。B 維持 30%、C 退到 20%。Polymarket 那檔 Fed 50bp 5 小時後就到期、現在 0.05%、絕對歸 0、那是已經死透。今晚 3 點聲明出來、市場第一秒會跳的方向、我們押綠（A）的 60%、紅（C）的 40%——但下注的不是「跳哪邊」、是「跳幅有多大」。' },

    { type: 'wait', duration: 400 },

    // ── Powell tomorrow keyword bingo ──
    { type: 'move', character: 'chef', toTile: 'stove' },
    { type: 'dialogue', character: 'chef', text: 'Powell 禮拜四講話——明天什麼時候？東京時間。' },

    { type: 'dialogue', character: 'customer-b', text: 'Powell 整段是禮拜三 14:30 美東——東京時間禮拜四凌晨 3:30。聲明 14:00 出、Powell 14:30 站講台。中間 30 分鐘的真空、市場容易 overshoot。聲明文字市場會解讀成 60%、Powell 講話是另外 40%。我們桌的觀察策略——聲明出來那一刻只放 50% 的部位、看 Powell 講完再把剩下 50% 補上。' },

    { type: 'dialogue', character: 'customer-a', text: '關鍵字三個——「交棒」（passing）、「延續」（continuity）、「通膨」（inflation）。一個關鍵字一個劇本。但今天 GDP 弱、Polymarket Fed 50bp 死透、市場已經在 lean dovish。Powell 即使講「延續」、市場也會解讀成「不鷹」、所以 A 跟 B 之間的差距已經在縮小。真正能讓市場驚到的、只剩 C——也就是他突然講「inflation expectations」三個字、那才會把 SPY 推下去。' },

    { type: 'dialogue', character: 'customer-b', text: 'Polymarket 那檔「Will Powell mention passing the baton」我昨天說 yes 32%、no 68%——今天看一下、yes 已經跳到 41%、no 退到 59%。流動性還是只有 8 萬美金（很淺）、但方向告訴你——市場越來越覺得 Powell 會直接講出「交棒」。如果他真的講、那是 A 劇本第三個鍵、SPY 540 確認。' },

    { type: 'wait', duration: 400 },

    // ── Iran 4/30 contract — 10 hours to expiry ──
    { type: 'move', character: 'chef', toTile: 'counter-center' },
    { type: 'dialogue', character: 'chef', text: '4/30 那檔合約——還剩 10 個小時就到期、最後一段時間衰減看起來怎麼樣？' },

    { type: 'dialogue', character: 'customer-a', text: '剩 10 小時、現在 0.25%——理論上最後 10 小時應該退到 0.10% 以下、最後一小時可能歸 0。但今天整天都釘在 0.25%、完全沒退。意思是——還是有人在這個機率下接單。可能是套利、可能是有人想留個尾巴。我會在凌晨 2 點—FOMC 前 1 小時—看一次、如果還在 0.25%、那就是真的有人在賭最後一秒驚喜。' },

    { type: 'dialogue', character: 'customer-b', text: '0.25% 換算成押注賠率——你下 25 美金、贏的話拿 1 萬美金、虧損上限就是那 25 美金。對這種「機率極小但賠率極高」的合約、最後 24 小時通常還會留一個小池子——彩票心態。10 小時後到期、我猜會走到 0.10% 左右、不會歸 0。明天早上 9 點 JST 到期那一刻、然後合約消失。我會在 Discord 上設個鬧鐘、看那一秒。' },

    { type: 'camera', effect: 'shake', duration: 250, intensity: 1 },

    { type: 'wait', duration: 300 },

    // ── 5-hour overnight clock ──
    {
      type: 'market-data',
      data: {
        tickers: [
          { symbol: 'FOMC-T+5h', price: 100.00, change: 0.0 },
          { symbol: 'Powell-T+5.5h', price: 100.00, change: 0.0 },
          { symbol: 'Iran-T+10h', price: 100.00, change: 0.0 },
          { symbol: 'Asia-Open-T+8h', price: 100.00, change: 0.0 },
        ],
        volatility: 18,
        vix: 23.6,
        rsi: 50.0,
        beta: 1.00,
        priceHistory: [100, 100, 100, 100, 100, 100, 100, 100],
        volumeHistory: [40, 44, 48, 52, 56, 60, 64, 68],
        sectors: [
          { label: 'T+5h-FOMC', value: 1480, color: '#22cc55' },
          { label: 'T+5.5h-Powell', value: 1380, color: '#22cc55' },
          { label: 'T+10h-Iran-Expiry', value: 480, color: '#cc8844' },
          { label: 'A-50%', value: 1280, color: '#22cc55' },
          { label: 'C-20%', value: 720, color: '#ee4444' },
        ],
        headline: '禮拜三晚 22:00 JST 倒數計時：FOMC +5h / Powell +5.5h / Iran 4/30 +10h — A 劇本機率 40% → 50%（GDP 弱已先確認）',
      },
    },

    { type: 'wait', duration: 300 },

    // ── Wrap: Wed evening, late food ──
    { type: 'move', character: 'chef', toTile: 'counter-center' },
    { type: 'dialogue', character: 'chef', text: '今晚兩位都不睡了？' },

    { type: 'dialogue', character: 'customer-a', text: '半睡——3 點看完聲明回家補 3 小時、6 點半再起來看 Powell 重播。熱拉麵、加蛋、加溏心、湯多、麵硬。這碗要撐到凌晨。' },

    { type: 'dialogue', character: 'customer-b', text: '我整晚不睡——回辦公室盯到亞洲早盤 8 點。一樣熱拉麵、加蛋、不要蔥。再多一個煎餃。' },

    { type: 'dialogue', character: 'customer-a', text: '你那個 oracle bug 的 post-mortem——記得寫進今晚 quick note 給客戶。下次再出現他們才不會被嚇到。' },

    { type: 'dialogue', character: 'customer-b', text: '已經寫了。標題「Polymarket midpoint defaulting: a sampling story」。半頁、附那張 timestamp 12:00:00 的截圖。' },

    { type: 'sfx', sound: 'chimes' },

    { type: 'wait', duration: 500 },
    { type: 'move', character: 'chef', toTile: 'stove' },

    {
      type: 'narration',
      text: '禮拜三晚上 10 點半的食堂、兩碗熱拉麵、煎餃、麥茶、外面是東京週中的小雨、計程車燈在路口閃綠然後紅。太平洋那邊——FOMC 的 19 個官員在華府 Eccles Building 二樓會議室坐定、Powell 在隔壁辦公室翻最後一遍講稿（那一段 hawk 字仍然是被刪掉的版本）、JBLU 的破產律師在達拉斯的法院遞交章節 11 的最後一份附件、Apollo 的不良資產組在會議室白板上寫「ALGT 收購可行性」、Frontier 的董事會還沒開完、Costco 的法務團隊把「先交後告」訴狀模板寄給其他六家潛在加入者。Polymarket 那條 0.25% 的線——再 10 個小時就會消失；那條 7.5% 的線——還會走兩個月。今晚 5 個小時後、市場會給這個禮拜真正的數字。先把拉麵吃完。',
      duration: 5800,
    },
  ],
};
