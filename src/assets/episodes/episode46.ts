import type { Episode } from '../../engine/types';

/**
 * Sources verified 2026-05-25 (Mon JST):
 * - Nikkei 225 breached 65,000 for the FIRST TIME (record high), in
 *   holiday-thinned Asia trading (US closed for Memorial Day), after
 *   reports the Strait of Hormuz may reopen soon pushed oil down and
 *   lifted sentiment. (CNBC Asia markets live 5/25)
 *   LEVEL is the sourced fact; the % is DERIVED from ~63,339 prior
 *   (T. Rowe weekly, ~5/22) → ~+2.6%, treated as approximate.
 * - Oil CRATERED on the deal hope + Hormuz-reopen prospect:
 *   - WTI Jul -5.87% to $90.93 (early Asia)
 *   - Brent Jul -5.58% to $97.76 (another desk had Brent -5.2% to
 *     ~$98.12, WTI near $92) — Brent decisively back below $100.
 *   Oil has slid >10% over the stretch on de-escalation. (CNBC 5/25,
 *   Fortune 5/24, Bloomberg via CNBC 5/25)
 * - THE TWIST: Trump WALKED BACK Saturday's "largely negotiated /
 *   announced shortly." Monday Truth Social: talks "proceeding in an
 *   orderly and constructive manner," he told his reps "not to rush
 *   into a deal... time is on [our] side," and the deal "isn't even
 *   fully negotiated yet" (final approval maybe several days, per
 *   senior US officials). Crucially Trump said the US blockade of
 *   Hormuz REMAINS until an agreement is completed.
 *   (CNBC 5/25, Fortune 5/24)
 * - Obstacles unresolved: Iran's enriched-uranium stockpile + Hormuz
 *   tolls still contested; Iran's Tasnim says the draft could STILL
 *   COLLAPSE because the US is obstructing key clauses incl. a demand
 *   that Iran's frozen assets be unfrozen. (Bloomberg/Tasnim via CNBC)
 * - USD/JPY: USD broadly softer on deal hopes; yen firmer off the ~160
 *   zone. No clean dated 5/25 print at episode time (a "near 155"
 *   figure circulating is from a STALE 5/06 article — do NOT use it).
 *   Referenced qualitatively only, last-known ~160 carryover.
 * - NO polymarket block: used ep42/ep43/ep45 already; the regime-fall
 *   market only ticked 2.9%→3.3% (still near its low) — not worth a 4th
 *   use this stretch. Keep variety.
 * - sectors[].value = |%change|x100 of headline asset per theme, desc.
 *   Oil (precise) leads; Nikkei % is derived/approximate (flagged);
 *   US-closed + USD/JPY carried as grey context bars.
 * - Continuity: ep45 (Sun) Customer A solo parsed "largely negotiated"
 *   and predicted the market would "漲一下、要證據 / 先付訂金、尾款等
 *   Hormuz 真有船通過." Tonight the market paid a BIG deposit (record
 *   Nikkei, oil -5%) even as Trump braked — A was right it'd jump, but
 *   it overran. CUSTOMER B tonight (clean A/B alternation: ep43 A,
 *   ep44 B, ep45 A, ep46 B); she's the desk/flow + FX voice — fits
 *   "we faded the record, thin-holiday volume, oil mechanics, yen."
 *   B persona: spouse "我先生", kids, retired-finance father. Chef's
 *   wife callback: Nikkei 65,000 on the front page ("是不是賺大了"),
 *   and chef relays A's 訂金/尾款 line from last night.
 */
