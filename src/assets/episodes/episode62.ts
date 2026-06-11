import type { Episode } from '../../engine/types';

/**
 * Sources verified 2026-06-11 (Thu JST):
 * - THE SIGNAL OF THE DAY — evacuation orders, on deadline eve:
 *   1) The US State Department ordered the departure of non-emergency
 *      US government personnel from Mission Iraq, citing heightened
 *      regional tensions (official travel advisory, 6/11).
 *   2) US Embassy Jordan issued a security alert: missiles, drones or
 *      rockets detected in Jordanian airspace (official alert, 6/11).
 *   3) Wider reporting: US embassies in Arab states preparing to
 *      evacuate after warnings from Iran about strikes on US bases.
 *   (iq.usembassy.gov 6/11, jo.usembassy.gov 6/11, Newsweek)
 * - Context: TOMORROW (Fri 6/12) is the expiry of Trump's falsifiable
 *   "two or three days" deal promise (ep61). Embassy evacuation on
 *   deadline eve reads two ways — genuine strike prep if talks fail,
 *   or maximum credible-threat theatre to force Khamenei's signature
 *   before Friday. The episode's core concept: cost-to-fake. An
 *   evacuation is visible, reversible, and cheap relative to war —
 *   which is exactly why it is chosen BOTH for bluffing and for real
 *   prep. The signal is indistinguishable BY DESIGN; what carries
 *   information is the price of insurance.
 * - POLYMARKET regime-fall: 2.1% headline (0.021), last intraday reads
 *   2.25%; recent lows printed 1.35% (fresh ATL territory). Range
 *   1.25-2.75%, vol ~$51.8M. THE STORY: this is the FIRST escalation
 *   signal in six weeks that actually MOVED the bet — every previous
 *   escalation (mining, Kuwait airport, Israeli strikes on Iran proper)
 *   left it flat or falling; the evacuation lifted it from ~1.35% to
 *   ~2.2%, the biggest jump in weeks. But +0.9pp, not +9pp: the market
 *   finally reacted, and the SIZE of the reaction says it still leans
 *   "closing pressure", not war. (public/polymarket/latest.json,
 *   collectedAt 2026-06-11T01:22:33Z)
 * - Equity/oil: no clean dated 6/11 Asia closes at episode time (search
 *   kept resurfacing 6/4 prints — Nikkei 67,470 / Kospi 8,639 are JUNE 4
 *   numbers, do NOT reuse). Equities carried grey; oil referenced
 *   qualitatively (desks expect war-premium re-bid on evacuation
 *   headlines) without asserting a print.
 * - Continuity & CAST: ep59 A+B (joint), ep60 A solo, ep61 B solo.
 *   Tonight BOTH come — deadline eve is a big-news night — but per the
 *   personas CONTINUITY DEBT note they are written as INDEPENDENT
 *   regulars again: B talks 「我們 desk」, A talks 「我們桌上」, no
 *   joint review / shared white paper references. B's batch 2 stays
 *   FOMC-gated (6/16-17, next week) — tonight's gift is that the plan
 *   requires NO decision today. A keeps framework vocabulary (七分半
 *   信二分半留), no over/under betting. Chef's wife callback: she saw
 *   the 撤僑 news and is genuinely scared ("要打仗了嗎") — the most
 *   serious her reactions have been; chef cooks something warm.
 */
