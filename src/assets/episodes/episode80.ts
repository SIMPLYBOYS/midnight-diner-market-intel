import type { Episode } from '../../engine/types';

/**
 * Sources verified 2026-08-14 (Fri, Tokyo evening) — 「賺來的高 vs 白給的高」：
 * the day the number ep79 was waiting for RESOLVED, and the market ran to
 * record highs on it. ep79 (8/11) was the night BEFORE US July CPI — the
 * discipline of waiting on a coin flip. Tonight the coin has landed benign,
 * relief has fired the tape to fresh records — so the fresh spine is NOT
 * "we won by waiting" (a victory lap) but the harder question a record high
 * poses: 在歷史新高買、到底怕不怕? Answer (A's earned-vs-gifted lens): a record
 * is not a ceiling — it's the normal state of a rising market — so don't be
 * superstitious about the NUMBER; be suspicious of the REASON. Today's high is
 * GIFTED (a cooled single-month print releasing a held breath), not EARNED
 * (fundamentals improving) — and a gifted high is not conviction you can chase.
 *
 * DATE: verified before writing, NOT trusted from the box clock (it has drifted
 * ~3wk before). WebSearch (Bloomberg/CNBC live "Aug 14" coverage; Nikkei 8/13
 * close 68,308.59; two independent hits) confirms today = Fri 2026-08-14.
 * Sequence: ep77=7/31, ep78=8/9, ep79=8/11, ep80=8/14.
 *
 * TIMEZONE (guardrail 4): the box read Fri 2026-08-14 12:01 JST at write time —
 * i.e. TOKYO WAS STILL MID-SESSION (15:00 JST close had NOT happened). So NO
 * fabricated Tokyo "today close." Anchor = the most-recent COMPLETED session
 * (Thu 8/13 US close, records) + the confirmed CPI result (Wed 8/12) + Nikkei's
 * confirmed 8/13 close and its SOURCED 8/14 intraday direction (up hard, broke
 * 69,000, +1,000+ intraday) presented explicitly AS intraday, never as a close.
 *
 * — THE NUMBER, RESOLVED (US July CPI, released Wed 8/12, 8:30am ET): headline
 *   +0.1% MoM, 3.4% YoY (DOWN from June's 3.5%); core +0.2% MoM, 2.5% YoY (down
 *   0.1pp). Shelter +0.1% (~2/3 of the monthly rise), energy -1.5% MoM. Read:
 *   cooler than feared ⇒ lowered Sept rate-HIKE urgency ⇒ relief. BUT the war
 *   isn't won — energy still +14.7% YoY, gasoline +24.6% YoY, core still 2.5% >
 *   2% target. (CNBC/Quartz/NBC/BLS July-CPI, WebSearch 8/14)
 *
 * — THE RELIEF RALLY (Thu 8/13 US close, the completed-session anchor): S&P 500
 *   7,798.99 (+0.65%, fresh record, first push above 7,800 intraday), Nasdaq
 *   26,803.03 (+0.81%, record, Meta/Micron/Netflix leading), Dow 53,839.99
 *   (+0.13%, +69.72 — the laggard, gains concentrated in tech). Side moves:
 *   Brent ~$87 (-2%+, demand worries — the very thing that cooled CPI energy),
 *   Workday +~26% on Silver Lake take-private talks (single-stock M&A, not
 *   macro — headline color only, not a scaled bar). (Bloomberg/CNBC 8/14)
 *
 * — TOKYO (confirmed): Nikkei 225 8/13 close 68,308.59 (+784.53, +1.16%). 8/14
 *   still trading at write time: morning session 68,889.01 (+580.42), intraday
 *   spiked past 69,000 / +1,000 on the US relief — SOURCED but flagged intraday,
 *   NOT a fabricated close. (Nikkei/Investing/kabutan 8/14)
 *
 * — YEN PAYOFF (light sidebar, ep77/79 callback): USD/JPY ~159.4 on 8/13, ~flat
 *   — the post-CPI dollar bounce was short-lived, and the yen firmed overnight
 *   on a Bloomberg report that PM Takaichi's govt backs a near-term BOJ HIKE
 *   (Sept/Oct). i.e. the RATE-GAP "root" B said intervention never touched
 *   (ep77/79) is finally on the table — the real止跌 reason, if it lands, vs
 *   the "one-night band" of intervention. One beat, not the spine. (MUFG/
 *   Vantage/forex.com 8/13)
 *
 * — sectors[].value = |%change|x100 of that row's indicator asset, reference =
 *   the most-recent COMPLETED session (Thu 8/13 US close; Tokyo un-closed at
 *   write time — same anchoring logic as ep78/79). Real-% rows: S&P +0.65% (65),
 *   Nasdaq +0.81% (81), Brent -2% (200), Dow +0.13% (13). Grey value:0 CONTEXT
 *   row (ep68/79 convention): the CPI print itself (a data release / level, not
 *   a scalable asset %change — 3.4% lives in tickers). Record row gold #d4a017.
 * — priceHistory = S&P climbing into the record: Mon 8/10 close 7,753.11 → the
 *   CPI-day pop → Thu 8/13 close 7,798.99 (both endpoints real; the 7,802 poke =
 *   the intraday push above 7,800; interior bars are mood-shape). volumeHistory
 *   EXPANDS into/after the print (opposite of ep79's pre-number drain). vix 13.5
 *   (relief) / rsi 71 (pushing overbought — fits "don't chase") / beta are mood,
 *   not sourced prints; the closes and priceHistory endpoints ARE real.
 *
 * — CAST: running tally through ep79 = A:8, B:9 (ep79 B-solo). Tonight CUSTOMER
 *   A SOLO (→ A:9, B:9, balanced). Earned: record-high psychology / earned-vs-
 *   gifted / "一個月不是一個方向" / the信心配比 framework is A's analytical,
 *   historical-perspective turf (ep49-60, ep78) — a deliberately DIFFERENT voice
 *   from the B-solo desk/risk-control of ep79, so the adjacent topic doesn't
 *   repeat. A references B only as a fellow regular (上禮拜二她說 desk 進數字前
 *   把手弄乾淨、勸住想賭數字的老客戶) — INDEPENDENT regulars, no shared desk / no
 *   joint position (CONTINUITY DEBT guardrail). Personas: A male, 太太, JetBlue
 *   同學, 箱根 self-graduation test; 七分半信二分半留 signature (nudged: a GIFTED
 *   good number does NOT earn a confidence bump — 湯底不動、只換「留」的料). CHEF
 *   layman — CPI/新高/升息 all get plain-word translation, 老闆 not employee,
 *   我老婆, 師父; his 豊洲 invoices / a record-revenue rainy night are the
 *   everyman mirror. Wife's entry: 看新聞「股票破紀錄、創新高」問「這不是好事嗎?
 *   為什麼有人一邊講新高、一邊喊小心別追?破紀錄了、到底該高興、還是該怕?」
 * — Menu: Friday, late-summer, A-solo, distinct from ep77/78/79 — 冷奴(茗荷生姜)、
 *   鮎の塩焼き(今日豊洲便宜、但只拿平常的量、沒囤——「白給的低價不加碼」的活教材)、
 *   万願寺とうがらしの焼き浸し、出汁巻き卵、真鯵のなめろう、締めに焼きおにぎりの
 *   出汁茶漬け、生ビール→冷酒. No Polymarket (none read — not fabricated).
 */
