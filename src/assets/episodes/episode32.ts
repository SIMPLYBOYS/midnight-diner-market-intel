import type { Episode } from '../../engine/types';

/**
 * Sources verified 2026-05-11 (Mon JST):
 * - Iran's 14-point response delivered Sun 5/10 via Pakistan mediator. Iranian
 *   state media IRNA / IRIB confirmed early Mon Iran time. Response demands
 *   open Hormuz BEFORE nuclear concessions, agreed to export some HEU to a
 *   third country, but stopped short of dismantling existing nuclear sites.
 *   Other demands: Iran sovereignty over Hormuz, compensation for war damages,
 *   lifting sanctions, release of frozen assets. (Al Jazeera 5/10, NBC, IRNA)
 * - Trump rejection: Truth Social, Sun afternoon ET. First post: Iran "has
 *   been playing games with the United States... for 47 years". ~2 hours later:
 *   "I have just read the response from Iran's so-called 'Representatives.'
 *   I don't like it — TOTALLY UNACCEPTABLE!" (Mediaite 5/10, Bloomberg, NBC)
 * - Oil reaction: Brent +$4.4 / +4.3% to $105.6 (Sun NY late). Mon Asia
 *   intraday Brent July +3.49% to $104.83. WTI +$4.5 / +4.7% to $99.94.
 *   (AGBI 5/10, Bloomberg Markets Wrap, CNBC Asia)
 * - US futures Sun overnight: Dow -0.41%, S&P -0.25%, Nasdaq -0.16%
 *   (Stocktwits, Bloomberg)
 * - Asia Mon 5/11:
 *   - Nikkei opened 63,203 (record high), then choppy / marginally lower as
 *     oil weighed (CNBC Asia, FXEmpire, BizRecorder)
 *   - KOSPI surged +4.32% to 7,822.22 by 11:20 KST (record, fifth straight
 *     record session, mkt cap KOSPI+KOSDAQ topped 7,000T won = $4.75T for
 *     the first time). Samsung +6.33%, SK Hynix +11.68%. Driven by
 *     overnight US chip surge: Micron +15.49%, AMD +11.44%, Nvidia +1.75%.
 *     Program trading briefly suspended. (Korea Herald 5/11, Korea Times,
 *     Digital Today, TradingKey)
 * - China April CPI released 5/11: +1.2% YoY (vs +0.9% expected, +1.0% prior).
 *   Energy passing through. (TradingEconomics, InvestingLive Asia calendar)
 * - Energy Sec Chris Wright on CBS Face the Nation Sun 5/10: said "stopped
 *   Project Freedom at Iran's request"; "can't predict" when gas prices come
 *   down; military objectives achieved in ~5 weeks but ending Iran nuclear
 *   program "most likely would be achieved by negotiation"; floated pause
 *   in federal gas tax. (CBS News transcript 5/10, Washington Times, Inquirer)
 * - Senate Warsh cloture: Senate convenes Mon 5/11 3:00pm ET = Tue 04:00 JST,
 *   cloture vote 5:30pm ET = Tue 06:30 JST. Cloture passed 51-46 historically
 *   but at this episode's setting (Mon 21:00 JST) it has not happened yet.
 *   (Senate Daily Press, Congressional Record)
 * - Powell term ends Fri 5/15 — 4 days from this episode.
 * - Polymarket "Will the Iranian regime fall by June 30?": latest.json
 *   collectedAt 2026-05-11T01:13:30.739Z (Mon 10:13 JST). yesProbability
 *   repriced 0.045 → 0.065 at t=1778450408 (2026-05-10T22:00:08Z = Mon
 *   07:00 JST) — first hourly print AFTER Trump's Truth Social rejection
 *   reached the tape. Volume now $38,648,246 (was $38,163,442 yesterday =
 *   +$485K in 24h, vs only +$88K the prior 24h — 5.5x activity). Liquidity
 *   dropped from $726K to $445K (book got thinner as price moved).
 *   (public/polymarket/latest.json)
 * - sectors[].value methodology: |%change|×100 of headline asset for each
 *   theme. Today the picture is the divergence — chips ripping, oil ripping,
 *   Nikkei choppy. SK Hynix and Samsung quoted as the chip story drivers.
 */
