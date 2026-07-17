import type { Episode } from '../../engine/types';

/**
 * Sources verified 2026-07-17 (Fri) — "需求是真的 ≠ 你會賺到錢" + "你沒資格
 * 宣布一件事結束". Two of the diner's own recent conclusions got tested this
 * week; one held, one got run over.
 *
 * ⚠️ NOTE ON DATES: the box clock is skewed ~3 weeks (bash `date` says
 * 06-25); the harness date 2026-07-17 is the correct one, confirmed by live
 * news existing for 7/16-7/17. ep69 was written against the skewed clock and
 * is dated 2026-06-25 — its data is real and correctly sourced for 6/23-25,
 * it is simply an older episode, not "today's". Left as-is; this episode
 * picks up the thread three weeks later and treats that gap as real time.
 *
 * — TSMC Q2 (7/16), the paradox that drives the episode:
 *   RECORD quarter. Revenue $40.20B (top of own guidance); gross margin
 *   67.7% vs a 65.5-67.5% guide; operating margin 60.3%, above guide. 2026
 *   revenue growth guidance RAISED to "slightly above 40%" in USD, from
 *   ">30%". Q3 guided to another sequential increase.
 *   AND THE STOCK FELL: -5% on the print, a 6th straight loss; -7.3% in
 *   Taiwan on 7/17. Why — the same update raised 2026 CAPEX to $60-64B
 *   (~+15% at midpoint, from $52-56B) PLUS a separate multi-year $100B US
 *   commitment, and overseas fabs are guided to dilute gross margin 2-3%
 *   early, 3-4% later. Demand was never the question anymore; who funds it
 *   and what shareholders keep, is. (Invezz 7/16, Schaeffer's 7/16,
 *   TradingKey 7/17, FXLeaders 7/17, MarketBeat 7/16)
 *
 * — 7/16 (Thu) US close: S&P 500 7,533.77 (-0.51%); Nasdaq 25,881.95
 *   (-1.47%); Dow 52,552.97 (-105.67 pts, -0.2%). Alphabet sank; chip
 *   slide continued. (TheStreet 7/16, Yahoo 7/16, CNBC 7/16)
 *
 * — 7/17 (Fri, TONIGHT) Asia — the AI unwind:
 *   Nikkei 225 CLOSED 63,674, -3,161 pts, -4.73%; intraday briefly
 *   -4,130.94 pts / -6.18% from Thursday's close; "Tokyo down more than
 *   5%"; index at a June low. (Derived-consistent: prior close ≈66,835;
 *   3161/66835 = 4.73% ✓; 4130.94/66835 = 6.18% ✓; intraday low ≈62,704.)
 *   Kioxia -16.1%, Taiyo Yuden -11.9%, SoftBank Group -9%, Tokyo Electron
 *   -8.1%, Advantest -7.2%. Taiwan -6.5% with TSMC -7.3%. Hang Seng -2% to
 *   24,501.89; Shanghai Composite -3.1%.
 *   CAUSE — and this is the ep69 CONTRAST: not forced/mechanical selling
 *   this time. A genuine re-rating: "worries that their prices have shot
 *   too high and that voracious demand for memory and processors may not
 *   be sustainable if AI ends up not producing as much profit and
 *   productivity as promised." People changed their minds; nobody made
 *   them. (AP 7/17, Japan Times 7/17, Irish Times 7/17, Investing.com 7/17)
 *
 * — IRAN AR C REOPENED — ep68's "安靜淡出" was falsified, hard:
 *   Trump said at a NATO summit in Turkey he considers the ceasefire with
 *   Iran OVER. US struck Iran (7/8) and revoked the temporary waiver of
 *   sanctions on Iranian oil after attacks on commercial vessels in the
 *   Strait of Hormuz; CENTCOM announced strikes for a third day; the IRGC
 *   said it hit TWO OIL SUPERTANKERS in the strait and launched missile
 *   and drone strikes on US assets in Kuwait and Bahrain. Iran closed the
 *   Strait of Hormuz.
 *   Brent: +5.2% to settle $78.02 on the initial strikes (7/8); Sept
 *   futures $85.92, highest since June 15; ~$85 Tue vs ~$79 early Mon and
 *   ~$76 late the prior week. Analysts see upper-$70s Aug/Sep, with $100
 *   retest possible if intensity persists / oil infrastructure is hit. Oil
 *   set for a weekly gain. (Al Jazeera 7/8, 7/13, 7/14; CNBC 7/8, 7/15;
 *   The Hill; Wikipedia "2026 Iran war fuel crisis")
 *
 * — FED: June FOMC (6/17) held at 3.50-3.75% — a 4th straight no-change —
 *   but signalled higher rates ahead under Chair Warsh. July 28-29 meeting
 *   priced ~77% hold / ~21% for a 25bp HIKE. BofA: three 25bp hikes
 *   (Sep/Oct/Dec); Deutsche Bank: two. June CPI fell. Oil at $85 pushes
 *   the wrong way on all of it. (CNN 6/17, Intellectia 7/26, FederalNews
 *   7/26)
 *
 * — sectors[].value = |%change|x100 of each theme's indicator asset, sorted
 *   desc, every label date-tagged. priceHistory: Nikkei arc from the 6/22
 *   record 72,353 → 69,174 (6/24) → ≈66,835 (7/16) → 62,704 intraday low →
 *   63,674 close (7/17); the intermediate July points are an INTERPOLATED
 *   shape between sourced anchors, chart-only, not claimed closes.
 *   vix/rsi/beta are mood indicators for a rout day, not sourced prints.
 *
 * — CAST: ep67 A+B, ep68 A solo, ep69 B solo → tonight BOTH. Earned: this
 *   is the day both their recent calls get graded, and they grade opposite
 *   ways.
 *   A EATS IT: in ep68 he "安靜地送走" the Iran arc and said 大部分事情是慢慢
 *   淡出的. Three weeks later the ceasefire is declared over, Hormuz is shut,
 *   two tankers hit. His lesson is humility about DECLARING THINGS OVER —
 *   in-persona (humble, ep63; framework vocab; 七分信三分留 lineage; adjusts
 *   the 「留」 not the 湯底).
 *   B HOLDS: her ep61 condition for batch 3 was literally 「Hormuz 真有船過」.
 *   It never triggered — it inverted. She never deployed. She must NOT
 *   claim foresight: the condition did the work, not her brain.
 *   B also re-uses ep69's own tool (被逼著砍 vs 想通了賣) and gets the
 *   OPPOSITE verdict this time — the framework works, the answer flipped.
 *   Her dad's 「週五收盤手上要乾淨、別把煩惱帶回家過週末」(ep44) lands on an
 *   actual Friday rout. Personas: A male/太太; B female/我先生, my desk,
 *   15-yr client; NOT the same desk (CONTINUITY DEBT) — independent
 *   regulars comparing notes over dinner, no joint positions.
 *   CHEF'S WIFE PAYOFF: she asked at 65,000, again at 72,000 (ep68, A said
 *   don't pile in at the top; ep69 B said 分批). Tonight it's 63,674 —
 *   BELOW where she first asked. The honest answer is the point: 猶豫 ≠
 *   紀律. She froze, she didn't plan; freezing that happens to pay is not a
 *   process, and process is what repeats.
 * — Season: mid-July Tokyo, hot. Summer menu (生ビール, 枝豆, 冷奴, 鱧, 鮎).
 *   No Polymarket this episode.
 */
