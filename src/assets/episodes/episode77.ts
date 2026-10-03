import type { Episode } from '../../engine/types';

/**
 * Sources verified 2026-07-31 (Fri, ~12:10 JST) — 「你能用錢、把價格頂住多久」：
 * the suspected yen-intervention episode. A deliberate TOPIC PIVOT off the
 * 7-episode AI/Fed thread (ep70-76) onto the yen — which is the chef's own
 * cost base, the show's canonical everyman mirror (食堂進貨成本).
 *
 * DATE: verified before writing. Box clock 7/31 11:09 CST = 12:09 JST —
 * Tokyo in lunch break, the 7/31 CLOSE has NOT printed; so no fabricated
 * 7/31 close. Anchors: the dated overnight FX move (late 7/30), today's BOJ
 * decision (7/31), and the month's tape. Sequence: ep76=7/30, ep77=7/31.
 *
 * — THE STAR — SUSPECTED YEN INTERVENTION (late 7/30): the yen ROCKETED
 *   from an opening rate above ¥163 to an intraday low of ¥157.80, then
 *   stabilised ~¥158.61 — roughly 400 pips / a ~3% single-session USD/JPY
 *   drop, "the dollar's biggest drop since 2022." Signature of official
 *   action: the move hit ALL major yen pairs simultaneously, with no
 *   economic catalyst big enough to explain it; named FX desks (BBVA, TJM,
 *   SBI FX Trade) attributed it to the MOF; Citi estimated ~$8.1B of
 *   dollar/yen selling. JAPAN'S MINISTRY OF FINANCE HAS NOT CONFIRMED —
 *   standard practice (no comment on FX; official intervention data is
 *   released weeks later). Context: the yen had hit ¥163.95 on 7/24, its
 *   weakest in 39 years 7 months. Timing: struck right after the Fed's
 *   9-3 "three-way split" left the dollar a touch soft. (Nikkei Asia 7/30,
 *   Bloomberg 7/30, TechTimes 7/30, Reuters/Yahoo "Instant View" 7/30)
 *
 * — BOJ (decided today 7/31): HELD the policy rate at ~1.0% (as expected),
 *   assessing the effects of last month's hike (BOJ hiked to 1% in June —
 *   highest since 1995); upgraded the FY2026 GDP forecast to 0.8%; flagged
 *   that global AI-infrastructure investment is filling the order books of
 *   Japan's semiconductor / precision-manufacturing sectors. KEY TENSION:
 *   the BOJ holding means the US-Japan rate gap (Fed 3.50-3.75% vs BOJ
 *   ~1.0% = ~2.5-2.75%) — the fundamental reason the yen is weak — did NOT
 *   close. So one hand (MOF) spends dollars to prop the yen up while the
 *   other (BOJ) leaves the cause of weakness in place. (News On Japan 7/31,
 *   TechTimes 7/27, CNBC 6/16, Nikkei Asia)
 *
 * — THE MONTH: it is month-end Friday. July was brutal — the Nikkei fell
 *   ~-10.97% on the month (still +~53% YoY). Recent closes: 7/28 62,364.92
 *   (-3.9%), 7/29 61,434.19 (-1.49%), 7/30 61,683.96 (+0.4%, the figure
 *   ep76 committed; one source shows a larger +2.13%/62,745 print that is
 *   likely the futures/CFD, not the cash index — I keep the cash-index
 *   61,683.96 for continuity and flag it here). A stronger yen is a
 *   HEADWIND for the export-heavy Nikkei even as it RELIEVES importers and
 *   households. (Trading Economics 7/30, News On Japan 7/30)
 *
 * — THE SPINE (fresh, macro-but-domestic): can you fight the market with
 *   money? Intervention MOVES the price now, but the REASON the yen is weak
 *   — money earns ~2.5-2.75% more in dollars than yen (the carry trade) —
 *   is untouched, and the BOJ just declined to touch it. So intervention
 *   buys TIME, not a fix: it works only if the time is used to close the
 *   gap, and fails if it becomes bailing a boat that still has a hole.
 *   And why MOF stays silent: uncertainty is the weapon — a market that
 *   doesn't know when/how much they'll strike stays afraid, and the THREAT
 *   does work the reserves can't.
 *   THE EVERYMAN PAYOFF: the stronger yen just made the chef's imports
 *   (oil, flour, coffee) ~4% cheaper overnight — real relief after weeks of
 *   him eating the weak-yen pain (ep73's 「他們慶祝的、正好是壓我的東西」,
 *   now briefly reversed). THE TRAP: it may snap back, so he must NOT
 *   rebuild his cost plan / stockpile on a move that might not hold. And —
 *   the fresh dynamic — the CHEF INTUITS the intervention's limit from 30
 *   years of shopkeeping BEFORE B explains it: a one-off splash (a hired
 *   band out front, a one-day promo) lifts things for a day, then you're
 *   back to whether the food is actually good and the costs actually work.
 *
 * — sectors[].value = |%change|x100 of that row's indicator asset. Only two
 *   rows carry a real % (USD/JPY's ~3% overnight drop; the Nikkei's -10.97%
 *   MONTH, labelled as a month-end window — a deliberate, labelled
 *   extension of the daily rule for the month-end frame, not a fabricated
 *   weight). The rest are grey value:0 level/EVENT rows (ep68 convention):
 *   the 7/24 39-yr-low level, the BOJ hold, and the rate-gap spread — these
 *   are levels/events, not daily %moves, and must not be scaled. FX/rate
 *   LEVELS live in tickers.
 * — priceHistory is USD/JPY this episode (the yen is the story): the climb
 *   to the 7/24 high ~163.95 then the intervention plunge to 157.80 — the
 *   drop at the tail IS the intervention. (Chart series switches from the
 *   Nikkei to USD/JPY for this one; noted so future eps can switch back.)
 *   volumeHistory spikes on the final bar (the ~$8.1B strike). vix/rsi are
 *   mood, not sourced prints.
 *
 * — CAST: A=6 (ep67,68,70,72,73,75), B=6... wait — after ep76 (A solo)
 *   A=7, B=6. Tonight CUSTOMER B SOLO (→7:7). Earned: FX, intervention, the
 *   carry trade, why the MOF stays silent, the $8.1B / all-pairs-at-once
 *   tell — all sell-side desk turf (她看波動、看訊息流, ep15/16/18); her
 *   last solo was ep74 (every-third cadence: ep71/74/77). But the episode
 *   is CHEF-FORWARD by design — his invoices ARE the data, and he
 *   co-teaches (per the standing guidance to use the chef's shop economics
 *   as the mirror). B references A only as a fellow regular. Personas: B
 *   female, 我先生 + kids, 我的 desk, 15-yr client, retired finance-lifer
 *   dad; NOT same desk as A (CONTINUITY DEBT). CHEF: layman — 干預/carry
 *   trade/外匯存底/利差 all get plain-word translation; 老闆 not employee;
 *   我老婆; 師父. His wife's entry: she noticed a couple of imported goods
 *   got cheaper this week ("是不是你算錯了").
 * — Menu: the eased yen lets the chef bring back ONE small imported touch
 *   he'd cut at ¥163 — a quiet human beat; otherwise seasonal (鰹のたたき,
 *   つくね, 冷やし茶碗蒸し, モロヘイヤ, 冷酒). Distinct from ep70-76. No
 *   Polymarket. Month-end Friday closing a -11% July.
 */
