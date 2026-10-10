import type { Episode } from '../../engine/types';

/**
 * Sources verified 2026-05-04:
 * - Monday 5/4 = みどりの日 (Greenery Day, Japan public holiday); Golden Week
 * - US futures Monday open: S&P 500 +0.20% (~7,258), Nasdaq 100 +0.87% (~27,836),
 *   Dow -0.38% (~49,646) (Yahoo Finance live blog 2026-05-04)
 * - Apple +3.4% Friday on Q2 beat (Schwab, CNBC); 5/1 records: S&P 500 7,230.12, Nasdaq 25,114.44
 * - Brent ~$108 (down 2.4% at open then steadied), WTI <$102 — cooled despite Project Freedom
 *   (Yahoo Finance, Bloomberg)
 * - Project Freedom: Trump announced 2026-05-03; US Navy escort op starting Monday 5/4 to free
 *   ~800 commercial vessels stranded in Strait of Hormuz since 2026-02-28. Includes guided-missile
 *   destroyers, 100+ aircraft, 15,000 service members. Fragile US-Iran ceasefire ~2 weeks old.
 *   (CNBC, Washington Times, Al Jazeera, Axios, Newsweek, Washington Post)
 * - GameStop CEO Ryan Cohen unsolicited $56B bid for eBay: $125/share, 50% cash + 50% stock,
 *   ~20% premium. GME mkt cap ~$12B; eBay ~$46B. GME holds ~5% eBay stake; secured $20B debt
 *   commitment from TD Bank. eBay +14% Sunday after-hours. (WSJ, Bloomberg, Reuters, Fortune,
 *   GameSpot, Investing.com)
 * - April NFP releases Friday 2026-05-08, consensus +60K (March was +178K) (BLS, Yahoo)
 * - April ISM Services releases Tuesday 2026-05-05
 * - AMD, ARM, LSCC earnings this week
 * - Powell term ends 2026-05-15 (11 days from today); Warsh full Senate vote week of 5/11
 * - Polymarket "Will the Iranian regime fall by June 30?": yesProbability 0.055 (was 0.065 Friday),
 *   volume $35.94M (public/polymarket/latest.json, collectedAt 2026-05-04T03:29:25Z, 168pts)
 */
