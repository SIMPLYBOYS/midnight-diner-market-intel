import type { Episode } from '../../engine/types';

/**
 * Sources verified 2026-07-20 (Mon) — 海の日. The "你什麼都不能做" episode.
 *
 * DATE CALIBRATION (learned the hard way, see ep69's removal): verified
 * empirically before writing, not from the box clock. 2026-07-20 is the
 * THIRD Monday of July (7/6, 7/13, 7/20) = 海の日 / Marine Day, a Japanese
 * public holiday — JPX CLOSED. Confirmed by search: "Japanese markets are
 * closed for a holiday... the Nikkei exchange will not be open." Machine
 * clock and harness date now agree (both 7/20); the earlier ~3-week skew
 * is gone. ep70 covered Fri 7/17; today is the next trading-relevant day
 * and Tokyo can't trade it.
 *
 * — TOKYO IS SHUT. That is the episode. Three days of very large news
 *   landed while the market Japan cares about could not price any of it.
 *
 * — FRI 7/17 US close (happened AFTER ep70's Asia session, so it is new):
 *   S&P 500 -1.01% to 7,457.69; Nasdaq -1.4% to 25,520.24; Dow -406.55
 *   pts (-0.77%) to 52,146.42. VanEck Semiconductor ETF (SMH) -4%+.
 *   Applied Materials, Lam Research, Intel, KLA, Arm each ~ -4%; Micron
 *   and Nvidia -2%+. Netflix slid. ON THE WEEK: S&P -1.6%, Nasdaq -2.9%,
 *   Dow -0.9%. (CNBC 7/17, WashPost 7/17, Yahoo 7/17, Detroit News 7/17,
 *   USNews/Reuters 7/17)
 *
 * — THE NEW CATALYST — and it is the THIRD question in the show's own arc:
 *   Chinese startup MOONSHOT debuted a new AI model that THE COMPANY SAID
 *   performs on par with leading systems from OpenAI and Anthropic. Note
 *   carefully: company-claimed, NOT independently verified as of writing.
 *   The episode treats it that way ON PURPOSE — it is the exact shape of
 *   the diner's own running discipline (ep66/67「簽名出現再說」, ep70
 *   「條件 vs 結論」), except this time the market repriced BEFORE
 *   verification, and B has to explain why that is not hypocrisy:
 *   「市場賣的不是『我確定他很強』、是『我不敢賭他不強』。」
 *   The three-question ladder, all real, all previously aired:
 *     ep69/6月 Micron  → 需求是不是真的？        → 是、還簽了三五年長約
 *     ep70/7月 TSMC    → 真的、但你賺不賺得到？  → 錢都拿去蓋廠了
 *     ep71/今天 Moonshot → 賺得到、但你憑什麼比較貴？
 *
 * — WEEKEND IRAN ESCALATION (A declared this arc over in ep68; it has now
 *   escalated twice since):
 *   US/Iran escalated further — vessels transiting Hormuz targeted AND an
 *   attack on a key OIL FACILITY IN KUWAIT over the weekend. Brent rose
 *   almost 4%, pared, trading ABOVE $90 — highest since mid-June; WTI near
 *   $84. HORMUZ TRANSITS: 57 recorded Friday-through-Sunday, a MORE THAN
 *   50% DROP vs the previous week. Hormuz normally carries ~1/5 of global
 *   oil trade. (Bloomberg 7/19-20, Al Jazeera 7/13-14, CNBC 7/15)
 *   Japan angle that makes this bite: island economy, oil arrives by sea —
 *   on the day it celebrates the sea, the sea lane is the problem.
 *
 * — NIKKEI LAST PRINT, a genuine source conflict I had to adjudicate:
 *   one source says Fri 7/17 closed 63,674 (-3,161 pts, -4.73%), another
 *   says 64,140. 63,674 is internally consistent (66,835 - 3,161 = 63,674;
 *   3161/66835 = 4.73% ✓) and is what ep70 already committed, so I use it
 *   for continuity and flag the conflict here rather than silently switch.
 *
 * — sectors[].value = |%change|x100 of each theme's indicator asset,
 *   sorted desc, date-tagged. The two grey value:0 rows are EVENTS not
 *   prices (ep68 established this convention): 東京休市 — 0 is literally
 *   correct, there was no move because there was no market; and the Hormuz
 *   transit collapse, which is a shipping count, not an asset %move, so it
 *   must NOT be scaled as one.
 * — priceHistory: the flat tail is the holiday, not a bug — 63,674 repeated
 *   because no price exists for three days. volumeHistory zeros likewise.
 *   The 7/16 (66,835) and one interpolated mid-point are shape-only.
 *   vix/rsi/beta are mood indicators, not sourced prints.
 *
 * — CAST: aired continuity is ep67 A+B, ep68 A solo, ep70 A+B (ep69 was
 *   removed). B has never had an aired solo → tonight CUSTOMER B SOLO,
 *   which also balances appearances at 3 each. Earned by the material:
 *   a shut market, clients who can't trade, a Tuesday gap, and desk notes
 *   are all her lane, and ep70 closed on HER dad's line 「週五收盤手上要
 *   乾淨、別把煩惱帶回家過週末」(ep44) — a three-day weekend with a war
 *   escalation inside it is that maxim's maximum test. Payoff is
 *   deliberately NOT profit: clean hands bought her CHOICES tomorrow, and
 *   an afternoon actually present at the beach with her kids on 海の日.
 *   She must not claim foresight (she didn't predict Kuwait or Moonshot).
 *   Personas: B female, 我先生, kids, 我的 desk, the 15-yr client, retired
 *   finance-lifer dad. A off-screen, referenced once as a fellow regular
 *   (NOT a colleague — CONTINUITY DEBT). Chef: layman, asks what 休市 and
 *   跳空 mean, 老闆 not employee, 我老婆, 師父.
 * — No Polymarket. Season: mid-July Tokyo, hot; 海の日 → summer sea menu
 *   (岩牡蠣, 蛸, なめろう, 冷やし素麺, 冷酒), distinct from ep70's 鱧/鮎.
 */
