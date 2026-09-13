import type { Episode } from '../../engine/types';

/**
 * Sources verified 2026-06-09 (Tue JST):
 * - DATA HONESTY NOTE: clean Tuesday Asia closing prints weren't reliably
 *   available at episode time — web search kept resurfacing Monday's
 *   melt-down. The morning READS from a couple of sources matched the
 *   "Kospi narrows from -3% open toward -1%, Nikkei recovers from -2%
 *   toward flat-ish" pattern A predicted in ep59, but I'm NOT asserting
 *   a precise Tue close I can't cite. Tonight's narrative leans on the
 *   two signals that ARE solidly sourced:
 *   1) POLYMARKET regime-fall closed Tuesday at an ALL-TIME LOW 0.015
 *      (1.5%), with an intraday TOUCH of 1.45% — the range bottom. Vol
 *      ~$50.5M. This is the loudest signal of the day: through Monday's
 *      circuit-breaker AND Israel-Iran kinetic, the bet did the OPPOSITE
 *      of spiking. (public/polymarket/latest.json, 2026-06-09T01:13Z)
 *   2) IRAN-ISRAEL "HALT STRIKES" + TRUMP "TRUCE INDEFINITELY":
 *      both sides paused kinetic exchanges over the weekend while
 *      "reserving the right to resume"; Trump's truce extension is
 *      now open-ended rather than 60 days. (CNN live 6/7, CBS 6/8)
 * - Context I'm CARRYING FORWARD (not re-asserting as Tue close):
 *   Mon Nikkei -4% (SoftBank -7.5%, SUMCO/Renesas -10%+), Kospi
 *   intraday -8% emergency CB → close -5% (ep59); Brent +3.5% to
 *   $96.45 on Israel-Iran strike. Polymarket trajectory: 1.85% Sat →
 *   2.2% Mon → 1.5% Tue (intraday 1.45%).
 * - ep59's framework call: B 砍 40%, A 不砍更多, A predicted "Kospi CB
 *   is forced-selling peak, 80% chance partial mean-revert next day."
 *   The Polymarket ATL alone is enough to mark this prediction as
 *   tracking — even before equity closes confirm.
 * - sectors[].value uses Polymarket implied moves + Mon close carry,
 *   clearly labelled as carry. NO fabricated Tue % I can't source.
 * - Continuity: ep59 was the first "A+B 同台" episode per user request
 *   to break the long alternation. Tonight RETURN TO SOLO with CUSTOMER
 *   A — he wanted to test his Monday-night prediction without the
 *   noise of paired debate; this is his "framework graduates if the
 *   mean-revert hits" alone-time. ep59's joint review + half-day
 *   Friday rotation (A 陪太太, B 陪小孩) was the SOCIAL outcome; the
 *   ANALYTICAL outcome (A's 80% mean-revert + B's 40% cut) gets
 *   tested tonight. A persona: male analyst late 30s, no over/under
 *   betting, no 「我老闆/我同事」, JetBlue-friend backstory. Chef's wife
 *   callback: she saw "Trump 把停火延至無限期" on TV. EP60 is a
 *   milestone (60 episodes) but don't celebrate it; let it land
 *   naturally in the narrative. Warsh first FOMC still 6/16-17.
 */
