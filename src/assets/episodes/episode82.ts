import type { Episode } from '../../engine/types';

/**
 * Sources verified 2026-08-18 (Tue, Tokyo evening) — 「錢的租金、幾十年最高」：
 * ep80 (Fri 8/14) A =「賺來的高 vs 白給的高」; ep81 (Sun 8/16) B =「屋頂新高、
 * 地基滲水」(股市 vs 一般人消費). Tonight (Tue 8/18) picks a DELIBERATELY new
 * spine — not the record, not the consumer: 利率（政府借錢的成本）爬到幾十年沒
 * 見過的高，這才是今天壓垮股票的手。A's turf (歷史對照、冷靜推理、framework):
 * 利率＝「借錢要付的租金」;政府是全世界最安全的借錢人、連它租錢都付幾十年最高的
 * 租金 → 代表「錢」整體變貴 → (1) 靠借錢運轉的都變重（房貸、公司擴張、店家裝修）
 * (2) 安全的存款/債券利息變香、錢不必冒險買股票、股票相對吸引力被比下去 → 所以
 * 沒有哪家公司出壞消息、日經還是跌 1.62%。A 的 framework：新事件（利率認真往回
 * 走）進來時、他調的是「留」的內容、不動湯底——七分半信、二分半留;這回那二分半、
 * 留給「利息可能回不去了」這個劇本（scenario completeness beats directional
 * accuracy）。落點: 師傅老婆存了一輩子的定存（30 年當總機的存錢族）、日本利息幾十年
 * 是零、現在要回來——對存錢的是好事、對借錢的變緊,一體兩面。
 *
 * DATE: verified before writing, NOT trusted from the box clock (it has drifted
 * ~3wk before). WebSearch (CNBC/Bloomberg/Yahoo/TheStreet 8/17–8/18 live blogs)
 * confirms today = Tue 2026-08-18. Sequence: ep78=8/9, ep79=8/11, ep80=8/14,
 * ep81=8/16(Sun), ep82=8/18(Tue).
 *
 * TIMEZONE (guardrail 4): Tue Tokyo evening (~20:00 JST). Tokyo market CLOSED at
 * 15:00 JST → today's Nikkei 8/18 close IS real/completed. US Tue 8/18 session has
 * NOT opened yet (opens ~22:30 JST) → US anchor = the most-recent COMPLETED US
 * session = Mon 8/17 close (overnight). No fabricated US "today close".
 *
 * — US (Mon 8/17 close, the overnight anchor): S&P 500 7,745.06 (−40.70, −0.52%
 *   off Fri's 7,785.76); Nasdaq 26,644.91 (−84.25, −0.32%); Dow 53,459.78
 *   (−272.63, −0.51%). Cause: US-Iran war fears reignited (a US–Iran MOU expired
 *   Mon; Brent crude hit ~$90 after Trump said he doesn't see the war ending soon)
 *   + the US 30-year Treasury yield hit its highest since 2007. Retail earnings
 *   also loom this week. (Yahoo/TheStreet/CNBC/Bloomberg 8/17)
 *
 * — TOKYO (Tue 8/18 close, TODAY's completed session): Nikkei 225 68,098.54
 *   (−1,121.71, −1.62%) — reversed Mon's gains (prior close 69,220.25) as GLOBAL
 *   BOND YIELDS surged. Japan's 10-yr JGB yield climbed to ~2.95%, its highest in
 *   THREE DECADES, on fiscal concerns + growing expectations of an imminent BOJ
 *   rate hike. Broad-based: Tokyo Electron −2.9%, Advantest −1.7%, Fast Retailing
 *   −1.3%, Nintendo −2.4%. (Trading Economics / Investing.com 8/18)
 *
 * — sectors[].value = |%change|x100 of that row's indicator asset, reference =
 *   the anchor session for that asset (US = Mon 8/17 close, Nikkei = Tue 8/18
 *   close). Real-% rows: S&P −0.52% (52), Nasdaq −0.32% (32), Dow −0.51% (51),
 *   Nikkei −1.62% (162 — today's Tokyo, fell hardest: the yield story hit Japan
 *   directly). The STORY is the WHY, carried by the grey value:0 CONTEXT row
 *   (ep68/79/80/81 convention): 利率/殖利率 levels — US 30-yr yield 2007-high,
 *   Japan 10-yr ~2.95% 30-yr high, Brent ~$90 — levels/facts, not scalable %.
 * — priceHistory = S&P off the record and lower: Fri 8/14 close 7,785.76 → Mon
 *   8/17 close 7,745.06 (both endpoints real; interior bars mood-shape Monday's
 *   intraday drift). volumeHistory ticks up into the risk-off (mood). vix 17.5
 *   (up from ep81's 15.5 — pullback + geopolitics + yields) / rsi 52 (neutral
 *   after two down days) / beta 1.0 are mood, not sourced; the closes ARE real.
 *
 * — CAST: running tally through ep81 = A:9, B:10. Tonight CUSTOMER A SOLO
 *   (→ A:10, B:10 — rebalanced). Alternates cleanly B(81)/A(82). The topic —
 *   利率/政府借錢成本、幾十年高點、利率大方向在轉、備劇本不猜方向 — is A's
 *   analytical / historical-perspective / framework turf (七分半信二分半留 ep49-60,
 *   「鈍化」「scenario completeness beats directional accuracy」, 我們桌上/我同事),
 *   a deliberately DIFFERENT voice+topic from ep80 (his earned/gifted-high solo)
 *   and ep81 (B's consumer/sentiment solo). A references B only as a fellow regular
 *   (上禮拜天 b 在這講「屋頂新高、地基滲水」) — INDEPENDENT regulars, no shared
 *   desk / no joint position (CONTINUITY DEBT guardrail). Personas: A male, 太太
 *   (箱根 self-graduation test 6月), 我們桌上/我同事(有年輕同事沒嚐過高利率), JetBlue
 *   老同學, framework 調「留」不動湯底. CHEF layman — 利率/殖利率/借錢的租金 all get
 *   plain-word translation, 老闆 not employee, 我老婆(退休總機、存了一輩子的定存族),
 *   師父(「備料備到有剩才是本事、丟掉的備料是保險費」maps to A 的「留」/保險). Wife's
 *   entry: 週間看新聞問「日本利率漲到三十年最高、政府借錢變貴」——我們存錢的利息會變
 *   多、聽起來是好事;可是同一台電視下一段又說「借錢變貴、股票大跌、大家日子更難」——
 *   到底是好是壞?
 * — Menu: Tuesday, late-summer→early-autumn, A present, distinct from ep77-81 —
 *   冷やしトマト、茄子の揚げ浸し、秋刀魚の塩焼き(今年初物——晚夏轉初秋的季節味、
 *   「幾十年才轉一次的利率季」的活比喻)、だし巻き卵、里芋の煮っころがし、締めに
 *   温かい蕎麦、生ビール→冷酒. No Polymarket (none read — not fabricated).
 */
