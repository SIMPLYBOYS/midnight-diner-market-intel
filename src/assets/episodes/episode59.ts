import type { Episode } from '../../engine/types';

/**
 * Sources verified 2026-06-08 (Mon JST):
 * - ASIA MELT-DOWN — bigger than any of ep58 B's three scenarios:
 *   - KOSPI -5% close (down 13% from last week's record); INTRADAY -8%
 *     triggered an EMERGENCY CIRCUIT BREAKER halting trading 20 min.
 *   - Nikkei 225 -~4% — SoftBank Group -7.5%, SUMCO -10%+, Renesas
 *     Electronics -10%+ (the AI/chip chain took it disproportionately).
 *   (Investing.com 6/8, multibagg 6/8)
 * - TWIN DRIVERS converging instead of decoupling — ep57/58's "AI vs
 *   Iran decouple" thesis got a real-time anti-stress-test today:
 *   1) AI panic continuation from Friday: Broadcom outlook + strong US
 *      jobs report → traders pricing a Fed RATE HIKE this year.
 *   2) FRESH KINETIC IRAN ESCALATION: Israel struck military targets in
 *      WESTERN AND CENTRAL Iran. Brent +3.5% to $96.45.
 *   Today is a CORRELATED REGIME — AI and Iran pushing the same way at
 *   the same time. The decouple thesis still holds in calm; in this
 *   kind of joint stress it correlates. (Reuters/Investing.com 6/8)
 * - IRAN DEAL: Khamenei's military adviser said negotiations are "at a
 *   deadlock". Trump's response: "We're very close to a deal, or I'm
 *   going to blow the hell out of them." Maximum carrot+stick. Trump
 *   also said he will NOT unfreeze Iranian assets before a ceasefire
 *   deal is reached — consistent with ep58's $24B-to-Gulf-states twist.
 *   (Al Jazeera 6/7, Wikipedia 2025-26 negotiations)
 * - POLYMARKET regime-fall ticked up 1.85% Sat → 2.2% today. Still in
 *   range (1.45-2.95%). Did NOT spotlight as action block (ep57+ep58
 *   already used; the move is small relative to today's market). Cited
 *   in narration. The fact that the bet only moved +0.35pp despite
 *   Kospi circuit breaker + Israeli strike is itself the story:
 *   "deal-mortality" prices in much lower than "deal stress."
 * - ep58's three scenarios for the Monday open (40-40-20: mild drop /
 *   intraday recovery / no impact) all UNDER-estimated. None priced
 *   "Kospi circuit breaker + Israeli strike + Iran negotiations
 *   deadlock + Trump 'blow hell'". B will own this.
 * - sectors[].value = |%change|x100; single-stock chip names dominate
 *   the chart since they are the day's story.
 * - Continuity & CAST: PER USER REQUEST tonight is A + B TOGETHER. A
 *   came back from 箱根 this afternoon (ep57 set up the phone-handover
 *   trip); B was at desk from 6:30 watching the melt-down. They're
 *   both at the diner tonight — A returning to a worse market than he
 *   left, B intensely processed by it. Persona discipline: A male
 *   analyst, B female sell-side desk with "我先生"+kids+retired-finance
 *   father. Chef's wife callback: she saw "Kospi 8% 跌觸 circuit
 *   breaker" + "Israel 打了伊朗" on TV ("這個比上週還大"). Warsh
 *   first FOMC still 6/16-17 — now 8 days out, NEW context: Fed
 *   hike pricing.
 */