export const EPISODE_70: Episode = {
  id: 'ep-70',
  date: '2026-07-17',
  title: '20260717 禮拜五晚上、AI 大回頭——東京收 63,674（-4.73%、盤中一度 -6.18%／-4,130 點、Kioxia -16.1% Taiyo Yuden -11.9% SoftBank -9%）；TSMC 交出破紀錄財報（營收 $40.2B、毛利 67.7%、2026 營收成長上修到 40% 以上）股價反而 -7.3%——因為它同時把資本支出拉到 $60-64B＋美國 $100B、海外廠稀釋毛利 2-4%：「需求是真的」不等於「你會賺到錢」。三禮拜前 A 才安靜送走的伊朗線、停火被宣布結束、美軍連三天空襲、IRGC 打了兩艘油輪、Hormuz 關閉、Brent $85.92——A 吃書：我沒資格宣布一件事結束；B 的「Hormuz 真有船過」條件從沒觸發、第三批從沒進場',
  description: '禮拜五晚上、東京、很熱。今天東京股市收 63,674、跌 4.73%、盤中一度崩掉 4,130 點（-6.18%）；Kioxia -16.1%、Taiyo Yuden -11.9%、SoftBank -9%、東京威力科創 -8.1%；台灣 -6.5%、台積電 -7.3%。但今晚真正的題目、是一個矛盾：台積電昨天交出了破紀錄的財報——營收 $40.2B、毛利 67.7%、還把 2026 整年營收成長從「30% 以上」上修到「40% 以上」。需求不只是真的、還比大家想的更強。結果股價崩。為什麼？因為它同一份報告裡、把今年的資本支出拉到 $60-64B（多了 15%）、再加美國 $100B、而且海外的廠會把毛利稀釋 2 到 4%。市場問的問題已經換了——不再是「有沒有需求」、是「這些錢誰出、股東最後分到什麼」。這正是 ep69 沒講完的下半句：需求是真的、不代表你會賺到錢。師傅一聽就懂——生意好到要開二店、押金裝潢請人的錢從自己口袋出、二店毛利還比本店差、所以生意越好、口袋可能越空。另一邊、a 要吃書：三個禮拜前他才在這裡「安靜地送走」伊朗那條線、說大部分事情是慢慢淡出的；結果停火被宣布結束、美軍連三天空襲、IRGC 打了兩艘油輪、Hormuz 關了、Brent 衝到 $85.92。他學到的是——你沒有資格宣布一件事結束。而 b 那個「Hormuz 真有船過我才進第三批」的條件、從頭到尾沒觸發過、所以她從沒進場——她說那不是先知、是懶惰的紀律。至於師傅老婆——她從 65,000 問到 72,000 都沒買、今天 63,674、比她最早問的還低。她問「所以我的猶豫是對的？」答案很誠實：猶豫不等於紀律。',
  actions: [
    { type: 'bgm', track: 'chill-lofi', command: 'play' },

    {
      type: 'narration',
      text: '禮拜五晚上、東京、很熱。今天股市很難看——日經收 63,674、跌了 4.73%、跌掉 3,161 點；盤中最慘的時候、一度崩掉 4,130 點、跌超過 6%。做記憶體的 Kioxia -16.1%、Taiyo Yuden -11.9%、SoftBank -9%、東京威力科創 -8.1%；台灣那邊 -6.5%、台積電 -7.3%。全世界在退燒的、是同一個東西：AI。但今晚真正的題目、是一個矛盾——台積電昨天才交出破紀錄的財報：營收 $40.2B、毛利 67.7%、營業利益率 60.3%、還把 2026 整年的營收成長、從「30% 以上」上修到「40% 以上」。需求不只是真的、還比大家原本想的更強。結果股價、崩。為什麼？因為在同一份報告裡、它把今年要花的錢——買設備、蓋廠的錢——從 $52-56B 拉到 $60-64B、多了一成五；再加上美國那邊一筆 $100B 的長期承諾；而且它自己講、海外的廠會把毛利稀釋 2 到 4%。市場問的問題、已經換了——不再是「有沒有人要買」、而是「這些錢誰出、股東最後分到什麼」。另一邊、三個禮拜前在這張桌上被「安靜送走」的伊朗那條線、回來了、而且更兇：停火被宣布結束、美軍連三天空襲、伊朗那邊說打了兩艘油輪、還打了美軍在科威特跟巴林的基地、Hormuz 海峽關了、油價衝到 $85.92、六月中以來最高。今晚 a 跟 b 都來——一個是來吃書的、一個是來講她那個從沒觸發的條件。',
      duration: 6000,
    },

    {
      type: 'market-data',
      data: {
        tickers: [
          { symbol: 'Nikkei 225（7/17 收、盤中一度 -6.18%）', price: 63674.0, change: -4.73 },
          { symbol: '台積電 TSMC（7/17 台股、破紀錄財報卻崩）', price: -7.3, change: -7.3 },
          { symbol: 'Nasdaq（7/16 收、晶片續殺）', price: 25881.95, change: -1.47 },
          { symbol: 'S&P 500（7/16 收）', price: 7533.77, change: -0.51 },
          { symbol: 'Brent 九月（$85.92、6/15 以來最高、Hormuz 關閉）', price: 85.92, change: 0.0 },
        ],
        volatility: 34,
        vix: 26.0,
        rsi: 28.0,
        beta: 1.4,
        priceHistory: [72353, 69174, 68200, 67400, 66835, 64500, 62704, 63674],
        volumeHistory: [900, 1000, 1100, 1200, 1400, 2000, 2800, 2500],
        sectors: [
          { label: 'Kioxia 7/17 -16.1%（記憶體崩最兇、AI 退燒的震央）', value: 1610, color: '#dd3333' },
          { label: 'Taiyo Yuden 7/17 -11.9%（AI 零組件連坐）', value: 1190, color: '#dd3333' },
          { label: 'SoftBank Group 7/17 -9%（AI 押最重的那個、跌最有感）', value: 900, color: '#dd3333' },
          { label: 'Tokyo Electron 7/17 -8.1%（半導體設備、資本支出疑慮直接打到）', value: 810, color: '#dd3333' },
          { label: '台積電 7/17 -7.3%（破紀錄財報＋上修營收成長到 40%↑、卻因 capex $60-64B＋美國 $100B＋海外廠稀釋毛利 2-4% 而崩）', value: 730, color: '#dd3333' },
          { label: 'Brent 7/8 +5.2% 收 $78.02（美軍空襲伊朗當日；現 $85.92、6/15 以來最高、Hormuz 關閉、兩艘油輪被打）', value: 520, color: '#ddaa33' },
          { label: 'Nikkei 225 7/17 -4.73% 收 63,674（-3,161 點、盤中一度 -4,130 點／-6.18%、回到六月低點）', value: 473, color: '#dd3333' },
        ],
        headline: '禮拜五 21:00 JST：AI 大回頭——Nikkei -4.73% 收 63,674（盤中一度 -6.18%／-4,130 點、六月低點）、Kioxia -16.1% Taiyo Yuden -11.9% SoftBank -9% 東京威力科創 -8.1%、台灣 -6.5% 台積電 -7.3%。矛盾在這：TSMC 財報破紀錄（營收 $40.2B、毛利 67.7%、營益率 60.3%、2026 營收成長上修 30%↑→40%↑）股價反崩——因同份報告 capex 拉到 $60-64B（+15%）＋美國 $100B＋海外廠稀釋毛利 2-4%：市場改問「錢誰出、股東分到什麼」/ 伊朗回來了：停火宣布結束、美軍連三天空襲、IRGC 打兩艘油輪＋科威特巴林基地、Hormuz 關閉、Brent $85.92（6/15 來最高）→ 油貴＋Warsh 鷹派、7/28-29 會議 21% 機率升息',
      },
    },

    { type: 'enter', character: 'chef', toTile: 'stove' },
    { type: 'wait', duration: 500 },
    { type: 'move', character: 'chef', toTile: 'prep-area' },
    { type: 'wait', duration: 500 },
    { type: 'move', character: 'chef', toTile: 'stove' },
    { type: 'wait', duration: 400 },

    { type: 'enter', character: 'customer-a', toTile: 'entrance' },
    { type: 'enter', character: 'customer-b', toTile: 'entrance' },
    { type: 'move', character: 'chef', toTile: 'counter-center' },
    { type: 'dialogue', character: 'chef', text: 'いらっしゃい、兩位一起到、稀客。這種天氣、先生啤酒、別跟我客氣。今天我一開店就在等你們——我老婆早上把報紙拍在桌上、說日經跌到 63,674。師傅你知道嗎、她第一次問我該不該買的時候、是 65,000。她從 65,000 問到 72,000、每次都沒買、今天跌回來、比她最早問的還低。她今天問我一句、我答不出來——「所以我猶豫了兩個月、其實是對的？」' },

    { type: 'move', character: 'customer-a', toTile: 'random-stool' },
    { type: 'sit', character: 'customer-a' },
    { type: 'move', character: 'customer-b', toTile: 'random-stool' },
    { type: 'sit', character: 'customer-b' },

    { type: 'dialogue', character: 'customer-b', text: '師傅、先來杯冰的、今天真的需要。你太太這個問題、問得比她自己以為的深。我給你一個誠實、但可能不太中聽的答案：她這次的結果是好的、但她的「猶豫」、不等於「紀律」。這兩個東西、這次剛好長得一樣、但骨子裡完全不同。' },

    { type: 'move', character: 'chef', toTile: 'stove' },
    { type: 'wait', duration: 400 },

    { type: 'dialogue', character: 'chef', text: '猶豫跟紀律不一樣？可是結果一樣啊——她就是沒買、然後它就跌了、她躲掉了。這樣還不算對？' },

    { type: 'dialogue', character: 'customer-b', text: '師傅、差別在「下一次」。紀律是：我事先想好「什麼情況我做什麼」、然後照做——所以它會重複、下次還救得了我。猶豫是：我被嚇住了、不敢動——它不會重複、因為它不是決定、是僵住。這次僵住剛好躲過、下次可能就是僵住、然後在最低點被嚇到砍掉。你太太如果以為「我這兩個月證明了我很會看」、那才危險——她會覺得自己有這個本事、下次就敢重押。她真正該學的不是「我猜對了」、是「我根本沒有計畫」。' },

    { type: 'dialogue', character: 'customer-a', text: '師傅、b 講得很重、但很對、我補一個角度。你太太這兩個月、其實一直在「等一個永遠不會來的訊號」——她在等「現在買絕對安全」的那一刻。那一刻不存在。所以她從 65,000 等到 72,000、又等回 63,674、看起來省了錢、其實她這兩個月什麼都沒學到、下次一樣不知道怎麼辦。如果她那時候真的照我們講的、分成幾份、在 65,000 放第一份——今天她會小賠、但她手上會有計畫、有剩下的錢、而且今天這個價、對她反而是機會。有計畫的小賠、比沒計畫的僥倖、值錢太多。' },

    { type: 'dialogue', character: 'chef', text: '有計畫的小賠、比沒計畫的僥倖值錢——這句我要原話帶回去、雖然她大概會瞪我。我懂了、就像我進貨、有時候我看錯、多囤了一批漲價的貨、賠一點；但我知道我為什麼囤、下次我會修。可是如果我只是「不敢叫貨、然後剛好那批爛掉了」——我什麼都沒學到、我只是嚇到不敢動而已。運氣好那次、最會害人。' },

    { type: 'wait', duration: 400 },

    // ── The TSMC paradox — the meat of the episode ──
    { type: 'dialogue', character: 'chef', text: '那今天到底怎麼了？我聽新聞說、台積電財報「破紀錄」、結果股票跌 7%。b 上個月才在這裡跟我說、需求是真的、都簽了三五年的長約——那怎麼還會跌？是不是妳上次講錯了？' },

    { type: 'dialogue', character: 'customer-b', text: '師傅、你這一刀捅得好、我接。我上個月講的沒錯——需求真的是真的、而且今天台積電讓它更硬：它營收破紀錄、毛利 67.7%、還把今年整年的營收成長、從「30% 以上」上修到「40% 以上」。需求不只沒退、還比大家想的更好。但我上個月講的、只是上半句。今天市場教我們的、是我沒講完的下半句——「需求是真的」、不等於「你會賺到錢」。' },

    { type: 'dialogue', character: 'chef', text: '生意好、卻不賺錢？這……這我得想一下。妳講清楚一點。' },

    { type: 'dialogue', character: 'customer-a', text: '師傅、我用你最熟的東西講。假設你這家店、生意好到每天排隊排到巷口——需求是真的、對吧。所以你決定開二店。那開二店要什麼？押金、裝潢、廚具、請人、訓練。這些錢從哪來？從你這家店賺的錢裡面拿。所以會發生一件很怪的事——你生意越好、你越想擴、你口袋裡剩下的、反而越少。' },

    { type: 'dialogue', character: 'chef', text: '……哦。哦！我懂了、我完全懂了。而且還有一件事你們可能不知道——二店一定沒有本店好賺。因為二店在別的地方、租金比較貴、我不在那裡顧、師傅是新請的、火候還沒到、耗損比較多。所以二店就算客人一樣滿、毛利就是比本店差。我開店這麼久最痛的就是這個：本店賺的錢、拿去養一個比較不會賺的二店。' },

    { type: 'dialogue', character: 'customer-a', text: '師傅——你剛剛把台積電今天跌 7% 的原因、一字不差地講完了。真的。它在同一份報告裡講了三件事：第一、生意很好、上修。第二、今年要花的錢、從 $52-56B 拉到 $60-64B、多了一成五、還加上美國那邊 $100B 的長期承諾——那就是你的押金裝潢廚具。第三、它自己承認、海外的廠會把毛利稀釋 2 到 4%——那就是你的「二店沒本店好賺」。市場看完就懂了：生意是很好、但賺的錢要一直丟回去擴廠、而且新擴的那部分還比較不好賺。' },

    { type: 'dialogue', character: 'customer-b', text: '師傅、所以市場今天問的問題、已經換了。上個月大家吵的是「有沒有需求」——那題答完了、有、而且很多。今天大家改問的是「那這些錢誰出、我這個股東最後分到什麼」。這是完全不同的一題。一家公司可以生意好到爆、同時股東什麼都拿不到——因為賺的錢全部拿去蓋下一座廠了。我們桌上這幾天最常聽到的一句是：「成長不是免費的、有人要付錢、而那個人就是你。」' },

    { type: 'dialogue', character: 'chef', text: '成長不是免費的、有人要付錢——那個人就是你。哇。這句話……我老婆每次問我「生意這麼好、我們怎麼還是這麼窮」、答案就是這個。錢都變成新的冰箱、新的排煙管、新的二店押金了。原來我跟台積電、煩惱是一樣的、只是後面的零比較少。' },

    { type: 'dialogue', character: 'customer-b', text: '師傅、「煩惱一樣、只是零比較少」——這句今天最好笑也最真。而且我再補一個今天很關鍵的分別、用我上個月教你的那個工具、但今天答案是反的。你記得六月那次韓國一天崩 10%、我跟你說那一半是「被逼著砍」的機械盤、跟看法無關、所以風暴過了東西還在？' },

    { type: 'dialogue', character: 'chef', text: '記得、借錢放大的基金被規則逼著賣、尾巴搖狗。所以今天也是那個嗎？那是不是過幾天又彈回來了？' },

    { type: 'dialogue', character: 'customer-b', text: '師傅、不是。今天不是。這就是為什麼我今天臉這麼臭。今天沒有人被逼——今天是大家真的坐下來、重新算了一遍、然後決定「這個價我不付」。這是「想通了才賣」、不是「不得不賣」。同一個工具、今天量出來的答案是反的。而這種跌、比六月那種難好——因為六月賣的人心裡還想買、他只是被規則逼走；今天賣的人、是改變主意了。人被逼走、風頭過了會回來；人改變主意、要等他再被說服一次。' },

    { type: 'dialogue', character: 'chef', text: '「人被逼走會回來、人改變主意要等他再被說服」——這個分別、我一輩子用得到。我店裡也是啊——客人今天沒來、是因為下大雨、還是因為他上次覺得我變難吃了？下雨的、雨停就回來；覺得你變難吃的、你要重新做給他吃一次、他才可能回頭。差超多的。' },

    { type: 'wait', duration: 400 },

    // ── A eats his words: Iran came back ──
    { type: 'dialogue', character: 'chef', text: 'a、你今天特別安靜。你進門到現在、都在讓 b 講。' },

    { type: 'dialogue', character: 'customer-a', text: '師傅、因為我今天是來吃書的。你還記不記得、三個禮拜前、我一個人坐在這裡、講伊朗那條線「熄火了」、還跟你說什麼「大部分真實世界的事、不是轟轟烈烈結束的、是慢慢淡出的」——我們那天還煮了土鍋炊飯、我說要「安靜地、體面地、送它一程」。' },

    { type: 'dialogue', character: 'chef', text: '記得啊、你那天心情很平靜、我還跟你講我師父交班、把刀洗乾淨掛回去那件事。怎麼了嗎？' },

    { type: 'dialogue', character: 'customer-a', text: '它回來了、師傅。而且比之前任何一次都兇。停火被宣布結束、美軍連續三天空襲、伊朗那邊說打了兩艘油輪、還打了美軍在科威特跟巴林的基地、然後把 Hormuz 海峽關了——那是全世界石油要走的那條水路。油價從 $76 一路衝到 $85.92、六月中以來最高。師傅、我三個禮拜前、在你這張桌子上、親手替它辦了告別式。結果它不但沒死、它還把桌子掀了。' },

    { type: 'dialogue', character: 'chef', text: '……那你現在心裡是什麼感覺？' },

    { type: 'dialogue', character: 'customer-a', text: '丟臉、但更多的是學到東西。師傅、我這幾天一直在想我到底錯在哪。我不是錯在「猜錯方向」——猜錯很正常、我這行天天猜錯。我錯在「我宣布了一件事結束」。這個動作本身、就是錯的。市場沒有給我這個權力、沒有人有這個權力。一件事有沒有結束、不是我看它安靜了三個禮拜就能蓋章的。我那天講「慢慢淡出」講得那麼漂亮、其實是我把「我希望它結束」、包裝成「它結束了」。' },

    { type: 'dialogue', character: 'chef', text: 'a、這個我懂、而且我吃過虧。颱風那次——氣象說走了、我就把門口的木板拆了、桌椅都搬回來。結果隔天回南風、比颱風當天還大、我店門口的招牌整個飛掉。我師父後來跟我講一句、我記到現在：「颱風走沒走、不是新聞說了算、是你把木板拆掉那天晚上、還睡不睡得著。」' },

    { type: 'dialogue', character: 'customer-a', text: '師傅……「颱風走沒走、不是新聞說了算、是你把木板拆掉那天晚上還睡不睡得著」。你師父這句、比我這三個禮拜想的都準。我那天就是把木板拆了——不是因為颱風真的走了、是因為我看它安靜、我累了、我想收工。我還記得你師父另一句：「沒被颱風夜考過的高湯、不能放 menu。」我那條線、根本還沒被考完、我就自己端上桌說它熟了。' },

    { type: 'dialogue', character: 'chef', text: '那你現在打算怎麼辦？木板要再釘回去？' },

    { type: 'dialogue', character: 'customer-a', text: '釘回去、而且這次我不拆了——我改規矩。以後我不講「這條線結束了」、我只講「這條線現在很安靜」。安靜是一個狀態、可以描述；結束是一個判決、我沒資格下。我那個「七分信、三分留」的配比、湯底我沒動——我動的是「留」的內容：以前「留」的是「萬一我看錯方向」；現在「留」多一格、留給「萬一我以為它結束了、但它只是在喘氣」。' },

    { type: 'dialogue', character: 'chef', text: '「安靜可以講、結束我沒資格講」——a、你今天雖然是來吃書的、但我覺得你這句、比你上次講得好的時候更值錢。人在對的時候講的話、都很漂亮；錯了以後還願意站在這裡把話講清楚的、比較少。' },

    { type: 'wait', duration: 400 },

    // ── B's condition that never fired ──
    { type: 'dialogue', character: 'chef', text: 'b、那妳呢？妳之前不是也一直在等伊朗那邊什麼？' },

    { type: 'dialogue', character: 'customer-b', text: '師傅、我等的是一個很土的條件——我跟自己說、要等「Hormuz 真的有船過」、我才放第三批錢進去。就這樣、一句話、很笨。結果從那天到今天、我一次都沒進場。因為那個條件不但沒到——它還反過來了：現在那條水路關了、船不但沒過、還有兩艘被打了。' },

    { type: 'dialogue', character: 'chef', text: '那妳等於是躲掉了？b、妳好厲害、妳早就看出來會打起來？' },

    { type: 'dialogue', character: 'customer-b', text: '師傅、不不不、這個我一定要講清楚、不然就變成吹牛了。我完全沒看出來會打起來。我三個禮拜前跟 a 一樣、覺得那邊要平靜了。我唯一做對的事、是我當初把話講死了——我沒有說「我覺得快好了所以進場」、我說「有船過我才動」。然後我就沒動。師傅、這不是先知、這是懶惰的紀律。我的腦袋沒有救我、是我三個禮拜前寫下的那個條件救了我。' },

    { type: 'dialogue', character: 'customer-a', text: '師傅、b 這個「懶惰的紀律」、才是今晚真正的重點、我要在這裡幫她講。你看今晚——我跟 b、三個禮拜前對伊朗的「看法」、一模一樣、我們都覺得它要平靜了。看法一樣、結果差在哪？差在她把條件寫死、我把結論講死。她寫的是「有船過我才動」——一個可以被檢查的條件；我講的是「它結束了」——一個結論。條件會保護你、結論會害你。因為條件是讓事實來決定你動不動；結論是你自己先動了、然後等事實來證明你。' },

    { type: 'dialogue', character: 'chef', text: '條件會保護你、結論會害你……a、b、我跟你們講、你們這行跟我這行、我現在越聽越覺得是同一件事。我進貨也是——我如果說「這批魚我看很好、先叫二十條」、那是結論、我賭了。可是我如果說「今天客人有超過三十桌、我明天才叫二十條」、那是條件、我讓客人替我決定。三十年了、我每次出包、都是我先下結論那幾次。' },

    { type: 'dialogue', character: 'customer-b', text: '師傅、你這個「我每次出包都是我先下結論那幾次」——我要抄。而且你有沒有發現、今晚三個故事、其實是同一個故事：a 先下結論說伊朗結束了、被打臉；你太太先下結論說「等一個絕對安全的時機」、結果兩個月僵在那裡；而市場自己、上個月先下結論說「AI 需求是假的」、被 Micron 打臉、這個月又先下結論說「需求真就一定賺錢」、今天被台積電打臉。全部都是同一個病——太早下結論。' },

    { type: 'wait', duration: 400 },

    // ── the oil / Fed chain, in chef's own costs ──
    { type: 'dialogue', character: 'chef', text: '對了、還有一件事我想問——油價衝到 $85、那個跟我有關嗎？我這禮拜叫的炸油、又漲了、運費也加了一次。這兩個是同一件事嗎？' },

    { type: 'dialogue', character: 'customer-a', text: '師傅、是同一件事、而且你比報紙先感覺到。你順著想一遍就通了：那條水路關了、油運不出來、油就貴；油貴、所有東西的運費都貴、你的炸油、你的瓦斯、送貨的車、全部一起貴。東西一貴、政府那邊就更不敢把利息降下來——因為降利息會讓東西更貴。利息降不下來、錢就一直很貴；錢很貴的時候、大家就更不願意用高價買那些「要等很多年才賺錢」的股票——像 AI 這種。所以你今天看到的：油貴、跟 AI 股票崩、是同一條線串起來的。' },

    { type: 'dialogue', character: 'chef', text: '所以我的炸油漲價、跟東京的股票崩盤、是同一件事的兩頭？我在巷子裡付的錢、跟他們在螢幕上看的數字、是同一條線？' },

    { type: 'dialogue', character: 'customer-b', text: '師傅、就是這樣、而且你那頭比較真實。我們螢幕上那個數字、講到底就是在猜你巷子裡的炸油會不會一直漲。下下禮拜政府那邊要開會、市場現在算的是——七成多的人覺得他們會按兵不動、但有兩成的人覺得他們會直接把利息「往上」調。師傅、往上調、不是往下。這在半年前是沒人敢想的事。你的炸油、就是他們開會桌上的那張表。' },

    { type: 'wait', duration: 400 },

    // ── Closing — Friday night, hot, both customers, clean-hands discipline ──
    { type: 'move', character: 'chef', toTile: 'counter-center' },
    { type: 'dialogue', character: 'chef', text: '好、今天這麼熱、又這麼難看、我不做重的。先生啤酒續上、枝豆、冷奴先壓著。主的我做夏天的——鱧魚做湯引、沾梅肉、清爽；鮎魚鹽烤、現在正肥、骨頭酥了可以整條吃；冬瓜煮蝦芡、冰的。收尾給你們一人一碗冷やし茶漬け。今天不配溫酒了、我冰了一支冷酒。兩位、今天辛苦——一個吃書、一個臉臭。' },

    { type: 'dialogue', character: 'customer-b', text: '師傅、鮎魚、太好了。而且今天是禮拜五、剛好。我爸做了三十年、留給我一句話、我每個禮拜五都會想起來：「週五收盤手上要乾淨、別把煩惱帶回家過週末。」今天收盤前、我把該處理的處理完了、沒留一個會讓我禮拜六早上醒來心跳加速的東西。師傅、跌 4.73% 的日子、我沒有多賺、但我可以好好過這個週末——這件事的價值、我年輕的時候完全不懂。' },

    { type: 'dialogue', character: 'customer-a', text: '師傅、我今天特別需要這頓。b、你爸那句我也偷用——但我今天要加一句我自己的：「手上乾淨」不只是倉位、還有腦袋。我這三個禮拜、腦袋裡一直留著一個「伊朗結束了」的結論、那個結論就是髒東西、它讓我後面看什麼都歪。今天我把它丟掉了。我太太昨天問我為什麼一直在陽台站著、我說我在把一個結論拆掉、比拆一個倉位難多了。' },

    { type: 'dialogue', character: 'chef', text: '拆結論比拆倉位難——a、你今天講的每一句、都比你上次得意的時候好聽。我跟你們講、我這三十年最大的體會就是：這行沒有「學會了」這三個字。我以為我懂高湯了、結果颱風夜給我上一課；我以為那個客人不會回來了、他上個月帶三個人回來。你們的市場、我的廚房、一樣——只要你敢說「我懂了」、它明天就給你看一個你沒見過的東西。所以我現在只敢說「我今天煮得還可以」。' },

    { type: 'dialogue', character: 'customer-a', text: '師傅、「我只敢說我今天煮得還可以」——這句、就是我今天花了一整條伊朗線、才學回來的東西。你三十年前就會了。我以後不講「這條線結束了」、我改講「這條線今天很安靜」。就像你不講「我這鍋高湯完美了」、你講「今天這鍋還可以」。留一個「明天可能被打臉」的位子給自己——這不是沒信心、這是這行唯一活得久的方法。' },

    { type: 'dialogue', character: 'chef', text: '鮎魚烤好了、皮脆了、你們趁熱、整條吃、骨頭酥的。今天這種日子、就是這樣——市場掀桌、油價漲、我的炸油也漲、大家都難看。可是你們兩個還是走進來、坐下、把話講清楚、承認自己哪裡錯了、然後好好吃一頓。這個比賺錢難。冷酒斟上——敬「我今天煮得還可以」、敬「這條線今天很安靜」、敬那些我們都還沒學會的事。' },

    { type: 'sfx', sound: 'chimes' },

    { type: 'wait', duration: 500 },
    { type: 'move', character: 'chef', toTile: 'stove' },

    {
      type: 'narration',
      text: '禮拜五晚上 10 點半、東京、還是很熱。今天的故事是「太早下結論」——三個人、三個版本、同一個病。市場端：Nikkei -4.73% 收 63,674（-3,161 點、盤中一度 -4,130 點／-6.18%、回到六月低點）、Kioxia -16.1%、Taiyo Yuden -11.9%、SoftBank -9%、東京威力科創 -8.1%、台灣 -6.5%、台積電 -7.3%。核心矛盾：台積電財報破紀錄（營收 $40.2B、毛利 67.7%、營益率 60.3%、2026 營收成長上修 30%↑→40%↑）、股價卻崩——因為同一份報告把 capex 拉到 $60-64B（+15%）、加美國 $100B 承諾、還自認海外廠稀釋毛利 2-4%。ep69「需求是真的」是對的、但只是上半句；下半句是「需求是真的、不等於你會賺到錢」（師傅:「生意好到要開二店、押金裝潢請人的錢從本店口袋出、二店還沒本店好賺——所以生意越好、口袋越空。我跟台積電煩惱一樣、只是零比較少」）。B 用 ep69 的工具量今天、答案是反的：六月是「被逼著砍」、今天是「想通了才賣」——「人被逼走、風頭過了會回來；人改變主意、要等他再被說服一次」（師傅:「客人沒來、是下雨、還是覺得我變難吃了」）。A 吃書：三禮拜前他在這張桌上「安靜送走」伊朗線、如今停火宣布結束、美軍連三天空襲、IRGC 打兩艘油輪＋科威特巴林基地、Hormuz 關閉、Brent $85.92（6/15 來最高）——他的錯不是猜錯方向、是「我宣布了一件事結束、而我沒有這個權力；我把『我希望它結束』包裝成『它結束了』」（師傅師父:「颱風走沒走、不是新聞說了算、是你把木板拆掉那天晚上還睡不睡得著」）。A 改規矩：以後只講「這條線很安靜」、不講「結束」；湯底不動、「留」多一格給「它只是在喘氣」。B 的 ep61 條件「Hormuz 真有船過」從沒觸發、反而倒轉、第三批從沒進場——但她拒絕居功：「我完全沒看出來會打起來、救我的不是腦袋、是三禮拜前寫下的那個條件——這不是先知、是懶惰的紀律」。A 收束：「她把條件寫死、我把結論講死；條件會保護你、結論會害你」（師傅:「三十年了、我每次出包、都是我先下結論那幾次」）。師傅老婆從 65,000 問到 72,000 沒買、今天 63,674 比最初還低、問「所以我的猶豫是對的？」——答案：猶豫 ≠ 紀律、這次結果一樣但骨子不同、僵住不會重複、計畫才會（A:「有計畫的小賠、比沒計畫的僥倖值錢太多」）。油鏈：Hormuz 關→油貴→運費／炸油／瓦斯全漲→政府更不敢降息→錢貴→沒人願意高價買「要等很多年才賺錢」的 AI 股（師傅:「我巷子裡付的炸油錢、跟他們螢幕上的數字、是同一條線的兩頭」；7/28-29 會議 21% 機率升息、半年前沒人敢想）。夏夜收尾：鱧魚湯引、鮎魚鹽烤、冬瓜、冷酒——B 她爸「週五收盤手上要乾淨、別把煩惱帶回家過週末」；A 加一句「手上乾淨不只是倉位、還有腦袋、拆一個結論比拆一個倉位難多了」。師傅收在三十年的那句：「只要你敢說『我懂了』、它明天就給你看一個你沒見過的東西——所以我只敢說『我今天煮得還可以』。」',
      duration: 6000,
    },
  ],
};