export const EPISODE_82: Episode = {
  id: 'ep-82',
  date: '2026-08-18',
  title: '20260818 禮拜二晚上、東京、傍晚收市後——今天壓垮股票的、不是哪家公司出事、是「利率」:政府借錢的成本爬到幾十年沒見過的高。日本十年期公債殖利率衝到約 2.95%、三十年來最高（財政疑慮＋市場預期日本央行快升息），東京日經今天收 68,098.54（−1,121.71、−1.62%、把昨天的漲全吐回去）;隔夜美股也被同一隻手按下去——美國三十年期公債殖利率創 2007 以來最高、加上美伊緊張、布蘭特原油站上 $90，S&P 8/17 收 7,745.06（−0.52%）、Nasdaq 26,644.91（−0.32%）、Dow 53,459.78（−0.51%）。a 一個人來。核心:利率＝「借錢要付的租金」;政府是全世界最安全的借錢人、連它租錢都付幾十年最高的租金、代表「錢」整體變貴了——靠借錢運轉的都變重、安全的利息變香、股票的相對吸引力被比下去。a 的紀律:利率大方向在轉、比今天跌幾趴重要;不猜方向、備劇本——七分半信、二分半留、那二分半留給「利息可能回不去了」。落點:師傅老婆存了一輩子的定存、日本利息幾十年是零、現在要回來——對存錢的好、對借錢的緊、一體兩面',
  description: '禮拜二晚上、東京、傍晚剛收市。師傅的老婆看新聞、抬頭問他:老公、電視說日本的利率漲到「三十年最高」、政府借錢變貴了——我們存錢的、利息不是會變多嗎、聽起來像好事;可是同一台電視、下一段又說「借錢變貴、股票大跌、大家日子更難過」。到底是好是壞?師傅又答不出來。今晚 a 一個人來（太太回娘家幾天）。他說:你老婆又問到今天的正中央了。今天全世界市場被同一隻手按下去——不是哪家公司出事、是「利率」。a 把它講白:利率、就是「借錢要付的租金」;而今天最大條的、是政府借錢的租金、爬到幾十年沒見過的高——日本十年期公債殖利率衝到約 2.95%、三十年來最高;美國最長的三十年期、2007 年以來最高。政府是全世界最安全的借錢人（最不會倒的房客）、連它租錢都得付這麼高的租金、就代表「錢」這個東西整體變貴了。兩個後果:一、靠借錢運轉的都變重——房貸、公司擴張、店家裝修、進貨周轉;二、安全的存款和債券利息變香了、錢就不必冒險去買股票、股票的「相對吸引力」被比下去——所以今天沒有哪家公司出壞消息、東京日經還是跌了一趴六（收 68,098.54）、隔夜美股也一起低頭（S&P 7,745.06、−0.52%;還疊了美伊緊張、油價站上 90 美元）。而這件事、是一體兩面:對師傅老婆這種存了一輩子的人、利息回來是好事——日本這利息、幾十年是零、現在要回來、她的定存以後會多幾個錢;對借錢的人、卻是變緊。a 的看法不是喊買喊賣:他做這行看了快一個世代、利率從高一路走到低、走了二十幾年;今天、是他職涯裡第一次、看到它認真地往回走。這種「大方向在轉」、比今天跌幾趴重要太多。他不猜方向、他備劇本——那個他一直在調的信心配比、七分半信、二分半留;他不動湯底、動的是「留」的內容;這回那二分半、留給一個劇本:「萬一、利息真的回不去了。」師傅用他的店懂了:他當年裝修借過錢、進貨旺季要調頭寸、那個「多還的部分」就是利率;他師父有句話——「備料備到有剩才是本事、丟掉的備料、是保險費」——留著沒用到不虧、那是保平安的、跟 a 那「留二分半」是同一個意思。a 也幫上禮拜天 b 的話補了一根:b 講「屋頂新高、地基滲水」（股價 vs 消費）;今天連「蓋房子借的錢」都變貴了——屋頂、地基之外、還有一根柱子在漲，同一棟房子、幾個人各看一面。收在禮拜二一桌當令的:冷やしトマト、茄子の揚げ浸し、秋刀魚の塩焼き（今年初物、晚夏轉初秋就這一味）、だし巻き卵、里芋の煮っころがし、締めに温かい蕎麦、生ビール→冷酒。一句話落回巷子:利率也像這尾秋刀魚、幾十年才轉一次季;市場上一半的人、根本沒嚐過「利息很貴」是什麼味道——這種時候、老師傅的舌頭、比新工具準。',
  actions: [
    { type: 'bgm', track: 'chill-lofi', command: 'play' },

    {
      type: 'narration',
      text: '禮拜二晚上、東京、小巷子裡、傍晚剛收市。師傅的老婆看著新聞、抬頭問他:老公、電視說日本的利率漲到「三十年最高」、政府借錢變貴了——我們存錢的、利息不是會變多嗎、聽起來像好事;可是同一台電視、下一段又說「借錢變貴、股票大跌、大家日子更難過」。到底是好是壞?師傅又答不出來。今晚、a 一個人來（太太回娘家幾天）;這一次、要從「今天壓垮股票的、根本不是哪家公司」講起——是「利率」、是政府借錢的成本、爬到了幾十年沒見過的高。',
      duration: 6000,
    },

    {
      type: 'market-data',
      data: {
        tickers: [
          { symbol: '日經 225（8/18 今日收 68,098.54、−1,121.71、−1.62%——把昨天的漲全吐回去;不是哪家公司出事、是全球公債殖利率一起飆、日本十年期衝到約 2.95% 三十年最高）', price: 68098.54, change: -1.62 },
          { symbol: 'S&P 500（隔夜 8/17 收 7,745.06、−40.70、−0.52%;美伊緊張＋油價站上 $90＋美國三十年期公債殖利率創 2007 以來最高）', price: 7745.06, change: -0.52 },
          { symbol: 'Nasdaq（隔夜 8/17 收 26,644.91、−84.25、−0.32%）', price: 26644.91, change: -0.32 },
          { symbol: 'Dow（隔夜 8/17 收 53,459.78、−272.63、−0.51%）', price: 53459.78, change: -0.51 },
        ],
        volatility: 20,
        vix: 17.5,
        rsi: 52.0,
        beta: 1.0,
        priceHistory: [7785.76, 7778, 7771, 7764, 7758, 7752, 7748, 7745.06],
        volumeHistory: [1150, 1120, 1200, 1180, 1260, 1240, 1330, 1380],
        sectors: [
          { label: '日經 225 −1.62%（8/18 今日收 68,098.54、−1,121.71;三大裡跌最兇——利率的手直接打在日本:十年期公債殖利率約 2.95%、三十年最高）', value: 162, color: '#dd3333' },
          { label: 'S&P 500 −0.52%（隔夜 8/17 收 7,745.06、自禮拜四新高一路回落到第二個交易日）', value: 52, color: '#dd3333' },
          { label: 'Dow −0.51%（隔夜 8/17 收 53,459.78、−272.63）', value: 51, color: '#dd3333' },
          { label: 'Nasdaq −0.32%（隔夜 8/17 收 26,644.91）', value: 32, color: '#dd3333' },
          { label: '利率/殖利率——今天真正的引信（不是哪家公司出事）:日本十年期公債殖利率約 2.95%、三十年來最高（財政疑慮＋市場預期日本央行快升息）;美國三十年期公債殖利率創 2007 以來最高;布蘭特原油站上 $90（美伊緊張、MOU 到期）。政府借錢的「租金」爬到幾十年高點＝「錢」整體變貴:靠借錢運轉的都變重、安全的利息變香、股票的相對吸引力被比下去', value: 0, color: '#888888' },
        ],
        headline: '週二 20:00 JST（東京、傍晚收市後）：今天壓垮股票的不是哪家公司、是「利率」——日本十年期公債殖利率衝到約 2.95%、三十年來最高（財政疑慮＋市場預期日本央行快升息），東京日經今天收 68,098.54（−1.62%、把昨天的漲全吐回去）;隔夜美股同被按下——美國三十年期公債殖利率創 2007 以來最高、疊上美伊緊張與油價站上 $90，S&P 7,745.06（−0.52%）、Nasdaq 26,644.91（−0.32%）、Dow 53,459.78（−0.51%） / 核心：利率＝「借錢要付的租金」;政府是最安全的借錢人、連它都付幾十年最高的租金＝「錢」整體變貴 / 一體兩面：對存錢的（師傅老婆的定存）利息回來是好事、對借錢的變緊 / A 紀律：利率大方向在轉、比今天跌幾趴重要;不猜方向、備劇本——七分半信、二分半留、那二分半留給「利息可能回不去了」 / 承接 ep81：b 的「屋頂/地基」之外、今天連「蓋房子借的錢」都變貴了、多了一根柱子在漲',
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
    { type: 'dialogue', character: 'chef', text: 'いらっしゃい、a。一個人啊、太太回娘家了?先來杯生的。跟你說——我今天又被我老婆問倒了。她剛剛看新聞、抬頭問我:老公、電視說日本的利率漲到「三十年最高」、政府借錢變貴了——那我們存錢的、利息不是會變多嗎?聽起來像好事啊。可是同一台電視、下一段又講「借錢變貴、股票大跌、大家日子更難過」。她問我:到底是好是壞?我又是張著嘴、一個字答不出來。' },

    { type: 'move', character: 'customer-a', toTile: 'random-stool' },
    { type: 'sit', character: 'customer-a' },

    { type: 'dialogue', character: 'customer-a', text: '師傅、晚安、生的一杯。太太回娘家住幾天、我落得清閒。你老婆又問到今天的正中央了——而且問得比很多新聞主播還準。我先跟你講今天發生什麼:今天全世界的股票、被同一隻手按下去——不是哪一家公司出事、是「利率」。我把它講到最白:利率、就是「借錢、要付的租金」。今天最大條的、是政府借錢的那個租金、爬到了幾十年沒見過的高——日本十年期、三十年來最高;美國最長的那個三十年期、2007 年以來最高。' },

    { type: 'move', character: 'chef', toTile: 'stove' },
    { type: 'wait', duration: 400 },

    { type: 'dialogue', character: 'chef', text: '等等——「政府借錢的租金」?政府還要跟人借錢喔、我一直以為政府最有錢。而且、租金漲就漲、那跟我巷子口這盤秋刀魚、有什麼關係?我又不借錢。' },

    { type: 'dialogue', character: 'customer-a', text: '師傅、關係大了、而且你天天在用、只是沒把它叫做「利率」。你這店、當年裝修、是不是跟銀行借過錢?你進貨、旺季要周轉、要不要先調一筆頭寸?那個「借了以後、要多還的部分」、就是利率、就是租金。而政府、是全世界最安全的借錢人——最不會倒的那個房客。連它租錢、都得付幾十年沒付過的高租金、那代表什麼?代表「錢」這個東西、整體變貴了。房客裡最穩的那個都要多付、你我這種小店、跟著只會更貴。' },

    { type: 'dialogue', character: 'chef', text: '喔——所以重點是「錢變貴了」。可是我老婆那句還是繞著我:我們存錢的、利息會變多、那不是好事嗎?怎麼股票反而大跌、一趴多?' },

    { type: 'dialogue', character: 'customer-a', text: '師傅、這就是一體兩面、你老婆兩邊都講對了、只是那是兩個不同的人在感受。利息回來、對存錢的人、是實實在在的好事——你老婆存了一輩子吧?日本這利息、幾十年幾乎是零、現在要回來了、她的定存、以後會多幾個錢。可是對股票、是壞消息:以前錢擺銀行沒利息、大家沒辦法、只好把錢丟去買股票冒險;現在、安全的利息變香了、錢就不必冒那個險——股票的「相對吸引力」、一下被比下去。所以今天、沒有哪家公司出壞消息、東京日經照樣跌一趴六、收在六萬八千出頭、就是這個道理;隔夜美股也一起低頭、還多疊了中東緊張、油價站上九十塊。' },

    { type: 'dialogue', character: 'chef', text: '原來如此……那你們桌上、看到利率這樣一路漲、是趕快把股票都賣了、還是反過來趁怕撿便宜?' },

    { type: 'dialogue', character: 'customer-a', text: '師傅、兩個我都不做、我不猜方向、我做的是把劇本備齊。我跟你講個大的:我做這行、看了快一個世代——利率從高、一路走到低、走了整整二十幾年;而今天、是我職涯裡第一次、認真看到它、往回走。這種「大方向在轉」、比今天跌幾趴、重要太多。你知道我一直在調的那個配比——七分半信、二分半留;我不動我的湯底、我動的、是那個「留」。這一回、那二分半、我留給一個劇本:「萬一、利息真的回不去了。」不是明天、是往後好幾年。把劇本備齊、比猜對明天漲跌、值錢。' },

    { type: 'dialogue', character: 'chef', text: '你那個「留二分半」、我懂——我師父有一句話:「備料備到有剩、才是本事;丟掉的備料、是保險費。」留著、沒用到、不虧、那是保平安的。跟你那個「留」、是同一件事吧?……不過說真的、我一個煮飯的、「利息回不去」這種大事、我到底會從哪裡、真的感覺到?' },

    { type: 'dialogue', character: 'customer-a', text: '師傅、你那句師父的話、就是「留」的最好註解、我一個字都改不動。你會從三個地方感覺到、都很具體:一、你老婆的定存單、數字會開始長——那是好的;二、你哪天想再裝修、去借錢、銀行給你的數字、會比幾年前難看——那是緊的;三、最微妙的、你的老客人、房貸要是跟著變貴、每個月多還一點、他來你店裡、可能就從點兩盤、變點一盤。對了——上禮拜天、b 在這桌講「屋頂新高、地基滲水」對吧?我今天幫她補一根柱子:今天連「蓋房子借的錢」都變貴了——屋頂、地基之外、還有一根柱子在漲。同一棟房子、我們幾個常客、剛好各看一面。' },

    { type: 'sfx', sound: 'chimes' },

    { type: 'wait', duration: 400 },

    { type: 'move', character: 'chef', toTile: 'counter-center' },
    { type: 'dialogue', character: 'chef', text: '哈、你們幾個湊起來、剛好一整棟房子。好、你這樣一路講、我懂了、也該餓了。今天禮拜二、我配當令的:先生的配一盤冷やしトマト;茄子の揚げ浸し、泡在高湯裡、冰冰涼涼;主角是這尾——秋刀魚の塩焼き、今年的初物、剛到、我烤到皮脆——晚夏轉初秋、就這一味、一年才回來一次;再來だし巻き卵、里芋の煮っころがし;締めに、給你一碗溫溫的蕎麦。生的先、待會兒幫你換冷酒。欸、你說利率——是不是也像這尾秋刀魚?幾十年才轉一次季、跟牠一樣、久久才回來一次。' },

    { type: 'dialogue', character: 'customer-a', text: '師傅、你這一句、比我一整晚講的都漂亮。秋刀魚一年回來一次、你還記得牠的味道、火候拿捏得剛好;可是利率這個季、幾十年才轉一次——市場上一半的人、根本沒嚐過「利息很貴」是什麼味道、包括我桌上一些年輕的同事、他們整個職涯、只認得「錢很便宜」的世界。所以這種時候、老師傅的舌頭、比再新的工具都準。我不加碼賭方向、就照我那句:七分半信、二分半留;那二分半、今晚起、留給一件事——「這尾秋刀魚、可能不只回來一季、牠想住下來。」冷酒來吧——敬幾十年才轉一次的季。' },

    { type: 'wait', duration: 500 },
    { type: 'move', character: 'chef', toTile: 'stove' },

    {
      type: 'narration',
      text: '禮拜二晚上、東京、傍晚收市後。今天壓垮股票的、不是哪家公司出事、是「利率」——政府借錢的成本、爬到幾十年沒見過的高:日本十年期公債殖利率衝到約 2.95%、三十年來最高（財政疑慮、加上市場預期日本央行快升息）;東京日經今天收 68,098.54（−1,121.71、−1.62%、把昨天的漲全吐回去）。隔夜美股也被同一隻手按下——美國三十年期公債殖利率創 2007 以來最高、再疊上美伊緊張與布蘭特原油站上 $90;S&P 500 收 7,745.06（−0.52%）、Nasdaq 26,644.91（−0.32%）、Dow 53,459.78（−0.51%）。a 一個人來、把這件事講穿:利率、就是「借錢要付的租金」;政府是全世界最安全的借錢人、連它租錢都得付幾十年最高的租金、就代表「錢」這個東西整體變貴了——靠借錢運轉的都變重（房貸、公司擴張、店家裝修、進貨周轉）、安全的存款和債券利息變香了、錢就不必冒險買股票、股票的相對吸引力被比下去;所以沒有哪家公司出壞消息、股票照樣被拉下來。而這是一體兩面:對師傅老婆這種存了一輩子的人、利息回來是好事——日本這利息、幾十年是零、現在要回來、定存以後會多幾個錢;對借錢的人、卻是變緊。a 的紀律不是喊買喊賣:他做這行看了快一個世代、利率從高一路走到低、走了二十幾年、今天是他第一次看到它認真往回走;這種「大方向在轉」、比今天跌幾趴重要太多。他不猜方向、他備劇本——七分半信、二分半留、不動湯底、只動「留」的內容;這回那二分半、留給「萬一、利息真的回不去了」。師傅用他的店懂了:當年裝修借過錢、旺季要調頭寸、那「多還的部分」就是利率;師父那句「備料備到有剩才是本事、丟掉的備料是保險費」、正是 a 那「留二分半」的註解——留著沒用到不虧、那是保平安的。a 也幫上禮拜天 b 的話補了一根柱子:b 講「屋頂新高、地基滲水」（股價 vs 消費）、今天連「蓋房子借的錢」都變貴了——屋頂、地基之外、還多一根柱子在漲、同一棟房子、幾個常客各看一面。收在禮拜二一桌當令的:冷やしトマト、茄子の揚げ浸し、秋刀魚の塩焼き（今年初物、晚夏轉初秋就這一味）、だし巻き卵、里芋の煮っころがし、締めに温かい蕎麦、生ビール→冷酒。一句話落回巷子:利率也像這尾秋刀魚、幾十年才轉一次季;市場上一半的人、根本沒嚐過「利息很貴」是什麼味道——這種時候、老師傅的舌頭、比新工具準。',
      duration: 6000,
    },
  ],
};