export const EPISODE_46: Episode = {
  id: 'ep-46',
  date: '2026-05-25',
  title: '20260525 禮拜一晚上、Nikkei 首度站上 65,000 創新高、油崩（WTI -5.87% $90.93、Brent -5.58% $97.76）——但 Trump 自己踩煞車「不急、時間站我們這邊、根本還沒完全談好」、Hormuz 封鎖照舊、市場跑在 deal 前面',
  description: '禮拜一晚上、Tokyo 21:00。週末那份「大致談好」的 deal、今天開盤被市場用力擁抱——Nikkei 225 盤中首度站上 65,000、創歷史新高（美國今天 Memorial Day 休市、亞洲假期淡量、漲勢被放大）；油崩、WTI 早盤 -5.87% 到 $90.93、Brent -5.58% 到 $97.76、跌破 $100。理由是「Hormuz 要重開」的預期——油最怕斷供、海峽要開的消息直接洩掉戰爭溢價。但今天最妙的是 Trump 自己踩煞車——他禮拜六說「largely negotiated、即將宣布」、今天卻在社群上改口「不急、時間站在我們這邊」、還說 deal「根本還沒完全談好」、而且美國對 Hormuz 的封鎖「要等協議完成才解除」。再加上核子、解凍資產那幾條還在吵、伊朗 Tasnim 說草案「隨時可能破局」。所以今天的畫面是：市場已經先把和平慶祝完了、deal 本人卻說「別急」。市場跑在 deal 前面。今晚 customer-b 來。',
  actions: [
    { type: 'bgm', track: 'chill-lofi', command: 'play' },

    {
      type: 'narration',
      text: '禮拜一晚上 9 點、東京。週末那份「大致談好」的 deal、今天一開盤就被市場用力擁抱——Nikkei 225 盤中首度站上 65,000、創歷史新高。要先講一個背景：美國今天 Memorial Day 休市、整個亞洲假期淡量、人少、所以漲勢被放大。油這邊是崩的——WTI 早盤 -5.87% 到 $90.93、Brent -5.58% 到 $97.76、跌破 $100。理由就一個：「Hormuz 要重開」的預期。油最怕的是斷供、海峽一旦要開、囤了好幾個月的戰爭溢價就洩光。但今天最有意思的、是 Trump 自己踩了煞車——他禮拜六還說「largely negotiated、即將宣布」、今天卻在社群上改口「不急、時間站在我們這邊」、還補一句 deal「根本還沒完全談好」、而且美國對 Hormuz 的封鎖「要等協議完成才會解除」。加上核子、解凍被凍結的資產那幾條還在吵、伊朗 Tasnim 說草案「隨時可能破局」。所以今天的畫面很妙：市場已經先把「和平」慶祝完了、deal 本人卻在喊「別急」。市場跑在 deal 前面。今晚 customer-b 來。',
      duration: 6000,
    },

    {
      type: 'market-data',
      data: {
        tickers: [
          { symbol: 'Nikkei 225（首度站上 65,000、紀錄）', price: 65000.0, change: 2.6 },
          { symbol: 'WTI 油（5/25 早盤）', price: 90.93, change: -5.87 },
          { symbol: 'Brent 油（5/25 早盤）', price: 97.76, change: -5.58 },
          { symbol: '美股（Memorial Day 休市）', price: 0, change: 0.0 },
          { symbol: 'USD/JPY（美元偏軟、carryover ~160）', price: 159.2, change: -0.4 },
        ],
        volatility: 18,
        vix: 15.0,
        rsi: 64.5,
        beta: 1.02,
        priceHistory: [61877, 62400, 62900, 63339, 63900, 64300, 64700, 65000],
        volumeHistory: [690, 540, 480, 430, 360, 300, 280, 240],
        sectors: [
          { label: 'WTI 油 -5.87%（$90.93、Hormuz 要重開預期 + Trump「不急」、戰爭溢價大洩）', value: 587, color: '#cc4422' },
          { label: 'Brent 油 -5.58%（$97.76、跌破 $100、油本波累計已 -10%+）', value: 558, color: '#cc4422' },
          { label: 'Nikkei +2.6%（首度站上 65,000 紀錄、油跌利多進口能源、假期淡量放大、% 為估算）', value: 260, color: '#22cc55' },
          { label: '美股休市（Memorial Day、今天沒有美國定價、亞洲在真空裡漲）', value: 0, color: '#888888' },
          { label: 'USD/JPY ~159（美元偏軟、deal 樂觀、日圓從 160 微回、carryover）', value: 40, color: '#22cc55' },
        ],
        headline: '禮拜一 21:00 JST、Asia 收盤：Nikkei 首度站上 65,000 紀錄（美休市、假期淡量放大）/ 油崩 WTI -5.87% $90.93、Brent -5.58% $97.76 跌破 $100 / Trump 踩煞車「不急、時間站我們這邊、還沒完全談好」、Hormuz 封鎖照舊 / 核子+解凍資產還在吵、Tasnim：草案隨時可能破局',
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
    { type: 'dialogue', character: 'chef', text: 'いらっしゃい。今天報紙頭版我老婆指給我看——「日經站上 65,000、史上最高」、她問我「是不是大家都賺大了、我們是不是也該買一點」。昨天 customer-a 才說、市場會「先付訂金、尾款等 Hormuz 真的有船通過」——今天這個漲法、是不是訂金付太多了？' },

    { type: 'move', character: 'customer-b', toTile: 'random-stool' },
    { type: 'sit', character: 'customer-b' },

    { type: 'dialogue', character: 'customer-b', text: '師傅、晚安。a 昨天那個「訂金尾款」的比喻、今天可以直接拿來用——而且你直覺很準，今天市場付的訂金，偏多了。Nikkei 站上 65,000 是真的、但有兩個「打折」要先講：第一、美國今天 Memorial Day 休市、整個盤是「半個世界在睡覺」的狀態、人少、量很淡；第二、淡量的時候、同樣的買單、推動的幅度會被放大。所以今天這個「紀錄」、含金量要打個問號。' },

    { type: 'move', character: 'chef', toTile: 'stove' },
    { type: 'wait', duration: 400 },

    { type: 'dialogue', character: 'chef', text: '人少、漲幅被放大——這個我太懂了！颱風天店裡只有三個客人、其中一個大聲說「好吃」、整間店聽起來都在稱讚；平常滿座六十個人、一個人喊好吃、根本沒人聽到。人少的時候、一個聲音被放大。今天的市場、是不是颱風天那三個客人？' },

    { type: 'dialogue', character: 'customer-b', text: '師傅、你這個「颱風天三個客人」、是我聽過解釋「低量行情」最好的版本、我明天要在晨會講。今天就是這樣——平常要很多買盤才推得動的指數、今天少少人就把它頂上 65,000。問題是、明天美國回來上班、六十個客人都進來了、其中有人會說「欸、這個價是颱風天三個人喊出來的、我不認」——那時候才知道 65,000 站不站得穩。低量創的新高、像踮腳尖拍的照片、好看、但站不久。' },

    { type: 'wait', duration: 400 },

    // ── The walk-back: Trump braking ──
    { type: 'dialogue', character: 'chef', text: '可是我不懂——Trump 禮拜六不是說「大致談好、即將宣布」嗎？今天怎麼反而改口「不急、還沒完全談好」？這不是倒退嗎？市場怎麼還漲？' },

    { type: 'dialogue', character: 'customer-b', text: '師傅、這就是今天最弔詭、也最值得學的一課。Trump 從「即將宣布」改口成「不急、時間站在我們這邊」——這在談判桌上，不是倒退、是「擺姿態」。當你跟對方說「我不急、我可以等」、其實是在說「你比我急、你先讓步」。這叫談判槓桿。他禮拜六放「即將宣布」、是給市場糖吃、也給伊朗壓力；今天收回來說「不急」、是回頭跟伊朗喊話「別以為我非簽不可」。同一個人、三天、兩種姿態、都是談判的一部分。' },

    { type: 'dialogue', character: 'chef', text: '說「我不急」其實是逼對方先讓步——這個我們進貨也會用！供應商開高價、我就說「沒關係、我這個月先用庫存、不跟你叫貨」、他怕我真的不叫、價格就鬆了。原來國家談判跟我跟魚販喊價，是同一套。' },

    { type: 'dialogue', character: 'customer-b', text: '師傅、一模一樣、只是檯面上的數字多幾個零。但這裡有個對市場很重要的點——Trump 嘴上喊「不急」，可是「Hormuz 的封鎖、要等協議完成才解除」這句沒變。也就是說：海峽現在還是封的、船還是過不去。市場今天把油砸了 5%、是賭「海峽快要開」；但 deal 本人說「還沒、急不得」。市場跑在前面、Trump 在後面拉繩子。這個落差，就是風險。' },

    { type: 'wait', duration: 400 },

    // ── Why oil crashed if the deal isn't done ──
    { type: 'dialogue', character: 'chef', text: '對啊、海峽明明還封著、油為什麼敢崩 5%？這不是賭得太早了嗎？萬一 deal 破局、油是不是又彈回去？' },

    { type: 'dialogue', character: 'customer-b', text: '師傅、你問到核心了。油崩 5%、不是因為「海峽今天開了」、是因為「市場認定海峽遲早會開」。油價反映的是「未來的預期」、不是「今天的事實」——一旦大家相信方向是「重開」、就會提前把戰爭溢價拿掉、不等真的開。這就是你說的「賭得早」。風險你也說對了：萬一像 Tasnim 警告的、草案因為核子、解凍資產那幾條破局、那這 5% 會以更快的速度彈回去——油跌得急、彈得更急。今天做空油的人，賺得開心，但手要放在門把上。' },

    { type: 'dialogue', character: 'chef', text: '手放在門把上——隨時準備跑。那核子、解凍資產那幾條、為什麼這麼難？聽起來就是錢跟武器的事。' },

    { type: 'dialogue', character: 'customer-b', text: '師傅、就是錢跟武器、而且是雙方最不肯讓的兩塊。核子——美國要伊朗把濃縮鈾交出來或稀釋掉，因為那是「能不能做核武」的鑰匙；伊朗說「這輪不談核子」，因為那是他們最後的籌碼，交了就沒牌了。解凍資產——伊朗要美國放他們被凍結的錢，這是他們的底線；美國想留著當談判的最後一張牌。你看，兩邊都把「最重要的東西」留到最後，誰先放誰就輸——所以這兩條卡住，整個 deal 就只能先簽「容易的」那半。' },

    { type: 'dialogue', character: 'chef', text: '都把最重要的留到最後、誰先放誰輸——這個僵局聽起來會拖很久。那市場今天這麼開心，是不是高興得太早？' },

    { type: 'dialogue', character: 'customer-b', text: '師傅、我的看法是——今天的漲，是「方向對、速度太快」。中東從開戰邊緣走到「在談停火、海峽要開」，方向確實是好的、這個沒錯；但市場用一天、低量、把好幾個月的樂觀一次吃完，速度太猛。我們 desk 今天反而是「賣一點給興奮的人」——不是看壞，是覺得「這個價，留給明天美國人回來驗貨」。如果驗得過，再追不遲；驗不過，今天追高的就套在颱風天那張照片裡。' },

    { type: 'wait', duration: 400 },

    // ── What to watch this week ──
    { type: 'dialogue', character: 'chef', text: '那這個禮拜、你會盯什麼、來判斷今天這個 65,000 是真的還是假的？' },

    { type: 'dialogue', character: 'customer-b', text: '師傅、我盯三個很具體的東西、跟你進貨驗貨一樣。第一、明天美國回來上班、量放大之後、65,000 守不守得住——這是「驗貨」。第二、Hormuz 有沒有「第一艘船真的通過」的新聞——口頭說要開不算，船過了才算，這是你說的「尾款」。第三、那份 14 條的 MoU 有沒有真的簽字、還是一直停在「即將宣布」。這三個只要有一個跳票，今天的漲就會吐回去一部分。三個都成真，那才是真的可以慶祝。' },

    { type: 'dialogue', character: 'chef', text: '口頭說要開不算、船過了才算——這個標準好。我跟食材商也是、他說「貨明天到」我不信、貨車真的停在門口卸貨我才信。在那之前，我不會把那批貨排進menu。' },

    { type: 'dialogue', character: 'customer-b', text: '師傅、「貨車停門口卸貨才信」——這就是我們這行說的「show me, don\'t tell me」。Trump 給了很多 tell（嘴上講）、但 show（真的做）還沒到——海峽還封著、字還沒簽。今天市場願意先信 tell、是因為方向太誘人；但聰明的錢，留了一手等 show。你那個「貨到才排 menu」，跟我們「簽字才加碼」，是同一種紀律。被放鴿子放怕了，自然就學會了。' },

    { type: 'wait', duration: 400 },

    // ── Closing — Monday, B alone ──
    { type: 'move', character: 'chef', toTile: 'counter-center' },
    { type: 'dialogue', character: 'chef', text: '禮拜一、開盤忙了一整天、你大概累——我做點暖的、扎實的：牛肉時雨煮蓋飯、半熟蛋、味噌湯加蜆仔、香物。蜆仔今天特別肥。你先生跟小孩吃過了吧？今晚能坐多久？' },

    { type: 'dialogue', character: 'customer-b', text: '師傅、牛肉時雨煮蓋飯、太對了、今天就想吃這種扎實的。我先生今天加班、小孩給我媽顧，我難得不用趕、可以坐到九點半。今天 desk 從早盤忙到收，客戶一直問「Nikkei 新高要不要追」，我回到嘴巴乾——標準答案就是剛跟你講那套，「等美國回來驗貨、等船過 Hormuz」。' },

    { type: 'dialogue', character: 'chef', text: '客戶問「要不要追」、跟客人問我「今天那道限定還有沒有」一樣——你不能因為他想要、就給他一個其實站不住的答案。賣一個你自己都不信的價，跟端一碗你自己都不想吃的麵，一樣會砸招牌。' },

    { type: 'dialogue', character: 'customer-b', text: '師傅、「賣一個你自己都不信的價、像端一碗你自己不想吃的麵」——這句我要記一輩子。我爸做三十年金融，退休前跟我說過幾乎一樣的話：「客戶要你追高，你最該做的是保護他，不是討好他。」今天我擋掉好幾個想追 65,000 的，他們現在大概在罵我保守，但下禮拜如果吐回來，他們會回來謝我。這行的對，常常要等一陣子才看得出來。' },

    { type: 'dialogue', character: 'chef', text: '保護他、不是討好他——你爸這句，跟我師父教我「客人說要加辣，你看他臉色不對也要勸他別加」一樣。對的事，當下常常不討喜。蓋飯馬上好，蜆仔味噌湯先給你暖著，半熟蛋我加在飯上、戳破拌一拌。今天辛苦了，慢慢吃。' },

    { type: 'dialogue', character: 'customer-b', text: '師傅、謝謝。明天美國回來、量一放大就知道 65,000 是真站還是踮腳；油會不會彈、要看 Tasnim 那個「草案破局」會不會成真。但那是明天的事。今晚牛肉蓋飯加半熟蛋，我先把這碗吃乾淨——你說的，手上要收乾淨才睡得著。' },

    { type: 'sfx', sound: 'chimes' },

    { type: 'wait', duration: 500 },
    { type: 'move', character: 'chef', toTile: 'stove' },

    {
      type: 'narration',
      text: '禮拜一晚上 10 點半、東京。今天的故事是「市場跑在 deal 前面」——Nikkei 225 首度站上 65,000、創歷史新高，但那是在美國 Memorial Day 休市、亞洲假期淡量裡拍的照片，像颱風天三個客人喊出來的「好吃」，含金量要打折；明天美國回來、量放大，才知道 65,000 站不站得穩。油崩——WTI -5.87% 到 $90.93、Brent -5.58% 到 $97.76 跌破 $100，賭的是「Hormuz 遲早要開」，提前把戰爭溢價洩掉。但 deal 本人在踩煞車：Trump 從禮拜六的「largely negotiated、即將宣布」改口「不急、時間站在我們這邊、根本還沒完全談好」——這是談判擺姿態（喊「我不急」逼對方先讓），不是倒退；而且 Hormuz 的封鎖「要等協議完成才解除」這句沒變，海峽現在還封著、船還過不去。核子、解凍資產兩條卡死——雙方都把最重要的留到最後、誰先放誰輸——伊朗 Tasnim 還說草案隨時可能破局。所以今天是「方向對、速度太快」：市場先信了 tell（嘴上講），但 show（真的做：簽字、船過 Hormuz）還沒到。Customer B 的 desk 今天「賣一點給興奮的人」、擋掉一堆想追 65,000 的客戶——她爸三十年金融那句「客戶要你追高、你最該做的是保護他、不是討好他」，跟師傅「客人要加辣、臉色不對也要勸」是同一件事；對的事，當下常常不討喜。她盯三件事驗貨：美國回來量放大守不守 65,000、Hormuz 第一艘船過沒過、那份 14 條 MoU 簽沒簽。今晚牛肉時雨煮蓋飯配半熟蛋與肥蜆仔味噌湯，手上收乾淨才睡得著。明天美國回來驗貨，65,000 見真章。',
      duration: 6000,
    },
  ],
};
