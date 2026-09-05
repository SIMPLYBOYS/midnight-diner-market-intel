import type { Episode } from '../../engine/types';

/**
 * Sources verified 2026-05-26 (Tue JST):
 * - The "驗貨" day ep46 teed up — US back from Memorial Day, and the
 *   verdict SPLIT:
 *   - Kospi +2.55% to 8,047.51, intraday RECORD 8,131.15 — resumed after
 *     a Korean public holiday, catch-up buying on US-Iran breakthrough
 *     hopes. (CNBC Asia 5/26)
 *   - Nikkei -0.25% to 64,996.09 — slipped back BELOW 65,000 on profit-
 *     taking. ep46's call (thin-holiday-volume record may not hold) was
 *     right: closed just under the line. (CNBC Asia 5/26)
 *   - Wall Street REOPENS up: S&P futures +0.78%, Nasdaq-100 fut +1.14%,
 *     Dow fut +371pts/+0.73%. S&P futures hit a record >7,534 on the
 *     holiday; S&P closed a record 7,473.47 last Fri. (CNBC, Benzinga 5/26)
 * - Oil SPLIT on the day: Brent Jul +2.78% to $98.81 (bounce after the
 *   crash); WTI Jul -4.42% to $92.33 (still sliding). Net both still
 *   sub-$100 / sub-$93 — war premium broadly drained, daily wiggles are
 *   noise. (CNBC Asia 5/26)
 * - THE DEAL GREW REAL TERMS (Axios + CNN, 5/24, carried into 5/26): a
 *   60-day ceasefire extension during which — Strait of Hormuz reopens
 *   with NO tolls and Iran clears the mines it laid; in exchange the US
 *   lifts its blockade of Iranian ports + issues sanctions waivers so
 *   Iran can sell oil freely; the draft MOU has Iran commit to NEVER
 *   pursue nuclear weapons and to negotiate a suspension of uranium
 *   enrichment. Trump's governing principle: "relief for performance"
 *   (staged, reciprocal — neither side fully goes first). Regional
 *   backing: on a Sat call, leaders of Saudi Arabia, Qatar, Egypt,
 *   Turkey, Pakistan all said they support it. Trump Mon: talks
 *   "proceeding nicely" BUT warned the US could resume attacks if talks
 *   fail (carrot + stick). Still NOT signed; unclear if it reaches a
 *   lasting peace / fully addresses the nuclear demands.
 *   (Axios 5/24, CNN 5/24, CNBC 5/23, HoC Library CBP-10637)
 * - "relief for performance" is the concept that broke the ep45/ep46
 *   "誰先讓步誰輸" deadlock: slice the swap into small reciprocal steps
 *   (mines cleared → a waiver → blockade eased → ...), so no one has to
 *   trust the other with the whole thing up front.
 * - NO polymarket block (used ep42/43/45; regime-fall flat at ~2.9% low,
 *   not newsworthy today). Keep variety.
 * - sectors[].value = |%change|x100 of headline asset per theme, desc.
 *   All Tue 5/26 sourced moves.
 * - Continuity: ep46 (Mon) Customer B solo — flagged the 65,000 record
 *   as a thin-holiday "踮腳尖照片", said 明天美國回來驗貨, listed 3 things
 *   to watch (US-back volume holds 65k / Hormuz first ship / MoU signed).
 *   Tonight CUSTOMER A (alternation ep43 A, 44 B, 45 A, 46 B, 47 A); A
 *   parsed "largely negotiated" in ep45 and is the deal-terms/macro
 *   voice. Payoff: Nikkei DIDN'T hold 65k (B right); deal got real terms
 *   (closer to "show"). A does NOT do over/under betting. Chef's wife
 *   asked Mon "要不要買一點" (relayed ep46) → tonight "還好沒追". Warsh's
 *   first FOMC is still 6/16-17.
 */
