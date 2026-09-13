import type { Episode } from '../../engine/types';

/**
 * Sources verified 2026-06-06 (Sat JST):
 * - DATA NOTE: Saturday = markets closed. Framed as a WEEKEND WRAP
 *   (same convention as ep37/ep51), anchored on verified Friday 6/5
 *   closes. The 6/5 episode wasn't written (jumped from ep56 Thu to
 *   ep57 Sat), so this episode also lands Friday's facts in passing.
 *   No invented Sat prints.
 * - THE WEEK'S ARC — three stress tests of the "managed escalation"
 *   thesis, all passed:
 *   - Tue (ep54): Trump "I don't care" (RHETORIC) — Polymarket flat,
 *     read as noise upgrade.
 *   - Wed (ep55): Rubio "Iran mining Hormuz" (CONCRETE FACT) — market
 *     applied four-layer discount (source neutrality / independent
 *     verification / deal-structure / already-priced-in), Polymarket
 *     +0.5pp, kept compressed.
 *   - Thu (ep56): Iran hit KUWAIT INTL AIRPORT + US strikes on QESHM
 *     ISLAND (KINETIC) — Asia -1 to -2%, but Polymarket FLAT at 2.5%
 *     and range 1.45-3.1% didn't open → "managed escalation" framework
 *     (coercive bargaining within deal frame, not deal collapse).
 *   - Fri (this ep): Nikkei -1.5% to ~66,400 — driven NOT by Iran but
 *     by BROADCOM's disappointing AI outlook, financial layer finally
 *     DECOUPLED from geopolitics. Oil ALSO fell on diplomacy hopes
 *     (WTI -3.1% to ~$91, Brent -3% to ~$95, third straight Friday
 *     drop) — war premium drained back even as Wednesday was kinetic.
 *   (CNBC 6/4-6/5, Reuters/CNBC oil 6/5)
 * - The strongest tell of the week: POLYMARKET regime-fall dropped
 *   from 2.5% (Thu, ep56) to 2.1% (Sat read). Range narrowed too: top
 *   from 3.1% down to 2.95%. The bet kept going DOWN through Kuwait
 *   Airport + US Qeshm strikes + AI selloff. Range compression all
 *   week tells us managed escalation is now structurally priced.
 *   Data from public/polymarket/latest.json (collectedAt 2026-06-06T01:14Z).
 * - Iran-deal weekend developments: Iran briefly suspended talks
 *   over Israel's Lebanon actions (called Lebanon strikes a ceasefire
 *   violation), then back on track hours later. Hezbollah rejected
 *   the US-mediated Israel-Lebanon ceasefire proposal. Trump said
 *   Wed that progress could come "as early as this weekend" — that's
 *   "next week" déjà vu (ep56 desk tracker at 25%). Deal STILL not
 *   signed. (CNN live 6/1-6, CNBC 6/5)
 * - sectors[].value = |%change|x100 per theme, desc; uses Fri-specific
 *   sourced %s where available, with carryovers clearly labelled.
 * - Continuity: ep56 (Thu) Customer B solo — introduced "managed
 *   escalation" framework, three-layer signal weighting (新聞=陌生
 *   客 / 分析師=服務員 / Polymarket=熟客的臉色), Trump talk-vs-walk
 *   tracker (25%), and the line "我們真正的價值不是預測未來、是幫
 *   客戶在恐慌時不做傻事". Tonight CUSTOMER A (alternation 54B 55A
 *   56B 57A) — A's macro-synthesis voice fits weekend reflection on
 *   "the week the framework held through three escalation layers +
 *   Friday's surprise: AI cycle dethroned Iran as the driver". A
 *   persona: male analyst, late 30s. Chef's wife: she's followed
 *   the whole week and saw Fri's Nikkei drop ("這次是 AI 啊？"). A
 *   does NOT do over/under betting. Warsh first FOMC still 6/16-17.
 */
