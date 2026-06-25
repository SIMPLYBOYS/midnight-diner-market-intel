import type { Episode } from '../../engine/types';

/**
 * Sources verified 2026-06-25 (Thu) — the AI-chip "bubble panic vs real
 * demand" arc, 6/22→6/25. This week's spine: a sentiment crash answered
 * by a substance print.
 *
 * - 6/22 (Mon): BofA flipped to the most aggressive Fed call of any major
 *   broker — THREE 25bp hikes in 2026 (Sept/Oct/Dec), inflation
 *   "unambiguously worse", citing new Chair Warsh's aggressive tone. This
 *   is downstream of ep67's hawkish FOMC. (CNBC 6/22)
 * - 6/23 (Tue): GLOBAL TECH/AI ROUT. Korea's Kospi CRASHED ~ -9.99% (its
 *   steepest drop in 3+ months), foreign investors dumping chips on
 *   "rally overheated" / AI-bubble fears; SK Hynix and Samsung both ended
 *   DOWN >12%; circuit breaker tripped; Kioxia -16% intraday; memory
 *   stocks ~ -13%. A chunk of the violence was MECHANICAL — leveraged
 *   Samsung/SK Hynix ETF rebalancing, "tail wagging the dog" forced
 *   selling. US followed: Nasdaq -2.21%, S&P 500 -1.44%; Western Digital
 *   -8.4% to $671, Qualcomm -6.9% to $206.60.
 *   (Bloomberg 6/23, CNBC 6/23, TradingKey 6/23, Bloomingbit 6/23)
 * - 6/24 (Wed): V-SHAPED RECOVERY. Kospi +~3% after the -10% day; Samsung
 *   +~8-9%, SK Hynix +~2.7-4%, on SK Hynix's accelerated $26B US ADR sale
 *   + a rumored ₩90tn Samsung buyback → heavy short-covering. US choppy:
 *   S&P 500 7,358.22 (-0.10%), Nasdaq 25,476.44 (-0.43%), Dow 51,848.90
 *   (+0.35%); fell into the Micron print. Nikkei 225 closed 69,174.97
 *   (down hard off the 6/22 record 72,353). (TheStreet 6/24, CNBC 6/24,
 *   TradingKey 6/24)
 * - 6/24 AFTER HOURS — THE ANSWER: MICRON (MU) fiscal Q3 BLEW OUT. Revenue
 *   $41.46B vs $35.84B est; EPS $25.11 vs $20.20; gross margin 84.9% (from
 *   74.9% prior qtr, 39% a year ago); Q4 guide $50B ±1B vs $42.9B est; and
 *   the killer — 16 long-term agreements locking ~$22B of sales over 3-5
 *   years. Stock +~15% in extended trade. The fear was "AI demand is a
 *   bubble"; the print said demand is contracted out for YEARS.
 *   (CNBC 6/24, StockTitan 6/24, TheStreet earnings live)
 * - 6/25 (Thu, tonight): Asia digests the Micron answer. The episode is
 *   set Thu evening Tokyo — freshest CONFIRMED hard prints are the 6/24
 *   US closes + Micron after-hours; I do NOT invent a 6/25 Asia close.
 *
 * - sectors[].value = |%change|x100 of the theme's indicator asset, sorted
 *   desc; date-tagged in each label. priceHistory is the Kospi crash→V
 *   path DERIVED from the sourced %moves off the 6/22 record 9,114.55
 *   (9114 → ~8203 on -9.99% → ~8450 on +3%) — chart shape only, not a
 *   claimed close. vix/rsi are mood indicators (rout week), not sourced
 *   prints.
 *
 * - CAST: ep67 A+B (FOMC), ep68 A solo (Iran arc close) → tonight
 *   CUSTOMER B SOLO. A crash with a circuit breaker, leveraged-ETF forced
 *   selling, and a wave of panicked client calls is HER domain: sell-side
 *   desk, vol/flow, "我的工作是裝減震器" (ep61), the 15-yr client who keeps
 *   wanting to do the wrong thing at the wrong time (ep48/61), her retired
 *   finance-lifer dad's lines ("你讓客戶在高點接了刀他記你一輩子" ep48,
 *   "計畫內的後悔叫成本、計畫外的才叫災難" ep61). B: female, 先生 watches
 *   the kids so she can come; NOT same desk as A (CONTINUITY DEBT). A
 *   off-screen tonight. Chef's-wife callback ties straight to ep68: last
 *   week she asked "72,000 該不該追高", A said don't pile in at the top —
 *   days later it's -10%; the discipline paid off inside a week. Tonight
 *   she asks "韓國一天跌 10%、AI 是不是泡沫破了". No Polymarket (Iran arc
 *   closed ep68) — broadens topic per the standing tone guidance.
 */
