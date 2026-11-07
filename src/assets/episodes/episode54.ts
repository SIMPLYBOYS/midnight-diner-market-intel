import type { Episode } from '../../engine/types';

/**
 * Sources verified 2026-06-02 (Tue JST):
 * - Asia mostly down — bigger pullback than ep52 B's three Monday-open
 *   scenarios (closest to scenario #1 "open down 1-2%", BUT without the
 *   afternoon rebound that scenario predicted):
 *   - Nikkei 225 -1.32%.
 *   - Kospi -1.92% (yesterday's Samsung +10% blow-out reversed; the
 *     breadth warning from ep53 — Kosdaq -2.3% Mon — was the leading
 *     indicator). Kospi level derived from Mon close 8,788.38 × 0.9808
 *     ≈ 8,619 (approximate).
 *   - ASX 200 -0.71%.
 *   - Hang Seng +0.13%; CSI 300 +0.1% — China DECOUPLED from the
 *     Iran-rhetoric drag (US-China is a separate track).
 *   - Nikkei level derived 66,934.33 × 0.9868 ≈ 66,051 (approximate).
 *   (CNBC Asia 6/2)
 * - THE RHETORIC UPGRADE: Trump told CNBC Monday "I don't care if
 *   they're over, honestly" — escalation from last week's "no hurry"
 *   (which had become routine). Question on the desk: is this NOISE
 *   (same negotiation theatre, harsher word) or SIGNAL (talks really
 *   sliding)? (CNBC 6/2)
 * - BOJ Deputy Governor Ryozo Himino spoke before a parliamentary
 *   committee Tuesday: Japan's real rates are "at extremely low
 *   levels," BoJ will "continue to raise the policy rate" — reaffirms
 *   the hawkish framework from ep53's Summary of Opinions. BUT he
 *   pointedly AVOIDED signaling timing of the next hike and said the
 *   pace depends on "the economic and price impact of geopolitical
 *   tensions in the Middle East." So: ep53's 60% June-hike pricing
 *   gets tested — not denied, not confirmed; cold water without a
 *   walk-back. (CNBC 6/2, BoJ statement)
 * - Wall Street closed records overnight on tech optimism (more
 *   context, no fresh dated close at episode time).
 * - POLYMARKET (justified — fresh new low while Trump escalated):
 *   "Will the Iranian regime fall by June 30?" hit 2.05% (intraday
 *   1.95% then 2.05%) — vol ~$46.6M, range now 1.45%-3.1%. Even as
 *   Trump told CNBC "I don't care," the regime-collapse bet went
 *   DOWN. Smart-money read: "I don't care" is the rough version of
 *   "I'm not in a hurry" — pressure tactic, not actual deal failure.
 *   Data from public/polymarket/latest.json (collectedAt 2026-06-02T01:24Z).
 * - sectors[].value = |%change|x100 per theme, desc; all 6/2 sourced.
 * - Continuity: ep53 (Mon) Customer A solo — set up "湯底 vs 配菜"
 *   (framework vs scenarios) frame, kept 八分信二分留 with content
 *   swap (added Japan-positive + BOJ-pacing). Today's events test both:
 *   Trump rhetoric harder, Himino doesn't confirm timing. Tonight
 *   CUSTOMER B (alternation 51A 52B 53A 54B); B's desk/flow + macro
 *   voice fits "the rhetoric upgrade test + BOJ timing cold water +
 *   Polymarket-as-tiebreaker again." B persona: 我先生, kids, retired-
 *   finance father. Chef's wife callback: she saw Trump's "I don't
 *   care" clip on TV ("這個聽起來不對"). A does NOT appear. Warsh
 *   first FOMC still 6/16-17.
 */
