import type { Episode } from '../../engine/types';

/**
 * Sources verified 2026-05-03:
 * - SPY 720.65, S&P 500 7,230.12 fresh ATH on May 1 (CNBC, TheStreet, Schwab)
 * - Nasdaq 25,114.44 ATH; Dow 49,499.27 -0.31% (TheStreet)
 * - Apple Q2 EPS/revenue beat, +3%, drove the rally (CNBC)
 * - WTI $101.94 -2.98%, Brent $108.17 -2.02% on Iran/US peace talks via Pakistan (CNBC)
 * - VIX close 16.89 (Yahoo Finance / Cboe)
 * - Powell term ends 2026-05-15; final press conference 2026-04-29; staying on as Fed governor (CNN, NPR, CNBC)
 * - Warsh nomination: Senate Banking Committee 13-11 partisan vote 2026-04-29; full Senate vote week of 2026-05-11 (CNBC, Yahoo, Al Jazeera, ABC)
 * - April NFP releases 2026-05-08 (BLS schedule). March NFP +178K, U-rate 4.3%.
 * - April ISM Manufacturing PMI 52.7
 * - Polymarket: "Iranian regime fall by June 30" yesProbability 0.065, volume $35.47M
 *   (public/polymarket/latest.json, collectedAt 2026-05-02T01:03:49Z)
 * - Iran-US negotiating draft peace agreement via Pakistan mediators (CNBC oil article)
 * - 2026-05-03 = 憲法記念日 (real Japanese public holiday); Golden Week mid-stretch
 */
