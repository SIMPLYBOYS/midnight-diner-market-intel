import type { Episode } from '../../engine/types';

/**
 * Sources verified 2026-05-29 (Fri JST):
 * - Asia ripped to fresh highs on the news that the deal is finally on
 *   Trump's desk:
 *   - Kospi +~3% to close 8,476.15, hit intraday RECORD again.
 *   - Nikkei 225 +2.53% to 66,329.50 (new high).
 *   - Topix +1.41% to a fresh ALL-TIME HIGH 3,957.17 (breadth — not just
 *     mega-caps).
 *   (CNBC Asia 5/29)
 * - Wall Street Thu 5/28 closed at RECORDS, AI re-led:
 *   - S&P 500 +0.58% to record 7,563.63.
 *   - Nasdaq +0.91% to 26,917.47.
 *   - Dow +0.05% to 50,668.97.
 *   - Driver: Snowflake +36.5% on a strong AI-flavoured outlook re-lit
 *     the AI trade; Dollar Tree +11%, Kohl's ~+11% on earnings beats.
 *   (CNBC 5/27 stock-market live)
 * - THE BIG ONE: Trump is in the WHITE HOUSE SITUATION ROOM today making
 *   a "final determination" after the US and Iran reached a TENTATIVE
 *   agreement to extend the ceasefire + open Hormuz + start nuclear
 *   talks. WH official confirmed an Axios report that the two sides
 *   "mostly agreed" on terms. Awaiting Trump's final approval. Trump's
 *   stated terms: Iran "must agree that they will never have a Nuclear
 *   Weapon or Bomb"; "Hormuz Strait must be immediately open" with no
 *   tolls/restrictions; Iran-laid mines must be "terminated"; US
 *   blockade of the strait would be "lifted."
 *   (CNN live 5/29, RFERL 5/29, CNN live 5/28)
 * - THE SECOND SIGNATURE: Trump unlikely to sign before receiving
 *   word that Iran's new Supreme Leader MOJTABA KHAMENEI (son of the
 *   Feb 28-assassinated Ali Khamenei) has approved the document. Two
 *   signatures needed over the WEEKEND — a binary event. (CNN 5/29)
 * - Military activity hasn't fully stopped: Pentagon said Iran fired a
 *   BALLISTIC MISSILE toward Kuwait this week and deployed ATTACK
 *   DRONES in/around Hormuz; US strikes continued (ep48). Markets are
 *   looking past these as last-gasp posturing before sign-off — same
 *   logic as ep48's "strikes = enforcement, not breakdown" but
 *   stretched further this week. (CNBC Asia 5/29)
 * - Oil context: Brent fell back under $100 this week; still up >35%
 *   since the war started end-Feb (CNBC 5/27). No clean dated 5/29
 *   precise print at episode time — referenced qualitatively.
 * - Polymarket regime-fall flat ~2.6%, range now 2.15%-5% — confirming
 *   the smart-money read but not newsworthy today; NO polymarket block
 *   (used ep48; back-to-back week skip is fine).
 * - sectors[].value = |%change|x100 per theme, desc; all sourced
 *   single-day moves (Asia 5/29, US 5/28 records as carry-in).
 * - Continuity: ep49 (Thu) Customer A "七分信、三分留" — the 三分留 today
 *   becomes "Khamenei 點不點頭." ep49 ended "明天 Camp David 後續再看" →
 *   tonight: Camp David debrief converted into the Situation Room
 *   meeting. The week's arc to land: Mon thin-volume 踮腳尖 65k record
 *   (ep46) → Tue slipped (ep47) → Wed reclaimed + record on real volume
 *   (ep48) → Thu deal frayed -0.76% (ep49) → Fri 新高 with US in,
 *   Topix all-time-high, real breadth (today). Tonight CUSTOMER B
 *   (alternation 43A 44B 45A 46B 47A 48B 49A 50B); B's risk-mgmt voice
 *   fits "Friday before a binary weekend, trim, don't lean." B persona:
 *   spouse "我先生", kids, retired-finance father. Chef's wife callback:
 *   she's oscillated all week — Friday she sees the Situation Room
 *   news, asks "是不是真要簽了". This is EP50 — a milestone but don't
 *   over-narrate that; keep the natural tone.
 */
