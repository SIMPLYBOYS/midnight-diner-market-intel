import type { Episode } from '../../engine/types';

/**
 * Sources verified 2026-06-13 (Sat JST):
 * - DATA NOTE: Saturday = markets closed. Framed as a WEEKEND WRAP (same
 *   convention as ep37/ep51/ep57). Anchored on verified Fri 6/12 prints +
 *   the live Polymarket read + the Warsh-FOMC preview. No invented Sat
 *   equity prints.
 * - THE IRAN ARC CLOSES OUT — Polymarket regime-fall collapsed to a
 *   FRESH ATL 0.5% (0.0055), from 1.5% Friday, vol ~$54.3M, range bottom
 *   now 0.55%. TWO forces compound: (1) the 60-day ceasefire extension
 *   (ep63) priced out the war tail; (2) TIME DECAY — the question is
 *   "regime fall by JUNE 30", now only ~17 days out, so even residual
 *   probability bleeds toward zero as the clock runs. The Iran trade
 *   that dominated six weeks is effectively closing. Used as the spotlight
 *   ONE LAST TIME as a send-off for the arc (it's the cleanest visual of
 *   "Iran fades to background music"). (public/polymarket/latest.json,
 *   collectedAt 2026-06-13T01:22:45Z)
 * - THE PIVOT — Warsh's FIRST FOMC, 6/16-17 (Tue/Wed next week), is the
 *   new main event:
 *   - RATE itself is a near-non-event: markets price ~99.4% NO CHANGE,
 *     hold at 3.50-3.75%. The rate carries ~zero surprise = ~zero info.
 *   - THE REAL EVENT is the WORDS: it's an SEP meeting (updated dot plot
 *     + economic projections), and the Fed is widely expected to DROP
 *     its easing bias → shift to neutral/hawkish. The market reaction
 *     will come entirely from the gap between expected and actual
 *     wording.
 *   - WARSH'S DILEMMA: White House (Trump) wants cuts; data says
 *     otherwise — CPI 3.8%, core CPI 2.8% (April), strong jobs. First
 *     test of a Trump-appointed chair's independence, on a divided FOMC.
 *   - FIRST-MEETING ANGLE: 8 years of Powell taught the market the
 *     weight of his every word; Warsh's "voice" is unread, so this
 *     meeting's information density is unusually high.
 *   (Chase, TradingKey, nnng.com, FXStreet FOMC previews 6/13)
 * - Carry from ep63 (not re-asserted as Sat prints): oil two-month lows
 *   Brent ~$89 / WTI ~$86.50; global stocks lifted on the de-escalation.
 * - sectors[].value = |%change|x100 per theme, desc; Polymarket move
 *   leads (the day's real number), Warsh/rate items carried grey as
 *   forward-looking context.
 * - Continuity & CAST: ep63 A solo. Tonight CUSTOMER B SOLO — her
 *   reentry batch 2 is gated on the Warsh FOMC (ep60/61), so she is the
 *   natural voice for the preview. Written as independent regular
 *   (我們 desk, no joint-review w/ A) per personas CONTINUITY DEBT.
 *   B persona: spouse 我先生, kids, retired-finance father (dad-quote
 *   device), 15-year client, retail-sentiment index. Chef's wife
 *   callback: the Iran scare fully passed, she's relaxed — chef notes
 *   she's "back to asking 賺不賺 instead of 打不打". The weekend gift
 *   (ep61 motif): the plan means B has NOTHING to do today. Warsh =
 *   next binary.
 */