export const EPISODE_25: Episode = {
  id: 'ep-25',
  date: '2026-05-04',
  title: '20260504 みどりの日，GameStop 想吃下 eBay',
  description: '禮拜一晚上、東京黃金週中段、今天是みどりの日、街上幾乎沒人。今天最大的兩件事：一、Trump 宣布的「Project Freedom」今天開始、美國海軍出動 15,000 人去把卡在霍爾木茲海峽兩個多月的八百艘商船「護送出來」、油價反而冷靜；二、GameStop——一家市值 120 億的小公司——出價 560 億美金要買下 eBay。週五 NFP 預估只剩 6 萬人、比三月的 17.8 萬掉了一大截。Powell 還剩 11 天任期。今晚的食堂沒有油價跳水、沒有股災、有一家小公司想吞下大它四倍的對手。',
  actions: [
    { type: 'bgm', track: 'chill-lofi', command: 'play' },

    {
      type: 'narration',
      text: '禮拜一晚上 10 點、東京進入黃金週中段、今天是みどりの日、明天又是子供の日、街上幾乎沒人、便利商店店員打了個哈欠。台北時間晚上 9 點半、紐約那邊開盤、S&P 500 期貨開高 0.2%、Nasdaq 期貨跳了快 1%、Dow 反而小跌——又是科技在拉、傳產在拖的那種一天。今天有兩件事在桌上轉：第一、Trump 禮拜天宣布的「Project Freedom」、美國海軍今天上午正式出動、要把卡在霍爾木茲海峽兩個多月的八百艘商船一艘一艘護送出來、Brent 反而沒跳；第二、GameStop——一家被當笑話看好幾年的小公司——昨天出價 560 億美金要把 eBay 整家吞下來、eBay 盤後一晚跳了 14%。今晚的食堂沒有油價跳水、有一條冷得像夢一樣的新聞。',
      duration: 5400,
    },

    // ── Real Monday open — futures + Friday close context ──
    {
      type: 'market-data',
      data: {
        tickers: [
          { symbol: 'S&P 500 期貨', price: 7258.00, change: 0.20 },
          { symbol: 'Nasdaq 100 期貨', price: 27835.75, change: 0.87 },
          { symbol: 'eBay 盤後', price: 119.50, change: 14.0 },
          { symbol: 'Brent 油價', price: 108.00, change: -0.5 },
        ],
        volatility: 14,
        vix: 17.4,
        rsi: 65.2,
        beta: 1.03,
        priceHistory: [7211, 7218, 7224, 7230, 7238, 7245, 7252, 7258],
        volumeHistory: [82, 88, 92, 88, 90, 86, 78, 92],
        // sectors[].value = |%change| × 100 (basis points) of the headline asset for each theme.
        // Upcoming-event rows (NFP forecast / earnings preview) dropped — belong in dialogue.
        sectors: [
          { label: 'eBay 盤後 +14%（GameStop 560 億美金併購提案）', value: 1400, color: '#22cc55' },
          { label: 'Nasdaq 100 期貨 +0.87%（科技再帶、Apple 週五 +3.4%）', value: 87, color: '#44aaee' },
          { label: 'Brent -0.5%（Project Freedom 開動、油反而冷靜）', value: 50, color: '#22aacc' },
        ],
        headline: 'GameStop 出價 560 億吞 eBay；Project Freedom 上午開始護航、Brent 沒跳；NFP 預估只剩 6 萬',
      },
    },

    // Chef alone — Monday holiday quiet
    { type: 'enter', character: 'chef', toTile: 'stove' },
    { type: 'wait', duration: 600 },
    { type: 'move', character: 'chef', toTile: 'prep-area' },
    { type: 'wait', duration: 500 },
    { type: 'move', character: 'chef', toTile: 'stove' },
    { type: 'wait', duration: 400 },

    // Customer A enters first — analyst
    { type: 'enter', character: 'customer-a', toTile: 'entrance' },
    { type: 'move', character: 'chef', toTile: 'counter-center' },
    { type: 'dialogue', character: 'chef', text: 'いらっしゃい。今天みどりの日、本來想說沒人會來、燈我都差點沒開。' },

    { type: 'move', character: 'customer-a', toTile: 'random-stool' },
    { type: 'sit', character: 'customer-a' },

    { type: 'dialogue', character: 'customer-a', text: '我在家躺到下午、滑到一條新聞、整個人坐起來——GameStop 出價 560 億美金要買 eBay。我看了三遍、確認不是哏圖、走出門想找個人聊。' },

    { type: 'move', character: 'chef', toTile: 'stove' },
    { type: 'wait', duration: 400 },

    { type: 'dialogue', character: 'chef', text: 'GameStop 是賣電玩遊戲的那家對吧？我妹小孩以前都跟我吵著要買 Switch 卡帶。eBay 是那個拍賣網站、跟雅虎拍賣有點像。一個賣遊戲的、要買拍賣網站？' },

    { type: 'dialogue', character: 'customer-a', text: '更怪的是大小——GameStop 整家公司值 120 億、eBay 值 460 億、是 GameStop 的快四倍。等於是你這條街上一家小拉麵店、要把對面那家有三層樓、開了二十年的連鎖燒肉店買下來。一般 M&A 是大的吞小的、這次倒過來。' },

    { type: 'dialogue', character: 'chef', text: '那他哪來這麼多錢？難道有人借他？' },

    { type: 'dialogue', character: 'customer-a', text: '一半付現、一半換股票。現金那邊據說 TD 銀行答應借他 200 億美金、剩下用 GameStop 自己的股票去抵。換股票的意思是——eBay 股東收到的不是錢、是「以後變成 GameStop 大股東」這個身份。所以他不是真的拿 560 億出來、他是拿「半張支票加一個未來的故事」去換。' },

    { type: 'wait', duration: 400 },

    { type: 'dialogue', character: 'chef', text: '那 eBay 的人會願意嗎？我如果是燒肉店老闆、隔壁拉麵店跟我說「我借錢付一半、另一半你拿我以後可能值錢的股票」、我心裡會打很多問號吧。' },

    { type: 'dialogue', character: 'customer-a', text: '一模一樣。eBay 的董事會今天禮拜一開會、八成會講「這個提議我們沒辦法評估」、然後客客氣氣地退回去。但即使被退、市場的反應還是先跳——eBay 盤後跳了 14%、因為「有人開了一個高價」、會引出別人也來喊價、可能是 Amazon、可能是 Shopify、可能是哪個沒人想到的。一旦這條線被點燃、eBay 被吃下來的機率就不是零了。' },

    { type: 'dialogue', character: 'chef', text: '有意思。所以股票跳的不是「會成交」、是「現在大家會開始想 eBay 值多少」。' },

    { type: 'dialogue', character: 'customer-a', text: '完全對。市場上有句話、「第一個出價的人很少是最後成交的人」、但出第一個價的那一刻、整張定價表會被翻過來重看。' },

    { type: 'wait', duration: 400 },

    // ── Why a meme stock can do this ──
    { type: 'dialogue', character: 'chef', text: '我有一個比較笨的問題——一家比對方小四倍的公司、為什麼會有人借他 200 億美金去做這件事？這聽起來像我借朋友 50 萬去買法拉利。' },

    { type: 'dialogue', character: 'customer-a', text: '這個問題不笨、是這條新聞最有意思的地方。GameStop 五年前是「meme stock」——就是一群網友在 Reddit 上集體買、把它從 4 美金推到 480 美金、爆掉一堆做空的對沖基金那次。那波之後、GameStop 趁股價高、發了一堆新股、手上現金一度有 40 多億美金、現在大概還有 30 多億現金。執行長 Ryan Cohen 是那波之後上來的、他本來是賣寵物用品起家的。' },

    { type: 'dialogue', character: 'chef', text: '哦、所以他口袋是真的有錢、只是公司本業沒什麼起色？' },

    { type: 'dialogue', character: 'customer-a', text: '對。本業——實體電玩店——一年比一年慘、現在大家都用 PS Store、Steam 下載、誰還去店裡買光碟。他這幾年就在做兩件事：一、現金存著；二、去買其他公司股票當投資。三月開始他默默買了 eBay 5% 的股、上禮拜才被發現、這禮拜直接攤牌出全價。所以這不是衝動、是準備了快兩個月。' },

    { type: 'wait', duration: 400 },

    // Customer B enters — sell-side
    { type: 'enter', character: 'customer-b', toTile: 'entrance' },
    { type: 'move', character: 'customer-b', toTile: 'random-stool' },
    { type: 'sit', character: 'customer-b' },

    { type: 'move', character: 'chef', toTile: 'counter-center' },
    { type: 'dialogue', character: 'chef', text: 'いらっしゃい。みどりの日妳也跑出來、家裡小孩呢？' },
    { type: 'move', character: 'chef', toTile: 'stove' },

    { type: 'dialogue', character: 'customer-b', text: '我先生帶他們去澀谷那邊看人潮、我自己出來透氣半小時。今天台股休市、日股休市、但美股有開、所以我桌上整個下午就在看這條 GameStop。' },

    { type: 'dialogue', character: 'customer-a', text: '師傅剛剛問我那家為什麼能出這麼大的價、我講到 meme stock 的故事。' },

    { type: 'dialogue', character: 'customer-b', text: '我桌上同事禮拜天下午接到三通電話、全部都是客戶問「GameStop 是不是在開玩笑」。我們的看法是——這個案子本身大概過不了、因為 eBay 規模太大、董事會幾乎一定否決、加上美國反壟斷現在管的很嚴。但「過不了」不代表沒事——它已經做到一件事——把所有「網路拍賣／二手電商」這個整塊重新標價了。' },

    { type: 'dialogue', character: 'chef', text: '什麼叫「重新標價」？我聽不懂。' },

    { type: 'dialogue', character: 'customer-b', text: '想像你這條街十年沒漲價、大家都覺得拉麵就是 800 円。突然有人衝進來說「我願意花 1,200 円買這碗」、就算他最後沒買成、隔壁所有店都會開始想「原來我們的麵可以賣 1,200」、一個禮拜後菜單全改了。GameStop 出 125 美金一股 eBay、就是衝進來喊 1,200 円的那個人。' },

    { type: 'dialogue', character: 'chef', text: '哦——所以即使他最後沒買到、整條街的標價會變。' },

    { type: 'dialogue', character: 'customer-a', text: '一模一樣。Etsy、MercadoLibre、Coupang 這些電商的股票、今天都會被重看。日本這邊樂天禮拜三開盤、應該也會跟著動。' },

    { type: 'wait', duration: 400 },

    // ── Project Freedom — surprising oil reaction ──
    { type: 'move', character: 'chef', toTile: 'counter-center' },
    { type: 'dialogue', character: 'chef', text: '對了、我老婆早上看新聞看到美國軍艦今天上午出動、說什麼「Project Freedom」、我看標題以為油價要爆了、結果你們桌上反應好像不大？' },

    { type: 'dialogue', character: 'customer-b', text: '這個我們桌上禮拜天下午就在討論。Trump 禮拜天傍晚宣布、今天上午正式開始——美國海軍派了驅逐艦、一百多架飛機、加上一萬五千個人、要去把卡在霍爾木茲海峽兩個多月的八百多艘商船、一艘一艘護送出來。聽起來很大、但其實是「把已經卡住的東西搬出來」、不是去打新的仗。' },

    { type: 'dialogue', character: 'chef', text: '哦——所以是「把垃圾車從巷子裡開出來」、不是「再來一場火災」。' },

    { type: 'dialogue', character: 'customer-a', text: '你這個比喻很準。市場本來怕的是「美國去碰、伊朗反應、戰火再開」、但 Trump 的講法是「我們只護中立國的船、不碰伊朗的船」、伊朗到目前沒有反應、停火還撐著。所以 Brent 開盤跳了一下、後來反而冷靜下來、現在 108 一桶、跌了 0.5%、差不多就是沒事的水平。' },

    { type: 'dialogue', character: 'chef', text: '那要是中間出事呢？' },

    { type: 'dialogue', character: 'customer-b', text: '那我們桌上會很忙。但今天看下來、伊朗那邊很安靜、感覺雙方都不想把禮拜天前禮拜五已經談的那份草案燒掉。下個目標是禮拜五前護完第一批五十艘船、如果順利、油可能還會再跌一點——之前累積太多「萬一」的擔心費。' },

    { type: 'wait', duration: 400 },

    // ── Polymarket — light touch, single market ──
    {
      type: 'polymarket-odds',
      data: {
        asOf: '2026-05-04T03:29:25Z',
        highlightSlug: 'will-the-iranian-regime-fall-by-june-30',
        markets: [
          {
            slug: 'will-the-iranian-regime-fall-by-june-30',
            question: 'Will the Iranian regime fall by June 30?',
            yesProbability: 0.055,
            volume: 35942252,
            endDate: '2026-06-30T00:00:00Z',
            history: [
              { t: 1777690810, p: 0.065 }, { t: 1777698009, p: 0.065 }, { t: 1777705223, p: 0.065 },
              { t: 1777712413, p: 0.065 }, { t: 1777719606, p: 0.065 }, { t: 1777726809, p: 0.065 },
              { t: 1777734011, p: 0.065 }, { t: 1777741210, p: 0.065 }, { t: 1777748410, p: 0.065 },
              { t: 1777755610, p: 0.065 }, { t: 1777762808, p: 0.065 }, { t: 1777770006, p: 0.065 },
              { t: 1777777204, p: 0.065 }, { t: 1777784406, p: 0.065 }, { t: 1777791608, p: 0.065 },
              { t: 1777798807, p: 0.065 }, { t: 1777806021, p: 0.065 }, { t: 1777813207, p: 0.065 },
              { t: 1777820409, p: 0.055 }, { t: 1777827611, p: 0.055 }, { t: 1777834806, p: 0.055 },
              { t: 1777842006, p: 0.055 }, { t: 1777849204, p: 0.055 }, { t: 1777856404, p: 0.055 },
              { t: 1777863621, p: 0.055 },
            ],
          },
        ],
      },
    },

    { type: 'dialogue', character: 'customer-a', text: '配合你剛剛講的——這條是賭盤上「6/30 前伊朗政府會不會倒」的合約、上禮拜五掉到 6.5%、Project Freedom 一宣布、又往下掉到 5.5%。賭盤跟油價同方向——「短期不會崩」這個結論、兩邊各自獨立看出來、是這禮拜目前最一致的訊號。' },

    { type: 'wait', duration: 400 },

    // ── Week ahead — NFP softening forecast ──
    { type: 'move', character: 'chef', toTile: 'stove' },
    { type: 'dialogue', character: 'chef', text: '那這禮拜你們桌上會看什麼？我問問、好心理準備。' },

    { type: 'dialogue', character: 'customer-b', text: '禮拜五早上美國公布四月就業人數、市場現在預估只剩 6 萬個新工作、比三月的 17.8 萬掉超過一半。如果真的這麼弱、市場會立刻往「央行該開始降息」這條路上走、債券跳、美元弱、日圓會升一截、你的進口食材成本下個月會比較輕鬆。' },

    { type: 'dialogue', character: 'chef', text: '6 萬聽起來是少了很多——這是不是代表美國經濟開始軟？' },

    { type: 'dialogue', character: 'customer-a', text: '不一定。一個月的數字常常是雜訊、加上四月美國有復活節、放假天數會影響統計。但如果這次出來真的是 6 萬上下、加上三月已經比之前慢、就會被看成「軟化的第二個訊號」、不是雜訊了。央行下個月決議會壓力很大。' },

    { type: 'dialogue', character: 'customer-b', text: '加一個——明天禮拜二早上 ISM 服務業數字、美國餐廳、銀行、診所、運輸這些業好不好。如果服務業也開始走軟、那就更明顯。然後本週 AMD、ARM 兩家晶片公司會公布財報、看 AI 那條線還在不在燒。' },

    { type: 'dialogue', character: 'chef', text: '聽起來是平靜的一週、但平靜下面有兩三個會跳的點。' },

    { type: 'dialogue', character: 'customer-a', text: '對。然後 11 天後 Powell 就交班了、再過 8 天 Warsh 在參議院投票、是緩慢倒數的一週。' },

    { type: 'wait', duration: 400 },

    // ── Closing — Greenery Day softness ──
    { type: 'move', character: 'chef', toTile: 'counter-center' },
    { type: 'dialogue', character: 'chef', text: '今晚要點什麼？みどりの日嘛、我給兩位煮一碗清淡一點的、不用熬夜。' },

    { type: 'dialogue', character: 'customer-a', text: '熱湯麵、加蛋、湯多、青菜多。今晚不熬、明早起來看 ISM。' },

    { type: 'dialogue', character: 'customer-b', text: '一樣、加煎餃。我先生大概十一點半回來、我吃完就走。' },

    { type: 'dialogue', character: 'chef', text: '來、馬上煮。我老婆昨天晚上還說「你這禮拜兩個假日都還要去開店、有事嗎」、我說「みどりの日來的客人、跟平常的客人不一樣、他們是真的想坐」。她哼了一聲、結果今天早上幫我多裝了一份燙青菜當便當。' },

    { type: 'sfx', sound: 'chimes' },

    { type: 'wait', duration: 500 },
    { type: 'move', character: 'chef', toTile: 'stove' },

    {
      type: 'narration',
      text: '禮拜一晚上 11 點、東京的みどりの日進入尾聲、便利商店店員把今天最後一籠包子收進蒸籠、蒸氣慢慢散了。明天子供の日、又是一天國定假日、可以再多睡半小時。台北時間明天晚上 9 點半、紐約那塊大電子看板會繼續亮著——美國海軍會開始護送霍爾木茲海峽裡的第一批商船、ISM 服務業數字會在台北時間晚上 10 點公布、eBay 董事會應該會給 GameStop 一封禮貌的回信、AMD 禮拜二盤後公布財報、AI 那條線會被重新點一次名。再過 11 天 Powell 會把那個位子交出去、再過 7 天 Warsh 在參議院被表決確認。今晚的食堂沒有油價跳水、沒有股災、只有兩碗加蛋的熱湯麵、一份煎餃、一段「一家小公司想吞下大它四倍的對手」的奇怪故事——還有八百艘卡在波斯灣裡兩個多月的商船、明天會有一艘真的開始往外走。',
      duration: 5800,
    },
  ],
};