export const EPISODE_57: Episode = {
  id: 'ep-57',
  date: '2026-06-06',
  title: '20260606 禮拜六晚上、一週收尾——「managed escalation」框架經住三層 stress test（Tue rhetoric→Wed mining→Thu Kuwait 機場+ Qeshm 反擊）、Polymarket 政權垮台從 2.5% 降到 2.1% 範圍頂從 3.1% 收到 2.95%；但 Fri Nikkei -1.5% 不是 Iran 是 Broadcom AI outlook 失望——金融層終於跟地緣脫鉤、AI 週期變成新的 driver；油從 Thu 高點掉回 WTI ~$91 Brent ~$95',
  description: '禮拜六晚上、Tokyo 21:00、市場休息。這一週發生了好多事、收尾這個週末要好好整理。三層 escalation stress test、ep54 b 講的框架經住了——禮拜二是 Trump「I don\'t care」rhetoric upgrade、禮拜三是 Rubio「Iran mining Hormuz」concrete fact、禮拜四是 Iran 打 Kuwait 機場 + 美對 Qeshm Island 反擊的 kinetic action。從嘴上、到證據、到飛彈——三層遞進、每一層都該打穿 deal-collapse 的賭注、結果牆上那個 Polymarket 從 2.5% 一路降到今晚的 2.1%、範圍頂部從 3.1% 收到 2.95%。連續三層升級而賭盤反向往下走、是這禮拜「managed escalation」框架被市場真正接受的證據。但禮拜五出了驚喜——Nikkei -1.5% 跌到約 66,400、Topix 也回吐；但跌的理由不是 Iran、是 Broadcom 對 AI 的展望失望、半導體跟 AI 概念股被砍。金融層終於跟地緣 decouple、AI 週期變成新的 driver——這是禮拜五最值得記的轉變。油也回頭、WTI 一週跌約 5% 到 $91、Brent 跌 3% 到 $95、戰爭溢價在 diplomacy 希望下又洩、跟禮拜三剛上的彈一來一回。Iran 那邊週末有小波折——伊朗一度因為以色列打黎巴嫩說「talks 暫停」、幾小時後就「back on track」、Trump 又說「progress this weekend」、不過他的「下週」已經連說 6 個禮拜了、desk tracker 還在 25%。今晚 customer-a 來。',
  actions: [
    { type: 'bgm', track: 'chill-lofi', command: 'play' },

    {
      type: 'narration',
      text: '禮拜六晚上 9 點、東京。一週收尾、店裡比平日清靜。回頭看這禮拜——三層 escalation stress test、ep54 customer-b 講的「managed escalation」框架經住了。禮拜二是 Trump「I don\'t care」rhetoric upgrade、禮拜三是 Rubio「Iran mining Hormuz」concrete fact、禮拜四是 Iran 打 Kuwait 機場 + 美對 Qeshm Island 反擊的 kinetic action。從嘴上、到證據、到飛彈——三層遞進、每一層都應該把 deal-collapse 的賭注往上推。結果牆上那個 Polymarket「伊朗政權 6 月底前垮台」、從週中 2.5% 一路降到今晚 2.1%、範圍頂部從 3.1% 收到 2.95%。連續三層升級而賭盤反向往下走——這是這禮拜「managed escalation」框架被市場真正接受、結構性 price in 的證據。但禮拜五給了一個驚喜——Nikkei -1.5% 跌到約 66,400、Topix 也回吐；但跌的理由不是 Iran、是 Broadcom 對 AI 的展望失望、半導體跟 AI 概念股被砍。意思是金融層終於跟地緣 decouple、AI 週期變成新的 driver。這是這禮拜最值得記的結構轉變——市場對 Iran 已經 boring、對 AI 又開始警覺。油也回頭、WTI 禮拜五 -3.1% 跌到 ~$91、Brent -3% 到 ~$95、戰爭溢價在 diplomacy 希望下又洩、跟禮拜三才剛上的彈、形成一週內的快速來回。Iran 週末有小波折——伊朗一度因為以色列打黎巴嫩說「talks 暫停」、幾小時後 back on track；Trump 又喊「progress this weekend」——他的「下週」已經連說 6 個禮拜、desk 內部 tracker 還在 25%。今晚 customer-a 來。',
      duration: 6000,
    },

    {
      type: 'market-data',
      data: {
        tickers: [
          { symbol: 'Nikkei 225（6/5 Fri 收、Broadcom 拖）', price: 66400.0, change: -1.5 },
          { symbol: 'WTI 油（6/5 Fri、diplomacy 希望、第三天跌）', price: 91.0, change: -3.1 },
          { symbol: 'Brent 油（6/5 Fri）', price: 95.0, change: -3.0 },
          { symbol: 'Topix（6/4 Thu carry）', price: 3952.2, change: -1.09 },
          { symbol: 'USD/JPY（carryover ~159.5）', price: 159.45, change: 0.0 },
        ],
        volatility: 22,
        vix: 17.6,
        rsi: 42.0,
        beta: 1.06,
        priceHistory: [66329, 66934, 66400, 66051, 67212, 68402, 67470, 66400],
        volumeHistory: [700, 660, 720, 700, 740, 820, 860, 900],
        sectors: [
          { label: '油本週累計 ~-5%（WTI 從 Thu 高 $95.46 → Fri ~$91、戰爭溢價洩、Polymarket 也 confirm）', value: 500, color: '#cc4422' },
          { label: 'WTI -3.1%（6/5、diplomacy 希望、連三天跌、本週第二大單日 drop）', value: 310, color: '#cc4422' },
          { label: 'Brent -3.0%（6/5、跟 WTI 同向、低於 $96）', value: 300, color: '#cc4422' },
          { label: 'Nikkei -1.5%（6/5、Broadcom AI outlook 失望拖累、不是 Iran、金融層脫鉤）', value: 150, color: '#cc4422' },
          { label: 'Topix -1.09%（6/4 Thu carry、寬度也跌、不只大型股）', value: 109, color: '#cc4422' },
        ],
        headline: '禮拜六 21:00 JST、市場休息、一週收尾：三層 escalation stress test 框架經住（Tue rhetoric Wed mining Thu Kuwait+ Qeshm kinetic）/ Polymarket 政權垮台 2.5%→2.1% 範圍頂 3.1%→2.95% 連續升級反向往下 / 但 Fri Nikkei -1.5% 不是 Iran 是 Broadcom AI outlook 失望、金融層脫鉤、AI 週期變新 driver / 油 WTI 一週 ~-5% 到 ~$91 Brent ~$95 / Trump 「下週」連說 6 週 desk tracker 25%',
      },
    },

    {
      type: 'polymarket-odds',
      data: {
        asOf: '2026-06-06T01:14:45Z',
        highlightSlug: 'will-the-iranian-regime-fall-by-june-30',
        markets: [
          {
            slug: 'will-the-iranian-regime-fall-by-june-30',
            question: 'Will the Iranian regime fall by June 30?',
            yesProbability: 0.0215,
            volume: 48722483,
            liquidity: 601211,
            endDate: '2026-06-30T00:00:00Z',
            history: [
              { t: 1780106407, p: 0.0225 }, { t: 1780138804, p: 0.0215 }, { t: 1780171208, p: 0.0215 },
              { t: 1780203607, p: 0.0235 }, { t: 1780236007, p: 0.0215 }, { t: 1780268404, p: 0.0235 },
              { t: 1780300806, p: 0.0225 }, { t: 1780333216, p: 0.0175 }, { t: 1780365606, p: 0.0205 },
              { t: 1780398006, p: 0.0265 }, { t: 1780430419, p: 0.0255 }, { t: 1780462806, p: 0.0265 },
              { t: 1780495206, p: 0.0245 }, { t: 1780527605, p: 0.0255 }, { t: 1780560005, p: 0.0245 },
              { t: 1780592432, p: 0.0255 }, { t: 1780624806, p: 0.0235 }, { t: 1780657204, p: 0.0225 },
              { t: 1780689607, p: 0.0195 }, { t: 1780708383, p: 0.0215 },
            ],
          },
        ],
      },
      duration: 5000,
    },

    { type: 'enter', character: 'chef', toTile: 'stove' },
    { type: 'wait', duration: 500 },
    { type: 'move', character: 'chef', toTile: 'prep-area' },
    { type: 'wait', duration: 500 },
    { type: 'move', character: 'chef', toTile: 'stove' },
    { type: 'wait', duration: 400 },

    { type: 'enter', character: 'customer-a', toTile: 'entrance' },
    { type: 'move', character: 'chef', toTile: 'counter-center' },
    { type: 'dialogue', character: 'chef', text: 'いらっしゃい。禮拜六晚上、你週末還願意出來——一定是這一週累積太多想跟我整理。我老婆這禮拜整個跟著新聞坐雲霄飛車——禮拜一還在「應該成了吧」、禮拜二「不在乎是什麼意思」、禮拜三「真的佈雷」、禮拜四「機場被打」、禮拜五看新聞跟我說「這次是 AI 啊？」、我們倆笑了——一個 Iran 都還沒消化完、AI 又上場了。' },

    { type: 'move', character: 'customer-a', toTile: 'random-stool' },
    { type: 'sit', character: 'customer-a' },

    { type: 'dialogue', character: 'customer-a', text: '師傅、晚安、你太太這一週情緒的軌跡、剛好就是這禮拜我跟同事最大的觀察——「市場已經把 Iran 鈍化了、新的擔心已經換成 AI」。週末讓我跟你整理一下、用 b 上週的「managed escalation」當主軸串起來。' },

    { type: 'move', character: 'chef', toTile: 'stove' },
    { type: 'wait', duration: 400 },

    // ── The week's three stress tests ──
    { type: 'dialogue', character: 'chef', text: '三層 stress test——禮拜二、禮拜三、禮拜四對吧？我大概懂順序、但你能不能把「為什麼這個順序很重要」講一下？' },

    { type: 'dialogue', character: 'customer-a', text: '師傅、順序就是訊息「嚴重度」的階梯——一層比一層難用「市場記性」打折。禮拜二「I don\'t care」是 rhetoric、市場最容易折扣的、因為 Trump 一個禮拜講十次。禮拜三「Rubio 講伊朗在 Hormuz 佈雷」是 concrete fact、市場開始要思考是不是真的、就分了四層 discount。禮拜四「飛彈打 Kuwait 機場、美對 Qeshm 反擊」是 kinetic action、最難用「不重要」糊弄、因為這是真的開火了。連續三層、每層比上一層 harder、按理 Polymarket 那條垮台機率應該一路往上跳——結果它從 2.5% 一路走到今晚 2.1%、上限也從 3.1% 收到 2.95%。這不是「沒反應」、是「主動往不會垮的方向走」。' },

    { type: 'dialogue', character: 'chef', text: 'Polymarket 主動往「不會垮」的方向走——這個太厲害了。我用我們街上的事打比方：我們街十年前有家店傳出醜聞、第一週客流不影響、第二週又傳出更嚴重的事、第三週老闆被檢調帶走——按理客流要崩。結果整條街的客流反而漲、因為「該關的那家終於要關了、好客人會分散到我們」。新聞越嚴重、市場越好——這跟你說的「反向走」是不是一樣的邏輯？' },

    { type: 'dialogue', character: 'customer-a', text: '師傅、本質一樣、但角度更精彩。你那個是「壞消息對某一家壞、對整體好」、是 sectoral rotation 的白話版。我們的 Polymarket 是「事件越嚴重、市場越確認對方還在框內」——升級到 unmanaged 的可能性反而被消除。一個是「分散受惠」、一個是「framework 確認」。兩個都是「直覺：壞消息該下跌；實際：上漲」、但機制不同。你幫我把這兩種「反直覺」分清楚、明天可以分兩堂課講給新人。' },

    { type: 'wait', duration: 400 },

    // ── Friday's surprise: AI cycle decoupling from geopolitics ──
    { type: 'dialogue', character: 'chef', text: '那禮拜五——你早上一進門就說「最值得記」、是 Nikkei -1.5% 但不是 Iran、是 AI 那家什麼 Broadcom？' },

    { type: 'dialogue', character: 'customer-a', text: '師傅、就是這個。Broadcom 是賣晶片的美國大公司、禮拜四晚上美股盤後出財報、本身數字 OK、但對下季 AI 訂單的展望讓人擔心——意思是「AI 過去幾個月衝得太快、可能要冷一下」。這條消息禮拜五早上傳到亞洲、Nikkei 裡所有 AI 相關權值股都被砍、Topix 也跟跌。重點是——這條消息跟 Iran 沒半毛錢關係。' },

    { type: 'dialogue', character: 'chef', text: '跟 Iran 沒關係——所以「金融層終於跟地緣 decouple」是這個意思？以前一條 Iran 新聞所有亞洲都跌、現在 Iran 鈍化了、亞洲跌的理由是 AI 自己的事？' },

    { type: 'dialogue', character: 'customer-a', text: '師傅、就是這樣、而且這是「結構轉變」、不是一日的事。過去幾個月我們做 macro 的、Iran 是 default driver——任何亞洲指數的漲跌、第一句話都是「跟 Iran 那條線怎麼動」。從這禮拜開始——伊朗 binary（簽不簽）已經 mostly price in、kinetic 也已經 managed、市場注意力重新分配到其他結構性議題：AI 週期、Fed 路徑、BOJ 升息節奏。地緣從「主旋律」降回「背景樂」。這個轉變、對我們 desk 的工作意義很大——以前讀完一堆 Iran 新聞、現在要重新讀 AI 鏈、要重新讀 Broadcom、Nvidia、Samsung 之間的關係。' },

    { type: 'dialogue', character: 'chef', text: '從主旋律降回背景樂——這個比喻太傳神。我們開店也是、SARS 那年、SARS 是全部、客流口罩消毒每天想；過了三年、它變成「店裡有放洗手液」這種背景。Iran 變成背景樂、是這禮拜的成熟訊號？' },

    { type: 'dialogue', character: 'customer-a', text: '師傅、「SARS 變成背景樂」——這個歷史視角、是我們做這行常常缺的。我們太常用「兩週」看事情、忘了「三年」這個尺度。Iran 戰爭 2/28 開打到現在三個多月、市場已經走完「驚→慌→分析→鈍化→price in→background music」這個典型適應曲線。下一個會走這條曲線的、可能就是現在的 AI 週期——上半年是 driver、年底可能變 background。' },

    { type: 'wait', duration: 400 },

    // ── Oil's back-and-forth & Trump's "next week" tracker ──
    { type: 'dialogue', character: 'chef', text: '油這禮拜呢、我老婆問了一句——「禮拜三才漲到 $95、禮拜五又跌回 $91、油市怎麼這麼神經？」' },

    { type: 'dialogue', character: 'customer-a', text: '師傅、油這禮拜的劇本——禮拜三 Rubio mining 講話、油彈；禮拜四 Kuwait 機場被打、油繼續彈；禮拜五美方暗示 diplomacy 希望升、油直接跌 3% 把禮拜三那一棒吐掉。一週內來回 5%、看起來神經、其實是「市場每天 reprice 戰爭溢價」——concrete event 出來加、diplomatic signal 出來減、一加一減的速度比過去任何時候都快。這就是 b 講的「managed escalation」在油市的具體呈現——油也在學「事件不一定要 binary 反應」。' },

    { type: 'dialogue', character: 'chef', text: 'Trump 又說「progress this weekend」——這個跟我聽了五個禮拜的「下週」是不是同一個？' },

    { type: 'dialogue', character: 'customer-a', text: '師傅、就是同一個。我們桌上那個內部 tracker——「Trump 下週 / this weekend / next week 機率」、從 5/23 的 70% 一路降到 25%。但有趣的是這 25% 不會再降——因為實際上 deal 草案 b 講過 Trump 已經在「edit」了（talk vs walk）、只是 sign 還沒落。所以「沒簽 + 在 edit」這個狀態、市場已經接受是新常態。新聞每週都會有「下週可能成」、然後沒成、然後又「下週可能成」——但底下的執行進度真的在動。' },

    { type: 'wait', duration: 400 },

    // ── Synthesis: the week's lesson ──
    { type: 'dialogue', character: 'chef', text: '這禮拜你學到最大的事、用一句話講、是什麼？' },

    { type: 'dialogue', character: 'customer-a', text: '師傅、用一句話——「stress test 反向證明 framework」。週一週二我自己都還對「八分信二分留」有點懷疑、想說連續壞消息來、是不是要修。結果連續三層升級下來、framework 不只沒崩、Polymarket 還主動往「不會垮」方向走——這比「framework 沒被測試」還強。一個沒被 test 的 thesis 不算 thesis、是 wishful thinking；經過 stress test 還站著的、才是真的可以下重注的東西。' },

    { type: 'dialogue', character: 'chef', text: '經過 stress test 還站著的、才能下重注——這句深、我做飯也是一樣。新菜試吃熟客覺得好、那是初步認可；颱風夜進貨困難還做得出來、那才證明這道菜「可以放 menu」。沒經過 stress 的、隨時可能塌。' },

    { type: 'dialogue', character: 'customer-a', text: '師傅、你「颱風夜還做得出來才能放 menu」是 stress testing 最白話的版本——明天我要寫在 desk 牆上。我們資深的人最後留下來的 conviction、都是經過 2018 貿易戰、2020 疫情、2022 通膨、2025 關稅這些颱風夜還做得出來的。新人最容易的錯就是把「沒被颱風考過的初步認可」當成「可以重押的 thesis」。這個禮拜對我來說、是一份 framework 的 graduation test——它畢業了。' },

    { type: 'wait', duration: 400 },

    // ── Closing — Saturday, A alone ──
    { type: 'move', character: 'chef', toTile: 'counter-center' },
    { type: 'dialogue', character: 'chef', text: '禮拜六晚上、收一週、我做點扎實的：金目鯛煮付、栗子炊飯、紅味噌湯、玉子燒、香物，配溫酒一合。金目鯛今天進得肥、煮汁要濃。太太家裡在等嗎？今晚能坐多久？' },

    { type: 'dialogue', character: 'customer-a', text: '師傅、金目鯛！這個我等了好幾週、又出現了。煮汁濃一點、配栗子炊飯、太好了。太太今晚去同事家、我自由、可以坐到十點。明天禮拜天本來想休息、但 Trump 又喊「progress this weekend」、我十一點就要起床盯新聞、看看「下週」這次有沒有真的成。' },

    { type: 'dialogue', character: 'customer-a', text: '其實這禮拜我心情很複雜——表面上市場相對溫和、framework 經住 stress test、我們 desk 沒太大失誤；但底下我意識到自己已經四個多月沒好好放空週末。b 上週禮拜五講「市場永遠在但時間不可逆」、我聽到了、但實際上要做到很難。明天看完開盤、下午我想試著關手機、陪太太去一趟箱根、住一晚。明天 Trump 簽不簽、油彈不彈、AI 起不起、都跟我那一晚的箱根沒關係。' },

    { type: 'dialogue', character: 'chef', text: '簽不簽彈不彈起不起都跟箱根那一晚沒關係——這句、我老婆會點頭。她以前在公司、退休前一年才學會「下班就是下班」、之前 30 年總機都把家裡電話當分機。她說過「最大的浪費不是錢、是把該屬於家的時間給了不會謝你的工作」。你明天 1 晚的箱根、可能就是把 framework 的概念用在自己生活的第一次——「自我 graduation test」。' },

    { type: 'dialogue', character: 'customer-a', text: '師傅、「自我 graduation test」——你今晚是不是早就想好要等我講「我想休息」、然後給我這句總結？這句我今晚會帶回箱根、寫在筆記上。金目鯛煮汁濃、栗子炊飯收尾、明天 11 點看開盤、下午把手機交給太太、由她保管 24 小時。framework 經住三層 stress test、人也要經住一晚不被打擾的 stress test。' },

    { type: 'dialogue', character: 'chef', text: '金目鯛現燉、煮汁我用昆布柴魚+味淋慢熬、栗子先炊好等湯一上桌就盛、味噌湯紅味噌濃郁、玉子燒今天甜一點配酒。明天 11 點開盤後、手機交給太太、其他不用想。framework 沒崩、你也別崩。今晚這頓、慢慢吃。' },

    { type: 'sfx', sound: 'chimes' },

    { type: 'wait', duration: 500 },
    { type: 'move', character: 'chef', toTile: 'stove' },

    {
      type: 'narration',
      text: '禮拜六晚上 10 點半、東京。這禮拜的故事用一句話收尾——「stress test 反向證明 framework」。三層 escalation 從嘴上→證據→飛彈、每一層比上一層 harder、按理 Polymarket 該往上跳。結果它從 2.5%（Thu）一路走到今晚 2.1%、上限從 3.1% 收到 2.95%——「連續三層升級而賭盤反向往下走」、是 b 講的「managed escalation」框架被市場結構性 price in 的最強證據。經過 stress test 還站著的、才是真的可以下重注的 thesis（師傅:「颱風夜還做得出來才能放 menu」）。禮拜五的驚喜——Nikkei -1.5% 跌到 ~66,400、Topix 也回吐、但跌的不是 Iran 是 Broadcom AI outlook 失望——金融層終於跟地緣 decouple、AI 週期變新 driver、Iran 從主旋律降回背景樂（師傅:「SARS 三年後變成『店裡有放洗手液』這種背景」）。油本週快速來回 ~5%（WTI 從 Thu 高 $95.46 → Fri ~$91、Brent -3% 到 ~$95）——concrete event 加、diplomatic signal 減、一加一減比過去任何時候都快、油市也在學「事件不一定要 binary 反應」。Trump「下週」連說 6 週 / desk tracker 25%——但他在 edit 草案是 walk、所以「沒簽+在 edit」變新常態。A 的「八分信二分留」graduate 了——一個沒被 stress test 過的 thesis 是 wishful thinking、經過考驗的才能下重注。a 自己今晚最重要的感悟不是市場、是自我——「market 永遠在但時間不可逆」、明天 1 晚的箱根、是「framework 概念用在生活的第一次自我 graduation test」、手機交給太太保管 24 小時。對應師傅老婆「下班就是下班、最大的浪費不是錢是把該屬於家的時間給不會謝你的工作」——「framework 沒崩、人也別崩」。金目鯛煮付配栗子炊飯、紅味噌湯、收一週。明天看完開盤、手機交出去、由太太保管 24 小時、其他不用想。下週的事、下週再說。',
      duration: 6000,
    },
  ],
};
