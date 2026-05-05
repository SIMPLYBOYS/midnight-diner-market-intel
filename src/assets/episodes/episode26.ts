import type { Episode } from '../../engine/types';

/**
 * Sources verified 2026-05-05:
 * - Tuesday 5/5 = 子供の日 (Children's Day, Japan public holiday); Nikkei closed all day.
 *   Tokyo Tower flies 333 koinobori (matches its 333m height); Skytree 1,000 koinobori.
 *   (Time Out Tokyo, Tabimaniajapan)
 * - Monday 5/4 US close: S&P 500 7,200.75 (-0.41%), Nasdaq Comp 25,067.80 (-0.19%),
 *   Dow 48,941.90 (-1.13%, -557pts). Driver: Project Freedom day-1 escalation +
 *   oil spike. (TheStreet live blog 5/4, Yahoo Finance)
 * - Project Freedom day-1 (Mon 5/4): CENTCOM declared "a success" — 2 US guided-missile
 *   destroyers transited into Gulf, 1 Maersk-affiliated vessel cleared with US escort.
 *   BUT: Iran publicly warned US to stay out of Hormuz; UAE intercepted incoming Iranian
 *   missiles; fire reported at Fujairah oil hub; tanker hit by drones near strait.
 *   Trump said Iran "took some shots" but "little damage."
 *   (CNN "Day 66" live blog 5/4, Times of Israel, Reason, Euronews, Al Jazeera)
 * - Brent: spiked +5% Mon to ~$114/bbl (highest since May 2022); Fortune snapshot $115.01
 *   at 8:45am ET 5/4. WTI: +~3% to ~$105. (Trading Economics, Fortune oil price 5/4)
 * - eBay regular Mon: +~5% to ~$109 (well below $125 offer). Board statement: will
 *   "carefully review and consider." Not rejected. (eBay press release via Variety,
 *   Fox Business 5/4) — GameStop Mon -10% on the bid + Cohen's CNBC interview. (CNBC 5/4)
 * - KOSPI Mon: +5.12% to 6,936.99 (Samsung +5.44%, SK Hynix +12.52%, intraday records).
 *   Taiwan TAIEX Mon: closed 40,705 (+4.6%, first ever close above 40,000); Tue morning
 *   -0.3% to ~40,051. Hang Seng Mon: +1.26%. (CNBC Asia markets live 5/4, Trading Economics)
 * - Tue 5/5 ISM Services PMI release 10am ET (= 11pm JST today). Prior March 54.0 (21st
 *   month in expansion). April Manufacturing PMI printed 52.7 vs 53.0 consensus on 5/1.
 *   (ISMworld release calendar, ISM March 2026 report)
 * - AMD reports Tue after-close (= ~5am JST Wed): consensus rev ~$9.84B (+~32% YoY),
 *   EPS ~$1.27, Data Center ~$5.56B (+51.5% YoY), GM guide ~55%.
 *   (Capital.com / TipRanks / Tradingkey / Alphastreet previews)
 * - 10Y UST 4.43% Mon close (prev 4.45%); 2Y 3.93% (prev 3.89%). (CNBC US10Y/US2Y 5/4)
 * - JPY/USD ~156.5 after MoF intervention prior week (¥5.48T spent, per Reuters via XTB).
 *   BoJ kept rates on hold, raised 2026 inflation outlook to 2.8% (from 1.9%), halved
 *   growth forecast to 0.5%. Market pricing possible move toward 1.0%. (CNBC 5/1)
 * - Powell term ends Fri 5/15 (10 days). Warsh advanced 13-11 from Senate Banking 4/29;
 *   full Senate vote week of 5/11. (PBS NewsHour 4/29, CBS, Kiplinger)
 * - April NFP releases Fri 5/8, consensus +60K (March +178K). (BLS, user-asserted from ep25)
 * - Polymarket "Will the Iranian regime fall by June 30?": yesProbability 0.055 (held flat
 *   from yesterday despite escalation), volume $36.35M (was $35.94M Mon).
 *   (public/polymarket/latest.json, collectedAt 2026-05-05T06:40:34Z, 168pts)
 */