export const EPISODE_77: Episode = {
  id: 'ep-77',
  date: '2026-07-31',
  title: '20260731 禮拜五晚上、月底收官、換日圓當主角——昨晚日圓一夜從 163 暴衝到 157.80（約 3%、2022 年來美元最大單日跌、$81 億拋壓、疑似政府干預、但財務省照例不承認），今天日本央行維持 1.0% 沒動；師傅這禮拜進貨居然便宜了一點——因為日圓一強、他的油、麵粉、咖啡就變便宜。但核心問題是：你能用錢、把價格頂住多久？利差還在（美 3.5% vs 日 1%）、根本原因沒解、干預只是買時間不是解決。師傅三十年開店早就懂：一次砸錢撐場面、熱鬧只有一天。B 一個人來、講干預、carry trade、和為什麼政府不承認',
  description: '禮拜五晚上、東京、七月最後一天。這個月很慘——日經整個七月跌了快 11%。但今晚換一個主角：日圓。昨天深夜、日圓突然一口氣從一美元換 163 塊、暴衝到 157.80、幾個小時內動了大約 3%、是 2022 年以來美元對日圓最大的單日跌幅、估計有八十一億美金的拋壓。市場幾乎都認定：是日本政府自己跳進去干預了——用它存的美金去買回日圓、把日圓撐起來。但財務省照慣例、不承認也不否認。今天早上、日本央行開完會、利率維持在 1.0%、沒動。師傅這禮拜有個小發現——他進貨的時候、油、麵粉、咖啡、居然便宜了一點點、他老婆還問他是不是算錯了。B 跟他說：那就是日圓變強的功勞、你這幾個禮拜被日圓弱壓得喘不過氣、昨晚政府幫你出了一口氣。但今晚真正的問題是——你能用錢、把一個價格頂住多久？日圓為什麼一直弱？因為美國那邊錢放著一年賺三塊多、日本只賺一塊、差這麼多、錢當然一直往美金跑。這個「根」、今天央行沒動、就等於沒解。所以干預頂多是買時間、不是解決。而這個道理、師傅開店三十年、早就用身體懂了：他請過樂團在門口表演、那天人爆滿、他還以為要紅了、結果隔天跟平常一模一樣——熱鬧是他花錢買來的、不是客人自己要來的。一次砸錢撐場面、撐得住一天、撐不住一個月。',
  actions: [
    { type: 'bgm', track: 'chill-lofi', command: 'play' },

    {
      type: 'narration',
      text: '禮拜五晚上、東京、七月的最後一天。這個月、對做股票的人來說很慘——日經整個七月、跌了將近 11%。但今晚、換一個主角上場：日圓。昨天深夜、日圓突然一口氣變強——本來一塊美金要換 163 塊日圓、幾個小時內、暴衝到 157.80、動了大約 3%、是 2022 年以來、美元對日圓最大的一次單日下跌；市場估計、大概有八十一億美金的拋壓。幾乎所有人都認定：是日本政府自己下場干預了——拿它存的美金、去把日圓買回來、硬把日圓撐起來。可是財務省、照它一貫的做法、不承認、也不否認。今天早上、日本央行開完會、利率維持在 1.0%、按兵不動。而在小巷子這頭、師傅這禮拜進貨的時候、發現油、麵粉、咖啡、居然都便宜了一點點。今晚 b 一個人來——這一次、要從師傅的進貨單、講到昨晚那八十一億美金。',
      duration: 6000,
    },

    {
      type: 'market-data',
      data: {
        tickers: [
          { symbol: 'USD/JPY（疑似干預：一夜 163→157.80、收 ~158.61、約 -3%）', price: 158.61, change: -3.0 },
          { symbol: '日圓 7/24 曾探 163.95（39 年 7 個月最弱——干預前的起點）', price: 163.95, change: 0.0 },
          { symbol: '日本央行政策利率（7/31 維持 1.0%、GDP 上修至 0.8%）', price: 1.0, change: 0.0 },
          { symbol: '美日利差 約 2.5-2.75%（Fed 3.5-3.75% vs BOJ 1.0%——日圓弱的根）', price: 2.6, change: 0.0 },
          { symbol: '日經 225（7/30 收 61,683.96；7 月單月約 -11% 慘澹收官）', price: 61683.96, change: 0.4 },
        ],
        volatility: 24,
        vix: 19.0,
        rsi: 45.0,
        beta: 1.0,
        priceHistory: [161.5, 162.2, 162.8, 163.4, 163.95, 163.1, 162.4, 157.8],
        volumeHistory: [900, 1000, 1100, 1200, 1300, 1200, 1400, 3600],
        sectors: [
          { label: '日經 225 七月單月 -10.97%（慘澹收官、AI／晶片殺盤是主因；月線窗、非單日）', value: 1097, color: '#dd3333' },
          { label: 'USD/JPY 7/30 夜間約 -3%（疑似官方干預、一夜 163→157.80 收 ~158.61、$81 億拋壓、2022 年來美元最大單日跌、同時打全部日圓對）', value: 300, color: '#22cc55' },
          { label: '日圓 7/24 探 163.95（39 年 7 個月最弱——這是干預想壓回去的起點）', value: 0, color: '#888888' },
          { label: '日本央行 7/31 維持 1.0%（GDP 上修 0.8%、旗下點名 AI 拉動日本晶片／精密訂單）——但沒縮小利差、等於沒解日圓弱的根', value: 0, color: '#888888' },
          { label: '美日利差 約 2.5-2.75%（錢放美金一年多賺兩塊多——carry trade 的引擎、干預改不了這個）', value: 0, color: '#888888' },
        ],
        headline: '禮拜五 21:00 JST：月底收官、日圓當主角——昨晚 USD/JPY 一夜 163→157.80（約 -3%、$81 億拋壓、2022 年來美元最大單日跌、同時打全部日圓對）疑似官方干預、財務省照例不承認；今日 BOJ 維持 1.0%（GDP 上修 0.8%）沒縮利差 / 核心：干預能移動價格、卻沒動日圓弱的根（美日利差 2.5-2.75%、carry trade）——買時間、非解決 / 師傅這週進貨油麵粉咖啡變便宜（日圓一強的實惠）但可能彈回、別照這個價囤貨 / 日經 7 月單月約 -11% 慘澹收官',
      },
    },

    { type: 'enter', character: 'chef', toTile: 'stove' },
    { type: 'wait', duration: 500 },
    { type: 'move', character: 'chef', toTile: 'prep-area' },
    { type: 'wait', duration: 500 },
    { type: 'move', character: 'chef', toTile: 'stove' },
    { type: 'wait', duration: 400 },

    { type: 'enter', character: 'customer-b', toTile: 'entrance' },
    { type: 'move', character: 'chef', toTile: 'counter-center' },
    { type: 'dialogue', character: 'chef', text: 'いらっしゃい、b。月底了、辛苦一個月。先冰的。跟妳說一件今天讓我有點開心、又有點狐疑的事——我這禮拜進貨、油、麵粉、還有那個進口的咖啡豆、居然都便宜了一點點。我老婆看帳單、還問我是不是算錯了、或是被人家少寫了。這幾個月一直在漲、怎麼突然便宜了？是我運氣好、還是發生了什麼我不知道的事？' },

    { type: 'move', character: 'customer-b', toTile: 'random-stool' },
    { type: 'sit', character: 'customer-b' },

    { type: 'dialogue', character: 'customer-b', text: '師傅、晚安。你不是算錯、也不是運氣——是昨天深夜、日圓突然變強了。而且是「很不尋常」地變強。你這幾個月被日圓弱壓得喘不過氣、進口的東西一直漲；昨晚、有人幫你出了一口氣。只是這口氣、能撐多久、是今晚真正要講的事。' },

    { type: 'move', character: 'chef', toTile: 'stove' },
    { type: 'wait', duration: 400 },

    { type: 'dialogue', character: 'chef', text: '日圓變強、我進口的東西就變便宜——這個道理我這幾個月被教會了。可是「很不尋常」是什麼意思？日圓自己變強、不好嗎？' },

    { type: 'dialogue', character: 'customer-b', text: '師傅、好、但問題出在「怎麼變強的」。你想——前幾天、一塊美金還要換到快 164 塊日圓、是快四十年來最弱的。結果昨天深夜、幾個小時之內、一路衝到 157 塊多。師傅、匯率這種東西、平常一天動個幾毛、就算大新聞了；一夜之間動三塊、而且沒有任何一則新聞大到可以解釋——這不自然。市場幾乎都認定：是日本政府、自己跳進去干預了。' },

    { type: 'dialogue', character: 'chef', text: '政府自己跳進去？政府要怎麼「跳進」市場、把自己的錢變貴？' },

    { type: 'dialogue', character: 'customer-b', text: '師傅、政府平常會存一大筆美金、叫外匯存底。日圓太弱的時候、它就拿這筆美金、進到市場、大量地「賣美金、買日圓」。它自己這樣一買、日圓需求一下暴增、價格就被頂上去了。昨晚估計、有大概八十一億美金這樣砸進去。師傅、簡單講——政府用它存的美金，硬把自己的日圓、買貴了。' },

    { type: 'dialogue', character: 'chef', text: '八十一億美金……為了把日圓撐一下、花這麼多？那這個數字、政府有公布嗎？' },

    { type: 'dialogue', character: 'customer-b', text: '師傅、這就是今晚第一個有趣的地方——沒有。財務省從來不承認、也不否認。它就讓大家去猜。' },

    { type: 'dialogue', character: 'chef', text: '為什麼不承認？做了一件大事、不是應該講清楚、讓大家知道政府在保護日圓嗎？藏著幹嘛？' },

    { type: 'dialogue', character: 'customer-b', text: '師傅、因為「不確定」本身、就是它的武器。你想——如果政府公開說「我就是在 158 這個價位、砸了八十一億」、那些想賣日圓的人、馬上就會算：喔、它子彈大概這麼多、它守 158、那我就等它彈回去、再繼續賣。它一講清楚、就被人家摸透了。可是它不講、大家就得整天提心吊膽：它會不會又突然出手？出手多大？這種「隨時可能挨一拳」的恐懼、會讓想賣日圓的人自己收斂。師傅、它藏起來、不是心虛、是那個「看不清楚」的恐懼、幫它做了它的錢做不到的事。' },

    { type: 'dialogue', character: 'chef', text: '……這個我居然懂。就像我那個做生意的老鄰居、從來不跟同行講他的進貨成本、也不講他哪天要推新菜。別人一直猜他、反而不敢亂跟他打價格戰。他那個「猜不透」、比他真的降價還有用。原來政府跟他、用的是同一招。' },

    { type: 'dialogue', character: 'customer-b', text: '師傅、一模一樣。「讓對手猜不透」、是一種比錢還便宜、有時候還更有效的武器。你老鄰居用在一條街上、財務省用在整個外匯市場上——道理是同一個。' },

    { type: 'wait', duration: 400 },

    // ── the core: can you fight the market with money? ──
    { type: 'dialogue', character: 'chef', text: '那……它這樣一撐、日圓是不是就穩住了？我以後進貨、是不是就一直這個便宜的價了？' },

    { type: 'dialogue', character: 'customer-b', text: '師傅、這就是今晚最核心、也最殘忍的一題了——你能用錢、把一個價格、頂住多久？我先問你一個反問：你知道日圓這幾個月、為什麼一直弱嗎？' },

    { type: 'dialogue', character: 'chef', text: '這個我不知道。我只知道它弱、我很痛。' },

    { type: 'dialogue', character: 'customer-b', text: '師傅、原因其實很簡單——美國那邊、錢放著、一年大概賺三塊多的利息；日本這邊、只賺一塊。差了兩塊多。師傅、你是有錢人、你會把錢放在一年賺一塊的地方、還是賺三塊多的地方？' },

    { type: 'dialogue', character: 'chef', text: '……那當然放賺三塊多的。' },

    { type: 'dialogue', character: 'customer-b', text: '對。所以全世界的錢、都把日圓換成美金、跑去美國賺那個比較高的利息。這個動作、一直在賣日圓。這才是日圓弱的「根」。師傅、你看今天——政府昨晚花大錢、把日圓價格頂上去了；可是今天早上、日本央行開會、利率還是維持一塊、沒有動。也就是說——讓大家一直賣日圓的那個「根」、今天完全沒有被碰。' },

    { type: 'dialogue', character: 'chef', text: '所以……一隻手花大錢把日圓撐起來、另一隻手、卻讓大家想賣日圓的原因、原封不動地留在那裡？' },

    { type: 'dialogue', character: 'customer-b', text: '師傅、你這一句、把今晚整個講穿了。就是這樣——干預、能把價格「當下」頂住；但只要那個利差還在、賣日圓的力量、就會一波一波、繼續回來。所以干預、買到的是「時間」、不是「解決」。' },

    { type: 'dialogue', character: 'chef', text: 'b、妳講到這裡、我突然覺得這件事、我早就懂了、只是我不是用日圓懂的、是用我這家店懂的。' },

    { type: 'dialogue', character: 'customer-b', text: '師傅、你講、我想聽你的版本。' },

    { type: 'dialogue', character: 'chef', text: '幾年前、我生意有一陣子很差。我不甘心、就一口氣花了一筆錢、請了一個很不錯的樂團、在我店門口表演了一晚。那天、人爆滿、擠得水泄不通、我站在廚房裡、心想：我成功了、我要翻身了。結果呢——隔天、跟平常一模一樣冷清。因為那些人、是來聽樂團的、不是來吃我的菜的。我花錢買到的、是「一個晚上的熱鬧」、不是「客人真的想回來」。錢一停、熱鬧就散了。' },

    { type: 'dialogue', character: 'customer-b', text: '師傅……你這個樂團的故事、就是「干預」最好的教科書、我一個字都不用改。政府昨晚、就是那個花錢請樂團的老闆——它買到了「一個晚上的日圓變強」。可是只要「大家為什麼不想要日圓」這件事沒變、就跟你店裡「客人為什麼不想回來」沒變一樣——錢一停、就打回原形。' },

    { type: 'dialogue', character: 'chef', text: '所以真正該做的、不是一直請樂團——是把菜弄好、把客人真的想回來的理由做出來。對日圓來講、那個「菜」、是什麼？' },

    { type: 'dialogue', character: 'customer-b', text: '師傅、對日圓來講、那個「菜」、就是把利差縮小——要嘛日本這邊把利息升上去、要嘛美國那邊把利息降下來。這兩件、今天都沒發生。所以老實說、昨晚那口氣、很可能就是「一個晚上的樂團」。政府能一直請樂團嗎？能、但它存的美金不是無限的、請一次、少一次。它真正該用這口氣去做的、是趁大家還在怕、趕快把根本的問題處理掉——不然就變成、一邊漏水、一邊拼命用水瓢往外舀、手會先痠。' },

    { type: 'wait', duration: 400 },

    // ── what the chef should DO: don't rebuild on a move that may not hold ──
    { type: 'dialogue', character: 'chef', text: '那我呢？我這禮拜進貨便宜了——我是不是應該趁便宜、多囤一點油、多囤一點麵粉、囤起來慢慢用？' },

    { type: 'dialogue', character: 'customer-b', text: '師傅、你先別急——你自己剛剛那個樂團的故事、答案已經在裡面了。你覺得這個便宜、是「客人真的回來了」、還是「今晚剛好有樂團」？' },

    { type: 'dialogue', character: 'chef', text: '……妳這樣一問我就冷靜了。如果這個便宜、只是政府請了一晚的樂團、那它隨時會彈回去。我如果現在看到便宜、就手滑囤一大堆——萬一下禮拜日圓又弱回去、我就是用「剛好比較便宜的一晚」的價、囤了一整倉、然後套在那裡。師傅我跟妳講、我進貨三十年、最慘的幾次、全部都是「看到便宜、一時衝動、囤太多」。便宜、最會騙人。' },

    { type: 'dialogue', character: 'customer-b', text: '師傅、你這段話、我要原封不動帶回我的桌上、講給那些今天興奮打電話進來、想「趁日圓強、大買特買」的人聽。你把它講完了：一個「可能不會持續」的好價格、不能拿來當「以後都這樣」的計畫。你可以享受這一晚的實惠——今天進貨、剛好省一點、很好;但你不要把「一晚的便宜」、當成「新的常態」、去壓上你整倉的身家。' },

    { type: 'dialogue', character: 'chef', text: '享受這一晚、但別把它當常態——好。那我就這禮拜正常進貨、順手撿一點便宜、但絕對不囤。等它真的「穩」了、我再說。可是我怎麼知道它「真的穩了」？' },

    { type: 'dialogue', character: 'customer-b', text: '師傅、你就看那個「根」有沒有動——利差有沒有真的縮小。只要美國那邊利息還是高這麼多、日圓再怎麼被撐、都是暫時的、你就把它當一晚的樂團。哪天你聽到「美國開始降息」、或「日本開始升息」、那才是「客人真的開始想回來」——那時候的便宜、才有可能是真的、可以慢慢信的。在那之前、撿便宜可以、押身家不行。' },

    { type: 'wait', duration: 400 },

    // ── Closing — month-end Friday; the eased yen brings back one small import ──
    { type: 'move', character: 'chef', toTile: 'counter-center' },
    { type: 'dialogue', character: 'chef', text: '好、月底了、又是禮拜五、我們不談那些頂不住的東西了。今天我做當季的——鰹のたたき、蒜片薑蔥堆滿；つくね串、沾蛋黃;冷やし茶碗蒸し、滑的;モロヘイヤお浸し、黏黏的很消暑。還有——妳看這個、我今晚破例、淋了一點進口的好油在番茄上;這瓶油、日圓 163 的時候我捨不得買、收起來了；這禮拜稍微便宜、我就拿出來用一次。就一次——嚐個鮮、不當常態。冷酒。' },

    { type: 'dialogue', character: 'customer-b', text: '師傅、你這瓶油、太可愛了——你完全活出了我們今晚講的東西。你沒有因為便宜、就衝去買十瓶囤著；你就拿出那瓶收起來的、開心地用一次。享受這一晚、不押身家。而且說真的、你這一個月、被日圓壓得那麼辛苦、今晚讓自己淋一點好油、你值得的。' },

    { type: 'dialogue', character: 'chef', text: 'b、妳知道嗎、我今晚反而有點感慨。這一個月、外面吵得天翻地覆——什麼聯準會、什麼 AI、什麼干預、幾千億幾百億在那邊搬。可是這些東西、最後傳到我這條巷子、就變成一件很小的事：我的番茄、今晚能不能淋一點好油。那麼大的世界、繞了一大圈、落到我身上、就這麼一點點。' },

    { type: 'dialogue', character: 'customer-b', text: '師傅、你這個「那麼大的世界、落到我身上就一點點」——其實不是「只有一點點」、是「終於變成看得懂、摸得到的一點點」。我們在 desk 上、天天看那些幾百億的數字、看久了會麻木、會忘記那到底是什麼。可是你這瓶油、提醒我——那些數字的另一頭、是一個個真實的人、他今晚能不能對自己好一點。你讓我想起我為什麼做這行。' },

    { type: 'dialogue', character: 'chef', text: '哈、我一瓶油、讓妳想起初衷、那這瓶油值了。來、鰹魚趁新鮮、番茄趁我這點好油還在。月底了、這個七月大家都不好過——日經跌了快一成一、妳們盯著那些頂不住的價格、盯了一整個月。今晚、就先別管它撐不撐得住了。有些便宜、享受當下就好;有些晚上、吃飽就好。冷酒斟上——敬那些用錢頂不住、只能好好去解決的事;也敬這瓶、我終於捨得開的油。慢慢吃。' },

    { type: 'dialogue', character: 'customer-b', text: '師傅、敬這瓶油。也敬你——一個被大人物們搬來搬去的幾千億、壓了一整個月、卻還能在月底這天、笑著淋一瓶好油的人。這個穩、比任何干預都真。下個月、不管日圓撐不撐得住、我還來吃你的鰹魚。' },

    { type: 'sfx', sound: 'chimes' },

    { type: 'wait', duration: 500 },
    { type: 'move', character: 'chef', toTile: 'stove' },

    {
      type: 'narration',
      text: '禮拜五晚上 10 點半、東京、七月的最後一天。今天的故事、換了主角——不是股票、是日圓;而且它落到一條小巷子裡、變成一瓶油。昨晚 USD/JPY 一夜從 163 暴衝到 157.80（約 -3%、$81 億拋壓、2022 年來美元最大單日跌、同時打全部日圓對）——市場幾乎都認定是官方干預、但財務省照例不承認（B:「不確定本身就是它的武器、它一講清楚就被摸透、它不講、想賣日圓的人就整天怕挨下一拳」；師傅:「我那做生意的老鄰居從不講他的成本跟新菜、別人猜不透、反而不敢跟他打價格戰——那個猜不透、比降價還有用」）。今天 BOJ 維持 1.0%（GDP 上修 0.8%）——沒縮小美日利差（2.5-2.75%），而那正是日圓弱的根、carry trade 的引擎。核心一題「你能用錢把價格頂住多久」——干預移動了價格、卻沒動那個根、所以是買時間、不是解決（師傅的樂團故事:「生意差時我花錢請樂團在門口表演一晚、那天人爆滿、我以為要翻身了、隔天跟平常一樣冷清——那些人是來聽團的、不是來吃菜的;錢一停、熱鬧就散」；B:「政府就是那個請樂團的老闆、買到一晚的日圓變強;只要『大家為什麼不想要日圓』沒變、就跟你『客人為什麼不回來』沒變一樣——錢一停打回原形;它存的美金不是無限的、請一次少一次、真正該做的是趁大家還怕、把利差這道根本問題處理掉、不然就是一邊漏水一邊用水瓢舀、手會先痠」）。給師傅的實務——這禮拜進貨便宜（油／麵粉／咖啡、日圓一強的實惠）該不該囤？師傅自己用樂團的故事回答:「如果這便宜只是政府請一晚的樂團、隨時彈回去、我看到便宜就手滑囤一大堆、就套在那;我進貨三十年最慘的幾次全是『看到便宜一時衝動囤太多』——便宜最會騙人」（B:「一個可能不會持續的好價格、不能拿來當『以後都這樣』的計畫;享受這一晚、別押身家;要看那個『根』——哪天聽到美國降息或日本升息、利差真的縮、那時候的便宜才可以慢慢信」）。收尾在月底的一瓶油——日圓 163 時捨不得買、這禮拜稍便宜、師傅破例淋一點進口好油在番茄上、「就一次、嚐鮮、不當常態」（B:「你沒因為便宜就衝去囤十瓶、就開心用一次——你活出了我們今晚講的;而且你被日圓壓了一個月、今晚值得對自己好一點」）。師傅的感慨:「這一個月外面吵得天翻地覆、聯準會、AI、干預、幾千億幾百億在搬、最後傳到我這條巷子、就變成一件很小的事——我的番茄今晚能不能淋一點好油」（B:「不是『只有一點點』、是『終於變成看得懂、摸得到的一點點』;我們在 desk 看幾百億看到麻木、你這瓶油提醒我——那些數字的另一頭、是一個個真實的人、今晚能不能對自己好一點;你讓我想起我為什麼做這行」）。月底、七月日經跌了快 11%;有些便宜享受當下就好、有些晚上吃飽就好。敬那些用錢頂不住、只能好好去解決的事;也敬那瓶、終於捨得開的油。',
      duration: 6000,
    },
  ],
};
