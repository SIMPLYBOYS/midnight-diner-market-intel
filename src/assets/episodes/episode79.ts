import type { Episode } from '../../engine/types';

/**
 * Sources verified 2026-08-11 (Tue, Tokyo evening) — 「等一個還沒出來的數字」：
 * the night-before-the-number episode. A forward-looking counterpart to ep78:
 * ep78 read a jobs number that was ALREADY OUT (bad-news-is-good-news); tonight
 * the big number is NOT out yet — US July CPI prints tomorrow — so the spine is
 * the DISCIPLINE of waiting on a number you can't predict, not reacting to one.
 *
 * DATE: verified before writing, NOT trusted from the box clock. WebSearch
 * confirms Mon 2026-08-10 as the most recent completed US session (S&P 7,753.11
 * -0.06%; two independent hits) ⇒ today is Tue 8/11. Independently confirmed
 * Tue 8/11 = 山の日 (Mountain Day), a Japan national holiday — the Tokyo Stock
 * Exchange is CLOSED today (JPX holiday calendar). And US July CPI is due
 * WED 8/12, 8:30am ET = 21:30 JST Wed — so at Tokyo dinner (~20:00 JST) it has
 * NOT printed. Per the Tokyo-evening timezone rule: no fabricated "today" close
 * (Tokyo didn't trade; US 8/11 session opens ~22:30 JST, after this scene). The
 * anchor is the confirmed overnight Mon 8/10 US close + the pending CPI.
 * Sequence: ep77=7/31, ep78=8/9, ep79=8/11.
 *
 * — THE STATE OF PLAY (confirmed Mon 8/10 US close): the market went DEAD FLAT.
 *   S&P 500 7,753.11 (-0.06%), Nasdaq 26,605.36 (-0.32%), Dow 53,975.98
 *   (-0.11%) — all three sitting just under Friday's record highs (ep78: Fri
 *   8/7 S&P 7,757.64 record). The only real moves were STOCK-SPECIFIC, not
 *   macro: Intel -4% after announcing a $15B common-stock offering (dilution),
 *   Nvidia -2.9%, Apple -1.5%. i.e. the index itself barely moved — money is
 *   holding its breath ahead of tomorrow's inflation print. (CNBC/Yahoo 8/10
 *   market wrap, WebSearch 8/11)
 *
 * — THE NUMBER (Wed 8/12): US July CPI, 8:30am ET. Consensus FORECAST (a
 *   forecast, NOT a result — flagged as such everywhere in this episode):
 *   headline +0.1% MoM (rebounding from June's surprise -0.4%), ~3.4% YoY (down
 *   a touch from 3.5% in June); core +0.2% MoM, ~2.5% YoY. Framing: a rebound
 *   after June's soft print, with forecasters expecting upward pressure a bit
 *   faster than the Fed would like. This is the inflation reading that feeds
 *   straight into the ep78 thread — the Fed's HIKE fear (core PCE 3.3%, 9-3
 *   split, Sept FOMC the real test). Hot CPI → hike odds up → equities wobble;
 *   soft CPI → relief. (Morningstar/Kiplinger July-CPI previews, Robinhood
 *   prediction-market listing dated 8/12, BLS release calendar)
 *
 * — THE SPINE (fresh, forward-looking): 「等一個你控制不了、明天才出、還會被
 *   事後修正的單月數字時、該做什麼?」 Answer (B's desk discipline): you do NOT
 *   position for a coin flip. The day before a number, the desk goes CLEAN —
 *   trims risk, holds cash, prepares BOTH scripts (hot / soft) — not because
 *   it's bearish, but because the print isn't in anyone's circle of competence.
 *   B's dad: 「週五收盤手上要乾淨、別把煩惱帶回家過週末」(ep44) → 進數字前、
 *   手上要乾淨。The quiet tape is NOT indecision or weakness — it's respect for
 *   an uncertainty you can't trade. Ties to ep78's A line「一個月不是一個方向」
 *   /「把每一種可能想周全、比猜對一個方向更值錢」, but from B's tactical /
 *   risk-control angle (squaring up before an event), NOT re-running A's macro
 *   explainer — deliberately a different voice on an adjacent topic.
 *
 * — RECURRING DEVICES (B): the 15-yr client (ep48/61) — tonight he calls
 *   wanting to BET the CPI print (押明天的數字高或低); B talks him out of it
 *   (「賭一個你猜不到、還會被改的單月數字、那不是投資、是擲骰子」) — same
 *   guardian role as ep48/61, new occasion. Her 散戶情緒指數 (ep54/58) reads
 *   EERILY CALM today — but that's 「盤起來的安靜」(coiled), not 「沒事」. Her
 *   self-def:「我們的價值不是預測未來、是幫客戶在恐慌時不做傻事」(ep56).
 *
 * — ep77/78 CALLBACK (light, one beat): USD/JPY has crept back to ~159.2 (+0.95%
 *   on 8/10) after the late-July intervention pulled it to ~157.6 — the yen is
 *   quietly weakening again because the RATE-GAP root was never touched (BOJ
 *   held). This is B's ep77 thesis「干預是買時間、不是解決」literally playing
 *   out; the chef notes his ep77/78 discipline (didn't stockpile the cheap yen)
 *   was vindicated — but it's a side note, not the spine.
 *
 * — sectors[].value = |%change|x100 of that row's indicator asset, reference =
 *   the most-recent completed session Mon 8/10 (Tokyo shut today, US 8/11 not
 *   open yet — same anchoring logic as ep78 using Fri on a weekend). Real-%
 *   rows: Intel -4.0% (400), Nvidia -2.9% (290), Nasdaq -0.32% (32, the
 *   near-flat index = the whole point). Grey value:0 EVENT rows (ep68
 *   convention): the pending CPI (a forecast/event, must NOT be scaled) and the
 *   山の日 / global-wait state. Index LEVELS live in tickers.
 * — priceHistory is the S&P 500 flattening under its record: the run to Fri's
 *   7,757.64 then Mon drifting flat to 7,753.11 (both real endpoints; interior
 *   bars are mood-shape). volumeHistory DRAINS into the print (Fri jobs-day
 *   spike, then thinning as everyone waits). vix 15 / rsi / beta are mood, not
 *   sourced prints; the index closes and priceHistory endpoints ARE real.
 *
 * — CAST: running tally through ep78 = A:8, B:8 (ep78 two-hander). Recent:
 *   ep76 A-solo, ep77 B-solo, ep78 duo. Tonight CUSTOMER B SOLO (→ A:8, B:9,
 *   still balanced within ±1). Earned: the day-before-a-number is desk /
 *   risk-control turf — squaring up before an event, coin-flip discipline, the
 *   散戶情緒指數 reading, the 15-yr client wanting to bet the print — all B's
 *   sell-side desk world (ep15/16/18); a deliberately DIFFERENT voice from the
 *   A-heavy macro-explainer of ep78, so the adjacent topic doesn't repeat. B
 *   references A only as a fellow regular (A 上禮拜天說的「九月才是真考題」)—
 *   INDEPENDENT regulars, no shared desk / no joint position (CONTINUITY DEBT
 *   guardrail). Personas: B female, 我先生 + kids, 我的 desk, 15-yr client,
 *   retired finance-lifer dad; CHEF layman — CPI/通膨/升息 all get plain-word
 *   translation, 老闆 not employee, 我老婆, 師父; his invoices/豊洲 price are the
 *   everyman mirror. His wife's entry: 山の日放假、她看新聞問「今天沒股票、
 *   可是全世界都在等一個明天才出來的數字、緊張兮兮——一個還沒出來的東西、
 *   有什麼好緊張的?」
 * — Menu: 山の日 holiday Tuesday, late-summer, B-solo, distinct from ep77
 *   (鰹たたき/つくね/冷茶碗蒸し/モロヘイヤ) & ep78 (枝豆/焼きなす/かき揚げ/
 *   穴子) — tonight 冷やしトマト、鱧の落とし(梅肉)、いんげんの胡麻和え、
 *   鶏の南蛮漬け(冷たく酸っぱい)、締めに冷やしうどん、生ビール→冷酒. The
 *   南蛮漬け(備好了泡在那等) quietly mirrors 「進場前備乾淨、等」. No Polymarket
 *   (a July-CPI prediction market exists but no odds were read — not fabricated).
 */
