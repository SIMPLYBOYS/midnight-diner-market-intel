import type { Episode } from '../../engine/types';

/**
 * Sources verified 2026-06-10 (Wed JST):
 * - THE HEADLINE PAIR (both Tuesday US time, landing in Asia Wednesday):
 *   1) Trump said a deal to end the Iran war could be reached in "TWO
 *      OR THREE DAYS" and the Strait of Hormuz would reopen
 *      "IMMEDIATELY" after; called it a "very, very good deal that
 *      will not in any way allow nuclear weapons." (CNBC 6/9)
 *   2) THE SAME DAY, the US imposed NEW SANCTIONS on Iran while Trump
 *      "reviews" the possible deal. (NBC live 6/9)
 *   Carrot at maximum specificity + stick on the same news cycle =
 *   classic closing-pressure endgame.
 * - WHY "two or three days" ≠ the old "next week": it's FALSIFIABLE.
 *   The desk's "Trump 下週 tracker" (70%→25% over 6 weeks) tracked a
 *   ROLLING vague promise that could never be wrong. "Two or three
 *   days" expires Friday — if nothing signs by then, it costs him
 *   credibility. More specific = more informative either way. (This is
 *   the episode's core concept.)
 * - Oil PRICED THE DE-ESCALATION: Brent -1.3% to $93.02, WTI -1.8% to
 *   $89.67 (back below $90) on Tuesday after the "two or three days"
 *   remark. (CNBC 6/9)
 * - MOU mechanics reconfirmed: the 60-day nuclear-negotiation clock
 *   only starts WHEN the MoU is signed; Hormuz opens immediately, no
 *   tolls, both directions. (CBS live)
 * - POLYMARKET regime-fall: 1.7% (0.017), vol ~$51M — ticked up from
 *   Tuesday's 1.5% ATL close but the RANGE BOTTOM pushed lower to
 *   1.25%. Read: noise around the all-time-low plateau, not a reversal.
 *   NOT used as an action block (used ep57/58/60 — 3 of last 4); cited
 *   in narration only.
 * - Tue Asia recap (sourced via ep60's early-reads now settled): Kospi
 *   recovered roughly half of Monday's CB plunge intraday, Nikkei back
 *   toward flat — A's "80% mean-revert" call effectively confirmed; no
 *   clean Wed close prints at episode time, so Wed equity is referenced
 *   qualitatively (carry labels, value 0).
 * - sectors[].value = |%change|x100 per theme, desc; verified Tue oil
 *   prints lead; equities carried grey.
 * - Continuity & CAST: ep59 was A+B together; ep60 A solo. Tonight
 *   CUSTOMER B SOLO — she EXECUTED batch 1 of the reentry plan A drew
 *   up in ep60 (3 batches × 13%, 7-10 days apart), synced at the
 *   morning joint review. A stayed late at desk drafting the
 *   correlated-regime white paper (mentioned, off-screen). B persona:
 *   我先生, kids, retired-finance father; no 老公/老婆. Chef's wife
 *   callback: she caught the specificity shift — 「這次有講幾天、
 *   不是『下週』了」. Warsh's FIRST FOMC is 6/16-17 — six days out,
 *   the next binary; batches 2-3 wait for it. EP61 lands mid-week,
 *   keep the tone working-night, no milestone talk.
 */
