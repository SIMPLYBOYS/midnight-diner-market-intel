import type { Episode } from '../../engine/types';

export const EPISODE_23: Episode = {
  id: 'ep-23',
  date: '2026-05-01',
  title: '20260501 五月第一天，數人頭',
  description: '禮拜五晚上、五月第一天、東京進入黃金週、車站擠滿了帶行李箱的人。一小時前美國公布了四月新增就業——比預期少。新任央行老闆 Warsh 第一天上班、沒有講話。今天早上 9 點、那個賭盤上「四月底前伊朗會不會倒」的合約安靜地歸零、沒人發訊息。今天也是食堂的師傅照客人建議調整菜單的第一天——湯麵不動、特餐加 50 円。一個禮拜的最後一晚、五月剛開始、世界要重新數一次自己有多少人在工作。',
  actions: [
    { type: 'bgm', track: 'chill-lofi', command: 'play' },

    {
      type: 'narration',
      text: '禮拜五晚上 10 點、東京進入黃金週、車站今天傍晚擠滿了帶行李箱要去鄉下、要去韓國、要去沖繩的人。一小時前、晚上 9 點半、美國公布了四月新增就業的數字——138,000 個新工作、比預期少了快四成。今天是新任央行老闆 Warsh 上任第一天、他沒有講話、就讓這個數字自己說話。今天早上 9 點、賭盤上那個「四月底前伊朗政府會不會倒」的合約、合約到期、自動歸零、沒有人在 Reddit 上發文、沒有人留言。一個禮拜的最後一晚、五月剛開始、世界要重新數一次自己有多少人在工作。',
      duration: 5400,
    },

    // ── First Friday of the month — labor numbers headline ──
    {
      type: 'market-data',
      data: {
        tickers: [
          { symbol: '4 月新增就業', price: 138, change: -21.1 },
          { symbol: '失業率', price: 4.3, change: 2.4 },
          { symbol: '時薪年增', price: 3.6, change: -0.2 },
          { symbol: 'SPY 盤後', price: 538.20, change: 0.1 },
        ],
        volatility: 18,
        vix: 21.4,
        rsi: 55.0,
        beta: 1.04,
        priceHistory: [535, 536, 537, 537, 538, 538, 538, 538],
        volumeHistory: [78, 82, 88, 96, 104, 92, 86, 80],
        sectors: [
          { label: '新增就業 138K（預期 175K）', value: 1080, color: '#cc8844' },
          { label: '失業率 4.3%（上升 0.1）', value: 720, color: '#ee4444' },
          { label: '時薪年增 3.6%', value: 480, color: '#22cc55' },
          { label: 'Warsh 第一天 — 沒講話', value: 380, color: '#888888' },
        ],
        headline: '4 月美國新增就業 13.8 萬、低於預期 17.5 萬 — 失業率升至 4.3%、新任央行主席首日無發言',
      },
    },

    // Chef Fri evening — first day on new menu pricing
    { type: 'enter', character: 'chef', toTile: 'stove' },
    { type: 'wait', duration: 600 },
    { type: 'move', character: 'chef', toTile: 'prep-area' },
    { type: 'wait', duration: 500 },
    { type: 'move', character: 'chef', toTile: 'stove' },
    { type: 'wait', duration: 400 },

    // Customer B enters first — straight from desk after NFP
    { type: 'enter', character: 'customer-b', toTile: 'entrance' },
    { type: 'move', character: 'chef', toTile: 'counter-center' },
    { type: 'dialogue', character: 'chef', text: 'いらっしゃい。你今天比平常早、desk 那邊放你了？' },

    { type: 'move', character: 'customer-b', toTile: 'random-stool' },
    { type: 'sit', character: 'customer-b' },

    { type: 'dialogue', character: 'customer-b', text: '九點半美國公布四月就業數字、出來之後客戶反應比想像中淡——大家都進入週末模式、加上下禮拜也沒什麼大事、我們團隊收完最後幾通電話就把燈關了。' },

    { type: 'move', character: 'chef', toTile: 'stove' },
    { type: 'wait', duration: 400 },

    { type: 'dialogue', character: 'chef', text: '就業數字？我聽你們上禮拜也提過。是「美國這個月有多少人新找到工作」那種嗎？' },

    { type: 'dialogue', character: 'customer-b', text: '對、就是那個。每個月第一個禮拜五早上、美國勞工部公布上個月「全國新增了幾個工作」——這次是 4 月、新增 138,000 個。聽起來很多、但市場原本預期是 17.5 萬個、所以等於「比想像中少 4 萬個工作」。' },

    { type: 'dialogue', character: 'chef', text: '少 4 萬個工作。聽起來不少、但這對我這條街上的人有什麼差？' },

    { type: 'dialogue', character: 'customer-b', text: '差別是這樣——這個數字決定了三件事。第一、央行下次比較可能降息、因為經濟有點冷。第二、美國公司的人事部會稍微緊一點、不會大舉徵人、可能也會慢慢縮編。第三——這個對你比較直接——美元會弱一點、日圓會升、你進口的食材下個月可能會便宜一點點。' },

    { type: 'emote', character: 'customer-b', emote: 'thinking', duration: 700 },

    { type: 'dialogue', character: 'chef', text: '為什麼是「13.8 萬」、不是 13 萬整、不是 14 萬整？看起來很精準。' },

    { type: 'dialogue', character: 'customer-b', text: '哈、這個問題很好。其實這個數字一個月後會修一次、兩個月後再修一次、有時候差個 3、4 萬個。所以那個「精準」是假的。我們桌上常開玩笑說「聽到第一個數字當參考、聽到第三個數字才當真」。但市場第一秒就要反應、所以還是會跳。' },

    { type: 'dialogue', character: 'chef', text: '聽起來像我每個月看自己的店——我頭兩天結帳、覺得這個月不錯、結果月底盤完庫存才發現雞蛋打破了 30 顆、湯桶燒壞一個、淨利沒想像中多。' },

    { type: 'dialogue', character: 'customer-b', text: '差不多就是這個感覺。經濟數字是大型版的「結算誤差」。' },

    { type: 'wait', duration: 400 },

    // Customer A enters — looks slightly more rested
    { type: 'enter', character: 'customer-a', toTile: 'entrance' },
    { type: 'move', character: 'customer-a', toTile: 'random-stool' },
    { type: 'sit', character: 'customer-a' },

    { type: 'move', character: 'chef', toTile: 'counter-center' },
    { type: 'dialogue', character: 'chef', text: 'いらっしゃい。今天眼睛看起來好一點了。' },
    { type: 'move', character: 'chef', toTile: 'stove' },

    { type: 'dialogue', character: 'customer-a', text: '昨晚補了八小時。今天 desk 也沒事——Warsh 上任第一天、什麼都沒講、就一份新聞稿說「謝謝大家、繼續為人民服務」。沒有記者會、沒有訪談、沒有訊號。我們桌上就把今天當成「沒有央行的一天」、第一次。' },

    { type: 'dialogue', character: 'chef', text: '欸、新老闆第一天就這樣安靜不太正常吧？' },

    { type: 'dialogue', character: 'customer-a', text: '其實很合理。他的前任剛卸任、他不想第一天就搶版面、會被解讀成「跟前任唱反調」。所以一般做法就是——前兩個禮拜什麼都不講、讓大家習慣他坐在那個位子。第三個禮拜開始才會有第一場演講、那場才是市場真正在等的。' },

    { type: 'dialogue', character: 'chef', text: '哦——這部分我懂。我接班的時候、頭兩個禮拜我也什麼都不改。客人需要時間認識新師傅。' },

    { type: 'dialogue', character: 'customer-b', text: '哈、就是那個感覺。連全世界最大那個位子也是一樣。' },

    { type: 'wait', duration: 400 },

    // ── JBLU update — quick ──
    { type: 'move', character: 'chef', toTile: 'counter-center' },
    { type: 'dialogue', character: 'chef', text: '對了、你那位 JetBlue 的同學、週末會過來嗎？' },

    { type: 'dialogue', character: 'customer-a', text: '明天晚上來、他太太會帶兩個小孩一起、四個人。我跟他說過你那句「湯免費」、他在電話裡笑了一下——他說已經很久沒被陌生人請吃飯了、上一次是大學畢業那年。' },

    { type: 'dialogue', character: 'chef', text: '我明天先把湯熬深一點、煎餃也多包一些。小孩幾歲？' },

    { type: 'dialogue', character: 'customer-a', text: '一個八歲、一個五歲。八歲那個今天從學校回家問他爸爸「公司倒了是什麼意思」——他在學校聽到同學講、那個同學的爸爸也在 JetBlue。' },

    { type: 'dialogue', character: 'chef', text: '欸——這個我不知道怎麼回。' },

    { type: 'dialogue', character: 'customer-b', text: '其實小孩比大人懂得快。我小孩上禮拜也問我「為什麼大家都在講錢」、我跟她說「錢就是大家用來換東西的紙、有時候紙不夠、大家就會緊張」、她聽完點點頭就去玩了。' },

    { type: 'wait', duration: 400 },

    // ── Iranian contract — single line, then move on ──
    { type: 'move', character: 'chef', toTile: 'stove' },
    { type: 'dialogue', character: 'chef', text: '那昨晚你說的那個賭盤、今天早上 9 點到期、結果怎樣？' },

    { type: 'dialogue', character: 'customer-a', text: '到了、歸零、消失。我前一晚還真的設了鬧鐘想看那一秒、結果鬧鐘響我手伸出去按掉就再睡了——它沒有戲劇性。一個本來就會發生的事情、按時發生、沒有新聞、沒有討論、Reddit 上連一個帖都沒有。市場就是這樣——大部分時候、最終結局是一場最不有趣的合理結論。' },

    { type: 'dialogue', character: 'chef', text: '哈、像我每天等湯滾——它就是會滾、滾了我關火、沒人為這件事拍手。' },

    { type: 'dialogue', character: 'customer-b', text: '對。金融圈大概 90% 的事情都是這個調調、剩下 10% 才是新聞會報的。但新聞只報那 10%、所以一般人會以為這個行業每天都很刺激。其實不是。' },

    { type: 'wait', duration: 400 },

    // ── Chef's first day with new pricing ──
    { type: 'move', character: 'chef', toTile: 'counter-center' },
    { type: 'dialogue', character: 'chef', text: '對了、今天我照你昨天說的、改了菜單。湯麵跟拉麵一円不動、把幾道特餐——雞排飯、漢堡排定食、炸豬排丼——都加了 50 円。今天觀察了一整天。' },

    { type: 'dialogue', character: 'customer-b', text: '結果？' },

    { type: 'dialogue', character: 'customer-a', text: '我也好奇。' },

    { type: 'dialogue', character: 'chef', text: '中午一波午餐、來了 18 桌、點特餐的有 7 桌、跟平常差不多——沒人皺眉。傍晚一波、來了 22 桌、點特餐的 9 桌、其中一個常客抬頭問了一句「欸特餐多 50 円喔？」、我說「這禮拜換了個炸豬肉的供應商、品質有提升一點」、他「哦」一聲、繼續吃。今晚到現在還沒掉桌、客人沒因為這 50 円少。' },

    { type: 'dialogue', character: 'customer-b', text: '今天保守估計、你多賺多少？' },

    { type: 'dialogue', character: 'chef', text: '我剛才在算——50 円 × 大概 18 份特餐 = 900 円。一個月如果每天差不多、就是兩萬七千円。剛好補回我四月少賺的那 12 萬日圓的兩成。' },

    { type: 'dialogue', character: 'customer-a', text: '不是兩成、是四分之一——你的 12 萬是月薪、兩萬七是淨增加、是 22.5%。但這不是重點。重點是你做了一個小調整、沒有人離開、生意沒受影響、你賺多了。這就是一個成功的試點。' },

    { type: 'dialogue', character: 'chef', text: '那我下個月可不可以再把另外幾道也加 50 円？' },

    { type: 'dialogue', character: 'customer-b', text: '不要。先讓這次跑兩個月、看會不會有客人慢慢流失——有些人不會當下講、但會默默不來。你把這套變成「每個月加一點」、客人會發現、然後跑掉。' },

    { type: 'dialogue', character: 'chef', text: '哦——這就是「加價要有節制」？' },

    { type: 'dialogue', character: 'customer-a', text: '對。零售圈說的「青蛙原則」——把鍋裡的青蛙慢慢加溫、客人不會跳出來。但你不能加得太快、太快會被察覺、信任會崩。一年加一次、是合理的；一個月加一次、就是貪。' },

    { type: 'dialogue', character: 'chef', text: '青蛙原則欸——但我覺得我這個鍋裡的青蛙、是我自己。' },

    { type: 'dialogue', character: 'customer-b', text: '哈——某種程度上是。每個小老闆、都是自己鍋裡那隻青蛙。' },

    { type: 'wait', duration: 400 },

    // ── May Day quick aside ──
    { type: 'move', character: 'chef', toTile: 'stove' },
    { type: 'dialogue', character: 'chef', text: '對了、今天五月一號、我看新聞講歐洲幾個城市有人在街上遊行——「五一勞動節」這種、跟金融有關係嗎？' },

    { type: 'dialogue', character: 'customer-a', text: '間接有。今年全球的科技公司裁員、加上 JetBlue 這種大新聞、勞工那邊的情緒比往年高。法國、義大利、西班牙今天上街的人、比去年多了大概兩三成。市場不會直接反應遊行、但會反應「政府之後可能會多徵點稅來貼補勞工」這種預期。所以法國股市今天小跌 0.4%。' },

    { type: 'dialogue', character: 'chef', text: '哦——所以遊行的人多了、最後是有錢人多繳一點稅。' },

    { type: 'dialogue', character: 'customer-b', text: '簡化版是這樣。但中間轉好幾道彎、效果通常拖一年才看得到。今天市場只是先反應一個方向。' },

    { type: 'wait', duration: 400 },

    // ── Closing ──
    { type: 'move', character: 'chef', toTile: 'counter-center' },
    { type: 'dialogue', character: 'chef', text: '今晚要點什麼？黃金週的第一天、我給你們煮兩碗有靈魂的麵。' },

    { type: 'dialogue', character: 'customer-b', text: '熱拉麵、加蛋、加溏心、湯多。今晚不熬夜、回家陪小孩——下禮拜應該也沒什麼大事。' },

    { type: 'dialogue', character: 'customer-a', text: '一樣、加煎餃。明天我同學那頓你準備、我已經在期待了。' },

    { type: 'dialogue', character: 'chef', text: '來、馬上煮。Warsh 第一天什麼都沒講、我也想學他、今天少講話多煮麵。' },

    { type: 'sfx', sound: 'chimes' },

    { type: 'wait', duration: 500 },
    { type: 'move', character: 'chef', toTile: 'stove' },

    {
      type: 'narration',
      text: '禮拜五晚上 11 點、東京的街頭比平常空了一截、便利商店的店員打了個哈欠。明天早上、巴黎那 30 萬個遊行的人會在咖啡館討論他們昨天舉的牌子；明天中午、Powell 會在自家後院烤香腸、第一個 Fed 主席沒有保鑣陪著的週末；明天傍晚、那位三十八歲、兩個小孩、JetBlue 紐約財務副理會帶著太太跟兩個小孩走進這家食堂吃他這個月第一頓不用算成本的飯；下個月美國勞工部會把今天那 13.8 萬重新修一次、可能變成 16 萬、可能變成 11 萬、沒人知道。今晚、五月才開始一天、世界都在重新數人頭——數新增就業、數失業、數還在工作的、數已經失業的、數那位 Reddit 老先生戶頭裡的最後 500 美金、數食堂今天加了 50 円的 18 份特餐。每一個數字背後、都是一個人。先把拉麵吃完。',
      duration: 5800,
    },
  ],
};