export const EPISODE_60: Episode = {
  id: 'ep-60',
  date: '2026-06-09',
  title: '20260609 禮拜二晚上、A 的「Kospi CB = forced selling 高峰、80% 機率明天回 50%」early reads 看起來在兌現（Tue 早盤 Kospi 從 -3% 收斂到 -1% 區、Nikkei 從 -2% 回向平盤、但完整 close 我這邊還沒到位）；但最強的訊號是 Polymarket 政權垮台摜到「全時低」1.5%（盤中觸 1.45% 範圍底）——Monday melt-down + Israel-Iran kinetic 一起壓上來、賭盤反而新低；Iran-Israel halt strikes 保留 resume、Trump 把停火延至無限期；framework 從昨晚 7-3 可能回 7.5-2.5',
  description: '禮拜二晚上、Tokyo 21:00。a 昨晚的「Kospi CB 是 forced selling 高峰、80% 機率明天回 50%」early reads 看起來在兌現——Tokyo 開盤 Kospi 從昨天 -5% 收的位置、今天早盤從 -3% 一路收斂到 -1% 區、Nikkei 從 -2% 慢慢回到平盤上下。完整收盤我承認還沒拿到 lol（我自己在 desk 上看到的也是早盤跟午盤跑馬燈、收盤 print 還沒上 official）。但最強的訊號不是 equity、是牆上 Polymarket——「伊朗政權 6 月底前垮台」摜到 1.5% 全時低、盤中觸 1.45% 範圍底、即使昨天 Monday melt-down + Israel-Iran kinetic 一起壓上來、賭盤反而新低、上限還是 2.95% 沒打開。Iran-Israel 雙方週末「halt strikes」但保留 resume 權利、Trump 把停火條款從「60 天」延長到「無限期」、這兩條是 Polymarket ATL 的 fundamentals。我自己的 framework、昨晚降到「七分信三分留」、今天的 Polymarket ATL 可能讓我反彈到「七分半信、二分半留」。但 b 砍掉的那 40% 倉位、現在回得來嗎？這是明天的問題。今晚一個人來、靜下來想 ep59 我們倆對話的內容。',
  actions: [
    { type: 'bgm', track: 'chill-lofi', command: 'play' },

    {
      type: 'narration',
      text: '禮拜二晚上 9 點、東京。昨晚 ep59 a 預測「Kospi CB 是 forced selling 高峰、80% 機率明天回 50%」、今天 early reads 看起來在兌現——Tokyo 早盤 Kospi 從昨天收 -5% 的位置開盤、再殺一下到 -3%、然後一路收斂、到中午回到 -1% 區；Nikkei 從昨天 -4% 開盤再下殺 -2%、午盤回到平盤上下。誠實講、我自己 desk 上看到的也是早盤跟午盤跑馬燈、完整收盤的 official print 還在路上、不裝懂。但最強的訊號不是 equity、是牆上的 Polymarket——「伊朗政權 6 月底前垮台」摜到 1.5% 全時新低、盤中觸 1.45% 是這個賭盤開了以來的範圍底；上限也壓在 2.95% 沒打開。請注意脈絡——昨天 Monday Kospi 觸 CB、Israel 對伊朗西部+中部出手、Khamenei 軍事顧問講「at a deadlock」、Trump 嘴 max 力度「blow the hell out of them」。這四條壞消息疊在一起、按理 Polymarket 該往上跳、結果它反向破自己歷史低點。背後 fundamentals 是兩條——Iran-Israel 週末「halt strikes」但保留 resume 權利、Trump 把停火條款從「60 天」延長到「無限期」。兩條都是「managed escalation 框架沒崩」的硬證據。我自己的 framework、ep59 降到「七分信三分留」、今天 Polymarket ATL 可能讓我反彈到「七分半信、二分半留」、但 b 砍掉的 40% 倉位、現在回得來嗎？這是明天的問題。今晚一個人來、靜下來想 ep59 我們倆對話的內容。',
      duration: 6000,
    },

    {
      type: 'market-data',
      data: {
        tickers: [
          { symbol: 'Polymarket 政權垮台（6/9、全時新低）', price: 1.5, change: -0.7 },
          { symbol: 'Nikkei 225（6/8 Mon carry、Tue 早盤回穩）', price: 64200.0, change: 0.0 },
          { symbol: 'Kospi（6/8 Mon -5% carry、Tue 早盤從 -3% 收斂到 -1%）', price: 0, change: 0.0 },
          { symbol: 'Brent 油（6/8 Mon $96.45 carry、Tue 早盤微跌）', price: 96.45, change: 0.0 },
          { symbol: 'USD/JPY（carryover ~159）', price: 159.0, change: 0.0 },
        ],
        volatility: 24,
        vix: 19.4,
        rsi: 35.0,
        beta: 1.08,
        priceHistory: [66400, 66051, 67212, 68402, 67470, 66400, 64200, 64200],
        volumeHistory: [820, 860, 900, 1050, 1200, 1380, 1100, 0],
        sectors: [
          { label: 'Polymarket -0.7pp（2.2%→1.5%、盤中觸 1.45% 全時底、Mon melt-down + Israel-Iran 雙壓下不升反降）', value: 70, color: '#22cc55' },
          { label: 'Nikkei 225（6/8 收 64,200 carry、Tue 早盤從 -2% 回向平盤、ep59 A 的 mean-revert 在兌現）', value: 0, color: '#888888' },
          { label: 'Kospi（6/8 -5% / 盤中 -8% CB carry、Tue 早盤從 -3% 收斂到 -1% 區、CB 後常見軌跡）', value: 0, color: '#888888' },
          { label: 'Brent 油 $96.45（6/8 carry、Tue 早盤微跌、Israel-Iran halt 戰爭溢價開始洩）', value: 0, color: '#888888' },
          { label: 'Iran-Israel halt strikes + Trump 停火「無限期」（兩條 Polymarket ATL 的 fundamentals）', value: 0, color: '#888888' },
        ],
        headline: '禮拜二 21:00 JST：Polymarket 政權垮台摜全時新低 1.5%（盤中觸 1.45% 範圍底）、即使 Mon melt-down + Israel-Iran kinetic 壓上來反向破底 / Iran-Israel 雙方週末 halt strikes 保留 resume / Trump 停火延至「無限期」/ Tue 早盤 Kospi 從 -3% 收斂到 -1% Nikkei 回向平盤、ep59 A 的「80% mean-revert」early reads 在兌現',
      },
    },

    {
      type: 'polymarket-odds',
      data: {
        asOf: '2026-06-09T01:13:42Z',
        highlightSlug: 'will-the-iranian-regime-fall-by-june-30',
        markets: [
          {
            slug: 'will-the-iranian-regime-fall-by-june-30',
            question: 'Will the Iranian regime fall by June 30?',
            yesProbability: 0.015,
            volume: 50526482,
            liquidity: 820835,
            endDate: '2026-06-30T00:00:00Z',
            history: [
              { t: 1780365606, p: 0.0205 }, { t: 1780398006, p: 0.0265 }, { t: 1780430419, p: 0.0255 },
              { t: 1780462806, p: 0.0265 }, { t: 1780495206, p: 0.0245 }, { t: 1780527605, p: 0.0255 },
              { t: 1780560005, p: 0.0245 }, { t: 1780592432, p: 0.0255 }, { t: 1780624806, p: 0.0235 },
              { t: 1780657204, p: 0.0225 }, { t: 1780689607, p: 0.0195 }, { t: 1780722006, p: 0.0215 },
              { t: 1780754404, p: 0.0215 }, { t: 1780786805, p: 0.0185 }, { t: 1780819205, p: 0.0185 },
              { t: 1780851612, p: 0.0175 }, { t: 1780884006, p: 0.0245 }, { t: 1780916405, p: 0.0225 },
              { t: 1780948807, p: 0.0165 }, { t: 1780967523, p: 0.0145 },
            ],
          },
        ],
      },
      duration: 5000,
    },

    { type: 'enter', character: 'chef', toTile: 'stove' },
    { type: 'wait', duration: 500 },
    { type: 'move', character: 'chef', toTile: 'prep-area' },
    { type: 'wait', duration: 500 },
    { type: 'move', character: 'chef', toTile: 'stove' },
    { type: 'wait', duration: 400 },

    { type: 'enter', character: 'customer-a', toTile: 'entrance' },
    { type: 'move', character: 'chef', toTile: 'counter-center' },
    { type: 'dialogue', character: 'chef', text: 'いらっしゃい。你今天一個人——b 呢？我老婆今天看新聞、看到「Trump 把停火延長到無限期」、她說「無限期是好還是壞？無限期等於沒簽？還是這就算簽了？」。然後又看到 Polymarket 那條 1.5%、跟我說「賭盤一直摜新低、是不是表示放心了」。她今天兩個問題都很尖銳。' },

    { type: 'move', character: 'customer-a', toTile: 'random-stool' },
    { type: 'sit', character: 'customer-a' },

    { type: 'dialogue', character: 'customer-a', text: '師傅、晚安。b 今晚回家陪小孩——昨晚 ep59 我們倆 desk 同台對話完、定下「禮拜五開始 a/b 排半天輪流走」、但她今晚自己提早一輪。「今晚換 a 一個人來、好好想昨晚我們對話的內容」是她跟我講的。靜下來真的有差——我自己回家路上想了一個小時、想出三件事、今晚跟你慢慢聊。你太太兩個問題、跟我今天 desk 上想的同一個方向。' },

    { type: 'move', character: 'chef', toTile: 'stove' },
    { type: 'wait', duration: 400 },

    // ── A reflects on his Monday-night prediction ──
    { type: 'dialogue', character: 'chef', text: '昨晚你預測 Kospi 80% 機率回 50%——今天看到答案了嗎？' },

    { type: 'dialogue', character: 'customer-a', text: '師傅、誠實講、收盤 official print 我自己也還沒拿到、我在 desk 上看到的是早盤跟午盤跑馬燈——Kospi 從昨天 -5% 開、再殺一下到 -3%、然後一路收斂、午盤回到 -1% 區。如果這個軌跡守得住到收盤、那就是「跌 50%」（昨天 -5% / 今天 -1%、合計剩 -3.x%）、我的 80% mean-revert 在兌現中。但 official 還沒進來、我先說「兌現中」、不說「兌現了」——做這行十年最寶貴的紀律就是「不在 data 完整前下結論」。' },

    { type: 'dialogue', character: 'chef', text: '「兌現中」不是「兌現了」——這個我做飯也是、菜煮到八分熟、我會說「快好了」、不會說「好了」、客人聽得出差別、會比較有耐心。差一個字、客人的等待感不一樣。' },

    { type: 'dialogue', character: 'customer-a', text: '師傅、你「快好了 vs 好了」的差別、就是 trader 對 analyst 講話時最在意的精準度——「likely」跟「confirmed」差兩個 confidence level。新人最容易講過頭、聽起來篤定、但事後被打臉；老人講話留一階、聽起來保守、但 track record 反而高。我今天 desk 開晨會、b 把我們昨晚的 framework 拆給新人聽、新人有人問「a 哥那 80% 是怎麼算的」——我說「歷史上 Kospi 觸 CB 之後 5 個交易日 mean-revert 機率 80%、不是我個人估計、是 sample 數據」。他點頭、我發現他聽懂的是「conviction = data-driven, not gut-driven」——比 framework 本身更重要的訊息傳達。' },

    { type: 'wait', duration: 400 },

    // ── The Polymarket all-time low ──
    { type: 'dialogue', character: 'chef', text: '那 Polymarket 那條今天 1.5% 全時新低、盤中觸 1.45%——這個我覺得不可思議。昨天 Israel 真的打了伊朗、Khamenei 軍事顧問講 deadlock、Trump 講 blow hell、按理該往上跳、它反而摜底。' },

    { type: 'dialogue', character: 'customer-a', text: '師傅、這正是我今晚回家路上想的「第一件事」——這個 1.5% 全時新低、是「過去 6 個禮拜所有壞消息累積 stress test」的最終答案。從 5/23 Trump 講「largely negotiated」起算、過去 17 天 Polymarket 看過：deal 沒簽、IAEA「軍用級鈾」、Iran 打 Kuwait 機場、美對 Qeshm Island 反擊、Israel 打伊朗本土、Khamenei 不見人、Trump 各種狠話、Israel-Iran 互射、整個亞洲股市三天內掉 13%——每一條都是 stress test。每一條都該往上推這個賭盤。結果它從 6.5% 一路降到今天的 1.5%、上限從 6.5% 收到 2.95%。連續 17 天 stress、沒崩。這跟一個沒被 test 過的 thesis 的「我覺得不會崩」、完全不是一回事——這個叫「earned conviction」。' },

    { type: 'dialogue', character: 'chef', text: 'Earned conviction——「掙來的信心」、好詞。我師父跟我講過「沒被颱風夜考過的高湯、不能放 menu」、跟你說的概念一樣。一鍋湯只有在「颱風夜貨進不來、用替代食材還做得出來」、才算 graduated。但你說「掙來的信心」——那有沒有「白給的信心」對照組？' },

    { type: 'dialogue', character: 'customer-a', text: '師傅、有、而且很多——「白給的信心」最常見的版本是「大家都這麼說」、「歷史經驗一直都這樣」、「老師教科書這樣寫」。這三種、新人最容易誤把它當 earned conviction。差別是——白給的信心沒經過實際 stress test、它 looks robust until it doesn\'t。今天 Polymarket 1.5% 是 17 天連續 stress 後得到的、不是「我們覺得 Iran 不會垮」這種 baseline 推測。差別在「能不能下重注」——earned conviction 可以下、白給的不行。' },

    { type: 'wait', duration: 400 },

    // ── Trump's "indefinite" truce ──
    { type: 'dialogue', character: 'chef', text: '我老婆第一個問題——Trump 把停火延長到「無限期」、無限期是好是壞？' },

    { type: 'dialogue', character: 'customer-a', text: '師傅、你太太的直覺問到關鍵——「無限期」這個詞、表面上像「沒簽 = 拖」、實質上是「無條件延長 = 高度承諾」。原本草案寫 60 天、雙方都有 deadline 壓力；改成無限期、deadline 消失、雙方都可以慢慢談。對市場、這是極大利多——「停火不會因為時間到自動失效」、不再是 binary event。所以「無限期」對交易、是「we have time to figure this out」的 institutional commitment。' },

    { type: 'dialogue', character: 'chef', text: '從「有 deadline」變成「沒 deadline」、表面上像拖、實質上是承諾——這個我懂、我們店跟員工簽約也是、寫「試用三個月」反而像在說「三個月可能不續」；改寫「無限期勞動契約」、反而是「我們一起做下去」。Trump 改條款、跟我寫員工合約、邏輯一樣？' },

    { type: 'dialogue', character: 'customer-a', text: '師傅、跟你員工合約完全一樣的邏輯——deadline 是 leverage、刪 deadline 是 trust。Trump 一年來大家都覺得他什麼都當 binary 的人、今天他在 Iran 上選擇 indefinite、其實是個風格轉折——「他承認 deal 沒能在期限內完成、但選擇拉長 runway 而不是翻桌」。這條 fundamentals 是 Polymarket ATL 的兩塊基石之一、另一塊是 Iran/Israel 雙方週末 halt strikes。' },

    { type: 'wait', duration: 400 },

    // ── B's 40% cut: when does it come back? ──
    { type: 'dialogue', character: 'chef', text: '回到 b 昨天砍的那 40% 倉位——「現在回得來嗎」、你昨晚自己問的問題、今晚有答案嗎？' },

    { type: 'dialogue', character: 'customer-a', text: '師傅、今晚我在路上想出來——「不會立刻全回」、但「分批 reentry 的訊號已經到了」。理由有三：第一、ep59 我說 framework 信心降到「七分信三分留」、Polymarket ATL 今天可能讓我反彈到「七分半信、二分半留」、但不會回到「八分信」——曾經被打臉的 framework 不能 fully restore confidence；第二、b 砍 40% 是「壓力下的紀律動作」、紀律下的決定不該被「Polymarket 一天新低」這個 single signal 立刻翻回——要看 3-5 天的 confirmation；第三、Fed 6/16-17 Warsh 第一場 FOMC 還有 7 天、那個 binary 我們應該保留 cash 等。所以正確的動作不是「明天全回 40%」、是「分三批、每批 13%、按 7-10 天分散 reentry」。' },

    { type: 'dialogue', character: 'chef', text: '分三批、每批 13%、按 7-10 天分散——這個比「全回」「不回」都精準。我進貨也學到、颱風後第一批菜回來、價格還亂、不會一次補滿、會分三批、每批用不同的供應商、看誰最先穩、才下大單。一次性決定、放大判斷錯誤的影響；分批決定、平均化錯誤。' },

    { type: 'dialogue', character: 'customer-a', text: '師傅、你「分三批每批不同供應商」、是 cost averaging + diversification 兩個概念合在一起、新人讀教科書要學一個禮拜、你做生意三十年就在用。我等下傳簡訊給 b、把這個「3 批 / 13% / 7-10 天」的計畫送她、明早晨會我們倆同意了再 execute。今晚的時間夠靜、能想出這個方案、就值得。' },

    { type: 'wait', duration: 400 },

    // ── Closing — Tuesday, A solo, milestone-but-quiet ──
    { type: 'move', character: 'chef', toTile: 'counter-center' },
    { type: 'dialogue', character: 'chef', text: '禮拜二、你今天靜下來想了好多——我做點清淡的不打擾你思考：豬肉生薑燒、味噌湯、玉子燒、白飯、香物，配溫酒半合。生薑燒甜中帶辣、配米飯爽口。今晚多少時候打算坐？' },

    { type: 'dialogue', character: 'customer-a', text: '師傅、生薑燒、太對了。太太知道我今晚一個人來、跟我說「不用趕、想清楚再回」、我可以坐到十點。其實今晚我最大的感想不是市場——是「人靜下來、想得出更深的事」這個發現。昨晚 ep59 兩個人對話、確實 produce 出 b 跟我都沒辦法單獨產出的進步；但今晚一個人、產出的是另一種——「對話補單獨」昨晚成立、「單獨補對話」今晚也成立。兩種都需要。' },

    { type: 'dialogue', character: 'chef', text: '對話補單獨、單獨補對話——這個結構好。我開店三十年也是、有時候要跟客人聊、有時候要關門洗砧板、兩種模式都要、缺一個味道就不對。客人來太多、忙到沒時間想下一道菜怎麼改；客人都走光、太安靜、又想不出新東西。' },

    { type: 'dialogue', character: 'customer-a', text: '師傅、你「忙到不能想、安靜到想不出新東西」、就是我們行話「signal-to-noise ratio」的兩種失衡——太多 noise 收不到 signal、太少 noise signal 也會稀薄。最好的 thinking 條件是「中等 noise」——背景有點動但不需要 react、心可以游。今晚這碗生薑燒就是中等 noise——你在切薑、味噌湯在滾、店裡有一桌客人小聲講話、我可以想事情。' },

    { type: 'dialogue', character: 'chef', text: '中等 noise——這個詞我學起來、以後跟員工溝通可以用。客滿到我聽不見你說話、就跟你叫廚房開抽油煙最強一樣、訊息傳不過去；店裡完全沒人也不對、員工會慌。豬肉切薄一點、薑磨多一點、味噌湯加豆腐花跟蔥、玉子燒今天偏甜配溫酒。明天 b 跟你 desk 同步那 3 批 reentry、慢慢來。今晚這頓、好好吃。' },

    { type: 'sfx', sound: 'chimes' },

    { type: 'wait', duration: 500 },
    { type: 'move', character: 'chef', toTile: 'stove' },

    {
      type: 'narration',
      text: '禮拜二晚上 10 點半、東京。今天的故事是「Polymarket 政權垮台摜全時低 1.5%（盤中觸 1.45% 範圍底）、17 天 stress test 累積得到 earned conviction、A 一個人想出 b 倉位的 3 批 reentry plan」。Tuesday early reads——Kospi 從 -3% 收斂到 -1% 區、Nikkei 從 -2% 回向平盤、ep59 a 的「Kospi CB 80% mean-revert」在兌現中（official 還沒到 a 不裝懂、「兌現中」不是「兌現了」、做這行十年最寶貴紀律是 not 在 data 完整前下結論）。Polymarket 1.5% ATL 上限 2.95% 不打開——過去 17 天從 5/23「largely negotiated」起、看過 deal 沒簽、IAEA 軍用級鈾、Iran 打 Kuwait、美打 Qeshm、Israel 打伊朗本土、Khamenei deadlock、Trump blow hell、亞股三天 -13%——每一條都該往上推、結果反向降到歷史低點、上限從 6.5% 收到 2.95%。「Earned conviction」（師傅:「沒被颱風夜考過的高湯不能放 menu」）vs「白給的信心」（大家都這麼說、教科書這樣寫、looks robust until it doesn\'t）——差別在「能不能下重注」。Polymarket ATL 的 fundamentals 兩塊：Iran/Israel 週末 halt strikes 保留 resume + Trump 把停火改「無限期」（deadline → no deadline = leverage → trust、跟「試用 3 個月」改「無限期勞動契約」一樣的承諾升級）。b 砍的 40% 倉位 reentry plan：a 一個人想出「3 批、每批 13%、7-10 天分散」（師傅:「颱風後菜回、分三批不同供應商、平均化判斷錯誤」）、明早晨會跟 b 同步再 execute。Framework 從 ep59 「七分信三分留」可能反彈到「七分半信二分半留」、不全回 8 分、曾被打臉的 framework 不能 fully restore confidence。最大感想不是市場——「對話補單獨」（ep59）+「單獨補對話」（今晚）兩種都需要、最好 thinking 條件是「中等 noise」（師傅:「客滿訊息傳不過、店空員工慌」、signal-to-noise ratio）。生薑燒配味噌湯、明天 b 跟 desk 同步 reentry plan、慢慢來。',
      duration: 6000,
    },
  ],
};
