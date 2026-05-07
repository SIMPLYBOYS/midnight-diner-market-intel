import type { Episode } from '../../engine/types';

/**
 * Sources verified 2026-05-07:
 * - Wed 5/6 US close: S&P 500 7,365.12 (+1.46%, record), Nasdaq Comp 25,838.94
 *   (+2.02%, record), Dow 49,910.59 (+612.34 pts, +1.24%). Driver: report of
 *   US-Iran near-deal + AMD/SMCI earnings beats.
 *   (TheStreet live blog 5/6, Bloomberg 5/6, AlainGuillot recap)
 * - Wed 5/6 semis: AMD +17.77% (post-earnings), SMCI +24.5%, Nvidia +5.77% to
 *   $207.83 (Nvidia announced $2.7B Corning partnership / 3 NC+TX optical fabs,
 *   3,000 jobs, 10x US optical capacity), Intel +4.22%.
 *   (TheStreet, Motley Fool live coverage 5/6)
 * - Wed 5/6 Brent settle: $102.22, -6.96% from Tue settle of $109.87 — gives
 *   back essentially all of Mon's Hormuz spike and then some.
 *   (Trading Economics, Fortune oil price 5/6)
 * - Wed 5/6 Trump ultimatum: threatens "much higher level and intensity" bombing
 *   if Iran doesn't sign; White House moving toward one-page MOU framework
 *   (Hormuz first, nuclear later); Iran reviewing US proposal via Pakistani
 *   mediation. WaPo: ~23K sailors stranded on 87-country vessels in Persian Gulf.
 *   (CNBC 5/6, NPR 5/6, WaPo 5/5, CBS Live, Al Jazeera 5/6)
 * - Thu 5/7 Asia close (today): Nikkei 225 hit 62,000 for the FIRST TIME EVER,
 *   up >5% on the day — second post-Golden-Week session erases all Iran-war
 *   losses and adds new high. KOSPI -0.68% (cooling off after Wed +6.45%).
 *   Hang Seng +1.47%. (CNBC Asia 5/7, Bloomberg)
 * - Thu 5/7 US data due (~21:30 JST tonight): Initial Jobless Claims week of
 *   May 2 — consensus 205K vs prior 189K (lowest since 1969). Continuing 1.80M
 *   vs prior 1.785M. Nonfarm Productivity Q1 prelim +0.7% vs prior +1.8%.
 *   Unit Labor Costs Q1 prelim +2.6% vs prior +4.4%. (Investing.com econ
 *   calendar, FRED ICSA, FXStreet)
 * - Fri 5/8 (tomorrow): April NFP +60K consensus, unemployment 4.3% unchanged,
 *   prior March +178K.
 * - Powell term ends Fri 5/15 (8 days). Warsh full Senate vote week of 5/11.
 * - Polymarket "Will the Iranian regime fall by June 30?": yesProbability moved
 *   from 0.055 → 0.045 at t=1778065207 (UTC 2026-05-06 13:00) = 22:00 JST Wed
 *   evening, ~during ep27 airtime. Held 4.5% since. Volume $37.70M (was $36.42M
 *   Wed = +$1.28M in 24h, the biggest one-day jump since 5/3). 168 history
 *   points in latest.json, collectedAt 2026-05-07T01:07:08Z. Last 25 used
 *   verbatim below — captures the 5.5%→4.5% step exactly.
 *   (public/polymarket/latest.json)
 */
