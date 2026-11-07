import type { Episode } from '../../engine/types';

/**
 * Sources verified 2026-06-12 (Fri JST):
 * - THE DEADLINE RESOLVED — ep62's three scenarios collapsed onto the
 *   one A flagged as most likely (50%, "延長"):
 *   On 6/11 Trump announced a 60-DAY CEASEFIRE EXTENSION (NOT a final
 *   peace). Terms: Strait of Hormuz reopens "unrestricted" — no tolls,
 *   no harassment, Iran removes all mines within 30 days; Iran may sell
 *   oil freely; the 60-day window is to negotiate the hard nuclear
 *   stuff. Trump said "all parties" approved the final points. (Reuters
 *   via web, Wikipedia 2026 Iran war ceasefire, 6/11)
 * - THE CATCH (this is the episode's spine): it is an EXTENSION, not a
 *   signing. Iranian officials said "no final decision has been reached"
 *   and "intermittent violations persist." The enriched-uranium /
 *   nuclear core is deferred 60 days AGAIN. So ep62 scenario one (簽了)
 *   and scenario two (延長/續談) blended: dressed as a breakthrough,
 *   structured as a can-kick. A predicted exactly this — "deadline 最
 *   常見的結局是延長."
 * - OIL CRATERED to two-month lows on the de-escalation — exactly the
 *   "心電圖" A&B told chef to watch the morning after:
 *   Brent ~$89/bbl, WTI ~$86.50/bbl, both slipping after Trump said the
 *   final points were approved by "all parties." Global stocks lifted.
 *   (Reuters/CNBC 6/11) Levels are the sourced approximate prints; % is
 *   derived from ep61's $93.02/$89.67 → ~-4.3% Brent / ~-3.5% WTI,
 *   flagged approximate.
 * - POLYMARKET regime-fall REVERSED: yesterday's evacuation spike
 *   (1.35%→2.2%, ep62) un-wound back to 1.5% (0.015) today, vol ~$52.6M,
 *   range 1.25-2.75%. THE VALIDATION: the embassy evacuation was the
 *   "收椅子 / closing-pressure" version, not "搬瓦斯桶 / real war prep" —
 *   cost-to-fake framework from ep62 paid off within 24h. NOT used as an
 *   action block (used it ep62 yesterday; back-to-back is heavy) — cited
 *   in narration + sectors. (public/polymarket/latest.json,
 *   collectedAt 2026-06-12T01:25:09Z)
 * - ROTATION: with Iran de-escalating, attention rotates BACK to the AI
 *   cycle + Fed path. Warsh's FIRST FOMC is 6/16-17 (Tue/Wed next week,
 *   4 days out) — B's reentry batch 2 is gated on it (ep60/61). Iran
 *   fades to "background music" again (ep57 decouple thesis).
 * - Equity prints: no clean dated 6/12 Asia closes at episode time;
 *   "global stocks lifted" is sourced qualitatively. Carried grey.
 * - Continuity & CAST: ep62 A+B together (deadline eve). Tonight RETURN
 *   TO SOLO — CUSTOMER A, who owns the scenario-prediction payoff and
 *   the "falsifiable promise" framework. Written as independent regular
 *   (我們桌上, not 我們 desk; no joint-review references) per the personas
 *   CONTINUITY DEBT note. A persona: male analyst late 30s, spouse 太太,
 *   framework vocab (七分半信二分半留), no over/under betting. Chef's
 *   wife callback: yesterday she was scared ("要打仗了嗎", ep62); tonight
 *   chef brings the de-escalation home — but A cautions against
 *   overselling 延長≠和平. The "油是心電圖" line from ep62 pays off:
 *   chef checked oil before opening and it had cratered. Warsh FOMC
 *   6/16-17 now the live next binary.
 */