export const EPISODE_64: Episode = {
  id: 'ep-64',
  date: '2026-06-13',
  title: '20260613 禮拜六晚上、一週收尾、伊朗這條正式淡出——Polymarket 政權垮台崩到 0.5% 全時新低（緩和 + 時間衰減雙殺、剩 17 天到 6/30、問題自己在收尾）；主旋律換人、下週二三 Warsh 首場 FOMC——但利率本身 99.4% 不動、是非事件、真正的戲在「措辭」：拿不拿掉寬鬆偏向、點陣圖怎麼畫、Trump 任命的鷹派第一次面對「白宮要降息 vs 數據要升息」的兩難；B 的 reentry 第二批就掛在這場',
  description: '禮拜六晚上、Tokyo 21:00、市場休息。這一週用一句話收尾：伊朗下台、Warsh 上台。週五 Trump 宣布 60 天停火延長、油崩到兩個月低、全球股升；到了週末、那條追了六週的 Polymarket「伊朗政權 6/30 前垮台」、崩到 0.5% 的全時新低——兩股力量一起壓：一是緩和把戰爭尾部 price 掉了、二是時間衰減、這個問題問的是「6/30 前」、現在只剩 17 天、就算還有殘餘機率、也隨著日子一天天逼近而流向零。這條主宰市場六週的「伊朗交易」、正式收尾。主旋律換人——下週二三、6/16、17 號、Warsh 上任後第一場 FOMC。但這裡有個反直覺：利率本身幾乎是非事件、市場 price 了 99.4% 不動、維持在 3.50-3.75%。利率沒懸念 = 沒資訊。真正的戲、全在「措辭」——這是一場 SEP 會、會更新點陣圖跟經濟預測、而且市場普遍預期 Fed 會拿掉「寬鬆偏向」、轉中性甚至偏鷹。下週的反應、會完全來自「預期的措辭」跟「實際的措辭」之間的落差。再加上 Warsh 是 Trump 任命的鷹派、第一次面對「白宮想要降息、數據（CPI 3.8%、核心 2.8%、就業強）卻指向升息」的兩難——這是他獨立性的第一次考試。B 的 reentry 第二批、就掛在這場會之後。今晚 b 一個人來。',
  actions: [
    { type: 'bgm', track: 'chill-lofi', command: 'play' },

    {
      type: 'narration',
      text: '禮拜六晚上 9 點、東京。市場休息、店裡安靜。這一週用一句話收尾——伊朗下台、Warsh 上台。週五 Trump 宣布 60 天停火延長、油崩到兩個月低、全球股鬆一口氣往上；到了今天週末、那條我們追了六個禮拜的 Polymarket「伊朗政權 6 月底前垮台」、崩到 0.5% 的全時新低。兩股力量一起壓下來：一是緩和、把戰爭那條尾巴 price 掉了；二是時間——這個問題問的是「6 月 30 號前」、現在只剩 17 天、就算還有一點殘餘機率、也會隨著日子一天天逼近、慢慢流向零。一個有到期日的問題、越接近到期、答案越確定。這條主宰了市場六週的「伊朗交易」、正式收尾。主旋律換人——下週二三、6 月 16、17 號、Warsh 上任後第一場 FOMC。但這裡有一個很反直覺的地方：利率本身、幾乎是非事件。市場已經 price 了 99.4% 不動、維持在 3.50 到 3.75。利率沒懸念、等於沒資訊。真正的戲、全在「措辭」——這是一場會公布點陣圖跟經濟預測的會、而且市場普遍預期 Fed 會把「寬鬆偏向」拿掉、轉成中性、甚至偏鷹。下週開盤的反應、會完全來自「大家預期的措辭」跟「Warsh 實際講的措辭」之間的落差。今晚 b 一個人來——她那個分批 reentry 的第二批、就掛在這場 FOMC 之後。',
      duration: 6000,
    },

    {
      type: 'market-data',
      data: {
        tickers: [
          { symbol: 'Polymarket 政權垮台（6/13、0.5% 全時新低）', price: 0.5, change: -1.0 },
          { symbol: 'Brent 油（6/12 兩個月低 carry）', price: 89.0, change: 0.0 },
          { symbol: 'WTI 油（6/12 carry）', price: 86.5, change: 0.0 },
          { symbol: 'Fed 利率（下週 99.4% 不動）', price: 3.75, change: 0.0 },
          { symbol: 'USD/JPY（carryover ~159）', price: 159.0, change: 0.0 },
        ],
        volatility: 14,
        vix: 13.2,
        rsi: 50.0,
        beta: 0.98,
        priceHistory: [2.45, 2.2, 1.5, 1.85, 1.55, 1.15, 1.15, 0.55],
        volumeHistory: [1150, 1000, 920, 860, 700, 560, 440, 320],
        sectors: [
          { label: 'Polymarket -1.0pp（1.5%→0.5% 全時新低、緩和 + 時間衰減雙殺、伊朗交易收尾）', value: 100, color: '#22cc55' },
          { label: '下週 Warsh 首場 FOMC 6/16-17（利率 99.4% 不動是非事件、戲在措辭/點陣圖/寬鬆偏向）', value: 0, color: '#888888' },
          { label: 'Warsh 兩難（白宮要降息 vs CPI 3.8% 核心 2.8% 就業強要升息、獨立性第一考）', value: 0, color: '#888888' },
          { label: 'Brent ~$89 / WTI ~$86.50（6/12 兩個月低 carry、緩和後戰爭溢價已洩）', value: 0, color: '#888888' },
          { label: 'B 的 reentry 第二批掛在 FOMC 後 48 小時（ep60/61、今天什麼都不用做）', value: 0, color: '#888888' },
        ],
        headline: '禮拜六 21:00 JST、一週收尾：伊朗下台 Warsh 上台 / Polymarket 政權垮台崩到 0.5% 全時新低（緩和 + 時間衰減雙殺、剩 17 天到 6/30 伊朗交易收尾）/ 下週二三 Warsh 首場 FOMC、利率 99.4% 不動是非事件、戲在措辭（SEP 點陣圖、拿不拿掉寬鬆偏向）/ Warsh 兩難白宮 vs 數據獨立性第一考 / B reentry 第二批掛這場',
      },
    },

    {
      type: 'polymarket-odds',
      data: {
        asOf: '2026-06-13T01:22:45Z',
        highlightSlug: 'will-the-iranian-regime-fall-by-june-30',
        markets: [
          {
            slug: 'will-the-iranian-regime-fall-by-june-30',
            question: 'Will the Iranian regime fall by June 30?',
            yesProbability: 0.0055,
            volume: 54308133,
            liquidity: 947282,
            endDate: '2026-06-30T00:00:00Z',
            history: [
              { t: 1780711218, p: 0.0235 }, { t: 1780743604, p: 0.0215 }, { t: 1780776005, p: 0.0185 },
              { t: 1780808405, p: 0.0195 }, { t: 1780840820, p: 0.0175 }, { t: 1780873205, p: 0.0175 },
              { t: 1780905605, p: 0.0255 }, { t: 1780938015, p: 0.0165 }, { t: 1780970410, p: 0.0145 },
              { t: 1781002804, p: 0.0135 }, { t: 1781035206, p: 0.0195 }, { t: 1781067604, p: 0.0125 },
              { t: 1781100006, p: 0.0155 }, { t: 1781132404, p: 0.0245 }, { t: 1781164821, p: 0.0185 },
              { t: 1781197213, p: 0.0195 }, { t: 1781229603, p: 0.0155 }, { t: 1781262005, p: 0.0115 },
              { t: 1781294406, p: 0.0115 }, { t: 1781313724, p: 0.0055 },
            ],
          },
        ],
      },
      duration: 5000,
    },

    { type: 'enter', character: 'chef', toTile: 'stove' },
    { type: 'wait', duration: 500 },
    { type: 'move', character: 'chef', toTile: 'prep-area' },
    { type: 'wait', duration: 500 },
    { type: 'move', character: 'chef', toTile: 'stove' },
    { type: 'wait', duration: 400 },

    { type: 'enter', character: 'customer-b', toTile: 'entrance' },
    { type: 'move', character: 'chef', toTile: 'counter-center' },
    { type: 'dialogue', character: 'chef', text: 'いらっしゃい。b、這禮拜總算可以喘口氣了吧。我老婆今天的問題、終於從「會不會打仗」變回「我們是不是該買一點」——我聽到她問這個、反而鬆了一口氣、表示她不怕了。怕的時候問打不打、不怕的時候才問賺不賺。' },

    { type: 'move', character: 'customer-b', toTile: 'random-stool' },
    { type: 'sit', character: 'customer-b' },

    { type: 'dialogue', character: 'customer-b', text: '師傅、晚安。你這個觀察太準了——「怕的時候問打不打、不怕的時候問賺不賺」、這句我們 desk 拿來當散戶情緒的溫度計都比 VIX 好用。這禮拜真的是一個 chapter 收尾。你看牆上那個 Polymarket——伊朗政權垮台、今天 0.5%、全時新低。我追這條追了六個禮拜、今天它基本上要熄火了。' },

    { type: 'move', character: 'chef', toTile: 'stove' },
    { type: 'wait', duration: 400 },

    { type: 'dialogue', character: 'chef', text: '0.5%……這幾乎是零了。是因為和平了、所以沒人覺得會垮？還是有別的原因？我記得前幾天它還在 1.5%、2.2%。' },

    { type: 'dialogue', character: 'customer-b', text: '師傅、有兩個原因疊在一起、第二個特別有意思。第一個你說對了——緩和、60 天延長、大家把「會垮」的機率調低。但第二個原因、是「時間」本身。這個問題問的是「6 月 30 號之前會不會垮」、今天 6 月 13、只剩 17 天。一件「17 天內要發生的大事」、如果到現在都還沒有任何前兆、那它發生的機率、會隨著每一天過去、自動往下掉——不是因為有新消息、是因為「能發生的時間越來越少了」。' },

    { type: 'dialogue', character: 'chef', text: '能發生的時間越來越少、所以機率自己往下掉——這個我懂！就像我訂了一個食材、說好月底前到。月初我還會擔心它到底來不來；到了月底前三天還沒影、我就知道「這個月大概不會來了」——不是有人通知我、是日子快到了、它還沒動、那就是不會來了。' },

    { type: 'dialogue', character: 'customer-b', text: '師傅、你這個「月底前三天還沒影、就知道不會來了」、是時間衰減最好的白話版——我們行話裡、有期限的東西、越接近到期、它的「還沒發生」就越接近「不會發生」。Polymarket 這條今天 0.5%、有一半是和平、一半是日曆。到了 6 月 30 號、不管伊朗怎麼樣、這個「6/30 前垮台」的問題、答案就定了、這條線就會被關掉、結算。所以我說它在熄火——它不是被新消息殺死的、是被時間自然收掉的。' },

    { type: 'wait', duration: 400 },

    // ── The pivot: Iran fades, Warsh rises ──
    { type: 'dialogue', character: 'chef', text: '那伊朗這條收掉之後、下禮拜市場看什麼？你剛進門就說、有個 Warsh 的大事。' },

    { type: 'dialogue', character: 'customer-b', text: '師傅、下週二三、6 月 16、17 號、Warsh 上任後第一場 FOMC——美國央行的利率會。這是接下來最大的事。但這裡有個我每次都要跟新人解釋三遍的反直覺——利率本身、幾乎是非事件。市場已經 99.4% 確定這次不會動利率、維持原樣。' },

    { type: 'dialogue', character: 'chef', text: '等等——既然 99.4% 確定不動、那這場會不是沒戲了嗎？大家都知道答案了、還看什麼？' },

    { type: 'dialogue', character: 'customer-b', text: '師傅、這就是金融最反直覺、也最迷人的地方——「大家都知道的答案、沒有價值」。一件事如果 99.4% 的人都猜到了、它真的發生的時候、價格不會動、因為早就 price 進去了。真正會讓價格動的、是「沒被猜到的部分」。利率不動、大家都知道；但 Warsh 開完會「怎麼說話」——這個沒人知道。所以下週的戲、完全不在利率那個數字、在他嘴裡的「措辭」。' },

    { type: 'dialogue', character: 'chef', text: '大家都知道的答案沒有價值、戲在沒人知道的措辭——這個我做生意也有感。客人來之前我就知道他會點招牌拉麵、那個我準備好、不緊張；真正讓我手心冒汗的、是他吃完會不會說「今天湯頭怎麼跟上次不一樣」——那句我事先不知道、那句才會影響他下次來不來。已知的不可怕、未知的那一句才可怕。' },

    { type: 'dialogue', character: 'customer-b', text: '師傅、你這個「招牌拉麵不緊張、客人那句評語才冒汗」、是 priced vs unpriced 我聽過最傳神的版本。下週 Warsh 的利率、就是那碗大家都知道會上的招牌拉麵；他的「措辭」、就是客人吃完那句沒人能預測的評語。而且這次特別關鍵、因為這是他「第一句評語」。' },

    { type: 'wait', duration: 400 },

    // ── Warsh: first meeting, unread voice ──
    { type: 'dialogue', character: 'chef', text: '為什麼「第一句」特別關鍵？換了人就換了人、不是繼續開會嗎？' },

    { type: 'dialogue', character: 'customer-b', text: '師傅、因為「換人」這件事、市場要重新學一個人的語言。前一任 Powell、我們聽了他八年、他每一個詞的重量、市場都摸得清清楚楚——他說「謹慎」是什麼意思、他說「觀察」是什麼意思、他停頓一下又是什麼意思。Warsh 上任才一個月、這是他第一次開這種大會、我們對他的「語言」一個字都還沒讀過。所以同樣一句話、從 Powell 嘴裡出來跟從 Warsh 嘴裡出來、我們的解讀完全不同——因為我們還沒有他的「字典」。這就是為什麼這場會的「資訊密度」特別高——我們不只在聽他說什麼、是在第一次建立「他這個人怎麼說話」的基準線。' },

    { type: 'dialogue', character: 'chef', text: '第一次建立基準線——這個我太懂了。我們店換新員工、頭一個禮拜我每一句話都聽得特別仔細、因為我還在學「他說『差不多好了』到底是真的好了、還是他覺得好了」。熟了之後、我聽他語氣就知道。新人講的每句話、我都要當情報蒐集。Warsh 對市場、就是那個剛來一禮拜的新員工？' },

    { type: 'dialogue', character: 'customer-b', text: '師傅、一模一樣、只是這個新員工的一句話、會讓全球幾兆美金動起來。而且 Warsh 還有一個 Powell 沒有的複雜度——他是 Trump 任命的、大家貼他「鷹派」標籤；但現在的數據、通膨還在 3.8%、就業很強——數據其實也支持偏鷹。所以下週的戲是：白宮想要他降息討好政治、數據卻叫他別降甚至要升。他第一次開會、選哪邊、就告訴市場「他到底是 Trump 的人、還是數據的人」。這是他獨立性的第一次考試、全世界都在看。' },

    { type: 'wait', duration: 400 },

    // ── B's batch 2 waits ──
    { type: 'dialogue', character: 'chef', text: '那你那個分批買回的第二批、就是在等這場會？這禮拜你打算怎麼準備？' },

    { type: 'dialogue', character: 'customer-b', text: '師傅、第二批掛在 FOMC 之後 48 小時——但「準備」這兩個字、我這禮拜其實沒什麼好做的、這就是計畫最爽的地方。第一批我上禮拜進了、條件達成；第二批的條件就是「看 Warsh 怎麼說、然後 48 小時內決定」——那是下週三四的事。今天禮拜六、我什麼都不用做、所有該想的、上禮拜冷靜的時候都想完了。週末完整是我的。' },

    { type: 'dialogue', character: 'chef', text: '計畫做好之後、週末完整是你的——這個跟你前幾次講的一樣、但每次聽都覺得是奢侈。我開店三十年、最羨慕的就是這種「事情都安排好、可以安心放空」的週末。我們做飯的、週末最忙、反而是平日才偶爾喘到。' },

    { type: 'dialogue', character: 'customer-b', text: '師傅、我們剛好相反——但我這份「週末完整」、是用平日的紀律換來的。如果我上禮拜恐慌的時候亂砍、或這禮拜貪心一次全買回、那我這個週末就會一直盯盤、一直焦慮「我是不是做錯了」。我爸做了三十年金融、他退休前跟我說過一句——「能安心過週末的交易員、不是因為他賭對了、是因為他不管賭對賭錯、都已經準備好了」。我這禮拜的安心、不是因為市場對我好、是因為我不欠這個週末任何決定。' },

    { type: 'dialogue', character: 'chef', text: '能安心過週末、不是賭對了、是不管對錯都準備好了——你爸這句、跟我老婆講的「進家門前把那口氣吐掉」是同一個家族的智慧。準備好的人、才有資格放下；沒準備好的人、放下叫逃避。你今晚這個放鬆、是賺來的。' },

    { type: 'wait', duration: 400 },

    // ── Closing — Saturday, B solo, calm ──
    { type: 'move', character: 'chef', toTile: 'counter-center' },
    { type: 'dialogue', character: 'chef', text: '既然是賺來的放鬆、今晚我做點配得上的——土鍋炊飯、加了鯛魚跟銀杏、味噌湯、玉子燒、漬物、配溫酒一合。炊飯要等一下、火候到了米會自己說話。剛好配你今晚這個「不用急著做決定」的心情。先給你溫酒、慢慢等飯。' },

    { type: 'dialogue', character: 'customer-b', text: '師傅、土鍋炊飯、太好了——這種要等的菜、平常我不敢點、今晚剛好。我先生今晚帶小孩去看電影、晚一點才回、我可以好好等這鍋飯。其實這禮拜走完、我最大的感覺不是賺賠——是「終於可以慢下來」。前六週每天都是 Iran、Iran、Iran、油、撤僑、circuit breaker；現在那條收尾了、下週的 Warsh 雖然也是大事、但它是「可預期的大事」、不是「半夜會被嚇醒的大事」。從「不知道會不會打仗」、到「知道下週三會開一場會」——這個轉變、對神經系統的差別、比對帳戶的差別還大。' },

    { type: 'dialogue', character: 'chef', text: '從「不知道會不會打仗」到「知道下週三會開一場會」——這個轉變我懂、是從「無法準備的恐懼」變成「可以準備的緊張」。我們店遇過兩種壞事、一種是突然停電、整鍋湯報廢、那種你沒法準備；一種是知道下個月要漲房租、雖然煩、但你有一個月可以想辦法。後面那種、再大也不可怕、因為你看得到它、可以對著它準備。Warsh 那場會、就是看得到的房租。' },

    { type: 'dialogue', character: 'customer-b', text: '師傅、「無法準備的恐懼 vs 可以準備的緊張」——這句我要送給我那位 15 年的老客戶、他這六週被 Iran 嚇得來回砍倉買倉、就是因為他把每件事都當成「突然停電」。其實大部分的市場大事、都是「看得到的房租」、是可以對著它分批、對著它買保險、對著它寫計畫的。學會分辨這兩種、比學會任何技術分析都重要。土鍋飯的香味出來了——我先不講了、今晚輪到我享受一頓不用配新聞的晚餐。' },

    { type: 'dialogue', character: 'chef', text: '不用配新聞的晚餐——這個是這禮拜最好的句子。炊飯掀蓋、鯛魚的油滲進米裡、銀杏一顆顆亮黃、我幫你拌鬆、盛一大碗。味噌湯滾燙、玉子燒今天甜一點配溫酒。下週的 Warsh、下週再說。今晚這鍋飯、慢慢吃、好好嚐——你賺來的。' },

    { type: 'sfx', sound: 'chimes' },

    { type: 'wait', duration: 500 },
    { type: 'move', character: 'chef', toTile: 'stove' },

    {
      type: 'narration',
      text: '禮拜六晚上 10 點半、東京。這一週用一句話收尾——伊朗下台、Warsh 上台。那條追了六週的 Polymarket「伊朗政權 6/30 前垮台」、今天崩到 0.5% 全時新低、被兩股力量一起收掉：緩和把戰爭尾部 price 掉、加上時間衰減——剩 17 天到期、一件「17 天內要發生的事」遲遲沒前兆、機率就隨日曆自動流向零（師傅:「月底前三天食材還沒影、就知道這個月不會來了」）。這條主宰六週的伊朗交易、不是被新消息殺死、是被時間自然收掉——6/30 一到、結算、關線。主旋律換人：下週二三 Warsh 首場 FOMC。反直覺核心——利率本身是非事件、99.4% price 了不動、「大家都知道的答案沒有價值」；戲全在「措辭」——SEP 點陣圖、拿不拿掉寬鬆偏向、那是 unpriced 的部分（師傅:「招牌拉麵不緊張、客人吃完那句沒人能預測的評語才冒汗」= priced vs unpriced）。而且這是 Warsh 的「第一句」——Powell 聽了八年、市場有他的字典；Warsh 一個字還沒讀過、這場會是在建立「他怎麼說話」的基準線、資訊密度特別高（師傅:「新員工頭一週每句話都當情報蒐集」）。加上 Warsh 兩難——Trump 任命的鷹派、白宮想要降息、但 CPI 3.8%/核心 2.8%/就業強的數據叫他別降——第一次開會選哪邊、就告訴市場「他是 Trump 的人還是數據的人」、獨立性第一考、全世界在看。B 的 reentry 第二批掛在 FOMC 後 48 小時、所以今天什麼都不用做——「計畫做好之後週末完整是我的」、B 爸:「能安心過週末的交易員、不是賭對了、是不管對錯都已經準備好了」（師傅:「準備好的人才有資格放下、沒準備好的放下叫逃避」）。最大的轉變不是帳戶、是神經——從「不知道會不會打仗」到「知道下週三開一場會」、從「無法準備的恐懼」變成「可以準備的緊張」（師傅:「突然停電 vs 看得到的房租」、學會分辨比任何技術分析都重要）。土鍋炊飯加鯛魚銀杏、一頓不用配新聞的晚餐——B 賺來的。下週的 Warsh、下週再說。',
      duration: 6000,
    },
  ],
};