export const EPISODE_69: Episode = {
  id: 'ep-69',
  date: '2026-06-25',
  title: '20260625 禮拜四晚上、AI 晶片「泡沫恐慌」對上「真需求」——禮拜二韓國股市一天崩 -9.99%（SK Hynix、三星雙雙 -12%、觸發 circuit breaker、一半是借錢基金被逼著砍的機械性殺盤），大家喊「AI 泡沫破了」；結果禮拜三盤後 Micron 財報打臉恐慌——營收 $41.5B 大超、毛利 84.9%、下季預告 $50B、還簽了 16 張鎖三到五年共 $22B 的長約。恐慌是情緒、需求是事實；B 一個人來、講她那兩天當客戶減震器的事',
  description: '禮拜四晚上、東京。這禮拜市場演了一齣完整的戲——禮拜二，韓國股市一天崩了快 10%（-9.99%、三個月最大），SK Hynix 跟三星雙雙跌超過 12%、還觸發了「暫停鍵」（circuit breaker）；全世界喊「AI 泡沫終於破了」。但 B 今晚要講的是兩件事：第一，那天的崩、有一大半根本不是「大家覺得 AI 不行了」，是「借錢放大的基金被逼著砍倉」的機械性殺盤——尾巴搖狗。第二，也是更重要的，禮拜三盤後，Micron 的財報出來，直接把「泡沫」這個恐慌打臉：營收 $41.5B 大超、毛利衝到 84.9%（賣一塊賺八毛五）、下一季自己預告 $50B、最關鍵的是簽了 16 張把未來三到五年、總共 $22B 生意鎖死的長約。恐慌問的是「會不會是泡沫」、財報答的是「需求已經簽到三五年後」。情緒是放大器、事實是減震器。B 這兩天在 desk 上，看著她那位做了十五年的老客戶又想在崩盤那天清倉、被她按住；今晚她來，是來講「在恐慌裡幫人不做傻事」這件事——而師傅老婆上禮拜才在問「72,000 該不該追高」、A 叫她別在最高點一次全壓、結果一個禮拜不到就 -10%、那個紀律剛好救了她。',
  actions: [
    { type: 'bgm', track: 'chill-lofi', command: 'play' },

    {
      type: 'narration',
      text: '禮拜四晚上、東京。這禮拜的市場、演了一齣很完整的戲。禮拜二、韓國股市一天崩了快 10%——Kospi -9.99%、三個月來最大的單日跌幅；做記憶體晶片的 SK Hynix 跟三星、雙雙跌超過 12%、市場還觸發了「暫停鍵」——一種跌太兇就強制停一下、讓大家冷靜的機制。全世界的標題都在喊同一句：「AI 泡沫、終於要破了。」美國這邊也跟著跌、Nasdaq -2.21%。但隔天、禮拜三盤後、一張財報出來、把「泡沫」這個恐慌、整個打臉——做記憶體的 Micron、營收 $41.5B、大超預期；毛利衝到 84.9%、等於賣一塊錢的東西賺八毛五；下一季自己預告要做到 $50B；最狠的是、它一口氣簽了 16 張長約、把未來三到五年、總共 $22B 的生意、先鎖死。恐慌問的是「這會不會是泡沫」、財報答的是「我的東西已經被預訂到三五年後了」。今晚 b 一個人來——她這兩天、在她的交易桌上、就在這場崩盤跟反彈的正中央。',
      duration: 6000,
    },

    {
      type: 'market-data',
      data: {
        tickers: [
          { symbol: 'Micron MU（6/24 盤後、財報大超）', price: 15.0, change: 15.0 },
          { symbol: 'Kospi 韓國（6/23 崩 -9.99%、6/24 +3% V 轉）', price: 8450.0, change: 3.0 },
          { symbol: 'Nasdaq（6/24 收、殺盤後喘）', price: 25476.44, change: -0.43 },
          { symbol: 'S&P 500（6/24 收）', price: 7358.22, change: -0.1 },
          { symbol: 'Nikkei 225（6/24 收、從 72,353 高點回落）', price: 69174.97, change: -0.28 },
        ],
        volatility: 28,
        vix: 21.0,
        rsi: 44.0,
        beta: 1.3,
        priceHistory: [9114, 8800, 8500, 8203, 8203, 8300, 8400, 8450],
        volumeHistory: [900, 1100, 1800, 2600, 2400, 1700, 1300, 1150],
        sectors: [
          { label: 'Micron MU 6/24 盤後 +15%（財報打臉泡沫、毛利 84.9%、簽 16 張長約鎖 $22B 三到五年）', value: 1500, color: '#22cc55' },
          { label: 'Kospi 6/23 -9.99%（三個月最大崩、SK Hynix／三星雙 -12%、觸發 circuit breaker、AI 泡沫恐慌）', value: 999, color: '#dd3333' },
          { label: 'Western Digital 6/23 -8.4%（$671、美國晶片股同步被殺）', value: 840, color: '#dd3333' },
          { label: 'Qualcomm 6/23 -6.9%（$206.60、科技股全球 rout）', value: 690, color: '#dd3333' },
          { label: 'Kospi 6/24 +3% V 轉（三星 +8%、SK Hynix $26B ADR＋庫藏股傳聞、空頭回補）', value: 300, color: '#22cc55' },
          { label: 'Nasdaq 6/23 -2.21%（美國跟著殺、Micron 出來前的恐慌）', value: 221, color: '#dd3333' },
        ],
        headline: '禮拜四 21:00 JST：AI 晶片「泡沫恐慌」對上「真需求」——6/23 Kospi 崩 -9.99%（SK Hynix／三星雙 -12%、circuit breaker、一半是 leveraged ETF 被逼砍的機械殺盤）喊泡沫破；6/24 盤後 Micron 財報打臉（營收 $41.5B 大超／毛利 84.9%／下季 guide $50B／簽 16 張鎖三到五年 $22B 長約、股價 +15%）。恐慌是情緒、需求是事實 / Kospi 6/24 已 V 轉 +3%（三星 +8%、$26B ADR＋庫藏股傳聞、空頭回補）',
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
    { type: 'dialogue', character: 'chef', text: 'いらっしゃい。b、妳今天看起來有點累。先坐、我先給妳倒杯熱的。跟妳說——我老婆今天又拿報紙來嚇我、說韓國的股票一天跌了 10%、新聞寫「AI 泡沫破了」。她上禮拜才在問我日經 72,000 該不該追、我照 a 講的跟她說「別在最高點一次全押」、結果這禮拜真的跌了。她現在改問我：是不是泡沫真的破了、以後都要跌了？我又答不出來、等妳。' },

    { type: 'move', character: 'customer-b', toTile: 'random-stool' },
    { type: 'sit', character: 'customer-b' },

    { type: 'dialogue', character: 'customer-b', text: '師傅、晚安、謝謝這杯。我先講一件讓你太太安心的事——她上禮拜沒在 72,000 一次全押、那個決定、這禮拜替她省了一場驚嚇。她現在問「是不是泡沫破了」、我老實說：那天的崩、有一大半、根本不是大家「想清楚覺得 AI 不行了」才賣的。是被逼著賣的。' },

    { type: 'move', character: 'chef', toTile: 'stove' },
    { type: 'wait', duration: 400 },

    { type: 'dialogue', character: 'chef', text: '被逼著賣的？股票不是想賣才賣、想留就留嗎？誰能逼妳賣自己的東西？' },

    { type: 'dialogue', character: 'customer-b', text: '借錢的人會被逼。師傅你想——有人買股票是用自己的錢、跌了難過、但他能撐著等。可是有一種基金、是「借錢放大」的、市場規定它要一直維持一個固定的比例。股票一跌、比例跑掉、它就被規則強制要去市場上「賣到比例對回來」為止——不是它想賣、是它非賣不可。一群這種基金同時被逼著砍、就把價錢踩得更低；價錢更低、又逼出下一批……那天韓國有一大段、就是這樣滾出來的。我們桌上有個說法叫「尾巴搖狗」——一隻小尾巴、甩得整條狗都在抖。' },

    { type: 'dialogue', character: 'chef', text: '尾巴搖狗——我懂了。就像我這條街、有家店當初借了一大筆錢擴張、生意只是稍微抖一下、銀行就緊張、逼他賤價賣設備還錢；他一賤賣、整條街的二手設備行情都被他拖下去。不是他店不好、是他借太多、由不得他。所以那天韓國跌 10%、不全是「大家覺得 AI 完了」、有一半是「借太多的人被規則逼著砍」？' },

    { type: 'dialogue', character: 'customer-b', text: '師傅你這個「借太多的店被銀行逼著賤賣、拖累整條街」、比我講的精準。對、就是這樣。所以第一課是：你看到一個嚇人的跌幅、先別急著問「是不是世界要完了」、要先分清楚——這是「大家想通了、用腳投票」、還是「有人被規則逼著砍、跟看法無關」。後者那種跌、跌得最兇、但也最假——因為賣的人不是不看好、是不得不賣。風暴一過、東西還是好的。' },

    { type: 'dialogue', character: 'chef', text: '那怎麼知道東西到底是不是真的好？新聞一邊喊泡沫、一邊妳又說東西沒事——我一個煮飯的、到底要信哪邊？' },

    { type: 'dialogue', character: 'customer-b', text: '師傅、這就是這禮拜最漂亮的地方——不用我們猜、有人替我們交了答案。崩盤的隔天晚上、那家做記憶體晶片的 Micron、把財報攤出來：賣得比所有人估的都多、賺得也比上一季更兇——賣一塊錢的東西、賺八毛五。但真正讓我安心的、不是這一季多好、是它同時宣布：它已經跟客戶簽了 16 張長約、把未來三到五年、總共 $22B 的生意、先鎖死了。泡沫、是「大家一窩蜂、明天可能就散」；可是人家的客人、是「白紙黑字跟你簽了三五年」。這兩個、是相反的東西。' },

    { type: 'dialogue', character: 'chef', text: '簽了三到五年的約……這個我太懂了。我開店最怕的、就是「今天爆滿、明天就沒人」那種客人——網路上有人拍一下、一窩蜂湧進來打卡、吃一次拍照走人、下個月一個都不回來、那才是泡沫。我最踏實的、是那種跟我說「老闆、我下個月公司尾牙、二十個人包給你」的——他先跟我約好了、那不是熱鬧、那是真的生意。原來看一家公司是不是泡沫、跟我看客人一不一樣——看他是來打卡一次、還是跟你簽了長約。' },

    { type: 'dialogue', character: 'customer-b', text: '師傅、「來打卡一次、還是跟你簽了長約」——這就是泡沫跟真需求的差別、你一句話講完了、我要抄回 desk。一窩蜂的熱鬧、會散；簽進合約裡的需求、要等三五年才到期。那天市場恐慌、賣的是「熱鬧會不會散」的擔心；隔天財報回的是「我的需求已經簽到三五年後」的事實。恐慌是情緒、需求是事實——情緒會放大、事實會兌現。一個禮拜之內、市場自己把這兩個演給你看了一遍。' },

    { type: 'wait', duration: 400 },

    // ── B's desk: the 15-year client, being the 減震器 ──
    { type: 'dialogue', character: 'chef', text: '妳剛進門那臉色——是不是那兩天在妳桌上、發生了什麼？' },

    { type: 'dialogue', character: 'customer-b', text: '師傅、你眼睛真利。崩盤那天、我桌上的電話沒停過——客戶一個一個打來、聲音都在抖。最讓我揪心的、是那位跟我往來十五年的老先生——你還記得我提過他、之前想砍韓國 AI 被我勸住的那位。那天 -10%、他打來、第一句就是「全部幫我賣掉、我受不了了」。師傅、你知道那種感覺嗎——一個信任你十五年的人、在最壞的那一刻、要你親手幫他做一件你知道會害他後悔一輩子的事。' },

    { type: 'dialogue', character: 'chef', text: '那妳怎麼辦？客人都開口求妳賣了、妳是該聽他的、還是該攔他？這分寸很難拿吧。' },

    { type: 'dialogue', character: 'customer-b', text: '我沒幫他賣。我跟他說：「我們先不按鍵、你先聽我講三句話。」我跟他說、今天這個跌、有一大半是被逼著砍的機械盤、不是基本面壞了；你現在賣、是把別人被逼出來的最低價、當成你的成交價；你撐了十五年、不差這三天。我爸做了三十年、留給我一句話——「你讓客戶在高點接了刀、他記你一輩子」；我那天在想的是它的反面：你讓客戶在最低點、把刀親手丟掉、他也會記你一輩子。隔天 Micron 出來、韓國 V 轉、三星一天彈 8%——他打來、沒講買賣、只說了一句「還好那天妳沒讓我賣」。師傅、那一句、比我這個月任何一張單都值。' },

    { type: 'dialogue', character: 'chef', text: '「還好那天妳沒讓我賣」——這句話、抵得過一整個月。妳這行、我以前以為是幫人賺錢的；聽妳這樣講、妳真正在做的、是在人最慌的那一刻、攔住他、別讓他做那件會後悔一輩子的事。這跟賺不賺、好像是兩回事。' },

    { type: 'dialogue', character: 'customer-b', text: '師傅、你講到我這行的核心了。我跟自己講過一句——「人的情緒是放大器、我的工作是裝減震器」。崩盤那天、我沒有比別人聰明、我不知道隔天 Micron 會大超、我猜不到。我只是知道一件事：一個被嚇到的人、做的決定、十次有九次是錯的。我不是替他預測未來、我是替他、把恐慌跟下單之間、墊一層減震的東西、讓他別在抖的時候按下去。事實會不會站我這邊、我賭不準；但「別在最慌的時候動手」、這個我守得住。' },

    { type: 'wait', duration: 400 },

    // ── chef's wife's question answered: bubble or not ──
    { type: 'dialogue', character: 'chef', text: '那我回去、到底怎麼跟我老婆講？她就想知道一句——AI 是不是泡沫、以後是不是都要跌、她那點要不要參與的心、到底該收起來還是？' },

    { type: 'dialogue', character: 'customer-b', text: '師傅、你這樣跟她講——第一、這禮拜沒有證明「泡沫破了」、反而證明了「需求是真的、被簽進三五年的長約裡」；但這也不代表它不會再抖、它一定還會抖、因為裡面有太多借錢放大的人、隨時會被逼著砍一波。第二、所以結論不是「衝進去」、也不是「嚇到收手」、是 a 上禮拜跟她講的那句、這禮拜被市場親自驗證了一遍——別在一個價位一次全押。她上禮拜沒在 72,000 全壓、這禮拜 -10% 沒咬到她、這就是分批的好處。真要參與、就分幾次、跌了當折扣、抖了不嚇跑。東西是真的、但路是顛的——這兩句要一起記、少一句都會做傻事。' },

    { type: 'dialogue', character: 'chef', text: '東西是真的、但路是顛的——這兩句一起記。我懂了。我這就回去跟她講：不是泡沫、但會一直晃；想坐這台車、就繫好安全帶、分段上、別一次把錢全砸進去。她聽得懂安全帶這個。' },

    { type: 'wait', duration: 400 },

    // ── Closing — Thursday, B solo, the 減震器 calm ──
    { type: 'move', character: 'chef', toTile: 'counter-center' },
    { type: 'dialogue', character: 'chef', text: '妳這兩天當了一整週的減震器、今晚換我給妳墊一頓。我做安神、暖、好消化的——土瓶蒸、裡面松茸香菇放足、鱧魚、配清湯；再來一條煮到入味的金目鯛、白飯、味噌湯、漬物、溫酒一合。慌了一整週的人、要吃熱的、慢的、不刺激的。先溫酒。先生今晚顧小孩？' },

    { type: 'dialogue', character: 'customer-b', text: '師傅、土瓶蒸、太對了——慌完一週、最需要的就是這種清清淡淡、暖到胃裡的東西。我先生今晚顧小孩、叫我「別急著回、坐久一點、把這週放下再回來」。其實我今晚心很穩——不是因為市場 V 轉了、是因為那位老先生那句「還好妳沒讓我賣」。師傅、我做這行最大的成就感、從來不是猜對行情——是有人在最慌的那一刻、因為我攔了一下、沒把自己這輩子的累積、在最低點丟掉。市場明天還會抖、但那一攔、是永遠的。' },

    { type: 'dialogue', character: 'chef', text: '「市場明天還會抖、但那一攔、是永遠的」——這句留在我這。妳知道嗎、我煮了三十年、最得意的也不是哪道菜驚艷誰、是某個失意的客人、半夜進來、不講話、吃完一碗熱的、走的時候眼神不一樣了。菜會涼、行情會變、但「有人在最低的時候、被好好接住了一下」——這個不會涼。妳跟我、原來做的是同一件事。' },

    { type: 'dialogue', character: 'customer-b', text: '師傅、「有人在最低的時候被好好接住了一下、這個不會涼」——這句、是這一整週最好的收尾、我帶回家講給我先生聽。崩盤、財報、V 轉、長約——講到最後、市場那些數字底下、其實就是一個一個會慌的人。我的工作、你的工作、都是在他們最慌的時候、墊一下、攔一下、別讓他們把好東西在最壞的時候丟掉。土瓶蒸的香出來了——我今晚就好好喝這口湯、把這週的抖、放下。' },

    { type: 'dialogue', character: 'chef', text: '放下吧。土瓶蒸掀蓋、松茸的香衝出來、先別急著喝、先聞一下、那個就是「慢」的味道——這週缺的就是這個。金目鯛也煮入味了、白飯熱的、溫酒斟上。這週辛苦了——妳替那麼多人裝了減震器、今晚換這碗湯、替妳裝一個。慢慢喝。' },

    { type: 'sfx', sound: 'chimes' },

    { type: 'wait', duration: 500 },
    { type: 'move', character: 'chef', toTile: 'stove' },

    {
      type: 'narration',
      text: '禮拜四晚上 10 點半、東京。今天的故事是「AI 晶片『泡沫恐慌』對上『真需求』——情緒會放大、事實會兌現」。禮拜二、Kospi 一天崩 -9.99%（三個月最大、SK Hynix／三星雙雙 -12%、觸發 circuit breaker、Nasdaq 跟著 -2.21%）、全世界喊「AI 泡沫破了」——但 b 拆給師傅看：那天一大半是「借錢放大的基金被規則逼著砍」的機械殺盤、不是看法、是不得不賣（師傅:「就像借太多的店被銀行逼著賤賣設備、拖累整條街、不是店不好、是借太多」）。隔天 6/24 盤後、Micron 財報直接打臉恐慌——營收 $41.5B 大超、毛利 84.9%（賣一塊賺八毛五）、下季 guide $50B、最關鍵簽了 16 張鎖三到五年共 $22B 的長約、股價 +15%（師傅:「最怕一窩蜂打卡一次就走的客人、最踏實的是先跟你簽好尾牙包桌的——看公司是不是泡沫、跟看客人一樣、看他打卡一次還是簽了長約」）。B 的 desk：崩盤那天往來十五年的老客戶喊「全部幫我賣」、她沒按鍵、用她爸「你讓客戶在高點接刀他記你一輩子」的反面攔住他、隔天 V 轉客戶只說「還好那天妳沒讓我賣」（B:「人的情緒是放大器、我的工作是裝減震器；我猜不到 Micron 會大超、我只知道被嚇到的人十次有九次做錯決定」）。給師傅老婆的答案——不是泡沫破了、是需求被簽進三五年；但它一定還會抖、所以「東西是真的、但路是顛的」、別一次全押、分批、跌了當折扣（呼應 ep68 A 叫她別在 72,000 最高點全壓、一週不到 -10% 驗證了紀律）。土瓶蒸慢工暖胃、替當了一週減震器的人、也裝一個減震器——「有人在最低的時候被好好接住了一下、這個不會涼」。',
      duration: 6000,
    },
  ],
};