export const EPISODE_71: Episode = {
  id: 'ep-71',
  date: '2026-07-20',
  title: '20260720 禮拜一晚上、海の日、東京休市——三天不能動：美股禮拜五again 收黑（S&P -1.01% 7,457、Nasdaq -1.4%、晶片 ETF -4%、一週 -2.9%）、週末伊朗打了科威特油廠、Brent 站上 $90（6 月中來最高）、Hormuz 三天只過 57 艘船（比前週少一半以上）；而 Moonshot 端出「自稱跟最強的一樣強」的 AI，把市場的問題推到第三層——需求真的（Micron）、你賺不賺得到（TSMC）、現在是「你憑什麼比較貴」。B 一個人來，講她乾淨的手換到的不是錢、是明天的選擇權，和一個真的在海邊的下午',
  description: '禮拜一晚上、東京、海の日。今天全日本放假、股市休市——而這三天、發生的事比上禮拜還多。美股禮拜五又收黑（S&P -1.01% 收 7,457、Nasdaq -1.4%、晶片股整片被殺、半導體 ETF -4%、Nasdaq 一週 -2.9%）；週末伊朗那邊打了科威特一座油廠、還在打通過 Hormuz 的船、油價站上 $90、六月中以來最高——那條海峽從禮拜五到禮拜天只過了 57 艘船、比前一個禮拜少了一半以上，而那裡平常走全世界五分之一的原油。日本是島、油全部靠船進來——在慶祝海的節日這天、出事的正好是海。更難的是禮拜五那則：中國一家叫 Moonshot 的公司發表新的 AI、「他們自己說」跟 OpenAI、Anthropic 那些最強的差不多強。到現在還沒有人獨立驗證——但市場沒等驗證就先跌了。B 說那不是雙標：市場賣的不是「我確定他很強」、是「我不敢賭他不強」。於是問題升到第三層：六月問「有沒有人要買」（Micron 答有、還簽了三五年）、上禮拜問「有人買、你賺不賺得到」（台積電答錢都拿去蓋廠了）、這禮拜問「就算你賺得到、如果別人用十分之一的成本做出一樣的東西、你憑什麼比較貴」。而今晚真正的主題是：這三天東京完全不能動。B 手上是乾淨的——她說那換來的不是錢、是明天開盤時她有「選擇」而不是「判決」，還有一個她真的人在海邊、沒在看手機的下午。',
  actions: [
    { type: 'bgm', track: 'chill-lofi', command: 'play' },

    {
      type: 'narration',
      text: '禮拜一晚上、東京、很熱。今天是海の日、全日本放假、股市休市——一整天沒有價格。但這三天、外面發生的事、比上個禮拜還多。美國禮拜五又收黑：S&P 跌 1.01% 收 7,457、Nasdaq 跌 1.4%、晶片股整片被殺、把一整籃晶片公司打包起來的那支基金一天跌超過 4%、Nasdaq 整個禮拜跌了 2.9%。週末、伊朗那邊打了科威特的一座油廠、還在打通過 Hormuz 海峽的船——油價站上 $90、六月中以來最高。那條海峽、平常全世界五分之一的原油從那裡走；這三天、禮拜五到禮拜天、只有 57 艘船過去、比前一個禮拜少了一半以上。日本是一座島、油幾乎全部靠船運進來——在慶祝海的這一天、出事的正好是海。還有禮拜五那一則、比油更難：中國一家叫 Moonshot 的公司、發表了一個新的 AI、「他們自己說」、跟 OpenAI、Anthropic 那些最強的差不多強。到今天為止、還沒有人獨立驗證過。但市場沒有等驗證、禮拜五就先跌了。而東京、這三天、一步都不能動。今晚 b 一個人來。',
      duration: 6000,
    },

    {
      type: 'market-data',
      data: {
        tickers: [
          { symbol: '日經 225（海の日休市、三天無報價、上週五收 63,674）', price: 63674.0, change: 0.0 },
          { symbol: 'Brent 原油（站上 $90、6 月中來最高、科威特油廠被打）', price: 90.0, change: 4.0 },
          { symbol: 'S&P 500（7/17 收、當週 -1.6%）', price: 7457.69, change: -1.01 },
          { symbol: 'Nasdaq（7/17 收、當週 -2.9%）', price: 25520.24, change: -1.4 },
          { symbol: 'Dow（7/17 收、-406 點）', price: 52146.42, change: -0.77 },
        ],
        volatility: 32,
        vix: 25.0,
        rsi: 31.0,
        beta: 1.35,
        priceHistory: [72353, 69174, 67500, 66835, 63674, 63674, 63674, 63674],
        volumeHistory: [900, 1000, 1400, 2000, 2500, 0, 0, 0],
        sectors: [
          { label: '晶片股 ETF（SMH）7/17 -4%（Applied Materials／Lam／Intel／KLA／Arm 各約 -4%、整片被殺）', value: 400, color: '#dd3333' },
          { label: 'Brent 週末 +4% 站上 $90（科威特油廠被打、6 月中以來最高、WTI 近 $84）', value: 400, color: '#ddaa33' },
          { label: 'Nasdaq 當週 -2.9%（AI 退燒第三週、Moonshot 那則是最後一根）', value: 290, color: '#dd3333' },
          { label: 'Micron／Nvidia 7/17 各 -2%＋（六月才用財報打臉泡沫的那家、這次一起跌）', value: 200, color: '#dd3333' },
          { label: 'S&P 500 當週 -1.6%（連跌、7/17 單日 -1.01% 收 7,457.69）', value: 160, color: '#dd3333' },
          { label: 'Nasdaq 7/17 -1.4% 收 25,520.24（Netflix 也拖）', value: 140, color: '#dd3333' },
          { label: '東京休市（海の日、三天沒有價格、所有消息明天一次補進第一筆）', value: 0, color: '#888888' },
          { label: 'Hormuz 週五至週日僅 57 艘通過（較前週 -50%＋、常態承載全球五分之一原油）', value: 0, color: '#888888' },
        ],
        headline: '禮拜一 21:00 JST：海の日、東京休市三天不能動——美股 7/17 再收黑（S&P -1.01% 7,457.69、Nasdaq -1.4% 25,520.24、Dow -406 點、晶片 ETF -4%、Applied Materials／Lam／Intel／KLA／Arm 各約 -4%；當週 Nasdaq -2.9% S&P -1.6%）/ 週末伊朗打科威特油廠＋續打 Hormuz 過境船、Brent 站上 $90（6 月中來最高）、海峽三天僅 57 艘通過（較前週少逾五成、常態走全球五分之一原油）/ Moonshot「自稱」比肩 OpenAI、Anthropic、尚無獨立驗證但市場先跌——問題升到第三層：需求真（Micron）→ 賺不賺得到（TSMC）→ 你憑什麼比較貴',
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
    { type: 'dialogue', character: 'chef', text: 'いらっしゃい。b、放假還出來啊——而且妳今天臉色跟上禮拜五完全不一樣、上禮拜五妳一進來就臭著臉。先冰的、天氣這麼熱。跟妳說一件我今天想不通的事：今天是海の日、慶祝海的節日、我老婆早上還說要去海邊走走。結果我打開新聞、整版都是海上的壞消息——油輪被打、海峽走不動、油又漲。我老婆看一看說：「這節過得真諷刺。」' },

    { type: 'move', character: 'customer-b', toTile: 'random-stool' },
    { type: 'sit', character: 'customer-b' },

    { type: 'dialogue', character: 'customer-b', text: '師傅、謝謝、我今天真的需要冰的。你太太那句「諷刺」、比她自己想的還準——我等一下要跟你講為什麼。至於我的臉色為什麼不一樣——因為上禮拜五收盤的時候、我手上是乾淨的。就這樣、沒有別的原因。今天我先講一件你可能覺得很怪的事：這三天、東京完全不能動。一步都不能。' },

    { type: 'move', character: 'chef', toTile: 'stove' },
    { type: 'wait', duration: 400 },

    { type: 'dialogue', character: 'chef', text: '休市……我一直以為「休市」就是「大家放假、沒事發生」。妳的意思是、外面的事照樣在跑、可是你們不能反應？那如果這三天出了很壞的消息、你們想賣也賣不掉？' },

    { type: 'dialogue', character: 'customer-b', text: '對、一個字都不能改。師傅、你想想這三天發生了什麼：美國禮拜五又跌了一大段、晶片股整片被殺；週末伊朗那邊打了科威特一座油廠、油價站上 $90。這些全部、全部都發生在我們不能動的時候。市場關著、但世界沒關。' },

    { type: 'dialogue', character: 'chef', text: '市場關著、但世界沒關……這個我居然有經驗。我店休那天、我在家睡覺、可是築地的魚價照樣在動、我的菜商照樣在調價。我休息、不代表價格跟著我休息。等我隔天開門、才發現東西已經漲了——我那天什麼都沒做錯、我只是「不在場」。' },

    { type: 'dialogue', character: 'customer-b', text: '師傅、「我什麼都沒做錯、我只是不在場」——這就是這三天全東京的處境、你一句話講完。而且這裡有一個很殘忍的分別、決定你這三天是睡得著還是睡不著：你不在場的時候、你的店裡有沒有一冰箱會壞掉的生鮮。' },

    { type: 'wait', duration: 400 },

    // ── clean hands = optionality, not profit ──
    { type: 'dialogue', character: 'chef', text: '……哦。妳是說、如果我店休三天、冰箱裡塞滿了生魚、那三天我一定睡不著；可是如果我走之前清空了、我頂多就是少賺三天。是這個意思嗎？' },

    { type: 'dialogue', character: 'customer-b', text: '師傅、就是這個意思、而且你講得比我爸還白話。我爸做了三十年、留給我那句「週五收盤手上要乾淨、別把煩惱帶回家過週末」——我以前一直以為那是一句叫我保守的話。這個週末我才真的懂它：這次不是兩天、是三天、而且中間打了一場仗。我手上乾淨、所以這三天我是真的在放假。' },

    { type: 'dialogue', character: 'chef', text: '所以妳這次賺到了？因為妳猜到會出事？' },

    { type: 'dialogue', character: 'customer-b', text: '師傅、不是、這個我一定要講清楚、不然又變成吹牛。我完全沒猜到。我不知道週末會打科威特、我更不知道禮拜五會冒出那個 Moonshot 的消息。我這三天沒有多賺一塊錢。我得到的不是錢——是「選擇」。明天早上開盤、我手上乾淨、我面對的問題是「要不要進場」；如果我手上是滿的、還借了錢、我明天面對的問題是「我要賠多少」。同一個開盤、對我是選擇題、對他是判決書。' },

    { type: 'dialogue', character: 'chef', text: '一個是選擇題、一個是判決書……b、這句話我要記一輩子。我進貨也是這樣——手上有現金的時候、我看到便宜的好貨、我可以抓；如果我錢全部壓在上一批賣不掉的東西上面、就算天上掉下最好的魚、我也只能看著。錢在手上的價值、不是那些錢本身、是「我還能決定」。' },

    { type: 'wait', duration: 400 },

    // ── the client who can't trade: pure emotional labor ──
    { type: 'dialogue', character: 'chef', text: '那妳這三天、都在做什麼？既然不能買賣。' },

    { type: 'dialogue', character: 'customer-b', text: '師傅、我這三天的工作、不是下單、是接電話。那位跟我往來十五年的老先生、禮拜六一早就打來了。' },

    { type: 'dialogue', character: 'chef', text: '他要幹嘛？不是不能買賣嗎？他打來也沒用啊。' },

    { type: 'dialogue', character: 'customer-b', text: '他知道沒用。師傅、他打來不是要下單、是要有人聽他講話。他第一句是「我從禮拜五晚上到現在、一直在看手機、看到睡不著」。我跟他說：你現在看手機、看到的不是資訊、是焦慮。因為你看到的每一件事、你一件都不能拿來做決定——市場關著。你看它一百次、跟看一次、結果完全一樣，唯一的差別是你多慌了九十九次。' },

    { type: 'dialogue', character: 'chef', text: '那妳叫他別看？講是這樣講、做得到嗎？' },

    { type: 'dialogue', character: 'customer-b', text: '光叫人「別看」沒有用、師傅、你叫一個慌的人「冷靜」、他只會更慌。所以我叫他去做一件「要用到手」的事——隨便什麼都好、只要手要動、腦袋就沒空。他後來去洗車了。禮拜天傳訊息給我、拍了一張照片、說車洗得很乾淨。師傅、那張照片、是我這個週末收到最好的東西。' },

    { type: 'dialogue', character: 'chef', text: 'b、這個我太懂了、我打烊以後也會這樣——躺在床上一直想「今天那鍋湯是不是太鹹了」、想到三點。我師父跟我說過一句：「你現在想它、湯也不會變甜。要嘛你明天早點來重熬、要嘛你現在就去睡。躺著想、是最沒用的那個選項。」你叫他去洗車、跟我師父叫我去睡、是同一件事——把「沒用的擔心」換成「有用的動作」、或至少換成不傷人的動作。' },

    { type: 'wait', duration: 400 },

    // ── 海の日 irony: the sea is the story ──
    { type: 'dialogue', character: 'chef', text: '那回到我老婆那句「諷刺」——妳說她講得比她想的還準、什麼意思？' },

    { type: 'dialogue', character: 'customer-b', text: '師傅、因為今天出事的、真的就是海、而且是對日本最要命的那部分。你想——日本是一座島。我們的油、幾乎百分之百靠船運進來。所以「海」對我們不是風景、是命脈。Hormuz 那條海峽、平常全世界五分之一的原油從那裡走。這三天、禮拜五到禮拜天、只有 57 艘船過去——比前一個禮拜少了一半以上。伊朗那邊還打了科威特的一座油廠。' },

    { type: 'dialogue', character: 'chef', text: '少了一半以上……這個我完全有畫面。就像我這條街、本來一天送三趟貨、現在一天只送一趟。東西不是沒有、是進不來。而且我跟你講、每次進貨一卡、最先亂的不是「有沒有貨」、是價格——大家開始搶、開始囤、然後價就飛了。' },

    { type: 'dialogue', character: 'customer-b', text: '師傅、你上禮拜就已經在跟我們講這件事了、你只是沒發現。你說你的炸油又漲了、運費加了一次。那不是巧合、那條線就是從這條海峽拉到你巷子裡的。油運不出來、油就貴；油貴、所有東西的運費都貴；你的炸油、你的瓦斯、送貨的車、全部一起貴。你在櫃檯付的那個數字、跟我們螢幕上那個數字、是同一件事的兩頭——只是你那頭比較誠實。' },

    { type: 'dialogue', character: 'chef', text: '所以今天大家放假去海邊玩、慶祝海——而海這幾天正在掐住我們的脖子。我老婆隨口一句諷刺、居然是真的。' },

    { type: 'wait', duration: 400 },

    // ── THE MOONSHOT BEAT: the third question ──
    { type: 'dialogue', character: 'chef', text: '那 AI 那邊呢？上禮拜你們兩個講「生意好、但賺不到錢」、我聽懂了、我還拿開二店來比。這禮拜又跌、又是為什麼？同一個原因嗎？' },

    { type: 'dialogue', character: 'customer-b', text: '師傅、不是同一個。這禮拜換了第三個問題、而且是最難的一個。禮拜五、中國一家叫 Moonshot 的公司、發表了一個新的 AI，他們說、跟目前最強的那幾個、差不多強。' },

    { type: 'dialogue', character: 'chef', text: '那又怎樣？世界上多一家做 AI 的、有什麼好跌的？多幾家不是很正常嗎。' },

    { type: 'dialogue', character: 'customer-b', text: '師傅、你把「多一家做」這四個字、換到你自己身上想一次。假設明天隔壁開一家店、湯頭跟你熬了三十年的那鍋、一樣好——而且賣你一半的價錢。' },

    { type: 'dialogue', character: 'chef', text: '……那我就麻煩了。' },

    { type: 'dialogue', character: 'customer-b', text: '你不一定完蛋。但有一個問題、你明天一開店就要重新回答一次：「你憑什麼比較貴。」以前你不用回答這題、因為沒有人做得出你那鍋湯。市場禮拜五、就是在替 AI 那幾家公司、問這一題。' },

    { type: 'dialogue', character: 'chef', text: '等一下——b、我發現一件事。你們這三次問的問題、好像是一層一層剝下去的？' },

    { type: 'dialogue', character: 'customer-b', text: '師傅、你自己看出來了、這正是我今晚最想跟你講的。你看：六月那次、市場問「這東西到底有沒有人要買」——Micron 的財報回答了、有、而且客戶簽了三到五年的約。上禮拜、市場問「好、有人買、那你賺不賺得到」——台積電回答了、賺得到、但錢都要拿去蓋下一座廠、股東分不到多少。這禮拜問的是第三題：「就算你賺得到、如果別人用十分之一的成本、做出跟你差不多的東西、你還剩下什麼。」一次比一次難、而且沒有一次、是上一次的答案救得了的。' },

    { type: 'dialogue', character: 'chef', text: '一層一層……b、這根本就是客人問我的順序。第一個問題是「好不好吃」——我答得出來。第二個問題是「值不值這個價」——我也答得出來、我可以講我的用料、我的工。第三個問題是「隔壁一樣好吃、又便宜一半、我為什麼還要來你這」——這題最痛。因為前面兩題我都答對了、還是可能輸在這一題。' },

    { type: 'dialogue', character: 'customer-b', text: '師傅、你這段話、我要一字不改抄回我的 desk。前兩題答滿分、還是可能輸在第三題——這就是禮拜五那些晶片股的處境。' },

    { type: 'wait', duration: 400 },

    // ── the crucial nuance: unverified claim, and why the market still moved ──
    { type: 'dialogue', character: 'chef', text: '可是等等——那個「跟最強的一樣強」、是誰說的？有人去試過嗎？' },

    { type: 'dialogue', character: 'customer-b', text: '師傅、你這一問、問到今天最關鍵的地方了。那是「那家公司自己說的」。到今天為止、還沒有人獨立驗證過。' },

    { type: 'dialogue', character: 'chef', text: '那……那不就跟你們之前一直講的那個「簽名出現再說」一樣嗎？還沒發生的、還沒證實的、不要當真啊。那市場禮拜五急什麼？你們自己講的規矩、自己不遵守？' },

    { type: 'dialogue', character: 'customer-b', text: '師傅、你把我們的規矩背出來反問我了、我很高興、但這題我要很小心地回答你、因為這裡有一個很細的分別。「等驗證」跟「不動」、不是同一件事。如果我手上沒有押、我可以說「我不信、我不加碼」——那叫等。但如果你手上已經重押了、你沒辦法「等」，因為你光是抱著不動、你就已經在賭「那個消息是假的」了。' },

    { type: 'dialogue', character: 'chef', text: '……我懂了。不動、本身也是一種賭。' },

    { type: 'dialogue', character: 'customer-b', text: '對。所以市場禮拜五賣的、不是「我確定他很強」——沒有人確定。賣的是「我不敢賭他不強」。這兩句話差很多、師傅。前者是判斷、後者是風險。' },

    { type: 'dialogue', character: 'chef', text: 'b、這個我居然有一模一樣的經驗。前幾年有人跟我說、巷口那間空店要租給一家連鎖拉麵、跟我打對台。消息是真是假、我到今天都不知道、那家店後來也沒開成。可是那陣子、我本來要簽一個五年的租約、我硬是改成一年一簽——因為我不敢賭它不會開。師傅我跟妳講、那個「還沒證實的消息」、什麼都沒發生、但它已經改變了我當年的決定。' },

    { type: 'dialogue', character: 'customer-b', text: '師傅……你這個一年一簽的故事、就是市場運作的方式、完整版。價格不是在描述「現在發生了什麼」、價格是在替「未來所有還沒被排除的可能性」訂價。一個還沒被證實、但也還沒被排除的可能性、會立刻改變今天的價格——因為它已經改變了每一個人今天的決定。你當年沒簽那個五年約、你就是在替那個可能性付錢、跟禮拜五賣掉晶片股的人、一模一樣。' },

    { type: 'wait', duration: 400 },

    // ── tomorrow's gap ──
    { type: 'dialogue', character: 'chef', text: '那明天呢？明天東京開市、這三天的事一次算總帳？' },

    { type: 'dialogue', character: 'customer-b', text: '對、而且是在一瞬間。師傅、明天早上開盤那一下、很像一個人閉氣三天、然後一口氣呼出來。美國禮拜五的跌、週末的油、Moonshot 那則——全部要塞進明天的第一筆價格裡。我們叫這個「跳空」。' },

    { type: 'dialogue', character: 'chef', text: '跳空？跳過什麼？' },

    { type: 'dialogue', character: 'customer-b', text: '跳過中間。平常價格是走過去的——從這裡慢慢走到那裡、中間每一個價位都出現過。跳空是它直接跳過去、中間那一段、根本沒有價格。師傅、這就是「休市」對某些人最殘忍的地方：如果有人打算「跌到某個價位我就出場」——那個價位、明天可能根本不會出現。它被跳過去了。他以為自己有一條逃生路線、結果這三天、那條路被封起來了。' },

    { type: 'dialogue', character: 'chef', text: '這個……這個真的有點恐怖。就像我以為明天菜市場一開、我可以用昨天的價錢補貨、結果一開門、價格已經在另一個地方了、我根本沒有慢慢挑、慢慢殺價的那個過程。門一開、就是那個價、要不要隨你。' },

    { type: 'dialogue', character: 'customer-b', text: '師傅、完全正確。而這就繞回我爸那句話為什麼那麼值錢——我到這個週末才聽懂第二層。他不是叫我禮拜五要賺錢、他也不是叫我保守。他是叫我：不要在禮拜五留下一個「需要靠禮拜一某個價格才解決得掉」的問題。因為那個價格、可能根本不會出現。' },

    { type: 'dialogue', character: 'chef', text: '不要留下需要靠明天某個價格才解決的問題……b、這句是今晚最沉的一句。我懂——就像我不能把「這批快壞的魚、明天一定賣得掉」當成計畫。明天客人會不會來、不是我能決定的。真正的計畫、是不要讓自己走到「非得怎樣不可」的位置。' },

    { type: 'wait', duration: 400 },

    // ── Closing — 海の日, the sea menu, the afternoon she was actually present ──
    { type: 'move', character: 'chef', toTile: 'counter-center' },
    { type: 'dialogue', character: 'chef', text: '好、今天海の日、我做海的東西——雖然聽完妳講的、這個主題有點苦。岩牡蠣、夏天的牡蠣現在最肥、我配一點酢橘；蛸の柔らか煮、煮到用筷子就能斷；鯵做なめろう、剁碎拌味噌紫蘇、配冰的最好；冷やし素麺收尾、湯頭我冰了一整天。冷酒斟上。今天不做熱的了、天氣這麼熱、妳也放了三天假——難得。' },

    { type: 'dialogue', character: 'customer-b', text: '師傅、岩牡蠣、太好了。而且你剛剛講「難得」、我想跟你講一件事——這三天、我真的在海邊。我先生帶小孩去、我跟著去了。以前這種連假、我人在海邊、手機在口袋裡、每二十分鐘掏出來看一次、小孩叫我我還「等一下」。這次不一樣——我手上乾淨、所以那三天我真的沒什麼好看的。我陪小孩堆了一個很醜的沙堡、被浪沖掉、又堆一個。' },

    { type: 'dialogue', character: 'chef', text: '……b、妳知道嗎、妳今天講了那麼多市場的事、這一段是最重要的。' },

    { type: 'dialogue', character: 'customer-b', text: '師傅、我也是回來的路上才想通的。我爸那句「別把煩惱帶回家過週末」——我以前以為那是在講「錢」的紀律。這次我才知道、他其實是在講「人」的紀律。他做了三十年、退休前一年才學會把週末劃一半給我媽。他留這句話給我、不是怕我賠錢、是怕我跟他一樣、等到很晚才發現、那些週末是拿不回來的。這次海の日、我人真的在海邊——這才是乾淨的手、真正換到的東西。' },

    { type: 'dialogue', character: 'chef', text: 'b……我今天也想通一件事、換我講給妳聽。我以前一直覺得海の日這個節日莫名其妙——慶祝海？海有什麼好慶祝的、它又不會少。今天我才發現：我店裡的魚、我的鹽、我的醬油、我的米、我那桶炸油、每天送來的貨——全部都是海送來的。它送了三十年、每天送、我一次都沒有謝過它。要等到它不送了——像這三天、只過了 57 艘船——我才發現我整家店、是站在海上面的。' },

    { type: 'dialogue', character: 'customer-b', text: '師傅、你這段話、比我們 desk 這禮拜任何一張 note 都準。我們每天在螢幕上算來算去那些數字、講到最後、其實就是在算一件很簡單的事——海還會不會繼續送。今天算出來的答案是「不太確定」、所以油站上 $90、所以大家把股票賣掉。就這樣而已。' },

    { type: 'dialogue', character: 'chef', text: '「海還會不會繼續送」——好、那今天這杯、就敬海。牡蠣開好了、擠一點酢橘、趁冰吃；蛸剛起鍋、放涼一點更好；なめろう我多剁了一份、妳配酒。慢慢吃、今天不趕。明天開盤是明天的事——反正妳手上是乾淨的、明天對妳是選擇題。今天晚上、先把海の日過完。' },

    { type: 'sfx', sound: 'chimes' },

    { type: 'wait', duration: 500 },
    { type: 'move', character: 'chef', toTile: 'stove' },

    {
      type: 'narration',
      text: '禮拜一晚上 10 點半、東京、海の日。今天的故事是「你什麼都不能做」——東京休市三天、而這三天世界跑得比上禮拜還快。市場端：美股 7/17 再收黑（S&P -1.01% 收 7,457.69、Nasdaq -1.4% 收 25,520.24、Dow -406 點、晶片 ETF -4%、Applied Materials／Lam／Intel／KLA／Arm 各約 -4%、Micron 與 Nvidia 各 -2%＋；當週 Nasdaq -2.9%、S&P -1.6%）；週末伊朗打了科威特一座油廠、續打 Hormuz 過境船、Brent 站上 $90、六月中以來最高、海峽週五至週日僅 57 艘通過、較前週少逾五成——而那裡平常走全世界五分之一的原油。日本是島、油全靠船進——在慶祝海的節日這天、出事的正好是海（師傅:「我店裡的魚、鹽、醬油、米、炸油、全部是海送來的、送了三十年我一次都沒謝過它；要等到它不送了、我才發現我整家店是站在海上面的」）。休市的真義（師傅:「市場關著但世界沒關——我店休那天築地的魚價照樣在動、我什麼都沒做錯、我只是不在場」）、而不在場那三天睡不睡得著、取決於你冰箱裡有沒有一批會壞掉的生鮮。B 的乾淨的手：她沒猜到科威特、沒猜到 Moonshot、這三天一塊錢都沒多賺——她換到的是「選擇」（「明天開盤、手上乾淨的人面對的是要不要進場、手上滿的、借錢的、面對的是要賠多少；同一個開盤、一個是選擇題、一個是判決書」）。她三天的工作不是下單是接電話——十五年的老客戶看手機看到睡不著、她說「你看到的不是資訊是焦慮、你看一百次跟看一次結果一樣、只是多慌九十九次」、叫他去做要用到手的事、他去洗車了（師傅師父:「你現在想它湯也不會變甜、要嘛明天早點來重熬、要嘛現在去睡、躺著想是最沒用的那個選項」）。問題升到第三層——六月 Micron 答「有沒有人要買」（有、簽了三五年）、上週台積電答「賺不賺得到」（錢都拿去蓋廠）、這週 Moonshot 問「就算你賺得到、別人用十分之一成本做出一樣的東西、你憑什麼比較貴」（師傅:「客人先問好不好吃、再問值不值這個價、最後問隔壁一樣好吃又便宜一半我為什麼還要來你這——前兩題答滿分、還是可能輸在第三題」）。而那個「跟最強的一樣強」是公司自己說的、尚無獨立驗證——師傅用食堂自己的規矩反問「不是說簽名出現再說嗎」、B 的分別：「等驗證」跟「不動」不是同一件事、重押著不動本身就是在賭消息是假的、所以市場賣的不是「我確定他很強」、是「我不敢賭他不強」（師傅當年聽說巷口要開連鎖拉麵、消息至今未證實、店也沒開成、但他把五年租約改成一年一簽——「還沒證實的消息什麼都沒發生、但它已經改變了我當年的決定」）。明天的跳空：三天消息塞進第一筆價格、中間沒有價位、「打算跌到某個價出場的人、那個價明天可能根本不會出現、他以為有逃生路線、結果這三天被封起來了」——於是 B 爸那句「週五收盤手上要乾淨」露出第二層：不是叫她保守、是叫她別留下「需要靠週一某個價格才解決得掉」的問題。收尾在海の日的岩牡蠣、蛸、なめろう、冷やし素麺與冷酒——B 這三天人真的在海邊、陪小孩堆了一個很醜的沙堡、被浪沖掉又堆一個；她爸退休前一年才學會把週末劃一半給她媽、留那句話不是怕她賠錢、是怕她太晚才發現週末拿不回來。乾淨的手真正換到的、不是錢、是那個下午。',
      duration: 6000,
    },
  ],
};
