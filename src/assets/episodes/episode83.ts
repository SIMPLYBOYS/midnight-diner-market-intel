import type { Episode } from '../../engine/types';

/**
 * Sources verified 2026-08-19 (Wed, Tokyo) — 「同樣是股票、為什麼晶片摔六倍」：
 * ep82 (Tue 8/18) A solo 講「利率＝借錢的租金、錢整體變貴、一體兩面」。Tonight
 * (Wed 8/19) B solo picks a DELIBERATELY new, MICRO spine that sits one layer
 * BELOW ep82's macro: 昨晚美股同樣被『錢變貴』按下去、可是內部分化極大——Nasdaq
 * −1.33% vs Dow −0.22%、同一天差了六倍。WHY?「久期／等多久才回本」:一家公司值多少
 * ＝把它「以後」會賺的錢折回今天算;錢一貴、越遠的錢被折得越狠。晶片/AI＝賺頭大半在
 * 很久以後（還在燒錢蓋廠、畫大餅）→ 被修理最重;道瓊老牌＝今天當下就在賺錢、發股利
 * → 相對抗跌。B 的 desk/行為面:今天電話被打爆、往來 15 年老客戶（AI/晶片重倉、ep48
 * 想砍韓國 AI 被勸住、ep61 想全壓被勸回分批）又慌了想全砍、B 勸住;VIX 才 15.84（低）
 * ——「盤面沒很恐慌、我的電話很恐慌」散戶情緒先炸。爸爸名言「計畫內的後悔叫成本、計畫
 * 外的才叫災難」(ep61);自我定位「我的工作是裝減震器」(ep61)。B 不猜晶片明天反彈、
 * 只把客戶的手扶好。
 *
 * DATE: verified before writing, NOT trusted from the box clock (it has drifted
 * ~3wk before). WebSearch (TheStreet/Yahoo/CNBC 8/18 live blogs + market-open
 * status) confirms today = Wed 2026-08-19. Sequence: ep80=8/14, ep81=8/16(Sun),
 * ep82=8/18(Tue), ep83=8/19(Wed).
 *
 * TIMEZONE (guardrail 4): authored ~12:00 JST Wed 8/19. Tokyo closes 15:00 JST →
 * TODAY's (Wed 8/19) Tokyo session had NOT closed at authoring time; US Wed 8/19
 * session had NOT opened (opens ~22:30 JST). So NO 8/19 close is quoted anywhere.
 * Anchor = the most-recent COMPLETED session = the OVERNIGHT US Tue 8/18 close
 * (the sanctioned「已確認的隔夜美股」option). No Tokyo row this time (Wed close
 * unavailable — deliberately omitted, not fabricated).
 *
 * — US (Tue 8/18 close, the overnight anchor — chains exactly off ep82's Mon 8/17
 *   closes, all endpoints cross-checked): S&P 500 7,691.76 (−53.30, −0.69% off
 *   7,745.06); Nasdaq 26,289.71 (−355.20, −1.33% off 26,644.91); Dow 53,343.40
 *   (−116.38, −0.22% off 53,459.78). The tell is the DISPERSION: Nasdaq fell ~6×
 *   harder than the Dow. Chip rout led it — Nvidia −2%+, Intel −6%, Micron −5%,
 *   SanDisk −6%, SK Hynix −6%, Marvell −6%, Seagate −6%, Applied Materials −5%.
 *   Backdrop (ep82's yield story, taken as GIVEN here — not re-explained): US
 *   30-yr Treasury yield ~5.29%, near a 19-yr high (AI borrowing spree + govt
 *   issuance + rising oil lifting global yields); Brent ~USD91 / WTI ~USD84. VIX
 *   15.84 (+0.65, +4.28%) — headline vol LOW even as single chips dumped 5–6%
 *   (feeds B's「大盤沒很恐慌、我的電話很恐慌」). (TheStreet/Yahoo/CNBC 8/18 blogs.)
 *
 * — sectors[].value = |%change|×100 of that row's indicator asset, reference = the
 *   Tue 8/18 US close. Real-% rows: Nasdaq −1.33% (133 — tech/chip-heavy, hit
 *   hardest: the duration story), S&P −0.69% (69), Dow −0.22% (22 — old-economy,
 *   most resilient). 133 vs 22 = the 6× dispersion, drawn to scale. The STORY (WHY)
 *   rides the grey value:0 CONTEXT row (ep68/79/80/81/82 convention): the chip
 *   carnage + VIX 15.84 + 30-yr ~5.29% + Brent ~USD91 — levels/facts, not a single
 *   scalable %.
 * — priceHistory = S&P off ep82's Mon 8/17 close into Tue 8/18: 7,745.06 → 7,691.76
 *   (both endpoints real; interior bars mood-shape Tuesday's drift). volumeHistory
 *   ticks up into the chip dump (mood). vix 15.84 is REAL (sourced); volatility 16
 *   tracks the low headline vol; rsi 46 (soft after a tech-led down day) / beta 1.0
 *   are mood, not sourced; the closes ARE real.
 *
 * — CAST: running tally through ep82 = A:10, B:10. Tonight CUSTOMER B SOLO
 *   (→ A:10, B:11 — B one ahead; NEXT episode should be A to rebalance). Alternates
 *   cleanly B(81)/A(82)/B(83) — no back-to-back. The topic — 個股分化、久期、客戶
 *   恐慌、減震器 — is B's tactical / short-signal / desk-and-client turf (我們 desk、
 *   波動、散戶情緒指數、往來 15 年老客戶、爸爸名言), a deliberately DIFFERENT
 *   voice+topic from ep82's macro framework (A). B references A ONLY as a fellow
 *   regular (昨天 a 在這講「利率＝借錢的租金」)——INDEPENDENT regulars, no shared
 *   desk / no joint position (CONTINUITY DEBT guardrail): 「他看大方向、我看客戶的
 *   手」. Personas: B female, 我先生(NOT 老公/太太)、有小孩(先生今晚顧)、爸爸退休
 *   金融人;「計畫內的後悔叫成本、計畫外的才叫災難」、「我的工作是裝減震器」。
 *   CHEF layman — 久期/久期折現/晶片為何摔更重 all get plain-word translation, 老闆
 *   not employee, 我老婆(退休總機、存了一輩子的定存族、ep82 剛問過「好是壞」). Wife's
 *   entry: 看新聞問「同樣都是股票、電視一直講科技股晶片股大跌、可是道瓊那些老牌公司
 *   幾乎沒事——都是股票、差在哪?」CHEF 自己的落點:冰庫壓一批熟成三年的味噌 vs 攤上
 *   今晚就賣掉的熱食——錢一貴、壓在三年的成本比壓在今晚回收的貴多了。
 * — Menu: Wednesday, late-summer→early-autumn, B present, distinct from ep77-82 —
 *   枝豆、冷奴(生姜葱たっぷり)、鶏の唐揚げ(レモン)、とうもろこしの天ぷら(晚夏甜玉米、
 *   走味)、しめじと舞茸のバター醤油(初秋きのこ、季節在轉的一味)、締めにきのこの
 *   炊き込みご飯と味噌汁、生ビール一杯→温かいほうじ茶(她只喝一杯、等下還要接客戶
 *   電話、「減震器自己先不能晃」——thematic). No Polymarket (none read — not fabricated).
 */