export const EPISODE_63: Episode = {
  id: 'ep-63',
  date: '2026-06-12',
  title: '20260612 禮拜五晚上、deadline 揭曉、落在 A 押的那一格——Trump 宣布 60 天停火「延長」（不是簽字、是把核子那塊又往後丟 60 天）、Hormuz 無限制重開免通行費伊朗 30 天清雷；油崩到兩個月低點（Brent ~$89 WTI ~$86.50、A 說的心電圖確認緩和）、Polymarket 從昨天 2.2% 跌回 1.5%（撤僑證實是收椅子不是搬瓦斯桶、cost-to-fake 24 小時內兌現）；A 對了但不居功——「deadline 最常見的結局是延長、我押的是 base rate 不是洞見」',
  description: '禮拜五晚上、Tokyo 21:00。昨天 deadline 前夕的撤僑驚嚇、今天揭曉了——而且落在 a 昨晚押機率最高（五成）的那一格：延長。Trump 昨天宣布、雙方達成「再 60 天」的停火延長——注意、是「延長」、不是「簽字」。Hormuz 會無限制重開、免通行費、伊朗 30 天內清掉水雷、伊朗可以自由賣油。但核子那塊——enriched uranium、最硬的骨頭——又被往後丟 60 天。伊朗官員還補一句「沒有最終決定、零星違規持續」。所以昨天 a 講的三劇本、不是劇本一（簽了）、不是劇本三（開打）、是中間那個——包裝成突破、結構是拖延。市場的反應很乾淨——油崩到兩個月低點、Brent 掉到 $89 附近、WTI 到 $86.50；昨天 a 跟 b 跟師傅說「明天開店前看一眼油、那是這場戲的心電圖」、今天師傅真的看了、油直直往下、緩和確認。Polymarket「政權垮台」從昨天撤僑嚇出來的 2.2%、今天跌回 1.5%——撤僑被證實是「收椅子」、不是「搬瓦斯桶」、cost-to-fake 框架 24 小時內就兌現了。今晚 a 一個人來——他押對了最可能的劇本、但他想跟師傅講的不是「我猜對了」、是「為什麼猜對最可能的事、不值得驕傲」。',
  actions: [
    { type: 'bgm', track: 'chill-lofi', command: 'play' },

    {
      type: 'narration',
      text: '禮拜五晚上 9 點、東京。昨天 deadline 前夕那場撤僑驚嚇、今天揭曉了——落在 a 昨晚押機率最高、五成的那一格：延長。Trump 昨天宣布、雙方達成「再 60 天」的停火延長。注意這個字——是「延長」、不是「簽字」。Hormuz 會無限制重開、免通行費、伊朗 30 天內清掉自己佈的水雷、伊朗可以自由賣油。聽起來很像終於成了。但核子那塊——enriched uranium、最硬的那根骨頭——又被往後丟 60 天。伊朗官員還補一句「沒有最終決定、零星違規持續」。所以昨天 a 講的三劇本、答案不是劇本一的「簽了」、也不是劇本三的「開打」、是中間那個——包裝成突破、結構是拖延。市場的反應很乾淨、也驗證了昨天那句話——油。油崩到兩個月低點、Brent 掉到 $89 附近、WTI 到 $86.50。昨天 a 跟 b 跟師傅說「明天開店前看一眼油、那是這場戲的心電圖、比任何頭條準」——今天師傅真的看了、油直直往下、緩和確認、比新聞還早告訴他答案。Polymarket「伊朗政權 6 月底前垮台」、從昨天撤僑嚇出來的 2.2%、今天跌回 1.5%——撤僑被證實是「收椅子」、不是「搬瓦斯桶」、a 昨天那個 cost-to-fake 框架、24 小時內就兌現了。全球股市跟著鬆一口氣往上。今晚 a 一個人來。',
      duration: 6000,
    },

    {
      type: 'market-data',
      data: {
        tickers: [
          { symbol: 'Brent 油（6/11、兩個月低、緩和）', price: 89.0, change: -4.3 },
          { symbol: 'WTI 油（6/11、兩個月低）', price: 86.5, change: -3.5 },
          { symbol: 'Polymarket 政權垮台（2.2%→1.5% 回吐撤僑驚嚇）', price: 1.5, change: -0.7 },
          { symbol: 'Nikkei 225（全球股升、6/12 close 未及 carry）', price: 0, change: 0.0 },
          { symbol: 'USD/JPY（carryover ~159）', price: 159.0, change: 0.0 },
        ],
        volatility: 18,
        vix: 15.4,
        rsi: 52.0,
        beta: 1.02,
        priceHistory: [96.45, 95.5, 94.2, 93.02, 92.0, 91.0, 90.0, 89.0],
        volumeHistory: [1300, 1150, 1000, 920, 860, 820, 800, 760],
        sectors: [
          { label: 'Brent 油 -4.3%（~$89、兩個月低、「60 天延長」+ Hormuz 無限制重開、戰爭溢價大洩）', value: 430, color: '#cc4422' },
          { label: 'WTI 油 -3.5%（~$86.50、跟 Brent 同向、緩和確認、A 說的心電圖）', value: 350, color: '#cc4422' },
          { label: 'Polymarket -0.7pp（2.2%→1.5%、撤僑驚嚇回吐、cost-to-fake 證實是收椅子）', value: 70, color: '#22cc55' },
          { label: '全球股升（Trump「all parties 批准最終要點」、deal 樂觀、6/12 Asia close 未及）', value: 0, color: '#888888' },
          { label: '核子那塊又延 60 天（enriched uranium 最硬骨頭、伊朗「無最終決定、零星違規持續」）', value: 0, color: '#888888' },
        ],
        headline: '禮拜五 21:00 JST、deadline 揭曉：Trump 宣布 60 天停火「延長」（不是簽字、核子又往後丟 60 天）/ Hormuz 無限制重開免通行費伊朗 30 天清雷 / 油崩兩個月低 Brent ~$89 WTI ~$86.50（A 的心電圖確認緩和）/ Polymarket 2.2%→1.5% 撤僑回吐 cost-to-fake 證實收椅子 / 伊朗「無最終決定、零星違規持續」/ 下週 6/16-17 Warsh 首場 FOMC',
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
    { type: 'dialogue', character: 'chef', text: 'いらっしゃい。a、我先謝謝你跟 b 昨晚那句話——「開店前看一眼油」。今天早上我五點半進店、開火之前、先翻手機看了油價、直直往下、我心裡就有底了。等我老婆七點起來、我已經可以跟她說「不打了、油跌了、是好消息」。她昨天怕了一整晚、今天聽完、整個人鬆下來、跟我說「原來油會先告訴你」。' },

    { type: 'move', character: 'customer-a', toTile: 'random-stool' },
    { type: 'sit', character: 'customer-a' },

    { type: 'dialogue', character: 'customer-a', text: '師傅、晚安。你今天早上那個動作——開火前先看油——比我們桌上一半的人都專業。多少人是先看頭條、被嚇一跳、然後才想起來看價格。你直接看了最誠實的那個數字。你老婆那句「原來油會先告訴你」、其實就是我們這行的全部——價格比新聞早、比評論誠實。今天油在亞洲都還沒開盤的時候、就已經把答案寫在那裡了。' },

    { type: 'move', character: 'chef', toTile: 'stove' },
    { type: 'wait', duration: 400 },

    { type: 'dialogue', character: 'chef', text: '那我直接問你最想問的——你昨晚押五成那個「延長」、今天兌現了。你猜對了。但你進門的表情、不像猜對的人。怎麼了？' },

    { type: 'dialogue', character: 'customer-a', text: '師傅、你太會看人了。是、我押對了——但我今晚最想跟你講的、是「為什麼押對這件事、不值得驕傲」。我昨晚說「deadline 最常見的結局是延長」、那不是我的洞見、那是 base rate——基本機率。歷史上幾百次談判 deadline、延長的比例就是最高。我做的事、只是「不要跟基本機率作對」。猜對「最可能發生的事」、就像猜「明天太陽會升起」——對、但不是本事。真正的本事、是知道什麼時候基本機率會失靈、那種時候我也常常看不出來。' },

    { type: 'dialogue', character: 'chef', text: '猜對最可能的事不算本事、像猜太陽會升起——這個謙虛我服。但我反過來想、那些「不照基本機率、偏要賭小機率」的人呢？他們是不是偶爾賭中、就被當天才？' },

    { type: 'dialogue', character: 'customer-a', text: '師傅、你這一刀切到我們這行最大的幻覺。是——賭中小機率的人、會被捧成天才、上電視、出書。但你把時間拉長看、他們大部分的賭注都輸了、只是輸的時候沒人報。我們桌上有個冷酷的說法——「不要羨慕那個賭對黑天鵝的人、要去算他賭錯了幾次」。我寧可一輩子賺基本機率的錢、無聊、但活得久。賭小機率成名的人、通常也死在下一個小機率上。' },

    { type: 'wait', duration: 400 },

    // ── 延長 ≠ 和平 ──
    { type: 'dialogue', character: 'chef', text: '那這個「延長」、我能不能跟我老婆說「和平了」？她今天已經很開心了、我不想又給她潑冷水、但我也不想騙她。' },

    { type: 'dialogue', character: 'customer-a', text: '師傅、這個分寸很重要、我幫你抓——你可以跟她說「暫時不打了、而且這次比之前都接近真的和平」、但不要說「和平了」。差別在哪——今天簽的是「延長」、把最硬的那塊、核子、又往後推 60 天。這已經是這場戲第四次「再 60 天」了。每一次都「突破」、每一次都不碰核子。所以誠實的講法是：戰爭按了暫停鍵、但還沒按停止鍵。對你老婆、對一般人的生活、暫停鍵就夠了——油會便宜、機票會降、心可以放下。但對我們做長線的、要記得停止鍵還沒按。' },

    { type: 'dialogue', character: 'chef', text: '暫停鍵跟停止鍵——這個我懂。我們店打烊有兩種、一種是「今天休、明天開」、一種是「這家店收了」。客人看到拉下鐵門、兩種看起來一樣、但意思差很多。這個「延長」、是拉下鐵門但明天會開？' },

    { type: 'dialogue', character: 'customer-a', text: '師傅、「拉下鐵門但明天會開」——這就是 60 天停火的完美比喻。鐵門拉下來、街上看起來安靜、但裡面的人都知道明天還要開門做生意。而且我跟你講一個更深的觀察——這場戲打到現在、我開始覺得「永久和平」那扇門、可能永遠不會真的簽。' },

    { type: 'dialogue', character: 'chef', text: '永遠不簽？那不是一直懸在那裡、大家一直緊張？' },

    { type: 'dialogue', character: 'customer-a', text: '師傅、反過來想——「一直延長」這件事本身、可能就是答案、不是失敗。你想、為什麼要簽永久和平？因為大家以為「沒簽 = 危險」。但如果雙方都不想打、又都不肯在核子上讓步、那「每 60 天延長一次」反而是最舒服的狀態——不用真的讓步、又能一直不打。我們桌上把這種叫「滾動式均衡」——它看起來不穩、其實很穩、因為兩邊都靠它過日子。可能再過一年、大家就習慣了、新聞也不報了、它變成背景。就像你那個拉下鐵門又開、開了又拉、久了整條街都不會多看一眼。' },

    { type: 'wait', duration: 400 },

    // ── cost-to-fake validated ──
    { type: 'dialogue', character: 'chef', text: '昨天那個撤僑、今天 Polymarket 從 2.2% 跌回 1.5%——你昨晚說的「收椅子還是搬瓦斯桶」、所以答案揭曉了、是收椅子？' },

    { type: 'dialogue', character: 'customer-a', text: '師傅、是收椅子——而且 24 小時就揭曉、比我預期還快。昨天撤僑、市場短暫被嚇、Polymarket 跳到 2.2%、那是市場在說「我先付一點保險、萬一是搬瓦斯桶呢」。今天 Trump 一宣布延長、大家發現「喔、撤僑是談判桌上的最後一擰、是逼簽字的可信威脅、不是真的要打」——保險立刻退掉、跌回 1.5%。整個過程、是 cost-to-fake 框架最乾淨的一次示範：撤僑成本夠高、所以嚇得到人、市場願意付 0.9pp 保險；但它可逆、所以一旦看清是施壓、保險馬上退。' },

    { type: 'dialogue', character: 'chef', text: '所以昨天那個跳到 2.2% 的人、是不是虧了？他們付的保險、今天退掉、虧了中間那段？' },

    { type: 'dialogue', character: 'customer-a', text: '師傅、這個問題很好、答案會顛覆你的直覺——他們沒虧、那筆保險「該買」。你不能用「事後沒發生」去罵「事前買保險」。昨天那個當下、撤僑是真的、誰也不能 100% 確定是收椅子。在那個資訊下、付一點保險是對的。今天退掉、是「資訊更新了、風險解除了」、不是「當初買錯了」。這跟你颱風警報響的時候釘木板一樣——颱風轉向沒來、你不會說「早知道不釘了」、你會慶幸。保險的價值、不在它有沒有賠、在你買的時候不知道。' },

    { type: 'dialogue', character: 'chef', text: '保險的價值不在賠不賠、在買的時候不知道——這句我要記一輩子。我每年付火災險、三十年沒燒過、但我從來不覺得那是白付的。燒的那一次、我就知道為什麼付了。沒燒、是我運氣好、不是我多付了。' },

    { type: 'dialogue', character: 'customer-a', text: '師傅、你這個「沒燒是運氣好、不是多付」、是整個保險哲學、也是整個風險管理、一句話講完。我們桌上拿百萬年薪的人、想通這件事的、不到一半。多數人一賠就嫌貴、沒賠就後悔買、永遠在錯的方向懊惱。你開店三十年、早就在身體裡裝好這個觀念了。' },

    { type: 'wait', duration: 400 },

    // ── Rotation back to Fed / AI ──
    { type: 'dialogue', character: 'chef', text: '那伊朗這條、暫停了 60 天——接下來市場看什麼？總不會放假吧。' },

    { type: 'dialogue', character: 'customer-a', text: '師傅、市場從不放假、它只是換頻道。伊朗緩和、注意力立刻轉回兩個老問題——AI 週期、跟 Fed。下禮拜二三、6 月 16、17 號、Warsh 上任後第一場 FOMC——這是接下來最大的那個 binary。我們追了 Warsh 一個多月了、從 Powell 5 月交棒開始。現在 Iran 退到背景、Warsh 第一場會的調性、會變成主旋律。b 那個分批 reentry 的第二批、就掛在這場 FOMC 之後——所以下週二三、換成 Warsh 當主角。' },

    { type: 'dialogue', character: 'chef', text: '伊朗退到背景、Warsh 上主旋律——你之前講過、市場注意力是「輪流關注」、一次只擔心一兩件事。所以伊朗不是消失、是排到後面去了？' },

    { type: 'dialogue', character: 'customer-a', text: '師傅、你把我一個多月前講的話都記著——對、伊朗排到後面、變成「背景音樂」。它沒解決、核子那塊還懸著、60 天後還會回來。但市場這 60 天會把麥克風交給 Warsh、交給 AI 財報。這就是市場最有效率、也最無情的地方——一件事只要「暫時不會更糟」、它就把注意力收回去、投到下一個不確定上。對你老婆來說、這是好消息——電視會少播一點伊朗、多播一點別的、她可以喘口氣。' },

    { type: 'wait', duration: 400 },

    // ── Closing — Friday, A solo, relief night ──
    { type: 'move', character: 'chef', toTile: 'counter-center' },
    { type: 'dialogue', character: 'chef', text: '禮拜五、緩和的好消息、又是一週收尾——今晚我做點慶祝但不張揚的：鯛魚茶泡飯、玉子燒、漬物、一碗清湯、配冷酒一合。鯛魚我片薄、淋熱茶、撒點芥末跟海苔。緊張了兩天、今晚該吃點清爽放鬆的。太太在家等你嗎？' },

    { type: 'dialogue', character: 'customer-a', text: '師傅、鯛魚茶泡飯、太對了、這兩天胃都是緊的、今晚需要清爽的鬆一鬆。太太今晚在家、跟我說「不急、想坐多久坐多久、反正不打仗了」——她昨天也跟著緊張、今天聽到延長、特別輕鬆。我可以坐到十點。其實今晚我來、有一半是想沉澱一件事——這兩天、我學到的不是市場、是「我對的時候、要更小心」。' },

    { type: 'dialogue', character: 'chef', text: '對的時候要更小心——這個反過來了、一般人是錯的時候才小心。為什麼對的時候反而要更小心？' },

    { type: 'dialogue', character: 'customer-a', text: '師傅、因為「對」最容易讓人上癮、讓人開始覺得自己看得準、然後下一次就敢押大、押小機率、想複製那種「我就知道」的快感。這兩天我押對了延長、市場誇我準、客戶謝我——這種時候、我心裡那個警鈴反而要響。因為我知道我只是賺了基本機率的錢、不是真的比別人聰明。一旦我開始相信「我比別人聰明」、那就是我要犯大錯的前一刻。我爸那輩沒人教這個、都是賠了大錢才學會——我想早一點學會。' },

    { type: 'dialogue', character: 'chef', text: '「我比別人聰明」是犯大錯的前一刻——這句最重。我師父跟我講過一模一樣的事、用做菜講：他說「廚師最危險的不是煮壞的那天、是被客人連誇一個禮拜的那天——那天你會開始亂改配方、覺得自己怎麼做都對」。連誇一個禮拜之後、湯就開始走味、自己還不知道。對的時候要更小心、跟這個一模一樣。' },

    { type: 'dialogue', character: 'customer-a', text: '師傅、你師父那句「被連誇一個禮拜的那天最危險」、我今晚要帶回去寫下來。原來不管做菜還是做市場、最大的敵人從來不是失敗、是成功之後的自滿。今天油給了答案、Polymarket 兌現了框架、我押對了劇本——這麼順的一天、正是我該把警鈴調大聲的一天。鯛魚茶泡飯來、我慢慢吃、把這個順、好好消化一下、別讓它沖昏頭。' },

    { type: 'dialogue', character: 'chef', text: '把順的一天好好消化、別讓它沖昏頭——這頓茶泡飯剛好。清淡、提醒你別飄。鯛魚現片、熱茶滾燙、芥末提神、海苔撒上去香氣就出來。下禮拜 Warsh 那場、是新的一關、今晚先把這關的「對」放下、空著手去面對下一關。緊張兩天、今晚這碗、慢慢扒。' },

    { type: 'sfx', sound: 'chimes' },

    { type: 'wait', duration: 500 },
    { type: 'move', character: 'chef', toTile: 'stove' },

    {
      type: 'narration',
      text: '禮拜五晚上 10 點半、東京。今天的故事是「deadline 揭曉、落在最可能的那一格、而押對最可能的事不值得驕傲」。Trump 6/11 宣布 60 天停火「延長」——不是簽字、是把核子那塊最硬的骨頭又往後丟 60 天（這已是第四次「再 60 天」、每次都突破、每次都不碰核子）；Hormuz 無限制重開、免通行費、伊朗 30 天清雷、可自由賣油；但伊朗官員補「無最終決定、零星違規持續」。包裝成突破、結構是拖延——正是 ep62 a 押五成的劇本二。油是心電圖、給了最早最誠實的答案：崩到兩個月低、Brent ~$89、WTI ~$86.50——師傅今早開火前先看油、油直直往下、緩和確認、比新聞早、能跟剛起床的太太說「不打了」。Polymarket 從昨天撤僑嚇出的 2.2% 跌回 1.5%——撤僑被證實是「收椅子」不是「搬瓦斯桶」、cost-to-fake 框架 24 小時兌現。A 押對了、但不居功——「deadline 最常見的結局是延長」是 base rate 不是洞見、猜對最可能的事像猜太陽會升起、不是本事；真本事是知道何時 base rate 會失靈、那種時候他也常看不出來（「不要羨慕賭對黑天鵝的人、要去算他賭錯了幾次」）。延長≠和平的分寸：可以跟太太說「暫時不打、比之前都接近和平」、但不是「和平了」——戰爭按了暫停鍵、還沒按停止鍵（師傅:「拉下鐵門但明天會開 vs 這家店收了」）。更深的讀法：永久和平那扇門可能永遠不簽、「每 60 天延長一次」是滾動式均衡——兩邊都不讓步又都不打、最舒服的狀態、久了變背景。撤僑保險「該買」——你不能用事後沒發生罵事前買保險（師傅:「火災險三十年沒燒不是白付、沒燒是運氣好不是多付」）。伊朗退背景音樂、注意力轉回 AI+Fed、下週 6/16-17 Warsh 首場 FOMC 接棒主旋律（B 的 reentry 第二批掛在這）。A 今晚最大的領悟不是市場、是「我對的時候要更小心」——「對」最容易上癮、「我比別人聰明」是犯大錯的前一刻（師傅師父:「廚師最危險的不是煮壞那天、是被連誇一個禮拜的那天、會開始亂改配方湯走味還不知道」）。鯛魚茶泡飯清淡放鬆、把順的一天消化掉別沖昏頭、空著手去面對 Warsh 那一關。',
      duration: 6000,
    },
  ],
};
