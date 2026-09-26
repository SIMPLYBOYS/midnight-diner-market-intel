import type { Episode } from '../../engine/types';

/**
 * Sources verified 2026-05-08:
 * - Episode timing: Friday 21:00 JST = 8:00am ET = 30 min BEFORE April NFP release
 *   (8:30am ET / 21:30 JST). Episode intentionally set pre-print since the actual
 *   April number is not yet in any search index — narrative tension is "the wait".
 * - Thu 5/7 US close: S&P 500 7,337.11 (-0.38%, off Thu intraday record), Nasdaq
 *   Comp 25,806.20 (-0.13%), Dow 49,596.97 (-313.62 pts, -0.63%). Drag from Amazon
 *   + semis (Broadcom, Micron). (TheStreet 5/7, Yahoo 5/7)
 * - Thu 5/7 jobless claims (week of May 2): 200K vs 206K consensus, prior 189K
 *   (revised). Continuing claims fell 10K to 1.77M. Q1 productivity +0.8% vs +1.1%
 *   est, prior +1.8%; Q1 ULC +2.3% vs +1.6% est, prior +4.4%. (Bloomberg 5/7)
 * - Thu 5/7 Brent settle: $100.06/bbl per CNBC oil close 5/7 — down ~2.1% from Wed
 *   $102.22 settle. (CNBC 5/7, Trading Economics)
 * - Fri 5/8 Asia close (today): Nikkei 225 -0.62% (profit-taking after Thu's record
 *   62k); KOSPI -1.88%; KOSDAQ +0.56%; ASX 200 -0.88%. (CNBC Asia 5/8)
 * - Iran-US deal: One-page 14-point MOU under review; Iran response expected within
 *   48 hours per Time/Axios reporting Wed-Thu; Trump told PBS terms include Iran
 *   shipping enriched uranium to US + pledge not to operate underground facilities.
 *   Enrichment-moratorium duration: Iran proposes 5 years, US demands 20, sources
 *   triangulate 12-15 years. Pakistan continues mediating; Pakistan FM spokesperson
 *   Tahir Andrabi to NPR: "Our hope and expectation is for an agreement sooner
 *   rather than later." (Axios 5/6, Time 5/7, Foreign Policy 5/6, NPR 5/6)
 * - Today 21:30 JST: April NFP release. Consensus +60K (some shops +55K, +65K, +67K
 *   spread); unemployment 4.3% expected unchanged; AHE consensus +0.3% MoM, +3.8%
 *   YoY. Prior March +178K. ADP private +109K Wed (above 80K consensus). April
 *   Challenger announcements: 83,387 cuts, AI cited as #1 reason for 2nd month;
 *   tech 33,361 (40% of total). Initial claims hit 57-yr low end of April.
 *   (Kiplinger preview, CNN preview 5/7, MarketsDay calendar tweet, Challenger,
 *   ADP report 5/6)
 * - Fri 5/8 = 7 days to Powell handover (5/15); 3-7 days to Warsh full Senate vote
 *   (week of 5/11).
 * - Polymarket "Will the Iranian regime fall by June 30?": yesProbability 0.045
 *   held flat for 24h after Wed evening's 5.5%→4.5% step. Volume $37.87M (was
 *   $37.70M Thu = +$0.17M overnight, smallest one-day jump in a week — line is
 *   stabilizing). 168 history points in latest.json, collectedAt
 *   2026-05-08T01:07:32Z. Last 25 used verbatim below — captures the "no movement"
 *   24h block. (public/polymarket/latest.json)
 * - sectors[].value methodology: |%change|×100 of headline asset for each theme.
 */
