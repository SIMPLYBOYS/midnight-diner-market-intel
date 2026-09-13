import type { Episode } from '../../engine/types';

/**
 * Sources verified 2026-05-15 (Fri JST):
 * - Powell's term as Fed CHAIR expires today (5/15). Warsh becomes 17th
 *   chair, sworn in. Powell stays on the Board as governor (~2 years left
 *   on his governor term). First FOMC with Warsh as chair: 6/16-17.
 *   (CNBC 5/13, NPR 5/13, CNN 5/13, Brookings explainer)
 * - Trump-Xi Day 2 in Beijing: joint statement says "the Strait of
 *   Hormuz must remain open to support the free flow of energy"; Xi
 *   publicly opposes militarization of Hormuz and any toll-charging
 *   scheme; Xi expressed interest in buying more American oil to reduce
 *   China's reliance on the strait. Trump told Fox/Hannity from Beijing
 *   that Xi said China would not supply Iran with military equipment.
 *   Foreign Policy headline 5/14 reads "Day 1 Produces No Big Wins for
 *   Trump" — Day 2 produced a symbolic Hormuz line but no enforceable
 *   commitments on trade, Taiwan, or AI export controls.
 *   (CBS live updates 5/14-15, Al Jazeera 5/14, CNBC 5/14, Foreign
 *   Policy 5/14, CSIS analysis)
 * - Asia Fri 5/15 close — the rally reversed hard:
 *   - Nikkei 225: -1.16% to 61,930.29
 *   - Kospi: -3.37% to 7,712.77 (the big one)
 *   - Hang Seng: -1.04%
 *   Driver: not the Trump-Xi statement (which was net dovish on oil) —
 *   it was an inflation print plus accelerating Fed-hike pricing for
 *   later this year, with Iran-war supply pressure feeding the CPI
 *   path. Kospi got hit hardest because Korean exporters were the most
 *   crowded "Trump-Xi rally" trade — when the trade reversed,
 *   positioning unwound violently.
 *   (CNBC Asia Markets Live 5/15, Business Upturn 5/15)
 * - Oil: WTI ~$102.49 +1.31% on 5/15 — counterintuitive given the
 *   Hormuz "must remain open" line. Reason: market is pricing the
 *   inflation+Fed-hike loop (higher rates, stronger dollar) into
 *   crude-demand expectations, AND traders still note the "must
 *   remain open" is rhetoric, not a Chinese enforcement mechanism on
 *   Iran. Brent on 5/14 closed $105.87 +0.22%; Friday's Brent close
 *   not yet final at JST evening writing — keep narration honest.
 *   (TradingEconomics WTI 5/15, TradingEconomics Brent 5/14)
 * - USD/JPY broke out of yesterday's frozen 157.91 zone — yen
 *   weakened to ~158.5 on Friday, set to post a weekly loss of >1%
 *   on broad USD strength linked to the accelerating-Fed-hike pricing.
 *   No verbal intervention escalation reported today.
 *   (TradingEconomics JPY 5/15)
 * - sectors[].value methodology: |%change|×100 of headline asset per
 *   theme, sorted desc. Today's biggest absolute move = Kospi -3.37%
 *   = 337, dominates the chart appropriately because it IS the story.
 * - Episode does NOT include a polymarket-odds action — continuing
 *   project guidance to vary themes. Today's beats: Powell farewell,
 *   Trump-Xi Day 2 joint statement (Hormuz), Kospi blow-up, yen
 *   breakout.
 * - Continuity: ep35 — Customer A said he'd come Friday for "兩道菜";
 *   Customer B told her husband she'd be home by 10 (no 15-min extra).
 *   Today IS that Friday. Customer A orders two dishes as promised;
 *   Customer B sticks to her 10pm promise (don't repeat the 15-min
 *   gift line). Don't pin Customer B's husband's job. Warsh now the
 *   sitting chair — verbs change from "would be" to "is".
 */