export const EPISODE_47: Episode = {
  id: 'ep-47',
  date: '2026-05-26',
  title: '20260526 禮拜二晚上、deal 長出細節了（60 天停火、Hormuz 免通行費＋伊朗清雷、解封換售油、永不擁核、原則是「relief for performance」）——但市場驗貨給了分歧答案：Kospi 創新高 +2.55%、Nikkei 反而跌回 65,000 以下、油也分裂 Brent 反彈 WTI 續跌',
  description: '禮拜二晚上、Tokyo 21:00。昨天那個「踮腳尖的紀錄」、今天驗貨了——customer-b 昨晚說「明天美國回來、量放大、才知道 65,000 站不站得穩」、結果 Nikkei 今天收 64,996、跌回 65,000 以下（-0.25%、獲利了結）。但同一時間、隔壁韓國 Kospi 放假回來補漲、收 +2.55%、盤中還創了 8,131 的新高。油也分裂——Brent 反彈 +2.78% 到 $98.81、WTI 卻續跌 -4.42% 到 $92.33、但兩個都還在低檔。美股 Memorial Day 收假、期貨開高（S&P 期 +0.78%、Nasdaq 期 +1.14%）。今天真正的進展是「deal 長出細節了」——Axios、CNN 把草案內容講出來了：60 天停火、期間 Hormuz 免通行費重開、伊朗負責清掉自己佈的水雷、美國解除港口封鎖＋發售油豁免、MOU 裡伊朗承諾「永不擁核」並談判暫停濃縮。最關鍵的設計是 Trump 那句原則——「relief for performance」、你先做到、我才放鬆。這一招、剛好解開上禮拜「誰先讓步誰輸」的死結。今晚 customer-a 來。',
  actions: [
    { type: 'bgm', track: 'chill-lofi', command: 'play' },

    {
      type: 'narration',
      text: '禮拜二晚上 9 點、東京。昨天那個「踮腳尖拍的紀錄」、今天驗貨了——customer-b 昨晚說「明天美國回來、量放大、才知道 65,000 站不站得穩」。結果 Nikkei 今天收在 64,996、跌回 65,000 以下、-0.25%、就是獲利了結、昨天那張照片沒站住。但同一時間、隔壁韓國 Kospi 放假回來補漲、收 +2.55%、盤中還創了 8,131 的歷史新高——兩邊走相反方向。油也分裂：Brent 反彈 +2.78% 到 $98.81、WTI 卻還在跌、-4.42% 到 $92.33、不過兩個都還趴在低檔。美股 Memorial Day 收假、今晚開盤、期貨先開高、S&P 期貨 +0.78%、Nasdaq 期貨 +1.14%。但今天真正的進展、不是漲跌、是「deal 終於長出細節了」——Axios 跟 CNN 把草案內容講出來了：60 天停火、期間 Hormuz 免收通行費重開、伊朗要負責清掉自己佈的水雷、美國解除對伊朗港口的封鎖、發給售油豁免、那份 MOU 裡伊朗承諾「永遠不做核武」、並談判暫停濃縮。最關鍵的、是 Trump 訂的那條原則——「relief for performance」、你先做到、我才放鬆。這一招、剛好解開上禮拜那個「誰先讓步誰輸」的死結。今晚 customer-a 來。',
      duration: 6000,
    },

    {
      type: 'market-data',
      data: {
        tickers: [
          { symbol: 'Kospi（5/26 收、盤中創 8,131 新高）', price: 8047.51, change: 2.55 },
          { symbol: 'Nikkei（5/26 收、跌回 65,000 下）', price: 64996.09, change: -0.25 },
          { symbol: 'Brent 油（5/26、反彈）', price: 98.81, change: 2.78 },
          { symbol: 'WTI 油（5/26、續跌）', price: 92.33, change: -4.42 },
          { symbol: 'S&P 500 期貨（美收假開高）', price: 7534.0, change: 0.78 },
        ],
        volatility: 17,
        vix: 14.4,
        rsi: 61.0,
        beta: 1.01,
        priceHistory: [7560, 7660, 7720, 7840, 7900, 7980, 8047, 8131],
        volumeHistory: [380, 360, 240, 300, 520, 610, 700, 760],
        sectors: [
          { label: 'WTI 油 -4.42%（$92.33、Hormuz 免通行費重開預期、油續洩戰爭溢價）', value: 442, color: '#cc4422' },
          { label: 'Brent 油 +2.78%（$98.81、崩太兇後技術反彈、但仍趴 $100 以下）', value: 278, color: '#22cc55' },
          { label: 'Kospi +2.55%（收 8,047、盤中創 8,131 新高、放假回來補漲、韓國最受惠）', value: 255, color: '#22cc55' },
          { label: 'S&P 500 期貨 +0.78%（美 Memorial Day 收假開高、deal 樂觀、Nasdaq 期 +1.14%）', value: 78, color: '#22cc55' },
          { label: 'Nikkei -0.25%（收 64,996、跌回 65,000 下、昨天踮腳尖的紀錄沒守住、獲利了結）', value: 25, color: '#cc4422' },
        ],
        headline: '禮拜二 21:00 JST、Asia 收盤：deal 長出細節（60 天停火、Hormuz 免費重開＋伊朗清雷、解封換售油、永不擁核、relief for performance）/ 驗貨分歧：Kospi 創新高 +2.55%、Nikkei 跌回 65,000 下 -0.25% / 油分裂 Brent +2.78% WTI -4.42% / 美收假期貨開高 / Trump：談得不錯、但失敗就再打',
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
    { type: 'dialogue', character: 'chef', text: 'いらっしゃい。昨天 customer-b 說「65,000 是踮腳尖拍的照片、明天驗貨」——今天我老婆看新聞、Nikkei 收 64,996、真的掉回去了。她昨天還問我「要不要買一點」、今天改口「還好沒追」。她現在問你——那為什麼韓國反而創新高？同一個亞洲、怎麼一個跌一個飆？' },

    { type: 'move', character: 'customer-a', toTile: 'random-stool' },
    { type: 'sit', character: 'customer-a' },

    { type: 'dialogue', character: 'customer-a', text: '師傅、晚安。b 昨天那個判斷、今天完全應驗、漂亮。你老婆的問題也問到點上——「一個跌一個飆」、其實不矛盾、是時間差。日本昨天就先漲過了、而且是在美國休市、人很少的時候衝上 65,000、今天人回來、就有人獲利了結、把虛的部分吐掉。韓國不一樣——韓國昨天自己也放假、今天才開市、等於「慢一天才來慶祝」、補漲。所以不是日本看壞、韓國看好、是「日本昨天先慶祝完、今天宿醉；韓國今天才開趴」。' },

    { type: 'move', character: 'chef', toTile: 'stove' },
    { type: 'wait', duration: 400 },

    { type: 'dialogue', character: 'chef', text: '一個宿醉、一個才開趴——這個我秒懂！我們店辦尾牙、廚房的人前一晚先慶祝、隔天沒精神；外場的人尾牙當天才喝、那天最嗨。不是誰心情不一樣、是慶祝的時間錯開。那這樣說、韓國今天的新高、明天會不會也「宿醉」？' },

    { type: 'dialogue', character: 'customer-a', text: '師傅、你這個推論完全正確、而且這就是我們今天看韓國的態度——別太興奮。Kospi 盤中衝到 8,131、收回 8,047、其實尾盤已經有人在獲利了結、跟日本昨天一模一樣的劇本、只是慢一天。所以我不會看著「韓國創新高」就追——我會想「它會不會明天變成今天的日本」。市場這種「輪流慶祝、輪流宿醉」、看一兩天的單一指數很容易被騙、要看整片、看趨勢。' },

    { type: 'wait', duration: 400 },

    // ── The real news: deal grew real terms ──
    { type: 'dialogue', character: 'chef', text: '你剛進門就說、今天真正的大事不是漲跌、是「deal 長出細節了」。昨天 Trump 還說「不急、還沒完全談好」、今天怎麼細節就出來了？' },

    { type: 'dialogue', character: 'customer-a', text: '師傅、這就是這幾天最大的進展。之前我們只聽到「largely negotiated」這種空話、今天 Axios 跟 CNN 把草案的「菜單」端出來了——具體寫了：60 天停火；這 60 天裡、Hormuz 重新開、而且不收通行費；伊朗要負責把自己之前佈在海峽裡的水雷清掉；美國這邊解除對伊朗港口的封鎖、發豁免讓伊朗可以正常賣油；然後那份備忘錄裡、伊朗白紙黑字承諾「永遠不做核武」、再坐下來談「暫停濃縮鈾」。從「大致談好」變成「這裡有十條具體要做的事」——這就是進展。' },

    { type: 'dialogue', character: 'chef', text: '從空話變成菜單——這個差別我懂。客人說「我要辦一桌好的」是空話、寫成「八菜一湯、有龍蝦有和牛、預算五萬」才是菜單、才能真的下廚。那最關鍵的、你昨天說的核子那塊呢？解決了嗎？' },

    { type: 'dialogue', character: 'customer-a', text: '師傅、核子那塊、是「半解決」——很巧妙。伊朗承諾「永不做核武」、這個它願意簽；但「暫停濃縮鈾」那塊、只是「同意坐下來談」、還沒真的答應停。等於菜單上龍蝦寫了、但「龍蝦怎麼料理」那行寫「現場再議」。最硬的骨頭還在、但至少從「不談」變成「同意談」。配合一個很關鍵的設計——Trump 那句「relief for performance」——這六個字、是整個 deal 的靈魂。' },

    { type: 'wait', duration: 400 },

    // ── "relief for performance" — the key concept ──
    { type: 'dialogue', character: 'chef', text: '「relief for performance」——這個英文我又要請你翻成人話了。你說它是整個 deal 的靈魂？' },

    { type: 'dialogue', character: 'customer-a', text: '師傅、翻成人話就是「你先做到、我才放鬆」。還記得上禮拜我跟 b 都講過、這個 deal 最大的死結是「誰先讓步誰就輸」——美國要伊朗先交核子、伊朗要美國先解制裁、兩邊都不肯先動。「relief for performance」就是拆解這個死結的鑰匙——不要誰一次全做完、把它切成很多小步、你做一步、我放鬆一點、再換你做下一步。伊朗清一批水雷、美國就發一張售油豁免；伊朗再開放海峽一段、美國再解一塊封鎖。一小口一小口、互相交換、誰都不用一開始就把全部的信任壓上去。' },

    { type: 'dialogue', character: 'chef', text: '你做一步、我放鬆一點——這個我太熟了！我跟一個欠過帳的供應商就是這樣談的、我不可能一次又給他大訂單、我說「你這批先準時送到、我下批就加量」、他做到、我才加、一步一步把信任養回來。原來大國跟我跟欠帳的供應商，用的是同一招。' },

    { type: 'dialogue', character: 'customer-a', text: '師傅、你這個「欠過帳的供應商、一步一步養信任」、就是 relief for performance 的完美翻譯、我要寫進今天的筆記。國際談判最難的就是「信任是負的」——兩邊剛打完仗、誰信誰？那就不要靠信任、靠「分期、對賭、可驗證」——你做了我看得到的事、我才給你看得到的回報。做不到、隨時停。這比「簽一張大合約然後祈禱對方守信」務實太多。今天市場稍微敢信一點、就是因為這個機制讓 deal「就算半路翻臉、損失也有限」。' },

    { type: 'wait', duration: 400 },

    // ── But: not signed, and the stick ──
    { type: 'dialogue', character: 'chef', text: '聽起來這個 deal 設計得很聰明——那是不是就快成了？我可以跟我老婆說「快和平了」嗎？' },

    { type: 'dialogue', character: 'customer-a', text: '師傅、先別、還是那句——方向對、但還沒簽。今天有兩個地方要留意。第一、這還是「草案」、菜單寫好了、廚師還沒進廚房——MOU 還沒正式簽字、Hormuz 也還沒有第一艘船真的通過。第二、Trump 昨天講「談得不錯」的同一口氣、也撂了一句狠話——「如果談判失敗、美國可以再打」。這個「再打」不是隨口、是談判的鞭子——胡蘿蔔跟棒子一起拿。所以正確的講法是：「離和平、比上禮拜近很多、但 Trump 手上的棒子沒放下。」你可以跟你老婆說「有譜了、但還沒到」。' },

    { type: 'dialogue', character: 'chef', text: '胡蘿蔔跟棒子一起拿——這個畫面清楚。那有那麼多國家（沙烏地、卡達那些）都說支持、是不是加分？人多好辦事？' },

    { type: 'dialogue', character: 'customer-a', text: '師傅、是加分、而且是關鍵的加分。Trump 禮拜六打電話給沙烏地、卡達、埃及、土耳其、巴基斯坦那一圈、他們全說支持。這些國家的角色是「保人＋監工」——relief for performance 需要有人盯著「誰有沒有做到」、這些區域大國就是那個「公正第三方」。就像你跟供應商分期養信任、如果中間有一個你們都信得過的老同行作見證、出事有人評理、兩邊都更敢往前走。國家越多人背書、這個「分期信任」的機制就越穩。今天市場敢漲一點、有一半是因為「保人變多了」。' },

    { type: 'wait', duration: 400 },

    // ── Closing — Tuesday, A alone ──
    { type: 'move', character: 'chef', toTile: 'counter-center' },
    { type: 'dialogue', character: 'chef', text: '禮拜二、你今天大概又盯盤盯一整天——deal 細節一出、你們桌上應該炸鍋。我做點順口的：星鰻押壽司、茶碗蒸、烤時蔬、味噌湯、香物，配一杯冷酒。你太太這幾天回來了嗎？還是還在娘家？' },

    { type: 'dialogue', character: 'customer-a', text: '師傅、太太禮拜天就回來了、今天還是她煮晚餐、我吃過一輪了、來你這是「續攤兼醒腦」。星鰻押壽司加茶碗蒸、剛好、冷酒一杯就好、明天還要早起看 Hormuz 有沒有船動。今天 desk 確實炸鍋——deal 菜單一出、做油的、做航運的、做能源股的，全部重算一遍，忙到沒空吃午飯。' },

    { type: 'dialogue', character: 'chef', text: '忙到沒空吃午飯——那更要在我這好好吃一頓。我師父說過、越忙的日子、越要找個地方坐下來吃口熱的、不然腦子會跟著胃一起空轉。你們看 deal 細節看一天，眼睛跟腦子都乾了，茶碗蒸滑一點，潤潤。' },

    { type: 'dialogue', character: 'customer-a', text: '師傅、「腦子會跟著胃一起空轉」——你每天都能講一句我想抄的。今天這個 deal，我最大的心得其實很簡單：上禮拜大家在吵「誰先讓步」，吵到死結；這禮拜換個方式問——「能不能不要誰先、改成一人一步」，死結就開了。很多談不攏的事，不是條件談不攏，是「順序」談不攏。relief for performance，本質是重新設計順序。這個道理，跟你跟欠帳供應商那套，一模一樣。' },

    { type: 'dialogue', character: 'chef', text: '不是條件談不攏、是順序談不攏——這句今晚收得好。我跟我老婆三十年，吵架也常常不是為了那件事本身，是「誰先低頭」。原來連國家都卡在這。星鰻我現壓、茶碗蒸蒸好給你端上，冷酒先倒。明天 Hormuz 那艘船，過了再說。今晚醒醒腦就好。' },

    { type: 'sfx', sound: 'chimes' },

    { type: 'wait', duration: 500 },
    { type: 'move', character: 'chef', toTile: 'stove' },

    {
      type: 'narration',
      text: '禮拜二晚上 10 點半、東京。今天的故事是「deal 從空話長出菜單、市場驗貨給了分歧的答案」。昨天那個 65,000 的紀錄、今天沒守住——Nikkei 收 64,996、跌回門檻下、獲利了結，正如 customer-b 昨晚說的「踮腳尖的照片站不久」；但隔壁 Kospi 放假回來補漲、收 +2.55%、盤中創 8,131 新高——不是矛盾，是「日本昨天先慶祝、今天宿醉；韓國今天才開趴」，慢一天的時間差，明天可能換韓國宿醉。油分裂：Brent 反彈 +2.78% $98.81、WTI 續跌 -4.42% $92.33，但都還趴在低檔，war 溢價大勢已洩。美股收假、期貨開高。真正的進展是 Axios／CNN 端出的草案菜單：60 天停火、Hormuz 免通行費重開＋伊朗清雷、美國解封換售油豁免、伊朗承諾永不擁核並談判暫停濃縮——核子是「半解決」（願簽永不擁核、暫停濃縮只同意談）。靈魂是那句「relief for performance」——你先做到、我才放鬆——把上禮拜「誰先讓步誰輸」的死結，拆成一人一步、分期養信任，像跟欠過帳的供應商「你準時送這批、我下批才加量」。沙烏地、卡達、埃及、土耳其、巴基斯坦全背書，當保人兼監工，機制更穩。但——還是草案、沒簽字、Hormuz 還沒有第一艘船通過，而且 Trump 胡蘿蔔之外還撂了棒子「失敗就再打」。離和平比上週近很多，棒子沒放下。Customer A 今晚續攤醒腦、星鰻押壽司配冷酒，明天早起看 Hormuz 的船。他今天的心得：很多談不攏，不是條件談不攏，是順序談不攏——relief for performance，本質是重新設計順序。明天那艘船，過了再說。',
      duration: 6000,
    },
  ],
};