export const EPISODE_28: Episode = {
  id: 'ep-28',
  date: '2026-05-07',
  title: '20260507 賭盤終於動了一格',
  description: '禮拜四晚上、Tokyo 黃金週後第二天、Nikkei 一口氣跳超過 +5%、第一次破 6 萬 2、把禮拜一那場恐慌一次補回來。昨晚 Trump 一邊說「協議快好了」、一邊放話「如果伊朗不簽、轟炸等級會比之前更高」——油從 110 跌到 102、再跌 7%。S&P 7,365、Nasdaq 25,838、又是新高。AMD 收 +17.77%、Nvidia +5.77%、AI 那條線整片紅得發光。但賭盤上那條 48 小時紋風不動的線——「6/30 前伊朗政府會不會倒」——昨晚 10 點動了、從 5.5% 跌到 4.5%、過去一天有 128 萬美金的注下進去。',
  actions: [
    { type: 'bgm', track: 'chill-lofi', command: 'play' },

    {
      type: 'narration',
      text: '禮拜四晚上 10 點、東京黃金週後第二天、Tokyo 收盤 Nikkei 第一次破 6 萬 2、漲超過 +5%、把禮拜一 Project Freedom 那場恐慌、一個下午全部補回來、還反手創新高。昨晚紐約那邊更兇——S&P 收 7,365、Nasdaq 收 25,838、兩個都是新高、Dow 跳 612 點。AMD 一天 +17.77%、Nvidia +5.77%、Supermicro +24.5%、半導體那一塊整片發光。油呢？Brent 從前天的 110 一路收到 102、一天再跌 7%、把禮拜一那場跳 5% 的衝擊整個吐回來。三天前的 114、現在像沒發生過。但有一個地方終於動了——昨晚 10 點、剛好我們昨晚的食堂在收尾的那個時候、賭盤上「6/30 前伊朗政府會不會倒」這條線、從紋風不動的 5.5% 跌到 4.5%——一格、不大、但這是它連續 48 小時沒動之後、第一次有人覺得「結局」要改。今晚的食堂、第一次有人在猜「會不會就這樣結束」。',
      duration: 5400,
    },

    // ── Real Thu market state — Wed US close + Thu Asia close ──
    {
      type: 'market-data',
      data: {
        tickers: [
          { symbol: 'Nikkei 225 收盤', price: 62000.00, change: 5.0 },
          { symbol: 'S&P 500 收盤', price: 7365.12, change: 1.46 },
          { symbol: 'Nasdaq 收盤', price: 25838.94, change: 2.02 },
          { symbol: 'Brent 油價', price: 102.22, change: -6.96 },
        ],
        volatility: 19,
        vix: 15.2,
        rsi: 64.8,
        beta: 1.02,
        priceHistory: [7259, 7278, 7295, 7312, 7328, 7342, 7355, 7365],
        volumeHistory: [78, 92, 104, 112, 118, 124, 128, 130],
        sectors: [
          { label: 'Nikkei +5% 破 6 萬 2 — 黃金週後第二天補完所有恐慌', value: 1240, color: '#22cc55' },
          { label: 'AMD +17.77%、Nvidia +5.77%、SMCI +24.5% — AI 整片紅', value: 980, color: '#44aaee' },
          { label: 'Brent 102 — 三天前 114、Trump 喊停 + 威脅、油吐回來', value: 720, color: '#22cc55' },
          { label: '今晚 21:30 JST 失業金 + 生產力，明早 NFP 6 萬', value: 420, color: '#cc8844' },
        ],
        headline: 'Nikkei 第一次破 6 萬 2，S&P／Nasdaq 同創新高，AMD +17.77%、Brent 跌回 102；賭盤伊朗政府倒台機率 5.5%→4.5%',
      },
    },

    // Chef alone first — Thursday late shift, post-Golden-Week busy
    { type: 'enter', character: 'chef', toTile: 'stove' },
    { type: 'wait', duration: 600 },
    { type: 'move', character: 'chef', toTile: 'prep-area' },
    { type: 'wait', duration: 500 },
    { type: 'move', character: 'chef', toTile: 'stove' },
    { type: 'wait', duration: 400 },

    // Customer B enters first this episode — variation in pacing
    { type: 'enter', character: 'customer-b', toTile: 'entrance' },
    { type: 'move', character: 'chef', toTile: 'counter-center' },
    { type: 'dialogue', character: 'chef', text: 'いらっしゃい。今天比昨天還早來、是不是市場太順、提前下班？我老婆早上看 Yahoo 新聞、跟我說「妳們那個 Nikkei 是不是瘋了、一天跳這麼多」、我說我問問。' },

    { type: 'move', character: 'customer-b', toTile: 'random-stool' },
    { type: 'sit', character: 'customer-b' },

    { type: 'dialogue', character: 'customer-b', text: '師傅、今天我桌上下午三點半就把當天的單收完了、我五點就走出辦公室、難得。Nikkei 收 6 萬 2、第一次。但這個跳法、不是「瘋」、是「補課」——禮拜一那場 Project Freedom 派船、Tokyo 剛好在放假、整個禮拜的市場恐慌它沒參加到。今天一開盤、它把禮拜一沒跌的那一段、加上禮拜二我們桌上下調的部位、全部一次補進來。」' },

    { type: 'move', character: 'chef', toTile: 'stove' },
    { type: 'wait', duration: 400 },

    { type: 'dialogue', character: 'chef', text: '哦——所以是 Tokyo 沒上的課、今天一次上完。我妹妹昨天也問我「為什麼 Korea 已經跳了、Tokyo 還沒跳」、我跟她說「他們黃金週放假」、她說「啊好可愛」。' },

    { type: 'dialogue', character: 'customer-b', text: '可愛、然後一補補出第一次破 6 萬 2。我們桌上一個老前輩今天下午跟我講一句話我寫下來了——「市場上漲、最快的不是好消息、是『沒參加到的人終於能參加』」。Tokyo 過去四天看 Korea 跟 Taiwan 跳、看 AMD 報、看 Trump 喊停、什麼都看了沒法買、今天市場一開、所有人同一秒按下單。」' },

    { type: 'wait', duration: 400 },

    // Customer A enters — caught up on the overnight US session
    { type: 'enter', character: 'customer-a', toTile: 'entrance' },
    { type: 'move', character: 'customer-a', toTile: 'random-stool' },
    { type: 'sit', character: 'customer-a' },

    { type: 'move', character: 'chef', toTile: 'counter-center' },
    { type: 'dialogue', character: 'chef', text: 'いらっしゃい。今天連續兩天被打臉、有沒有恢復一點？' },
    { type: 'move', character: 'chef', toTile: 'stove' },

    { type: 'dialogue', character: 'customer-a', text: '師傅、第三天我學乖了——今天我什麼預測都不做、我只看數字。然後 S&P 7,365、Nasdaq 25,838、AMD +17.77%、Nvidia +5.77%、Supermicro +24.5%、Brent 102、Nikkei 6 萬 2 第一次——這六個數字我看完、放下手機、出來吃飯。我們桌上有人說「這就是我們做這行最爽的一天」。」' },

    { type: 'dialogue', character: 'chef', text: '哦——三天前你跟我說「油可能還會再跌一點」、那天油跳；昨天你說「油 109、AI 慶祝可能站不住」、今天油 102、AI 還在慶祝。今天你說什麼都不說、我反而擔心你。' },

    { type: 'dialogue', character: 'customer-a', text: '師傅、我這個叫做「市場讓你閉嘴」。一個人連續兩次說錯、第三次最聰明的選擇就是不說。我們桌上有個更老的前輩、做了 25 年、他說過一句話——「市場最大的敵人、不是看錯方向、是不肯閉嘴」。」' },

    { type: 'wait', duration: 400 },

    // ── AMD aftermath + Nvidia Corning ──
    { type: 'dialogue', character: 'chef', text: '那 AMD 那邊呢？昨天我以為 +15% 已經很多、今天再 +17.77%？' },

    { type: 'dialogue', character: 'customer-b', text: '師傅、+15% 是盤後、+17.77% 是禮拜三正式收盤。中間這個 2.77 個百分點、是「過了 12 個小時、所有大行更新模型、發現 AMD 比想像中更好」這層認知補進來。我們桌上下午有看到、有兩家以前不喊買的賣方今天改口、寫了一份升級報告——這種事不常見、要嘛一致看好、要嘛一致觀望、突然有人改口、就是「不能再裝沒看到」的那種數字。」' },

    { type: 'dialogue', character: 'customer-a', text: 'Nvidia 也順帶被拉、+5.77% 收 207.83。但更有意思的是 Nvidia 昨天公布跟 Corning 的合作——Corning 是做光纖玻璃的那家、Nvidia 投 27 億、在北卡跟德州蓋三座光學廠、增加美國光學產能 10 倍、創 3,000 個工作。這不是 AI 晶片、是 AI 周邊——AI 跑這麼大、訊號要在資料中心裡走、需要光纖、不能靠銅線。Nvidia 在補這條基礎設施。」' },

    { type: 'dialogue', character: 'chef', text: '哦——這聽起來像我師父當年。他要把店交給我之前、不只是把廚房收乾淨、連巷口賣魚的、賣酒的、收垃圾的、他都帶我去打過招呼。他說「店不是你一個人在做、是一條巷子一起在做」。Nvidia 大概是這個意思——他們不只賣晶片、他們在把整條巷子都整理好。」' },

    { type: 'dialogue', character: 'customer-a', text: '師傅、這個比喻我等下要用在我們桌上的早會。」' },

    { type: 'wait', duration: 400 },

    // ── Polymarket — the line finally moved ──
    { type: 'move', character: 'chef', toTile: 'counter-center' },
    { type: 'dialogue', character: 'chef', text: '對了昨天那條一直沒動的線——5.5% 那條、賭伊朗政府倒不倒——今天還在嗎？' },

    {
      type: 'polymarket-odds',
      data: {
        asOf: '2026-05-07T01:07:08Z',
        highlightSlug: 'will-the-iranian-regime-fall-by-june-30',
        markets: [
          {
            slug: 'will-the-iranian-regime-fall-by-june-30',
            question: 'Will the Iranian regime fall by June 30?',
            yesProbability: 0.045,
            volume: 37700788,
            endDate: '2026-06-30T00:00:00Z',
            history: [
              { t: 1778032806, p: 0.055 }, { t: 1778036407, p: 0.055 }, { t: 1778040007, p: 0.055 },
              { t: 1778043607, p: 0.055 }, { t: 1778047221, p: 0.055 }, { t: 1778050811, p: 0.055 },
              { t: 1778054405, p: 0.055 }, { t: 1778058009, p: 0.055 }, { t: 1778061610, p: 0.055 },
              { t: 1778065207, p: 0.045 }, { t: 1778068809, p: 0.045 }, { t: 1778072407, p: 0.045 },
              { t: 1778076010, p: 0.045 }, { t: 1778079611, p: 0.045 }, { t: 1778083206, p: 0.045 },
              { t: 1778086810, p: 0.045 }, { t: 1778090408, p: 0.045 }, { t: 1778094006, p: 0.045 },
              { t: 1778097607, p: 0.045 }, { t: 1778101257, p: 0.045 }, { t: 1778104806, p: 0.045 },
              { t: 1778108407, p: 0.045 }, { t: 1778112010, p: 0.045 }, { t: 1778115606, p: 0.045 },
              { t: 1778116023, p: 0.045 },
            ],
          },
        ],
      },
    },

    { type: 'dialogue', character: 'customer-a', text: '師傅、有意思了——昨晚 10 點、剛好我們在你這吃柏餅的時候、那條線動了一格、5.5% 跌到 4.5%、之後一晚上沒再變。過去一天有 128 萬美金的注下進去、是這個合約最近兩個禮拜下注最多的一天。」' },

    { type: 'dialogue', character: 'chef', text: '哦——前面三天油跳、油跌、Nikkei 跳、AMD 跳、它都沒動；昨晚 Trump 同時講「協議快好」跟「不簽就轟炸」、它就動了？' },

    { type: 'dialogue', character: 'customer-b', text: '師傅、你又抓到關鍵。昨晚 Trump 那兩句話放在一起、市場讀出來的不是「比較緊張」、是「快結束」——不管伊朗簽不簽、48-72 小時內會有結果。要嘛簽了、結束；要嘛不簽、被打、然後談、然後結束。兩條路都不太可能讓伊朗政府在 6/30 之前倒。所以原本「會出事但不會崩」的故事、今天變成「會結束、但結局還是政府留著」。一格、4.5%、不到一個百分點、但意思變了。」' },

    { type: 'dialogue', character: 'customer-a', text: '我們桌上一個做巨集的同事今天早上講一句話我覺得寫得最好——「Polymarket 那條線、過去 48 小時沒動、不是因為大家沒在看、是因為大家不知道該往哪邊推。昨晚 Trump 給了一個方向、不管好壞、市場就有東西可以下了」。」' },

    { type: 'wait', duration: 400 },

    // ── Tonight's tier-2 data + tomorrow NFP ──
    { type: 'move', character: 'chef', toTile: 'stove' },
    { type: 'dialogue', character: 'chef', text: '那今晚還有什麼？我下午看新聞、好像有一堆不是新聞的數字要出。' },

    { type: 'dialogue', character: 'customer-b', text: '今晚 21:30 JST、就是再過半小時、美國要公布上禮拜的失業金申請人數——上禮拜 18.9 萬、今天預估 20.5 萬。聽起來像普通數字、但這是過去 50 年最低點剛剛反彈的第一週、值得看一眼。然後同一時間還有 Q1 生產力跟單位勞動成本——生產力 +0.7% vs 上次 +1.8%、單位勞動成本 +2.6% vs 上次 +4.4%。」' },

    { type: 'dialogue', character: 'chef', text: '單位勞動成本是什麼？聽起來很硬的詞。' },

    { type: 'dialogue', character: 'customer-b', text: '師傅、用你食堂的話講——就是「煮一碗麵要付出去的工錢、有沒有變貴」。如果煮一碗麵的工錢一年漲 4.4%、但你麵的售價沒漲這麼多、你的毛利就被壓。如果這個數字從 4.4% 降到 2.6%、表示工錢漲速在減速、聯準會就會更舒服降息。」' },

    { type: 'dialogue', character: 'chef', text: '哦——我懂了。我之前一直以為「降息對誰好誰壞」很複雜、原來是「老闆的工錢付得輕一點」這種事。' },

    { type: 'dialogue', character: 'customer-a', text: '然後明天早上 21:30、4 月 NFP——預估 6 萬、上個月 17.8 萬。這個是這禮拜最大的一個數字。出來的數字、會回頭定義今天這場慶祝是有道理的、還是太爽。如果 NFP 出來高於 8 萬、市場會擔心「降息會更慢」、AI 那條今天的 +5%、明天就要還一點回去。如果出來低於 4 萬、那就是「軟到 Fed 必須動」、AI 還會再跑。」' },

    { type: 'dialogue', character: 'customer-b', text: '我先生今天還問我「妳明天禮拜五會不會早點回家」、我跟他說「明天 21:30 JST 美國資料、之後我桌上會有一波 call」。他笑說「那家裡的孩子、今晚先讓他們多吃半碗飯、明天晚上你回來再唸他們」。」' },

    { type: 'wait', duration: 400 },

    // ── Closing ──
    { type: 'move', character: 'chef', toTile: 'counter-center' },
    { type: 'dialogue', character: 'chef', text: '今晚要點什麼？我妹今天早上又寄一盒柏餅來、我說「妳上次寄的我都還沒吃完」、她說「過了今天就過了端午、給你吃完」——她搞錯日子、端午是六月。但兩位、我給兩位煮一碗熱湯麵、配兩塊柏餅好了。' },

    { type: 'dialogue', character: 'customer-a', text: '熱湯麵、加蛋、湯多。柏餅一塊就好、明天早上 NFP 我桌上會用早餐 call、我得早睡。」' },

    { type: 'dialogue', character: 'customer-b', text: '一樣、但我柏餅整塊帶走、回家給孩子們明天當早餐。我先生說「妳明天 NFP 出完早點回家」、我說「我盡量」、其實我不太盡量。」' },

    { type: 'dialogue', character: 'chef', text: '來、馬上煮。我師父當年退休前最後三個月、每天還是七點開門、他說「店做久了、不是你選擇做、是它每天等你來」。妳說的「不太盡量」、大概就是這個意思。' },

    { type: 'sfx', sound: 'chimes' },

    { type: 'wait', duration: 500 },
    { type: 'move', character: 'chef', toTile: 'stove' },

    {
      type: 'narration',
      text: '禮拜四晚上 11 點、東京黃金週後第二天的店家燈火、比昨天更滿、Nikkei 第一次破 6 萬 2、是所有財經頻道明天早上的頭版。再過 30 分鐘、紐約那邊會公布上禮拜失業金人數、過去 50 年最低點之後的第一個讀數。再過 22 個小時、4 月 NFP 出來、預估 6 萬、上個月 17.8 萬——這個數字會回頭定義今天這場 +5% 是有道理的、還是太爽。再過 8 天 Powell 把那個位子交出去、再過 4 天 Warsh 在參議院全院表決。波斯灣那邊、Project Freedom 還是暫停、伊朗在透過巴基斯坦傳話、白宮在備一份一頁的備忘錄、油從 110 收到 102、波斯灣裡 23,000 個船員還沒回家。賭盤上「6/30 前伊朗政府會不會倒」這條線、過去 48 小時紋風不動、昨晚 10 點動了一格、停在 4.5%、有人下了 128 萬美金。今晚的食堂、有兩碗熱湯加蛋、一塊柏餅留下、一塊帶回家、一句師父退休前說的話、跟一條過了三天才動的下注線——它說「快結束了、但結局沒變」。',
      duration: 5800,
    },
  ],
};