export const EPISODE_24: Episode = {
  id: 'ep-24',
  date: '2026-05-03',
  title: '20260503 憲法記念日，全時高之後的週日',
  description: '禮拜天晚上、東京進入黃金週中段、今天是憲法記念日、街上很安靜。禮拜五美國 S&P 500 跟 Nasdaq 雙雙刷新歷史新高、Apple 第二季財報超預期帶動整個科技板塊、油價同一天因為伊朗跟美國透過巴基斯坦在談和平協議草案掉了 3%。Powell 還剩兩個禮拜任期、Warsh 等 5/11 那週的全院投票、四月就業數字下禮拜五才公布。今晚的食堂沒有事件、是回頭看一個週末的晚上。',
  actions: [
    { type: 'bgm', track: 'chill-lofi', command: 'play' },

    {
      type: 'narration',
      text: '禮拜天晚上 10 點、東京進入黃金週中段、今天是憲法記念日、街上很安靜、便利商店關東煮鍋蓋上凝著一層水氣。禮拜五美國股市收在歷史新高——S&P 500 收 7,230 點、Nasdaq 收 25,114 點、兩個指數同一天破紀錄、靠的是 Apple 公布第二季財報超預期、股價一天跳了 3%。同一個下午、油價反方向跌了快 3%、因為一份報導說伊朗跟美國正透過巴基斯坦在談一份和平協議草案。Powell 上禮拜三做完了任期最後一場記者會、距離正式卸任還剩兩個禮拜。今晚的食堂沒有事件、是回頭看一個週末的晚上。',
      duration: 5400,
    },

    // ── Real Friday close — record-high week ──
    {
      type: 'market-data',
      data: {
        tickers: [
          { symbol: 'S&P 500', price: 7230.12, change: 0.29 },
          { symbol: 'Nasdaq', price: 25114.44, change: 0.89 },
          { symbol: 'WTI 油價', price: 101.94, change: -2.98 },
          { symbol: 'VIX', price: 16.89, change: -3.4 },
        ],
        volatility: 12,
        vix: 16.89,
        rsi: 64.0,
        beta: 1.02,
        priceHistory: [7160, 7178, 7192, 7205, 7211, 7218, 7224, 7230],
        volumeHistory: [86, 92, 88, 84, 90, 95, 102, 108],
        sectors: [
          { label: 'Apple Q2 beat — 帶頭領漲', value: 1080, color: '#22cc55' },
          { label: '伊朗／美國談判 — 油跌 3%', value: 720, color: '#22aacc' },
          { label: 'Powell 還剩 2 週任期', value: 480, color: '#cc8844' },
          { label: 'Warsh 等 5/11 週全院投票', value: 380, color: '#888888' },
        ],
        headline: '5/1 收盤——S&P 500 與 Nasdaq 同破歷史新高、Apple 帶頭、油價因伊朗／美國和平談判掉 3%；Powell 任期倒數 14 天',
      },
    },

    // Chef Sunday late evening — counter wiped, soup pot still warm
    { type: 'enter', character: 'chef', toTile: 'stove' },
    { type: 'wait', duration: 600 },
    { type: 'move', character: 'chef', toTile: 'prep-area' },
    { type: 'wait', duration: 500 },
    { type: 'move', character: 'chef', toTile: 'stove' },
    { type: 'wait', duration: 400 },

    // Customer A enters first — analyst, came in early Sunday
    { type: 'enter', character: 'customer-a', toTile: 'entrance' },
    { type: 'move', character: 'chef', toTile: 'counter-center' },
    { type: 'dialogue', character: 'chef', text: 'いらっしゃい。憲法記念日今天放假吧、看你怎麼還是一身西裝。' },

    { type: 'move', character: 'customer-a', toTile: 'random-stool' },
    { type: 'sit', character: 'customer-a' },

    { type: 'dialogue', character: 'customer-a', text: '剛從信義區跟我以前公司的人吃了個下午茶——他現在做 ETF 銷售、最近忙到不行、因為禮拜五美股 S&P 500 跟 Nasdaq 同一天創下歷史新高、整個週末客戶電話都還在響。' },

    { type: 'move', character: 'chef', toTile: 'stove' },
    { type: 'wait', duration: 400 },

    { type: 'dialogue', character: 'chef', text: '歷史新高？我有看新聞、聽說是 Apple 推上去的？這跟我有什麼關係？' },

    { type: 'dialogue', character: 'customer-a', text: '對、Apple 禮拜四盤後公布第二季財報、賣的比預期多、下一季預估也比市場想的好、禮拜五一開盤就跳了 3%。Apple 是 S&P 500 裡權重最大的一支、它一漲、整個指數就被拉上去。S&P 500 收 7,230、Nasdaq 收 25,114、兩個都是史上最高。對你直接的關係不大、但間接是這樣——你這附近有人退休基金、有人 401K、那種帳戶禮拜五打開可能都看到「資產淨值」跳了一截。心情會好、週末會多花一點錢、餐廳會比較滿。' },

    { type: 'dialogue', character: 'chef', text: '哦——這個我有感。今晚黃金週中間、我這條街幾乎沒人、但隔壁那家燒肉店燈是亮的、剛剛看了一眼桌位幾乎滿。' },

    { type: 'dialogue', character: 'customer-a', text: '可能就是這個道理。記錄高的禮拜五、有錢人會出來吃。' },

    { type: 'wait', duration: 400 },

    // ── Apple as a window into "what really moves an index" ──
    { type: 'dialogue', character: 'chef', text: '我有一個問題——Apple 一家公司、為什麼可以推整個股市？我以為股市是一千家公司平均的東西。' },

    { type: 'dialogue', character: 'customer-a', text: '理論上是、但 S&P 500 是「按公司大小加權」、不是平均。Apple 大概佔整個指數的 7-8%、第二大的 Microsoft 也差不多、前七家科技公司加起來大概 30%。所以這七家裡面有一兩家漲、整個指數就被拉。如果是中小型公司漲、影響很小。' },

    { type: 'dialogue', character: 'chef', text: '聽起來不太公平——一家大公司的好消息、把整個美國經濟的「成績單」拉高。但其他 493 家公司可能根本沒這麼好。' },

    { type: 'dialogue', character: 'customer-a', text: '你抓到重點了。所以我們桌上看「市場在不在強」、不能只看 S&P 500、要看一個叫做「加權平均不一樣」的指數——同樣 500 家公司、每家的權重都是 0.2%、Apple 跟我家樓下小公司一樣大。如果那個指數沒漲、S&P 500 漲、就代表「只是大公司在拉」、不是廣度。禮拜五正好是這種——S&P 500 創新高、但廣度沒同步、Dow 還跌 0.3%、所以上面那個漲是有點偏的。' },

    { type: 'emote', character: 'customer-a', emote: 'thinking', duration: 700 },

    { type: 'dialogue', character: 'chef', text: '欸這個我聽得懂。我這條街有十家小吃店、我們都漲價 50 円、整條街「平均客單價」會漲；但如果只有那家高級懷石漲了 500 円、平均也會漲。差很多。' },

    { type: 'dialogue', character: 'customer-a', text: '一模一樣。指數的「平均」是會被少數大號拉走的、看你算的時候誰給多少權重。' },

    { type: 'wait', duration: 400 },

    // Customer B enters — sell-side desk
    { type: 'enter', character: 'customer-b', toTile: 'entrance' },
    { type: 'move', character: 'customer-b', toTile: 'random-stool' },
    { type: 'sit', character: 'customer-b' },

    { type: 'move', character: 'chef', toTile: 'counter-center' },
    { type: 'dialogue', character: 'chef', text: 'いらっしゃい。週末睡飽了沒？' },
    { type: 'move', character: 'chef', toTile: 'stove' },

    { type: 'dialogue', character: 'customer-b', text: '禮拜六睡到 9 點半、我先生說我已經很久沒睡這麼晚了。今天一整天就跟小孩在家、做了鬆餅、看了一部電影、下午跟我先生散步——上次一起這樣走超過半小時、我想想、好像是去年秋天。' },

    { type: 'dialogue', character: 'chef', text: '聽起來好。' },

    { type: 'dialogue', character: 'customer-b', text: '是好、但好到有點不習慣。我一整天手機不太響、沒有客戶找我、市場休市真的就是世界休市。下午三點居然主動拿起手機看了一下、發現沒事、然後莫名其妙覺得空。' },

    { type: 'dialogue', character: 'customer-a', text: '這個我懂——做久了一陣子沒手機震動、會懷疑自己是不是被開除了。' },

    { type: 'dialogue', character: 'customer-b', text: '哈、就是這個感覺。我爸退休前一年講過一句話、他說「我最怕的不是壓力、是哪天打開手機、發現沒人需要我」。我今天下午有 30 秒體會到了那個。' },

    { type: 'wait', duration: 400 },

    // ── Iran / Pakistan peace talks — oil dropped because of this ──
    { type: 'move', character: 'chef', toTile: 'counter-center' },
    { type: 'dialogue', character: 'chef', text: '對了我聽說禮拜五油價掉了 3%、跟伊朗有關？我新聞滑到一篇講「巴基斯坦在中間傳話」、看不太懂這是什麼意思。' },

    { type: 'dialogue', character: 'customer-b', text: '伊朗跟美國從一月開始基本上是「不直接講話」狀態——伊朗國內 1 月那場暴力鎮壓死了那麼多人、美國凍結了一些資產、雙方關係降到冰點。但又不能完全不談、因為伊朗背後有石油、波斯灣航運、外加幾個區域代理人衝突。所以這幾個月一直透過第三方在私下傳話——以前可能是阿曼、卡達、現在傳出來是巴基斯坦在牽線。禮拜五那篇報導講的是「雙方在談一份初步停火草案」、市場一聽就把油裡面那一塊「伊朗會不會出事所以加油費」的溢價拿掉一截、油就跌了 3%。' },

    { type: 'dialogue', character: 'chef', text: '哦——所以油價裡面有一塊是「萬一伊朗出事、油會被中斷」這個保險費、現在這個保險費被拿掉了。' },

    { type: 'dialogue', character: 'customer-a', text: '完全對。我們桌上叫這個「risk premium」、白話講就是「擔心費」。市場時時刻刻都在算「這件事萬一真的發生、要多收多少擔心費才合理」。今天這條新聞讓擔心費降一截、油就反映。如果明天又有壞消息——例如某個代理人突襲——擔心費又會被加回去、油又跳。' },

    { type: 'dialogue', character: 'chef', text: '聽起來油價有一半是真的供需、一半是大家在猜「會不會壞」。' },

    { type: 'dialogue', character: 'customer-b', text: '差不多。油是世界上最敏感的「擔心費」指標。' },

    { type: 'wait', duration: 400 },

    // ── Polymarket — single market, real data ──
    {
      type: 'polymarket-odds',
      data: {
        asOf: '2026-05-02T01:03:49Z',
        highlightSlug: 'will-the-iranian-regime-fall-by-june-30',
        markets: [
          {
            slug: 'will-the-iranian-regime-fall-by-june-30',
            question: 'Will the Iranian regime fall by June 30?',
            yesProbability: 0.065,
            volume: 35470853,
            endDate: '2026-06-30T00:00:00Z',
            history: [
              { t: 1777082407, p: 0.075 }, { t: 1777107615, p: 0.085 }, { t: 1777132806, p: 0.085 },
              { t: 1777158005, p: 0.085 }, { t: 1777183208, p: 0.085 }, { t: 1777208408, p: 0.085 },
              { t: 1777233607, p: 0.085 }, { t: 1777258810, p: 0.085 }, { t: 1777284007, p: 0.085 },
              { t: 1777309212, p: 0.075 }, { t: 1777334412, p: 0.075 }, { t: 1777359623, p: 0.075 },
              { t: 1777384807, p: 0.075 }, { t: 1777410009, p: 0.075 }, { t: 1777435206, p: 0.075 },
              { t: 1777460405, p: 0.075 }, { t: 1777485609, p: 0.075 }, { t: 1777510822, p: 0.085 },
              { t: 1777536005, p: 0.075 }, { t: 1777561212, p: 0.075 }, { t: 1777586408, p: 0.085 },
              { t: 1777611610, p: 0.085 }, { t: 1777636811, p: 0.075 }, { t: 1777662007, p: 0.075 },
              { t: 1777683725, p: 0.065 },
            ],
          },
        ],
      },
    },

    { type: 'dialogue', character: 'customer-a', text: '配合剛才講的——這條是賭盤上「6/30 前伊朗政府會不會倒」的合約、這兩個禮拜大概在 7.5% 到 8.5% 之間晃、禮拜五那則和平談判的新聞一出、直接掉到 6.5%。賭盤跟油價同時反映同一件事——「伊朗短期內崩盤的機率變小了」。兩邊獨立、結論一致、這就是訊號比較可靠的時候。' },

    { type: 'dialogue', character: 'chef', text: '我看那條曲線一路橫著、最後突然往下掉一截——就是禮拜五那則新聞？' },

    { type: 'dialogue', character: 'customer-b', text: '對、就是那一截。賭盤上的尾巴跟油價的尾巴對得上、是這個禮拜唯一比較有資訊量的訊號。其他時間都是橫的、就是「沒人改變看法」。' },

    { type: 'wait', duration: 400 },

    // ── Powell wind-down + Warsh confirmation timing ──
    { type: 'move', character: 'chef', toTile: 'counter-center' },
    { type: 'dialogue', character: 'chef', text: '對了、Powell 是不是也快下台了？我上週聽你們講過幾次。' },

    { type: 'dialogue', character: 'customer-a', text: '5/15 任期到、剩兩個禮拜。他禮拜三開了任期最後一場記者會、講了大概一個小時、最後一段是回顧八年——疫情、通膨、加息、降息、被總統公開罵。但他沒有完全走、他會留在央行的「理事會」裡——位子小一階、講話份量輕很多、但還在裡面。' },

    { type: 'dialogue', character: 'chef', text: '欸這個有意思——交班但不離開。這不會尷尬嗎？' },

    { type: 'dialogue', character: 'customer-b', text: '會。新任主席每次開會都要面對前任主席坐在桌邊、講話會被前任聽到、有時候投票還會跟前任不一樣。但 Powell 講了「一段時間之後再走」、可能是想看新主席先穩下來、可能是想保留某種影響力、也可能單純就是任期還沒到不能離開。市場會看他怎麼投票——如果他投票跟新主席唱反調、那會被解讀成「央行內部分裂」、市場會緊張。' },

    { type: 'dialogue', character: 'chef', text: '那新的那個 Warsh、現在是什麼狀態？' },

    { type: 'dialogue', character: 'customer-a', text: '禮拜三那個小組投票通過了——但是 13 票贊成、11 票反對、共和黨一票不漏、民主黨全部反對。這是央行主席提名史上第一次完全按黨派分線投票、過去都是兩黨混票。意思是 Warsh 上任之後、市場會懷疑他是不是「政治色彩太重」、講話可能不會被當成中立分析、會被打折。下個禮拜——5/11 那週——全院會投票、共和黨在參議院有 53 席、過半就過、所以幾乎確定通過。然後 5/15 上任。' },

    { type: 'dialogue', character: 'chef', text: '那他上任第一個動作大家在猜什麼？' },

    { type: 'dialogue', character: 'customer-b', text: '什麼都不會做。前一兩個禮拜按慣例什麼都不講、讓自己先「被市場習慣」。第一場演講可能 5 月底、第一次主持會議是 6/17 那次。市場會等到那一天才認真看他的態度。在這之前、就是消化期。' },

    { type: 'wait', duration: 400 },

    // ── This week ahead — NFP Friday ──
    { type: 'move', character: 'chef', toTile: 'stove' },
    { type: 'dialogue', character: 'chef', text: '那這禮拜你們會看什麼？我問問、好心理準備。' },

    { type: 'dialogue', character: 'customer-b', text: '禮拜五早上美國公布四月就業數字——叫 NFP、就是「上個月美國新增了多少工作」。三月那次 178,000、失業率 4.3%。如果這次出來明顯比較低、市場會猜「央行該降息」、股票跟債券都會跳；如果出來比預期高、就反過來、債券跌、利息走高的預期回來。對你比較直接是日圓——數字弱、美元就弱、日圓會升、你進口的食材下個月可能便宜一點。' },

    { type: 'dialogue', character: 'customer-a', text: '加一個——禮拜二有 ISM 服務業數字、就是「美國餐廳、旅館、銀行、診所」這些不是工廠的行業好不好。對你也算貼近、因為你也是服務業。如果服務業數字差、可能代表消費者開始勒緊褲帶。' },

    { type: 'dialogue', character: 'chef', text: '聽起來這個禮拜沒什麼會炸的、就是這兩個數字、然後等下下禮拜換主席。' },

    { type: 'dialogue', character: 'customer-b', text: '差不多。我這禮拜應該可以準時下班幾天、回家陪小孩。' },

    { type: 'wait', duration: 400 },

    // ── Closing — Sunday softness ──
    { type: 'move', character: 'chef', toTile: 'counter-center' },
    { type: 'dialogue', character: 'chef', text: '今晚要點什麼？週日嘛、我給兩位煮一碗有靈魂的麵。' },

    { type: 'dialogue', character: 'customer-a', text: '熱拉麵、加蛋、加溏心、湯多。今晚不熬夜、回家睡覺。' },

    { type: 'dialogue', character: 'customer-b', text: '一樣、加煎餃。明天禮拜一、ISM 在禮拜二早上、今晚不開電腦了。' },

    { type: 'dialogue', character: 'chef', text: '來、馬上煮。我老婆今天早上問我「為什麼禮拜天還要去開店」、我說「總得有人在那邊、客人想來才有地方來」。她翻了個白眼、晚上還是把我的便當盒裝滿了。' },

    { type: 'sfx', sound: 'chimes' },

    { type: 'wait', duration: 500 },
    { type: 'move', character: 'chef', toTile: 'stove' },

    {
      type: 'narration',
      text: '禮拜天晚上 11 點、東京街頭比平常更空、便利商店店員把今天最後一籠包子收起來。明天黃金週的緑の日、後天子供の日——又是兩天國定假日。明天台北時間晚上 9 點半、紐約交易所那塊大電子看板會再亮起來、Apple 帶頭的全時高週末過去之後、全世界要重新開始算下一個禮拜。禮拜五早上 8 點半（紐約時間）、美國勞工部會公布四月新增就業——比預期多或少、會決定下禮拜的氣氛。再過 12 天 Powell 會把那個位子交出去、再過 8 天 Warsh 會在參議院被投票確認。今晚的食堂沒有事件、沒有熬夜、沒有要等的數字——只有兩碗加蛋的拉麵、一份煎餃、一碗深色的湯——還有伊朗某個城市裡、那些 1 月之後就不太說話的人、隔著整個歐亞大陸、靠別人傳話讓油價掉了 3%。',
      duration: 5800,
    },
  ],
};