export const EPISODE_80: Episode = {
  id: 'ep-80',
  date: '2026-08-14',
  title: '20260814 禮拜五晚上、東京——上禮拜二 b 在這兒等的那個「明天才出的數字」出來了:七月物價（CPI）溫和降溫（年增 3.4%、從 3.5% 降;核心 2.5%），美國禮拜四三大指數同創新高（S&P 7,798.99 +0.65% 首破 7,800、Nasdaq +0.81%、Dow +0.13%），今天東京盤中也續強、一度破 69,000。a 一個人來。核心不是慶祝破紀錄——是「在歷史新高買、到底怕不怕?」a 的答:破紀錄本身不可怕、那是一個一直在漲的市場的常態、不是天花板;真正要分清的是——今天這個高、是「賺來的」還是「白給的」。它是一個涼掉的單月數字「送」的解圍行情、不是基本面真的變好（能源年增仍 +14.7%、通膨戰沒打完）;白給的高、不能當賺來的信心去追。進數字前留的那手現金、跟數字出來後別追高、是同一個紀律',
  description: '禮拜五晚上、東京、小巷子裡。上個禮拜二、b 在這張桌子上，講了一整晚「等一個明天才會出來的數字」——就是美國七月的物價（CPI）。現在，那個數字出來了:禮拜三公布，溫和、比大家原本怕的乖——年增 3.4%、比六月的 3.5% 還降了一點，核心 2.5%。市場「鬆一口氣」，於是禮拜四，美國三大指數一起創下歷史新高（S&P 500 收 7,798.99、+0.65%、第一次站上 7,800;Nasdaq +0.81%;Dow +0.13%）;今天連東京盤中都跟著大漲、一度突破 69,000（還在盤中、不是收盤）。師傅的老婆看新聞，滿臉困惑地問他:電視上一直講「破紀錄」「創新高」——這不是好事嗎?可是同一則新聞裡，有人一邊講新高、一邊喊「小心、別追」;破紀錄了，到底該高興、還是該怕?今晚 a 一個人來。他說:你老婆兩個問題都對，而且問到今晚的正中央。第一件、也是最多人搞錯的:「在歷史新高買，是不是最危險?」直覺都說是——其實不是。一個健康、往上長的市場，本來就會一路破紀錄，破紀錄是它的常態、不是它的天花板;你要是一看到新高就不敢碰，過去十幾年你一股都買不下手。所以「新高」這個數字本身，不可怕。真正要分清的是第二件:同樣一個新高，它是「賺來的」、還是「白給的」。賺來的高——是公司真的多賺了錢、地基一層層墊上去、站得穩;白給的高——是一個「本來很怕、結果沒那麼糟」的消息，讓大家同時鬆一口氣、一下衝上去的。今天這個，比較像後者:不是基本面突然變好，是那個物價數字涼了一點、把「怕升息」的心結暫時解開——市場是「鬆一口氣」衝上來的，不是「賺到錢」墊上來的。而且這個數字只是「沒有更壞」、不是「真的變好」:能源那一項，還比去年貴了一成多、汽油貴兩成多，通膨這場仗根本沒打完、只是這個月喘口氣。a 說他上禮拜跟 b 講過一句——「一個月，不是一個方向」;一個涼掉的月份，不代表通膨轉頭。所以他今晚不會因為市場創新高，就把「信心」加上去:他還是七分半信、二分半留，一分沒動;變的只是那「二分半留」裡裝的東西——上禮拜裝的是「怕通膨太燙」，今晚換成「怕大家太快鬆懈、把白給的高當成賺來的去追」。師傅用他的店懂了:他也有過「破紀錄」的晚上——有一次隔壁臨時公休、又剛好下大雨，客人全擠他這兒、營業額破了紀錄;他要是笨，就會當自己生意起飛、隔天狂進貨、多請人手;結果雨一停、隔壁一開，囤的料全爛在冰箱。那個破紀錄，就是「白給的高」——不是他菜變好，是隔壁休息、天下雨「送」他的。所以創新高不用怕它高;要問的是——這個高，是「我的菜真的變好」，還是「隔壁剛好休息」?順帶一提 b:她上禮拜把手弄乾淨、留現金、勸住想賭數字的老客戶;現在數字出來、市場大漲，有人會說「早知道就賭了」——但她賺的從來不是「這一把」，是「十年不出局」。副線:日圓這幾天沒再貶（~159.4），不是政府又出手，是有消息說日本央行九、十月可能真的要升息了——b 上個月說「干預是買時間、根沒動」，現在，那個「根」，可能終於有人要去動了。',
  actions: [
    { type: 'bgm', track: 'chill-lofi', command: 'play' },

    {
      type: 'narration',
      text: '禮拜五晚上、東京、小巷子裡。上個禮拜二、b 在這張桌子上、講了一整晚「等一個明天才會出來的數字」——美國七月的物價、CPI。現在、那個數字出來了:禮拜三公布、溫和、比大家原本怕的乖——年增百分之三點四、比六月還降了一點。市場鬆了一口氣。於是禮拜四、美國三大股市指數、一起創下歷史新高;今天連東京盤中都跟著大漲、一度衝破六萬九千點。師傅的老婆看新聞、一臉困惑:電視上一直講「破紀錄」「創新高」——這不是好事嗎?可是同一則新聞裡、有人一邊講新高、一邊喊「小心、別追」。破紀錄了、到底該高興、還是該怕?今晚、a 一個人來;這一次、要從「數字出來了、還創了新高」、講到一件最多人搞錯的事——在最高點、到底該不該買。',
      duration: 6000,
    },

    {
      type: 'market-data',
      data: {
        tickers: [
          { symbol: 'S&P 500（8/13 收 7,798.99、+0.65%、歷史新高、首度站上 7,800——CPI 溫和後的「解圍」大漲）', price: 7798.99, change: 0.65 },
          { symbol: 'Nasdaq（8/13 收 26,803.03、+0.81%、同創新高、Meta／Micron／Netflix 領漲）', price: 26803.03, change: 0.81 },
          { symbol: 'Dow（8/13 收 53,839.99、+69.72、+0.13%——三大裡最溫吞、漲勢集中在科技）', price: 53839.99, change: 0.13 },
          { symbol: '美國七月 CPI（8/12 已出爐:年增 3.4%、較六月 3.5% 降溫;月增 +0.1%、核心 2.5%——溫和、降低九月升息疑慮;但能源年增仍 +14.7%）', price: 3.4, change: -0.1 },
          { symbol: '日經 225（8/13 收 68,308.59、+1.16%;今天 8/14 東京盤中續強、一度突破 69,000、漲逾千點——尚在盤中、非收盤）', price: 68308.59, change: 1.16 },
          { symbol: 'USD/JPY（8/13 約 159.4、幾乎持平;CPI 後美元反彈曇花一現、日圓因「日銀九／十月可能升息」轉強——ep79 說沒被碰的那個「根」、這下有人要碰了）', price: 159.4, change: 0.03 },
        ],
        volatility: 13,
        vix: 13.5,
        rsi: 71.0,
        beta: 1.0,
        priceHistory: [7753.11, 7746, 7761, 7779, 7791, 7802, 7795, 7798.99],
        volumeHistory: [820, 900, 1150, 1550, 1450, 1300, 1350, 1500],
        sectors: [
          { label: 'S&P 500 +0.65%（8/13 收 7,798.99、歷史新高、首度站上 7,800 上方——但這是「鬆一口氣」衝上來的、不是「賺到錢」墊上來的）', value: 65, color: '#d4a017' },
          { label: 'Nasdaq +0.81%（8/13 收 26,803.03、同創新高、科技領漲 Meta／Micron／Netflix）', value: 81, color: '#22cc55' },
          { label: 'Brent 原油 -2%+（8/13 約 $87、需求疑慮下跌——油價回落、正是這個月壓低通膨「能源項」的推手之一）', value: 200, color: '#dd3333' },
          { label: 'Dow +0.13%（8/13 收 53,839.99、+69.72——三大裡最溫吞、漲勢集中在少數科技權值、不是全面普漲）', value: 13, color: '#22cc55' },
          { label: '七月 CPI 已出爐（月增 +0.1%／年增 3.4%、較 6 月 3.5% 降溫、核心 2.5%——這是點燃解圍行情的引信;但能源年增仍 +14.7%、汽油 +24.6%、通膨戰沒打完、只是這個月喘口氣）', value: 0, color: '#888888' },
        ],
        headline: '週五 20:00 JST（東京）：上週二 B 等的那個 CPI 出來了——七月物價溫和降溫（年增 3.4%、從 3.5% 降;核心 2.5%、月增 +0.1%），市場「鬆一口氣」/ 8/13 美股三大同創新高：S&P 7,798.99（+0.65%、首破 7,800）、Nasdaq 26,803.03（+0.81%）、Dow 53,839.99（+0.13%）;今天東京盤中亦破 69,000（未收盤） / 核心：在歷史新高買、怕不怕?破紀錄本身不可怕（那是一直在漲的市場的常態、不是天花板）——真正要分清的是「賺來的高 vs 白給的高」:今天這個是涼掉的單月數字「送」的解圍行情、不是基本面變好（能源年增仍 +14.7%、通膨戰未完）;白給的高、不能當賺來的信心去追 / A 框架：七分半信二分半留一分不動、只把「留」的料從「怕通膨燙」換成「怕大家太快把白給的高當賺來的追」 / 副線：USD/JPY ~159.4 持平、日銀九／十月可能升息——干預碰不到的「根」、終於有人要動了 / 花絮：Workday +26%（傳 Silver Lake 收購下市、個股 M&A、非大盤）',
      },
    },

    { type: 'enter', character: 'chef', toTile: 'stove' },
    { type: 'wait', duration: 500 },
    { type: 'move', character: 'chef', toTile: 'prep-area' },
    { type: 'wait', duration: 500 },
    { type: 'move', character: 'chef', toTile: 'stove' },
    { type: 'wait', duration: 400 },

    { type: 'enter', character: 'customer-a', toTile: 'entrance' },
    { type: 'move', character: 'chef', toTile: 'counter-center' },
    { type: 'dialogue', character: 'chef', text: 'いらっしゃい、a。禮拜五辛苦了、先來杯生的?跟你說——我今天又被我老婆問倒了。她看新聞、抬頭問我:老公、電視上一直講股票「破紀錄」「創新高」、這不是好事嗎?可是同一則新聞裡、有人一邊講新高、一邊喊「小心、別追」。她說:那到底、我該替它高興、還是該替它緊張?我又答不出來。' },

    { type: 'move', character: 'customer-a', toTile: 'random-stool' },
    { type: 'sit', character: 'customer-a' },

    { type: 'dialogue', character: 'customer-a', text: '師傅、晚安、生的一杯。你老婆這兩個問題、一個都不簡單、而且剛好問到我今晚想講的正中央。先給你補個背景:你記得上禮拜二、b 在這兒講「等一個明天才出來的數字」吧?那個數字——美國七月的物價、CPI——禮拜三出來了。溫和、比大家原本怕的乖:年增百分之三點四、比六月的三點五還降一點。市場一鬆口氣、禮拜四、美國三大指數就一起創了歷史新高。' },

    { type: 'move', character: 'chef', toTile: 'stove' },
    { type: 'wait', duration: 400 },

    { type: 'dialogue', character: 'chef', text: '喔——所以上禮拜大家憋著等的那個數字、出來了、還是個好數字、所以大家敢買、就創新高了。這串我跟得上。那……創新高、不就是好事嗎?為什麼還有人喊小心?說真的、在「最高點」買東西、聽起來不是最笨的嗎?' },

    { type: 'dialogue', character: 'customer-a', text: '師傅、你這句「在最高點買最笨」、是全世界最多人有、也最害人的直覺。我今晚第一件事就想幫你把它翻過來。你想想——一個一直在長大的東西、它每破一次新紀錄之前、上一個紀錄、當時不也是「最高點」?一個健康的、往上走的市場、本來就會一路破紀錄、破紀錄是它的「常態」、不是它的「天花板」。你要是「一看到新高就不敢碰」、那過去十幾年、你一股都買不下手。所以師傅、聽好:「新高」這個數字本身、不可怕。' },

    { type: 'dialogue', character: 'chef', text: '這……有點反過來、但我好像懂。你意思是、破紀錄只是「它一直在漲」留下的腳印、不是「它要掉了」的警告。那——新聞裡那些一邊講新高、一邊喊小心的人、到底在怕什麼?' },

    { type: 'dialogue', character: 'customer-a', text: '師傅、問得好、這就是今晚第二件、也是最關鍵的事:他們怕的、不是「高」、是「為什麼高」。同樣一個新高、你要分清楚——它是「賺來的」、還是「白給的」。賺來的高、是公司真的多賺了錢、東西真的變好、地基一層一層墊上去的;那種高、站得穩。白給的高、是因為一個「本來大家很怕、結果沒那麼糟」的消息、大家同時鬆一口氣、一下子衝上去的。' },

    { type: 'dialogue', character: 'chef', text: '「賺來的高」跟「白給的高」……那今天這個、創新高的這個、是哪一種?' },

    { type: 'dialogue', character: 'customer-a', text: '師傅、老實講、比較像「白給的」。今天這個新高、不是哪家公司突然變厲害、是那個物價數字涼了一點、把大家心裡「怕升息」的結、暫時解開——市場是「鬆一口氣」衝上來的、不是「賺到錢」墊上來的。而且更要命的是:這個數字、其實只是「沒有更壞」、不是「真的變好」。你去看細的——能源那一項、還比去年貴了一成多、汽油貴兩成多;通膨這場仗、根本還沒打完、只是這個月喘了一口氣。我上禮拜跟 b 講過一句話——「一個月、不是一個方向」;一個涼掉的月份、不代表通膨從此轉頭了。' },

    { type: 'dialogue', character: 'chef', text: '等等——那不管是賺來的、還是白給的、反正現在都創新高了啊。對我這種局外人、這兩種高、有差嗎?高就是高、我進場、有差?' },

    { type: 'dialogue', character: 'customer-a', text: '差很大、師傅。因為「白給的高」、它的地基、是那個涼掉的數字撐著的——而那個數字、下個月可能又變回去。你去追一個「白給的高」、等於把身家、押在「那口氣、會不會一直鬆著」上面。賺來的高、你踏上去、腳下是水泥;白給的高、你踏上去、腳下是一口氣——它隨時會洩。所以分清楚這兩種、不是學問、是保命。' },

    { type: 'dialogue', character: 'chef', text: '一個踩水泥、一個踩一口氣……這我記住了。那我問你——你自己呢?這數字這麼乖、市場又創新高、你那個「幾分信、幾分留」的說法、這次是不是就多信一點了?' },

    { type: 'dialogue', character: 'customer-a', text: '師傅、你記性真好。我現在、還是「七分半信、二分半留」、一分沒動。老實說、今天這個乖數字一出來、我心裡有股衝動、想升到八分。但我忍住了。為什麼?因為讓我想加碼的、是一個「白給」的好消息、不是我自己算出來、看懂的東西。那叫「別人塞給我的信心」、不是「我自己賺到的信心」。塞給我的、我不敢拿來當本錢。所以我的配比一分不動;變的、只有那「二分半留」裡面裝的料——上禮拜、裝的是「怕通膨太燙」;今晚、我換成「怕大家太快就鬆懈、把這個白給的高、當成賺來的、去追」。湯底不動、只換提防的那味料。' },

    { type: 'dialogue', character: 'chef', text: '哈、你這個「白給的高」、「賺來的高」——我又要用我這家店翻譯給你聽了。你知道嗎、我這間小店、也有過「破紀錄」的晚上。有一次、整條巷子、就我還開著;隔壁那家臨時公休、偏偏又下大雨、大家沒地方去、全擠來我這兒。那天、我營業額破了紀錄。你猜我隔天做了什麼?' },

    { type: 'dialogue', character: 'customer-a', text: '師傅、我大概猜得到、但你講、你這個比我一整晚的道理都好聽。' },

    { type: 'dialogue', character: 'chef', text: '我要是笨、我隔天就會想:「喔、我生意起飛了!」然後跑去豊洲進一大堆貨、還多請一個人手來備戰。結果咧?雨一停、隔壁一開、客人全散了。我那天多囤的料、全爛在冰箱裡、多請的人手、閒在那邊沒事做。那個「破紀錄」——就是你講的「白給的高」啊:不是我菜變好了、是隔壁剛好休息、天剛好下雨、「送」我的。我要是把那一晚、當成我實力的證明、我就慘了。' },

    { type: 'dialogue', character: 'customer-a', text: '師傅、你這個「雨夜爆滿」、就是我今晚想講的東西、我一個字都不用改。你那天要是把「白給的爆滿」、當成「賺來的實力」、照著它去進貨、去請人——你就是在歷史新高、拿身家去追一個白給的高點。但你沒有。你隔天照平常的量進、留了現金、看實際來的客人再說。你分得清:今晚多的這些人、是衝我的菜來的、還是衝這場雨來的。師傅、幾千億的桌子、跟你這口爐子、練的、是一模一樣的一件事——別把「運氣送的高」、當成「本事賺的高」、去加碼。' },

    { type: 'dialogue', character: 'chef', text: '那我整個就通了。所以「創新高」、我不用怕它高;我要問的、是這個高、從哪來的——是「我的菜真的變好」、還是「隔壁剛好休息」?是前者、我可以踏實一點;是後者、我照舊、留一手、絕不上頭。' },

    { type: 'dialogue', character: 'customer-a', text: '師傅、完全正確、你這句可以直接刻在我螢幕上。而且你想想 b——上禮拜二她在這兒說、她們 desk 進這個數字之前、把手弄乾淨、留現金、還把那個想「賭數字」的老客戶勸住了、對吧?現在數字出來、乖的、市場大漲——一定有人拍大腿說「哎呀早知道就賭了、賭中就大賺」。可是師傅、不能這樣算。她那手現金、這一把、確實是沒賭到;但她本來就備好「它高」「它低」兩套劇本、不管銅板哪面朝上、她都不會被打死。她賺的、從來不是「這一把」;是「十年、都還在桌上」。今天賭中的人、下一把、可能就把身家還回去;她不賭、所以她永遠還在。' },

    { type: 'dialogue', character: 'chef', text: '「賺的不是這一把、是十年不出局」……好、b 那句、跟你「賺來的高、白給的高」、我今晚一起記著。喔對、順便問你一件——我進貨單上那個日圓。上個月你們說政府硬撐、後來又貶回去;可是這幾天、它好像沒再往下了?又是政府出手撐的嗎?' },

    { type: 'dialogue', character: 'customer-a', text: '師傅、這個有意思、不是政府又出手。是有消息說——日本自己的央行、九月、十月、可能真的要升息了。你記得 b 上個月那句「干預是買時間、不是解決、根沒動」吧?那個讓日圓一直弱的「根」、就是「日本的利息太低」。現在、可能終於有人、要去動那個根了。要是真動了、那才是日圓真正止跌的理由——不是「請一晚的樂團」、是真的把地基墊高一階。你先別急著換算、等它真升了再說;但這個方向、值得你記在進貨單旁邊。' },

    { type: 'wait', duration: 400 },

    { type: 'move', character: 'chef', toTile: 'counter-center' },
    { type: 'dialogue', character: 'chef', text: '好、那今晚我就這樣:破紀錄、我陪它高興一下、但腳踩水泥、不踩那口氣。來、看今天這桌——冷奴、茗荷生姜、冰的先開胃;鮎の塩焼き、今天豊洲的鮎便宜、可是我沒因為便宜就狂進、只拿了平常的量、你等下吃到的、就是我今天「沒上頭」的證據;万願寺とうがらし焼き浸し;出汁巻き卵;真鯵、我拍成なめろう;締めに焼きおにぎりの出汁茶漬け。生的先、待會兒配鮎、我再開瓶冷酒。' },

    { type: 'dialogue', character: 'customer-a', text: '師傅、你這尾鮎、太剛好了——今天便宜、你卻只拿平常的量、沒囤。那個便宜、就是「白給的低價」;你沒把它當成「明天一定也這麼便宜」去壓一冰箱身家。你留的那手、跟我要客戶留的那手、跟 b 那手現金、是同一筆:給「萬一明天不是這樣」準備的。師傅、你這尾魚、活生生就是今晚整堂課。' },

    { type: 'dialogue', character: 'chef', text: 'a、你這樣一講、我這尾鮎升值了。說真的——你們那個世界、聽起來好嚇人:創新高、破紀錄、幾千億在追。可是繞一圈、落到我這條巷子、就變成一句很土的話:高不高、我不看;我只看這個高、是我菜真的變好、還是隔壁剛好下雨。是雨、我就留一手、絕不趁雨加碼。我不用懂 CPI、我只要記住這句、我這口爐子、就不會因為一個好數字、自己先飄起來。' },

    { type: 'dialogue', character: 'customer-a', text: '師傅、你這句「是雨、我就留一手、絕不趁雨加碼」——我明天帶去桌上、貼在螢幕最上面。我們讀一堆報告、盯一堆線、繞一大圈、結論就是你這一句。而且你有沒有發現、你今晚很穩——沒有因為「市場破紀錄」就手癢、也沒有假裝這個高是你賺的。你就是分清楚兩種高、留一手、然後開開心心請我吃這桌。師傅、這個「穩」、我桌上做十年的、很多人到現在都還沒學會。' },

    { type: 'sfx', sound: 'chimes' },

    { type: 'dialogue', character: 'chef', text: '哈、你又捧我、我就是一個看魚價的煮飯的。來、冷酒斟上——敬「新高」;但敬的、不是那個破紀錄的數字、是「看得出它是賺來、還是白給」的那雙眼睛。生的先乾一杯、鮎趁熱、なめろう我還冰著一份。慢慢吃、今晚不趕——反正明天市場、是漲是跌、急也沒用;我只要記得、別把今天這場雨、當成我的本事。' },

    { type: 'dialogue', character: 'customer-a', text: '師傅、敬這句。也幫我跟你老婆說:她問得對——破紀錄、可以替它高興一下;但先別急著全押、先看清楚這個高、是你的菜、還是那場雨。是菜、你踏實走;是雨、你留一手、等雨停了、看真本事還在不在。鮎真香、冷酒乾杯。' },

    { type: 'wait', duration: 500 },
    { type: 'move', character: 'chef', toTile: 'stove' },

    {
      type: 'narration',
      text: '禮拜五晚上、東京。上禮拜二、b 在這兒等的那個「明天才出來的數字」、出來了:美國七月物價 CPI、禮拜三公布、溫和降溫——年增 3.4%（從六月 3.5% 降）、核心 2.5%、月增 +0.1%。市場「鬆一口氣」、禮拜四美股三大指數同創歷史新高:S&P 500（7,798.99、+0.65%、首度站上 7,800）、Nasdaq（26,803.03、+0.81%、科技領漲）、Dow（53,839.99、+0.13%、最溫吞）;今天東京盤中亦跟漲、一度突破 69,000（尚在盤中、非收盤）。今晚 a 一個人來、把這個新高講穿:第一、「在歷史新高買最危險」是害人的直覺——一個往上走的市場本來就會一路破紀錄、破紀錄是常態、不是天花板;新高這個數字本身、不可怕。第二、也是關鍵——同一個新高、要分清「賺來的」還是「白給的」:賺來的、是公司真多賺、地基墊上去、踩的是水泥;白給的、是一個「本來很怕、結果沒那麼糟」的消息讓大家同時鬆口氣衝上來的、踩的是一口氣。今天這個、比較像白給:不是基本面變好、是那個涼掉的物價數字把「怕升息」暫時解開;而且它只是「沒有更壞」、不是「真的變好」——能源年增仍 +14.7%、汽油 +24.6%、通膨戰沒打完、只是這個月喘口氣（a:「一個月、不是一個方向」）。所以 a 的信心配比一分不動、還是七分半信二分半留;讓他想升到八分的、是一個「白給」的好消息、不是他自己賺到的看懂——塞給他的信心、他不敢當本錢。變的只有那「二分半留」裡的料:上禮拜是「怕通膨太燙」、今晚換成「怕大家太快把白給的高當賺來的追」。師傅用店懂了:他也有過「破紀錄」的晚上——隔壁臨時公休、又剛好下大雨、客人全擠他這兒、營業額破紀錄;他要是把那晚當實力、隔天狂進貨多請人、雨一停料就全爛在冰箱。那個破紀錄、就是「白給的高」（不是菜變好、是隔壁休息、天下雨送的）;所以創新高不用怕它高、要問的是「這個高、是我的菜真的變好、還是隔壁剛好休息」。順帶回扣 b:上禮拜她把手弄乾淨、留現金、勸住想賭數字的老客戶;現在數字出來、市場大漲、有人拍腿說早知道就賭了——但她賺的從來不是「這一把」、是「十年不出局」（賭中的人下一把可能還回去、她不賭、所以永遠還在桌上）。副線回扣 ep77/79:日圓這幾天沒再貶（~159.4、幾乎持平）、不是政府又撐、是有消息說日本央行九、十月可能真的升息——那個干預碰不到、讓日圓一直弱的「根」（利息太低）、終於可能有人要去動了;真動了、才是日圓真正止跌的理由（把地基墊高一階、不是請一晚樂團）。收在禮拜五的一桌:冷奴、鮎の塩焼き（今日便宜卻只拿平常的量、沒囤）、万願寺とうがらし焼き浸し、出汁巻き卵、真鯵のなめろう、締めに焼きおにぎりの出汁茶漬け、生ビール→冷酒——那尾「便宜卻不加碼」的鮎、正是「白給的低價、不能當賺來的去壓身家」的活教材。一句話落回巷子:高不高我不看、我只看這個高、是我菜真的變好、還是隔壁剛好下雨;是雨、我就留一手、絕不趁雨加碼。',
      duration: 6000,
    },
  ],
};
