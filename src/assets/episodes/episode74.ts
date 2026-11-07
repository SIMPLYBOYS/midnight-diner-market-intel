import type { Episode } from '../../engine/types';

/**
 * Sources verified 2026-07-28 (Tue, ~12:00 JST) — FOMC 前夜／等待日：
 * 「錢的價格、是所有價格底下的那個價格」.
 *
 * DATE: verified before writing (standing discipline since ep69's removal).
 * Box clock 7/28 11:06 CST = 12:06 JST — Tokyo is in its lunch break, the
 * 7/28 CLOSE has NOT printed yet (close 15:00 JST, ~3h out). So this
 * episode is deliberately framed as FOMC-EVE / a waiting day and does NOT
 * cite a 7/28 Tokyo close — I refuse to invent one. Hard anchors are the
 * confirmed 7/27 US closes, Alphabet's 7/22 print, and the 7/28 weak-open
 * forecast, all labelled as such. Sequence: last aired ep73=7/22(Wed);
 * 7/23-7/27 not dramatised (user asked specifically for 7/28); this is
 * ep74=7/28(Tue). Gap acknowledged, not backfilled.
 *
 * — FOMC. The meeting is 7/28-29. Decision released 7/29 14:00 ET =
 *   7/30 03:00 JST, Warsh press conference 14:30 ET. So the meeting BEGINS
 *   today; Tokyo trades all of 7/29 not knowing and reacts 7/30 (Thu).
 *   Consensus: HOLD is "highly likely" (rates have sat at 3.50-3.75% for
 *   four straight meetings per ep70's sourcing). TWO things make it tense:
 *   (1) NO DOT PLOT this meeting — the Fed withholds its usual "where each
 *   member sees rates going" chart, so there's less guidance to lean on;
 *   (2) "the room is cornered" — oil in the $90s + a 39-yr-low yen +
 *   sticky inflation argue against cuts, while an AI/chip wobble argues
 *   against hikes; and Warsh's hawkish tenor (ep67) keeps a hawkish-
 *   surprise tail live. This week also brings CB Consumer Confidence and
 *   Boeing/Coca-Cola earnings. (TradingKey FOMC preview, CME 7/28, Money
 *   Morning 7/17, Kiplinger, Bloomberg 7/27)
 *
 * — ALPHABET (reported 7/22 after the close — the ep73 setup paying off,
 *   and the capstone of B's own 3-question ladder):
 *   Revenue $119.8B, +24% YoY; diluted EPS $9.11 (beat). GOOGLE CLOUD
 *   +82% YoY to $24.8B — blew past the ~63% Street expected; cloud
 *   operating margin 35.6%; cloud backlog $514B (+$50B sequentially).
 *   Demand didn't just hold, it ACCELERATED. AND THE STOCK FELL ~3.65%
 *   after hours to $329.43. Why: Q2 capex a record $44.9B (+107% YoY);
 *   FY2026 capex guidance RAISED to $195-205B (mid $200B) from $180-190B,
 *   with more flagged for 2027; and Q2 FREE CASH FLOW WENT OUTRIGHT
 *   NEGATIVE at -$5.9B (ep73 had noted Q1 FCF already -47% YoY to $10.1B;
 *   now it's below zero). The verdict on the ladder: 需求 real→賺得到?→
 *   憑什麼貴? and now — even demand ACCELERATING gets sold if the bill
 *   grows faster than the business. (CNBC 7/22, Investing.com 7/22,
 *   Seeking Alpha 7/22, MLQ 7/22, Eastern Herald 7/23)
 *
 * — 7/27 (Mon) US close, the "sell expensive AI, the rest is fine" tape,
 *   an echo of ep73's TOPIX-vs-Nikkei split: S&P 500 +0.02% to 7,413.18
 *   (flat); Nasdaq -0.18% to 24,932.08; Dow +0.51% (+262.83 pts) to
 *   52,210.08 — value/defensives up, oil retreated. Chip doubt deepened:
 *   VanEck Semi ETF (SMH) -2%+; Nvidia -5%, AMD -5%, Teradyne -4%;
 *   SanDisk -11% on memory weakness. "Mounting doubts over returns from
 *   billions of AI spending." (WashPost 7/27, CNBC 7/27, Motley Fool 7/27)
 *
 * — 7/28 (Tue) Tokyo OPEN (not close): forecast to open weak, range
 *   63,800-64,500, pressured by the US Nasdaq/SOX losses; semis to weigh.
 *   (BigGo 7/28) Shown as an open/forecast in the panel, never as a close.
 *
 * — THE SPINE that unifies both threads: the price of MONEY sits underneath
 *   every other price. Alphabet dares to burn $200B because the bet is that
 *   AI pays off years out — and whether a "spend now, earn much later" bet
 *   makes sense is decided by how expensive money is. So the FOMC (the
 *   price of money) and Alphabet's capex (a very long-dated bet) are the
 *   SAME question. Higher-for-longer under Warsh is exactly what punishes
 *   long-duration bets — which is why the expensive AI names are what bleed
 *   while the Dow holds. (ties ep73's long-rates thread.)
 *
 * — sectors[].value = |%change|x100 of that row's indicator asset, sorted
 *   desc. The AI-doubt cluster is the sourced 7/27 moves; Alphabet is its
 *   7/22 after-hours move, date-tagged. The green Dow row is the value-up
 *   contrast. The grey value:0 row is the FOMC — a pending EVENT, not a
 *   price (ep68 convention); it must not be scaled. Index LEVELS live in
 *   tickers. Nikkei ticker is an OPEN-forecast, labelled 收盤未定.
 * — priceHistory: decline from the sourced 7/22 close 66,116 toward the
 *   sourced 7/28 open-forecast ~64,000; the intermediate points are
 *   shape-only (no 7/23-7/27 Nikkei closes cited). volumeHistory coils
 *   DOWN into the meeting — the "everyone waits" tell, decorative. vix/rsi
 *   are mood, not sourced prints.
 *
 * — CAST: appearances A=5 (ep67,68,70,72,73), B=4 (ep67,70,71,72) →
 *   tonight CUSTOMER B SOLO (→5:5). Earned twice over: (1) she OPENED the
 *   3-question ladder with the Micron「需求是真的」framing (ep71), so the
 *   Alphabet verdict — demand accelerating yet sold — is HER loop to close,
 *   humbly (she must own that "需求是真的" turned out not to equal "good
 *   news"); (2) a market frozen before a scheduled event, client
 *   positioning, and "do less before the unknowable" are her sell-side desk
 *   / 減震器 turf (ep56/61/71). She references A only as a fellow regular
 *   who "上禮拜三跟師傅講今晚 Google 開獎" (ep73) — knowledge from comparing
 *   notes at the diner, NOT a shared desk (CONTINUITY DEBT). Personas: B
 *   female, 我先生 + kids, 我的 desk, the 15-yr client, retired finance-
 *   lifer dad (30 yrs). Her recurring: 「我的工作是裝減震器」(ep61),
 *   「我們真正的價值不是預測未來、是幫客戶在恐慌時不做傻事」(ep56),
 *   dad's 「計畫內的後悔叫成本、計畫外的才叫災難」(ep61).
 *   CHEF: layman — must have FOMC/dot plot translated (聯準會＝管美國利息的
 *   委員會; dot plot＝每個委員猜以後利息走到哪的一張圖); 老闆 not employee;
 *   我老婆; 師父. His wife is kept OFF the stock question (her FOMO loop
 *   closed ep72, household-prices in ep73) — tonight the everyman entry is
 *   CHEF'S OWN experience of waiting (a health inspection / typhoon warning:
 *   you don't overstock before you know), which mirrors the whole market
 *   sitting on its hands tonight.
 * — Menu mirrors the theme: chef deliberately did NOT over-prep tonight
 *   ("我今天也在等") — a light, flexible, small set (太刀魚, 水茄子, 鰯梅煮,
 *   ジュンサイ, 冷酒), distinct from ep70/71/72/73. No Polymarket.
 */
