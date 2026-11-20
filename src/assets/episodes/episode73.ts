import type { Episode } from '../../engine/types';

/**
 * Sources verified 2026-07-22 (Wed, ~20:30 JST) — 「他們慶祝的、正好是壓我的
 * 東西」: the day the rally gave it all back, and the yen hit a 39-year low.
 *
 * DATE: verified before writing (standing discipline since ep69's removal).
 * Box clock 7/22 19:24 CST = 20:24 JST — Tokyo's Wednesday session HAS
 * closed, so today's episode is genuinely today's. Sequence unbroken:
 * ep70=7/17(Fri), ep71=7/20(Mon, 海の日休市), ep72=7/21(Tue reopen),
 * ep73=7/22(Wed).
 *
 * — THE REVERSAL. Nikkei 225 closed 66,115.60, -116.59 pts, -0.17%. But
 *   intraday it "surged more than 1,300 points at one stage to reclaim the
 *   67,000 level" (another report: "briefly surging more than 1,000
 *   points"), on overseas buying of AI/semis following the prior day's US
 *   chip rally — then gave ALL of it back. Kioxia opened 買い気配 (buy
 *   orders only); Advantest modestly higher; Tokyo Electron and SoftBank
 *   showed relative weakness into the fade.
 *   WHAT CAPPED IT (all four are the episode's threads): growing Iran
 *   uncertainty, rising crude, rising US long-term rates, and a weaker yen
 *   keeping inflation concerns in focus.
 *   (News On Japan 7/22 "Nikkei Slips as Yen Weakness and Oil Prices Cap
 *   AI Rebound", BigGo 7/22, Business Recorder 7/22)
 *
 * — THE TELL — TOPIX ROSE. TOPIX +18.18 pts, +0.45%, to 4,033.13, i.e.
 *   buying "remained firmer outside the Nikkei's high-priced technology
 *   names." So this was NOT "Japan sold off". The broad market was fine;
 *   the expensive AI names were what got hit. This distinction is the
 *   episode's analytical spine and chef gets the plain-language version.
 *
 * — THE YEN, and this is the emotional centre. USD/JPY above 163.20,
 *   clearing 163.00 for the FIRST TIME SINCE DECEMBER 1986 — a ~39-40 year
 *   low — fuelling intervention talk. Driver: Iran-driven oil + a US-Japan
 *   policy rate gap of ~250-275bp keeping the carry trade alive.
 *   (Nikkei Asia, FXStreet 7/22, ActionForex, Mitrade 7/15)
 *   THE POINT CHEF REACHES: a weak yen LIFTS Japanese exporters (part of
 *   why the index rallies) while simultaneously destroying the import
 *   costs of a small domestic shop. The index going up and his invoices
 *   going up are THE SAME EVENT. He is, in effect, paying for their rally.
 *   This is the show's whole thesis (金融議題在普通人生活中的鏡像) in one
 *   line and it must be the episode's peak.
 *
 * — OIL / HORMUZ. Brent above $92, WTI above $86. The US launched a new
 *   round of strikes on Iran after Tehran announced the CLOSURE of the
 *   Strait of Hormuz; Iran responded with missile attacks on US bases in
 *   the Gulf. AND THE NUMBER THAT MAKES IT LAND IN A TOKYO KITCHEN: Japan
 *   relies on that waterway for OVER 90% of its crude oil imports.
 *   (FXStreet/Mitrade 7/22, Al Jazeera, E8 Markets)
 *
 * — US LONG RATES. 10-year Treasury 4.63% on 7/21 (4.60% on 7/20),
 *   through 4.6% and ~45bp above historical averages; 30-year above 5.1%
 *   vs a 3.2% decade average. Rising across nearly every maturity despite
 *   easing inflation — Iran plus fiscal/debt pressure. Higher long rates
 *   are precisely what punishes long-duration, expensive growth names,
 *   which is why the fade hit the pricey tech and not TOPIX. (CRFB 7/21,
 *   Fed H.15 7/21)
 *
 * — TONIGHT'S TEST: ALPHABET reports after the US close (≈05:00 JST Thu),
 *   first of the Magnificent Seven. Street: EPS ~$2.86-2.95, revenue
 *   ~$116.8-120.2B, Google Cloud growth ~63%, Cloud backlog $462B (nearly
 *   doubled in one quarter; management expects a little over half to
 *   convert to revenue within 24 months). THE CATCH, and it is ep70's TSMC
 *   paradox at far larger scale: FY capex guidance raised to $180-190B
 *   with a further "significant increase" flagged for 2027; Q1 capex +107%
 *   YoY to $35.7B; and Q1 FREE CASH FLOW FELL ~47% YoY to $10.1B. Enormous
 *   demand, shrinking cash left over. (InsiderFinance, IG 7/16, MarketBeat,
 *   TradingKey, Yahoo)
 *
 * — sectors[].value = |%change|x100 of that row's indicator asset, sorted
 *   desc. Only three rows have a sourced daily % (intraday spike, TOPIX,
 *   Nikkei); the rest are grey value:0 EVENT/LEVEL rows per the ep68
 *   convention — a yield in bp, an FX level, an oil level and a pending
 *   earnings print are NOT daily asset %moves and must not be scaled as
 *   one. Levels live in tickers, where they belong.
 * — priceHistory ends spike-then-fade (…66,231 → ≈67,500 intraday →
 *   66,116 close); the 67,500 is the sourced "+1,300 pts" spike off
 *   66,231, marked approximate, and the mid-arc points are shape-only.
 *   vix/rsi/beta are mood, not sourced prints.
 *
 * — CAST: appearances A=4 (ep67,68,70,72), B=4 (ep67,70,71,72); B has had
 *   two of the last three and A's last solo was ep68, five episodes back →
 *   tonight CUSTOMER A SOLO (→5:4). Earned by material: every dominant
 *   thread tonight is his register — the Iran cap, the rate differential /
 *   carry trade, long-duration rates vs expensive growth, and Alphabet's
 *   capex paradox (he owns the 開二店 analogy from ep70).
 *   ⚠️ A'S HUMILITY IS THE CHARACTER TEST. Yesterday (ep72) he drew the
 *   distinction 「市場不理它 ≠ 它結束了」 — and TODAY Iran is exactly what
 *   capped the rally. He must NOT take a victory lap; he was publicly
 *   humbled in ep70 for over-claiming. The correct note, and the line the
 *   episode turns on: 不要把「我沒有做錯」當成「我做對了」. He didn't predict
 *   today; he only declined to declare the thing over.
 *   B off-screen, referenced once as a fellow regular (NOT a colleague —
 *   CONTINUITY DEBT). A: male, 太太, framework vocab, no shouting calls.
 *   CHEF'S WIFE — deliberately rotated OFF the stock question (her FOMO
 *   loop closed in ep72) and onto HOUSEHOLD PRICES: she comes back from
 *   the supermarket saying everything is dearer. Same macro, domestic
 *   register — which is the standing "broaden the topics" guidance.
 * — Menu note: the weak yen changes the plate, so the closing dish is
 *   deliberately all-domestic/seasonal (穴子, 鱸, とうもろこし, 賀茂茄子,
 *   冷汁) — distinct from ep70 (鱧/鮎/冬瓜), ep71 (岩牡蠣/蛸/素麺),
 *   ep72 (鰻/茄子揚げ浸し/冷やしトマト). No Polymarket.
 */