export const EPISODE_29: Episode = {
  id: 'ep-29',
  date: '2026-05-08',
  title: '20260508 等 NFP 那 30 分鐘',
  description: '禮拜五晚上 9 點、東京下班的人群剛散完、再過 30 分鐘 4 月 NFP 就要打進每個人的手機。預估 6 萬、上個月 17.8 萬——掉了一大截、但 ADP 禮拜三剛出 +10.9 萬高於預期。今天 Asia 一片小回——Nikkei -0.62%、KOSPI -1.88%、ASX -0.88%——黃金週後的兩天大跳之後、市場在喘息。Brent 跌到 100、伊朗在審那份 14 點一頁的備忘錄、Trump 說「他們要把濃縮鈾運給我們」。賭盤上「6/30 前伊朗政府會不會倒」這條線、過去 24 小時死死停在 4.5%。今晚的食堂、第一次有人不講盤、只在等一個還沒出來的數字。',
  actions: [
    { type: 'bgm', track: 'chill-lofi', command: 'play' },

    {
      type: 'narration',
      text: '禮拜五晚上 9 點、東京山手線最後一波下班的人剛散、便利商店的生啤 ¥168 標籤被換回 ¥198。再過 30 分鐘——紐約那邊早上 8 點半——美國勞工部會公布 4 月就業人數。預估 6 萬、上個月 17.8 萬、掉了快三分之二。但有點怪——禮拜三 ADP 出來說私人企業 4 月加了 10.9 萬人、比 8 萬的預期高出一截。一邊預估減速、一邊 ADP 卻熱、所以今晚 9 點半那個數字、可能不會像大家以為的那麼軟。今天 Asia 一片小回——Nikkei 從昨天的 6 萬 2 小回 0.62%、KOSPI 跌 1.88%、ASX -0.88%——禮拜三禮拜四連兩天大跳之後、市場在喘息。Brent 又跌一點、收 $100.06。伊朗在審一份 14 個點的一頁備忘錄、巴基斯坦在中間傳話、Trump 在 PBS 上講「他們要把濃縮鈾運給我們」。賭盤上那條 4.5% 的線、過去 24 小時沒動過一次。今晚的食堂——第一次有人不講盤、只在等一個還沒出來的數字。',
      duration: 5400,
    },

    // ── Real Fri 21:00 JST market state — Thu US close + today Asia close ──
    {
      type: 'market-data',
      data: {
        tickers: [
          { symbol: 'S&P 500 收盤', price: 7337.11, change: -0.38 },
          { symbol: 'Nikkei 225 收盤', price: 61615.00, change: -0.62 },
          { symbol: 'KOSPI 收盤', price: 7245.70, change: -1.88 },
          { symbol: 'Brent 油價', price: 100.06, change: -2.11 },
        ],
        volatility: 18,
        vix: 16.1,
        rsi: 56.4,
        beta: 1.04,
        priceHistory: [7365, 7358, 7350, 7344, 7340, 7338, 7336, 7337],
        volumeHistory: [110, 102, 96, 90, 86, 82, 78, 76],
        // sectors[].value = |%change| × 100 (basis points) of headline asset for each theme.
        // Pre-event row (今晚 21:30 NFP) intentionally not included — belongs in dialogue.
        sectors: [
          { label: 'Brent -2.11% 收 $100.06（伊朗交件中、油繼續吐）', value: 211, color: '#22cc55' },
          { label: 'KOSPI -1.88%（昨天 +6.45% 之後 profit-taking）', value: 188, color: '#cc8844' },
          { label: 'ASX 200 -0.88%（澳洲也跟著喘息）', value: 88, color: '#cc8844' },
          { label: 'Nikkei -0.62%（從 6 萬 2 小回、量縮）', value: 62, color: '#cc8844' },
        ],
        headline: '禮拜五 21:00 JST（NFP 前 30 分）：Asia 全面小回、Brent 收 $100、伊朗備忘錄審查中；Polymarket 賭盤過去 24h 紋風不動 4.5%',
      },
    },

    // Chef alone — Friday late, half hour before the print
    { type: 'enter', character: 'chef', toTile: 'stove' },
    { type: 'wait', duration: 600 },
    { type: 'move', character: 'chef', toTile: 'prep-area' },
    { type: 'wait', duration: 500 },
    { type: 'move', character: 'chef', toTile: 'stove' },
    { type: 'wait', duration: 400 },

    // Customer A enters first — analyst, came earlier than usual
    { type: 'enter', character: 'customer-a', toTile: 'entrance' },
    { type: 'move', character: 'chef', toTile: 'counter-center' },
    { type: 'dialogue', character: 'chef', text: 'いらっしゃい。今天比平常早一個小時、是不是有什麼大事？我老婆早上看新聞、跟我說「妳們那個 Nikkei 終於跌一點了」、她講得像終於下雨。' },

    { type: 'move', character: 'customer-a', toTile: 'random-stool' },
    { type: 'sit', character: 'customer-a' },

    { type: 'dialogue', character: 'customer-a', text: '師傅、再過半小時、紐約那邊會公布 4 月美國就業人數。我們桌上整個下午都在等、與其在辦公室裡盯螢幕、我先過來吃個東西、9 點半之前回去。今天連我都緊張、不是因為對賭某個方向、是因為這個數字接下來十天什麼都會被它定義。' },

    { type: 'move', character: 'chef', toTile: 'stove' },
    { type: 'wait', duration: 400 },

    { type: 'dialogue', character: 'chef', text: '就業人數有什麼好緊張的？我這條街每個月都有兩三家店開、兩三家店收、加加減減、結果都差不多。' },

    { type: 'dialogue', character: 'customer-a', text: '師傅、你這條街兩三家是真實數字、加減一下心裡有底。美國這個是把全國加起來、預估 6 萬、上個月 17.8 萬。差三倍。問題在於——禮拜三另一份 ADP 報告先出來、它說 4 月私人企業加了 10.9 萬人、比預期 8 萬還多。所以兩份預估互相打架。等下出來如果靠近 ADP、市場會說「經濟沒那麼軟、聯準會降息會更慢」、AI 那條就要還；如果靠近 6 萬、市場會說「經濟在減速、聯準會準時降」、AI 還可以再跑一陣。' },

    { type: 'dialogue', character: 'chef', text: '哦——所以同一個禮拜兩份不同的數字、一份說「還行」、一份說「在軟」、然後等一個第三份來決定誰對？這聽起來像我跟我妹妹和我老婆一起決定週末去哪——三個人三票、要看第四個人怎麼投。' },

    { type: 'dialogue', character: 'customer-a', text: '師傅、你又把一個我們桌上講半小時的事、用一句話講完。我等下要把這個說給我們組長聽。' },

    { type: 'wait', duration: 400 },

    // ── Yesterday's data + Brent continuing to drop ──
    { type: 'dialogue', character: 'chef', text: '那昨天那些不是大新聞、但你們在看的那一堆數字、出來怎麼樣？我隱約聽到「失業金 20 萬」、是好還是壞？' },

    { type: 'dialogue', character: 'customer-a', text: '失業金申請 20 萬人、比預期 20.6 萬少一點、但比上禮拜的 18.9 萬多。短話講：上禮拜創 57 年最低、這禮拜往上一格、但還是低。生產力 +0.8%、比預期 +1.1% 低；單位勞動成本 +2.3%、比預期 +1.6% 高一點——這個是「煮一碗麵的工錢漲幅」、有變貴一點點。三個數字串起來、是「軟而不快垮」、剛好是市場喜歡的位置。' },

    { type: 'dialogue', character: 'chef', text: '那油呢？前天 110、昨天 102、今天 100——三天跌 10 塊、是大事還是小事？' },

    { type: 'dialogue', character: 'customer-a', text: '是大事、但對「跌的方向」是好事。Brent 從上禮拜一最高點 114 一路收到今天 100、跌了 12%。原因不是供需、是「戰爭可能要結束」這個故事在被市場慢慢相信。伊朗那邊正在審一份 14 個點的一頁備忘錄、巴基斯坦在中間傳話。Trump 昨天上 PBS 講「伊朗要把濃縮鈾運過來」——細節不重要、市場聽到的是「這是有人在簽合約的口吻、不是有人在備戰的口吻」。' },

    { type: 'dialogue', character: 'chef', text: '14 個點的一頁、聽起來像我師父當年要把店交給我的時候、他寫一張單給我、上面 14 條——「冰箱第一格永遠放冰塊」、「滷肉每兩天加一次醬油」、「禮拜三進貨」這種。一頁、清清楚楚。' },

    { type: 'dialogue', character: 'customer-a', text: '師傅、這比喻太準。一頁的東西、就是「先解決這 14 條、其他細節之後再吵」。一頁不是因為簡單、是因為複雜的東西已經先放一邊了——伊朗的核問題還沒談完、那些放後面、先把戰爭結束。' },

    { type: 'wait', duration: 400 },

    // Customer B enters — sell-side, also early
    { type: 'enter', character: 'customer-b', toTile: 'entrance' },
    { type: 'move', character: 'customer-b', toTile: 'random-stool' },
    { type: 'sit', character: 'customer-b' },

    { type: 'move', character: 'chef', toTile: 'counter-center' },
    { type: 'dialogue', character: 'chef', text: 'いらっしゃい。今晚兩位都早來、是不是 9 點半要看那個數字？我已經多熱了一鍋湯。' },
    { type: 'move', character: 'chef', toTile: 'stove' },

    { type: 'dialogue', character: 'customer-b', text: '師傅、被你看穿。我先生今天早上問我「妳今晚會不會早點回家」、我說「9 點半美國有資料、之後我桌上會有一波 call」、他笑說「那妳乾脆 8 點就出門吃晚餐、9 點 15 回辦公室」——所以我就照著做了。' },

    { type: 'dialogue', character: 'customer-a', text: '我也差不多——比平常早一個半小時。今天我們組長 4 點就把 desk 全部站起來看一遍、確認所有客戶部位都不會在 9 點半之後爆掉。8 點放我們先吃、9 點 25 全部回到位子。' },

    { type: 'dialogue', character: 'customer-b', text: '我們的也是。今晚這個數字、不是賭它出來高還低、是賭「不要出意外」。如果出來在 4 萬到 9 萬之間、什麼事都不會發生、市場會說「跟想的差不多」；如果低於 3 萬或高於 12 萬、那就是兩邊的故事都得重寫。' },

    { type: 'dialogue', character: 'chef', text: '哦——所以你們在期待「沒驚喜」？這跟我每天進貨一樣——我希望魚販送來的鯖魚跟我訂的差不多大、不要比平常大太多、也不要比平常小太多。只要差不多、我今天的湯就好做。' },

    { type: 'dialogue', character: 'customer-b', text: '師傅、做交易的人最不愛驚喜、做廚師的也最不愛驚喜——這個道理我帶回去跟我先生講、他在外科手術房工作、應該也是這樣。' },

    { type: 'wait', duration: 400 },

    // ── Asia today profit-taking + AI breather ──
    { type: 'dialogue', character: 'chef', text: '那今天白天市場呢？我下午看 Yahoo、看到 Nikkei 跌了一點、不過跌得不多。' },

    { type: 'dialogue', character: 'customer-b', text: '今天 Asia 全面小回——Nikkei -0.62%、KOSPI -1.88%、ASX -0.88%。但這個跌、是「禮拜三禮拜四連兩天大跳之後、有人想先落袋」的那種跌、不是「壞消息」的跌。我們桌上叫做 profit-taking、也就是「賺到的人先收一點」。如果 9 點半 NFP 出來符合預期、下禮拜應該會再往上找。' },

    { type: 'dialogue', character: 'customer-a', text: '美國昨天也是——S&P -0.38%、Nasdaq -0.13%、Dow -0.63%。盤中還新高過、收盤回了一點。Amazon 跌、半導體像 Broadcom、Micron 也跌一點。但這不是 AI 故事壞了、是「禮拜三 AMD/Nvidia 那場慶祝、現在大家先冷靜兩天」。' },

    { type: 'dialogue', character: 'chef', text: '所以你們現在最怕的是 9 點半那個數字、會不會把這兩天的「冷靜」打破？' },

    { type: 'dialogue', character: 'customer-a', text: '完全對。最壞的情況不是出來特別好或特別壞、是出來「莫名其妙」——比如 NFP -10 萬、表示美國 4 月真的開始裁員了；或者 NFP +20 萬、表示沒在軟、聯準會 6 月都不一定會動。前者讓 AI 跌、後者讓全部跌。我們桌上希望它出來無聊。' },

    { type: 'wait', duration: 400 },

    // ── Polymarket — line that finally moved is now stable ──
    { type: 'move', character: 'chef', toTile: 'counter-center' },
    { type: 'dialogue', character: 'chef', text: '對了昨晚那條動了一格的線——4.5%、賭伊朗政府倒不倒——今天還是 4.5% 嗎？' },

    {
      type: 'polymarket-odds',
      data: {
        asOf: '2026-05-08T01:07:32Z',
        highlightSlug: 'will-the-iranian-regime-fall-by-june-30',
        markets: [
          {
            slug: 'will-the-iranian-regime-fall-by-june-30',
            question: 'Will the Iranian regime fall by June 30?',
            yesProbability: 0.045,
            volume: 37870761,
            endDate: '2026-06-30T00:00:00Z',
            history: [
              { t: 1778119207, p: 0.045 }, { t: 1778122806, p: 0.045 }, { t: 1778126405, p: 0.045 },
              { t: 1778130006, p: 0.045 }, { t: 1778133606, p: 0.045 }, { t: 1778137209, p: 0.045 },
              { t: 1778140821, p: 0.045 }, { t: 1778144405, p: 0.045 }, { t: 1778148005, p: 0.045 },
              { t: 1778151606, p: 0.045 }, { t: 1778155219, p: 0.045 }, { t: 1778158804, p: 0.045 },
              { t: 1778162418, p: 0.045 }, { t: 1778166020, p: 0.045 }, { t: 1778169604, p: 0.045 },
              { t: 1778173215, p: 0.045 }, { t: 1778176807, p: 0.045 }, { t: 1778180406, p: 0.045 },
              { t: 1778184008, p: 0.045 }, { t: 1778187609, p: 0.045 }, { t: 1778191206, p: 0.045 },
              { t: 1778194820, p: 0.045 }, { t: 1778198408, p: 0.045 }, { t: 1778202006, p: 0.045 },
              { t: 1778202365, p: 0.045 },
            ],
          },
        ],
      },
    },

    { type: 'dialogue', character: 'customer-b', text: '師傅、4.5%、過去 24 小時沒動過一次。這個合約過去一個禮拜的劇情是這樣——禮拜一晚上 5.5%、被 Project Freedom 嚇了三天還是 5.5%、禮拜三晚上 10 點突然動到 4.5%、然後到現在又紋風不動。下注金額也從原本一天 +130 萬、降到今天只有 +17 萬——是過去一個禮拜最少的一天。意思是、賭盤的人覺得「結局已經寫得差不多了」、不太需要再下注了。' },

    { type: 'dialogue', character: 'customer-a', text: '我們桌上一個做巨集的同事昨天講一句話我記下來——「線不動、不是沒人在看、是大家都看完了」。比起前面 48 小時的爭論、現在更像「劇本已經訂稿、等收尾」。' },

    { type: 'dialogue', character: 'chef', text: '這聽起來像我老婆每年聖誕節之前——她會跟我吵兩個禮拜、要不要回她娘家、最後一定回。前兩個禮拜的吵、其實沒在決定事情、是在準備心情。' },

    { type: 'dialogue', character: 'customer-b', text: '師傅、這個說法我先帶走、下個禮拜 Powell 交班的那一週、我打算用這套講給我們組長聽。' },

    { type: 'wait', duration: 400 },

    // ── Looking ahead — Powell handover next week, Warsh vote ──
    { type: 'move', character: 'chef', toTile: 'stove' },
    { type: 'dialogue', character: 'chef', text: '那今晚 9 點半之後、下禮拜還剩什麼大事？我老婆禮拜五早上要回娘家、我難得有兩天自己過。' },

    { type: 'dialogue', character: 'customer-b', text: '禮拜一到禮拜五、Warsh 在參議院全院表決——這是新的聯準會主席被正式確認的那一票。上次只贏 2 票、這次也緊。然後再過 7 天、5/15、Powell 任期結束、那天他要把那個位子交給 Warsh。一個禮拜、兩個重要的點都跟同一個人有關。' },

    { type: 'dialogue', character: 'customer-a', text: '對我們桌上來說、Powell 交班那一週、最危險的不是「Warsh 不會被確認」——他會、緊但會——最危險的是「Warsh 在交接的那幾天放出什麼話」。新人剛上任、他講的第一句話、會被市場聽得比 Powell 講的最後一百句都仔細。' },

    { type: 'dialogue', character: 'chef', text: '哦——這聽起來像我師父退休那天、我很緊張我講第一句話、會不會把店搞砸。後來他跟我說「你第一句話、客人不會記、客人記的是你第一個禮拜的湯頭」。' },

    { type: 'dialogue', character: 'customer-a', text: '師傅、Powell 應該也想跟 Warsh 講這句話。但 Warsh 過去寫過很多文章、講過很多硬話、市場會記他第一句話的——這就是我們桌上下禮拜要看的點。' },

    { type: 'wait', duration: 400 },

    // ── Closing — 9:25 JST, 5 minutes left ──
    { type: 'move', character: 'chef', toTile: 'counter-center' },
    { type: 'dialogue', character: 'chef', text: '快 9 點 25 了、兩位要回去看數字了吧。今晚我給兩位煮一碗清湯麵、加蛋、不要太重口味、看數字的時候吃太重會頭痛。我妹今天又寄了一盒柏餅來、我說「真的、我吃不完」、她說「就是要妳跟客人分」。' },

    { type: 'dialogue', character: 'customer-a', text: '清湯麵、加蛋、湯給多。柏餅給我兩塊帶走、9 點半之前到位子上、邊吃邊看。' },

    { type: 'dialogue', character: 'customer-b', text: '一樣、我柏餅也帶兩塊、回辦公室分給組裡。我先生剛剛訊息問我「9 點半要不要直播」、我說「我桌上已經開好 Zoom 了」、他笑說「那我就睡了、明天早上你跟我講結果」。' },

    { type: 'dialogue', character: 'chef', text: '來、馬上煮。我師父當年跟我說過——「店家最好的客人、是吃完飯就走的客人」、不是因為他不愛你聊天、是因為「他下一個地方比這裡更重要」。今晚兩位、就是這種客人。' },

    { type: 'sfx', sound: 'chimes' },

    { type: 'wait', duration: 500 },
    { type: 'move', character: 'chef', toTile: 'stove' },

    {
      type: 'narration',
      text: '禮拜五晚上 9 點 25、東京進入最後一波下班的尾聲、便利商店店員把今天最後一籠包子收進保溫櫃。再過 5 分鐘、紐約那邊早上 8 點 30、美國勞工部會公布 4 月就業人數——預估 6 萬、上個月 17.8 萬、ADP 禮拜三剛出 +10.9 萬、四萬到九萬之間就是「沒驚喜」的區間。再過 3 天、Warsh 在參議院全院表決；再過 7 天、Powell 把聯準會主席的位子交出去。波斯灣那邊、伊朗在審一份 14 個點的一頁備忘錄、Brent 從上禮拜一的 114 一路收到今天 100、Trump 講「他們要把濃縮鈾運給我們」。賭盤上「6/30 前伊朗政府會不會倒」這條線、過去 24 小時沒動過一次、停在 4.5%、有人下了 17 萬美金——是這禮拜下注最少的一天。今晚的食堂、有兩碗清湯加蛋、四塊柏餅被帶回辦公室分、一通先生睡覺前的訊息、跟一個還沒出來的數字——預定 21:30 JST、剩 4 分 38 秒。',
      duration: 5800,
    },
  ],
};