export const EPISODE_54: Episode = {
  id: 'ep-54',
  date: '2026-06-02',
  title: '20260602 禮拜二晚上、Asia 跌但中港抗跌 — Trump 升級到「I don\'t care if they\'re over」、BOJ 副總裁 Himino 不講升息時程「依中東情勢」、Polymarket 政權垮台反摜新低 2.05%（真錢讀升級是 pressure tactic 不是 deal failure）',
  description: '禮拜二晚上、Tokyo 21:00。今天 Asia 答案落在 ep52 b 三情境的第 1 個——開盤跌、但沒有預期中的「下午反彈」——Nikkei -1.32%、Kospi -1.92%、ASX -0.71%。但有意思的是中港抗跌——Hang Seng +0.13%、CSI 300 +0.1%、跟伊朗線解耦。今天兩個驅動：第一、Trump 對 CNBC 講「I don\'t care if they\'re over, honestly」、從上週的「不急」routine 升級到「不在乎」rough；第二、BOJ 副總裁 Himino 今天上國會、reaffirms 升息框架（日本實質利率「極低」、繼續調升）、但避談 timing、說節奏「依中東情勢」——ep53 的 60% 六月升息押注被潑了點冷水（沒否認、沒確認）。最有意思的——牆上那 Polymarket 在 Trump 升級的同一天反而摜到新低 2.05%（範圍底部 1.45%）。拿真錢押的人讀「I don\'t care」是「I\'m not in a hurry」的粗版、pressure tactic、不是 deal failure。錢的腳跟 Trump 的嘴繼續分歧。今晚 customer-b 來。',
  actions: [
    { type: 'bgm', track: 'chill-lofi', command: 'play' },

    {
      type: 'narration',
      text: '禮拜二晚上 9 點、東京。今天 Asia 的答案、落在 ep52 customer-b 三情境的第 1 個——開盤跌、但沒有預期中的「下午反彈」、整天就是收在低點。Nikkei -1.32%、Kospi -1.92%、ASX -0.71%。有意思的是中港抗跌——Hang Seng +0.13%、CSI 300 +0.1%、跟伊朗那條線解耦。今天有兩個驅動同時推：第一、Trump 昨天上 CNBC、講「I don\'t care if they\'re over, honestly」——從上週「不急」那種已經被市場 routine 化的講法、升級到「不在乎」這種 rough 版。問題是——是 noise 升級、還是 signal 升級？第二、BOJ 副總裁 Himino 今天上國會、reaffirms 升息框架——「日本實質利率仍在極低水準」、「會繼續調升政策利率」——這是 ep53 那份 Summary of Opinions 的 reaffirm。但他刻意避談 timing、說節奏會「依中東情勢的經濟與價格影響」。等於對昨天市場推升的「6 月升息機率 60%」、潑了點冷水：沒否認、沒確認、留懸念。最有意思的是牆上那個 Polymarket——「伊朗政權 6 月底前垮台」、在 Trump 升級嘴上那句的同一天、反而摜到新低 2.05%、範圍底部已經到 1.45%。拿真錢押的人讀「I don\'t care」是「I\'m not in a hurry」的粗版、pressure tactic、不是 deal failure。錢的腳跟 Trump 的嘴、繼續分歧。今晚 customer-b 來。',
      duration: 6000,
    },

    {
      type: 'market-data',
      data: {
        tickers: [
          { symbol: 'Kospi（6/2 收、bigger drop）', price: 8619.0, change: -1.92 },
          { symbol: 'Nikkei 225（6/2 收、Trump rough）', price: 66051.0, change: -1.32 },
          { symbol: 'ASX 200（6/2 收）', price: 8667.0, change: -0.71 },
          { symbol: 'Hang Seng（6/2、抗跌）', price: 0, change: 0.13 },
          { symbol: 'CSI 300（6/2、解耦伊朗）', price: 0, change: 0.1 },
        ],
        volatility: 19,
        vix: 15.4,
        rsi: 52.0,
        beta: 1.04,
        priceHistory: [65300, 65500, 65900, 65964, 66329, 66934, 66400, 66051],
        volumeHistory: [780, 720, 700, 660, 720, 700, 740, 820],
        sectors: [
          { label: 'Kospi -1.92%（昨天 Samsung +10% 今天反向、Kosdaq 警訊兌現）', value: 192, color: '#cc4422' },
          { label: 'Nikkei -1.32%（Trump 升級「I don\'t care」+ BOJ timing 模糊）', value: 132, color: '#cc4422' },
          { label: 'ASX 200 -0.71%（澳洲也跟著拉、亞太普遍被伊朗 rhetoric drag）', value: 71, color: '#cc4422' },
          { label: 'Hang Seng +0.13%（中港抗跌、跟伊朗解耦、美中是另一條軌道）', value: 13, color: '#22cc55' },
          { label: 'CSI 300 +0.1%（A 股也微紅、跟亞太其他三跌一漲方向相反）', value: 10, color: '#22cc55' },
        ],
        headline: '禮拜二 21:00 JST、Asia 收盤：Trump 升級「I don\'t care if they\'re over」rough 版 / BOJ Himino reaffirms 升息但避談 timing「依中東情勢」/ Nikkei -1.32% Kospi -1.92% ASX -0.71% / 中港抗跌（Hang Seng +0.13% CSI 300 +0.1%、跟伊朗解耦）/ Polymarket 政權垮台反摜新低 2.05% 範圍底 1.45%（讀升級是 pressure tactic）',
      },
    },

    {
      type: 'polymarket-odds',
      data: {
        asOf: '2026-06-02T01:24:09Z',
        highlightSlug: 'will-the-iranian-regime-fall-by-june-30',
        markets: [
          {
            slug: 'will-the-iranian-regime-fall-by-june-30',
            question: 'Will the Iranian regime fall by June 30?',
            yesProbability: 0.0205,
            volume: 46617526,
            liquidity: 413696,
            endDate: '2026-06-30T00:00:00Z',
            history: [
              { t: 1779760806, p: 0.0285 }, { t: 1779793205, p: 0.0265 }, { t: 1779825606, p: 0.027 },
              { t: 1779858005, p: 0.0255 }, { t: 1779890407, p: 0.0255 }, { t: 1779922807, p: 0.0275 },
              { t: 1779955210, p: 0.0275 }, { t: 1779987612, p: 0.0265 }, { t: 1780020008, p: 0.0245 },
              { t: 1780052406, p: 0.0225 }, { t: 1780088407, p: 0.0235 }, { t: 1780120807, p: 0.0215 },
              { t: 1780153210, p: 0.0225 }, { t: 1780185612, p: 0.023 }, { t: 1780218009, p: 0.0215 },
              { t: 1780250421, p: 0.0225 }, { t: 1780282806, p: 0.0225 }, { t: 1780315209, p: 0.0225 },
              { t: 1780347608, p: 0.0195 }, { t: 1780363384, p: 0.0205 },
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

    { type: 'enter', character: 'customer-b', toTile: 'entrance' },
    { type: 'move', character: 'chef', toTile: 'counter-center' },
    { type: 'dialogue', character: 'chef', text: 'いらっしゃい。我老婆今天午餐時看新聞、看到 Trump 對著鏡頭講「I don\'t care if they\'re over」、立刻跟我說「這個聽起來不對、之前是『不急』、現在變『不在乎』、語氣變了」。然後下午她又看到 Kospi 跌、Nikkei 跌、跟我說「你看、嘴上一變、市場就跌」。她今天直覺很準、我自己也覺得這次跟之前不太一樣。' },

    { type: 'move', character: 'customer-b', toTile: 'random-stool' },
    { type: 'sit', character: 'customer-b' },

    { type: 'dialogue', character: 'customer-b', text: '師傅、晚安、你太太這個觀察、今天我們 desk 從早上開盤就在討論——「不急 vs 不在乎」、到底是「噪音升級」還是「訊號升級」。a 上禮拜跟你講的「鈍化」、那是「不急」第一次升級到第十次的故事。今天是「不急」變成「不在乎」、是一個新動作、不是 routine 的延伸。問題是：這個新動作、是 Trump 嘴上又加強一階的 negotiation theatre、還是真的在告訴市場「他現在比較願意讓 deal 破」？' },

    { type: 'move', character: 'chef', toTile: 'stove' },
    { type: 'wait', duration: 400 },

    { type: 'dialogue', character: 'chef', text: '噪音升級還是訊號升級——這個分別好。我跟我老婆吵架也學到——平常嫌我「東西不收」是 routine、突然加一句「再不收我就丟掉」、那個「我就丟掉」要當真。今天 Trump 加的那句「I don\'t care」、是哪一種？' },

    { type: 'dialogue', character: 'customer-b', text: '師傅、要分辨「噪音升級 vs 訊號升級」、最快的辦法就是——「看別人怎麼讀」。如果是訊號升級、押 deal 破的賭盤會跳、油會彈、市場會崩。今天的結果——油沒大彈（昨天還跌破 $88）、Polymarket「政權垮台」反而摜到新低 2.05%、亞洲指數雖然跌但中港還微紅。這四個獨立指標、給的訊號一致——「I don\'t care」被市場讀成噪音升級、不是訊號升級。如果真的訊號升級、不會出現「賭盤新低」這種反向反應。' },

    { type: 'wait', duration: 400 },

    // ── Polymarket: the strongest tiebreaker ──
    { type: 'dialogue', character: 'chef', text: '牆上那個賭盤、今天 2.05%、範圍底部已經到 1.45%——這個越走越低、是不是表示真錢的人越來越不信會破？' },

    { type: 'dialogue', character: 'customer-b', text: '師傅、就是這個。你想——這禮拜一還有「IAEA 軍用級鈾」那條、禮拜天兩支筆沒簽、今天又加上 Trump「I don\'t care」三層壞消息——按理這個賭盤該往上跳。結果它反而摜到新低、範圍下限也跟著推下來。意思很清楚——拿真錢押的人、把所有這些壞消息都讀成「持續的 negotiation theatre」、不是 deal 真的要垮。range 收斂這件事更重要——上限從 6.5% 一路降到 3.1%、表示「最壞情境」的可能性也在縮。' },

    { type: 'dialogue', character: 'chef', text: '上限縮、下限也縮——這個我懂、就是「賭盤越來越篤定一個範圍」、不再上下亂跳。我們店裡天氣對生意影響、夏天剛開始時客流估計從 ±30 顆牡蠣、現在縮到 ±10 顆——不是天氣消失、是我們對天氣與客流的關係越來越熟。賭盤縮也是同樣的事？' },

    { type: 'dialogue', character: 'customer-b', text: '師傅、你這個「對天氣與客流關係越來越熟」的比喻、是我聽過 implied-vol compression 最白話的版本。市場跟賭盤的精度、隨著對情勢的理解加深、會收斂。所以「賭盤新低 + 範圍收斂」這兩件事一起發生、是市場上最強的「我們不慌」訊號——比新聞報導、比官方聲明都可靠。' },

    { type: 'wait', duration: 400 },

    // ── BOJ Himino: cold water without walk-back ──
    { type: 'dialogue', character: 'chef', text: '另一條——今天 BOJ 副總裁 Himino 上國會、a 昨天說 60% 六月升息押注、今天有沒有變？' },

    { type: 'dialogue', character: 'customer-b', text: '師傅、Himino 今天講的話很細膩、我們桌上分析半天——他「reaffirm 升息框架」、講「日本實質利率仍在極低水準、會繼續調升」、這是 ep53 那份鷹派 Summary 的重申。但他刻意避談「6 月那場會」會不會動、說節奏「依中東情勢的經濟與價格影響」。等於對昨天 60% 那個數字——「沒否認、也沒確認、留懸念」。今天市場下調了一點、60% 退到 56%——還比上禮拜五的 55% 高一點點、但「鐵定 6 月升」的氣氛被打掉了。' },

    { type: 'dialogue', character: 'chef', text: '沒否認、沒確認、留懸念——這個是央行的標準動作。我跟員工溝通有時候也會：他問我「下個月會不會調薪」、我說「依業績」——其實心裡有譜、但講出來會綁住自己、不講就保留彈性。Himino 也這套？' },

    { type: 'dialogue', character: 'customer-b', text: '師傅、央行的核心 KPI 就是「保留彈性」。明確承諾「6 月一定升」、如果到時候情勢不對、要食言、信譽崩盤；明確說「不會升」、如果到時候要升、市場大震盪。所以最聰明的講法就是 Himino 今天這套——「會升、但時機看情況」。等於把決定權留在自己手上、市場只能 Tweet 機率、不能逼他走特定路徑。學會看懂這種「不講」的價值、是做 macro 最重要的訓練。' },

    { type: 'wait', duration: 400 },

    // ── China decoupling ──
    { type: 'dialogue', character: 'chef', text: '今天還有一件——你說中港抗跌、跟伊朗解耦。為什麼香港跟上海可以不跟著亞太其他三個跌？' },

    { type: 'dialogue', character: 'customer-b', text: '師傅、這個觀察很重要、是這禮拜開始浮出來的新主題。Trump 對中國的政策軌道、跟對伊朗的政策軌道、是分開的兩條——他罵伊朗「I don\'t care」、不會直接波及中國。反過來、上禮拜 Trump-Xi 那邊有些檯面下進展（中國說「願意調整對伊朗購油立場」）、所以中港今天的「不跟跌」、是「美中緩和」這條軌道在自己走。所以亞太指數現在要看「兩條軌道」——中東一條、美中一條。中東今天緊、美中今天鬆、所以中港穩、其他三個跌。' },

    { type: 'dialogue', character: 'chef', text: '兩條軌道分開走——這個讓我想起我們街上做生意的故事。我們有時候跟海鮮商談的不順、但跟蔬菜商談得很好、整體成本還是 OK——不要把所有供應商當成一條線、要分開看。中國跟伊朗不同條軌道，跟我看不同供應商，是同一回事？' },

    { type: 'dialogue', character: 'customer-b', text: '師傅、你這個「不同供應商不要當一條線」、就是我們講的「multi-track analysis」白話版。資深的 analysts 訓練的就是「在腦袋裡同時跑好幾條獨立軌道、別讓他們互相污染」。Trump-Iran、Trump-Xi、Trump-Powell/Warsh、Trump-EU、每一條都有自己的進度條。今天伊朗那條繃緊、不代表 Trump-Xi 那條也繃緊——它們有時候反向、有時候同向、有時候無關。看懂這個就知道為什麼中港今天能解耦。' },

    { type: 'wait', duration: 400 },

    // ── Closing — Tuesday, B alone ──
    { type: 'move', character: 'chef', toTile: 'counter-center' },
    { type: 'dialogue', character: 'chef', text: '禮拜二、市場小跌、你大概一整天在解釋「為什麼不要慌」——我做點下飯的：鹽烤鯖魚、味噌湯、玉子燒、香物、白飯給你裝滿。配溫酒半合。你先生跟小孩今晚怎樣？能坐多久？' },

    { type: 'dialogue', character: 'customer-b', text: '師傅、鹽烤鯖魚太好了、今天從早 desk 到晚都在開會勸客戶別追跌、我講到嘴乾。我先生今晚帶小孩去吃迴轉壽司、我下班直接過來這、可以坐到九點半。今天 desk 跟昨天比、忙的方向完全反——昨天勸別追高、今天勸別追跌。同樣是勸、方向相反、講久了我也累。' },

    { type: 'dialogue', character: 'customer-b', text: '其實今天我想跟你聊的、不是 Trump 也不是 BOJ、是「散戶情緒指數」這個我自己每天在跑的小指標——昨天 desk 收到 47 通「要不要追 Kospi 8,788 新高」的詢問、今天收到 53 通「Kospi 跌了要不要砍」的詢問。同一群人、兩天、問完全相反的問題——這正是 a 上禮拜講的「市場讀懂方向、但讀不懂時間」在散戶層的最日常版本——他們連方向都讀不出來、只是隨價格波動 chase。我這份工作有一半是擋這個。' },

    { type: 'dialogue', character: 'chef', text: '同一群人兩天問相反的問題——這個我們店裡也有。生意好的禮拜五、客人會問「下禮拜要不要加菜」、生意差的禮拜一、同一個客人問「是不是哪裡做錯了」。其實菜沒變、服務沒變、是天氣換、客流換、他們的「感覺」跟著換。資深的店長會學會「不要被禮拜五的開心、跟禮拜一的擔心、一起騙到」——你說的「擋」、跟我老婆教我的「不要被一週兩端的情緒拉走」、是同一件事。' },

    { type: 'dialogue', character: 'customer-b', text: '師傅、你太太這個「不要被一週兩端的情緒拉走」、明天我要寫進我們 desk 的內部訊息板給新人看。我們這行訓練 trader 最難的、就是「情緒會說『買！買！買！』時要按住、會說『賣！賣！賣！』時要分辨」。她講得比所有教科書都簡潔。鹽烤鯖魚配溫酒、明天早盤再戰。' },

    { type: 'dialogue', character: 'chef', text: '我老婆會很高興她那句被你 desk 引用。鯖魚剛烤好、皮酥、肉還有油、玉子燒今天甜一點、漬物加芥末提神、溫酒先倒。明天再戰——情緒一週兩端、按住中間。今晚這頓、慢慢吃。' },

    { type: 'sfx', sound: 'chimes' },

    { type: 'wait', duration: 500 },
    { type: 'move', character: 'chef', toTile: 'stove' },

    {
      type: 'narration',
      text: '禮拜二晚上 10 點半、東京。今天的故事是「Trump 升級到 I don\'t care、但市場讀成 pressure tactic 不是 deal failure」。Asia 答案落在 ep52 b 三情境的第 1 個（開盤跌、但沒等到下午反彈）——Nikkei -1.32%、Kospi -1.92%（昨天 Samsung +10% 今天反向、Kosdaq 警訊兌現）、ASX -0.71%。中港抗跌（Hang Seng +0.13% CSI 300 +0.1%）——Trump-Iran 跟 Trump-Xi 兩條軌道分開走、亞太指數現在要看兩條軌道、B 講的「multi-track analysis」（師傅:「不同供應商不要當一條線」）。「不急 vs 不在乎」——是噪音升級、還是訊號升級？四個獨立指標一致投票「噪音」：油沒大彈、Polymarket 摜新低 2.05%（範圍底 1.45%、上限從 6.5% 一路降到 3.1%、range 收斂是「市場越來越篤定範圍」的最強訊號、比新聞官方都可靠）、中港微紅、Hang Seng/CSI 300 不跟跌。BOJ 副總裁 Himino reaffirm 升息框架但避談 timing「依中東情勢」——對 ep53 60% 六月升息押注潑點冷水（沒否認沒確認留懸念）、市場下調到 56%（還比上週 55% 高一點點）。「央行核心 KPI 就是保留彈性」、Himino 這套「會升但時機看情況」是教科書級的、學會看懂這種「不講」的價值是做 macro 最重要的訓練。Customer B 今天從早勸客戶別追跌、昨天勸別追高——「同一群散戶、兩天問完全相反的問題」、a 上週「市場讀懂方向但讀不懂時間」在散戶層的最日常版本（師傅老婆「不要被一週兩端的情緒拉走」、按住中間）。鹽烤鯖魚配溫酒、明天再戰。',
      duration: 6000,
    },
  ],
};