export const EPISODE_79: Episode = {
  id: 'ep-79',
  date: '2026-08-11',
  title: '20260811 禮拜二晚上、山の日、東京放假休市——本地沒盤;美股昨晚幾乎貼平不動（S&P -0.06%、當日唯一大動作是個股 Intel 增發 -4%、不是大盤），因為明天晚上美國要出「七月物價數字」（CPI）。師傅老婆問:「今天沒股票、可是全世界都在等一個明天才出來的數字、緊張兮兮——一個還沒出來的東西、有什麼好緊張?」核心:等一個你控制不了、明天才出、還會被事後修正的單月數字時、能做的不是「猜它」、是進場前把手弄乾淨、留現金、備好「它高」跟「它低」兩種劇本——它高它低你都不會被打死。市場今天那種安靜、不是死寂、是閉氣。B 一個人來、講 desk 前一天怎麼「把倉位弄乾淨」、和那個又想賭數字的 15 年老客戶',
  description: '禮拜二晚上、東京、山の日放假。今天日本休市、沒有盤可以看;而海的那一頭、美國昨晚（禮拜一）幾乎沒動——三大指數全部貼著上禮拜五的歷史新高、動都不太動;唯一比較大的跳動、還是個股自己的事（英特爾宣布要增發一大筆股票、稀釋、跌了 4%），不是大盤在跑。為什麼全世界突然安靜下來?因為明天晚上、美國要公布一個「物價數字」——就是七月的通膨。師傅的老婆看新聞、一臉不解地問他:今天連股票都沒開、可是新聞裡每個人都在等一個「明天才會出來的數字」、緊張兮兮的;一個都還沒出來的東西、到底有什麼好緊張的?今晚 B 一個人來。她說:你老婆問到重點了。這個物價數字、會決定聯準會敢不敢升息——太熱、大家怕升息、股票就抖;溫和、大家就鬆一口氣。所以在它出來以前、誰也不敢先押、整個市場就「閉氣」等著。但今晚真正要講的、不是「猜它會高還會低」——是「等一個你猜不到的數字時、到底該做什麼」。B 說她們 desk 在數字出來前一天做的事、剛好相反於一般人的直覺:不是重押、是「把倉位弄乾淨、降風險、留現金」。不是因為看壞、是因為明天那個數字就是擲硬幣、不在自己能力圈裡的東西、不下注。她爸有句話:「收盤手上要乾淨、別把煩惱帶回家過週末」——進一個數字之前、手上也要乾淨。她今天還接到那位往來十五年的老客戶電話、這次他想「賭明天的數字」、押它高還是低;她把他勸住了:賭一個你猜不到、月月還會被改的單月數字、那不是投資、是擲骰子。而她桌上自製的「散戶情緒指數」今天異常地平靜——但那不是沒事、是「盤起來的安靜」。師傅用他的店懂了:明天豊洲的魚價、他今晚根本不知道;所以他今晚不會賭它便宜、先囤一冰箱;他把該備的備乾淨、留點現金、明天看到價再決定進多少。而且他早懂另一件事——開店前那一小時、店裡靜悄悄的、不是店要收了、是他在盤起來、等客人一進門就爆發;安靜有兩種、一種是死寂、一種是閉氣、今晚市場那種、是後者。順帶一提、上個月被政府硬撐起來的日圓、這幾天又悄悄貶回 159 了——B 上次說「干預是買時間、不是解決」、正在一格一格應驗;師傅上禮拜忍住沒囤便宜的日圓、這下更確定沒做錯。',
  actions: [
    { type: 'bgm', track: 'chill-lofi', command: 'play' },

    {
      type: 'narration',
      text: '禮拜二晚上、東京、小巷子裡。今天是山の日、日本放假——股票市場也休市、本地沒有盤可以看。而海的那一頭、美國昨天晚上、幾乎沒動:三大股市指數、全部貼著上禮拜五的歷史新高、動都不太動;那一晚唯一比較大的跳動、還是某一家公司自己的事——一家大公司宣布要增發一大筆股票、把自己稀釋掉、跌了百分之四;不是整個市場在跑。奇怪、平常吵吵鬧鬧的市場、怎麼突然一起安靜下來了?因為——明天晚上、美國要公布一個數字:七月的「物價」。所有人、都在等這個還沒出來的數字。今晚、b 一個人來;這一次、要從「一個還沒出來的數字」、講到「等它的時候、到底該做什麼」。',
      duration: 6000,
    },

    {
      type: 'market-data',
      data: {
        tickers: [
          { symbol: 'S&P 500（8/10 收 7,753.11、-0.06%——貼著上週五的歷史新高、幾乎不動、在等明天 CPI）', price: 7753.11, change: -0.06 },
          { symbol: 'Nasdaq（8/10 收 26,605.36、-0.32%——量縮、觀望）', price: 26605.36, change: -0.32 },
          { symbol: 'Dow（8/10 收 53,975.98、-0.11%——三大指數一起貼平）', price: 53975.98, change: -0.11 },
          { symbol: '美國七月 CPI（明天 8/12、21:30 JST 才出;市場「預期」年增約 3.4%、月增 +0.1%——今晚尚未出爐、是預期、不是結果）', price: 3.4, change: 0.0 },
          { symbol: 'USD/JPY（8/10 約 159.2、+0.95%——干預後又悄悄爬回;上次 B 說「買時間、不是解決」正在應驗）', price: 159.2, change: 0.95 },
        ],
        volatility: 15,
        vix: 15.0,
        rsi: 66.0,
        beta: 1.0,
        priceHistory: [7716, 7724, 7748, 7757.64, 7752, 7756, 7750, 7753.11],
        volumeHistory: [1300, 1200, 1600, 1000, 950, 900, 880, 820],
        sectors: [
          { label: 'Intel 8/10 -4.0%（宣布增發 $15B、股權稀釋、當日最大單股拖累——個股自己的事、不是大盤在動）', value: 400, color: '#dd3333' },
          { label: 'Nvidia 8/10 -2.9%（AI 權值小幅回吐——也是個股層級、非全市場方向）', value: 290, color: '#dd3333' },
          { label: 'Nasdaq 8/10 -0.32%（收 26,605.36——三大指數幾乎貼平、成交量縮:錢在等明天的數字、不敢先押）', value: 32, color: '#888888' },
          { label: '美國七月 CPI 明天 8/12（21:30 JST 才出、市場「預期」月增 +0.1%／年增約 3.4%——未出爐、是預期不是已知、不可當數字用）', value: 0, color: '#888888' },
          { label: '山の日、東京今日休市（本地無盤;美股昨晚持平;全世界屏息、在等一個明天才出的數字）', value: 0, color: '#888888' },
        ],
        headline: '週二 20:00 JST（山の日、東京休市）：明天 8/12 21:30 美國出七月 CPI（物價數字）前夜、全球屏息——美股昨晚幾乎貼平：S&P 7,753.11（-0.06%）、Nasdaq 26,605.36（-0.32%）、Dow 53,975.98（-0.11%）;當晚唯一大動作是個股（Intel 增發 -4%、Nvidia -2.9%）、不是大盤 / 邏輯：CPI＝通膨溫度計、太熱→升息疑慮↑股票怕、溫和→鬆口氣;沒人敢先押、量縮、市場「閉氣」 / 核心：等一個你控制不了、明天才出、還會被事後修正的單月數字——不是去猜它、是進場前把手弄乾淨、留現金、備好「它高」「它低」兩種劇本（它高它低都不被打死） / CPI 預期 +0.1% 月增、約 3.4% 年增（尚未出爐、是預期） / 副線：USD/JPY 又爬回 ~159.2（干預後、根沒動、慢慢貶回——B 上次「買時間不是解決」應驗）',
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
    { type: 'dialogue', character: 'chef', text: 'いらっしゃい、b。今天山の日、放假、辛苦妳還出來。先冰的?跟妳說——我今天又被我老婆問倒了。她看新聞、抬頭問我:老公、今天日本放假、股票也沒開、對不對?可是電視上每個人、都在等一個「明天才會出來的數字」、一個個緊張兮兮的。她說:一個都還沒出來的東西、到底有什麼好緊張的?我又答不出來了。' },

    { type: 'move', character: 'customer-b', toTile: 'random-stool' },
    { type: 'sit', character: 'customer-b' },

    { type: 'dialogue', character: 'customer-b', text: '師傅、晚安、來杯生的。你老婆這個問題、又問到刀口上了。她感覺沒錯——今天全世界的市場、確實安靜到不太正常。美國昨天晚上、三大指數幾乎動都沒動、貼著上禮拜五的高點不上不下。大家不是沒事幹、是全部在等明天晚上、美國要出的一個數字:七月的「物價」。' },

    { type: 'move', character: 'chef', toTile: 'stove' },
    { type: 'wait', duration: 400 },

    { type: 'dialogue', character: 'chef', text: '物價?就是……東西是變貴了、還是變便宜了?這個我懂啊、我每天進貨都在感受。可是「美國七月的物價」、跟股票、有什麼關係?為什麼一堆人要為它緊張成這樣?' },

    { type: 'dialogue', character: 'customer-b', text: '師傅、關係就在你上禮拜天跟 a 聊的那件事上——升息。你還記得吧:市場這幾個月最怕的、是聯準會升息。那聯準會怎麼決定要不要升?其中最重要的一個依據、就是「物價漲得凶不凶」。物價要是太燙、他們就想升息去踩剎車;物價要是乖乖的、他們的手就鬆了。所以明天那個數字、幾乎就是在替聯準會量體溫。太燙——大家怕升息、股票就抖;溫和——大家鬆一口氣。' },

    { type: 'dialogue', character: 'chef', text: '喔——所以那個「物價數字」、其實是在賭聯準會明天會不會生氣。難怪大家繃著。那……現在到明天出來之前、你們這些做股票的、都在幹嘛?就坐在那邊乾等嗎?' },

    { type: 'dialogue', character: 'customer-b', text: '師傅、這就是我今晚最想跟你講的一件事了、而且它跟一般人的直覺、剛好相反。你以為我們會趁現在、拼命去猜、去押、賭它高還是低、對不對?不是。我們 desk 在一個大數字出來前一天、做的事、其實是——把倉位弄乾淨、把風險降下來、手上多留點現金。' },

    { type: 'dialogue', character: 'chef', text: '咦?這我就不懂了。機會不是就在明天嗎?猜對了、不就大賺一筆?你們反而縮手、把東西清乾淨——這不是把送上門的錢往外推嗎?' },

    { type: 'dialogue', character: 'customer-b', text: '師傅、因為明天那個數字、對我們來講、就是「擲硬幣」。它會多高、多低、連寫報告的那些人自己都在猜、而且常常猜錯。一個東西、如果它的結果不在我能看懂、能算準的範圍裡、那我押它、就不是投資、是賭博。我爸做了三十年、留給我一句話:「收盤、手上要乾淨、別把煩惱帶回家過週末。」我把它借過來——進一個你猜不到的數字之前、手上、也要乾淨。不是因為我看壞明天、是因為我根本不知道明天;不知道、就不重押。' },

    { type: 'dialogue', character: 'chef', text: '「進一個你猜不到的數字之前、手上要乾淨」……b、妳這句我得記著。可是總有人忍不住吧?總有人會想:欸我就賭它一把、賭中了呢?' },

    { type: 'dialogue', character: 'customer-b', text: '師傅、有、今天下午就一個。你記不記得我常提那位、跟我往來十五年的老客戶?他今天又打來了。上次是想追高、想全壓;這次更直接——他說「明天那個物價數字、我賭它低、妳幫我押一大筆、賭聯準會不會升息」。師傅、我又把他按住了。我跟他講:你這不是投資、是拿身家去猜一個銅板哪面朝上;而且這種單月數字、下個月常常又被默默改掉——你連銅板長什麼樣、都還沒看清楚。' },

    { type: 'dialogue', character: 'chef', text: '哈、又是他。妳這客戶、一有大事就想衝。那妳每次都得當那個踩剎車的人。妳不累嗎?他不會嫌妳擋他財路?' },

    { type: 'dialogue', character: 'customer-b', text: '師傅、他要真嫌、就不會做我十五年了。我常跟你講——我們這行真正的價值、不是預測未來、是幫客戶在恐慌、或貪心的時候、不要去做傻事。他今天想賭那一把、就是貪心在講話。我把他按住、他今晚睡得著;他要真押了、不管明天數字高低、他整晚都要盯著螢幕心臟病發。我桌上還有個自己做的小東西、我叫它「散戶情緒指數」——就是數客戶來電裡的驚慌字眼跟貪心字眼。師傅、你知道今天怪在哪嗎?它「異常地平靜」。' },

    { type: 'dialogue', character: 'chef', text: '平靜?那不是好事嗎?大家都不慌、風平浪靜、多好。' },

    { type: 'dialogue', character: 'customer-b', text: '師傅、就這一點、我要特別跟你說——安靜、有兩種。一種、是真的沒事、船過水無痕的那種平靜。另一種、是所有人都憋著一口氣、盯著同一個東西、動都不敢動——那不是「沒事」、那是「盤起來的安靜」。今天市場這種、是後者。就像暴風雨前、風會突然停、鳥會突然不叫——那不是天氣變好、是全部東西都在等同一件事發生。' },

    { type: 'wait', duration: 400 },

    { type: 'dialogue', character: 'chef', text: 'b、妳講到「盤起來的安靜」、我突然覺得——這個我早就懂了、只是我不是用股票懂的、是用我這家店懂的。妳等我一下、我這個南蛮漬け先夾給妳……好。妳先聽我講兩件事。' },

    { type: 'dialogue', character: 'customer-b', text: '師傅、你的版本我最愛聽、你講。' },

    { type: 'dialogue', character: 'chef', text: '第一件——你們在等的那個「明天才出來的數字」、我天天在等一個一模一樣的:明天豊洲市場的魚價。今晚、我根本不知道明天的鰹、明天的穴子、會是什麼價;可能便宜、可能貴、要看明天早上那一槌。那我今晚會不會、因為「猜」它明天便宜、就先囤一大堆、塞滿整個冰箱?不會。我進貨三十年、最慘的幾次、全是「賭一個還沒出來的價」——賭它會便宜、結果貴;賭它會貴、先囤一堆、結果崩。所以我今晚做的、剛好跟妳們一樣:該備的備乾淨、留點現金在手上、明天看到真的價、再決定進多少。' },

    { type: 'dialogue', character: 'customer-b', text: '師傅……你這個「豊洲的魚價」、就是我們那個 CPI、我一個字都不用改。你今晚不賭明天的魚價、就是我們今晚不賭明天的物價——同一個紀律:一個「還沒出來、我猜不到、明天才揭曉」的數字、不能拿現在的身家去押它。你留的那點現金、跟我要客戶留的那點現金、是同一筆——是給「萬一明天跟我想的相反」準備的。' },

    { type: 'dialogue', character: 'chef', text: '對、就是這個。而且我還有第二件事想講——就是妳剛剛那個「盤起來的安靜」。我開店、每天正式開門前、有那麼一小段時間、店裡靜悄悄的:湯在爐子上滾、刀都排好了、位子都擦乾淨了、可是還沒有半個客人。那個安靜、妳知道是什麼感覺嗎?那不是「這家店要收了」的死寂;那是我整個人盤起來、繃著、等第一個客人一掀簾子進來、就要爆發。我最怕的、不是那種「等客人的安靜」;我最怕的、是「連等都不用等、我知道今晚不會有人來」的那種安靜。那才是死寂。' },

    { type: 'dialogue', character: 'customer-b', text: '師傅、你把兩種安靜、分得比我還清楚。今天市場這種——不是「沒人要來了」的死寂、是「大家都盤起來、等明天那個數字掀簾子」的閉氣。所以你別被今天這個「怪安靜」嚇到、也別被它騙到:它不是沒事、但它也不是壞事、它就是「在等」。等的人多、通常代表明天那個數字、真的重要。' },

    { type: 'dialogue', character: 'chef', text: '那我就要問那句最外行的了——明天數字真出來了、大家該怎麼辦?如果它很燙、是不是就完蛋、要崩了?如果它乖、是不是就可以放心大買?' },

    { type: 'dialogue', character: 'customer-b', text: '師傅、你這句一點都不外行、這正是重點。答案是:真正練過的人、不會等到明天才想「該怎麼辦」——他今晚、就已經把「它很燙」跟「它很乖」兩種劇本、都先寫好了。它燙、我這樣做;它乖、我那樣做;兩種我都不會被打死。這樣、明天不管銅板哪面朝上、我都不是在「反應」、我是在「執行」。你上禮拜天聽 a 講那句吧——「把每一種可能想周全、比猜對一個方向更值錢」?我們桌上、就是這樣過每一個大數字的前一晚的。他那句是道理、我這個「今晚先寫好兩個劇本」、是那句道理、每天長什麼樣子。' },

    { type: 'dialogue', character: 'chef', text: '「先把兩種劇本都寫好、明天就不是反應、是執行」……b、我懂了。這跟我一樣啊——我今晚就會先想:明天魚要是貴、我就主推那幾道不靠貴魚的菜;明天魚要是便宜、我就大方一點、上好一點的料。兩種我今晚都先想好了、明天早上看一眼價、我直接做、不慌。原來你們幾千億的桌子、跟我這口爐子、講的是同一件事。' },

    { type: 'wait', duration: 400 },

    { type: 'dialogue', character: 'chef', text: '喔對、順便報告妳一件事——妳上個月講的那個日圓。政府上個月不是砸大錢、把日圓硬撐強了一下、我進貨才便宜一點點嗎?妳那時候叫我別囤、說那是「請一晚的樂團」、隨時彈回去。我最近看我進貨單——它真的、又一格一格、慢慢貴回去了。日圓好像又貶回去了。' },

    { type: 'dialogue', character: 'customer-b', text: '師傅、對、又爬回一美元換一百五十九塊上下了。你看——這就是我上次講的那句、正在你進貨單上一天一天應驗:干預、是買時間、不是解決。政府那一晚是把價格頂上去了、可是讓日圓變弱的那個「根」、從頭到尾沒動、所以它就慢慢、慢慢、又滑回原來的地方。而你上禮拜——忍住、沒有趁那一晚的便宜去囤一大堆——現在回頭看、你做對了。要是你那時候手滑囤了一整倉、你現在就是抱著一堆、用「一晚樂團價」買貴的存貨。你看、又是同一件事:別拿一個「不會持續」的價、去壓你整倉的身家。' },

    { type: 'dialogue', character: 'chef', text: '哈、我忍那一下、原來是對的、我還偷偷後悔過。好、那我這禮拜還是老樣子:便宜就順手撿一點、開心用、絕不囤;等那個「根」真的動了、我再改我的進貨計畫。' },

    { type: 'wait', duration: 400 },

    { type: 'move', character: 'chef', toTile: 'counter-center' },
    { type: 'dialogue', character: 'chef', text: '好、山の日、放假、明天的數字明天再說、今晚不猜它。妳看今天這桌、我也是「備好了在那等」的——冷やしトマト、鹽こぶ拌一拌、冰的;鱧、燙過、點梅肉、夏天吃它清清爽爽;いんげんの胡麻和え;還有這個南蛮漬け、雞肉炸過泡在醋汁裡、我中午就備好、冰到現在、冷的、酸酸的、山の日這麼熱、開胃。締めに來碗冷やしうどん。生的先、待會兒配鱧、我再開瓶冷酒。' },

    { type: 'dialogue', character: 'customer-b', text: '師傅、你這個南蛮漬け、太剛好了——你中午就把它備好、冰在那裡、等晚上客人來。它就是我們今晚講的東西:該做的、你早就做完了、剩下的、是安安靜靜地等。你沒有在客人上門那一刻、才手忙腳亂去炸雞、去調醋。進場前手乾淨——你這道菜、活生生就是這句話。' },

    { type: 'dialogue', character: 'chef', text: 'b、妳這樣一講、我覺得我這道菜升值了。說真的——你們那個世界、聽起來好嚇人:幾千億在等一個數字、整個地球屏住呼吸。可是繞一圈落到我這條巷子、就變成一句很簡單的話:明天的價、我今晚不知道、所以我不賭它;我把該備的備好、留一手、明天看了再說。我不用懂 CPI、我只要記住這一句、我這口爐子、就不會因為一個還沒出來的數字、自己先亂了手腳。' },

    { type: 'dialogue', character: 'customer-b', text: '師傅、你這句「明天的價我今晚不知道、所以我不賭它」——我明天要帶去我桌上、貼在螢幕上。我們讀一堆報告、盯一堆線、繞一大圈、結論就是你這一句。而且你有沒有發現、你今晚整個人很穩——沒有因為「明天有個大數字」就焦慮、也沒有假裝自己猜得到。你就是把手弄乾淨、備好兩種菜、然後開開心心請我吃這桌。師傅、這個「穩」、我桌上做十年的、很多人都還沒學會。' },

    { type: 'sfx', sound: 'chimes' },

    { type: 'dialogue', character: 'chef', text: '哈、妳又捧我、我就是一個等魚價的煮飯的。來、冷酒斟上——敬那個「明天才出來、今晚別去賭」的數字;也敬兩種安靜:一種是店要收的死寂、一種是開門前的閉氣——我們今晚這種、是後者。生的先乾一杯、鱧趁涼、南蛮漬け我還有一盤冰著。慢慢吃、今晚不趕、反正明天那個數字、急也沒用。' },

    { type: 'dialogue', character: 'customer-b', text: '師傅、敬這句。也幫我跟你老婆說:她問得對——一個還沒出來的數字、確實不值得你今晚去賭它;但值得你今晚、把手弄乾淨、把兩種劇本都備好。等它出來、你就不是嚇一跳、是早就在等它了。鱧真的清爽、冷酒乾杯。' },

    { type: 'wait', duration: 500 },
    { type: 'move', character: 'chef', toTile: 'stove' },

    {
      type: 'narration',
      text: '禮拜二晚上、東京、山の日放假。今晚不是看盤——今天日本休市、本地沒盤;美股昨晚（禮拜一）也幾乎貼平:S&P 500（7,753.11、-0.06%）、Nasdaq（26,605.36、-0.32%）、Dow（53,975.98、-0.11%）全部貼著上週五的歷史新高不動、當晚唯一的大跳動還是個股自己的事（Intel 宣布增發一大筆股票、稀釋、-4%;Nvidia -2.9%）、不是大盤。全世界安靜下來、是因為明天晚上（8/12、21:30 JST）美國要出七月的「物價數字」CPI——接 ep78 的線:物價＝通膨溫度計、決定聯準會敢不敢升息、太燙→怕升息股票抖、溫和→鬆口氣;所以出來之前誰也不敢先押、量縮、市場「閉氣」。今晚 B 一個人來、把整件事講穿:等一個你控制不了、明天才出、還會被事後修正的單月數字時、該做的不是「猜它」——她們 desk 在大數字前一天、反而「把倉位弄乾淨、降風險、留現金」（她爸:「收盤手上要乾淨、別把煩惱帶回家過週末」→ 進數字前手上也要乾淨;不是看壞明天、是根本不知道明天、不知道就不重押）。那位往來十五年的老客戶今天又打來、這次想「賭明天的數字」押聯準會不升息、B 把他勸住（「賭一個你猜不到、月月還會被改的單月數字、那不是投資、是擲骰子;我們的價值不是預測未來、是幫客戶在恐慌或貪心時不做傻事」）。她的散戶情緒指數今天「異常地平靜」——但那不是沒事、是「盤起來的安靜」（暴風雨前風會停、鳥會不叫）。師傅用店懂了兩層:一、明天豊洲的魚價他今晚不知道、所以不會賭它便宜先囤一冰箱、他進貨三十年最慘的幾次全是「賭一個還沒出來的價」——今晚該備的備乾淨、留現金、明天看真的價再決定進多少（B:同一個紀律、你的魚價就是我們的 CPI）;二、安靜有兩種——開店前那一小段「湯在滾、刀排好、還沒客人」的安靜、不是店要收的死寂、是他盤起來等第一個客人掀簾子的閉氣、今晚市場是後者。真正的紀律（B）:練過的人今晚就先把「它很燙」跟「它很乖」兩種劇本都寫好、明天不管銅板哪面朝上、都是「執行」不是「反應」——這正是 A 上禮拜天那句「把每一種可能想周全、比猜對一個方向更值錢」每天的樣子（師傅:明天魚貴我就推不靠貴魚的菜、魚便宜我就上好料、兩種今晚都先想好）。副線回扣 ep77/78:上月被政府硬撐的日圓、這幾天又貶回 ~159（干預是買時間不是解決、根沒動就慢慢滑回、在師傅進貨單上一天天應驗）、師傅上週忍住沒囤便宜日圓、回頭看做對了。收在山の日的一桌清爽（冷やしトマト、鱧の落とし梅肉、いんげんの胡麻和え、雞の南蛮漬け、冷やしうどん、生ビール→冷酒）——那盤中午就備好冰著的南蛮漬け、正是「進場前手乾淨、剩下安靜地等」的活教材。一句話落回巷子:明天的價我今晚不知道、所以我不賭它;我把該備的備好、留一手、明天看了再說。',
      duration: 6000,
    },
  ],
};