export const EPISODE_32: Episode = {
  id: 'ep-32',
  date: '2026-05-11',
  title: '20260511 禮拜一晚上、信來了、被拒絕了、油彈了、韓國股市卻在創新高',
  description: '禮拜一晚上、東京收盤後、所有人都在消化這 24 小時——禮拜天上午伊朗那封 14 點的信終於透過巴基斯坦送出去、晚上 Trump 在 Truth Social 直接回「TOTALLY UNACCEPTABLE」、油立刻彈 4 塊錢一桶、Nikkei 早上開盤創新高之後一路晃到平盤、但是隔壁韓國的股市像沒看到 Iran 一樣、Kospi 衝 +4.3% 又破紀錄、SK Hynix 一根 +11.68%。賭盤上「伊朗政權會不會在 6/30 前倒」那條、卡在 4.5% 卡了三個禮拜、今天早上 7 點 Tokyo 正在通勤的時候、那條從 4.5 跳到 6.5——23 個小時下了 48.5 萬美金、是上週末的 5.5 倍。再過 9 個小時、紐約那邊參議院走 Warsh cloture；再過 4 天、Powell 把位子交出去。',
  actions: [
    { type: 'bgm', track: 'chill-lofi', command: 'play' },

    {
      type: 'narration',
      text: '禮拜一晚上 9 點、東京收盤已經過了五個半小時、巷口的拉麵店這時候人最多——剛下班、明天還要上班、不想煮飯、來吃一碗。食堂今晚比禮拜天熱鬧、因為大家從週末積了一肚子的話想找人講。最熱的話題就一個——禮拜天早上伊朗那封 14 點的信終於透過巴基斯坦送了、晚上 Trump 看完直接在 Truth Social 寫「TOTALLY UNACCEPTABLE」、油在禮拜天晚上紐約那邊開盤就跳 4 塊錢一桶、Brent 衝到 $105、WTI 接近 $100。今天早上 9 點 Nikkei 一開盤、先是開在 63,203 創新高、結果整天就在新高跟平盤之間晃、最後幾乎沒漲。但是隔壁韓國 Kospi 像看不到 Iran 一樣、整天 +4.3% 衝到 7,822、又破紀錄、Samsung +6.33%、SK Hynix 一根 +11.68%——理由是隔夜美國的晶片股全都瘋漲、Micron +15.49%、AMD +11.44%。同一天、油彈 4%、晶片漲 12%、新聞講同一個事件、市場給兩個答案。今天 China 4 月 CPI 出來 +1.2%、比預期的 0.9% 高、預期錯方向。再過 9 個小時、紐約參議院 Warsh 走 cloture；再過 4 天、Powell 把聯準會主席的位子交給人。',
      duration: 5800,
    },

    // ── Today's tickers + sectors ──
    {
      type: 'market-data',
      data: {
        tickers: [
          { symbol: 'Brent 油（亞洲盤）', price: 104.83, change: 3.49 },
          { symbol: 'Kospi（收）', price: 7822.22, change: 4.32 },
          { symbol: 'SK Hynix', price: 0, change: 11.68 },
          { symbol: 'Polymarket 伊朗', price: 0.065, change: 44 },
        ],
        volatility: 22,
        vix: 17.4,
        rsi: 64.2,
        beta: 1.05,
        priceHistory: [7398, 7405, 7388, 7372, 7368, 7355, 7361, 7356],
        volumeHistory: [150, 168, 182, 195, 188, 200, 210, 218],
        // sectors[].value = |%change| × 100 of headline asset for each theme.
        // Today is the "two opposite stories on the same day" picture:
        // chip rally engulfs the geopolitics, but oil also rips on rejection.
        sectors: [
          { label: 'SK Hynix +11.68%（韓股晶片帶頭、跟隔夜 Micron +15.49% 起跳）', value: 1168, color: '#22cc55' },
          { label: 'Samsung +6.33%（同一個晶片故事、Kospi 程式單一度被斷）', value: 633, color: '#22cc55' },
          { label: 'Brent 油 +4.3%（Trump 拒絕伊朗信、紐約晚上立刻噴 $4）', value: 430, color: '#cc4422' },
          { label: 'Kospi +4.32%（亞股收盤、第五個交易日連破紀錄）', value: 432, color: '#22cc55' },
        ],
        headline: '禮拜一 21:00 JST：伊朗信送 / Trump「TOTALLY UNACCEPTABLE」/ Brent +4.3% 收 $105 / Kospi +4.32% 創新高 / Nikkei 開盤新高收平盤 / 9 小時後紐約 Warsh cloture',
      },
    },

    // ── Chef alone, set up Monday-evening rhythm ──
    { type: 'enter', character: 'chef', toTile: 'stove' },
    { type: 'wait', duration: 500 },
    { type: 'move', character: 'chef', toTile: 'prep-area' },
    { type: 'wait', duration: 400 },
    { type: 'move', character: 'chef', toTile: 'stove' },
    { type: 'wait', duration: 400 },

    // Customer A enters first
    { type: 'enter', character: 'customer-a', toTile: 'entrance' },
    { type: 'move', character: 'chef', toTile: 'counter-center' },
    { type: 'dialogue', character: 'chef', text: 'いらっしゃい。我老婆中午從千葉回來了、進門第一句不是「我回來了」、是「你有沒有看那個 Trump 發文」——她平常根本不看新聞、今天連在計程車上都聽到了。看來那封信的事、連不看財經的人都知道了。' },

    { type: 'move', character: 'customer-a', toTile: 'random-stool' },
    { type: 'sit', character: 'customer-a' },

    { type: 'dialogue', character: 'customer-a', text: '師傅、被你老婆說中——今天的事、我來地鐵上聽到隔壁兩個歐巴桑在講「總統氣到罵髒話」。那封信禮拜天上午 9 點伊朗那邊先發、走巴基斯坦中間人送、Trump 那邊禮拜天傍晚收到、看完先寫一句「伊朗 47 年來都在跟美國玩遊戲」、兩個小時之後再追第二句——「我剛讀完、我不喜歡——TOTALLY UNACCEPTABLE！」全大寫加驚嘆號、按他的習慣、這是真的氣了。' },

    { type: 'move', character: 'chef', toTile: 'stove' },
    { type: 'wait', duration: 400 },

    { type: 'dialogue', character: 'chef', text: '寫了三天的信、人家收到看完不到兩個小時就回「不行」——這個讓我想到我妹去年寄了一張婚禮邀請卡給我師父、我師父看完當場跟我講「這個日子我不去」。一個花三天寫、一個花五分鐘退——速度差太多、收信的人通常會更氣。' },

    { type: 'dialogue', character: 'customer-a', text: '師傅、你這個觀察非常準。其實看內容就知道為什麼炸——伊朗那 14 點裡面、有一條是要美國「先把霍爾木茲海峽放開、再談我家的核能設施怎麼處理」。Trump 想要的順序是相反的——先核能、再海峽。順序顛倒、等於把對方最在意的籌碼先讓出去、所以美國這邊讀完、第一個反應就是「你是來談的還是來鬧的」。' },

    { type: 'dialogue', character: 'chef', text: '哦——所以重點不是內容、是順序？這個我懂。我每次跟魚販算月底、他要是說「你下個月先付給我、上個月那筆我們再說」、我就會擺臉色。順序錯一個字、整張單就吵起來。' },

    { type: 'dialogue', character: 'customer-a', text: '師傅、外交部明天起床如果聽到你這個比喻、會少打三個小時的草稿——「魚販月結順序」這個比「條件先後序排列」好懂十倍。' },

    { type: 'wait', duration: 400 },

    // ── Oil's $4 spike — what desks did at the Asia open ──
    { type: 'dialogue', character: 'chef', text: '那油呢？早上開店之前、巷口加油站的老周看到我、第一句就是「今天油又漲了、晚上要不要進貨多買兩桶醬油啊」——他這人神準、油漲他先知道。' },

    { type: 'dialogue', character: 'customer-a', text: '師傅、老周比 Bloomberg 還快。Trump 那篇文發完、紐約禮拜天傍晚的盤、Brent 立刻跳 $4.4、漲 4.3%、收在 $105.6；WTI 跳 $4.5、漲 4.7%、收 $99.94——差一點就重新站上 $100。今天早上 7 點亞洲這邊 CME 油期貨一開、價格直接接著禮拜天的最後一筆繼續、所以我們桌上 6 點半進辦公室的時候、價格已經在那邊等我們。沒有人需要做決定、市場已經幫你決定了。' },

    { type: 'wait', duration: 400 },

    // Customer B enters
    { type: 'enter', character: 'customer-b', toTile: 'entrance' },
    { type: 'move', character: 'customer-b', toTile: 'random-stool' },
    { type: 'sit', character: 'customer-b' },

    { type: 'move', character: 'chef', toTile: 'counter-center' },
    { type: 'dialogue', character: 'chef', text: 'いらっしゃい。今天兩位都是禮拜一晚上想找人講話的臉色。' },
    { type: 'move', character: 'chef', toTile: 'stove' },

    { type: 'dialogue', character: 'customer-b', text: '師傅、我今天 6 點半進辦公室、組長已經坐在那邊、桌上一杯黑咖啡、跟我講「妳坐下、不要開螢幕、先聽我講三分鐘」——他平常不這樣。那三分鐘他講的是「今天油的位置不是給我們交易的、是給我們解釋給客戶聽的」。意思是、價格已經跳了、客戶 7 點半開始打電話來、我們不是要去搶買賣、是要有一句話給客戶——為什麼跳。' },

    { type: 'dialogue', character: 'customer-a', text: '我們桌上一樣。我們組長的句子是——「今天不要在 $100 跟 $106 之間看圖、看的是禮拜一晚上 Trump 會不會發第二篇文」。意思是、油已經反映完拒絕、下一個動因不是供需、是 Truth Social 的下一則貼文。市場現在等的是「他會不會講『我要動手了』」、那油就再彈一次、$110 不遠。' },

    { type: 'dialogue', character: 'chef', text: '所以這個世界、現在是「等一個老人晚上發不發另一篇文」？聽起來不像金融、像我們街上小七的群組——等里長伯晚上會不會在群組罵那個亂停車的人。一篇文發出來、整條街隔天都不一樣。' },

    { type: 'dialogue', character: 'customer-b', text: '師傅、我先生今晚也是這個感覺。他在科技業、不看油、但他下班回來路上跟我說「今天捷運上每個人在講同一件事——這個世界是不是越來越像直播」。' },

    { type: 'wait', duration: 400 },

    // ── The divergence — chips ripping despite Iran ──
    { type: 'dialogue', character: 'chef', text: '對了、我老婆今天從千葉回來、計程車上司機跟她講「韓國股市今天瘋了」——她聽不懂、回家問我、我也不懂、想問你們——隔壁韓國今天怎麼了？跟伊朗有關嗎？' },

    { type: 'dialogue', character: 'customer-b', text: '師傅、這是今天最有意思的一幕。同一天、油因為伊朗事彈 4%、但是隔壁韓國的 Kospi 漲 4.3%、收在 7,822、又是新紀錄——而且不是漲一天、是連續第五個交易日破紀錄。中間 Samsung 一根 +6.33%、SK Hynix 一根 +11.68%——SK Hynix 那根漲到一半、他們的程式單系統怕單子太集中、自動暫停了一下。你想想看、一個股票一天漲超過 10%、交易系統按下緊急按鈕、這是電影才會有的場面。' },

    { type: 'dialogue', character: 'customer-a', text: '原因是隔夜美國的晶片股全都噴出去——Micron +15.49%、AMD +11.44%、Nvidia +1.75%——人家說 AI 那邊還在燒、記憶體那邊更缺、所以 Samsung、SK Hynix 這兩個全世界最大的記憶體廠、隔天亞洲一開盤、就被買到斷氣。中間沒有人在意伊朗。同一天、有人為了伊朗去搶油、有人為了 AI 去搶記憶體——兩條線完全不會交叉。' },

    { type: 'dialogue', character: 'chef', text: '兩條線完全不會交叉——這個我想想喔。我這條街上、賣魚的老周今天因為油漲、皺眉頭；隔壁開手機店的小李今天因為韓國新機要出、笑開花。同一條街、兩個人對「今天」的感覺完全相反。市場好像也是一樣——一條街上、一邊在燒油、一邊在賣手機、互相不影響。' },

    { type: 'dialogue', character: 'customer-b', text: '師傅、你這個「一條街兩種臉」的描述、其實就是我們每天在看的東西的本質。不是所有人都活在同一個故事裡。我們客戶裡面有一群人今天滿手油、笑的；另一群人今天滿手晶片、也是笑的；還有一群人兩邊都沒押到——氣到打電話來罵我們。' },

    { type: 'wait', duration: 400 },

    // ── Wright on Face the Nation — the strange "Project Freedom" detail ──
    { type: 'dialogue', character: 'chef', text: '對了、我昨天晚上真的有把電視打開看那個能源部長 Chris Wright——師傅夠認真。但是他講話我大概聽懂三成、有一句我聽得很奇怪——他說「Project Freedom 我們在伊朗的『要求』下、暫停了」。伊朗叫美國暫停、美國真的暫停？這聽起來不對啊。' },

    { type: 'dialogue', character: 'customer-a', text: '師傅、你聽得沒錯——那一句是昨晚最有趣的一句。Project Freedom 是美國海軍說要去「清理」霍爾木茲海峽水雷的行動、上禮拜美國高調宣布要做、結果週日早上 Wright 在電視上說「我們在伊朗的請求下停了」。意思是、美國願意停手、條件沒講出來——所以背後一定有秘密談判在走。一邊嘴巴上罵 TOTALLY UNACCEPTABLE、一邊行動上配合對方暫停、這個叫做「公開談判破裂、檯面下繼續談」。我們桌上的中東組昨晚就是看到這句、整晚加班把所有的 scenario 重新跑一次。' },

    { type: 'dialogue', character: 'customer-b', text: '我昨晚也是看到這一句、立刻 line 我們組長——「Wright 那句『at Iran\'s request』我們今天要怎麼解釋給客戶」。組長 line 回我兩個字——「複雜」。意思是、不要解釋、講「複雜」就好、客戶自己會懂。' },

    { type: 'dialogue', character: 'chef', text: '「複雜」這兩個字——我以前我師父煮失敗的湯、客人問為什麼今天的味道有點怪、他也是這樣回——「複雜」。客人聽完、就不問了。「複雜」是廚師最後一道防線。' },

    { type: 'wait', duration: 400 },

    // ── Polymarket — today the contract actually MOVED ──
    { type: 'move', character: 'chef', toTile: 'counter-center' },
    { type: 'dialogue', character: 'chef', text: '對了那條伊朗賭盤、4.5% 那條、卡了三個禮拜的——今天動了沒？昨晚我老婆從千葉打來說「你那條線是不是該動了」、我跟她說「卡了三個禮拜不會今天突然動」、結果現在我有點不安。' },

    {
      type: 'polymarket-odds',
      data: {
        asOf: '2026-05-11T01:13:30Z',
        highlightSlug: 'will-the-iranian-regime-fall-by-june-30',
        markets: [
          {
            slug: 'will-the-iranian-regime-fall-by-june-30',
            question: 'Will the Iranian regime fall by June 30?',
            yesProbability: 0.065,
            volume: 38648246,
            endDate: '2026-06-30T00:00:00Z',
            history: [
              { t: 1778382008, p: 0.045 }, { t: 1778385607, p: 0.045 }, { t: 1778389210, p: 0.045 },
              { t: 1778392810, p: 0.045 }, { t: 1778396408, p: 0.045 }, { t: 1778400008, p: 0.045 },
              { t: 1778403608, p: 0.045 }, { t: 1778407212, p: 0.045 }, { t: 1778410823, p: 0.045 },
              { t: 1778414409, p: 0.045 }, { t: 1778418008, p: 0.045 }, { t: 1778421608, p: 0.045 },
              { t: 1778425209, p: 0.045 }, { t: 1778428809, p: 0.045 }, { t: 1778432431, p: 0.045 },
              { t: 1778436028, p: 0.045 }, { t: 1778439610, p: 0.045 }, { t: 1778443212, p: 0.045 },
              { t: 1778446812, p: 0.045 }, { t: 1778450408, p: 0.065 }, { t: 1778454011, p: 0.065 },
              { t: 1778457611, p: 0.065 }, { t: 1778461205, p: 0.065 }, { t: 1778461925, p: 0.065 },
            ],
          },
        ],
      },
    },

    { type: 'dialogue', character: 'customer-b', text: '師傅、不安要成真——它今天動了。卡了三個禮拜的 4.5%、今天早上 7 點我們進辦公室的時候、就在我們進電梯的同時、那條線從 4.5% 跳到 6.5%。一根直接跳上去、中間沒有 5%、沒有 6%、就一根。意思是、有大戶在 7 點 Tokyo 開盤前、看完 Trump 那篇文、直接掃單把這條的 6.5 全買光、沒人擋。' },

    { type: 'dialogue', character: 'customer-a', text: '更明顯的是下注金額——這條合約過去 24 小時新增了 48.5 萬美金的下注、是這個禮拜六到禮拜天那 24 小時 (8.8 萬) 的 5.5 倍。三個禮拜沒人下單、Trump 一篇文、整個賭盤一個小時內被叫醒。' },

    { type: 'dialogue', character: 'chef', text: '4.5 跳 6.5——聽起來只跳 2 塊錢、但其實是「機率多了一半」？我數學沒很好、但 4 跟 6、感覺差很多。' },

    { type: 'dialogue', character: 'customer-b', text: '師傅你數學好——4.5% 加一半就是 6.75%、所以這次跳的就是「機率多了 44%」。換成日常就是——「原本 100 個劇本裡有 4.5 個會成真、現在改成 6.5 個」。聽起來還是很少、但相對速度上、是這合約三個禮拜以來第一個有大戶願意賭單邊的訊號。' },

    { type: 'dialogue', character: 'customer-a', text: '另一個小細節——這條線的「掛單厚度」、從 72 萬美金掉到 44 萬美金。意思是、市場上願意出來接單、報價的那群人、被買光之後沒有立刻回補、所以下一筆要再買、會更難買。書架被搬空了、補書的人還沒上班。' },

    { type: 'dialogue', character: 'chef', text: '書架被搬空了、補書的人還沒上班——這個我懂。我冬天魚進貨、一個禮拜沒到的鯖魚、市場上的攤商也搬光了、攤老闆看到我會搖手——「明天再來」。賭盤跟魚市場、原來邏輯一樣。' },

    { type: 'wait', duration: 400 },

    // ── China CPI — different angle, same theme ──
    { type: 'dialogue', character: 'chef', text: '對了、新聞跑馬燈早上有個東西、我看不太懂——「中國 4 月 CPI 1.2%、超預期」——這個跟我們有什麼關係嗎？我老婆從千葉回來抱怨「最近台灣米又漲了」、我想說、是不是同一件事。' },

    { type: 'dialogue', character: 'customer-b', text: '師傅、你老婆那句話比新聞跑馬燈還重要。中國的 CPI、就是中國一般人買東西物價漲多少——4 月漲 1.2%、市場本來預期只會漲 0.9%、結果多了 0.3 個百分點、聽起來不多、但是經濟學家最怕「超預期」。原因是——中國的物價這幾個月一直在「冷」、突然開始「溫」、原因就是油漲——油漲、運費漲、製造業成本漲、中國產品進到日本、台灣、便宜的東西就變不便宜了。妳老婆的米漲、跟中國 CPI 漲、跟伊朗的信、是同一條繩子。' },

    { type: 'dialogue', character: 'chef', text: '同一條繩子——伊朗、油、中國、米、我老婆。從中東一根繩子拉到我家廚房。我以前覺得新聞講的事跟我沒關係、聽完今晚、我覺得每件事都跟我家廚房有關係。' },

    { type: 'dialogue', character: 'customer-a', text: '師傅、這就是「全球化」這個詞的人話版本。一條繩子、一拉、全世界的廚房都會抖一下。' },

    { type: 'wait', duration: 400 },

    // ── Looking ahead — Senate Warsh cloture in 9h, Powell in 4 days ──
    { type: 'move', character: 'chef', toTile: 'stove' },
    { type: 'dialogue', character: 'chef', text: '那今晚紐約那邊、還有什麼大事是我們今晚要記得的？我老婆今晚十一點要洗碗、要不要叫她特別開電視？' },

    { type: 'dialogue', character: 'customer-a', text: '今晚紐約那邊主要兩件事——一個是美國股市晚上 10 點半開、會看油彈了之後股市怎麼接；另一個更重要的是、明天早上我們這邊 6 點半、紐約參議院投 Warsh 的 cloture——Powell 的接班人。Cloture 是「能不能進入正式表決」的程序票、不是最終票、但是基本上 cloture 過、最終票就是流程。明天早上 6 點半起床打開新聞、應該就會看到結果。' },

    { type: 'dialogue', character: 'customer-b', text: '我們 desk 明天 6 點 25 分全部站著看這個——比看自己家小孩段考成績還緊張。原因是——Powell 禮拜五就交位子、再 4 天。如果 Warsh 明天 cloture 沒過、禮拜五沒人接、聯準會主席這個位子在現在這種油彈、Iran 沒談成、China CPI 又超預期的時間點空著、市場會炸鍋。所以明天早上那一票、不只是政治新聞、是接下來一個禮拜全球市場的地基。' },

    { type: 'dialogue', character: 'chef', text: '原來明天早上 6 點半、是地基要不要灌起來的時間點。我每天 5 點半起來熬湯、6 點半剛好把高湯撈起來——明天我熬湯的時候、紐約那邊在投票。我沒在管的同一個時間、世界那邊在決定接下來四天的事。' },

    { type: 'dialogue', character: 'customer-a', text: '師傅、你這個「我熬湯、紐約投票」的同步畫面、其實就是我們做這行最常感覺到的——你不在、世界不會等你、世界繼續轉。差別只是、我們因為工作、要把鬧鐘設在 6 點 25 分。你可以選擇不設。' },

    { type: 'wait', duration: 400 },

    // ── Closing — Monday, send them home, set up tomorrow ──
    { type: 'move', character: 'chef', toTile: 'counter-center' },
    { type: 'dialogue', character: 'chef', text: '禮拜一晚上、明天禮拜二、再過 9 個小時你們就要起床看那一票、我今晚不留兩位太久。我老婆從千葉帶了一盒草餅回來、說是她媽塞給她的、加上我妹之前的柏餅、我冰箱現在是個和菓子倉庫——兩位帶幾塊回去、明天早上看新聞配草餅、剛好。' },

    { type: 'dialogue', character: 'customer-a', text: '師傅、我吃簡單一點、烏龍麵清湯加蔥、湯多。草餅給我兩塊——明天早上 6 點 20 分、我打開螢幕之前、咬一口、配茶。明天結果出來、我晚上再過來。' },

    { type: 'dialogue', character: 'customer-b', text: '一樣、烏龍清湯。草餅我帶四塊——明天早餐我先生跟小孩各一塊、我自己一塊、剩下一塊放辦公室、6 點 28 分塞嘴裡看投票直播。我先生今晚會幫我把鬧鐘設好——他知道我明天早上比平常更緊張。' },

    { type: 'dialogue', character: 'chef', text: '我師父當年講過——「禮拜一晚上的湯、要熱、客人今天累了一天、明天又要早起、湯不熱、人就垮」。今晚就照這個——湯熱、麵清、兩位吃完不會撐、回家睡得著。明天禮拜二、看完那一票、再回來。' },

    { type: 'sfx', sound: 'chimes' },

    { type: 'wait', duration: 500 },
    { type: 'move', character: 'chef', toTile: 'stove' },

    {
      type: 'narration',
      text: '禮拜一晚上 10 點半、東京週一夜晚收尾、巷口拉麵店把布簾收進去、上班族散場。今晚的食堂、一鍋熱湯、兩個明天 6 點 25 分要站著看新聞的客人、八塊和菓子被帶走、跟一封被總統用全大寫退回去的伊朗回信——油 +4%、Kospi +4.3%、SK Hynix +11.68%、賭盤上的 4.5% 在禮拜一早上 7 點 Tokyo 通勤的時候被一根線拉到 6.5%、過去 24 小時下了 48.5 萬美金、是上週末的 5.5 倍。中國 4 月 CPI +1.2%、超預期、油從中東一路漲到食堂老闆娘抱怨米貴。再過 9 個小時、紐約參議院投 Warsh cloture——Powell 的接班是不是來得及——再過 4 天、Powell 把位子交出去。師傅打算 5 點半像平常一樣起來熬湯、明天的高湯撈起來的時候、紐約那邊正在投票。世界不會等他、他也不打算等世界——明天的客人 11 點半開始進來、湯一定要備好。',
      duration: 5800,
    },
  ],
};