export const EPISODE_74: Episode = {
  id: 'ep-74',
  date: '2026-07-28',
  title: '20260728 禮拜二晚上、全場屏息等聯準會——會議今天開始、後天一早出結果（這次沒有 dot plot、Warsh 主持、市場覺得聯準會被逼到牆角：油在 $90、日圓近 40 年最弱、卡在既不能降也難升）。而 Google 上週三開獎給了整條線最後的判決：雲端 +82% 遠超預期、需求不只是真的、還在加速——股價卻盤後跌 3.65%，因為它把今年資本支出上修到 $2,000 億、上季自由現金流直接轉負 -59 億。需求好到爆、還是被賣。B 一個人來、收她六月那條「需求是真的」的線，也講在猜不準的大事前面、最好的部位是更小的部位',
  description: '禮拜二晚上、東京。今天全世界都在等同一件事——聯準會（管美國利息的那個委員會）今天開始開會、後天一早出結果。市場幾乎確定不動、但今晚很緊，因為兩件事：一，這次它不給那張「每個委員猜以後利息走到哪」的圖，等於少了一根拐杖；二，大家覺得它被逼到牆角——油在 $90、日圓快四十年最弱、通膨黏著，想降降不了；但 AI、晶片在鬆動，想升又危險。卡住。所以今天成交量一路縮、大家把手收回來、誰都不想在答案出來前站錯邊。另一條線今天收尾：Google 上禮拜三開獎——雲端業務年增 82%、遠超原本預期的 63%，需求不只是真的、還在加速。結果股價盤後跌了 3.65%。為什麼？因為它同一天把今年要燒在 AI 上的錢、從一千八百多億上修到兩千億，而且上一季真正剩下的現金、直接變成負五十九億。生意好到爆、老闆戶頭卻是負的。B 一個人來——六月是她跟師傅說「需求是真的、都簽了三五年」，今晚她要誠實地收這條線：需求可以是真的、可以好到超乎想像、同時還是壞消息，如果為了餵它燒的錢比賺的還快。而今晚真正的功課、是「等」——她那位做了十五年的老客戶又想在聯準會前先卡位，被她按住：在一件你知道會來、但猜不準的事前面，最好的部位，常常是更小的部位。而師傅今天剛好也在等——他明天要衛生檢查，所以今天他什麼都沒多備。',
  actions: [
    { type: 'bgm', track: 'chill-lofi', command: 'play' },

    {
      type: 'narration',
      text: '禮拜二晚上、東京、悶熱。今天全世界的市場、都在等同一件事——聯準會、也就是美國管利息的那個委員會、今天開始開會、後天一早、我們這邊禮拜四天還沒亮的時候、出結果。大家幾乎都認定它這次不會動利息。但今晚市場很緊、緊在兩個地方：第一、這次它不給那張大家平常會盯的圖——那張圖畫的是「每一個委員、自己猜以後利息會走到哪」——不給、等於少了一根拐杖；第二、大家覺得它被逼到牆角了——油還在 $90、日圓跌到快四十年最弱、東西一直在漲、所以它想降利息也降不了；可是另一邊、AI、晶片這幾個禮拜在鬆動、經濟有點虛、它想升利息又怕捅破什麼。卡在中間、動不了。所以今天一整天、成交量一路縮、大家把手都收回來、誰都不想在答案出來以前、站錯邊。另外還有一條線、今天要收尾——上禮拜三、Google 那家公司開獎、雲端生意年增了 82%、遠遠超過原本大家猜的 63%；需求不只是真的、還在加速。結果它的股票、盤後跌了 3.65%。今晚 b 一個人來。',
      duration: 6000,
    },

    {
      type: 'market-data',
      data: {
        tickers: [
          { symbol: '日經 225（7/28 早盤走弱、預估 63,800-64,500、收盤未定——全場等聯準會）', price: 64150.0, change: 0.0 },
          { symbol: 'S&P 500（7/27 收、幾乎平盤）', price: 7413.18, change: 0.02 },
          { symbol: 'Nasdaq（7/27 收、晶片拖累）', price: 24932.08, change: -0.18 },
          { symbol: 'Dow（7/27 收、+262 點、防禦／價值收紅、油價回落）', price: 52210.08, change: 0.51 },
          { symbol: 'Alphabet（7/22 盤後 -3.65% 收 $329.43、雲端 +82% 卻被賣）', price: 329.43, change: -3.65 },
        ],
        volatility: 18,
        vix: 18.0,
        rsi: 40.0,
        beta: 1.1,
        priceHistory: [66116, 65600, 65100, 64700, 64400, 64200, 64100, 64000],
        volumeHistory: [2200, 1900, 1700, 1500, 1400, 1250, 1100, 1000],
        sectors: [
          { label: 'SanDisk 7/27 -11%（記憶體轉弱、AI 需求回收疑慮的震央）', value: 1100, color: '#dd3333' },
          { label: 'Nvidia 7/27 -5%（AI 晶片龍頭、對「這麼多錢到底賺不賺得回來」最敏感）', value: 500, color: '#dd3333' },
          { label: 'AMD 7/27 -5%（晶片股同步、領跌）', value: 500, color: '#dd3333' },
          { label: 'Teradyne 7/27 -4%（半導體測試設備、連坐）', value: 400, color: '#dd3333' },
          { label: 'Alphabet 7/22 盤後 -3.65%（雲端 +82% 遠超預期、卻因 capex 上修到 $2,000 億＋上季自由現金流轉負 -$59 億而被賣）', value: 365, color: '#dd3333' },
          { label: '半導體 ETF（SMH）7/27 逾 -2%（連跌、對 AI 投報率的懷疑從華爾街擴散到亞洲）', value: 200, color: '#dd3333' },
          { label: 'Dow 7/27 +0.51% 收 52,210（+262 點、防禦／價值收紅、油價回落——賣的還是「貴的 AI」、不是「全部」）', value: 51, color: '#22cc55' },
          { label: '聯準會今天開議、後天一早出結果（幾乎確定不動、但無 dot plot、Warsh 主持、被逼到牆角——這是全場屏息的原因）', value: 0, color: '#888888' },
        ],
        headline: '禮拜二 21:00 JST：全場屏息等聯準會——會議今天開始、後天（我方禮拜四凌晨）出結果、幾乎確定不動但無 dot plot、Warsh 主持、市場覺得聯準會被逼到牆角（油 $90、日圓近 40 年最弱、通膨黏＝難降；AI／晶片鬆動＝難升）→ 成交量一路縮、大家收手不站邊 / Google 7/22 開獎收尾：雲端 +82% 遠超預期（需求還在加速）股價卻盤後 -3.65%——因 2026 capex 上修到 $195-205B（中值 $2,000 億）＋上季自由現金流轉負 -$5.9B：需求好到爆、還是被賣 / 7/27 美股「賣貴的 AI、其餘還好」：Dow +0.51% 收紅、Nasdaq -0.18%、SanDisk -11% Nvidia／AMD -5% Teradyne -4% SMH 逾 -2%',
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
    { type: 'dialogue', character: 'chef', text: 'いらっしゃい、b。今天客人少、妳挑位子坐。先冰的。跟妳說、我今天看新聞、整版都在寫「全世界都在等聯準會」——等一個會、等到全世界都停下來。我一個煮飯的看不懂：一個會、有這麼重要嗎？重要到大家寧可什麼都不做、就坐在那邊等？' },

    { type: 'move', character: 'customer-b', toTile: 'random-stool' },
    { type: 'sit', character: 'customer-b' },

    { type: 'dialogue', character: 'customer-b', text: '師傅、晚安、謝謝。你這個問題、其實是今晚最好的問題。我這樣跟你講——那個會決定的、不是「一個」價格、是「所有價格底下的那個價格」。它決定的是「錢本身值多少」、也就是「借錢要付多少利息」。師傅、你想、你店裡每一樣東西的成本、房租、貸款、進貨、送貨、全部、底下都墊著一個東西：借錢貴不貴。那個委員會，動的就是那個。' },

    { type: 'move', character: 'chef', toTile: 'stove' },
    { type: 'wait', duration: 400 },

    { type: 'dialogue', character: 'chef', text: '所有價格底下的那個價格……妳等一下、讓我想個畫面。就像——如果明天有人要宣布、我們這整條街的房租、要重新訂一次。那今天晚上、整條街沒有一家店敢簽約、敢請人、敢囤貨。大家都會先停下來、等那個新房租出來。是這個意思嗎？' },

    { type: 'dialogue', character: 'customer-b', text: '師傅、就是這個意思、而且你這個比喻、比我們公司訓練新人用的還好。因為房租是你所有成本裡最底層的一個——它一動、你上面所有的算盤全部要重打。錢的利息、對整個市場、就是那條街的房租。所以今天不是「一個會」很重要、是「那個會、會動到所有人腳底下那塊地」。這就是為什麼全世界今天都把手收回來、坐著等。' },

    { type: 'dialogue', character: 'chef', text: '那大家覺得它明天會怎樣？會把房租調高、還是不動？' },

    { type: 'dialogue', character: 'customer-b', text: '師傅、幾乎所有人都猜「不動」。但今晚大家緊張、不是怕它動——是怕它「嘴巴」。這次它有個地方不太一樣：它平常會附一張圖、上面畫著每一個委員自己猜「以後利息會走到哪」——大家很依賴那張圖來抓方向。這次、它不給那張圖。' },

    { type: 'dialogue', character: 'chef', text: '不給圖……那不就等於，人家問你「以後生意會怎樣」、你只回「明天照常營業」、後面全部不講？' },

    { type: 'dialogue', character: 'customer-b', text: '師傅、你又講白了。就是這樣——它只告訴你「今天不動」、但「以後怎麼走」它閉口不談。而市場最怕的、從來不是壞消息、是「不知道」。少了那張圖、大家就得自己猜主席明天記者會上、語氣是硬還是軟。而這位主席、你可能還記得、上個月剛上任的時候、就是出了名的硬。所以今晚大家不是在等一個數字、是在等一種「口氣」。' },

    { type: 'wait', duration: 400 },

    // ── the room is cornered ──
    { type: 'dialogue', character: 'chef', text: '妳剛剛說它「被逼到牆角」。它不是最有權力的那個嗎？怎麼會被逼到牆角？' },

    { type: 'dialogue', character: 'customer-b', text: '師傅、有權力、跟有選擇、是兩回事。它現在是這樣——一邊、油在 $90、日圓跌到快四十年最弱、東西一直在漲；要壓住漲價、它應該「升」利息、或至少不能降。可是另一邊、AI、晶片這幾個禮拜在鬆動、經濟有點虛；要顧住經濟、它又不該升。所以它往左往右都會踩到人。權力很大、但每一條路都有代價。這就叫被逼到牆角。' },

    { type: 'dialogue', character: 'chef', text: '這個我懂——太懂了。夏天最熱那幾天、我廚房後面那台老冷氣、就是這樣整我。開強一點、電費爆、跳電；開弱一點、客人喊熱、廚房像蒸籠、師傅們受不了。我怎麼調都有人罵。我那時候才知道、「我是老闆、我決定」這句話、在有些日子裡、一點都不威風——因為每個選項都是痛的、我只是在挑「哪一種痛」。' },

    { type: 'dialogue', character: 'customer-b', text: '師傅、「我只是在挑哪一種痛」——這句我要抄回去、送給那個委員會。他們明天做的、不是「找到正確答案」、是「在幾個都會痛的選項裡、挑一個比較能交代的」。大家把它想得太神——好像它手上有一個正確答案、只是還沒公布。其實它跟你調那台老冷氣、是一樣的處境。' },

    { type: 'wait', duration: 400 },

    // ── the discipline of waiting: do less ──
    { type: 'dialogue', character: 'chef', text: '那妳今天在你那邊、都在做什麼？既然大家都在等。' },

    { type: 'dialogue', character: 'customer-b', text: '師傅、我今天做的、幾乎都是「攔人」。你記得我那位往來十五年的老先生嗎？他今天一早又打來——這次不是要砍、是相反、他要「卡位」。他說「聯準會前面、我先進場布局、答案一出來我就賺到了」。師傅、這句話聽起來很積極、對不對？其實它跟「恐慌殺出」、是同一種病的兩面。' },

    { type: 'dialogue', character: 'chef', text: '卡位怎麼會是病？先準備好、不是很聰明嗎？' },

    { type: 'dialogue', character: 'customer-b', text: '師傅、問題在「他猜不準」。他不知道明天是硬還是軟——沒有人知道、連我都不知道。他所謂的「卡位」、其實是「在一件我猜不準的事情上、先押一把大的」。如果他賭對、他覺得自己很神；如果賭錯、他明天早上一起床、就被那個他控制不了的答案、扣在一個很差的位置上。我跟他說了一句我一直記著的話：在一件你知道會來、但你猜不準的事情前面、最好的部位、常常是「更小的部位」、不是更大的。' },

    { type: 'dialogue', character: 'chef', text: '在猜不準的事情前面、最好的部位是更小的部位……可是他會不會覺得妳太保守、讓他錯過？' },

    { type: 'dialogue', character: 'customer-b', text: '師傅、他一開始就是這樣說我的。所以我跟他算了一筆帳——不是賺賠的帳、是「後悔」的帳。我爸做了三十年、留給我一句：「計畫內的後悔、叫成本；計畫外的後悔、才叫災難。」意思是——如果你先想好「我只放這麼小一點、萬一錯了我認」、那你就算錯、也是計畫內的、你睡得著。可是如果你重押、然後被一個你根本猜不到的答案掃到、那個後悔、是你事前完全沒準備的、那種才會讓人做傻事、甚至一夜之間毀掉一個人。我不是在幫他少賺、我是在幫他、把「災難」變成「成本」。' },

    { type: 'dialogue', character: 'chef', text: '把災難變成成本……b、這句我今天要記一整晚。我進貨其實也是。颱風要來的前一天、我從來不會把冰箱塞滿——不是我不想多賺，是萬一颱風轉向、店開不了、那一整批就爛在裡面、那是災難。我寧可少備一點、颱風真來了我少賺、那個少賺、是我算過的、我認。' },

    { type: 'dialogue', character: 'customer-b', text: '師傅、你這個「颱風前不塞滿冰箱」、就是今晚全世界市場在做的事、你早就會了。今天成交量一路在縮——那不是大家沒興趣，是全世界都在「不塞滿冰箱」。大家不是看空、也不是看多、大家是在「等那個他們控制不了的東西先出來」。這種時候手癢、硬要做點什麼的人、通常就是等一下受傷的人。' },

    { type: 'wait', duration: 400 },

    // ── B closes her own ladder: Alphabet ──
    { type: 'dialogue', character: 'chef', text: '那 Google 那個呢？妳剛進門說今天要收一條線。是 a 上禮拜三跟我講的那個「開獎」嗎？他那天說重點不是賺多少、是要花多少。' },

    { type: 'dialogue', character: 'customer-b', text: '對、就是那個、a 上禮拜三先跟你墊過話了。師傅、這條線、其實是我六月開的頭、所以今晚我想自己把它收掉、而且我要老實一點。你還記不記得、六月的時候、我坐在這裡、很有把握地跟你說：AI 這個需求「是真的」、人家客戶都簽了三到五年的約。' },

    { type: 'dialogue', character: 'chef', text: '記得啊、妳那時候講得很篤定、我還拿「客人簽尾牙包桌」來比。' },

    { type: 'dialogue', character: 'customer-b', text: '師傅、我那句話、到今天都沒錯——Google 這次開獎、雲端生意年增 82%、比大家原本猜的 63% 還高一大截。需求不只是真的、它還在「加速」。照六月的我來看、這應該是天大的好消息。結果呢？它股票盤後跌了 3.65%。師傅、這一個多月、市場給我上的最貴的一課、就是這個：我六月講「需求是真的」、我沒講錯；但我當時，把「需求是真的」、直接當成了「好消息」。這兩個、不一定是同一件事。' },

    { type: 'dialogue', character: 'chef', text: '需求那麼好、還在加速、怎麼會不是好消息？' },

    { type: 'dialogue', character: 'customer-b', text: '師傅、因為為了餵這個需求、它要燒的錢、漲得比生意還快。它同一天宣布：今年要花在蓋 AI 上的錢、從一千八百多億、往上加到兩千億美金；更嚇人的是——它上一季真正剩下、可以自由運用的現金、是「負的」、負五十九億。師傅、你上次聽 a 講「開二店」、那時候還是「賺的錢拿去蓋廠、股東分得少」。現在這家、是「生意好到爆、老闆自己的戶頭，這個月是負的」。' },

    { type: 'dialogue', character: 'chef', text: '……生意好到爆、戶頭卻是負的。b、這個我聽了背脊發涼。因為我認識這種店。我這條街開過一家、生意好到不行、天天排隊、老闆意氣風發、一年開了三家分店。每個人都說他成功。結果他兩年後全部收掉——因為他每開一家、就跟銀行借更多、排隊的人越多、他借得越兇、最後不是沒生意、是被利息壓垮的。他倒的那天、店裡還在排隊。' },

    { type: 'dialogue', character: 'customer-b', text: '師傅……你這個「倒的那天店裡還在排隊」，是我聽過對這件事最精準、也最恐怖的描述。市場現在盯 Google、盯這些 AI 大公司、就是在盯這個——生意的成長，跟燒錢的速度，哪一個先撐不住。需求真不真、六月就吵完了、答案是真的；賺不賺得到、上禮拜台積電那題；現在問的是最後、也最現實的一題：你為了追這個需求，把自己燒到什麼程度、還撐得住嗎。' },

    { type: 'dialogue', character: 'chef', text: '所以妳今天收這條線、收到的結論是——需求是真的，可以是壞消息。' },

    { type: 'dialogue', character: 'customer-b', text: '師傅、對。而且我要把這句講完整、因為這是我六月欠你的下半句：需求可以是真的、可以好到超乎想像、同時，它還是一個壞消息——如果為了餵它燒的錢、比它賺的還快。我六月只講了上半句、還講得很得意。今晚我把下半句補上、順便把我那份得意、也收回去。' },

    { type: 'wait', duration: 400 },

    // ── tie the two threads together: money's price is under the AI bet too ──
    { type: 'dialogue', character: 'chef', text: '那……等一下。妳今天講的兩件事——大家等的那個利息、跟 Google 敢不敢燒兩千億——這兩個，是不是其實也是同一件事？' },

    { type: 'dialogue', character: 'customer-b', text: '師傅、你自己把今晚最重要的那條線、接起來了。完全是同一件事。Google 敢燒兩千億、賭的是「AI 很多年以後會大賺」。那「很多年以後才會賺」的東西、值不值得現在燒這麼多——這件事，恰恰是被「錢貴不貴」決定的。如果聯準會讓錢一直很貴、那所有「要等很久才回本」的賭注、都會變得更難熬、更不划算。' },

    { type: 'dialogue', character: 'chef', text: '所以明天那個委員會的口氣、會直接影響大家怎麼看 Google 這種燒錢賭未來的公司？' },

    { type: 'dialogue', character: 'customer-b', text: '師傅、直接影響。這也是為什麼、這幾天在跌的、都是那種「很貴、要等很久才賺」的科技股，而那些「現在就穩穩賺錢」的老公司、反而還漲——你看昨天美國、那個看老牌公司的指數還收紅呢。錢一貴，大家就沒耐性等遙遠的未來、寧可要眼前就抓得到的。師傅，明天聯準會的那口氣，等於是在幫全世界的「耐心」定價。' },

    { type: 'dialogue', character: 'chef', text: '幫全世界的耐心定價……好、這句我服了。所以今晚大家不是在等一個利率數字、是在等「以後大家還願不願意，為很久以後的東西，忍現在」。' },

    { type: 'dialogue', character: 'customer-b', text: '師傅、你這一句，把我整晚想講的、講完了。我可以回家了。' },

    { type: 'wait', duration: 400 },

    // ── Closing — chef is waiting too; light, un-over-prepped menu ──
    { type: 'move', character: 'chef', toTile: 'counter-center' },
    { type: 'dialogue', character: 'chef', text: 'b、講到「等」——跟妳說個好笑的、我今天其實也在等。我明天一早有衛生檢查。所以妳看今天我菜備得特別少——我不敢多進、萬一明天檢查完要調整什麼、多備的就浪費了。今天就簡單、清爽的：太刀魚鹽烤、水茄子切片沾一點薑醬、鰯用梅子煮到骨頭都軟、ジュンサイ做個冰的小碗、冷酒。都是好收、不留手尾的東西。' },

    { type: 'dialogue', character: 'customer-b', text: '師傅……你有沒有發現，你今天為了明天的檢查「不敢多備」，跟全世界今天為了明天的聯準會「不敢多押」，是一模一樣的一件事？你不是沒生意做，你是在一件你控制不了的事出來以前，先把自己保持得「可以轉身」。這個，就是我今天一整天想教會我那個老客戶的東西。你不用教，你煮了三十年，身體就會了。' },

    { type: 'dialogue', character: 'chef', text: '哈、被妳這樣一講、我這頓寒酸的菜，好像變得有點道理了。其實我也不是想那麼多、我就是不想浪費、也不想明天手忙腳亂。我師父有句話：「有些晚上，最好的準備，就是別準備太多。」我年輕的時候聽不懂，覺得這不是廢話嗎；現在懂了——他講的是那種「明天會變、但你不知道怎麼變」的晚上。今晚就是。' },

    { type: 'dialogue', character: 'customer-b', text: '師傅、「有些晚上、最好的準備就是別準備太多」——你師父這句、我明天要放在我 desk 最上面。我們這行天天在鼓勵人「要有觀點、要卡位、要行動」，好像不動就是懶。其實有一種不動，是最難的——是你明明手癢、明明想證明自己，卻按住自己，因為你誠實地知道：現在動，是賭，不是判斷。今晚全世界最厲害的人，都在做這件很難的「不動」。' },

    { type: 'dialogue', character: 'chef', text: '太刀魚烤好了，趁熱、皮脆；水茄子是冰的，換著吃。妳今天辛苦了——攔了一整天的人。今晚妳自己也別想聯準會了，反正它後天才出來，妳今天再怎麼想，它也不會早一分鐘出結果，妳說是不是？喝一口，飯後我給妳切個西瓜。明天的事，明天再說；後天的事，更是後天再說。' },

    { type: 'dialogue', character: 'customer-b', text: '師傅、你這句「再怎麼想它也不會早一分鐘出結果」，才是今晚真正的結論——比我那些話都實在。好，我今晚不想它了。西瓜我要。太刀魚配冷酒，先。' },

    { type: 'dialogue', character: 'chef', text: '這就對了。來、斟上。敬「別準備太多」的晚上，敬那些後天才會有答案、今天急也沒用的事。慢慢吃——今晚這家店，跟全世界一樣，什麼都不賭，就好好過一個等待的晚上。',
    },

    { type: 'sfx', sound: 'chimes' },

    { type: 'wait', duration: 500 },
    { type: 'move', character: 'chef', toTile: 'stove' },

    {
      type: 'narration',
      text: '禮拜二晚上 10 點半、東京。今天的故事是「錢的價格、是所有價格底下的那個價格」——一個等待的晚上。聯準會（管美國利息的委員會）今天開始開會、後天（我方禮拜四凌晨）出結果、幾乎確定不動、但今晚很緊：這次不給那張「每個委員猜以後利息走到哪」的圖（少一根拐杖）、Warsh 主持（出名的硬）、而且被逼到牆角——油 $90、日圓近四十年最弱、通膨黏＝難降；AI／晶片鬆動、經濟虛＝難升（師傅:「就像我後面那台老冷氣、開強跳電、開弱客人喊熱、我不是在找正確答案、是在挑哪一種痛」；B:「有權力跟有選擇是兩回事」）。為什麼一個會讓全世界停下來——因為它動的是「錢本身值多少」、是所有成本底下最底層那一塊（師傅:「像明天要宣布整條街重訂房租、今晚沒人敢簽約、敢請人、敢囤貨」）；市場最怕的不是壞消息、是「不知道」、少了那張圖、大家只能猜主席的口氣。等待的紀律：B 的十五年老客戶今天想在會前「卡位」、被她按住——「在一件你知道會來、但你猜不準的事情前面、最好的部位常常是更小的部位」；她用她爸的話算的是後悔的帳——「計畫內的後悔叫成本、計畫外的才叫災難」、她不是幫他少賺、是幫他把「災難」變成「成本」（師傅:「颱風前一天我從不把冰箱塞滿、萬一轉向店開不了、那批就爛了、那是災難；少賺是我算過的、我認」；B:「今天成交量一路縮、全世界都在『不塞滿冰箱』、這種時候手癢硬做點什麼的、通常就是等一下受傷的」）。B 收她六月開的那條線——Google 7/22 開獎、雲端 +82% 遠超預期的 63%、需求不只真、還在加速、股價卻盤後 -3.65%：因 2026 capex 上修到 $2,000 億、上季自由現金流轉負 -$59 億。她誠實認帳：「我六月說『需求是真的』沒講錯、但我把『需求是真的』直接當成了『好消息』——這兩個不一定是同一件事；需求可以是真的、可以好到超乎想像、同時還是壞消息、如果為了餵它燒的錢比賺的還快」（師傅:「我這條街開過一家、天天排隊、一年開三家分店、每開一家借更多、最後被利息壓垮——它倒的那天店裡還在排隊」）。兩條線其實是同一條：Google 敢燒 $2,000 億、賭的是 AI「很多年以後」大賺、而「很久以後才回本」的東西值不值得現在燒、恰恰由「錢貴不貴」決定——所以這幾天跌的是「貴、要等很久」的科技股、穩穩賺錢的老牌股反而收紅（Dow +0.51%）；「聯準會明天那口氣、等於在幫全世界的『耐心』定價」（師傅收束:「今晚大家不是在等一個利率數字、是在等以後大家還願不願意、為很久以後的東西、忍現在」）。收尾——師傅明天有衛生檢查、今天刻意沒多備料（太刀魚鹽烤、水茄子、鰯梅煮、ジュンサイ、冷酒）：「不敢多進、萬一明天要調整、多備的就浪費了」——跟全世界為了聯準會「不敢多押」是同一件事（B:「你是在一件控制不了的事出來以前、先把自己保持得可以轉身；這是我教了老客戶一整天的東西、你煮三十年身體就會了」；師父:「有些晚上、最好的準備就是別準備太多」）。師傅最實在的一句作結：「它後天才出來、妳今天再怎麼想、它也不會早一分鐘出結果」——什麼都不賭、好好過一個等待的晚上。',
      duration: 6000,
    },
  ],
};