export const EPISODE_83: Episode = {
  id: 'ep-83',
  date: '2026-08-19',
  title: '20260819 禮拜三晚上、東京——昨晚美股同樣被「錢變貴」按下去、可是內部分化極大:Nasdaq 收 26,289.71（−1.33%）、道瓊只收 53,343.40（−0.22%），同一天、同樣是股票、差了六倍。b 一個人來（先生今晚顧小孩）。核心:差在「等多久才回本」——一家公司值多少、是把它以後會賺的錢折回今天算;錢一變貴、越遠的錢被折得越狠。晶片、AI 這種賺頭大半在很久以後的（還在燒錢蓋廠），被修理最重（Intel −6%、Micron −5%、SK Hynix −6%、Nvidia −2%+）;道瓊那種今天當下就在賺錢、發股利的老牌公司、相對抗跌。b 的 desk 面:電話被打爆、往來 15 年的老客戶又慌了想全砍、她勸住;VIX 才 15.84（低）——「盤面沒很恐慌、我的電話很恐慌」散戶情緒先炸。她不猜晶片明天反彈、只把客戶的手扶好——她爸那句「計畫內的後悔叫成本、計畫外的才叫災難」、她自己那句「我的工作是裝減震器」。S&P 8/18 收 7,691.76（−0.69%）。承接 ep82：a 昨天講「錢為什麼變貴」、b 今天接著講「錢一貴、為什麼有的股票摔得比別的重」',
  description: '禮拜三晚上、東京、小巷子裡。師傅的老婆又看新聞、抬頭問他:老公、我不懂——電視一直在講「科技股、晶片股大跌」，可是同一節新聞、又說「道瓊那些老牌公司幾乎沒事」。都是股票啊、怎麼會差這麼多?師傅照樣答不出來——昨天才被 a 用「利率就是借錢的租金」講到很晚、今天老婆又換了個角度問。今晚 b 一個人來（先生今晚顧小孩、她落得空）。她說:你老婆問的、正是我今天一整天在滅火的那件事。先把昨晚美股講白:同樣被「錢變貴」按下去、可是 Nasdaq 跌了一趴三、道瓊只跌零點二——同一天、同樣是股票、差了六倍。差在哪?差在「這家公司的賺頭、要等多久才回本」。b 把它講到最白:一家公司今天值多少、其實是把它「以後」會賺的錢、全部折回今天來算;錢一變貴、那個「折回來」就打得更兇——而且越遠的錢、被折得越狠。晶片、AI 這種公司、好處大半在很久很久以後（現在還在燒錢蓋廠、畫大餅、賺頭在三五年後）、所以錢一貴、被修理得最重——昨晚 Intel 跌六趴、Micron、Applied Materials 跌五趴、SK Hynix、Marvell 跌六趴、連 Nvidia 都跌了兩趴多;而道瓊裡那種今天當下就在賺錢、每季發股利的老牌公司、賺頭在眼前、比較不怕錢變貴、就相對站得住。師傅用他的冰庫懂了:他壓著一批要熟成三年的味噌、跟攤上今晚就賣掉的熱食——錢一變貴、壓在味噌裡那三年的成本、比壓在今晚就回收的熱食貴多了。b 說對、就是這個。而 b 今天真正在忙的、不是猜晶片明天會不會反彈——是她 desk 的電話被打爆:她那位往來十五年的老客戶（重壓 AI 跟晶片、上次想砍韓國 AI 被她勸住、後來又想全壓也被她勸回分批）今天又慌了、傳訊息說「全砍掉」。她把他勸住。妙的是、大盤的恐慌指數 VIX 才十五點八、根本不算高、只彈了四趴——「盤面沒有很恐慌、可是我的電話很恐慌」、散戶的情緒、比大盤先炸。b 想起她爸的一句話——「計畫內的後悔、叫成本;計畫外的、才叫災難」:你當初分批進場、是計畫、今天跌、是計畫內的、忍住;真正的災難、是你現在計畫外地、在地板上把它全砍了。她說、她這行真正的價值不是預測未來、是幫客戶在恐慌時不做傻事——「人的情緒是放大器、我的工作、是裝減震器。」她也幫昨天的 a 補了一句:他看的是大方向（錢為什麼變貴）、她看的是客戶的手（錢一貴、誰的手會先抖）——兩個人在這桌各看一面、不是同一家公司的同事、是各自獨立的常客。收在禮拜三一桌當令的:枝豆、冷奴（生姜と葱たっぷり）、鶏の唐揚げ配檸檬、とうもろこしの天ぷら（晚夏甜玉米、走味了）、しめじと舞茸のバター醤油（初秋的菇、季節在轉就這一味）、締めにきのこの炊き込みご飯と味噌汁。b 只喝一杯生的、就換温かいほうじ茶——「我等下可能還要接客戶電話、我的工作是裝減震器、自己先不能晃。」一句話落回巷子:錢變貴的第一課、不是誰漲誰跌、是「誰經得起等」——賺頭在眼前的、站得住;賺頭在很遠很遠以後的、先被搖下來。',
  actions: [
    { type: 'bgm', track: 'chill-lofi', command: 'play' },

    {
      type: 'narration',
      text: '禮拜三晚上、東京、小巷子裡。師傅的老婆又看著新聞、抬頭問他:老公、我不懂——電視一直在講「科技股、晶片股大跌」、可是同一節新聞、下一句又說「道瓊那些老牌公司幾乎沒事」。都是股票啊、怎麼會差這麼多?師傅照樣答不出來;昨天才被 a 用「利率就是借錢的租金」講到很晚、今天老婆又換了個角度問。今晚、b 一個人來（先生今晚顧小孩）;這一次、要從「同樣被錢變貴按下去、為什麼有的股票摔得比別的重六倍」講起。',
      duration: 6000,
    },

    {
      type: 'market-data',
      data: {
        tickers: [
          { symbol: 'Nasdaq（隔夜 8/18 收 26,289.71、−355.20、−1.33%——三大裡跌最兇;晶片股領跌:Intel −6%、Micron −5%、SK Hynix −6%、Marvell −6%、Applied Materials −5%、Nvidia −2%+）', price: 26289.71, change: -1.33 },
          { symbol: 'S&P 500（隔夜 8/18 收 7,691.76、−53.30、−0.69%;自禮拜四新高一路回落到第三個交易日）', price: 7691.76, change: -0.69 },
          { symbol: 'Dow（隔夜 8/18 收 53,343.40、−116.38、−0.22%——三大裡最抗跌:老牌、今天當下就在賺錢的那些）', price: 53343.40, change: -0.22 },
        ],
        volatility: 16,
        vix: 15.84,
        rsi: 46.0,
        beta: 1.0,
        priceHistory: [7745.06, 7738, 7730, 7722, 7715, 7708, 7699, 7691.76],
        volumeHistory: [1200, 1180, 1260, 1240, 1320, 1300, 1400, 1450],
        sectors: [
          { label: 'Nasdaq −1.33%（隔夜 8/18 收 26,289.71;科技/晶片重、賺頭在很久以後——錢一變貴、被修理最重）', value: 133, color: '#dd3333' },
          { label: 'S&P 500 −0.69%（隔夜 8/18 收 7,691.76、−53.30）', value: 69, color: '#dd3333' },
          { label: 'Dow −0.22%（隔夜 8/18 收 53,343.40、−116.38——今天當下就在賺錢、發股利的老牌、相對站得住）', value: 22, color: '#dd8833' },
          { label: '今天的重點是「分化」不是「跌多少」:同一天、Nasdaq 跌一趴三、道瓊只跌零點二、差六倍——差在「等多久才回本」。昨晚晶片個股:Intel −6%、Micron −5%、SK Hynix −6%、Marvell −6%、Applied Materials −5%、Nvidia −2%+。背景（承 ep82、當給定）:美國三十年期公債殖利率約 5.29%、近 19 年高;布蘭特原油約 91 美元。而 VIX 只有 15.84（+4%、絕對值低）——大盤沒很恐慌、可是散戶情緒先炸', value: 0, color: '#888888' },
        ],
        headline: '週三 20:00 JST（東京、夜裡）：昨晚美股同樣被「錢變貴」按下去、可是內部分化極大——Nasdaq 26,289.71（−1.33%）跌最兇、道瓊 53,343.40（−0.22%）最抗跌、同一天差六倍;S&P 7,691.76（−0.69%） / 差在「等多久才回本」:公司今天值多少＝把它以後會賺的錢折回今天算、錢一貴、越遠的錢折得越狠——晶片/AI 賺頭在很久以後、被修理最重（Intel −6%、Micron −5%、SK Hynix −6%、Nvidia −2%+），道瓊那種今天就在賺錢的老牌相對站得住 / B 的 desk：往來 15 年老客戶又慌了想全砍、被勸住;VIX 才 15.84——「盤面沒很恐慌、我的電話很恐慌」散戶情緒先炸 / 承 ep82：a 講「錢為什麼變貴」、b 接著講「錢一貴、為什麼有的股票摔得比別的重」',
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
    { type: 'dialogue', character: 'chef', text: 'いらっしゃい、b。一個人啊、先生今天顧小孩?先來杯生的。欸、正好、我又被我老婆問倒了——昨天才被 a 一個人講「利率就是借錢的租金」講到半夜、今天她看新聞、又換個角度問我:老公、我不懂、電視一直在講「科技股、晶片股大跌」、可是同一節新聞、下一句又說「道瓊那些老牌公司幾乎沒事」。她問我:都是股票啊、怎麼會差這麼多?我又是張著嘴、答不出來。' },

    { type: 'move', character: 'customer-b', toTile: 'random-stool' },
    { type: 'sit', character: 'customer-b' },

    { type: 'dialogue', character: 'customer-b', text: '師傅、晚安、生的先來一杯就好、我今天可能還得盯客戶。你老婆問的、正是我今天一整天在滅火的那件事。我先把昨晚美股講白:昨晚它們是被同一隻手按下去的、就是 a 昨天講的「錢變貴」;可是你去看內部——Nasdaq、就是科技股多的那個、跌了一趴三;道瓊、老牌公司多的那個、只跌零點二。同一天、同樣是股票、差了六倍。你老婆眼睛很利、她看到的、就是今天全場最重要的一件事——今天的重點、不是「跌多少」、是「分化」。' },

    { type: 'move', character: 'chef', toTile: 'stove' },
    { type: 'wait', duration: 400 },

    { type: 'dialogue', character: 'chef', text: '差六倍?都是股票、又不是我這鍋不同的湯——差在哪啊?難不成晶片那些公司、昨天出了什麼壞消息、道瓊那些沒有?' },

    { type: 'dialogue', character: 'customer-b', text: '沒有、都沒出壞消息、這才是重點。差在一件事:「這家公司的賺頭、要等多久、才回得了本。」師傅我這樣講:一家公司今天值多少、其實是把它「以後」會賺的錢、全部折回今天來算。錢一變貴、那個「折回來」就打得更兇——而且越遠的錢、被折得越狠。晶片、AI 這種公司、好處大半在很久很久以後——現在還在燒錢蓋廠、畫大餅、真正大賺是三年五年後的事;所以錢一貴、它們被修理得最重。道瓊裡那種、今天當下就在賺錢、每一季都發股利的老牌公司、賺頭就在眼前、比較不怕錢變貴、就相對站得住。' },

    { type: 'dialogue', character: 'chef', text: '等等、你這樣講我好像懂了——我冰庫裡、壓著一批要熟成三年的味噌;跟我攤上今晚就賣掉的熱食。錢要是變貴、我壓在那批味噌裡三年的本錢、成本就比壓在今晚就收得回來的熱食、貴多了對不對?那批味噌、就是你說的「晶片」;今晚的熱食、就是「道瓊」?' },

    { type: 'dialogue', character: 'customer-b', text: '師傅、你這比我一整天講給客戶聽的都清楚。就是這個——錢一貴、壓得越久的、越吃虧。所以昨晚晶片那一排、跌得慘:Intel 跌六趴、Micron、Applied Materials 跌五趴、SK Hynix、Marvell 也是六趴、連最大尾的 Nvidia 都跌了兩趴多。不是它們一夜變壞、是「要等很久才回本」這件事、昨天最不值錢。你那批味噌沒壞、只是這種時候、壓在裡面的錢、突然變重了。' },

    { type: 'sfx', sound: 'chimes' },
    { type: 'wait', duration: 400 },

    { type: 'dialogue', character: 'chef', text: '原來如此……那你今天一整天、就在忙這個?你不是要趕快幫客戶把那些晶片賣一賣、還是反過來叫他們趁跌撿?' },

    { type: 'dialogue', character: 'customer-b', text: '兩個我都沒做、師傅。我今天在做的、是把手扶好。我有個往來十五年的老客戶、重壓 AI 跟晶片——上次他想砍韓國那批 AI、我勸住了;後來又想整個全壓進去、我又把他勸回來分批。今天晶片一崩、他一大早就傳訊息給我:「全砍掉。」我把他勸住了。你知道最妙的是什麼?昨晚大盤那個恐慌指數 VIX、才十五點八、根本不算高、只彈了四趴——盤面上、沒有很恐慌;可是我的電話、很恐慌。散戶的情緒、永遠比大盤先炸。' },

    { type: 'dialogue', character: 'chef', text: '你那個老客戶、都往來十五年了、還這麼慌喔?那你怎麼勸他的、總不能只講「別怕」吧。' },

    { type: 'dialogue', character: 'customer-b', text: '我沒講別怕、我講我爸的一句話。我爸做了三十年這行、他說:「計畫內的後悔、叫成本;計畫外的、才叫災難。」我跟老客戶講:你當初是分批進場的、對吧?那今天跌、是你計畫裡就想到的、這叫成本、忍住;真正的災難、是你現在計畫外地、在地板上、把它一次全砍了。師傅、我這行真正的價值、從來不是預測明天晶片會不會反彈——我猜不到、沒人猜得到;我的價值、是幫客戶在恐慌的時候、不做傻事。人的情緒是放大器、我的工作、是裝一個減震器。' },

    { type: 'wait', duration: 400 },
    { type: 'move', character: 'chef', toTile: 'counter-center' },
    { type: 'dialogue', character: 'chef', text: '減震器、這個好、我懂——鍋子晃、湯才會潑;手穩、湯就穩。好、你講到這、也該餓了、我配當令的給你:先來一把枝豆;冷奴、生姜跟葱給你鋪滿;鶏の唐揚げ、擠點檸檬;とうもろこしの天ぷら、晚夏最後這幾根甜玉米、走味了、再不吃就沒了;還有這一味——しめじと舞茸、バター醤油一炒、初秋的菇、季節在轉、就這一味最香;締めに、給你一碗きのこの炊き込みご飯、配味噌汁。生的先喝、待會兒要不要幫你換冷酒?' },

    { type: 'dialogue', character: 'customer-b', text: '師傅、冷酒今天先不用了、幫我泡杯溫的ほうじ茶就好——我等下可能還要接客戶電話、我的工作是裝減震器、自己先不能晃。菇很香、謝謝。對了、幫我跟昨天的 a 補一句:他看的是大方向——錢為什麼變貴;我看的、是客戶的手——錢一貴、誰的手會先抖。我們兩個在你這桌、剛好各看一面、不是同一家公司的同事、就是各自來吃飯、順便對一下。今晚這一課、我會記著:錢變貴的第一課、不是誰漲誰跌、是「誰經得起等」——賺頭在眼前的、站得住;賺頭在很遠很遠以後的、先被搖下來。你那批味噌、慢慢熟、別急。' },

    { type: 'wait', duration: 500 },
    { type: 'move', character: 'chef', toTile: 'stove' },

    {
      type: 'narration',
      text: '禮拜三晚上、東京、夜裡。昨晚美股同樣被「錢變貴」按下去、可是內部分化極大:Nasdaq 收 26,289.71（−355.20、−1.33%、三大裡跌最兇、晶片股領跌——Intel −6%、Micron −5%、SK Hynix −6%、Marvell −6%、Applied Materials −5%、連 Nvidia 都跌了兩趴多）;道瓊卻只收 53,343.40（−116.38、−0.22%、最抗跌）;S&P 500 收 7,691.76（−53.30、−0.69%）。同一天、同樣是股票、Nasdaq 跌一趴三、道瓊只跌零點二、差了六倍——今天的重點不是「跌多少」、是「分化」。b 一個人來、把這件事講穿:差在「這家公司的賺頭、要等多久才回本」。一家公司今天值多少、是把它以後會賺的錢、折回今天來算;錢一變貴、那個折回來就打得更兇、而且越遠的錢、被折得越狠。晶片、AI 這種賺頭大半在很久以後（還在燒錢蓋廠、畫大餅）的公司、被修理最重;道瓊那種今天當下就在賺錢、每季發股利的老牌公司、賺頭在眼前、相對站得住。師傅用他的冰庫懂了:壓一批熟成三年的味噌、跟攤上今晚就賣掉的熱食——錢一貴、壓在味噌裡三年的成本、比壓在今晚就回收的熱食貴多了。而 b 今天真正在忙的、不是猜晶片明天反彈——是把客戶的手扶好:她往來十五年的老客戶（重壓 AI 晶片）今天又慌了想全砍、被她勸住;大盤恐慌指數 VIX 才十五點八、根本不高、可是她的電話很恐慌——散戶情緒比大盤先炸。她想起爸爸那句「計畫內的後悔叫成本、計畫外的才叫災難」:分批進場是計畫、今天跌是計畫內、忍住;計畫外地在地板上全砍、才是災難。她說她這行的價值不是預測未來、是幫客戶在恐慌時不做傻事——「人的情緒是放大器、我的工作是裝減震器。」她也幫昨天的 a 補了一句:他看大方向（錢為什麼變貴）、她看客戶的手（錢一貴、誰先抖）——各看一面、是各自獨立的常客、不是同一家公司的同事。收在禮拜三一桌當令的:枝豆、冷奴（生姜と葱たっぷり）、鶏の唐揚げ配檸檬、とうもろこしの天ぷら（晚夏最後的甜玉米、走味了）、しめじと舞茸のバター醤油（初秋的菇、季節在轉就這一味）、締めにきのこの炊き込みご飯と味噌汁;b 只喝一杯生的、就換温かいほうじ茶——「我等下還要接客戶電話、減震器自己先不能晃。」一句話落回巷子:錢變貴的第一課、不是誰漲誰跌、是「誰經得起等」——賺頭在眼前的、站得住;賺頭在很遠很遠以後的、先被搖下來。',
      duration: 6000,
    },
  ],
};
