import type { Episode } from '../../engine/types';

export const EPISODE_24: Episode = {
  id: 'ep-24',
  date: '2026-05-03',
  title: '20260503 憲法記念日，那家四口的隔天',
  description: '禮拜天晚上、東京進入黃金週中段、今天是日本的憲法記念日、街上很安靜、很多店休一天、食堂只開到 11 點。週末市場休市、世界在打盹。昨晚那位 38 歲、JetBlue 紐約財務副理帶著太太跟兩個小孩來吃了一頓——chef 整天都在等人來、他想找人講一講昨晚的事。今晚的對話沒有重大事件、沒有要熬夜的會議——是一個禮拜結束、下個禮拜還沒開始的中間地帶。',
  actions: [
    { type: 'bgm', track: 'chill-lofi', command: 'play' },

    {
      type: 'narration',
      text: '禮拜天晚上 10 點、東京進入黃金週中段、今天是憲法記念日、街上很安靜、便利商店的關東煮鍋蓋上凝著一層水氣。週末美國股市休市、歐洲股市休市、紐約交易所那塊大電子看板從禮拜五傍晚就暗著、要到明天台北時間晚上 9 點半才會再亮起來。昨晚這家食堂裡有四個人——一對夫妻、一個八歲、一個五歲——是這條小巷裡這個月最熱鬧的一頓飯。今晚 chef 把昨晚剩下的湯重新熬過、把那雙寫著「KIDS」的木筷子收進抽屜、等人來。',
      duration: 5400,
    },

    // ── Weekend recap board — markets closed, themes from the week ──
    {
      type: 'market-data',
      data: {
        tickers: [
          { symbol: 'SPY 週收', price: 538.45, change: 1.4 },
          { symbol: 'WTI 油價', price: 95.20, change: -0.4 },
          { symbol: '日圓對美元', price: 155.80, change: -0.2 },
          { symbol: 'VIX 週收', price: 21.1, change: -7.4 },
        ],
        volatility: 16,
        vix: 21.1,
        rsi: 56.0,
        beta: 1.04,
        priceHistory: [531, 533, 535, 536, 537, 538, 538, 538],
        volumeHistory: [88, 92, 96, 90, 84, 78, 70, 0],
        sectors: [
          { label: '上週 NFP 13.8 萬低於預期', value: 720, color: '#cc8844' },
          { label: 'Warsh 第一週 — 無發言', value: 480, color: '#888888' },
          { label: 'JBLU 退場 — 飛機照飛', value: 480, color: '#ee4444' },
          { label: '黃金週 — 日股提早收盤', value: 380, color: '#22aacc' },
        ],
        headline: '週日晚上 — 市場休市；上週收盤美股小漲 1.4%、VIX 退到 21 出頭；下週首看週二 ISM 服務業',
      },
    },

    // Chef Sunday late evening — tidied up, waiting
    { type: 'enter', character: 'chef', toTile: 'stove' },
    { type: 'wait', duration: 600 },
    { type: 'move', character: 'chef', toTile: 'prep-area' },
    { type: 'wait', duration: 500 },
    { type: 'move', character: 'chef', toTile: 'stove' },
    { type: 'wait', duration: 400 },

    // Customer A enters — his friend just left town this afternoon
    { type: 'enter', character: 'customer-a', toTile: 'entrance' },
    { type: 'move', character: 'chef', toTile: 'counter-center' },
    { type: 'dialogue', character: 'chef', text: 'いらっしゃい。我等你一整天了。' },

    { type: 'move', character: 'customer-a', toTile: 'random-stool' },
    { type: 'sit', character: 'customer-a' },

    { type: 'dialogue', character: 'customer-a', text: '我猜也是。我剛去成田送他們一家四口、班機是今晚 9 點半。送完直接過來、還沒吃晚餐。' },

    { type: 'move', character: 'chef', toTile: 'stove' },
    { type: 'wait', duration: 400 },

    { type: 'dialogue', character: 'chef', text: '昨晚那一頓——我整天在腦袋裡重播。先講最後一件事——那個八歲的、走出去前回頭跟我講「謝謝你的湯、我媽媽在家不會煮這麼濃的」。我在後面差點掉眼淚。' },

    { type: 'dialogue', character: 'customer-a', text: '哈、他在飛機場等托運的時候、他媽媽還跟我說那句話他在計程車上又講了一次。八歲的小孩懂事得早。' },

    { type: 'dialogue', character: 'chef', text: '那他爸爸——你那位同學——昨晚有沒有比較放鬆一點？我看他坐下來前肩膀很僵。' },

    { type: 'dialogue', character: 'customer-a', text: '前半個小時還在工作模式、後來喝了兩杯啤酒、太太跟他講了一句「今晚別接電話」、他就把手機翻過來扣在桌上。我們從十一點聊到一點、聊大學、聊 2008 年我們第一份工作、聊我們當年覺得「四十歲應該已經穩了」這件事——結果現在我們快四十、都還在搖。' },

    { type: 'dialogue', character: 'chef', text: '那五歲的呢？我記得他一直拿筷子敲桌子。' },

    { type: 'dialogue', character: 'customer-a', text: '他媽媽今天早上發訊息來說、那小孩昨晚回到飯店問了一句「日本的拉麵店是不是都不會倒？」——大概是因為他八歲那個哥哥在學校聽過「公司倒了」的對話、他一路把這四個字裝在腦袋裡。' },

    { type: 'emote', character: 'customer-a', emote: 'thinking', duration: 700 },

    { type: 'dialogue', character: 'chef', text: '欸、這個我聽了心揪一下。那家裡兩個小孩、現在感覺得到爸爸公司怎麼樣嗎？' },

    { type: 'dialogue', character: 'customer-a', text: '感覺得到。八歲那個會問「為什麼這個月不像以前那樣帶我們出去吃飯」、五歲那個只感覺到「家裡空氣變了」、不會問、但會比較黏。我同學昨天在這邊講、太太前兩個禮拜每天哭一次、現在減到兩三天哭一次、他覺得這就算進步。' },

    { type: 'dialogue', character: 'chef', text: '我老婆有一次在我師父交班那段時間、也是這樣。看起來沒事、然後在洗碗的時候安靜地哭。我不知道怎麼辦、就把碗接過來自己洗。' },

    { type: 'dialogue', character: 'customer-a', text: '我同學昨晚也講了一個類似的——他說他現在每天晚上比太太晚一點上床、不是因為工作、是因為「太太睡著之後、整個房子才比較像他自己的」。' },

    { type: 'wait', duration: 400 },

    // Customer B enters — first weekend at home in a while
    { type: 'enter', character: 'customer-b', toTile: 'entrance' },
    { type: 'move', character: 'customer-b', toTile: 'random-stool' },
    { type: 'sit', character: 'customer-b' },

    { type: 'move', character: 'chef', toTile: 'counter-center' },
    { type: 'dialogue', character: 'chef', text: 'いらっしゃい。週末睡飽了沒？' },
    { type: 'move', character: 'chef', toTile: 'stove' },

    { type: 'dialogue', character: 'customer-b', text: '禮拜六睡到 9 點半、我先生說我已經很久沒睡這麼晚了。今天一整天就跟小孩在家、做了鬆餅、看了一部電影、下午跟我先生去散步——我們上次一起這樣走超過半小時、我想想、好像是去年秋天。' },

    { type: 'dialogue', character: 'chef', text: '聽起來好。' },

    { type: 'dialogue', character: 'customer-b', text: '是好、但好到有點不習慣。我一整天手機不太響、沒有一個客戶找我、沒有一個同事傳訊息、市場休市真的就是世界休市。下午三點我居然主動拿起手機看了一下、發現沒事、然後莫名其妙覺得空。' },

    { type: 'dialogue', character: 'customer-a', text: '這個我懂——做久了一陣子沒手機震動、會懷疑自己是不是被開除了。' },

    { type: 'dialogue', character: 'customer-b', text: '哈、就是這個感覺。我爸退休前一年講過一句話、我那時候沒聽懂——他說「我最怕的不是壓力、是哪天我打開手機、發現沒人需要我」。我今天下午有 30 秒體會到了那個。' },

    { type: 'dialogue', character: 'chef', text: '欸這個我也想過。我這家店萬一哪天沒人推門進來、我會在廚房裡開始懷疑自己。' },

    { type: 'wait', duration: 400 },

    // ── A quiet finance lesson — what it means when nothing happens ──
    { type: 'move', character: 'chef', toTile: 'counter-center' },
    { type: 'dialogue', character: 'chef', text: '這禮拜你們講了 Powell 退休、講了那家航空公司退場、講了新就業數字、講了賭盤合約歸零。今天什麼都沒有。新聞沒事、市場沒開、新聞網站滑下去都是黃金週的旅遊推薦。我反而有點不安——這種「沒事的一天」、是好還是壞？' },

    { type: 'dialogue', character: 'customer-a', text: '通常是好的。市場最怕的是「不知道接下來會發生什麼」、不是「真的有壞事發生」。今天什麼都沒有、就是一種「市場已經消化完上禮拜的東西」的訊號。我們桌上常說——「平靜的禮拜天、是好交易員的禮拜天」。' },

    { type: 'dialogue', character: 'customer-b', text: '加一個——「沒事」也是一個訊號。代表上禮拜的就業數字、Warsh 上任、JBLU 退場、那些東西、市場已經記到帳本裡、沒有要再多說什麼了。下個禮拜、就從零開始算新的事。' },

    { type: 'dialogue', character: 'chef', text: '哦——所以「沒事」也是一種市場狀態、不是真的什麼都沒發生。' },

    { type: 'dialogue', character: 'customer-a', text: '對。我帶徒弟的時候會講——「市場有三種狀態：上漲、下跌、消化」。消化期看起來最無聊、但其實是行情換檔的中間。這個禮拜很可能就是這種。' },

    { type: 'wait', duration: 400 },

    // ── What's coming this week — light, not the centerpiece ──
    { type: 'move', character: 'chef', toTile: 'stove' },
    { type: 'dialogue', character: 'chef', text: '那這個禮拜你們會看什麼？我問問、好心理準備、看下禮拜你們是不是又要熬夜。' },

    { type: 'dialogue', character: 'customer-b', text: '禮拜二有個叫「ISM 服務業」的數字——白話講就是「美國餐廳、旅館、銀行、診所這類『不是工廠』的行業這個月好不好」。對你比較直接、因為你也是服務業。如果出來說餐廳生意不好、那我這禮拜的客戶可能會緊張。' },

    { type: 'dialogue', character: 'customer-a', text: '禮拜四有個比較邊緣的——美國的「企業裁員報告」。我同學說他們公司明天會被列在那個報告的「四月新聞最多的雇主」名單裡。但那種報告通常不會讓市場大動、是事後紀錄、不是事前預警。' },

    { type: 'dialogue', character: 'chef', text: '那 Warsh 那個新央行老闆呢？這禮拜會講話嗎？' },

    { type: 'dialogue', character: 'customer-a', text: '不太可能。他禮拜五上任、現在才第三天、按往例第二禮拜開始才會有第一場演講、可能還是在某個比較不重要的場合、講一些大家都聽過的客套話。真正讓市場跳的那場、要等到月底他第一次主持貨幣政策會議。' },

    { type: 'dialogue', character: 'customer-b', text: '所以這禮拜可能真的就是「服務業數字 + 一些公司財報 + 例行噪音」、不會有太大的事。我下班可能可以準時走、回家陪小孩。' },

    { type: 'dialogue', character: 'chef', text: '聽起來、我這個禮拜也可以早點關店、回家陪我老婆看一下她最近迷的那部韓劇。' },

    { type: 'wait', duration: 400 },

    // ── Chef's quiet update on his menu test ──
    { type: 'move', character: 'chef', toTile: 'counter-center' },
    { type: 'dialogue', character: 'chef', text: '對了、特餐加 50 円那件事——我從禮拜五加到今天、第三天、客人都沒有走。今天黃金週本來就比較少人、但點特餐的比例跟平常差不多。' },

    { type: 'dialogue', character: 'customer-b', text: '三天太短、看不出真的有沒有影響。先撐到月底、看那一個月的特餐銷量比起上個月有沒有掉超過一成、再決定要不要繼續。' },

    { type: 'dialogue', character: 'chef', text: '一成是怎麼算出來的？' },

    { type: 'dialogue', character: 'customer-a', text: '經驗法則。客人面對價格上漲、第一個禮拜大概不會反應、第二、三禮拜開始有人不點、第四禮拜後流失趨穩。如果一個月銷量掉超過一成、代表那 50 円真的影響到了購買決定。掉不到一成、就是你白賺。' },

    { type: 'dialogue', character: 'chef', text: '欸這個聽起來蠻科學的。我以前都用感覺。' },

    { type: 'dialogue', character: 'customer-b', text: '感覺通常也對。但有數字、你跟自己吵架的時候、可以用數字來說服那一半的自己。' },

    { type: 'wait', duration: 400 },

    // ── Sunday closing — softer than usual ──
    { type: 'move', character: 'chef', toTile: 'counter-center' },
    { type: 'dialogue', character: 'chef', text: '今晚要點什麼？週日嘛、我給兩位煮一碗有靈魂的麵、不收特餐那 50 円。' },

    { type: 'dialogue', character: 'customer-a', text: '熱拉麵、加蛋、加溏心、湯多。今天送完他們一家、現在有點空、麵滿一點剛好。' },

    { type: 'dialogue', character: 'customer-b', text: '一樣、加煎餃。今晚不熬夜、回家睡個好覺、明天禮拜一上班也比較容易撐到下午。' },

    { type: 'dialogue', character: 'chef', text: '來、馬上煮。今天我老婆早上問我「為什麼禮拜天你還要去開店」、我說「總得有人在那邊、客人想來才有地方來」。她翻了個白眼、但晚上還是把我的便當盒裝滿了。' },

    { type: 'sfx', sound: 'chimes' },

    { type: 'wait', duration: 500 },
    { type: 'move', character: 'chef', toTile: 'stove' },

    {
      type: 'narration',
      text: '禮拜天晚上 11 點、東京街頭比平常更空、便利商店店員把今天最後一籠包子收起來。明天是黃金週的緑の日、後天是子供の日——又是兩天國定假日、街上會更安靜。明天台北時間晚上 9 點半、紐約交易所那塊大電子看板會再亮起來、Warsh 上任後的第一個禮拜一、會從某個普通數字開始；明天早上 9 點、那位 38 歲、紐約 JetBlue 財務副理會踏進他公司位於曼哈頓的辦公室、用「JetBlue（重整中）」名義坐回他那張位子；明天中午、客人的小孩會回到學校、八歲那個可能會在午餐桌上跟同學講「我去日本吃過一碗很濃的湯」。一個禮拜結束、下個禮拜還沒開始、世界在這個中間地帶喘一口氣。今晚的食堂沒有大事、沒有熬夜、沒有要等的數字——只有兩碗加蛋的拉麵、一份煎餃、跟一雙寫著「KIDS」的木筷子、收進抽屜最深處、等下次再用。',
      duration: 5800,
    },
  ],
};