export const EPISODE_62: Episode = {
  id: 'ep-62',
  date: '2026-06-11',
  title: '20260611 禮拜四晚上、deadline 前夕的撤僑訊號——美國務院下令伊拉克使館非必要人員撤離、約旦領空飛彈警報、就在 Trump「兩三天」明天到期的前一晚；六週以來第一次、Polymarket 真的動了（1.35%→2.2%、幾週最大跳）、但 +0.9pp 不是 +9pp——「市場終於有反應、反應的大小告訴你它還押和平」；cost-to-fake：撤僑被選來施壓、正因為它跟真開戰前置一模一樣',
  description: '禮拜四晚上、Tokyo 21:00。明天就是 Trump「two or three days」的到期日、而今天來的不是簽字的消息——是撤僑。美國務院正式下令伊拉克使館非必要人員撤離；約旦使館發布安全警報、領空偵測到飛彈或無人機；多家美國駐阿拉伯國家使館傳出撤離準備、起因是伊朗威脅打擊美軍基地。撤僑、是歷史上最經典的「開戰前置」訊號。但它也是談判桌上最強的「可信威脅」道具——看得見、可逆、相對便宜、跟真的開戰準備一模一樣。分不出來、是設計好的。能讀的只有保險的價格——Polymarket「伊朗政權 6/30 前垮台」六週以來第一次真的動了：從 1.35% 的 ATL 區一口氣跳到 2.2%、幾週最大單日跳幅。之前每一層升級（佈雷、Kuwait 機場、Israel 打伊朗本土）它都不動或反向下行、這次它動了——但 +0.9pp、不是 +9pp。市場終於把這個訊號當回事、而反應的大小告訴你：它還是押「closing pressure」、不是戰爭。今晚 a 跟 b 都來——deadline 前夕、店裡難得兩位都坐在吧台。',
  actions: [
    { type: 'bgm', track: 'chill-lofi', command: 'play' },

    {
      type: 'narration',
      text: '禮拜四晚上 9 點、東京。明天就是 Trump「two or three days」的到期日、而今天來的不是簽字的消息——是撤僑。美國務院正式下令伊拉克使館非必要人員撤離；約旦使館發布安全警報、領空偵測到飛彈或無人機；多家美國駐阿拉伯國家使館傳出撤離準備、起因是伊朗威脅打擊美軍基地。撤僑、是歷史上最經典的「開戰前置」訊號——真要動手之前、先把自己人撤走。但它同時也是談判桌上最強的「可信威脅」道具——看得見、可逆、相對便宜、而且跟真的開戰準備長得一模一樣。分不出來、是設計好的。所以今天能讀的、只剩保險的價格。Polymarket「伊朗政權 6 月底前垮台」、六週以來第一次真的動了——從 1.35% 的歷史低點區、一口氣跳到 2.2%、幾週以來最大的單日跳幅。記住對照組：之前每一層升級、佈雷、Kuwait 機場被打、Israel 打伊朗本土、它全都不動、甚至反向下行；這次它動了。但動的幅度是 +0.9 個百分點、不是 +9 個百分點。市場終於把一個訊號當回事了、而反應的大小告訴你——它還是押「closing pressure」、不是戰爭。Asia 收盤的乾淨數字今晚還沒到位、不裝懂；油市 desk 之間的共識是戰爭溢價會被買回來一些、但多少、明天看。今晚 a 跟 b 都來——deadline 前夕、店裡難得兩位都坐在吧台。',
      duration: 6000,
    },

    {
      type: 'market-data',
      data: {
        tickers: [
          { symbol: 'Polymarket 政權垮台（6/11、六週首動）', price: 2.1, change: 0.9 },
          { symbol: 'Nikkei 225（6/11 收未及、carry）', price: 0, change: 0.0 },
          { symbol: 'Kospi（6/11 收未及、carry）', price: 0, change: 0.0 },
          { symbol: 'Brent 油（溢價回買中、print 未及）', price: 0, change: 0.0 },
          { symbol: 'USD/JPY（carryover ~159）', price: 159.0, change: 0.0 },
        ],
        volatility: 26,
        vix: 21.0,
        rsi: 40.0,
        beta: 1.07,
        priceHistory: [2.45, 2.25, 1.85, 1.85, 1.75, 1.35, 1.75, 2.25],
        volumeHistory: [820, 860, 900, 950, 1000, 1050, 1150, 1300],
        sectors: [
          { label: 'Polymarket +0.9pp（1.35%→2.2%、六週以來第一次對升級訊號有反應、幾週最大跳）', value: 90, color: '#cc4422' },
          { label: '撤僑訊號（State Dept 下令 Iraq 使館非必要人員撤離、官方 travel advisory）', value: 0, color: '#888888' },
          { label: '約旦領空警報（US Embassy Jordan：missiles/drones/rockets in airspace）', value: 0, color: '#888888' },
          { label: '明天 Trump「two or three days」到期（ep61 的可證偽承諾、簽 or 跳票 or 開打）', value: 0, color: '#888888' },
          { label: 'Asia/油（6/11 乾淨 close 未及、carry、油市共識戰爭溢價會回買一些）', value: 0, color: '#888888' },
        ],
        headline: '禮拜四 21:00 JST、deadline 前夕：美國務院下令 Iraq 使館非必要人員撤離 + 約旦領空飛彈警報 / 明天 Trump「兩三天」到期 / Polymarket 六週首動 1.35%→2.2% 幾週最大跳但 +0.9pp 不是 +9pp（市場終於有反應、反應大小說它還押 closing pressure）/ cost-to-fake：撤僑跟真開戰前置一模一樣、是設計好的',
      },
    },

    {
      type: 'polymarket-odds',
      data: {
        asOf: '2026-06-11T01:22:33Z',
        highlightSlug: 'will-the-iranian-regime-fall-by-june-30',
        markets: [
          {
            slug: 'will-the-iranian-regime-fall-by-june-30',
            question: 'Will the Iranian regime fall by June 30?',
            yesProbability: 0.021,
            volume: 51773119,
            liquidity: 451140,
            endDate: '2026-06-30T00:00:00Z',
            history: [
              { t: 1780538404, p: 0.0245 }, { t: 1780570805, p: 0.0225 }, { t: 1780603205, p: 0.0245 },
              { t: 1780635605, p: 0.0225 }, { t: 1780668006, p: 0.0235 }, { t: 1780700405, p: 0.0185 },
              { t: 1780732804, p: 0.0215 }, { t: 1780765230, p: 0.0195 }, { t: 1780797618, p: 0.0185 },
              { t: 1780830005, p: 0.0185 }, { t: 1780862408, p: 0.0235 }, { t: 1780894804, p: 0.0275 },
              { t: 1780927205, p: 0.0165 }, { t: 1780959605, p: 0.0175 }, { t: 1780992005, p: 0.0135 },
              { t: 1781024419, p: 0.0175 }, { t: 1781056805, p: 0.0155 }, { t: 1781089205, p: 0.0135 },
              { t: 1781121606, p: 0.0175 }, { t: 1781140865, p: 0.0225 },
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

    // ── A and B arrive close together — deadline eve ──
    { type: 'enter', character: 'customer-a', toTile: 'entrance' },
    { type: 'move', character: 'customer-a', toTile: 'random-stool' },
    { type: 'sit', character: 'customer-a' },
    { type: 'enter', character: 'customer-b', toTile: 'entrance' },
    { type: 'move', character: 'customer-b', toTile: 'random-stool' },
    { type: 'sit', character: 'customer-b' },

    { type: 'move', character: 'chef', toTile: 'counter-center' },
    { type: 'dialogue', character: 'chef', text: 'いらっしゃい——兩位前後腳、我猜到今晚你們都會來。先說、我老婆今天嚇到了。她看到「美國下令使館撤人」、第一次沒有問我問題、就只說了一句「要打仗了嗎」。追了三個月新聞、她什麼大風大浪標題都看過、今天是她第一次真的怕。我跟她說「我問了再回來告訴妳」——所以今晚兩位得給我一個帶得回家的答案。' },

    { type: 'move', character: 'chef', toTile: 'stove' },
    { type: 'wait', duration: 400 },

    { type: 'dialogue', character: 'customer-a', text: '師傅、你老婆這次的怕、是對的怕——我先把嚴肅的部分講完、再講另一半。撤僑、在所有地緣訊號裡、是歷史可信度最高的一種。嘴上嗆聲不用成本、佈雷可以否認、空襲可以說是回應——但把自己外交人員撤走、是「我認為這裡接下來可能不安全」的官方行為。歷史上、大規模軍事行動之前、幾乎都看得到這個動作。所以你老婆的直覺沒有錯：這是三個月以來、最該認真對待的一個訊號。' },

    { type: 'dialogue', character: 'customer-b', text: '我接 a 的「另一半」——師傅、但這個訊號有一個很麻煩的特性、我們 desk 今天討論了一整天：它是「故意做給你看的」也說得通。明天就是 Trump「兩三天」的到期日。如果你是 Trump、你想在最後 24 小時逼 Khamenei 簽字、你會做什麼？你會讓威脅變得可信——而讓威脅可信的唯一方法、就是做出跟「真的要打」一模一樣的動作。撤僑剛好是完美道具：看得見、上新聞、嚇得到對方——但它可逆、人員下禮拜可以飛回去、成本比真的開戰低一萬倍。' },

    { type: 'dialogue', character: 'chef', text: '等等——你們兩個的意思是、同一個動作、可以是「真的要打」、也可以是「演給對方看」、而且故意讓人分不出來？那我們外面的人到底要怎麼判斷？我老婆在家等一個答案、我不能回去跟她說「分不出來」。' },

    { type: 'dialogue', character: 'customer-a', text: '師傅、你這個問題、就是今天整個市場在問的問題。我給你一個我們桌上用的框架、叫 cost-to-fake——「造假的成本」。訊號的可信度、看做這個動作要付出多少、而不是看它多大聲。嘴上嗆聲、cost-to-fake 是零、所以六週來市場全部當噪音。真的開戰、cost-to-fake 是無限大、做了就回不了頭。撤僑麻煩就麻煩在、它卡在中間——成本夠高、所以嚇得到人；又夠低、所以捨得拿來虛張聲勢。它被選來做這件事、正因為它兩邊都像。' },

    { type: 'dialogue', character: 'chef', text: 'Cost-to-fake——造假的成本。這個我馬上有畫面。我們街上颱風要來之前、誰的動作可信？隔壁咖啡店把椅子收進去、不算什麼、五分鐘的事、可能只是老闆娘緊張。但瓦斯行把整排瓦斯桶搬上車載走——那個我就跟著關店了。因為搬瓦斯桶是一整天的工、沒人會為了演戲搬瓦斯桶。你們的撤僑、是收椅子還是搬瓦斯桶？' },

    { type: 'dialogue', character: 'customer-b', text: '師傅、「收椅子還是搬瓦斯桶」——這個問題我要帶回 desk 當明天晨會的標題。誠實的答案：撤僑介於兩者之間、比收椅子重、比搬瓦斯桶輕。所以單看這個動作、讀不出答案——能讀的是「保險的價格」。你看牆上那個 Polymarket——這是今天真正值得記的事：六個禮拜以來、佈雷、Kuwait 機場被打、Israel 打伊朗本土、每一層升級它都紋風不動、甚至反向走低。今天、它第一次動了——從 1.35% 的歷史低點、跳到 2.2%、幾週以來最大的單日跳幅。' },

    { type: 'wait', duration: 400 },

    // ── The size of the reaction is the message ──
    { type: 'dialogue', character: 'chef', text: '第一次動了——所以連拿真錢的人、這次也不敢完全不當回事。但 2.2%……聽起來還是很小？我該注意的是「它動了」、還是「它還是很小」？' },

    { type: 'dialogue', character: 'customer-a', text: '師傅、兩個都要、而且順序重要。「它動了」告訴你——這個訊號跟之前六週所有的噪音、不是同一類；聰明錢也認為撤僑值得付一點保險費。「它還是很小」告訴你——付的是一點保險費、不是搬家費。+0.9 個百分點、不是 +9 個百分點。如果市場真的認為明天要開戰、這個數字會是 10%、15%、而且油會暴衝、亞洲會跌停、今天都沒有發生。所以完整的讀法是：「市場終於有反應了、而反應的大小告訴你、它還是押 closing pressure——簽字前的最後施壓——而不是戰爭。」' },

    { type: 'dialogue', character: 'customer-b', text: '我補一個 desk 視角——今天我們的客戶電話、跟 Monday melt-down 那天完全不同。那天是 80 通恐慌電話；今天只有 20 幾通、而且問的都是同一句：「撤僑是不是要打了？」我每一通的回答都一樣：你看保險的價格、不要看新聞的字體大小。新聞字體是編輯決定的、保險價格是幾萬個拿真錢的人投票出來的。今天字體最大、但保險只貴了一點點。' },

    { type: 'dialogue', character: 'chef', text: '新聞字體是編輯決定的、保險價格是真錢投票的——這句我可以直接帶回家給我老婆。但我還想替她問一句：萬一呢？萬一這次是真的、那個 2.2% 錯了呢？市場又不是沒錯過。' },

    { type: 'dialogue', character: 'customer-a', text: '師傅、這是今晚最重要的一個問題、我不會閃。市場會錯、2.2% 的意思從來不是「不會發生」、是「一百次裡大概兩次」。而撤僑這種訊號的特殊之處在於——它就是那個「兩次」最常見的開場。所以正確的姿態不是「相信 2.2% 所以安心睡覺」、也不是「不信 2.2% 所以全部賣光」——是「照著 2.2% 的世界配置、但確保那 2% 發生時你活得下去」。我自己的 framework 還是七分半信、二分半留——今晚那二分半、就是為這種夜晚留的。' },

    { type: 'dialogue', character: 'customer-b', text: '我的版本更具體——我上禮拜買的那批便宜保險、今天漲價了、但我一張都沒賣；我的第二批 reentry、本來就掛在下禮拜 FOMC 之後、今天什麼都不用動。師傅、這就是計畫在這種夜晚最大的禮物：今天我整天「不需要做任何決定」。所有該想的、上禮拜冷靜的時候都想完了；今天只要照著走。最危險的不是壞消息、是被壞消息逼著在害怕的時候現場做決定。' },

    { type: 'dialogue', character: 'chef', text: '在冷靜的時候把決定做完、害怕的時候只要照著走——這個我們開店的也一樣。防颱準備是平常就寫好貼在牆上的：警報一響、照清單做、不用想。真正出事的店、都是颱風來了才開始討論要不要釘木板。原來你們的「計畫」、就是我牆上那張防颱清單。' },

    { type: 'wait', duration: 400 },

    // ── Tomorrow: the deadline itself ──
    { type: 'dialogue', character: 'chef', text: '那明天呢？「兩三天」到期。會發生什麼？' },

    { type: 'dialogue', character: 'customer-a', text: '師傅、三個劇本。一、簽了——撤僑立刻被重新解讀成「最後一擰、成功了」、油跳水、亞洲慶祝、教科書收場。二、跳票但繼續談——Trump 的可證偽承諾第一次正式破產、他付信用成本、市場小失望、但因為「沒簽」這三個月發生過太多次、跌不深。三、談崩、而且撤僑是真的——那就是那個 2%。我們桌上的分配大概是四成、五成、一成。注意第二個劇本機率最高——歷史上 deadline 最常見的結局不是兌現也不是爆炸、是「延長」。' },

    { type: 'dialogue', character: 'customer-b', text: '我 desk 的數字跟 a 的桌上差不多、順序一樣。但我想補一個明天看盤的小細節給師傅——明天如果是劇本一（簽了）、第一個動的不會是股票、是油、往下、而且是分鐘級的；如果是劇本三、第一個動的也是油、往上、跳的。油是這場戲的心電圖。明天你開店前看一眼油價、比看任何頭條都準。' },

    { type: 'dialogue', character: 'chef', text: '油是心電圖、開店前看一眼——好、這個我做得到。我老婆的答案我也有了：撤僑是三個月來最該認真的訊號、但拿真錢的人投票說「一百次裡兩次」、而且兩位都已經把那兩次的準備做完了。剩下的、明天自己會揭曉。' },

    { type: 'wait', duration: 400 },

    // ── Closing — warm food for a tense night ──
    { type: 'move', character: 'chef', toTile: 'counter-center' },
    { type: 'dialogue', character: 'chef', text: '今晚這種夜、我不問你們要吃什麼了——我直接做。味噌煮鯖魚、熱騰騰的白飯、豚汁加倍料、漬物、最後一人一顆梅干。緊張的夜晚要吃熱的、有味噌的、吃完胃是定的。配溫酒、兩位都半合就好——明天都要早起看心電圖。' },

    { type: 'dialogue', character: 'customer-a', text: '師傅、全聽你的。其實今晚出門前、我太太問我「今天還去食堂？」、我說「這種晚上才更要去」。她想了一下、點頭說「也對、回來把師傅說的講給我聽」。現在兩家的太太都在等同一份報告了。' },

    { type: 'dialogue', character: 'customer-b', text: '我先生也是——他今晚帶小孩早早睡了、跟我說「妳去吧、回來小聲一點就好」。師傅、說真的、這種夜晚有個地方可以坐著把事情講清楚、比任何保險都值錢。我爸做了三十年金融、他那個年代沒有這種地方、所有的緊張都只能帶回家——我媽說他大行情的晚上整夜翻身。我比他幸運。' },

    { type: 'dialogue', character: 'chef', text: '把緊張留在這裡、別帶回家——那這碗豚汁就是收緊張的。我老婆以前在公司也一樣、大事的日子、她跟同事會在公司樓下吃完一碗熱的才各自回家、她說「進家門前要把那口氣吐掉」。你們今晚在我這裡吐掉、明天那口氣重新吸——不管明天是簽字、跳票、還是那個 2%。鯖魚好了、飯大碗、豚汁燙、慢慢吃。' },

    { type: 'sfx', sound: 'chimes' },

    { type: 'wait', duration: 500 },
    { type: 'move', character: 'chef', toTile: 'stove' },

    {
      type: 'narration',
      text: '禮拜四晚上 10 點半、東京。今天的故事是「deadline 前夕的撤僑訊號、與六週以來第一次動的賭盤」。美國務院下令 Iraq 使館非必要人員撤離、約旦領空飛彈警報、多家駐阿拉伯使館準備撤離——就在 Trump「two or three days」明天到期的前一晚。撤僑是歷史可信度最高的開戰前置訊號（a：「嘴上嗆聲零成本、撤僑是官方行為」）、但它同時是 closing pressure 的完美道具——看得見、可逆、相對便宜、跟真開戰前置一模一樣、「分不出來是設計好的」。判讀框架：cost-to-fake、造假的成本（師傅:「咖啡店收椅子 vs 瓦斯行搬瓦斯桶——沒人會為了演戲搬瓦斯桶」）——撤僑卡在中間、所以單看動作讀不出答案、能讀的只有保險的價格。Polymarket 六週首動：1.35% ATL 區→2.2%、幾週最大跳——之前佈雷、Kuwait 機場、Israel 打伊朗本土全都不動、這次動了、訊號跟噪音不同類；但 +0.9pp 不是 +9pp、「市場終於有反應、反應的大小告訴你它還押 closing pressure」（B:「新聞字體是編輯決定的、保險價格是真錢投票的」）。誠實的尾部：2.2% 是「一百次裡兩次」、撤僑正是那兩次最常見的開場——正確姿態是「照 2.2% 的世界配置、但確保那 2% 發生時活得下去」；A 的七分半信二分半留、「那二分半就是為這種夜晚留的」；B 的保險漲價了一張沒賣、第二批 reentry 本來就掛在 FOMC 後、「今天最大的禮物是不需要做任何決定」（師傅:「防颱清單平常寫好、警報一響照做、出事的店都是颱風來了才討論釘木板」）。明天三劇本：簽（四成）、跳票續談（五成、deadline 最常見的結局是延長）、真打（一成）——「油是這場戲的心電圖、開店前看一眼、比任何頭條準」。chef 老婆三個月來第一次真的怕、兩位的答案帶回家：最該認真的訊號、但真錢投票說一百次裡兩次、而那兩次的準備都做完了。味噌煮鯖魚、豚汁加倍料、一人一顆梅干——「進家門前把那口氣吐掉」。明天、簽字、跳票、或那個 2%、自己會揭曉。',
      duration: 6000,
    },
  ],
};