export const EPISODE_50: Episode = {
  id: 'ep-50',
  date: '2026-05-29',
  title: '20260529 禮拜五晚上、deal 終於到 Trump 桌上了——「mostly agreed」、Trump 進 Situation Room 做「final determination」、但還要等伊朗新 Supreme Leader Mojtaba Khamenei 點頭；Asia 創新高（Kospi 8,476 紀錄、Topix 3,957 歷史新高、Nikkei 66,329 +2.53%）；但伊朗本週還射飛彈到 Kuwait＋Hormuz 撒無人機；週末是個雙簽名二元事件',
  description: '禮拜五晚上、Tokyo 21:00、一週收尾、deal 終於到 Trump 桌上了。白宮確認 Axios——美國跟伊朗「mostly agreed」、條件大致都同意了；Trump 今天進白宮 Situation Room 做「final determination」、要拍板了。但別急著開香檳——這份東西要簽下去，需要兩個簽名：Trump 那邊一個、伊朗新 Supreme Leader Mojtaba Khamenei（2/28 被刺殺的 Ali Khamenei 的兒子）那邊也一個、缺一不可。兩個人、一個週末、一個二元事件。Trump 開出的條件清楚：伊朗「永遠不擁有核武」、Hormuz「立刻無條件開」、伊朗布的水雷要「徹底清除」、美國解除海峽封鎖。市場今天先賭簽得了——亞洲全面創新高：Kospi 收 8,476 又破紀錄、Topix 3,957 歷史新高（這個重要、寬度也創）、Nikkei +2.53% 收 66,329。美股昨天就先創 record——S&P 7,563.63 新高、Nasdaq 收 26,917、Snowflake AI 利多大爆 +36.5%。但弔詭的事還在發生——伊朗這禮拜還射了一發彈道飛彈到 Kuwait、在 Hormuz 撒無人機。市場全部當成「簽前最後嗆聲」沒理。但這個禮拜的故事不會在禮拜五晚上結束——週末這 60 小時，是 Trump + Khamenei 兩支筆的二元事件。今晚 customer-b 來。',
  actions: [
    { type: 'bgm', track: 'chill-lofi', command: 'play' },

    {
      type: 'narration',
      text: '禮拜五晚上 9 點、東京。一週的事，到今晚要收尾——也可能、要打開。deal 終於到 Trump 桌上了。白宮今天親口確認 Axios 的報導——美國跟伊朗「mostly agreed」、條件「大致都同意了」；Trump 進白宮 Situation Room 做「final determination」、要拍板了。聽起來終於要成、但事情沒這麼快——這份東西要真的簽下去、需要兩個簽名：Trump 那邊一個、伊朗那邊也要新 Supreme Leader Mojtaba Khamenei（2/28 被刺殺的 Ali Khamenei 的兒子）點頭、缺一不可。兩個人、一個週末、一個非黑即白的事件。Trump 開出的條件講得很清楚：伊朗「永遠不擁有核武」、Hormuz「立刻、無條件開」、伊朗布的水雷必須「徹底清除」、美國這邊解除對海峽的封鎖。市場今天先賭「簽得了」——亞洲全面創新高：Kospi 收 8,476 又破紀錄、Topix 收 3,957 是歷史新高（這個比 Nikkei 還重要，寬度創新高、不只大盤股在動）、Nikkei +2.53% 收 66,329 也是新高。美股昨天就先創 record——S&P 7,563.63 新高、Nasdaq 26,917、Dow 50,668；AI 那條重新點火、Snowflake 一檔噴 +36.5%。但弔詭的事還在發生——伊朗這禮拜還射了一發彈道飛彈到 Kuwait、在 Hormuz 撒攻擊無人機；市場全部當作「簽前最後嗆聲」沒理。但這個禮拜的故事、不會在禮拜五晚上結束——週末這 60 個小時、是 Trump 跟 Khamenei 兩支筆的二元事件。今晚 customer-b 來。',
      duration: 6000,
    },

    {
      type: 'market-data',
      data: {
        tickers: [
          { symbol: 'Kospi（5/29 收、又破紀錄）', price: 8476.15, change: 3.0 },
          { symbol: 'Nikkei 225（5/29 收、新高）', price: 66329.5, change: 2.53 },
          { symbol: 'Topix（5/29 收、歷史新高）', price: 3957.17, change: 1.41 },
          { symbol: 'S&P 500（5/28 Thu 收、紀錄）', price: 7563.63, change: 0.58 },
          { symbol: 'Nasdaq（5/28 Thu 收、紀錄、AI 領）', price: 26917.47, change: 0.91 },
        ],
        volatility: 17,
        vix: 14.0,
        rsi: 68.4,
        beta: 1.04,
        priceHistory: [65300, 65500, 65700, 65900, 65964, 65700, 65464, 66329],
        volumeHistory: [640, 720, 780, 720, 700, 660, 620, 840],
        sectors: [
          { label: 'Kospi +3.0%（收 8,476 又破紀錄、deal mostly agreed＋美股 Thu 也創 record）', value: 300, color: '#22cc55' },
          { label: 'Nikkei +2.53%（收 66,329 新高、油下＋ Wall Street 新高＋ AI 連動）', value: 253, color: '#22cc55' },
          { label: 'Topix +1.41%（收 3,957 歷史新高、寬度也創新高、不只大盤股、最健康的訊號）', value: 141, color: '#22cc55' },
          { label: 'Nasdaq +0.91%（5/28 收 26,917 紀錄、Snowflake +36.5% 把 AI 重新點起來）', value: 91, color: '#22cc55' },
          { label: 'S&P 500 +0.58%（5/28 收 7,563.63 新高、連著上個月的記錄一路延伸）', value: 58, color: '#22cc55' },
        ],
        headline: '禮拜五 21:00 JST、Asia 收盤：deal 到 Trump 桌上、「mostly agreed」、Trump 進 Situation Room 做 final determination、待 Khamenei 點頭 / Kospi 8,476 紀錄 Topix 3,957 全時高 Nikkei 66,329 +2.53% / 美 Thu S&P/Nasdaq 雙創 record（Snowflake +36.5%）/ 伊朗本週還射飛彈到 Kuwait＋ Hormuz 撒無人機（被當簽前嗆聲）/ 週末是 Trump+Khamenei 兩支筆的二元事件',
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
    { type: 'dialogue', character: 'chef', text: 'いらっしゃい。禮拜五了——我老婆今天看新聞看到「Trump 進白宮地下室開會、要決定要不要簽」、整個人興奮起來、跟我說「這禮拜應該就要 deal 了吧」。我老樣子答不出來、跟她說「等 b 來」。今天 Topix 還創歷史新高、我做生意三十年也搞不清這是不是個信號。' },

    { type: 'move', character: 'customer-b', toTile: 'random-stool' },
    { type: 'sit', character: 'customer-b' },

    { type: 'dialogue', character: 'customer-b', text: '師傅、晚安。你太太這個禮拜的情緒走完一輪、最後落在「應該要 deal 了」——她直覺其實沒錯、但我必須先給她也給你打一個預防針。今天市場的興奮，是建立在一個「兩個人都會點頭」的假設上：Trump 那邊一個、伊朗新 Supreme Leader Mojtaba Khamenei 那邊一個——兩個人、一個週末、缺一個都不算。這不是「快要 deal 了」、是「離一個能不能簽的瞬間，剩 60 個小時」。差別很大。' },

    { type: 'move', character: 'chef', toTile: 'stove' },
    { type: 'wait', duration: 400 },

    { type: 'dialogue', character: 'chef', text: '兩個簽名缺一不可——這個我太懂了！我幾年前跟一家鰻魚商簽五年合約、我這邊簽完了，他那邊老闆出差、拖了兩個禮拜才簽回來；中間我整天提心吊膽，貨進了、錢付了、但合約還沒完全成立、隨時可能變數。Trump 那邊簽了還不算、要等伊朗那個 Mojtaba 點頭，跟我等老闆出差回來簽、是同樣的緊張？' },

    { type: 'dialogue', character: 'customer-b', text: '師傅、就是這個感覺、而且 Mojtaba 這邊更難——你那家鰻魚商老闆是經驗豐富、知道該不該簽；Mojtaba 不一樣，他是 2/28 被刺殺的老 Khamenei 的兒子，年輕、剛接班沒幾個月、這是他人生第一筆會被歷史記住的決定。年輕領導人做大決定，通常會比老的更謹慎、要花更久看細節——因為他不能簽錯一筆變千古罪人。所以今天 Trump 那邊就算 4 點鐘簽完，Mojtaba 那邊可能慢慢看到禮拜天才回。週末這 60 個小時，市場關著，新聞會一條一條進來，但我們什麼都做不了。' },

    { type: 'wait', duration: 400 },

    // ── Why markets rallied despite missile + drones ──
    { type: 'dialogue', character: 'chef', text: '可是我搞不懂——你說今天市場是賭「兩個都簽」，那為什麼伊朗這禮拜還射飛彈到 Kuwait、Hormuz 還在撒無人機，市場居然當沒看到？Topix 還創歷史新高？這應該是壞消息吧？' },

    { type: 'dialogue', character: 'customer-b', text: '師傅、這就是這個禮拜最值得學的一課——市場學會了「分辨噪音跟訊號」。我們上禮拜 a 講過類似的，這禮拜跑得更激烈。市場現在的讀法是：所有開火、嗆聲、飛彈、無人機，都是「簽之前的最後一波喊價」——伊朗想在簽字前儘量證明自己有牙、好為內政交代；Trump 也允許美國在這條框內適度反擊，給雙方一個「打也打了、現在和」的下台階。所以這些不是「戰爭重啟」，是「簽前的最後一場戲」。市場讀對方向、所以漲。' },

    { type: 'dialogue', character: 'chef', text: '簽前最後一場戲——這個比喻很猛。我們店裡跟員工簽年薪續約之前，他有時候會「忽然開始跟客人聊『其他家在挖我』」、講得我很緊張、後來才知道那是他要漲薪水的姿態、最後還是留下來。原來伊朗丟飛彈、跟我員工說別家來挖，是同一種姿勢？' },

    { type: 'dialogue', character: 'customer-b', text: '師傅、本質完全一樣、只是規模大幾億倍。我們行話叫「saber-rattling」、字面是搖刀的聲音、白話就是「我有牙、別欺負我」。簽前搖一搖刀，是為了顯示自己不是低頭、是被尊重後才同意的。但是——這個讀法有一個關鍵風險，我必須提醒你：「市場讀對方向」這件事，今天我們沒辦法驗證，要等週末過完才知道。如果其中一支筆沒簽下去，今天讀作「戲」的那些動作，下禮拜一就會被重新讀作「真的戰意」。同樣的飛彈，禮拜五是嗆聲，禮拜一可能變成升級。意義不在事件本身，在後續。' },

    { type: 'wait', duration: 400 },

    // ── Topix all-time high: breadth, the healthy signal ──
    { type: 'dialogue', character: 'chef', text: '你剛剛特別提到「Topix 創歷史新高比 Nikkei 還重要」——這兩個有什麼差？我以為都是日本大盤。' },

    { type: 'dialogue', character: 'customer-b', text: '師傅、好問題、這個差別其實是整個禮拜最重要的訊號。Nikkei 225 只有 225 檔、權值集中在少數大公司——SoftBank、Toyota、半導體那幾隻一動，整個指數就動。Topix 不一樣、它涵蓋 2,000 多檔、是「整片日本股市」的代表。Topix 創歷史新高，意思是「不只大明星、連配角都在動」、寬度（breadth）打開了。' },

    { type: 'dialogue', character: 'chef', text: '不只大明星、連配角都在動——這個我立刻懂！我們街上以前只有巷口那家拉麵店紅、整條街靠它撐人潮；現在隔壁定食屋、咖啡店、燒肉店都開始有自己的熟客——整條街的「生意」，比過去只靠一家健康得多。Topix 新高，就是這條街全部店都有客？' },

    { type: 'dialogue', character: 'customer-b', text: '師傅、你這個「整條街全部有客」、就是 breadth 最好的中文翻譯。今天的紀錄質地，跟禮拜一那個「踮腳尖、淡量、只有少數人撐」的 65,000 完全不同——這個是「健康的高」。但「健康的高」不等於「安全的高」。健康代表結構好；風險在外面——Trump 一筆畫下去、市場狂喜；Mojtaba 那邊一遲疑，這條健康的街可能就跟我們上禮拜講的「跟明天借的」一起被收回。結構好、不能擋掉週末的二元事件。所以我們 desk 今天下午有做兩件事，我跟你說。' },

    { type: 'wait', duration: 400 },

    // ── B's weekend risk management ──
    { type: 'dialogue', character: 'chef', text: '哪兩件？聽起來像我禮拜五打烊前要做的事——清冰箱、看訂單、給週末做安排。' },

    { type: 'dialogue', character: 'customer-b', text: '師傅、你那個類比一打一個準。我們下午做的兩件事就是這個邏輯——第一件、「把過大的部位稍微縮一點」。今天 Nikkei、Topix、Kospi 全部新高，多頭已經吃了一禮拜的果實、留太多到週末，遇到 Khamenei 不簽，這頓會吐回去一半。所以我們不是看空、是「留個比較舒服的尺寸」、賺多賺少不要這麼貪。第二件、「買一點保險」——我們去做一些不貴的對沖、特別是針對「油忽然彈回 $100 以上」這個情境。如果 deal 破、油會大彈、新興市場跟亞洲股都會痛、買點便宜保險、晚上才睡得著。' },

    { type: 'dialogue', character: 'chef', text: '不是看空、是留舒服尺寸；買便宜保險、晚上睡得著——這個我做生意三十年也是同一招。颱風要來的那個禮拜五、我會少進一點魚、不是相信會壞、是怕颱風如果真來、那批魚出不去；同時跟保險公司加保一點颱風險、保費不多、心安。原來大基金也這樣？' },

    { type: 'dialogue', character: 'customer-b', text: '師傅、規模不同、邏輯一模一樣。我們有個說法叫「最便宜的保險，是在最不需要的時候買」——今天市場狂喜、波動率（VIX）跌到 14，恐慌指數低，保險就便宜。等週末真的出事，保險立刻變貴、你也來不及買。這跟你颱風來之前才想加保保險公司可能根本不收，是同樣的時間規律。聰明錢在開心的時候，順手買一份痛苦的保險。' },

    { type: 'wait', duration: 400 },

    // ── Closing — Friday, B alone, week's end ──
    { type: 'move', character: 'chef', toTile: 'counter-center' },
    { type: 'dialogue', character: 'chef', text: '禮拜五晚上、又是收一週的時候——做點豐盛一點的：金目鯛煮付、炊飯加栗子、味噌湯加紅味噌、玉子燒、漬物，配溫酒一合。金目鯛今天進得肥、煮汁濃一點。週末這 60 小時你要盯嗎？還是先休？' },

    { type: 'dialogue', character: 'customer-b', text: '師傅、金目鯛！這個我等了好幾週——煮汁濃一點，配栗子炊飯，太到位了。週末這 60 小時我會盯一半——禮拜六上午看伊朗那邊有沒有官方說法，下午陪小孩跟我先生去外婆家；禮拜天晚上要重新盯，因為 Tokyo 禮拜一早盤是全世界第一個對「兩支筆有沒有都簽完」反應的市場。如果 deal 簽了，禮拜一可能開盤跳空跳一兩千點；如果沒簽，可能跌一兩千點。要在家準備好。' },

    { type: 'dialogue', character: 'chef', text: '一半看伊朗、一半陪家人——這個剛好。我師父教過、做生意的人最忌「把工作變成全部、家人變成附屬」、他說「店是工具、家才是目的」。你能週末劃一半給家人、難得。' },

    { type: 'dialogue', character: 'customer-b', text: '師傅、你師父這句「店是工具、家才是目的」、我要傳給我先生跟我爸聽——我爸做了三十年金融、他到退休前一年才學會把週末劃一半給我媽。他現在最後悔的事，就是錯過我小時候的好多週末，為了一些「當時很重要、現在想起來想不起來」的盤。我這幾年特別努力不重複他的軌跡——所以禮拜六下午不開電腦，是給我自己的紀律。錢可以再賺、那一個下午陪不到就是陪不到。' },

    { type: 'dialogue', character: 'chef', text: '錢可以再賺、下午陪不到就是陪不到——這句重。我老婆以前是公司總機、做了三十年、她退休那天跟我講「我這輩子最大的好處是嫁給一個自己當老闆的人、可以自己訂時間」、我那時候才意識到、我選擇開店的代價、其實也是回報。你週末那一半，是你自己給自己的回報，不是逃避工作。金目鯛我這就上、栗子炊飯先讓你聞著、溫酒倒滿。這禮拜辛苦了，這頓慢慢吃。' },

    { type: 'sfx', sound: 'chimes' },

    { type: 'wait', duration: 500 },
    { type: 'move', character: 'chef', toTile: 'stove' },

    {
      type: 'narration',
      text: '禮拜五晚上 10 點半、東京。今晚的故事是「deal 終於到 Trump 桌上、但週末有兩支筆」。白宮確認美伊「mostly agreed」、Trump 進 Situation Room 做「final determination」；但這份東西要真的成、要 Trump 簽、也要伊朗新 Supreme Leader Mojtaba Khamenei（2/28 被刺殺的 Ali Khamenei 的兒子）點頭、缺一不可。兩個人、一個週末、一個非黑即白的事件——這 60 個小時、市場關著、新聞會進、我們什麼都做不了。Trump 條件清楚：永不擁核、Hormuz 立刻無條件開、伊朗清雷、美國解封。市場今天先賭「兩個都簽」——Asia 全面創新高：Kospi 8,476 又破紀錄、Topix 3,957 歷史新高（這個比 Nikkei 還重要、寬度創新高、「整條街全部店都有客」、是健康的高）、Nikkei 66,329 +2.53% 新高。美股昨天就先創 record——S&P 7,563.63 與 Nasdaq 26,917、AI 重新點火、Snowflake +36.5%。伊朗這禮拜還射飛彈到 Kuwait、Hormuz 撒無人機，全被讀作「簽前最後一波 saber-rattling、員工跟你說別家來挖的姿勢」、市場不理。但 B 警告：「市場讀對方向」這件事，沒辦法驗證——同樣的飛彈，禮拜五是嗆聲、禮拜一可能變升級。所以她 desk 下午做了兩件事：把過大的部位縮一點、留個舒服尺寸；買點便宜保險、針對「油彈回 $100 以上」這個情境——「最便宜的保險，是在最不需要的時候買」、波動率今天剩 14、保險特別便宜。Customer B 週末會盯一半、禮拜六下午陪家人去外婆家——她爸三十年金融退休前才學會把週末劃一半給她媽，她不重複那條軌跡。對應師傅老婆「嫁給自己當老闆的人最好處是時間自己訂」、跟師傅師父「店是工具、家才是目的」——錢可以再賺、那一個下午陪不到就是陪不到。金目鯛煮付配栗子炊飯，這禮拜收工。週末這 60 小時，兩支筆。',
      duration: 6000,
    },
  ],
};