export const EPISODE_59: Episode = {
  id: 'ep-59',
  date: '2026-06-08',
  title: '20260608 禮拜一晚上、Asia melt-down——Kospi 開盤 -8% 觸 emergency circuit breaker 收 -5%（一週累計 -13%）、Nikkei -4% SoftBank -7.5% SUMCO/Renesas -10%；Israel 真的打了伊朗西部中部（kinetic 第二輪）、Brent +3.5% $96.45；Trump「very close or blow hell」max 力度；ep58 三情境全炸（這次是 AI+Iran 同時推、correlate regime 來了）；A 從箱根回、B 在 desk 看完整場、兩位今晚同台',
  description: '禮拜一晚上、Tokyo 21:00。今天是這幾個月最戲劇性的一天——Kospi 開盤 -8% 觸 emergency circuit breaker（停 20 分鐘）、收 -5%、一週累計從紀錄高跌 13%；Nikkei -4%、SoftBank -7.5%、SUMCO 跟 Renesas 兩家半導體權值都跌 -10% 以上。但今天的故事不只是 AI——Israel 真的打了伊朗西部跟中部的軍事目標、Brent +3.5% 衝到 $96.45。再加上 Khamenei 的軍事顧問說「negotiations 陷入死局」、Trump 回應「very close to a deal, or I\'m going to blow the hell out of them」、max 力度的胡蘿蔔+棒子。ep57/58 a 跟 b 才剛 graduate 的「AI 跟 Iran decouple」thesis、今天碰到 correlated regime——兩條軌道同時往下推。A 今天從箱根回來、進門才知道 Friday 那場小崩演變成 Monday 這場大崩；B 早上 6:30 上 desk、整天看著 Kospi circuit breaker 跟新聞跑、嘴乾到不行。今晚兩位都來、要把這禮拜怎麼開、好好對一遍 framework。',
  actions: [
    { type: 'bgm', track: 'chill-lofi', command: 'play' },

    {
      type: 'narration',
      text: '禮拜一晚上 9 點、東京。今天是這幾個月最戲劇性的一天。Kospi 開盤 -8% 觸 emergency circuit breaker、停 20 分鐘、收 -5%、一週累計從紀錄高跌 13%——南韓 chip-heavy 的 Kospi 被 AI 鏈崩磚一磚的砸。Nikkei -4%、SoftBank -7.5%、SUMCO 跟 Renesas 兩家半導體權值都跌 -10% 以上。但今天的故事不只是 AI——Israel 真的對伊朗西部跟中部的軍事目標下手了、Brent +3.5% 衝到 $96.45。地緣面：Khamenei 的軍事顧問說 negotiations「at a deadlock」、Trump 回應「We\'re very close to a deal, or I\'m going to blow the hell out of them」、max 力度的胡蘿蔔+棒子同時拿。ep57 / 58 customer-a 跟 customer-b 才剛 graduate 的「AI 跟 Iran decouple」thesis、今天碰到 correlated regime——兩條軌道同時往下推、新人在 desk 上問「a 哥、不是說 decouple 嗎」。a 從箱根回來、進門才知道 Friday 那場小崩演變成 Monday 這場大崩；b 早上 6:30 上 desk、整天看著 Kospi circuit breaker 跟 Israel strike 新聞跑、嘴乾到不行。今晚兩位同時來、把這禮拜怎麼開、好好對一遍。',
      duration: 6000,
    },

    {
      type: 'market-data',
      data: {
        tickers: [
          { symbol: 'Kospi（6/8 收、開盤 -8% 觸 CB）', price: 0, change: -5.0 },
          { symbol: 'Nikkei 225（6/8 收、SoftBank 拖）', price: 64200.0, change: -4.0 },
          { symbol: 'SoftBank（6/8）', price: 0, change: -7.5 },
          { symbol: 'Brent 油（6/8、Israel 打伊朗）', price: 96.45, change: 3.5 },
          { symbol: 'USD/JPY（carryover ~159）', price: 159.0, change: 0.0 },
        ],
        volatility: 32,
        vix: 24.8,
        rsi: 26.0,
        beta: 1.15,
        priceHistory: [66934, 66400, 66051, 67212, 68402, 67470, 66400, 64200],
        volumeHistory: [700, 740, 820, 860, 900, 1050, 1200, 1380],
        sectors: [
          { label: 'SUMCO -10%+（6/8、AI 鏈半導體 wafer、Nikkei 權值連砍）', value: 1000, color: '#cc4422' },
          { label: 'Renesas Electronics -10%+（6/8、汽車+AI 雙打擊、Nikkei 權值）', value: 1000, color: '#cc4422' },
          { label: 'SoftBank -7.5%（6/8、Nikkei 最大權值之一、AI 投資+Vision Fund 估值雙砍）', value: 750, color: '#cc4422' },
          { label: 'Kospi -5%（收 -5% / 盤中 -8% 觸 emergency CB / 一週累計 -13%）', value: 500, color: '#cc4422' },
          { label: 'Nikkei 225 -4%（半導體權值砍重了、寬度也跌、ep58 三情境全炸）', value: 400, color: '#cc4422' },
        ],
        headline: '禮拜一 21:00 JST、Asia 收盤、 melt-down：Kospi 開盤 -8% 觸 emergency CB 收 -5% 一週累計 -13% / Nikkei -4% SoftBank -7.5% SUMCO/Renesas -10%+ / Israel 打伊朗西部中部 Brent +3.5% $96.45 / Khamenei 軍事顧問：negotiations「at a deadlock」/ Trump：「very close to a deal, or I\'m going to blow the hell out of them」/ AI+Iran 同時推 correlated regime',
      },
    },

    { type: 'enter', character: 'chef', toTile: 'stove' },
    { type: 'wait', duration: 500 },
    { type: 'move', character: 'chef', toTile: 'prep-area' },
    { type: 'wait', duration: 500 },
    { type: 'move', character: 'chef', toTile: 'stove' },
    { type: 'wait', duration: 400 },

    // ── A enters first, fresh from 箱根 ──
    { type: 'enter', character: 'customer-a', toTile: 'entrance' },
    { type: 'move', character: 'chef', toTile: 'counter-center' },
    { type: 'dialogue', character: 'chef', text: 'いらっしゃい。a、你回來了——箱根怎麼樣？我老婆今天從早上開始就跟我說「a 不在的時候世界又壞了」、Kospi 8% 跌觸 circuit breaker、Israel 真的打了伊朗、我們倆看新聞看一整天。' },

    { type: 'move', character: 'customer-a', toTile: 'random-stool' },
    { type: 'sit', character: 'customer-a' },

    { type: 'dialogue', character: 'customer-a', text: '師傅、晚安。箱根三餐好飯好酒好溫泉、手機真的給太太保管、24 小時沒看半條新聞——我以為這就是 a graduate test。結果中午吃完午餐、太太突然臉色不太對、跟我說「a、我覺得你可能要看一下手機」。我說怎麼了、她說「Kospi 上新聞了」。我那一瞬間心臟漏一拍——這禮拜我們 desk 押 Kospi 的部位不小、想說「framework graduate 就被測試」。最後我還是沒看、她說「不嚴重的話我不會跟你說」、我說「妳告訴我有沒有打仗就好」、她說「打了、Israel 打伊朗」。我聽完點頭、又繼續吃飯——那一瞬間我才發現、所謂的 framework graduate、不是「會猜對」、是「就算猜錯、人不會崩」。' },

    { type: 'move', character: 'chef', toTile: 'stove' },
    { type: 'wait', duration: 400 },

    { type: 'dialogue', character: 'chef', text: 'graduate 不是會猜對、是猜錯人不崩——這比你上禮拜講的還深一層。那你後來看新聞了嗎？看完什麼感覺？' },

    { type: 'dialogue', character: 'customer-a', text: '師傅、回程新幹線上太太說「現在可以看了」、我滑了 5 分鐘看到 Kospi -8% CB、Nikkei -4%、Brent 衝、Trump「blow hell」那段——第一反應是腎上腺素衝、想立刻電話 desk；但我深呼吸三次、想「明天早上 6:30 desk 開會、現在多看一小時沒用」、又把手機關了。坐了 90 分鐘新幹線看窗外、太太繼續吃便當。然後我意識到一件事——上禮拜我講 framework graduate 是 thesis 層的、今天測試的是「人」這一層。Thesis 對不對是一回事、自己會不會被市場拖到崩潰是另一回事。今天我兩個都過關了、但是運氣大於實力。' },

    { type: 'wait', duration: 400 },

    // ── B enters from desk ──
    { type: 'enter', character: 'customer-b', toTile: 'entrance' },
    { type: 'move', character: 'customer-b', toTile: 'random-stool' },
    { type: 'sit', character: 'customer-b' },
    { type: 'dialogue', character: 'chef', text: 'いらっしゃい、b 也來了——你今天 desk 6:30 上、一定打仗一整天、累壞了。' },

    { type: 'dialogue', character: 'customer-b', text: '師傅、晚安。a 你回來了——我從早上看 Kospi 開盤 -8% 觸 CB 那一刻、就知道我昨天設的三情境全炸了、第一反應是「a 還在箱根、最該驕傲他的 framework 沒崩、結果禮拜五給他擦個耳光、禮拜一直接打他臉」。然後我自己 desk 一整天忙到沒時間想自己——客戶電話從早到晚、每 5 分鐘來一通、80 通起跳。' },

    { type: 'move', character: 'chef', toTile: 'stove' },
    { type: 'wait', duration: 400 },

    // ── B owns the failed scenario forecast ──
    { type: 'dialogue', character: 'customer-a', text: 'b、妳那三情境我昨天回程已經看到、40-40-20。今天的實際是哪個？我聽師傅描述、好像 Kospi -8% CB 不在妳清單裡。' },

    { type: 'dialogue', character: 'customer-b', text: 'a、實話講——三個都錯。情境一最壞情況我估 Nikkei -2%、實際 -4%；Kospi 我根本沒想過會 8% 觸 CB；Israel 打伊朗這條我完全沒納入——昨晚我估「AI 跟 Iran decouple」、今天它們 correlate 起來一起推。我這 12 小時最大的學習就是——「decouple」是平時狀態、「correlate」是壓力狀態。我昨晚 thesis 講對了一半（decouple 存在）、漏了另一半（壓力大時它會 break down）。明天晨會我要把這條補進 framework。' },

    { type: 'dialogue', character: 'chef', text: '平時 decouple、壓力大時 correlate——這個我做生意三十年的話、原來大家都懂這套？我們街上、平常 7 家店、每家有自己的客群；颱風天會發現只剩兩家有客——因為剩下的客人只認最近、不分類型。平時看起來分散、極端時刻才知道大家都靠同一塊。市場也這樣？' },

    { type: 'dialogue', character: 'customer-a', text: '師傅、你這個「平時 7 家店分散、颱風天只剩兩家」、跟 b 講的「decouple→correlate regime change」是完全一樣的事。專業詞叫「correlation regime」——在金融危機學裡是核心概念。1987、2008、2020——每次大事件、原本看起來不相關的東西全部跌成同一個方向。今天小型 version 又上演一遍——AI、Iran、Fed 升息恐懼、Israel-Iran 戰爭、四條本來各自走的軌道、一個禮拜內擠到同一個情境。' },

    { type: 'wait', duration: 400 },

    // ── B and A debate: what to do for tomorrow ──
    { type: 'dialogue', character: 'customer-b', text: 'a、那你回來看完今天、明天 desk 怎麼處理？我這邊倉位已經砍了 40%、剩下的是長線部位不動。但我自己覺得砍得不夠果斷、Kospi CB 時應該直接全清。' },

    { type: 'dialogue', character: 'customer-a', text: 'b、我的看法跟妳反一邊——妳砍 40% 我覺得 OK、不必砍更多。理由有三：第一、Polymarket 政權垮台還是 2.2%、新範圍上限沒超過 2.95%——意思是「最壞情境機率沒突破」、市場恐慌但沒崩盤；第二、Israel 這條我們已經習慣「kinetic 還在 deal 框內」——還是 managed escalation 框架；第三、Kospi CB 通常是 forced selling 高峰、80% 機率明天會回 50%。所以我會建議客戶——別 panic 全清、留長線部位、把那 40% 留現金、等回穩再買回來。' },

    { type: 'dialogue', character: 'customer-b', text: 'a、你三條我同意兩條、第二條我有保留——Israel 直接打到伊朗本土軍事目標、是這禮拜「managed escalation」的高峰、可能要把這條重新分類成「unmanaged 風險升」。但 Polymarket 還沒驗證這個 reclassify、所以我跟你說的「等驗證」一致。我們 desk 內部 split 5-5——一半人覺得「managed」、一半覺得「開始要懷疑」。今天我才意識到、framework 也要 stress test、不只是 thesis。' },

    { type: 'dialogue', character: 'customer-a', text: 'b 妳這「framework 也要 stress test」是我今天最大的進步——上禮拜六我講「stress test 反向證明 framework」、那是 thesis 層面；今天 framework 本身被 stress、我們才發現「managed vs unmanaged 分類也是個 thesis、也會錯」。所以實際做法應該是——保留 framework 但把 confidence 降一級。從「八分信二分留」、降到「七分信三分留」、二分留變三分、新增「framework 分類偏差」這個項目。' },

    { type: 'wait', duration: 400 },

    // ── A and B agree the value of two perspectives ──
    { type: 'dialogue', character: 'chef', text: '聽你們兩個今晚對話、跟以前一個一個來不一樣——你們一個 desk 在場見一個外面回來、兩種視角同時、自己會修自己、比一個人解釋更厚實。' },

    { type: 'dialogue', character: 'customer-b', text: '師傅、就是這個——a 你在外面、沒看盤跑、回來看 framework 一眼就抓出「妳的 7-3 比 8-2 更精確」；我在 desk 12 小時、被市場洗、會 over-react、會想要砍光。一個從外面看、一個從裡面看、兩個視角合起來、才有完整的 picture。其實這也是「兩個 thesis 校準」的具體版本。' },

    { type: 'dialogue', character: 'customer-a', text: '師傅、其實我們倆過去幾個月幾乎都是「同一個議題、各自獨白」、沒有真的對話。今天 b 妳這 12 小時 desk 的細節、跟我那 90 分鐘新幹線回程的反省、合在一起、才完整。明天我們 desk 早上應該開一個 joint review、把這禮拜的 framework 校準寫成 white paper、不是各做各的。' },

    { type: 'dialogue', character: 'chef', text: '各自獨白變對話——這個重。我跟我老婆三十年也一樣、剛開店那幾年我們各做各的、她接電話我煮飯、不分享、店裡氣氛總有點緊。後來改成「每晚收店後互相講今天 3 件小事」、店穩了下來。你們今晚這頓飯就是這套——你們的 white paper、就是兩個獨白變對話的產物。' },

    { type: 'wait', duration: 400 },

    // ── Closing — Monday, A+B together ──
    { type: 'move', character: 'chef', toTile: 'counter-center' },
    { type: 'dialogue', character: 'chef', text: '今天難得兩位同時來、又是大事日、我做點扎實的：すき焼き 兩人份、A5 和牛、蔥、香菇、豆腐、最後下烏龍麵收尾。一鍋對著吃、邊吃邊聊、跟你們今晚這個「對話補單獨」的主題搭。配冷酒一壺。' },

    { type: 'dialogue', character: 'customer-a', text: '師傅、和牛壽喜燒、太對了。對著吃、邊聊邊吃、是今晚最需要的。b 妳明早 desk 6:30 還上嗎？我自己想晚一點 7:30 去、想多睡半小時、頭腦先過今晚的對話。' },

    { type: 'dialogue', character: 'customer-b', text: 'a、6:30 一定要、我先生今早 5:30 就送小孩去他爸媽家、我直接 6 點起床。但今晚我可以多坐一點、和牛壽喜燒不能匆匆吃。我先生答應今晚自己睡、給我空間。' },

    { type: 'dialogue', character: 'customer-a', text: 'b 妳這禮拜後半我會看著、不會讓妳 11 點還在 desk。我跟 desk head 講、我們倆禮拜五排一個半天輪流走、你回家陪小孩、我回家陪太太——「對話補單獨」、市場上跟生活上、同一個道理。' },

    { type: 'dialogue', character: 'chef', text: '市場上跟生活上同一個道理——這句今晚收。我跟我老婆店裡也是、一個人扛跟兩個人扛、長期下來差別在「會不會累垮」。你們倆今晚這頓、是把上週末的疲勞跟今天的衝擊一起消化。和牛我片得薄、蛋打成糖心、湯熬到 reduce 三分之一、烏龍麵留到最後吸湯。慢慢吃、明早 6:30 的事 6:30 再說。' },

    { type: 'sfx', sound: 'chimes' },

    { type: 'wait', duration: 500 },
    { type: 'move', character: 'chef', toTile: 'stove' },

    {
      type: 'narration',
      text: '禮拜一晚上 10 點半、東京。今天的故事是「ep58 三情境全炸、AI+Iran 從 decouple 變 correlated regime、framework 本身被 stress test」。Kospi 開盤 -8% 觸 emergency CB 收 -5% 一週累計從紀錄高跌 13%、Nikkei -4%（SoftBank -7.5%、SUMCO/Renesas -10%+）、Israel 真打伊朗西部+中部、Brent +3.5% $96.45、Khamenei 軍事顧問說「at a deadlock」、Trump「very close to a deal, or I\'m going to blow the hell out of them」max 力度。a 跟 b 今晚同台——a 從箱根回來、回程新幹線太太說「Israel 打了伊朗」、a 點頭繼續吃便當、發現「graduate 不是會猜對、是猜錯人不崩」；b 在 desk 看完整場 melt-down、80+ 通電話、自己學到「decouple 是平時、correlate 是壓力下、framework 也要 stress test、不只 thesis」。兩位對話 produce 的進步——decouple→correlate regime（師傅:「平時 7 家店分散、颱風天只剩兩家」）、「managed→unmanaged 分類也是 thesis、也會錯」、framework 信心降一級「八分信→七分信、三分留」、加「framework 分類偏差」項目；倉位 b 砍 40% / a 不砍更多（理由：Polymarket 還在 2.2% 範圍、最壞情境機率沒突破；Kospi CB 是 forced selling 高峰 80% 機率明日回 50%）。最大收穫不是分析、是「對話補單獨」——a 在外面看、b 在裡面看、過去幾個月各自獨白、今晚才是真正對話、明早 desk joint review white paper（師傅:「我跟老婆三十年從各做各的到每晚收店講今天 3 件小事、店穩了下來」）；禮拜五排半天輪流走（a 陪太太、b 陪小孩、市場上跟生活上同一個道理）。すき焼き A5 兩人份、邊聊邊吃、慢慢吃、明早 6:30 的事 6:30 再說。',
      duration: 6000,
    },
  ],
};