export const EPISODE_36: Episode = {
  id: 'ep-36',
  date: '2026-05-15',
  title: '20260515 禮拜五晚上、Powell 交班最後一天、Trump-Xi Day 2 / Hormuz「must remain open」、Kospi -3.37% 全亞洲被翻過去、USD/JPY 衝 158.5',
  description: '禮拜五晚上、Tokyo 21:00。今天三件事同時發生——Powell 講完告別演說、把椅子讓給 Warsh、自己留在 Board 當理事；Trump-Xi Day 2 在北京發了聯合聲明、寫到「Strait of Hormuz must remain open」、習近平還說 China 想多買美國油、減少對海峽的依賴；然後亞洲市場、把昨天那盤「先擺雨傘」的單全部翻過去——Kospi 收 -3.37% 到 7,712.77、Nikkei -1.16% 到 61,930.29、Hang Seng -1.04%。Kospi 砸最重、因為過去兩個禮拜「Trump-Xi 親善 → 韓國出口商受惠」是最擠的部位、今天部位回吐、踩踏式平倉。油 WTI 反而 +1.31% 到 $102.49——Hormuz 開門明明是利空、但 Fed 升息預期 + 伊朗戰爭通膨壓力、把油壓在偏多那邊。USD/JPY 158.5、昨天那條 157.91 的釘子線、今天斷了——本週累積跌幅 >1%。Powell 走出大門那刻、Warsh 已經坐進去。',
  actions: [
    { type: 'bgm', track: 'chill-lofi', command: 'play' },

    {
      type: 'narration',
      text: '禮拜五晚上 9 點、東京。今天是這禮拜的最後一天、三件事同時落地——第一、Powell 早上華盛頓時間做完最後一次 chair 身分的公開演說、把椅子讓給 Warsh、自己留在 Board 當理事；第二、Trump-Xi 在北京 Day 2、發了聯合聲明、最有名的一句是「Strait of Hormuz must remain open to support the free flow of energy」、習近平還加碼說中國想多買美國油、減少對海峽的依賴；第三、亞洲市場把昨天那盤「先擺雨傘」的 call option 整盤翻過去——Kospi 收 -3.37% 到 7,712.77、Nikkei -1.16% 到 61,930.29、Hang Seng -1.04%。Kospi 砸最重、因為過去兩個禮拜最擠的部位是「Trump-Xi 親善 → 韓國出口商」、今天部位踩踏式平倉。油這邊比較怪——Hormuz 講開門、按理油要跌、結果 WTI 反而 +1.31% 到 $102.49、原因是 Fed 升息預期 + 伊朗戰爭通膨在後面頂著。USD/JPY 158.5、昨天那條 157.91 的釘子線、今天斷掉、本週累積跌幅 >1%。Powell 走出 Eccles Building 那一刻、Warsh 已經坐進去——一個時代換班、市場一邊看一邊賠錢。',
      duration: 6000,
    },

    {
      type: 'market-data',
      data: {
        tickers: [
          { symbol: 'Kospi（收）', price: 7712.77, change: -3.37 },
          { symbol: 'Nikkei（收）', price: 61930.29, change: -1.16 },
          { symbol: 'Hang Seng（收）', price: 0, change: -1.04 },
          { symbol: 'WTI 油', price: 102.49, change: 1.31 },
          { symbol: 'USD/JPY', price: 158.5, change: 0.37 },
        ],
        volatility: 26,
        vix: 19.8,
        rsi: 38.4,
        beta: 1.08,
        priceHistory: [7831, 7820, 7798, 7775, 7820, 7765, 7780, 7712],
        volumeHistory: [219, 245, 290, 360, 425, 510, 588, 642],
        sectors: [
          { label: 'Kospi -3.37%（7,712.77、過去兩週最擠的 Trump-Xi 親善部位踩踏式平倉）', value: 337, color: '#cc4422' },
          { label: 'WTI 油 +1.31%（$102.49、Hormuz 開門講了但 Fed 升息+伊朗戰通膨把油頂著）', value: 131, color: '#22cc55' },
          { label: 'Nikkei -1.16%（61,930.29、出口股跟著 Kospi 一起被砸）', value: 116, color: '#cc4422' },
          { label: 'Hang Seng -1.04%（昨天 +0.60% 領跑的 call option 今天反向）', value: 104, color: '#cc4422' },
          { label: 'USD/JPY +0.37%（158.5、釘子線 157.91 斷掉、本週累積跌 >1%）', value: 37, color: '#cc4422' },
        ],
        headline: '禮拜五 21:00 JST：Powell 交班 / Trump-Xi Day 2 / Hormuz「must remain open」/ Kospi -3.37% / Nikkei -1.16% / Hang Seng -1.04% / WTI $102.49 +1.31% / USD/JPY 158.5 釘子線斷',
      },
    },

    { type: 'enter', character: 'chef', toTile: 'stove' },
    { type: 'wait', duration: 500 },
    { type: 'move', character: 'chef', toTile: 'prep-area' },
    { type: 'wait', duration: 400 },
    { type: 'move', character: 'chef', toTile: 'stove' },
    { type: 'wait', duration: 400 },

    // Customer A enters first — promised "兩道菜" yesterday
    { type: 'enter', character: 'customer-a', toTile: 'entrance' },
    { type: 'move', character: 'chef', toTile: 'counter-center' },
    { type: 'dialogue', character: 'chef', text: 'いらっしゃい。你昨天跟我約「禮拜五兩道菜」——今天就是禮拜五、我有準備。我老婆今天看新聞看一整天、晚上吃飯跟我說「Powell 那個人走出大門的鏡頭、看起來很累、但表情輕鬆」——她說「終於可以好好睡了」。' },

    { type: 'move', character: 'customer-a', toTile: 'random-stool' },
    { type: 'sit', character: 'customer-a' },

    { type: 'dialogue', character: 'customer-a', text: '師傅、那個鏡頭我們桌上也在看。Powell 講完那 15 分鐘告別演說、走出 Eccles Building、媒體圍上去他只笑、沒回答任何問題、上車就走。同一時間、Warsh 從另一個門進去、辦公室已經整理好。「兩個人沒見面、椅子直接換過」——這個比 Trump 在北京握手畫面、安靜很多、但對我們做債券的更重要。' },

    { type: 'move', character: 'chef', toTile: 'stove' },
    { type: 'wait', duration: 400 },

    { type: 'dialogue', character: 'chef', text: '兩個人沒見面、椅子直接換——我師父當年也是這樣。我接他店那天、他前一天晚上把刀全部洗乾淨、配方紙條留在抽屜、自己坐火車去鄉下、沒回來看過。Powell 也走得乾淨？' },

    { type: 'dialogue', character: 'customer-a', text: '師傅這個比喻又準。Powell 沒退休、他還是理事、留兩年——意思是他「沒走遠、但不講話」、像你師父去鄉下但留電話號碼。重要的差別是——你師父留配方、Powell 留的是「會議室裡的一票」、6 月那場 FOMC、他還是會投票、只是不再是主席。Warsh 第一次主持、會發現桌上 Powell 那一票會默默看著他。' },

    { type: 'dialogue', character: 'chef', text: '前老闆還在隔壁桌投票——這個壓力我懂。我們街上開拉麵店的老田、他兒子接班那年、老田每天還是 6 點來坐第一張凳、不講話、就看。兒子煮三個月才敢調湯。Warsh 大概也是這個感覺。' },

    { type: 'dialogue', character: 'customer-a', text: '師傅這段我要寫進今天的客戶簡報。我們做債券的、最怕「主席跟前主席同桌投票」、因為市場會去解讀「Powell 投反對是抗議嗎」、解讀錯就賠錢。所以未來兩年、Fed 內部投票紀錄會被放大鏡看、每一筆 dissent 都會被新聞寫。' },

    { type: 'wait', duration: 400 },

    // ── Trump-Xi Day 2 — Hormuz joint statement ──
    { type: 'dialogue', character: 'chef', text: '另一邊——Trump-Xi 今天 Day 2、聽說發了聯合聲明、那句什麼「Hormuz must remain open」——這個是 Trump 拿到他要的東西了嗎？' },

    { type: 'dialogue', character: 'customer-a', text: '師傅、表面上看好像拿到了——習近平公開講「海峽要開」、還說「中國想多買美國油、減少對海峽的依賴」、這兩句字面上對 Trump 都是好話。但我們桌上的人、看完聯合聲明全文、結論是「Trump 拿到的是 rhetoric、不是 enforcement」——習近平講「海峽要開」、但中國沒答應任何具體動作去逼伊朗、沒答應制裁、沒答應停買伊朗油。等於房東公開講「我希望房客開門」、但鑰匙還是在房客手上、房東沒去敲門。' },

    { type: 'dialogue', character: 'chef', text: '房東只講話、沒敲門——這個我懂。我們店裡客人有時候吵架、老闆走出來講「大家冷靜」、其實沒人動手去拉、就是嘴巴上做個樣子。市場買單嗎？' },

    { type: 'dialogue', character: 'customer-a', text: '師傅這就是今天市場最弔詭的地方。如果市場真的相信「海峽要開」、油應該跌——結果 WTI 反而漲 1.31% 到 $102.49。意思是、做油的人不信、或者說、就算信、後面還有 Fed 升息預期 + 伊朗戰爭通膨在頂著、油下不來。一句外交辭令、抵不過兩個基本面壓力。' },

    // Customer B enters — promised husband 10pm home
    { type: 'enter', character: 'customer-b', toTile: 'entrance' },
    { type: 'move', character: 'customer-b', toTile: 'random-stool' },
    { type: 'sit', character: 'customer-b' },

    { type: 'move', character: 'chef', toTile: 'counter-center' },
    { type: 'dialogue', character: 'chef', text: 'いらっしゃい。今天答應先生 10 點前回家、那我這碗動作要快——你昨天才答應的、不能今天就破。' },
    { type: 'move', character: 'chef', toTile: 'stove' },

    { type: 'dialogue', character: 'customer-b', text: '師傅你記得清楚。今天我們 desk 從早上 8 點半就在燒——盤前我們對 Kospi 的 view 是「Trump-Xi 親善延續、韓國出口股加分」、昨天那批 call option 我們還加碼。結果今早一開盤、Kospi 直接 -1%、十點變 -2%、收盤 -3.37%。整盤反過去打。我們組裡有兩個 PM 今天直接被 stop 出場。' },

    { type: 'dialogue', character: 'chef', text: '昨天你跟我講「先擺雨傘那群人」——今天雨沒下、傘的人賠錢？' },

    { type: 'dialogue', character: 'customer-b', text: '師傅這次比喻要修正一下——今天不是「雨沒下」、是「下了反方向的雨」。我們押的方向是「Trump-Xi 親善、利多」、結果今天市場買的故事是「親善只有嘴砲、Fed 還要升息、出口股完了」。同樣的新聞、解讀翻 180 度。我們昨天賺的、今天還倒貼。' },

    { type: 'dialogue', character: 'chef', text: '同一新聞、解讀翻 180 度——這個是不是表示昨天那些做研究的人、做錯了？' },

    { type: 'dialogue', character: 'customer-a', text: '師傅這個問題很尖銳。答案是——昨天的分析「邏輯沒錯」、但漏看了一個變數。我們昨天的故事是「Trump-Xi 親善 → 油跌 → 通膨壓力減 → Fed 不用升息 → 股市加分」。今天市場改寫成「Trump-Xi 講話沒用 → 油沒跌 → 通膨還在 → Fed 還是要升 → 股市完蛋」。差別是「Hormuz 那句到底有沒有用」、市場今天投票結果是「沒用」。' },

    { type: 'dialogue', character: 'customer-b', text: '更殘酷的——今天 Kospi 砸 -3.37% 不是因為基本面突然壞、是因為「過去兩個禮拜大家押同一個方向」、部位太擠、有人開始砍、就連鎖砍下去。我們行話叫「positioning unwind」、白話就是「先進場的人想跑、後進場的人擋路、最後變踩踏」。今天 Kospi 那 -3.37%、有 -2% 是踩踏、不是基本面。' },

    { type: 'wait', duration: 400 },

    // ── Why Kospi specifically? ──
    { type: 'dialogue', character: 'chef', text: '為什麼是 Kospi 砸最重、不是 Nikkei 不是 Hang Seng？韓國今天有特別的事嗎？' },

    { type: 'dialogue', character: 'customer-a', text: '師傅、原因是 Kospi 是「最依賴出口、最依賴中國」的市場、所以「Trump-Xi 親善延續」這個故事、Kospi 受惠最多、押的人最多。當故事翻過去、Kospi 受傷也最多。Nikkei 日本內需股多一點、Hang Seng 是中國股、香港散戶反而比較不押這個故事——所以同樣翻盤、Kospi 跌 -3.37%、Nikkei 只跌 -1.16%、Hang Seng -1.04%。「跌得多 = 之前漲得多 = 押得多」、不是「韓國今天出大事」。' },

    { type: 'dialogue', character: 'chef', text: '跌得多、是因為之前漲得多——這個我老婆會點頭。她每次看店裡哪道菜突然賣不動、會說「上個月賣太瘋、客人膩了」、不是菜變難吃。市場跟客人的胃、一樣。' },

    { type: 'dialogue', character: 'customer-b', text: '師傅這個比喻、我打算明天早會講給組長聽。我們報告寫「sector rotation」、其實就是客人換口味——上個月吃膩了的、這個月不點、換新的。今天 Kospi 被換掉、Nikkei 跟 Hang Seng 被連帶拖、是因為亞洲基金的錢、進來一桶、出去一桶、不會留在原地。' },

    { type: 'wait', duration: 400 },

    // ── The yen — the nail came out ──
    { type: 'dialogue', character: 'chef', text: '日圓今天不是 157.91 嗎？怎麼跳到 158.5？昨天還說是「釘子線」、今天釘子拔掉了？' },

    { type: 'dialogue', character: 'customer-b', text: '師傅、釘子今天斷了。原因是、今天美元那邊整體強——市場開始 price in「Fed 今年下半年還要升一碼」、理由是伊朗戰爭把通膨壓力放在那裡、Powell 卸任最後一天、Warsh 上任又是被認為「中間偏鷹」、所以美元升、日圓相對弱。本週累積、日圓對美元跌 >1%、是這個月第三大週跌幅。' },

    { type: 'dialogue', character: 'chef', text: '我昨天還說「電視太吵、市場太安靜」——今天反過來、電視一樣吵、市場跟著一起吵。誰負責拔釘子？' },

    { type: 'dialogue', character: 'customer-a', text: '師傅、沒有「誰拔的」、是「釘子自己撐不住」。昨天市場是因為「不知道 Trump 在北京會講什麼」、所以暫停、誰也不押方向。今天聲明出來、市場讀完發現「沒換到實質的」、然後反手做美元、日圓就破線。釘子拔掉、是因為「等待」結束、不是因為新的力量出現。' },

    { type: 'dialogue', character: 'customer-b', text: '財務省今天有出來講話、但講的還是那 9 個字「視市場狀況、機動應對」——市場已經免疫。168 那條線是公認的「政府一定會出手」紅線、158.5 還在容忍區、所以沒動作。如果下禮拜跳到 160、那才會看到動作。' },

    { type: 'wait', duration: 400 },

    // ── Oil — the counterintuitive move ──
    { type: 'dialogue', character: 'chef', text: '我最不懂的是油——Trump 跟習近平講好「海峽要開」、按理油該跌、結果油漲 1.31%。是市場不信他們嗎？' },

    { type: 'dialogue', character: 'customer-a', text: '師傅、有兩個原因疊起來。第一、市場真的不太信——「Hormuz must remain open」這句是聯合聲明的標準句、過去 30 年中美聯合聲明寫過無數次類似的「促進區域穩定」、實際執行力低、市場學會打折扣。第二、就算信、油上面還有 Fed 升息預期 + 戰爭風險溢價在頂著——一句外交辭令、抵不過兩個結構性壓力。所以油今天往上、是「結構壓力 > 嘴砲利多」。' },

    { type: 'dialogue', character: 'chef', text: '嘴砲利多——這個詞我第一次聽。可不可以用我聽得懂的方式講？' },

    { type: 'dialogue', character: 'customer-a', text: '師傅用你店裡的事——你跟食材商談價、他講「下個月會降」、你信嗎？不太信、因為他沒簽合約、沒寫紙、只是嘴上講。「嘴砲利多」就是這個——對方講了好聽的、但沒寫進合約、沒給時間表、沒給罰則。市場現在對中美的聯合聲明、就是這個感覺、聽完、笑笑、做自己的。' },

    { type: 'dialogue', character: 'chef', text: '沒寫進合約、聽完笑笑——我們做飯的也一樣。客人說「下次帶朋友來」、我都點頭、但備料不會多備、因為十次有八次沒來。原來大國也這樣？' },

    { type: 'dialogue', character: 'customer-b', text: '師傅、大國只是把「下次帶朋友來」寫成 50 頁 PDF、找律師潤稿、然後一樣是十次有八次沒來。差別只是 PDF 比較好看。' },

    { type: 'wait', duration: 400 },

    // ── Closing — Powell's exit ──
    { type: 'dialogue', character: 'chef', text: '回到 Powell——他這 8 年、做得算好嗎？我老婆問我「為什麼這個人下台的時候、新聞講得這麼客氣」、我答不出來。' },

    { type: 'dialogue', character: 'customer-a', text: '師傅、Powell 8 年裡撐過三件事——疫情那年的緊急降息、那一波通膨的 11 次連續升息、然後最後兩年慢慢降息、把經濟拉回軟著陸。市場對他的評價、是「沒做錯大事」、不是「做了天才事」。Fed 主席被記住的方式、跟你做菜不一樣——你做出一道驚豔的菜會被記住、Fed 主席「沒搞砸」就已經是好成績。Powell 屬於後者。' },

    { type: 'dialogue', character: 'customer-b', text: '我加一句——Trump 過去三年罵 Powell 至少 200 次、每次都罵「太慢、太鴿、太蠢」、Powell 一次都沒回嘴、只在記者會用一句話「我們依數據做決定」帶過。8 年下來、Fed 獨立性這塊招牌、他沒讓 Trump 拆掉。從這個角度、他做得不錯。今天他走出大門、我看新聞鏡頭、他臉是輕鬆的。' },

    { type: 'dialogue', character: 'chef', text: '8 年沒回嘴、招牌沒被拆——這個我懂。我老婆以前在公司當總機 30 年、什麼客人都接過、什麼難聽話都聽過、退休那天她說「我這 30 年最大的成就、是沒摔過電話」。Powell 跟她一樣、不是「做了什麼」、是「沒做什麼」。' },

    { type: 'dialogue', character: 'customer-a', text: '師傅你太太這句「沒摔過電話」、是我聽過評價 Powell 任期最好的一句中文。我下禮拜寫 Powell 卸任專題、我要引用——當然會註明「Tokyo 某居酒屋師傅的太太」。' },

    { type: 'dialogue', character: 'chef', text: '不用註明、我老婆不需要署名——她說過「總機不署名是這份工作的尊嚴」。' },

    { type: 'wait', duration: 400 },

    // ── Closing — orders ──
    { type: 'move', character: 'chef', toTile: 'counter-center' },
    { type: 'dialogue', character: 'chef', text: '今晚兩位吃什麼？customer-a 你昨天約的兩道菜、我今天備了——一道烤味噌鯖魚、漬蘿蔔配冷蕎麥；一道海老天婦羅蓋飯、湯加豆腐。customer-b 你 10 點前要回家、簡單一點——我做關東煮、白蘿蔔、雞蛋、竹輪、配熱清酒一小杯、20 分鐘上桌。' },

    { type: 'dialogue', character: 'customer-a', text: '師傅、就照你說的兩道——鯖魚先上、蓋飯壓軸。我們今天 desk 賠錢、晚餐要吃好一點補回來、不然週末睡不著。' },

    { type: 'dialogue', character: 'customer-b', text: '關東煮就好。我先生在地鐵口等、9 點 40 我得起身、清酒一小杯、不能多。今天本來想再加一份炸雞、但答應 10 點回家就是 10 點、加菜就會超時——「守時」優先。' },

    { type: 'dialogue', character: 'chef', text: '守時優先——這個是大人的選擇。我老婆說過「不超時、是給對方的尊重、比什麼禮物都貴」。她以前在公司、最氣不是被罵、是「主管講完會議延長 10 分鐘、結果延 1 小時」——她說「那 50 分鐘是搶來的、不是給來的」。今天你 9:40 起身、是給你先生的尊重、我這碗 9:35 給你、湯吹一吹剛好可以走。' },

    { type: 'sfx', sound: 'chimes' },

    { type: 'wait', duration: 500 },
    { type: 'move', character: 'chef', toTile: 'stove' },

    {
      type: 'narration',
      text: '禮拜五晚上 10 點半、東京。今天這禮拜的三條線、同時收尾——Powell 走出 Eccles Building、Warsh 從另一個門進去、椅子換了、兩個人沒見面；Trump-Xi 在北京 Day 2、聯合聲明寫到「Hormuz must remain open」、習近平加碼說想多買美國油、但市場讀完打折扣、認為是 rhetoric 不是 enforcement；亞洲市場把昨天那盤「先擺雨傘」的單翻過去——Kospi -3.37% 到 7,712.77（部位踩踏 + 故事翻盤）、Nikkei -1.16%、Hang Seng -1.04%。油 WTI +1.31% 到 $102.49、Hormuz 開門講了但 Fed 升息預期 + 戰爭通膨壓力把油頂著、嘴砲利多輸給結構壓力。USD/JPY 158.5、昨天那條 157.91 釘子線斷了、本週累積跌 >1%、財務省今天還是那 9 個字、市場已經免疫。Customer A 吃了烤鯖魚加海老天婦羅蓋飯——「desk 賠錢、晚餐補回來」；Customer B 9:40 準時起身、關東煮加一杯清酒、剩下半杯沒喝、「守時優先」。Powell 留在 Board 兩年、不講話、像那個坐第一張凳的拉麵老田。Warsh 6 月 16、17 號開他的第一場 FOMC——前老闆會在那張桌上、默默看著他投票。下禮拜換 Warsh 的故事。',
      duration: 6000,
    },
  ],
};
