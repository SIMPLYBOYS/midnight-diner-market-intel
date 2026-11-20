import type { Episode } from '../../engine/types';

/**
 * Sources verified 2026-05-10:
 * - Today is Sunday 5/10 JST. Markets closed all weekend. Last live print is
 *   Fri 5/8 US close. Tokyo reopens Mon ~09:00 JST (~12h from 21:00 JST).
 * - Week ending 5/8: S&P 500 +2.3% (6th straight weekly gain, longest since
 *   2024), closed 7,398.93 Fri (+0.84%). Brent fell ~7% on the week (-6 to -7%
 *   in different sources), settled near $101 Fri (Yahoo Finance live 5/8,
 *   CNBC 5/7, Trading Economics).
 * - Iran 14-point MOU response: still NOT delivered as of Sun 5/10. Original
 *   "by Friday" deadline missed; Saturday passed without formal response;
 *   Sunday US morning still pending. (Axios 5/6, Time 5/7, ABC live, Fox live
 *   5/8, Iran International)
 * - Strait of Hormuz "largely closed since late February" — ~10 weeks of
 *   disruption. IEA estimates conflict removing ~14M bpd from global supply.
 *   (Rigzone 5/8, OilPrice.com)
 * - Today (Sun 5/10) Face the Nation guests: Energy Secretary Chris Wright,
 *   Sen. Mark Kelly (D-AZ), Rep. Ted Lieu (D-CA), Save the Children CEO Janti
 *   Soeripto, Dr. Scott Gottlieb. Show airs 10:30am ET = 23:30 JST Sun
 *   (after this episode's 21:00 JST setting — guest list known but show not
 *   yet aired). Wright on energy is the market-moving guest. (CBS News 5/10)
 * - Senate schedule: convenes Mon 5/11 3:00pm ET (= Tue 04:00 JST), Warsh
 *   cloture vote 5:30pm ET (= Tue 06:30 JST). Republicans hold 53 seats,
 *   simple majority needed. Banking Committee passed 13-11 on party lines.
 *   (Senate Daily Press 5/7, CBS News, CNBC 4/29)
 * - Powell term ends Fri 5/15 (5 days from today).
 * - Polymarket "Will the Iranian regime fall by June 30?": latest.json
 *   collectedAt 2026-05-10T01:13:43.796Z (Sun 10:13 JST). yesProbability
 *   0.045 unchanged. Volume $38,163,442 (was $38,075,107 Sat = +$88K in 24h —
 *   even quieter than Sat's +$210K, the deadest 24h block on record for this
 *   contract). Last 25 history points used verbatim below.
 *   (public/polymarket/latest.json)
 * - sectors[].value methodology: |%change|×100 of headline asset for each
 *   theme. Using Fri 5/8 close (frozen weekend snapshot) — same numbers as
 *   ep30 are still the "last picture" until Mon Tokyo open.
 */