export const EPISODE_26: Episode = {
  id: 'ep-26',
  date: '2026-05-05',
  title: '20260505 子供の日，Project Freedom 第一天就出事',
  description: '禮拜二晚上、子供の日、東京塔上飄著 333 條鯉魚旗——剛好等於它的 333 公尺。日股今天休市、但隔壁韓國跟台灣同一天打破紀錄、Samsung 跳 5%、台股第一次收在四萬點之上。昨晚 Project Freedom 第一天沒有照劇本走——UAE 攔截了伊朗飛彈、Fujairah 油庫起火、Brent 一晚跳 5% 到 114、Dow 收跌 1.1%。今晚 11 點公布美國 ISM 服務業、凌晨 5 點 AMD 財報。今晚的食堂沒有油價跳水、有油價跳起來。',
  actions: [
    { type: 'bgm', track: 'chill-lofi', command: 'play' },

    {
      type: 'narration',
      text: '禮拜二晚上 10 點、東京進入子供の日的尾聲、東京塔上飄著 333 條鯉魚旗、剛好等於它的 333 公尺、Skytree 那邊掛了一千條。今天日股休市、是黃金週最後一天、明天禮拜三才會開盤。但昨晚紐約那邊不太平靜——Trump 禮拜天宣布、禮拜一上午正式開始的「Project Freedom」第一天就出事了——UAE 攔截了從伊朗飛過來的飛彈、Fujairah 油庫起火、附近一艘油輪被無人機打到、Brent 一晚跳了 5%、收在 114 美金一桶、是 2022 年 5 月以來最高。美股 Dow 收跌 557 點、跌 1.1%、S&P 跌 0.4%。但奇怪的是——昨天台北休市、今天一開盤、台股第一次收在四萬點以上、韓國 KOSPI 跳 5%、Samsung 一天 +5.4%、SK Hynix +12.5%——同一天、有人在燒、有人在慶祝。今晚的食堂沒有油價跳水、有油價跳起來。',
      duration: 5400,
    },

    // ── Real Tuesday market state — Mon US close + Asia Tue open ──
    {
      type: 'market-data',
      data: {
        tickers: [
          { symbol: 'Dow 收盤', price: 48941.90, change: -1.13 },
          { symbol: 'S&P 500 收盤', price: 7200.75, change: -0.41 },
          { symbol: 'Brent 油價', price: 114.00, change: 5.0 },
          { symbol: 'KOSPI 收盤', price: 6936.99, change: 5.12 },
        ],
        volatility: 32,
        vix: 22.8,
        rsi: 47.5,
        beta: 1.18,
        priceHistory: [7245, 7252, 7258, 7240, 7222, 7215, 7208, 7200],
        volumeHistory: [78, 82, 88, 102, 118, 124, 132, 128],
        sectors: [
          { label: 'Project Freedom 第一天 — UAE 攔截、Fujairah 起火、油 +5%', value: 1140, color: '#cc4444' },
          { label: '韓台同日打破紀錄 — KOSPI +5%、台股破四萬', value: 880, color: '#22cc55' },
          { label: '今晚 11 點 ISM 服務業／凌晨 5 點 AMD 財報', value: 540, color: '#cc8844' },
          { label: 'eBay 董事會「會仔細評估」、GME -10%', value: 380, color: '#888888' },
        ],
        headline: 'Project Freedom 第一天就出事：UAE 攔截伊朗飛彈、Fujairah 起火、Brent +5% 到 $114；Dow 跌 557 點；韓台同日破紀錄',
      },
    },

    // Chef alone — Children's Day evening, sees the koinobori through window
    { type: 'enter', character: 'chef', toTile: 'stove' },
    { type: 'wait', duration: 600 },
    { type: 'move', character: 'chef', toTile: 'prep-area' },
    { type: 'wait', duration: 500 },
    { type: 'move', character: 'chef', toTile: 'stove' },
    { type: 'wait', duration: 400 },

    // Customer A enters — analyst with overnight news on his face
    { type: 'enter', character: 'customer-a', toTile: 'entrance' },
    { type: 'move', character: 'chef', toTile: 'counter-center' },
    { type: 'dialogue', character: 'chef', text: 'いらっしゃい。今天子供の日、剛剛我妹打電話、說她兒子在 Skytree 那邊看一千條鯉魚旗看到不肯走。你是哪裡剛回來、臉色有點累。' },

    { type: 'move', character: 'customer-a', toTile: 'random-stool' },
    { type: 'sit', character: 'customer-a' },

    { type: 'dialogue', character: 'customer-a', text: '我從凌晨三點看到現在、半夢半醒。昨天我跟你講「油大概不會跳、伊朗大概不會反應」、結果話講完不到十二小時、UAE 攔下幾枚從伊朗飛過去的飛彈、Fujairah 一座油庫燒起來、Brent 一晚從 108 跳到 114。我桌上群組四點凌晨一片紅。' },

    { type: 'move', character: 'chef', toTile: 'stove' },
    { type: 'wait', duration: 400 },

    { type: 'dialogue', character: 'chef', text: 'Fujairah 是哪裡？我聽起來像葉門那邊的地名。' },

    { type: 'dialogue', character: 'customer-a', text: 'UAE、就是杜拜那個阿拉伯聯合大公國。Fujairah 在霍爾木茲海峽外面、是中東最大的轉運港、世界三分之一的船隻燃料在那邊加油。一座油庫起火、市場第一個反應就是「萬一接下來連港口都不能用」、油就會自己往上跳。' },

    { type: 'dialogue', character: 'chef', text: '所以昨天我跟我老婆講「Trump 那條新聞應該不會出事」、今天早上要被她笑了。' },

    { type: 'dialogue', character: 'customer-a', text: '師傅、被笑的人很多、不只你一個。Trump 自己昨天下午也出來講「伊朗那邊有打、但損害不大」——這句話翻成大白話是「我以為他們不會動、結果他們動了、但還沒動到我得反擊」。一句話講出兩個轉彎。' },

    { type: 'wait', duration: 400 },

    // ── How a "calm" forecast unwound ──
    { type: 'dialogue', character: 'chef', text: '昨晚兩位走的時候、我還記得你們講「順利的話油可能還會再跌一點」。怎麼一個晚上會差這麼多？' },

    { type: 'dialogue', character: 'customer-a', text: '我們桌上的人也在問同一個問題。回頭看、其實有訊號——伊朗那邊昨天上午就公開警告「外國軍艦不要靠近霍爾木茲」、海峽附近也有油輪通報無人機騷擾。但我們桌上把這些當成例行警告、選擇相信「兩個禮拜的停火還撐得住」這個故事。事後看、伊朗已經在送訊號了、是我們先聽不進去。' },

    { type: 'dialogue', character: 'chef', text: '這聽起來像我新進的學徒、湯頭已經有點酸了、他堅持說「明天再撈一次就好」、隔天整鍋倒掉。' },

    { type: 'dialogue', character: 'customer-a', text: '一模一樣。市場最常犯的錯不是「沒看到訊號」、是「看到了、但選擇相信故事還沒壞」。' },

    { type: 'wait', duration: 400 },

    // Customer B enters — sell-side, with the trader-side view
    { type: 'enter', character: 'customer-b', toTile: 'entrance' },
    { type: 'move', character: 'customer-b', toTile: 'random-stool' },
    { type: 'sit', character: 'customer-b' },

    { type: 'move', character: 'chef', toTile: 'counter-center' },
    { type: 'dialogue', character: 'chef', text: 'いらっしゃい。子供の日、家裡兩個都怎麼安頓？' },
    { type: 'move', character: 'chef', toTile: 'stove' },

    { type: 'dialogue', character: 'customer-b', text: '我先生帶他們去淺草那邊吃柏餅、我桌上凌晨三點一個 Zoom call、開到剛剛、油庫起火後的第一輪重新定價我們桌參加了。家裡那邊我先生發了一張照片給我、孩子手上拿著兩個鯉魚形狀的麻糬。' },

    { type: 'dialogue', character: 'customer-a', text: '辛苦了、妳們桌上昨晚怎麼跑的？' },

    { type: 'dialogue', character: 'customer-b', text: '凌晨三點之前桌上的人都在睡覺、消息一出來、我們先把油那邊的 hedge 加上去——也就是先付一點錢買「萬一油繼續跳」的保險、不是去賺錢、是不要讓客戶部位裸奔。三點半有一波美元小幅升值、四點 KOSPI 期貨反而往上跳——我們花了快半小時才反應過來「韓國這邊不是在跑、是在跑進來」。' },

    { type: 'dialogue', character: 'chef', text: '等等、我聽不懂——油被燒、油價跳、美股跌、這條我懂。但韓國跟台灣跳什麼？戰爭快來了、不是應該大家都跑嗎？' },

    { type: 'dialogue', character: 'customer-b', text: '師傅、這就是今天最有意思的地方。昨晚兩件事同時發生——一、油價跳；二、市場開始相信「萬一油繼續跳、聯準會反而會更早降息」。降息對科技股是好事、對 AI 那條更是好事。Samsung 是 AI 記憶體、SK Hynix 是 HBM——這兩家剛好是 AI 鏈上「最不怕油的那一段」。Samsung 跳 5.4%、SK Hynix 跳 12.5%、是同一個邏輯。同一個晚上、油在燒、AI 在飛、錢從一個房間搬到另一個房間。' },

    { type: 'dialogue', character: 'chef', text: '哦——所以不是大家都在跑、是大家換房間。這比較好理解。' },

    { type: 'dialogue', character: 'customer-a', text: '台灣昨天也是、TAIEX 第一次收在四萬點以上、收 40,705、跳 4.6%。台積電那條線也帶著大盤跳。今天台股早上小回 0.3%、但本來就應該回一下、四萬點不是一天能消化的。' },

    { type: 'wait', duration: 400 },

    // ── eBay update — board didn't reject, market doesn't believe ──
    { type: 'move', character: 'chef', toTile: 'counter-center' },
    { type: 'dialogue', character: 'chef', text: '對了昨天那個 GameStop 買 eBay 的故事、後來怎麼了？我老婆早上看新聞跟我說「那家還活著嗎」。' },

    { type: 'dialogue', character: 'customer-a', text: '活著、但不太好。eBay 董事會昨天下午發了一份很客氣的聲明、講的是「會仔細評估這個提議」——不是「不要」、也不是「好」、是「我們會看一下」。但市場看完這句話後、eBay 從盤後的 +14% 一路收回到 +5%、收 109 美金。GameStop 出的價是 125、市場現在覺得「成交機率大概 30-40%」、不是 100%。' },

    { type: 'dialogue', character: 'chef', text: '那 GameStop 自己呢？' },

    { type: 'dialogue', character: 'customer-b', text: 'GameStop 一天跌 10%。一半是「自己出錢買比自己大四倍的公司、市場本來就會懷疑」、一半是 Cohen 昨天下午跑去 CNBC 上電視、被主持人問「你哪來的錢」、他講話的方式有點...怎麼說、不是太有耐心。市場最不喜歡的就是「不耐煩的併購方」、會懷疑他有沒有想清楚。' },

    { type: 'dialogue', character: 'chef', text: '這跟我老師父當年一樣——他要把店交給我之前、先帶我跑了三個月的進貨、不是嘴上講。一個人如果連被問問題都不耐煩、別人就會懷疑他有沒有真的算過。' },

    { type: 'wait', duration: 400 },

    // ── Polymarket — single market, light touch ──
    {
      type: 'polymarket-odds',
      data: {
        asOf: '2026-05-05T06:40:34Z',
        highlightSlug: 'will-the-iranian-regime-fall-by-june-30',
        markets: [
          {
            slug: 'will-the-iranian-regime-fall-by-june-30',
            question: 'Will the Iranian regime fall by June 30?',
            yesProbability: 0.055,
            volume: 36347063,
            endDate: '2026-06-30T00:00:00Z',
            history: [
              { t: 1777878005, p: 0.055 }, { t: 1777881605, p: 0.055 }, { t: 1777885205, p: 0.055 },
              { t: 1777888806, p: 0.055 }, { t: 1777892405, p: 0.055 }, { t: 1777896006, p: 0.055 },
              { t: 1777899607, p: 0.055 }, { t: 1777903206, p: 0.065 }, { t: 1777906808, p: 0.055 },
              { t: 1777910405, p: 0.065 }, { t: 1777914007, p: 0.065 }, { t: 1777917608, p: 0.055 },
              { t: 1777921209, p: 0.055 }, { t: 1777924809, p: 0.055 }, { t: 1777928408, p: 0.055 },
              { t: 1777932007, p: 0.055 }, { t: 1777935606, p: 0.055 }, { t: 1777939220, p: 0.055 },
              { t: 1777942807, p: 0.055 }, { t: 1777946407, p: 0.055 }, { t: 1777950009, p: 0.055 },
              { t: 1777953609, p: 0.055 }, { t: 1777957208, p: 0.055 }, { t: 1777960817, p: 0.055 },
              { t: 1777963144, p: 0.055 },
            ],
          },
        ],
      },
    },

    { type: 'dialogue', character: 'customer-a', text: '有意思的是這個——昨晚 UAE 被打、Fujairah 起火、Brent 跳 5%、但賭盤上「6/30 前伊朗政府會不會倒」這條合約、整晚維持在 5.5%、跟昨天一模一樣。短時間裡有人下注往 6.5% 推、四個小時後又被推回來。換句話說、賭盤的看法是——「會出事、但不會崩」。油價跳起來的是「中間過程的痛」、不是「結局換了」。' },

    { type: 'dialogue', character: 'chef', text: '哦——所以油價跟賭盤這次講的不一樣。油說「事情變嚴重」、賭盤說「結局沒變」。' },

    { type: 'dialogue', character: 'customer-b', text: '完全對。這種時候我們桌上會看「多久回去」。如果 Fujairah 三天內滅火、Brent 一個禮拜內回到 108 上下、那就是大家虛驚一場、油價的這 5% 算是付給「萬一」的保險費。如果一個禮拜油還在 114 以上、那就是市場在重新標價「這條航道沒那麼安全」、影響會拖好幾個月。' },

    { type: 'wait', duration: 400 },

    // ── Tonight + tomorrow morning — ISM, AMD, NFP ──
    { type: 'move', character: 'chef', toTile: 'stove' },
    { type: 'dialogue', character: 'chef', text: '那今晚還有什麼要看的？我還有一鍋湯要熬。' },

    { type: 'dialogue', character: 'customer-b', text: '今晚 11 點、美國公布 4 月 ISM 服務業——這是衡量美國餐廳、銀行、診所、運輸、物流這些業好不好的數字。3 月是 54、超過 50 就是還在擴張。如果今晚出來低於 52、加上禮拜五 NFP 也軟、那「美國經濟在軟化」這條故事會更穩。' },

    { type: 'dialogue', character: 'customer-a', text: '然後凌晨 5 點 AMD 財報。市場預估營收 98 億美金、年增 3 成、最重要的是 Data Center 那塊——大家賭它會破 55 億、年增超過 5 成。AMD 過了、AI 那條線今晚就會繼續燒；AMD 沒過、油價跳的痛今天就會疊上「AI 也撐不住」、明天台股韓股那場慶祝可能要還回去。' },

    { type: 'dialogue', character: 'chef', text: '哦——所以今晚一個 11 點、一個 5 點、是兩個小考。' },

    { type: 'dialogue', character: 'customer-b', text: '對。然後禮拜五 NFP、再過 10 天 Powell 交班、再過 6 天 Warsh 在參議院表決。這禮拜每天都有一個會跳的點。' },

    { type: 'wait', duration: 400 },

    // ── Closing — Children's Day, koinobori softness ──
    { type: 'move', character: 'chef', toTile: 'counter-center' },
    { type: 'dialogue', character: 'chef', text: '今晚要點什麼？子供の日嘛、我給兩位煮一碗甜一點的、湯裡加一點味醂、配一塊柏餅。我妹中午寄了一盒過來、說「放冰箱怕你獨自吃太多」。' },

    { type: 'dialogue', character: 'customer-a', text: '熱湯麵、加蛋、湯多。柏餅給我留半塊就好、ISM 出來我得回去看。' },

    { type: 'dialogue', character: 'customer-b', text: '一樣、不要煎餃今天、我等下還要回家陪小孩。柏餅整塊給我吧、回家給他們分。' },

    { type: 'dialogue', character: 'chef', text: '來、馬上煮。我妹今天早上打電話給我哭了一下——她兒子今年六歲、第一次自己用筷子吃柏餅、她說「他長大這麼快、我都還沒準備好」。我聽完、想起我師父交班那天、我也是這個感覺、世界比你以為的快。' },

    { type: 'sfx', sound: 'chimes' },

    { type: 'wait', duration: 500 },
    { type: 'move', character: 'chef', toTile: 'stove' },

    {
      type: 'narration',
      text: '禮拜二晚上 11 點、東京塔的 333 條鯉魚旗在風裡輕輕晃、便利商店店員把今天最後一籠包子收進蒸籠。再過幾分鐘、台北時間晚上 11 點整、紐約那塊大電子看板會把美國 4 月 ISM 服務業數字打出來。再過 6 個小時、AMD 財報會在凌晨 5 點公布、AI 那條線會被重新點一次名。再過 3 天禮拜五早上、美國 4 月就業人數會出來、預估 6 萬、是不是真的軟、明天就會知道。再過 10 天 Powell 會把那個位子交出去、再過 6 天 Warsh 在參議院被表決確認。波斯灣那邊、第一批五十艘船還剩四十九艘要護出來、Fujairah 油庫的火還沒滅、Brent 還在 114——但賭盤上「結局」這條線、整晚沒動。今晚的食堂沒有油價跳水、有油價跳起來、有兩碗加蛋的甜味湯麵、一塊半的柏餅、一通早上來自妹妹的電話、跟一場「同一個晚上、有人在燒、有人在慶祝」的奇怪行情。',
      duration: 5800,
    },
  ],
};
