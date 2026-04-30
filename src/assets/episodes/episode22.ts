import type { Episode } from '../../engine/types';

export const EPISODE_22: Episode = {
  id: 'ep-22',
  date: '2026-04-30',
  title: '20260430 月底，與一場告別',
  description: '禮拜四晚上、四月最後一天、東京有點涼。凌晨 3 點半 Powell 做完了他八年任內最後一場記者會、台下幾個白頭髮的記者站起來鼓掌、他靦腆地笑了。今天紐約交易所 JetBlue 正式從電子看板上消失——飛機還在飛、但代表那家公司的那串字母 JBLU 變成歷史。chef 翻著四月的進貨單、客人少了兩成、豬肉漲了 8%、月底結算的時候錢比預期少。這是一個不是「事件」的晚上——是慢慢回頭看一個月的晚上。',
  actions: [
    { type: 'bgm', track: 'chill-lofi', command: 'play' },

    {
      type: 'narration',
      text: '禮拜四晚上 10 點、東京涼了下來、四月的最後一天。今天凌晨 3 點半、美國央行的老闆 Powell 做完了他八年任內最後一場記者會。今天早上 9 點半、JetBlue 的股票從紐約交易所的電子看板上消失——飛機還在飛、但代表那家公司的那串字母 JBLU 變成歷史。今天下午食堂的師傅翻著四月的進貨單、心想「這個月怎麼這麼快就過了、可是錢怎麼少了一截」。這是一個不是「事件」的晚上——是慢慢回頭看一個月的晚上。',
      duration: 5400,
    },

    // ── End-of-month dashboard — focused on what April actually felt like ──
    {
      type: 'market-data',
      data: {
        tickers: [
          { symbol: '美國股市 4 月', price: 537.80, change: 1.2 },
          { symbol: '油價 4 月', price: 95.60, change: -8.4 },
          { symbol: '日圓對美元', price: 156.10, change: -0.5 },
          { symbol: 'JBLU 退場', price: 0.30, change: -89.8 },
        ],
        volatility: 22,
        vix: 22.8,
        rsi: 56.0,
        beta: 1.04,
        priceHistory: [531, 532, 534, 535, 536, 537, 538, 538],
        volumeHistory: [88, 96, 92, 84, 76, 68, 60, 56],
        sectors: [
          { label: '4 月小漲 1.2%', value: 720, color: '#22cc55' },
          { label: '戰爭溢價退掉', value: 1080, color: '#22cc55' },
          { label: '一家航空消失', value: 480, color: '#ee4444' },
          { label: 'Powell 八年告別', value: 920, color: '#cc8844' },
        ],
        headline: '四月收尾——美股小漲 1.2%、油價退一截、JetBlue 摘牌、Powell 結束八年任期',
      },
    },

    // Chef Thu late evening — counting up the month
    { type: 'enter', character: 'chef', toTile: 'stove' },
    { type: 'wait', duration: 600 },
    { type: 'move', character: 'chef', toTile: 'prep-area' },
    { type: 'wait', duration: 500 },
    { type: 'move', character: 'chef', toTile: 'stove' },
    { type: 'wait', duration: 400 },

    // Customer A enters — eyes red from staying up at 3:30am
    { type: 'enter', character: 'customer-a', toTile: 'entrance' },
    { type: 'move', character: 'chef', toTile: 'counter-center' },
    { type: 'dialogue', character: 'chef', text: 'いらっしゃい。眼睛比昨天還紅、又熬夜？' },

    { type: 'move', character: 'customer-a', toTile: 'random-stool' },
    { type: 'sit', character: 'customer-a' },

    { type: 'dialogue', character: 'customer-a', text: '凌晨 3 點半看了 Powell 那場最後的記者會、然後一直被同事敲訊息、整夜沒睡。回家睡了兩小時就起來、現在整個人是空的。' },

    { type: 'move', character: 'chef', toTile: 'stove' },
    { type: 'wait', duration: 400 },

    { type: 'dialogue', character: 'chef', text: 'Powell 是誰？我這禮拜聽你們講過好幾次。' },

    { type: 'dialogue', character: 'customer-a', text: '美國中央銀行的老闆——已經做八年了、今天卸任。換成另一個人接手、就是上禮拜參議院投票通過的那個 Warsh。Powell 八年任內、處理過疫情、處理過通膨、加過利息、降過利息、被川普罵過好幾次。今天下午是他最後一次站在那個位子上、面對全世界的記者。' },

    { type: 'dialogue', character: 'chef', text: '聽起來蠻像我們這條街上的店長換人。但為什麼全世界要管美國這個老闆？' },

    { type: 'dialogue', character: 'customer-a', text: '因為他每兩個月決定一次美國的利息要不要動。利息一動、全世界跟著動——你貸款的錢會貴一點還是便宜一點、你存款的錢利息多一點還是少一點、進口的東西貴一點還是便宜一點。所以他講話、全世界做金融的人都會停下來聽。' },

    { type: 'dialogue', character: 'chef', text: '哦——所以差不多就是「全球最大的銀行櫃檯主任」？' },

    { type: 'dialogue', character: 'customer-a', text: '哈、可以這樣說。但他不是給人辦帳戶、是決定整個國家的錢要不要寬鬆一點。他講的話、市場會去解讀「他是不是要降息了」「是不是覺得通膨還沒控制好」。一個字、可能讓全世界股市跳 1%。' },

    { type: 'emote', character: 'customer-a', emote: 'thinking', duration: 700 },

    { type: 'dialogue', character: 'chef', text: '那他今天最後一場、有講什麼特別的？' },

    { type: 'dialogue', character: 'customer-a', text: '兩個地方讓我印象深。第一個——他真的講出了「交棒」這兩個字。我們這群人這禮拜一直在猜他會不會講、結果他講了。市場就把這當成「他選擇用善意收尾」的訊號、SPY 那一刻往上跳了 0.4%。第二個——他講到一半提到他的女兒。說八年前剛上任的時候、女兒還在念高中、現在已經自己有小孩了。整個會場安靜了五秒鐘、有個資深記者眼眶濕了。' },

    { type: 'dialogue', character: 'chef', text: '哦——這部分我聽得懂。八年是很長一段時間。' },

    { type: 'wait', duration: 400 },

    // Customer B enters — caught the replay
    { type: 'enter', character: 'customer-b', toTile: 'entrance' },
    { type: 'move', character: 'customer-b', toTile: 'random-stool' },
    { type: 'sit', character: 'customer-b' },

    { type: 'move', character: 'chef', toTile: 'counter-center' },
    { type: 'dialogue', character: 'chef', text: 'いらっしゃい。你也在講 Powell？' },
    { type: 'move', character: 'chef', toTile: 'stove' },

    { type: 'dialogue', character: 'customer-b', text: '我比較聰明、3 點半睡覺、6 點半起來看重播。看完之後我老婆問我「你昨晚為什麼一直翻來翻去」、其實是因為我在想——這種「一個時代結束」的感覺、上一次體會到是什麼時候。然後想起來——我爸退休那年、他打電話給我講三十年金融業生涯的時候、語氣跟 Powell 今天差不多。' },

    { type: 'dialogue', character: 'chef', text: '我老婆每次聽我講金融的事都會打哈欠、但她聽我講「我師父最後一天交班」那次哭了。可能就是這種感覺。' },

    { type: 'dialogue', character: 'customer-a', text: '差不多。市場數字、利率政策、那些都是表面。底下其實是——一群人在幫整個國家做決定、然後到了某一天、換另外一群人。今天是換班日。' },

    { type: 'wait', duration: 400 },

    // ── End of month, JBLU delisted ──
    { type: 'move', character: 'chef', toTile: 'counter-center' },
    { type: 'dialogue', character: 'chef', text: '對了、你昨天提的 JetBlue——今天怎麼樣？' },

    { type: 'dialogue', character: 'customer-b', text: '今天早上 9 點半、紐約交易所那塊大電子看板上、JBLU 那串字母最後一次亮起來、然後消失了。從現在開始、想買 JBLU 股票、要去叫做「粉單市場」（pink sheets）的地方——白話講就是「正式交易所看不上的灰色市場」。流動性差、價格亂、沒人保護你。 那個 Reddit 上面退休的老先生今早發了一個帖、說他把那 500 美金（從原本 5,000 跌成 500）就當成「教我這把年紀還不要相信廉價航空」的學費、把帳戶關了。下面 800 個留言。' },

    { type: 'dialogue', character: 'chef', text: '5,000 變 500、那是退休金的一部分嗎？' },

    { type: 'dialogue', character: 'customer-a', text: '不是全部、但他說那是「給孫女將來上大學留的一小筆」。他寫得蠻溫柔的——沒有怪罪誰、只說「我以為廉價航空有未來、結果連基本盤都撐不住」。我們桌上有人轉了那個帖、說這比任何一份分析報告都更講清楚「為什麼分散投資」是個原則。' },

    { type: 'dialogue', character: 'chef', text: '我那位 JetBlue 的同學昨天有沒有來？我說過湯免費。' },

    { type: 'dialogue', character: 'customer-a', text: '今天還沒——但他傳訊息說週末會過來。他說他暫時還在、被指派去處理破產期間的內部報表、可能要做半年。半年後再看。已經在投履歷了、但他三十八歲、有兩個小孩、不能輕易換城市。' },

    { type: 'wait', duration: 400 },

    // ── Chef shares his April numbers ──
    { type: 'move', character: 'chef', toTile: 'stove' },
    { type: 'dialogue', character: 'chef', text: '我今天下午也在算我的四月。客人比三月少了 18%、豬肉成本漲 8%、雞蛋漲 12%、啤酒批發再漲一輪、電費這個月還漲了。我自己的月薪——如果只算淨利、四月比三月少了 12 萬日圓。我在想要不要把湯麵加 50 円、可是我又怕老客人不來了。' },

    { type: 'dialogue', character: 'customer-b', text: '50 円其實就是 0.32 美金、不太多。但你可能可以這樣想——把湯麵跟拉麵都不動、加 50 円的是「特餐」（雞排飯、漢堡排定食）、那種來偶爾換口味的客人本來就不太計較 50 円。常客點湯麵的價格不變、會覺得你還是那家店。賺多一點的同時、不傷形象。' },

    { type: 'dialogue', character: 'chef', text: '欸這個建議好——這就是你說的「分階段抽成」嗎？' },

    { type: 'dialogue', character: 'customer-a', text: '不太一樣、但邏輯接近。對價格敏感的客人、保留原價；對價格不敏感的、悄悄抓多一點。零售圈就是這樣做、超市的「會員價」、咖啡店的「升級大杯」、都是同一套。' },

    { type: 'dialogue', character: 'chef', text: '我以為這只是大企業的事、原來我這種小店也能用。' },

    { type: 'dialogue', character: 'customer-b', text: '小店反而更該用。你的決策成本低、明天就可以改菜單。大企業要開三個會、過五個 OK。' },

    { type: 'wait', duration: 400 },

    // ── A small Polymarket aside — the contract dies tonight ──
    { type: 'move', character: 'chef', toTile: 'counter-center' },
    { type: 'dialogue', character: 'chef', text: '你們這禮拜一直在看那個賭盤上面伊朗會不會倒——今天到期了沒？' },

    { type: 'dialogue', character: 'customer-a', text: '今晚午夜 UTC、就是日本時間明早 9 點。從上禮拜五的 0.85% 一路退到現在的 0.05%、再過 8 個小時就會歸零、合約消失。沒有事件、沒有戲劇、單純就是時間到了。我會在明早設個鬧鐘、看那一秒。' },

    // ── Polymarket — ONE chart, the ones still alive ──
    {
      type: 'polymarket-odds',
      data: {
        asOf: '2026-04-30T01:06:59Z',
        highlightSlug: 'will-the-iranian-regime-fall-by-april-30',
        markets: [
          {
            slug: 'will-the-iranian-regime-fall-by-april-30',
            question: 'Will the Iranian regime fall by April 30?',
            yesProbability: 0.0005,
            volume: 52143403,
            endDate: '2026-04-30T00:00:00Z',
            history: [
              { t: 1777410003, p: 0.0025 }, { t: 1777413618, p: 0.0025 }, { t: 1777417204, p: 0.0025 }, { t: 1777420803, p: 0.0025 },
              { t: 1777424404, p: 0.0025 }, { t: 1777428004, p: 0.0015 }, { t: 1777431603, p: 0.0015 }, { t: 1777435203, p: 0.0015 },
              { t: 1777438804, p: 0.0015 }, { t: 1777442403, p: 0.0015 }, { t: 1777446015, p: 0.0015 }, { t: 1777449603, p: 0.0015 },
              { t: 1777453203, p: 0.0015 }, { t: 1777456803, p: 0.0015 }, { t: 1777460403, p: 0.0015 }, { t: 1777464004, p: 0.0015 },
              { t: 1777467604, p: 0.0015 }, { t: 1777471203, p: 0.0015 }, { t: 1777474804, p: 0.0015 }, { t: 1777478404, p: 0.0015 },
              { t: 1777482003, p: 0.0005 }, { t: 1777485604, p: 0.0005 }, { t: 1777489204, p: 0.0005 }, { t: 1777492803, p: 0.0005 },
              { t: 1777496416, p: 0.0005 }, { t: 1777500005, p: 0.0005 }, { t: 1777503604, p: 0.0005 }, { t: 1777507205, p: 0.0005 },
              { t: 1777510820, p: 0.0005 }, { t: 1777511106, p: 0.0005 },
            ],
          },
          {
            slug: 'will-the-iranian-regime-fall-by-june-30',
            question: 'Will the Iranian regime fall by June 30?',
            yesProbability: 0.0850,
            volume: 34796156,
            endDate: '2026-06-30T00:00:00Z',
            history: [
              { t: 1777410009, p: 0.0750 }, { t: 1777413620, p: 0.0750 }, { t: 1777417213, p: 0.0750 }, { t: 1777420810, p: 0.0750 },
              { t: 1777424406, p: 0.0750 }, { t: 1777428006, p: 0.0750 }, { t: 1777431608, p: 0.0750 }, { t: 1777435206, p: 0.0750 },
              { t: 1777438807, p: 0.0750 }, { t: 1777442409, p: 0.0750 }, { t: 1777446021, p: 0.0750 }, { t: 1777449605, p: 0.0750 },
              { t: 1777453208, p: 0.0750 }, { t: 1777456805, p: 0.0750 }, { t: 1777460405, p: 0.0750 }, { t: 1777464011, p: 0.0750 },
              { t: 1777467605, p: 0.0750 }, { t: 1777471205, p: 0.0750 }, { t: 1777474815, p: 0.0750 }, { t: 1777478406, p: 0.0750 },
              { t: 1777482005, p: 0.0750 }, { t: 1777485609, p: 0.0750 }, { t: 1777489206, p: 0.0750 }, { t: 1777492808, p: 0.0750 },
              { t: 1777496421, p: 0.0800 }, { t: 1777500007, p: 0.0850 }, { t: 1777503605, p: 0.0750 }, { t: 1777507215, p: 0.0800 },
              { t: 1777510822, p: 0.0850 }, { t: 1777511166, p: 0.0850 },
            ],
          },
        ],
      },
    },

    { type: 'dialogue', character: 'chef', text: '那旁邊那條 6 月底的呢？最近有點上下跳。' },

    { type: 'dialogue', character: 'customer-a', text: '上下跳通常代表沒有強烈意見——下午從 7.5% 跳到 8.5% 又退回 7.5% 又跳到 8.5%、沒有明確方向。可能是有人在試水溫、可能就是一些零散的小單。我們不會太認真看這種訊號。' },

    { type: 'dialogue', character: 'chef', text: '聽起來就像我老闆在我老婆面前評論晚餐——他不確定好不好吃、就一直「嗯、嗯、不錯、不錯」上下跳。' },

    { type: 'dialogue', character: 'customer-b', text: '哈——對、就是那種感覺。市場有時候真的就是還沒想清楚。' },

    { type: 'wait', duration: 400 },

    // ── Closing ──
    { type: 'move', character: 'chef', toTile: 'counter-center' },
    { type: 'dialogue', character: 'chef', text: '今晚要點什麼？四月最後一天、我給兩位送一份煎餃。' },

    { type: 'dialogue', character: 'customer-a', text: '熱拉麵、加蛋、湯多。謝謝師傅。' },

    { type: 'dialogue', character: 'customer-b', text: '一樣、加溏心。今晚不熬夜了、回家陪小孩。' },

    { type: 'dialogue', character: 'chef', text: '對嘛、休息一下。Powell 都退休了、你也別太拚。' },

    { type: 'sfx', sound: 'chimes' },

    { type: 'wait', duration: 500 },
    { type: 'move', character: 'chef', toTile: 'stove' },

    {
      type: 'narration',
      text: '禮拜四晚上 11 點、東京的雨後街道、霓虹燈反射在濕的柏油上。明天凌晨 9 點、那個賭盤上的合約會自己消失、沒有人會記得它走過 0.85% 跌到 0.05% 的那條線。明天五月一號、Powell 會在自己家煮咖啡、不用再七點半進辦公室。明天 JetBlue 那位三十八歲、兩個小孩的紐約財務副理會繼續去上班、但抬頭看到的公司 logo 已經是「JetBlue（重整中）」。明天食堂的師傅會把湯麵價格不動、特餐加 50 円、看下個月怎麼樣。一個月就這樣過去了。市場是抽象的、月底是具體的——是那一張進貨單、是那位老先生關掉的帳戶、是那位 Fed 主席講話講到女兒的那五秒沉默。先把拉麵吃完。',
      duration: 5800,
    },
  ],
};