export const EPISODE_61: Episode = {
  id: 'ep-61',
  date: '2026-06-10',
  title: '20260610 禮拜三晚上、Trump 換了一種承諾——「two or three days」內成 deal、Hormuz「immediately」開、但同一天美國對伊朗加新制裁（closing pressure 的胡蘿蔔+棒子）；「兩三天」跟「下週」的差別是可被證偽、禮拜五就到期；油先信了 Brent -1.3% $93.02 WTI -1.8% $89.67 跌破 $90；B 執行 ep60 reentry 第一批 13%、剩兩批等 6/16-17 Warsh 首場 FOMC',
  description: '禮拜三晚上、Tokyo 21:00。Trump 昨天（美東時間）講了一句跟過去六週都不一樣的話——deal「two or three days」內可以完成、Hormuz 會在簽署後「immediately」重開、「a very, very good deal that will not in any way allow nuclear weapons」。注意這個變化——過去六週他講的都是「下週」「this weekend」這種滾動式模糊承諾、desk tracker 從 70% 掉到 25% 就是因為它永遠不會錯也永遠不會對；「兩三天」不一樣、它可被證偽、禮拜五就到期、到期沒簽就要付信用成本。但同一天、美國對伊朗加了一輪新制裁——最大特定性的胡蘿蔔、配上同日的棒子、是教科書級的 closing pressure。油先信了——Brent -1.3% 跌到 $93.02、WTI -1.8% 跌到 $89.67、跌破 $90。Polymarket 微彈到 1.7% 但範圍底壓到 1.25%、ATL 高原沒變。B 今天執行了 ep60 a 想出來的 reentry 計畫第一批 13%、早上 joint review 同步過；剩下兩批、等 6/16-17 Warsh 首場 FOMC 這個 binary 過了再說。a 今晚留在 desk 寫 correlated-regime white paper、今晚 b 一個人來。',
  actions: [
    { type: 'bgm', track: 'chill-lofi', command: 'play' },

    {
      type: 'narration',
      text: '禮拜三晚上 9 點、東京。Trump 昨天美東時間講了一句、跟過去六個禮拜都不一樣的話——deal「two or three days」內可以完成、Hormuz 會在簽署後「immediately」重開、原話是「a very, very good deal that will not in any way allow nuclear weapons」。注意這個變化——過去六週他講的是「下週」「this weekend」這種滾動式模糊承諾、desk 內部 tracker 從 70% 掉到 25%、就是因為那種話永遠不會錯、也永遠不會對。「兩三天」不一樣——它可被證偽。禮拜五就到期。到期沒簽、他要付信用成本。一個願意把 deadline 講死的人、跟一個永遠講「快了」的人、資訊量完全不同。但同一天、美國對伊朗加了一輪新制裁——最大特定性的胡蘿蔔、配上同日的棒子、教科書級的 closing pressure。油先信了——Brent -1.3% 跌到 $93.02、WTI -1.8% 跌到 $89.67、跌破 $90、戰爭溢價繼續洩。Polymarket「伊朗政權 6 月底前垮台」微彈到 1.7%、但範圍底壓到 1.25%、all-time-low 高原沒變、讀作低檔噪音不是反轉。昨天 Tuesday 的 equity 收尾也進來了——Kospi 盤中收復 Monday CB 暴跌的約一半、Nikkei 回到平盤附近、ep60 a 的「80% mean-revert」實質兌現。B 今天執行了 reentry 計畫第一批 13%、早上 joint review 跟 a 同步過；剩兩批、等 6/16-17 Warsh 首場 FOMC。a 今晚留在 desk 寫 white paper、b 一個人來。',
      duration: 6000,
    },

    {
      type: 'market-data',
      data: {
        tickers: [
          { symbol: 'WTI 油（6/9、跌破 $90、deal 預期）', price: 89.67, change: -1.8 },
          { symbol: 'Brent 油（6/9）', price: 93.02, change: -1.3 },
          { symbol: 'Polymarket 政權垮台（6/10、ATL 高原）', price: 1.7, change: 0.2 },
          { symbol: 'Nikkei 225（Tue 回平盤 carry、Wed 收未及）', price: 64200.0, change: 0.0 },
          { symbol: 'Kospi（Tue 收復 Mon 跌約一半 carry）', price: 0, change: 0.0 },
        ],
        volatility: 21,
        vix: 17.2,
        rsi: 44.0,
        beta: 1.05,
        priceHistory: [96.45, 95.8, 95.1, 94.6, 94.2, 93.8, 93.4, 93.02],
        volumeHistory: [1380, 1100, 980, 900, 860, 820, 800, 780],
        sectors: [
          { label: 'WTI -1.8%（$89.67、跌破 $90、「two or three days」+ Hormuz immediately 預期）', value: 180, color: '#cc4422' },
          { label: 'Brent -1.3%（$93.02、戰爭溢價續洩、油市對「可證偽承諾」給的折扣比對「下週」小）', value: 130, color: '#cc4422' },
          { label: 'Polymarket +0.2pp（1.5%→1.7% 微彈、但範圍底壓到 1.25%、ATL 高原、低檔噪音非反轉）', value: 20, color: '#888888' },
          { label: 'Kospi（Tue 盤中收復 Mon CB 跌幅約一半、a 的 80% mean-revert 實質兌現、Wed 收 carry）', value: 0, color: '#888888' },
          { label: 'Nikkei（Tue 回平盤附近 carry、Wed 收未及、市場注意力移向 6/16-17 FOMC）', value: 0, color: '#888888' },
        ],
        headline: '禮拜三 21:00 JST：Trump「two or three days」內成 deal、Hormuz「immediately」開（可證偽、禮拜五到期）+ 同日美對伊朗加新制裁 = closing pressure / 油先信 WTI -1.8% $89.67 破 $90 Brent -1.3% $93.02 / Polymarket 1.7% ATL 高原範圍底壓到 1.25% / Tue Kospi 收復 Mon 跌約一半 a 的 mean-revert 兌現 / B 執行 reentry 第一批 13%、剩兩批等 6/16-17 Warsh 首場 FOMC',
      },
    },

    { type: 'enter', character: 'chef', toTile: 'stove' },
    { type: 'wait', duration: 500 },
    { type: 'move', character: 'chef', toTile: 'prep-area' },
    { type: 'wait', duration: 500 },
    { type: 'move', character: 'chef', toTile: 'stove' },
    { type: 'wait', duration: 400 },

    { type: 'enter', character: 'customer-b', toTile: 'entrance' },
    { type: 'move', character: 'chef', toTile: 'counter-center' },
    { type: 'dialogue', character: 'chef', text: 'いらっしゃい。今晚換你一個人——a 呢？我老婆今天看新聞、看到 Trump 講「兩三天內會有 deal」、她突然跟我說「欸、這次不一樣、他有講幾天、不是『下週』了——是不是真的快了？」。她追這條新聞追六個禮拜、連語氣變化都聽得出來了。' },

    { type: 'move', character: 'customer-b', toTile: 'random-stool' },
    { type: 'sit', character: 'customer-b' },

    { type: 'dialogue', character: 'customer-b', text: '師傅、晚安。a 今晚留在 desk、把我們禮拜一講好的 correlated-regime white paper 趕出來、明天要給 desk head。你太太那個觀察——「有講幾天、不是下週」——是今天我們整個 desk 早會的第一個議題、她一個人在家看電視就抓到了。這六個禮拜 Trump 講過至少六次「下週」「this weekend」、我們 tracker 從 70% 掉到 25%、因為那種承諾永遠不會錯——「下週」過了、他再講一次「下週」就好。「two or three days」不一樣——禮拜五就到期、到期沒簽、所有人都看得到他跳票。' },

    { type: 'move', character: 'chef', toTile: 'stove' },
    { type: 'wait', duration: 400 },

    { type: 'dialogue', character: 'chef', text: '可以被抓到跳票的承諾、跟永遠不會錯的承諾——這個我跟供應商打交道三十年、太熟了。供應商說「貨快到了」、我聽聽就好、因為「快」沒有定義；他敢說「貨後天早上到」、我反而會信——因為講死日期是有成本的、後天沒到、我下個月就換人。所以敢講死的、通常是真的有把握。Trump 這次敢講「兩三天」、是不是表示他手上真的有東西了？' },

    { type: 'dialogue', character: 'customer-b', text: '師傅、你這個「敢講死日期 = 有成本 = 有把握」、就是我們今天早會的結論、行話叫 skin in the game——把自己的信用押進承諾裡。我們的讀法是：Trump 過去六週的「下週」是給市場聽的氣氛話、這次的「兩三天」比較像是他看過了某個具體進度——可能 Khamenei 那邊回了字、可能條文最後一輪改完了。但我必須馬上補另一半——同一天、美國對伊朗加了一輪新制裁。胡蘿蔔講到最具體、棒子也同日落下。這不矛盾、這是 closing pressure——談判最後 72 小時、把所有籌碼一次壓上桌、逼對方在 deadline 前讓掉最後幾條。' },

    { type: 'dialogue', character: 'chef', text: '最後 72 小時把籌碼全壓上——這個我也見過。我們街上有個房東、每次跟店家續約、簽約前一週一定「忽然提一次漲租」、不是真的要漲、是要你在簽字前把其他條件讓掉——免費停車位不要了、修繕費你出。簽字前的最後施壓、是固定戲碼。所以新制裁不是 deal 要破、是 deal 要成之前的最後一擰？' },

    { type: 'dialogue', character: 'customer-b', text: '師傅、你那個房東、可以來我們 desk 上班了——「簽約前一週忽然提漲租」就是 closing pressure 的完美中文版。而且市場的讀法跟你一致——你看油：如果新制裁被讀成「deal 要破」、油該漲；結果 Brent -1.3% 跌到 $93、WTI -1.8% 跌破 $90。油市把「兩三天 + 新制裁」這一對讀成「要成交了、制裁是最後一擰」、所以戰爭溢價繼續洩。Polymarket 也一樣——微彈到 1.7%、但範圍底反而壓到 1.25%、all-time-low 的高原沒被打破。' },

    { type: 'wait', duration: 400 },

    // ── B's reentry batch 1 ──
    { type: 'dialogue', character: 'chef', text: '那你們昨天講的那個「3 批、每批 13%」的 reentry 計畫——今天動了嗎？' },

    { type: 'dialogue', character: 'customer-b', text: '師傅、動了——今天早上 joint review、a 把他禮拜二晚上想的計畫攤開、我看完只改了一個字：他寫「第一批進場條件：Polymarket 維持低檔 + Kospi mean-revert 確認」、我加上「+ 油持續洩溢價」、三個條件今天全部成立、十點半我把第一批 13% 進了。進完那一刻、說真的、手有一點抖——不是怕跌、是「買回比初次買難」這件事、做了十幾年還是一樣。' },

    { type: 'dialogue', character: 'chef', text: '買回比初次買難——這個你要解釋給我聽、我直覺上以為一樣。同樣的錢、同樣的東西、為什麼買回來比較難？' },

    { type: 'dialogue', character: 'customer-b', text: '師傅、因為買回的時候、你心裡有一個「對照組」——禮拜一我砍在低點、今天買回的價格比我砍掉的價格高、等於白白虧了中間那段。腦袋知道「砍是對的紀律、買回也是對的紀律、兩個決定各自正確」、但情緒會把它們連起來算總帳、跟你說「你來回被打了兩巴掌」。新人過不了這關、就會「砍了之後永遠空手等更低」、結果市場回去了、他還在等。我們行話叫 anchoring——被自己砍掉的那個價格錨住。' },

    { type: 'dialogue', character: 'chef', text: '被自己砍掉的價格錨住——我有過一模一樣的事。前年鮪魚漲價、我把它從 menu 拿掉、後來價格回穩、但比我拿掉時還貴一成、我拖了三個月不敢放回去、就是覺得「比我當初買的貴、虧」。後來我老婆說了一句話我才放回去——她說「客人不在乎你進貨價的歷史、客人只在乎今天這碗值不值」。我聽完隔天就進貨了。' },

    { type: 'dialogue', character: 'customer-b', text: '師傅——「客人不在乎你進貨價的歷史、只在乎今天這碗值不值」——這句話就是整個 reentry 心理學的解藥、我們教科書寫一章講不清楚的、你太太一句話講完。市場也不在乎我上禮拜砍在哪、市場只在乎「今天這個價、對不對得起今天的資訊」。今天的資訊是：mean-revert 兌現、油洩溢價、Polymarket ATL 高原、Trump 給出可證偽承諾——這個組合下、今天的價是合理的進場價、跟我上週砍在哪、無關。明天我要把你太太這句寫在 desk 白板上、署名「師傅的太太」。' },

    { type: 'wait', duration: 400 },

    // ── The next binary: Warsh's first FOMC ──
    { type: 'dialogue', character: 'chef', text: '那剩下兩批呢？什麼時候進？' },

    { type: 'dialogue', character: 'customer-b', text: '師傅、剩兩批、卡在下禮拜的一個大日子——6/16、17、Warsh 上任後第一場 FOMC。這個我們追了一個多月了——Powell 5/15 交棒、Warsh 是 Trump 推的鷹派、市場一直在猜他第一場會什麼調性。現在的麻煩是、上禮拜五美國就業數據太強、加上伊朗戰爭的通膨壓力、市場已經在 price「今年升息」。如果 Warsh 第一場就放鷹、亞洲會再吃一棒；如果他放穩、就是第二批進場訊號。所以 a 的計畫寫得清楚——第二批、FOMC 之後 48 小時內看反應決定；第三批、Hormuz 真的有船過再進。' },

    { type: 'dialogue', character: 'chef', text: '一批看央行、一批看海峽——兩批用不同的訊號把關。這個又是你們上次講的「不同供應商分批下單」。不過我問一個外行問題——如果 Trump 真的兩三天內簽了、禮拜五 deal 成了、你們會不會後悔只進了 13%、剩下的還在等？' },

    { type: 'dialogue', character: 'customer-b', text: '師傅、會——而且我們已經先把這個「會後悔」算進去了。如果禮拜五簽、市場跳空、我們第二批就買貴、那是這個計畫的已知成本。但反過來、如果禮拜五沒簽、Trump 跳票、市場回吐、我們手上還有 27% 的現金可以接——那是這個計畫的保護。分批的本質就是「用一部分的後悔、買全部的安全」。我爸退休前講過一句——「這行做得久的人、不是不後悔、是每次後悔都在計畫之內」。計畫內的後悔叫成本、計畫外的後悔才叫災難。' },

    { type: 'dialogue', character: 'chef', text: '計畫內的後悔叫成本、計畫外的才叫災難——你爸這句、跟我師父講的「備料備到剛好賣完是運氣、備料備到有剩才是本事」是同一件事。有剩、表示你沒賭到底、那個「剩」就是計畫內的成本、換來的是「賣完了客人來、你還有東西端得出來」。三十年我丟掉的備料、就是我付的保險費。' },

    { type: 'wait', duration: 400 },

    // ── Friday deadline watch ──
    { type: 'dialogue', character: 'chef', text: '所以接下來就是看禮拜五——Trump 的「兩三天」到期日。你 desk 怎麼準備？' },

    { type: 'dialogue', character: 'customer-b', text: '師傅、我們把禮拜五當一個小型 binary 處理、但跟之前不一樣的是——這次兩邊的劇本都不可怕。劇本一、簽了：油再跌、亞洲漲、我們第一批 13% 直接獲利、第二批等 FOMC 照舊。劇本二、沒簽：Trump 信用扣分、市場小回、但因為過去六週「沒簽」已經發生過六次、市場對「沒簽」的免疫力很高、頂多跌 1-2%、我們的 27% 現金反而等到更好的價。兩個劇本都活得下去、這就是 a 那個分批計畫真正的價值——不是猜對方向、是讓每個方向都有路走。' },

    { type: 'dialogue', character: 'chef', text: '每個方向都有路走——這個是計畫的最高境界。我老婆常說我們開店三十年沒倒、不是因為哪一年賺特別多、是因為「每一年的壞情況我們都先想過怎麼活」。颱風有颱風的菜單、停電有停電的做法、供應商倒了有備用的。從來不是賭對、是每條路都先踩過一遍。' },

    { type: 'dialogue', character: 'customer-b', text: '師傅、「從來不是賭對、是每條路都先踩過一遍」——這句跟 a 的 white paper 結論一字不差、他寫的是「scenario completeness beats directional accuracy」、你用開店的話講完了。明天我把這句也帶去 desk、白板上要有兩句了——你太太一句、你一句。' },

    { type: 'wait', duration: 400 },

    // ── Closing — Wednesday, B solo ──
    { type: 'move', character: 'chef', toTile: 'counter-center' },
    { type: 'dialogue', character: 'chef', text: '禮拜三、今天你進了第一批、心情應該是「做了該做的事」那種踏實——我做點下飯的：雞肉親子丼、味噌湯加蜆仔、漬物、配溫酒半合。蛋我留半熟、淋在飯上拌。今晚能坐多久？' },

    { type: 'dialogue', character: 'customer-b', text: '師傅、親子丼半熟蛋、太好了。我先生今晚帶小孩去他媽那邊吃飯、九點半來接我、我可以好好吃完。今天其實有個小插曲想跟你說——下午三點、那位 15 年的老客戶又打來、就是上禮拜四想全砍韓國 AI、被我勸住那位。他今天說「我看到 Trump 講兩三天、我想把上次沒砍的全部加倍買」。我又花了二十分鐘、把他從「全壓」勸回「分批」。同一個人、十天內、從恐慌全砍到貪婪全壓。' },

    { type: 'dialogue', character: 'chef', text: '十天、從全砍到全壓——這個擺盪比市場本身還大。我們有個老客人也是、天氣冷喊「以後天天來吃鍋」、天氣一熱就三個月不見人。人的情緒是放大器、市場跌 5%、他心裡跌 50%。你的工作就是在他心裡裝一個「減震器」。' },

    { type: 'dialogue', character: 'customer-b', text: '師傅、「人的情緒是放大器、我的工作是裝減震器」——今天第三句要上白板的話。其實這十天回頭看、市場走了一個完整的來回：紀錄高、circuit breaker、mean-revert、現在等簽字——指數差不多回到起點、但走過這一輪的人、不一樣了。a 的 framework 被打過臉又站起來、我砍過 40% 又開始買回、那位老客戶從恐慌擺到貪婪。價格回到原點、人沒有。這大概就是這行最誠實的地方——市場考的從來不是你會不會算、是你穩不穩。' },

    { type: 'dialogue', character: 'chef', text: '價格回到原點、人沒有——這句今晚收得漂亮。我開店三十年、店還是這家店、菜單沒大改、但我跟剛開店那年的我、也不是同一個人了。每一場颱風夜都留下一點東西在身上。親子丼來了、蛋半熟、蜆仔湯今天特別肥、溫酒先倒。禮拜五的事禮拜五看、今晚把這碗吃完。' },

    { type: 'sfx', sound: 'chimes' },

    { type: 'wait', duration: 500 },
    { type: 'move', character: 'chef', toTile: 'stove' },

    {
      type: 'narration',
      text: '禮拜三晚上 10 點半、東京。今天的故事是「Trump 換了一種承諾、B 買回了第一批」。Trump 講 deal「two or three days」內可成、Hormuz 簽署後「immediately」重開——跟過去六週的「下週」滾動模糊不同、「兩三天」可被證偽、禮拜五到期、跳票要付信用成本（師傅:「供應商說『快到了』聽聽就好、敢說『後天早上到』我反而信——講死日期是有成本的」= skin in the game）。但同一天美國對伊朗加新制裁——最具體的胡蘿蔔配同日的棒子、教科書級 closing pressure（師傅:「房東簽約前一週忽然提漲租、是要你把其他條件讓掉」）。油先信了：Brent -1.3% $93.02、WTI -1.8% $89.67 跌破 $90；Polymarket 微彈 1.7% 但範圍底壓到 1.25%、ATL 高原沒破、低檔噪音非反轉。Tuesday equity 收尾確認 ep60——Kospi 收復 Monday CB 跌幅約一半、Nikkei 回平盤、a 的「80% mean-revert」實質兌現。B 執行 reentry 第一批 13%（三條件全成立：Polymarket 低檔+mean-revert 確認+油洩溢價）、手還是抖——「買回比初次買難」、被自己砍掉的價格錨住（anchoring）、解藥是師傅老婆那句「客人不在乎你進貨價的歷史、只在乎今天這碗值不值」——市場只在乎今天的價對不對得起今天的資訊。剩兩批：第二批等 6/16-17 Warsh 首場 FOMC 後 48 小時、第三批等 Hormuz 真的有船過。「分批的本質是用一部分的後悔、買全部的安全」、B 爸:「計畫內的後悔叫成本、計畫外的才叫災難」（師傅師父:「備料備到有剩才是本事、丟掉的備料是保險費」）。禮拜五 deadline 兩個劇本都活得下去——「不是賭對方向、是讓每個方向都有路走」= a white paper 的「scenario completeness beats directional accuracy」（師傅:「開店三十年沒倒、不是哪年賺特別多、是每年的壞情況都先想過怎麼活」）。15 年老客戶十天內從恐慌全砍擺到貪婪全壓、B 又勸回分批——「人的情緒是放大器、我的工作是裝減震器」。這十天市場走完一個來回、指數回到起點、但走過的人不一樣了——「價格回到原點、人沒有。市場考的從來不是你會不會算、是你穩不穩」。親子丼半熟蛋配蜆仔味噌湯、禮拜五的事禮拜五看。',
      duration: 6000,
    },
  ],
};