export const EPISODE_31: Episode = {
  id: 'ep-31',
  date: '2026-05-10',
  title: '20260510 禮拜天晚上、信還沒到、再過 12 小時 Tokyo 開盤',
  description: '禮拜天晚上、東京週末最後一個夜晚、店比禮拜六更空。原本禮拜五要出的伊朗回信、禮拜六沒出、禮拜天到現在還沒出——三天了。賭盤上 4.5% 那條線、過去 24 小時下注只有 8 萬 8 美金、是這合約史上最少的一天。今晚 11 點半 NHK 會轉播 Face the Nation——Energy Secretary 上場、油價這禮拜跌 7%、有人想聽他怎麼講 Hormuz。再過 12 小時 Tokyo 開盤、再過 36 小時參議院走 Warsh cloture、再過 5 天 Powell 把位子交出去。',
  actions: [
    { type: 'bgm', track: 'chill-lofi', command: 'play' },

    {
      type: 'narration',
      text: '禮拜天晚上 9 點、東京週末最後一個夜晚、巷口的洗衣店已經把鐵捲門拉一半、街上只剩兩家還亮著——食堂、跟一家 24 小時的便利商店。今晚客人比禮拜六更少——禮拜六還有「家裡沒人煮飯」的客人來、禮拜天大家都在家裡準備明天上班。原本禮拜五國務卿 Rubio 說會出的那封伊朗回信、禮拜六拖了一整天沒出、今天禮拜天到現在、Pakistan 那邊也還沒收到正式版本——三天了。Brent 這禮拜跌 7%、收 $101、原因不是供需、是「戰爭可能要結束」這個故事在被慢慢相信。但 Hormuz 從二月底到現在、實際上還是「半關」狀態、IEA 說全世界每天少了 1,400 萬桶油在路上。再過兩個半小時、CBS 那個禮拜天節目會上 Energy Secretary——Chris Wright、會被問「Hormuz 什麼時候真的開」。再過 12 小時、東京開盤；再過 36 小時、紐約參議院 Warsh 走 cloture；再過 5 天、Powell 把聯準會主席的位子交出去。',
      duration: 5400,
    },

    // ── Friday US close — still the last live print, frozen weekend ──
    {
      type: 'market-data',
      data: {
        tickers: [
          { symbol: 'S&P 500（週收）', price: 7398.93, change: 0.84 },
          { symbol: 'Nasdaq（週收）', price: 26247.08, change: 1.71 },
          { symbol: 'Brent 油價（週收）', price: 101.73, change: 1.66 },
          { symbol: 'Polymarket 伊朗', price: 0.045, change: 0 },
        ],
        volatility: 16,
        vix: 15.2,
        rsi: 61.5,
        beta: 1.03,
        priceHistory: [7337, 7345, 7360, 7372, 7384, 7392, 7396, 7399],
        volumeHistory: [76, 88, 102, 118, 130, 140, 146, 150],
        // sectors[].value = |%change| × 100 (basis points) of headline asset for each theme.
        // Today is Sunday — using week-ending-5/8 stats, not just Fri intraday, because
        // the "Sunday recap" angle is the weekly story (S&P 6th straight up week, Brent
        // -7% on the week from peace-talk hopes).
        sectors: [
          { label: 'Brent 週跌 -7%（伊朗備忘錄審查中、油全週吐）', value: 700, color: '#22cc55' },
          { label: 'S&P 500 週漲 +2.3%（第六週連漲、2024 以來最長）', value: 230, color: '#22cc55' },
          { label: 'Nasdaq +1.71%（禮拜五 NFP 不軟、AI 收新高）', value: 171, color: '#22cc55' },
          { label: 'Polymarket 24h 量 $88K（這合約史上最低）', value: 9, color: '#888888' },
        ],
        headline: '禮拜天 21:00 JST 週末凍結快照：S&P 週 +2.3% 第六連紅、Brent 週 -7% 收 $101、伊朗回信過了三天還沒到、24 小時後紐約 Senate 走 Warsh cloture',
      },
    },

    // ── Chef alone, Sunday quiet ──
    { type: 'enter', character: 'chef', toTile: 'stove' },
    { type: 'wait', duration: 600 },
    { type: 'move', character: 'chef', toTile: 'prep-area' },
    { type: 'wait', duration: 500 },
    { type: 'move', character: 'chef', toTile: 'stove' },
    { type: 'wait', duration: 400 },

    // Customer A enters first
    { type: 'enter', character: 'customer-a', toTile: 'entrance' },
    { type: 'move', character: 'chef', toTile: 'counter-center' },
    { type: 'dialogue', character: 'chef', text: 'いらっしゃい。禮拜天還來、是不是禮拜天晚上比禮拜六還難熬？我老婆昨天從千葉打電話來、說「我明天搭末班車回」、結果剛剛訊息又說「我媽叫我多留一晚」——我今晚還是一個人。' },

    { type: 'move', character: 'customer-a', toTile: 'random-stool' },
    { type: 'sit', character: 'customer-a' },

    { type: 'dialogue', character: 'customer-a', text: '師傅、被你說中。禮拜天晚上比禮拜六難熬——禮拜六大家都在「享受週末」、禮拜天晚上開始倒數明天的會議。我老婆跟小孩明天才從千葉回來、我一個人想到再回家對著電視吃泡麵就不行、走過來。今晚不講盤、講人話——你昨天聽到的那封信、原本禮拜五要出、現在禮拜天晚上還沒出。三天了。' },

    { type: 'move', character: 'chef', toTile: 'stove' },
    { type: 'wait', duration: 400 },

    { type: 'dialogue', character: 'chef', text: '三天還沒出——是不是寫到一半、寫不下去了？我寫便當訂單給魚販、有時候寫一半被客人叫住、放下、回來忘了寫到哪、整張要重來。國家寫信、總不會也這樣吧。' },

    { type: 'dialogue', character: 'customer-a', text: '師傅、其實某種程度上就是這樣。禮拜五早上飛彈先打了 UAE、然後美國回敬兩艘油輪、然後 Trump 講「love tap」——這幾件事打進去、伊朗那邊原本寫好的草稿就要重改。每改一次、要去問三個老人——最高領袖那邊、革命衛隊那邊、外交部那邊——三邊都點頭、那一頁才能寄出去。我們桌上一個做中東的同事跟我講、伊朗的內部流程、本來就是「先吵兩天、再簽」、現在多了一個飛彈事件、要再多吵一天、所以拖到禮拜天晚上是合理的。' },

    { type: 'dialogue', character: 'chef', text: '哦——所以「沒出」也不一定是壞消息？我以為這種事拖越久越糟糕。' },

    { type: 'dialogue', character: 'customer-a', text: '師傅、這個是今晚最有意思的事。一般人想——「拖三天、是不是要打仗了？」但我們桌上反過來看——「真的要打的話、不會花三天寫信、會直接動手」。所以「還在寫」這件事本身、就是「還在談」的訊號。再加上禮拜五雙方各打一下之後就停手、沒有第二輪、那更像是兩邊在「給彼此面子」、不是在升級。' },

    { type: 'wait', duration: 400 },

    // ── Brent's weekly story — the actual headline, not Polymarket ──
    { type: 'dialogue', character: 'chef', text: '那這禮拜油呢？我聽我妹禮拜四晚上打電話來、她在韓國、跟我說「我加油的時候油站老闆說便宜了一點」——她講得很開心、好像撿到什麼。' },

    { type: 'dialogue', character: 'customer-a', text: '師傅、你妹妹那個感覺是真的——這禮拜 Brent 從上禮拜五的 $108 跌到禮拜五收 $101、整週掉 7%。原因不是大家突然不開車、是那份 14 點備忘錄在審——市場聽到「戰爭要結束」這個故事就先押油會跌。但有意思的是、Hormuz 從二月底到現在、實際上還是半關狀態、國際能源署 IEA 估每天全球少 1,400 萬桶油在路上——這是很大的數字、平常全世界一天用一億桶、少 1,400 萬就是少 14%。' },

    { type: 'dialogue', character: 'chef', text: '一天少 1,400 萬桶——那少掉的油去哪裡了？是還在伊朗、還是被美國軍艦攔下來、還是繞路？我這條街每天少 100 個客人、我立刻就知道、店一定收掉。地球上一天少 14%、怎麼還能轉？' },

    { type: 'dialogue', character: 'customer-a', text: '師傅、好問題。短話講——三件事補上：一個是美國自己增產、Texas 那邊禮拜一到禮拜五加開；一個是各國放戰備儲油——之前儲在地下的、現在抽出來用；第三個就是「節省」、有些工廠把生產時段改到晚上避高峰、有些國家油價漲就少燒。三個合起來、勉強撐住。但這只是「撐」、不是「替代」——所以這禮拜油跌、不是因為供應變多、是「市場相信戰爭快結束、撐的時間不用太長」。如果禮拜天那封信真的拖到下禮拜還沒出、油很可能週一晚上一開盤就反彈。' },

    { type: 'wait', duration: 400 },

    // Customer B enters — also Sunday casual
    { type: 'enter', character: 'customer-b', toTile: 'entrance' },
    { type: 'move', character: 'customer-b', toTile: 'random-stool' },
    { type: 'sit', character: 'customer-b' },

    { type: 'move', character: 'chef', toTile: 'counter-center' },
    { type: 'dialogue', character: 'chef', text: 'いらっしゃい。今晚兩位都禮拜天還出來、是不是明天起床都不太想？' },
    { type: 'move', character: 'chef', toTile: 'stove' },

    { type: 'dialogue', character: 'customer-b', text: '師傅、被你看穿。我先生今晚帶小孩去他爸媽家住、我一個人在家、明天又是週一開盤、想到禮拜一早上的 6:30 要打開所有 Bloomberg 螢幕就不行——走過來吃個熱湯、墊一下心。我先生剛才訊息問我「妳今晚不要喝太多」、我說「你比我更怕我宿醉」。' },

    { type: 'dialogue', character: 'customer-a', text: '我剛跟師傅在講——伊朗那封信還沒到、第三天了。妳那邊 desk 上禮拜五收盤前有沒有講這個？' },

    { type: 'dialogue', character: 'customer-b', text: '我們 desk 禮拜五收盤前一個小時、組長把所有人叫起來、問「週一開盤如果信來了、價格會怎麼動？信沒來呢？」——我們花了 40 分鐘把兩種劇本都跑一遍。結論是——信來了的話、Brent 直接 -3%、亞股加 +1%；信沒來的話、Brent 反彈 +2 到 +4、亞股跟著看 Hormuz 那邊有沒有新狀況。所以禮拜天晚上、我們大家都在等同一件事——一封信。' },

    { type: 'dialogue', character: 'chef', text: '兩種劇本都先寫好——這個我懂。我每天進貨前、心裡也會跑兩種——「鯖魚送到、湯就照原本算」、「鯖魚沒到、湯就改成味噌豆腐」。我一個人煮飯都要備兩套、你們幾百個人的事、難怪要備兩套。' },

    { type: 'dialogue', character: 'customer-b', text: '師傅、這個比喻我們組長下禮拜一站起來開會、應該會用——「鯖魚到不到、決定今天的湯」。比起「下行情境分析」這種詞、客戶聽你這個還比較懂。' },

    { type: 'wait', duration: 400 },

    // ── Energy Secretary on TV tonight — non-Polymarket angle ──
    { type: 'dialogue', character: 'chef', text: '對了、剛才電視 NHK 的跑馬燈說、今晚 11 點半轉播美國禮拜天那個節目——好像是 Face the Nation——上面有個 Energy Secretary、是不是跟油價有關？我老婆禮拜六打電話來特別提了「今晚記得看那個」。' },

    { type: 'dialogue', character: 'customer-a', text: '師傅、你老婆消息很快——對、Chris Wright、能源部長。禮拜天節目通常是「美國政府想對禮拜一開盤前的市場放什麼話」的場合。今天他上、要回答的問題就一個——「Hormuz 什麼時候真的全開？」如果他講「我們有信心兩週內」、禮拜一油跌；如果他講「我們在準備長期應變」、禮拜一油彈。我們桌上 11 點半全部會打開——比看球賽還認真。' },

    { type: 'dialogue', character: 'customer-b', text: '我們 desk 也是。今晚這場、不是「他會講什麼」、是「他不會講什麼」——比如他如果完全不提時間表、那就是「政府自己也不知道」。禮拜天節目最值錢的、不是答案、是「政府想讓市場聽到的口氣」。' },

    { type: 'dialogue', character: 'chef', text: '哦——這聽起來像我師父當年要把店交給我之前、街上的老人坐在門口聊天、特別提「年輕人來接、會不會把湯頭改了」。沒人直接問我、但我知道全街都在聽。聽不到答案、聽口氣。' },

    { type: 'dialogue', character: 'customer-a', text: '師傅、你這個一句話、把禮拜天節目的本質講完了。禮拜天節目就是「全街老人坐在門口、評論年輕人」。Chris Wright 今晚就是站在街口的那個年輕人。' },

    { type: 'wait', duration: 400 },

    // ── Polymarket — brief check, not the centerpiece ──
    { type: 'move', character: 'chef', toTile: 'counter-center' },
    { type: 'dialogue', character: 'chef', text: '對了那條伊朗賭盤、4.5% 那條、今天動了沒？昨晚兩位走的時候它已經一整天沒動了。' },

    {
      type: 'polymarket-odds',
      data: {
        asOf: '2026-05-10T01:13:43Z',
        highlightSlug: 'will-the-iranian-regime-fall-by-june-30',
        markets: [
          {
            slug: 'will-the-iranian-regime-fall-by-june-30',
            question: 'Will the Iranian regime fall by June 30?',
            yesProbability: 0.045,
            volume: 38163442,
            endDate: '2026-06-30T00:00:00Z',
            history: [
              { t: 1778295607, p: 0.045 }, { t: 1778299206, p: 0.045 }, { t: 1778302807, p: 0.045 },
              { t: 1778306409, p: 0.045 }, { t: 1778310007, p: 0.045 }, { t: 1778313611, p: 0.045 },
              { t: 1778317206, p: 0.045 }, { t: 1778320807, p: 0.045 }, { t: 1778324407, p: 0.045 },
              { t: 1778328009, p: 0.045 }, { t: 1778331610, p: 0.045 }, { t: 1778335211, p: 0.045 },
              { t: 1778338825, p: 0.045 }, { t: 1778342413, p: 0.045 }, { t: 1778346010, p: 0.045 },
              { t: 1778349612, p: 0.045 }, { t: 1778353217, p: 0.045 }, { t: 1778356809, p: 0.045 },
              { t: 1778360416, p: 0.045 }, { t: 1778364015, p: 0.045 }, { t: 1778367613, p: 0.045 },
              { t: 1778371211, p: 0.045 }, { t: 1778374807, p: 0.045 }, { t: 1778375524, p: 0.045 },
            ],
          },
        ],
      },
    },

    { type: 'dialogue', character: 'customer-b', text: '師傅、4.5%、還是動都沒動。但更誇張的是下注金額——過去 24 小時整個合約只多了 8 萬 8 美金。禮拜四 +17 萬、禮拜五 +21 萬、今天 +8.8 萬——是這合約有史以來、24 小時最少的一筆。意思是、賭盤的人禮拜天連賭都不想賭——大家都在等那封信、等 Energy Sec 上電視、然後再下注。' },

    { type: 'dialogue', character: 'customer-a', text: '我們桌上一個同事昨晚發訊息給我——「8 萬 8 是這條線的『睡眠費』」。意思是、這條線今晚是在睡覺、沒人下單但也沒人撤單、就放在那裡——明天醒來再說。我覺得他講得對。' },

    { type: 'dialogue', character: 'chef', text: '「睡眠費」——這個說法有意思。我每天打烊前、會把湯關小火不關掉、放一晚上、明天早上拉起來繼續用。今天晚上的這條線、就是被人放小火吊著、明天早上等狀況再決定要不要拉起來。' },

    { type: 'dialogue', character: 'customer-b', text: '師傅、你這個「小火吊著」、剛剛我已經偷偷打字到我先生群組——「明天早上 6 點半、我們 desk 把那鍋火拉起來」。' },

    { type: 'wait', duration: 400 },

    // ── Looking ahead — Tokyo open in 12h, Senate cloture in 36h ──
    { type: 'move', character: 'chef', toTile: 'stove' },
    { type: 'dialogue', character: 'chef', text: '那明天禮拜一一早、第一件大事是什麼？我老婆說她明天可能會搭中午回來、想知道她下車的時候世界長什麼樣。' },

    { type: 'dialogue', character: 'customer-b', text: '東京開盤、明天早上 9 點、再過 12 小時。第一件事就是「Brent 早盤怎麼開」——CME 油期貨會在我們這邊禮拜一早上 7 點先恢復交易、所以實際上 7 點就有第一個訊號了。然後 9 點 Nikkei 開盤、會跟著 Brent 跟禮拜五美股的方向走。' },

    { type: 'dialogue', character: 'customer-a', text: '美國那邊禮拜一沒大數據、最大的事是下午 3 點參議院開議、5 點半投 Warsh cloture——那是台北/東京時間禮拜二早上 6 點半。等於我們明天禮拜一交易日結束之後、東京晚上看著紐約那邊投票。如果 cloture 過、Warsh 等於提前確認、禮拜五 Powell 交班就是儀式；如果 cloture 沒過、那就要看下禮拜還能不能補一次——Powell 的位子如果禮拜五交不出去、會出大事。' },

    { type: 'dialogue', character: 'chef', text: '所以明天的劇本——早上看油、白天看亞股、晚上看美國投票。三段都不一樣的事、要連著看一天。聽起來像我們街上的祭典——早上扛神轎、中午吃流水席、晚上放煙火。各做各的、但是同一天。' },

    { type: 'dialogue', character: 'customer-a', text: '師傅、你這個「祭典」的比喻、我覺得我們桌上明天早上開盤前的站立會議、組長就會用——「今天三段、一段一段做、不要混在一起看」。' },

    { type: 'wait', duration: 400 },

    // ── Closing — Sunday night, send them home before Monday ──
    { type: 'move', character: 'chef', toTile: 'counter-center' },
    { type: 'dialogue', character: 'chef', text: '禮拜天晚上、兩位明天都要早起、我今晚不留兩位太久。我妹昨天又寄了一盒柏餅、加上前天的、我冰箱現在有六塊——這個分到禮拜三都還吃得完。我老婆從千葉再打電話來、說「你今晚記得早睡」、我說「我十點半要打開電視看那個能源部長」、她笑說「那就是不會早睡了」。' },

    { type: 'dialogue', character: 'customer-a', text: '師傅、我吃簡單一點、清麵加蛋、湯多。柏餅給我兩塊——明天早上配咖啡。明天早上 7 點 CME 油一開、我大概就在桌上不動了——晚餐再過來。' },

    { type: 'dialogue', character: 'customer-b', text: '一樣、清麵加蛋。柏餅我帶三塊——明天早餐我先生跟小孩各一塊、我自己一塊。我先生問我「妳今晚會不會看那個美國節目」、我說「我打開直播、邊洗碗邊聽」——他笑說「那妳明天宿醉的不是酒、是 Chris Wright」。' },

    { type: 'dialogue', character: 'chef', text: '我師父當年講過——「禮拜天晚上的湯、煮得清一點、客人明天要早起、不要喝得太飽」。我今晚就照他這套——湯清、麵不重、兩位吃完不會撐到睡不著。明天禮拜一、再回來。' },

    { type: 'sfx', sound: 'chimes' },

    { type: 'wait', duration: 500 },
    { type: 'move', character: 'chef', toTile: 'stove' },

    {
      type: 'narration',
      text: '禮拜天晚上 10 點半、東京週末最後一個夜晚收尾、洗衣店把鐵捲門完全拉下、便利商店店員把今天最後一籠御飯糰標上隔夜的「半額」貼紙。今晚的食堂、一鍋清湯、兩個吃完就走的客人、五塊柏餅被帶回家、跟一封還沒到的伊朗回信——已經第三天。Brent 這禮拜跌 7% 收 $101、S&P 第六週連漲 +2.3% 收 7,398、賭盤上 4.5% 那條過去 24 小時下注只多 8 萬 8 美金、是史上最低。再過一個小時、CBS Face the Nation 會上 Energy Secretary、會被問「Hormuz 什麼時候真的開」——師傅打算十點半打開電視、邊收尾邊聽。再過 10 個小時、CME 油期貨在東京早上 7 點恢復交易；再過 12 小時、Tokyo 開盤；再過 36 小時、紐約參議院走 Warsh cloture；再過 5 天、Powell 把聯準會主席的位子交出去。週末這扇縫、再過幾個小時就要關上——下禮拜的事、明天起床再說。',
      duration: 5800,
    },
  ],
};