export const EPISODE_73: Episode = {
  id: 'ep-73',
  date: '2026-07-22',
  title: '20260722 禮拜三晚上、早上漲的到收盤全還回去了——日經盤中一度衝 +1,300 點重返 67,000、收盤倒跌 0.17% 收 66,115.60；但 TOPIX 反而 +0.45% 收 4,033，所以賣的不是「日本」、是貴的那幾檔。壓下來的是同一批東西：伊朗、Brent $92、美國十年期 4.63%、還有日圓——163.20、1986 年 12 月以來最弱。師傅算出那條最痛的線：日圓貶讓出口股漲、指數漲，同時讓他的進貨變貴——「他們慶祝的、正好是壓我的東西」。今晚 Alphabet 開獎：capex 一年 $1,800-1,900 億、自由現金流卻年減近五成',
  description: '禮拜三晚上、東京。今天早上一開盤，昨天那股氣還在——日經一度衝上去 1,300 點、重新站回 67,000，做記憶體的 Kioxia 開盤還買不到、只有買單。結果下午整個垮掉，收盤 66,115.60、倒跌 116.59 點、-0.17%。早上漲的，到收盤全部還回去了。但今天真正的線索是：TOPIX 反而漲 0.45%、收 4,033.13。同一天、一個跌一個漲——因為日經被幾檔股價很高的科技股主導，TOPIX 看的是整體。所以今天賣的不是「日本」，是「貴的那幾檔」。把它壓下來的是四樣東西，而且是同一批：伊朗那邊美軍再次空襲、德黑蘭宣布關閉 Hormuz、Brent 站上 $92；美國十年期公債殖利率衝到 4.63%、三十年期破 5.1%；還有日圓——163.20，是 1986 年 12 月以來第一次，快四十年最弱，市場開始講干預。而師傅今晚自己算出了那條最痛的線：日圓貶，做出口的大公司賺更多、股價漲、指數就漲；同一件事，讓他進的每一樣東西都變貴。日本九成以上的原油走 Hormuz。他說：他們慶祝的，正好是壓我的東西。a 一個人來——他昨天才說「市場不理它不等於它結束了」，今天伊朗就把行情壓下來，但他拒絕居功：不要把「我沒有做錯」當成「我做對了」。今晚 Alphabet 開獎，七大科技第一家——市場盯的不是它賺多少，是它一年要花掉 $1,800 到 1,900 億蓋 AI，而上一季真正剩下的現金掉了快五成。',
  actions: [
    { type: 'bgm', track: 'chill-lofi', command: 'play' },

    {
      type: 'narration',
      text: '禮拜三晚上、東京、悶熱。今天早上開盤、昨天那股氣還在——日經一度往上衝了 1,300 點、重新站回 67,000；做記憶體的 Kioxia 開盤甚至買不到、只有買單掛著。海外的錢在買 AI、買晶片。結果下午、整個垮掉。收盤 66,115.60、倒跌 116.59 點、-0.17%。早上漲的、到收盤全部還了回去。但今天真正的線索、藏在另一個數字裡：TOPIX 反而漲了 0.45%、收 4,033.13。同一天、同一個市場、一個跌一個漲。把它壓下來的、是四樣東西、而且其實是同一批：伊朗那邊、美軍又發動一輪空襲、德黑蘭宣布關閉 Hormuz 海峽、伊朗用飛彈打了美軍在波斯灣的基地、Brent 站上 $92；美國十年期公債利率衝到 4.63%、三十年期破 5.1%；還有日圓——163.20、是 1986 年 12 月以來第一次、快四十年最弱、市場開始談政府會不會出手干預。而日本、九成以上的原油、是從那條海峽進來的。今晚 a 一個人來。',
      duration: 6000,
    },

    {
      type: 'market-data',
      data: {
        tickers: [
          { symbol: '日經 225（7/22 收、早盤 +1,300 點全數回吐）', price: 66115.6, change: -0.17 },
          { symbol: 'TOPIX（7/22 收、逆勢收紅、賣的不是「日本」）', price: 4033.13, change: 0.45 },
          { symbol: 'USD/JPY（163.20、1986/12 以來最弱、干預說法升溫）', price: 163.2, change: 0.0 },
          { symbol: 'Brent 原油（$92、WTI $86、Hormuz 關閉）', price: 92.0, change: 0.0 },
          { symbol: '美國 10 年期公債（4.63%、7/21；30 年期破 5.1%）', price: 4.63, change: 0.0 },
        ],
        volatility: 26,
        vix: 20.0,
        rsi: 47.0,
        beta: 1.25,
        priceHistory: [72353, 69174, 66835, 64141, 64141, 66231, 67500, 66116],
        volumeHistory: [1000, 1200, 2500, 2800, 0, 2600, 2400, 2200],
        sectors: [
          { label: '日經盤中一度 +1,300 點（約 +2%、重返 67,000、Kioxia 開盤只有買單）——然後全數吐回', value: 196, color: '#ddaa33' },
          { label: 'TOPIX 7/22 +0.45% 收 4,033.13（整體是紅的——賣的不是「日本」、是貴的那幾檔）', value: 45, color: '#22cc55' },
          { label: '日經 225 7/22 -0.17% 收 66,115.60（-116.59 點、早盤漲幅全還、Tokyo Electron／SoftBank 尾盤轉弱）', value: 17, color: '#dd3333' },
          { label: 'USD/JPY 163.20（1986 年 12 月以來首見、近 40 年最弱、美日利差約 250-275bp 撐著 carry trade）', value: 0, color: '#888888' },
          { label: 'Brent $92／WTI $86（美軍再擊伊朗、德黑蘭宣布關閉 Hormuz、伊朗飛彈打波灣美軍基地；日本逾九成原油走此）', value: 0, color: '#888888' },
          { label: '美國 10 年期 4.63%（7/21、前日 4.60%、高於歷史均值約 45bp）／30 年期逾 5.1%——長率越高、越貴的成長股越痛', value: 0, color: '#888888' },
          { label: 'Alphabet 今晚盤後開獎（七大科技首家）：capex 全年 guide $180-190B、2027 再增、上季自由現金流年減約 47%、Cloud backlog $462B', value: 0, color: '#888888' },
        ],
        headline: '禮拜三 21:00 JST：早上漲的全還回去了——日經盤中一度 +1,300 點重返 67,000（Kioxia 開盤只有買單）、收盤倒跌 0.17% 收 66,115.60（-116.59 點）；但 TOPIX +0.45% 收 4,033.13——賣的不是「日本」、是貴的那幾檔 / 壓下來的同一批：伊朗（美軍再空襲、德黑蘭宣布關閉 Hormuz、飛彈打波灣美軍基地）、Brent $92 WTI $86、美 10 年期 4.63% 30 年期逾 5.1%、日圓 163.20 為 1986/12 以來最弱（干預說法升溫、美日利差 250-275bp）/ 日本逾九成原油走 Hormuz——指數漲與進貨變貴是同一件事 / 今晚 Alphabet 開獎：capex $180-190B、2027 再增、上季 FCF 年減約 47%、Cloud backlog $462B',
      },
    },

    { type: 'enter', character: 'chef', toTile: 'stove' },
    { type: 'wait', duration: 500 },
    { type: 'move', character: 'chef', toTile: 'prep-area' },
    { type: 'wait', duration: 500 },
    { type: 'move', character: 'chef', toTile: 'stove' },
    { type: 'wait', duration: 400 },

    { type: 'enter', character: 'customer-a', toTile: 'entrance' },
    { type: 'move', character: 'chef', toTile: 'counter-center' },
    { type: 'dialogue', character: 'chef', text: 'いらっしゃい、a。今天悶得要命、先冰的。跟你說兩件我想不通的事——第一件、我中午看新聞、日經漲了一千三百點、我想說好啊、昨天漲今天又漲。結果我剛剛收攤前再看一次、變成跌的。同一天、早上大漲、收盤變跌，這是怎麼回事？第二件、我老婆今天從超市回來、把袋子放下就說：「什麼都貴了。」油、麵粉、連咖啡都調了。她問我是不是又要漲價了。' },

    { type: 'move', character: 'customer-a', toTile: 'random-stool' },
    { type: 'sit', character: 'customer-a' },

    { type: 'dialogue', character: 'customer-a', text: '師傅、晚安。你這兩件事、我先跟你講一個你可能不會相信的事——它們是同一件事。你太太在超市看到的、跟今天下午市場垮掉的、是同一個東西在動。我們慢慢講。' },

    { type: 'move', character: 'chef', toTile: 'stove' },
    { type: 'wait', duration: 400 },

    // ── the intraday reversal ──
    { type: 'dialogue', character: 'chef', text: '先講第一件。早上漲一千三、收盤變跌——這在我腦袋裡是矛盾的。漲就是漲、跌就是跌、怎麼會同一天兩個都發生？' },

    { type: 'dialogue', character: 'customer-a', text: '師傅、因為「一天」不是一個價格、是一整段時間。早上買的人很興奮——昨天美國那邊晶片股大漲、海外的錢一早就衝進來搶、有一檔記憶體股票開盤甚至買不到、只有買單掛在那裡。指數一度衝上 67,000。然後從中午開始、一點一點被賣回去。收盤的時候、早上那一千三百點、一點都不剩、還倒跌了一百多點。' },

    { type: 'dialogue', character: 'chef', text: '……a、你這樣講、我馬上有畫面了、而且是我最討厭的那種日子。中午突然湧進一堆客人、我以為今天要爆單、趕快多切了料、心情整個上去；結果下午一個人都沒有、晚上收攤一算、跟平常差不多、還少一點。那種日子最累——不是因為賺得少、是因為你的心情已經先被拉上去了、還多備了一堆料。' },

    { type: 'dialogue', character: 'customer-a', text: '師傅、你說的「多備了一堆料」、就是今天早上追進去的人。市場最傷人的不是跌、是這種——先讓你興奮、讓你在高點動手、然後在你面前慢慢收回去。跌一整天、大家一開始就不敢動、反而受傷的人少。早上先漲、才會騙到人。' },

    { type: 'wait', duration: 400 },

    // ── the TOPIX tell ──
    { type: 'dialogue', character: 'chef', text: '那今天算是「大盤跌了」嗎？我看新聞標題寫得好像很慘。' },

    { type: 'dialogue', character: 'customer-a', text: '師傅、這裡有一個今天最重要的線索、我很想跟你講。日經是跌的沒錯、但另一個指數 TOPIX、今天是漲的、漲了 0.45%。' },

    { type: 'dialogue', character: 'chef', text: '兩個指數？同一個市場、怎麼會一個漲一個跌？那到底是漲還是跌？' },

    { type: 'dialogue', character: 'customer-a', text: '差別在算法。日經那個算法、會被「股價很高」的那幾檔特別影響——而今天那幾檔、剛好都是很貴的科技股。TOPIX 是看整體、幾乎所有上市公司都算進去。所以今天出現的畫面是：整體是紅的、大部分公司好好的；但那幾檔又貴又紅的科技股在跌、而它們在日經裡的份量特別重、就把日經拉成綠的。' },

    { type: 'dialogue', character: 'chef', text: '所以不是「日本在跌」、是「貴的那幾家在跌」？' },

    { type: 'dialogue', character: 'customer-a', text: '師傅、就是這句。今天賣的不是「日本」、是「貴」。' },

    { type: 'dialogue', character: 'chef', text: '這個我懂、而且我最有感——因為我這條街常常被這樣講。前陣子有人說「這條街生意變差了」、講得好像大家都要收了。我後來自己算了一下：其實只有那三家開得特別貴的店在掉客人、剩下十幾家都還好、有幾家還變好。可是那三家門面最大、大家看到它們冷清、就說「整條街不行了」。講「整條街」是錯的、應該講「貴的那幾家」。' },

    { type: 'dialogue', character: 'customer-a', text: '師傅、你這個「門面最大所以誤導」、就是指數的毛病、而且你三十年前就自己發現了。以後你看到新聞說「日本股市大跌」、你可以多問一句：是整體、還是只有那幾家很貴的？這一句話、就能讓你少慌一半。' },

    { type: 'wait', duration: 400 },

    // ── what capped it, and A refuses the victory lap ──
    { type: 'dialogue', character: 'chef', text: '那是什麼把它壓下來的？早上明明那麼有氣勢。' },

    { type: 'dialogue', character: 'customer-a', text: '四樣、但其實是同一批。伊朗那邊、美軍又打了一輪、德黑蘭宣布把 Hormuz 海峽關掉、伊朗用飛彈打了美軍在波斯灣的基地；油、Brent 站上 $92；美國那邊長期借錢的利率衝到 4.63%、三十年的破 5.1%；還有日圓、跌到 163.20。' },

    { type: 'dialogue', character: 'chef', text: '等一下——伊朗。a、你昨天晚上才在這裡跟我說「市場不理它、不等於它結束了」。結果今天伊朗就真的把行情壓下來了。你這算不算說中了？' },

    { type: 'dialogue', character: 'customer-a', text: '師傅、這一題我要很小心地回答你、因為我很容易在這裡再摔一次。我沒有預測到今天。我昨天講的那句話、根本不是預測——我講的是「我不會宣布它結束」。這兩個差非常多。今天伊朗把行情壓下來、不是因為我準、是因為那件事本來就一直在那裡、從來沒有走。我只是沒有假裝它走了。' },

    { type: 'dialogue', character: 'chef', text: '可是你沒犯錯啊、這總是好的吧？' },

    { type: 'dialogue', character: 'customer-a', text: '師傅、我上個月才因為宣布伊朗那條線結束、在你這張桌子上丟了大臉。如果我今天因為「這次沒有再犯同一個錯」就覺得自己很準——那我下個月一定會用另一種方式再摔一次。我這幾個禮拜學到最貴的一句是這個：不要把「我沒有做錯」、當成「我做對了」。這兩個中間、隔著一整個運氣。' },

    { type: 'dialogue', character: 'chef', text: '「不要把我沒有做錯當成我做對了」……a、這句話狠。我年輕的時候有一次、颱風天我沒開店、隔天聽說隔壁開了、結果客人也沒幾個、還淹了水。我那陣子逢人就說我判斷多好。其實我那天沒開、是因為我睡過頭。' },

    { type: 'dialogue', character: 'customer-a', text: '師傅、哈、你這個「其實是睡過頭」、是我聽過最誠實的版本。我們這行滿滿都是這種人——結果好、就開始編一個自己很英明的故事。編久了、自己也信了。然後下一次就用那個假的本事、押了真的錢。' },

    { type: 'wait', duration: 400 },

    // ── THE YEN — the peak of the episode ──
    { type: 'dialogue', character: 'chef', text: '好、那第二件事——我老婆說什麼都貴了。你剛剛說那跟今天市場是同一件事。你講的是日圓那個 163？' },

    { type: 'dialogue', character: 'customer-a', text: '對。師傅、我先講什麼叫日圓變弱、用你最熟的方式。以前你要換一塊美金、大概付一百五十幾塊日圓。現在你要付 163 塊。同樣一桶油、同樣一包國外的咖啡豆、就算那邊完全沒有漲價、你都要多掏日圓出來。' },

    { type: 'dialogue', character: 'chef', text: '所以外國東西沒漲、我還是要多付錢——因為我手上的錢變薄了。' },

    { type: 'dialogue', character: 'customer-a', text: '就是這樣。而且師傅、163 這個數字、我要跟你講它有多不尋常：這是 1986 年 12 月以來、第一次到這裡。快四十年。' },

    { type: 'dialogue', character: 'chef', text: '1986 年……那時候我還在念小學。我師父那時候剛開他自己的店。他跟我講過、他年輕的時候、外國進來的東西貴到不行、一般人根本不碰、大家吃的都是這邊產的。我以前聽他講、覺得那是老人在講古。' },

    { type: 'dialogue', character: 'customer-a', text: '師傅、那不是講古、那是輪迴。' },

    { type: 'dialogue', character: 'chef', text: '……可是等等。a、我有個地方卡住了。你剛剛說日圓變弱、可是早上日經是大漲的。日圓變弱、股票不是應該不好嗎？' },

    { type: 'dialogue', character: 'customer-a', text: '師傅、你這一問、問到今天最核心的地方了。日圓變弱、對「做出口的大公司」是好事——他們把東西賣到國外、收美金；美金換回日圓的時候、同樣一筆生意、換回來的日圓變多了、帳面上就是賺更多。而日經裡面、那種大出口公司份量很重。所以日圓一弱、指數容易漲。' },

    { type: 'dialogue', character: 'chef', text: '……所以。所以股票漲、跟我進貨變貴、是同一件事？' },

    { type: 'dialogue', character: 'customer-a', text: '師傅、是同一件事。同一個原因、兩個方向。' },

    { type: 'dialogue', character: 'chef', text: '……' },

    { type: 'dialogue', character: 'chef', text: 'a、那我這種店算什麼？我不出口、我一個客人都不在國外。我全部的東西都是買進來的——油、麵粉、瓦斯、送貨的運費。日圓一弱、我這邊全部變貴、一毛好處都沒有。可是新聞會說「今天股市大漲、經濟看好」。他們慶祝的那個東西、正好就是壓我的那個東西。' },

    { type: 'dialogue', character: 'customer-a', text: '師傅……你剛剛講的這段、比我們公司任何一份報告都準、而且準得讓人不太舒服。這件事在我們那邊有個很乾淨的講法、但你這個版本更誠實：同一個匯率、對出口的大公司是加分、對只做在地生意的小店是扣分。指數只統計得到前面那一種。所以指數漲、從來不等於「大家都變好」——它只是說「被算進去的那些變好了」。' },

    { type: 'dialogue', character: 'chef', text: '而我不在裡面。' },

    { type: 'dialogue', character: 'customer-a', text: '師傅、你不在裡面。這條街上的大部分人都不在裡面。' },

    { type: 'wait', duration: 400 },

    // ── Hormuz 90%: the line lands in his kitchen ──
    { type: 'dialogue', character: 'chef', text: '那油呢？我從上個月就一直在跟你們抱怨炸油、瓦斯、運費。今天又聽你講 $92、還有那個海峽關掉。' },

    { type: 'dialogue', character: 'customer-a', text: '師傅、我今天給你一個數字、你聽完大概就不會再問了：日本的原油、九成以上、是從那條海峽進來的。' },

    { type: 'dialogue', character: 'chef', text: '九成……九成以上？那不是全部了嗎。' },

    { type: 'dialogue', character: 'customer-a', text: '幾乎是。所以那條海峽一緊、日本沒有第二條路。而且它不會只影響加油站——你的瓦斯、你的炸油、送貨卡車的燃料、包裝的塑膠、連冷藏的電費、全部都在那條線上。師傅、你上個月講炸油漲、我們那時候還在講別的事；其實從那時候到現在、你抱怨的每一樣東西、源頭都是同一個。' },

    { type: 'dialogue', character: 'chef', text: '所以我這幾個禮拜、其實一直在幫你們的新聞做註解、我自己不知道。' },

    { type: 'dialogue', character: 'customer-a', text: '師傅、而且你比新聞早。你上個月就講了。我們是今天才把它寫進報告的第一段。' },

    { type: 'wait', duration: 400 },

    // ── Alphabet tonight: the TSMC disease at bigger scale ──
    { type: 'dialogue', character: 'chef', text: '那今天晚上還有什麼要等的嗎？你剛坐下的時候一直在看手機。' },

    { type: 'dialogue', character: 'customer-a', text: '有。今天晚上、Google 那家公司出財報——就是 b 上次跟你講的、七家大科技公司裡第一個開獎的。師傅、有意思的地方在這：市場現在最想看的、不是它賺多少。它一定賺很多。大家要看的是它「要花多少」。' },

    { type: 'dialogue', character: 'chef', text: '……等一下。這個劇本我看過。這不就是上禮拜台積電那個嗎——生意好到爆、可是錢都要拿去蓋廠、所以股東分不到？我那時候拿開二店來比。' },

    { type: 'dialogue', character: 'customer-a', text: '師傅、一模一樣的病、但規模大得多。它今年要花在蓋 AI 設備上的錢、大概是一千八到一千九百億美金、而且它自己說明年還要再增加。更關鍵的是上一季的一個數字：它真正剩下來、可以自由運用的現金、比去年同期少了快一半。' },

    { type: 'dialogue', character: 'chef', text: '生意更好、剩下的錢卻少一半。' },

    { type: 'dialogue', character: 'customer-a', text: '對。而且它手上還有一大筆客戶已經談好、還沒認列的訂單——一個很誇張的數字、一季之內幾乎翻倍。所以今晚的重點是：那些訂單是真的、需求是真的——這一題六月就答完了；今天要答的是第二題跟第三題：「賺得到嗎」、「花這麼多值得嗎」。' },

    { type: 'dialogue', character: 'chef', text: '所以還是那個階梯。有沒有人要買、賺不賺得到、憑什麼比較貴——你們爬了一個多月了。' },

    { type: 'dialogue', character: 'customer-a', text: '師傅、你把我們這一個多月的功課、用一句話背出來了。而且今晚有一個很現實的壓力：美國長期借錢的利率、今天在 4.63%、三十年的破 5.1%。錢越貴、那種「要花好多年、以後才會賺」的生意、就越不受歡迎——因為你要等的那些年、變得更難熬。這就是為什麼今天下午跌的是貴的科技股、而不是整個市場。' },

    { type: 'dialogue', character: 'chef', text: '我懂了——就像我如果現在要借錢開二店、利息比兩年前高一截、那我就會想「這個二店真的要開嗎」。錢貴的時候、大家對「以後才會賺」的東西、耐性就變差。' },

    { type: 'wait', duration: 400 },

    // ── Closing — the weak yen changes the plate ──
    { type: 'move', character: 'chef', toTile: 'counter-center' },
    { type: 'dialogue', character: 'chef', text: 'a、我今天做的東西、跟我們聊的有關、你等一下就知道。今天全部走國產、當季的——穴子白燒、灑一點鹽跟山椒；鱸魚做洗い、冰鎮過、夏天最好；玉米做かき揚げ、現在的玉米甜得不像話；賀茂茄子田樂、味噌是我自己調的；最後冷汁配飯。冷酒也是這邊的。' },

    { type: 'dialogue', character: 'customer-a', text: '師傅……你這一桌，全部沒有進口的東西。' },

    { type: 'dialogue', character: 'chef', text: '你發現了。今天下午我進貨的時候站在那邊算、算到有點火大——進口的那幾樣、這個月又跳了一次。我本來想直接漲價、後來想想不對。與其把貴的東西硬買進來、再叫客人多付錢、不如我先繞路：這個季節、這邊本來就有很好的東西。玉米、茄子、鱸魚、穴子、都是這邊的、不用換美金。我師父那句話突然就懂了——他年輕的時候大家吃國產、不是因為愛國、是因為外面的東西太貴了。' },

    { type: 'dialogue', character: 'customer-a', text: '師傅、你今天做的這件事、我要講清楚它有多聰明——你不是在忍耐、你是在調整你能控制的那一部分。匯率你控制不了、油價你控制不了、伊朗你更控制不了。但「今天這桌菜用什麼」、是你的。我們那邊有一堆人、整天在對著控制不了的東西發脾氣、然後對可以動的地方一動不動。你剛好相反。' },

    { type: 'dialogue', character: 'chef', text: '我沒想那麼多、我就是不想漲價。這幾個客人跟了我很久、有的從我師父那時候就在了。我一漲、他們可能還是會來、但會少來一次。我寧可自己多想一點菜單。' },

    { type: 'dialogue', character: 'customer-a', text: '師傅、我太太最近也在做同一件事、只是規模小很多——她開始不看那些「進口特價」的廣告了、改看當天市場有什麼。她說這樣反而比較好玩。我昨天回家、她做了一桌全部是這附近買的菜、跟我說「你看、我今天沒有換過一次美金」。我聽了愣了一下——她講的是玩笑話，可是她講對了一件我今天在報告裡寫了很長一段的事。' },

    { type: 'dialogue', character: 'chef', text: '你太太跟我老婆會很聊得來。我老婆今天在超市看到什麼都貴、第一個反應也不是抱怨、是問我「那我們晚餐改吃什麼」。a、我跟你講、真正在管一個家、或管一家店的人、遇到事情的第一個念頭都是「那我怎麼繞過去」。抱怨是有空的人才做的事。' },

    { type: 'dialogue', character: 'customer-a', text: '師傅、「抱怨是有空的人才做的事」——這句我今天要帶回去。我們那行最不缺的就是有空抱怨的人。穴子好香。' },

    { type: 'dialogue', character: 'chef', text: '趁熱。穴子白燒不能等、皮的香氣一下就跑了；鱸魚是冰的、換著吃剛好。今天早上漲一千三、晚上還回去——那個我管不到。但這條穴子烤得好不好、我管得到。這麼多年我學會的就這一件事：把管得到的做好、管不到的、就讓它去。等一下 Google 開獎、你要看就用手機看、不要看得太用力、飯會涼。' },

    { type: 'sfx', sound: 'chimes' },

    { type: 'wait', duration: 500 },
    { type: 'move', character: 'chef', toTile: 'stove' },

    {
      type: 'narration',
      text: '禮拜三晚上 10 點半、東京。今天的故事是「他們慶祝的、正好是壓我的東西」。盤面：日經早盤一度衝 +1,300 點重返 67,000（Kioxia 開盤只有買單、海外資金搶 AI 與晶片），下午整個垮掉、收 66,115.60、倒跌 116.59 點、-0.17%——早上漲的全還回去了（師傅:「中午突然湧進一堆客人、我以為要爆單、多切了料、心情上去了；下午一個人都沒有——那種日子最累、不是賺得少、是心情先被拉上去還多備了一堆料」；A:「市場最傷人的不是跌、是先讓你興奮、讓你在高點動手、再慢慢收回去；跌一整天反而受傷的人少」）。今天真正的線索是 TOPIX 反而 +0.45% 收 4,033.13——日經被幾檔股價很高的科技股主導、TOPIX 看整體、所以賣的不是「日本」、是「貴」（師傅:「有人說這條街生意變差、其實只有那三家開得特別貴的在掉客人、剩下十幾家都還好——可是它們門面最大、大家看到就說整條街不行了」）。壓下來的四樣其實同一批：伊朗（美軍再空襲、德黑蘭宣布關閉 Hormuz、飛彈打波灣美軍基地）、Brent $92、美國 10 年期 4.63% 與 30 年期逾 5.1%、日圓 163.20。A 拒絕居功——他昨天才說「市場不理它 ≠ 它結束了」、今天伊朗就把行情壓下來、但「我沒有預測到今天、我講的不是預測、是我不會宣布它結束；今天不是因為我準、是那件事本來就沒走、我只是沒假裝它走了」，並收在「不要把『我沒有做錯』當成『我做對了』——這兩個中間隔著一整個運氣」（師傅年輕時颱風天沒開店、事後逢人說自己判斷好、「其實我那天是睡過頭」）。全集的頂點在日圓：163.20 是 1986 年 12 月以來首見、近四十年最弱；師傅自己推到底——日圓弱、大出口公司收美金換回更多日圓、股價漲、指數就漲；同一件事讓他進的每樣東西變貴，「我不出口、一個客人都不在國外、全部東西都是買進來的、一毛好處都沒有——他們慶祝的那個東西、正好就是壓我的那個東西」（A:「指數只統計得到前面那一種、所以指數漲從來不等於大家都變好、它只是說被算進去的那些變好了」／「師傅、你不在裡面。這條街上大部分人都不在裡面」）。而日本逾九成原油走 Hormuz——師傅從上個月抱怨到現在的炸油、瓦斯、運費、包裝、冷藏電費，源頭一直是同一個（A:「你比新聞早一個月、我們今天才把它寫進報告第一段」）。今晚 Alphabet 開獎、七大科技首家：重點不是賺多少而是要花多少——capex 全年 $1,800-1,900 億、2027 再增、上季自由現金流年減近五成、Cloud backlog 一季近乎翻倍（師傅:「這不就是台積電那個開二店嗎」；A:「一模一樣的病、規模大得多」）；而長率越高、越貴的成長股越痛（師傅:「錢貴的時候、大家對『以後才會賺』的東西耐性就變差」）。收尾在一桌沒有任何進口食材的菜——穴子白燒、鱸魚洗い、玉米かき揚げ、賀茂茄子田樂、冷汁：師傅不漲價，改繞路，用當季國產的東西重排菜單（「我師父年輕時大家吃國產、不是因為愛國、是因為外面的東西太貴了」；A:「匯率你控制不了、油價你控制不了、伊朗你更控制不了——但今天這桌菜用什麼是你的；我們那邊一堆人整天對著控制不了的東西發脾氣、對可以動的地方一動不動」）。師傅的收束：「真正在管一個家或管一家店的人、遇到事情第一個念頭都是『那我怎麼繞過去』——抱怨是有空的人才做的事」、「早上漲一千三晚上還回去、那個我管不到；這條穴子烤得好不好、我管得到」。',
      duration: 6000,
    },
  ],
};
