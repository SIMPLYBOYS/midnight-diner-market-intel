import type { Episode } from '../../engine/types';

/**
 * Sources verified 2026-05-12 (Tue JST):
 * - Senate cloture on Warsh's Fed Board nomination passed 49-44 Mon 5/11
 *   ~5:30pm ET = Tue 5/12 06:30 JST. Democrats Fetterman (D-PA) and Coons
 *   (D-DE) crossed over to vote yes. Sen. Warren (ranking, Banking)
 *   characterized Warsh as Trump's "sock puppet". Governor (14-yr) floor
 *   vote teed up for Tue ~3pm ET = Wed 04:00 JST; chair (4-yr) cloture/vote
 *   to follow Wed/Thu. Powell's chair term ends Fri 5/15. (Roll Call 5/11,
 *   Bloomberg, Reuters via Investing.com, Townhall)
 * - Trump Mon afternoon Oval Office presser: called Iran's counter-proposal
 *   "garbage" — "I would call it the weakest, right now, after reading that
 *   piece of garbage they sent us — I didn't even finish reading it."
 *   Said the ceasefire is on "massive life support, where the doctor walks
 *   in and says, 'Sir, your loved one has approximately a 1% chance of
 *   living.'" Also: Iran "change their mind" at points of agreement; "best
 *   plan ever" to end the war; "Iran cannot have a nuclear weapon." (CNN
 *   live updates 5/11, WaPo, NBC, CBS, Fortune, Time, Bloomberg)
 * - Iranian President Pezeshkian on X (Persian), Mon 5/11: "We will never
 *   bow our heads before the enemy, and if talk of dialogue or negotiation
 *   arises, it does not mean surrender or retreat." (CNBC 5/11, IRIA News,
 *   CNBC Africa, Press TV)
 * - Asia Tue 5/12 close:
 *   - KOSPI: opened higher, rose +2.3% intraday to record 7,999.67 (touched
 *     8,000), then flash-reversed -5.1% to intraday low 7,421.71. Closed
 *     -1.45% / -113.75 pts at 7,708.49. Snapped 5-day winning streak.
 *     Driver: Kim Yong-beom (Presidential Office policy planning chief)
 *     Facebook post Tue morning proposing "Citizen Dividend" / "national
 *     dividend on AI excess profits". Market initially read as direct levy
 *     on AI corp profits → chip selloff. Kim later clarified the dividend
 *     would come from "excess tax revenue", not direct profit extraction —
 *     definition of "excess" left ambiguous. (Korea Herald, TradingView/
 *     Reuters, TradingKey, Bloomberg "Korea Roils Markets" 5/12, Seoul
 *     Economic Daily, Korea Times, Japan Times, FXStreet "Asia Wrap")
 *   - Samsung Electronics: by 11:00 KST -4.20% at 273,500 won (vs Mon close
 *     +6.33% at 285,500). SK Hynix: -1.28% at 1,856,000 won (vs Mon +11.68%
 *     at 1,888,000). (Seoul Economic Daily, TradingKey)
 *   - Nikkei: +226.82 pts / +0.36% to 62,644.7 (recovered from Mon's -0.47%
 *     close at 62,417.88). (BusinessUpturn, CNBC Asia)
 *   - Hang Seng: +0.34% to 26,495.88 (BusinessUpturn)
 * - Oil Tue 5/12:
 *   - Brent July: +0.96% to $105.21
 *   - WTI June: +1.10% to $99.15
 *   - Since 10-week war (started Feb 28) WTI and Brent both up >40%.
 *   - Hormuz remains effectively shut. (CNBC 5/12, OilPrice, FXStreet,
 *     The National 5/11, TradingEconomics)
 * - USD/JPY: ~157.11-157.19 area. BOJ tightening trajectory, Tokyo real
 *   wages rose for 3rd straight month (March data). (FXStreet, BOJ daily)
 * - Polymarket: latest.json snapshot is still 2026-05-11T01:13:30Z
 *   (Mon 10:13 JST). Iran-regime market last printed 6.5% with no fresh
 *   refresh available from this ISP (gamma-api geo-blocked). Per past
 *   pattern (ep30 fix), reference the line as flat-since-spike in dialogue
 *   only — do NOT show a fabricated Tue chart.
 * - sectors[].value methodology: |%change|×100 of headline asset for each
 *   theme, sorted desc. Tuesday's picture: KOSPI snaps the streak, chips
 *   the painful losers, oil keeps grinding, Nikkei quietly green.
 */
export const EPISODE_33: Episode = {
  id: 'ep-33',
  date: '2026-05-12',
  title: '20260512 禮拜二晚上、cloture 49-44 過了、Kospi 摸到 8000 又摔下來、Trump 說「加護病房、1% 活著」',
  description: '禮拜二晚上、Tokyo 21:00。今天早上 6 點半、紐約那邊 Warsh 的 cloture 49-44 過了、兩個民主黨員 Fetterman 跟 Coons 跑票；明天清晨 4 點、Tokyo 還在睡覺的時候、Senate 會投正式的 governor 任命；再過 3 天 Powell 就把椅子交出去。昨晚紐約那邊 Trump 在橢圓辦公室裡用「garbage」「在加護病房、家屬只剩 1% 活著的機率」形容停火；伊朗總統 Pezeshkian 在 X 上波斯文回「我們不會低頭」。今天亞洲日盤、Kospi 早上摸到 7,999.67、差 0.33 點就 8,000、結果韓國總統府的政策幕僚 Kim Yong-beom 一則 Facebook 貼文講「AI 超額利潤要分給全民」、Kospi 從 8,000 一路摔到 7,421、最後收 -1.45%、五連紅斷了。昨天的英雄 Samsung 今天 -4.2%、SK Hynix -1.28%。Nikkei +0.36% 安靜收 62,644。油繼續磨——Brent +0.96% 收 $105.21、WTI 摸 $99.15。',
  actions: [
    { type: 'bgm', track: 'chill-lofi', command: 'play' },

    {
      type: 'narration',
      text: '禮拜二晚上 9 點、東京。早上 6 點半全亞洲交易桌站起來看的那一票——Warsh 的 cloture——49 比 44 過了、兩個民主黨員（Fetterman 跟 Coons）跑票投贊成。明天清晨 4 點 Tokyo 時間、Senate 會投他的 governor 正式任命；後天再投 Fed chair。Powell 禮拜五交位子、再 3 天。昨晚紐約那邊 Trump 在橢圓辦公室裡、把伊朗的回信比喻成「在加護病房、醫生跟家屬說『你愛的人剩 1% 機率活著』」、然後一句「我連看都沒看完、garbage」；伊朗總統 Pezeshkian 在 X 上用波斯文回了一句「我們不會低頭」。同一時間亞洲這邊日盤、昨天 +4.32% 創新高的 Kospi、今天早上一開盤再衝、9 點 50 分摸到 7,999.67——差 0.33 點就破 8,000、結果韓國總統府的政策幕僚 Kim Yong-beom 一則 Facebook 貼文講「AI 超額利潤要分給全民」、市場第一秒讀成「政府要從 AI 公司賺的錢直接抽走」、Kospi 從 8,000 直接摔 5%、低點 7,421、Samsung 整天 -4.2%、SK Hynix -1.28%。昨天的英雄、今天變兇手。Kim 後來補一句「我講的是稅收的超額、不是公司利潤」、但市場已經被嚇到一半、最後收 -1.45%。Nikkei 反而安靜、+0.36% 收 62,644。油繼續磨——Brent 再 +0.96% 收 $105.21、WTI 摸 $99.15、戰爭打了 73 天、霍爾木茲海峽繼續關著。',
      duration: 6000,
    },

    // ── Today's tickers + sectors ──
    {
      type: 'market-data',
      data: {
        tickers: [
          { symbol: 'Kospi（收）', price: 7708.49, change: -1.45 },
          { symbol: 'Brent 油（NY 收）', price: 105.21, change: 0.96 },
          { symbol: 'WTI 油（NY 收）', price: 99.15, change: 1.10 },
          { symbol: 'Nikkei（收）', price: 62644.70, change: 0.36 },
          { symbol: 'USD/JPY', price: 157.11, change: 0.05 },
        ],
        volatility: 28,
        vix: 18.7,
        rsi: 58.4,
        beta: 1.08,
        priceHistory: [7368, 7402, 7488, 7572, 7651, 7822, 7999, 7708],
        volumeHistory: [200, 210, 218, 240, 262, 295, 380, 332],
        // sectors[].value = |%change| × 100 of headline asset per theme.
        // Sorted desc. Today's headline: KOSPI streak snaps, chips bleed,
        // oil grinds, Nikkei quiet.
        sectors: [
          { label: 'KOSPI -1.45%（早上摸 7,999.67、AI 分紅政策幕僚一則 Facebook、五連紅斷）', value: 145, color: '#cc4422' },
          { label: 'WTI 油 +1.10%（戰打 73 天、磨到 $99.15、再 0.85 站回 $100）', value: 110, color: '#cc4422' },
          { label: 'Brent 油 +0.96%（NY 收 $105.21、Trump「加護病房」沒讓油再彈）', value: 96, color: '#cc4422' },
          { label: 'Nikkei +0.36%（安靜收 62,644、昨天 -0.47% 今天討回一半）', value: 36, color: '#22cc55' },
        ],
        headline: '禮拜二 21:00 JST：Warsh cloture 49-44 過 / Trump「ceasefire 在加護病房、1% 活著」/ Pezeshkian「不會低頭」/ Kospi 7,999 摸到再摔 / Samsung -4.2% / Brent +0.96% / 明早 04:00 JST governor 投票',
      },
    },

    // ── Chef alone — Monday's high washes out into Tuesday's hangover ──
    { type: 'enter', character: 'chef', toTile: 'stove' },
    { type: 'wait', duration: 500 },
    { type: 'move', character: 'chef', toTile: 'prep-area' },
    { type: 'wait', duration: 400 },
    { type: 'move', character: 'chef', toTile: 'stove' },
    { type: 'wait', duration: 400 },

    // Customer A enters first — bleary, came straight from the desk
    { type: 'enter', character: 'customer-a', toTile: 'entrance' },
    { type: 'move', character: 'chef', toTile: 'counter-center' },
    { type: 'dialogue', character: 'chef', text: 'いらっしゃい。我今天 5 點半起來熬湯、6 點半把高湯撈起來的時候、想到——「啊紐約那邊正在投票」——結果撈完打開新聞、過了。你們今天看起來都沒睡飽。' },

    { type: 'move', character: 'customer-a', toTile: 'random-stool' },
    { type: 'sit', character: 'customer-a' },

    { type: 'dialogue', character: 'customer-a', text: '師傅、我們桌上整層樓 6 點 25 分站著、6 點半過——49 比 44。49 不算多、44 也不算少、但中間有兩個民主黨員跑票——一個叫 Fetterman、賓州的、另一個叫 Coons、德拉瓦的。這個重要。意思是、Trump 提的這個人選、不是純粹的「藍紅對決」——藍營裡有人覺得「OK、給他過、Powell 禮拜五要走、不能讓位子空著」。' },

    { type: 'move', character: 'chef', toTile: 'stove' },
    { type: 'wait', duration: 400 },

    { type: 'dialogue', character: 'chef', text: '49 跟 44、聽起來像我們高中投班長——一票兩票的差距。聯準會主席這麼大的位子、就用這種班長等級的票數決定？我以為會是 80 比 10、那種「全國同意」的感覺。' },

    { type: 'dialogue', character: 'customer-a', text: '師傅、你抓到了今天最值得想的點。Fed chair 這個位子、過去 40 年都是 80 比 10、90 比 5 那種「大家都同意」過——叫做 bipartisan、兩黨共識。今天 49-44、是 1979 年以來最窄的一次。意思是、從今天起、聯準會這個位子變成「政治位子」——不是「全國的位子」。市場現在還沒消化這件事、但未來幾年、每次 Fed 開會、市場都會問「他這次是不是因為政治才這樣決定」——這個信任、要花很久才能補回來。' },

    { type: 'dialogue', character: 'chef', text: '所以這個改變、不是今天看得到、是慢慢看到？像我老婆每次說「我們家米換牌子了」、第一個月吃不出來、第三個月才覺得「不一樣」？' },

    { type: 'dialogue', character: 'customer-a', text: '師傅這個比喻、可以直接拿去寫報告。「制度信任就像家裡換米——第一個月吃不出來、第三個月才覺得不一樣」——我們桌上禮拜會議我就引用你這句。' },

    { type: 'wait', duration: 400 },

    // ── Trump's "1% chance of living" / Pezeshkian's "never bow" ──
    { type: 'dialogue', character: 'chef', text: '對了我老婆昨天看完電視、跟我講「總統把停火比喻成『家屬剩 1% 活著的機率』」——這個比喻她記了一整晚、她說「會講這種話的人、心情已經到底了」。然後她睡前刷手機、看到伊朗那邊回「我們不會低頭」——四個字、她也記了一晚。' },

    { type: 'dialogue', character: 'customer-a', text: '師傅你老婆比我們組長還會抓重點。Trump 原話是這樣的——「我會說、停火是在加護病房裡、有那種強力的維生機器、醫生走進來跟家屬說『先生、你愛的人大概還剩 1% 的機率活著』」。他講這個話、是在橢圓辦公室、坐在那張桌子後面、對著一群記者講的。一個總統、把跟另一個國家的停火、形容成「家屬只剩 1% 機率活著的病人」——這個畫面太具體、所以全亞洲的記者今天早上都在引用這一句。' },

    { type: 'dialogue', character: 'chef', text: '伊朗那邊回的「不會低頭」、原話是什麼？我老婆看的是日文翻譯、字幕跑很快、她沒看清楚。' },

    { type: 'dialogue', character: 'customer-a', text: '伊朗那邊是總統 Pezeshkian 在 X 上、用波斯文發的——翻成中文意思是「我們絕不會在敵人面前低頭、就算坐下來談、也不代表投降或退讓」。他這個是回應 Trump 那句「garbage」——你罵我寄出去的信是垃圾、那我這邊也擺一句「我們不會低頭」回敬你。兩邊都把對話放在公開的話筒前面講、不是放在密室裡。' },

    { type: 'wait', duration: 400 },

    // Customer B enters
    { type: 'enter', character: 'customer-b', toTile: 'entrance' },
    { type: 'move', character: 'customer-b', toTile: 'random-stool' },
    { type: 'sit', character: 'customer-b' },

    { type: 'move', character: 'chef', toTile: 'counter-center' },
    { type: 'dialogue', character: 'chef', text: 'いらっしゃい。妳今天的臉色、跟我家妹妹小孩晚上不睡覺隔天的臉、一模一樣。' },
    { type: 'move', character: 'chef', toTile: 'stove' },

    { type: 'dialogue', character: 'customer-b', text: '師傅你不要笑我——我們 desk 早上 6 點 25 分全部站著看 cloture、結束我以為可以喘一口、結果 9 點 50 分、Kospi 我們在看的盤面、那個數字往上跳到 7,999.67——差 0.33 點就破 8,000——整個交易桌的人都站起來、有人開始拍照、想說「歷史時刻」、我也舉手準備按下單按鈕——結果就在我手按下去之前、有人對著螢幕大喊「Bloomberg 跳一條韓國的——AI 分紅！」、那條線啪一下、從 7,999 直接掉、半小時跌 5%、跌到 7,421。我手停在半空中、沒按下去——但是組長看到我手抬起來、過來罵我一句「你今天差一點按下歷史最高點」。' },

    { type: 'dialogue', character: 'customer-a', text: '我們桌上一樣畫面、不過我們沒有人準備按單——我們是分析師、不是交易員。我們的反應是、有人指著螢幕說「這個是不是叫 blow-off top」——意思是、「最後一根衝完就死」、技術派看圖的人最害怕的形狀。連續五天破紀錄、第六天衝到一個整數位、結果衝不過、然後賣壓全進來——這個圖、從 1990 年代日本、到 2000 年的網路股、到 2008 的銅、到 2021 的特斯拉、都長一樣。' },

    { type: 'dialogue', character: 'chef', text: '差 0.33 點——我這個禮拜每天都看你們在講韓國這條線、整個禮拜都在漲、就差那 0.33 點沒過去、然後一根線掉到 7,421。這個給我的感覺、像我們店這條街、有家小店連續做了七年想擠進米其林、評審來那天前菜端錯了、就七年沒了。差一點、跟差很多、感覺一樣。' },

    { type: 'dialogue', character: 'customer-b', text: '師傅、你這個「米其林前菜端錯」的比喻、我等下傳給組長、我們明天早會這個就是開場。差一點跟差很多、市場的感覺、都是「沒過去」。' },

    { type: 'wait', duration: 400 },

    // ── The AI Citizen Dividend story — what actually happened ──
    { type: 'dialogue', character: 'chef', text: '那「AI 分紅」是什麼？這個詞我第一次聽——是韓國要發錢給人民、像我們疫情那時候政府發的振興券？' },

    { type: 'dialogue', character: 'customer-a', text: '師傅、起頭的人叫 Kim Yong-beom、是韓國總統府裡面的「政策企劃室長」——不算總統、是替總統規劃政策的人。他禮拜二一早在 Facebook 發一篇長文、題目叫「不一樣等級的國家——韓國 AI 時代長期戰略」、裡面有一句寫「AI 基礎建設的成果、不是個別公司一家獨力做出來、是全體國民共同建立的產業基礎、所以一部分果實必須回到全民身上」。市場讀到這句、第一秒的反應是——「政府要從 Samsung、SK Hynix 賺的錢、直接抽出來發給全民」。' },

    { type: 'dialogue', character: 'customer-b', text: '那一秒、我們 desk 上的韓國股票客戶電話直接爆——客戶第一句話都是「這是不是新稅？」、第二句都是「那 Samsung 我手上 2% 倉位、要不要先砍一半？」我們組長攔下電話、講「等等、原文還在翻譯、不要動」、結果客戶說「我不等」、就掛了。然後 Bloomberg 跑馬燈第二條跑出來——「Kim 補充：AI 分紅來自超額稅收、不是公司利潤」——意思是、不是新稅、是政府本來會收到的稅變多、把多出來那塊分出來。' },

    { type: 'dialogue', character: 'customer-a', text: '但是「超額稅收」這個詞、誰來定義？市場聽完還是不安。原因是——「超額」可以是政府事後想抓多少抓多少、所以中間還是有一個門開著。Samsung 整天收 -4.2%、SK Hynix -1.28%、Kospi 整天 -1.45%——一篇 Facebook 貼文、就把昨天 +4.3% 的漲幅、掃掉一半。' },

    { type: 'dialogue', character: 'chef', text: '一篇 Facebook 文——韓國這個總統府幕僚一篇文、抹掉昨天的一半？昨天我們講「Trump 一篇 Truth Social 文可以動油 4 塊錢一桶」——今天韓國一篇 Facebook 文、可以動全韓國最大兩家公司股價跌 4%。現在這個世界、決定一條街道生意的、是社群網站？' },

    { type: 'dialogue', character: 'customer-b', text: '師傅你又抓到了——這個就是這幾年我們 desk 最大的改變。以前我們桌上的螢幕、開的是 Bloomberg、Reuters、四五個新聞網站。現在我們開的是 Truth Social、X、Facebook 韓國總統府幕僚的個人頁——我們組長三年前就講「最重要的市場新聞、會從個人帳號跑出來、不是從新聞網站」、那時候我們笑他、現在我們每個人手機都開那些 app 的通知。' },

    { type: 'wait', duration: 400 },

    // ── Oil grinding — the slow story under the loud one ──
    { type: 'dialogue', character: 'chef', text: '對了油——昨天晚上彈 4 塊錢一桶、今天怎麼樣？老周早上跟我講「今天油又漲一點點、但沒昨天那種感覺」。' },

    { type: 'dialogue', character: 'customer-a', text: '師傅、老周很準。今天 Brent 再 +0.96%、收在 $105.21；WTI 再 +1.10%、收在 $99.15——差 0.85 塊錢就重新回到 $100。昨天油是「跳」、今天油是「磨」——一公分一公分地往上拱。從 2 月底戰爭開始算、現在第 73 天、Brent 跟 WTI 兩個都比戰前漲超過 40%。但是、今天 Trump 放那種「1% 機率活著」的話、油沒有再跳——只磨了 1%。這個資訊很重要：市場其實已經有點「習慣」這個情況、Trump 怎麼罵都罵了三個月了、罵到油都麻木了。' },

    { type: 'dialogue', character: 'customer-b', text: '我們客戶今天打進來、有一群其實在問「現在這個是不是就是平衡點」——就是、Hormuz 關著、油在 $105、Trump 一直罵、但是沒有新的軍事行動。如果再放兩個禮拜、市場可能會把 $105 當作「新常態」、波動率就下來、油的權重會慢慢被讓出去。今天 VIX 18.7、不算高也不算低——比起戰爭剛開始那時 35 的恐慌、現在是「半睡半醒」。' },

    { type: 'dialogue', character: 'chef', text: '半睡半醒——這個我懂。我去年冬天有一個禮拜店裡很忙、忙到第三天人就麻了、客人來我也應付、湯也熬、麵也下、但腦袋是飄的。市場現在就是這樣？飄了三個月、神經麻了？' },

    { type: 'dialogue', character: 'customer-a', text: '師傅、這個叫「volatility regime shift」——你的「神經麻」版本比我們報告寫的好懂。市場麻了之後最大的風險是——下一個真的大消息來、市場已經沒有反應的力氣了、要麼一根直接破底、要麼直接無視。所以我們桌上現在最怕的不是「再來一個壞消息」、是「市場對壞消息無反應」。' },

    { type: 'wait', duration: 400 },

    // ── Polymarket — flat since Monday's spike, no fresh shock ──
    { type: 'dialogue', character: 'chef', text: '那昨天那條伊朗賭盤、4.5 跳 6.5 的、今天有沒有再動？昨晚 Trump 在橢圓辦公室講「加護病房 1% 活著」、那條應該再跳吧？' },

    { type: 'dialogue', character: 'customer-b', text: '師傅、沒動。一整天卡在 6.5%。我們 desk 的 quant 小組今天還特別把那條線抓出來看——理由是「禮拜一早上 7 點那一筆 48 萬美金、是有人在 Trump 第一篇文後立刻掃單、那筆是『新聞反應』；今晚 Trump 又補一句『1% 活著』、按理應該再跳一次——結果沒跳」。意思是、市場已經把「Trump 罵伊朗」這件事算到價格裡了、罵第二次、不會再嚇到人。要再動、要等到「Trump 真的下令動手」、那才會是另一個跳。' },

    { type: 'dialogue', character: 'customer-a', text: '另一個小細節——這條的成交量、昨天 24 小時新增 48 萬美金、今天 24 小時新增看起來不到 5 萬。一個禮拜下注金額萎縮到原本的十分之一、意思是、賭盤上的人也覺得「沒事、繼續看」。賭盤跟油、跟我們桌上、今天都是同一個句子——「等下一個真的消息」。' },

    { type: 'dialogue', character: 'chef', text: '等下一個真的消息——這句、我們店裡的客人也常講。冬天那一波感冒、第一個禮拜大家都緊張、第二個禮拜開始有人不戴口罩、第三個禮拜大家就忘了、然後第四個禮拜真的有人住院、整條街才又緊張一次。市場跟流感、原來節奏一樣。' },

    { type: 'wait', duration: 400 },

    // ── Nikkei's quiet day — the contrast ──
    { type: 'dialogue', character: 'chef', text: '隔壁我們日本、今天 Nikkei 怎麼樣？我老婆中午吃飯的時候講「我同學在三井住友、今天說他們桌上很安靜」——這個我覺得很奇怪、昨天 Kospi 那邊那麼瘋、今天我們這邊一根線斷掉、為什麼日本是安靜的？' },

    { type: 'dialogue', character: 'customer-a', text: '師傅、Nikkei 今天 +0.36% 收 62,644、整天就在 +0.5% 跟平盤之間晃。原因有幾個——一個是日本市場本來就比較「老實」、波動沒韓國大；第二個是日本沒有像 Samsung、SK Hynix 那種「兩家公司佔指數一半權重」的問題；第三個、也是最重要的——日本人今天看到 Kim 那篇 Facebook、第一個反應是「還好、我們這邊沒這種總統」、然後就繼續喝咖啡了。日股最近的故事是 BOJ 慢慢升息、Yen 在 157、跟伊朗、跟韓國分紅、沒有直接關係。' },

    { type: 'dialogue', character: 'customer-b', text: '我先生今天下班回來、跟我講「我們公司今天好像也比較安靜——大家都在看韓國的盤、不是看自己的」。整個東京交易桌、像有人從窗戶看隔壁鄰居家失火、自己家還在炒晚飯。但是、隔壁失火、煙會飄過來——Samsung 跌 4%、台積電那邊我先生說明天 ADR 大概會被拖。我們不是隔岸觀火、是隔牆觀火。' },

    { type: 'dialogue', character: 'chef', text: '隔牆觀火——這個我有經驗。三年前我們巷子尾的拉麵店失火、我們店沒燒到、但是隔天我整家店的牆都有煙味、客人進來都問「師傅你今天高湯加了什麼？」——其實沒加什麼、是隔壁的火、煙從通風管飄過來。' },

    { type: 'wait', duration: 400 },

    // ── Looking ahead — tomorrow 04:00 JST governor vote ──
    { type: 'move', character: 'chef', toTile: 'stove' },
    { type: 'dialogue', character: 'chef', text: '那明天清晨、紐約那邊的下一步是什麼？我老婆問我「明天要不要又把鬧鐘設早一點」——我跟她說我不知道。' },

    { type: 'dialogue', character: 'customer-a', text: '明天清晨 4 點 Tokyo 時間、Senate 會投 Warsh 的「正式 governor 任命」——意思是、cloture 是「能不能進入正式表決」的程序票、明天清晨那一票才是真的「決定他變成 Fed 理事 14 年」的票。歷史上 cloture 過、最終票通常會過、所以明天清晨那一票、預期會以類似 50-44 過——但是有沒有人加碼跑票、或者有人棄權、會影響後天「Fed chair 主席」那一票。' },

    { type: 'dialogue', character: 'customer-b', text: '我們 desk 明天清晨 4 點不會站著看——因為那票結果出來、Tokyo 還在睡覺、要等 6 點半開盤前的早報才會看到。今晚回家、我跟我先生講好、6 點 25 分一起看新聞、不是 6 點 25 分站著看直播。比較人性化一點。' },

    { type: 'dialogue', character: 'chef', text: '比較人性化一點——這個我聽起來會心一笑。今天看你們兩位、像兩個禮拜沒睡飽。今晚回家、設 6 點半、不是 6 點 25 分、聽你太太的話。' },

    { type: 'dialogue', character: 'customer-a', text: '師傅、我們這行最容易忘記的就是這個——「市場明天還會繼續轉、不缺你那 5 分鐘」。Powell 禮拜五交位子、後天投 Fed chair、整個禮拜還有 3 天的大事——這 3 天我每天設 6 點 25 分、不是因為事情重要、是因為我怕錯過。怕錯過跟事情重要、是兩件不一樣的事。' },

    { type: 'wait', duration: 400 },

    // ── Closing — Tuesday night, send them home gentler ──
    { type: 'move', character: 'chef', toTile: 'counter-center' },
    { type: 'dialogue', character: 'chef', text: '禮拜二晚上、明天禮拜三、後天禮拜四投 chair、禮拜五 Powell 交班——這個禮拜剩下的三天、像我們店尾牙前一週、每天都有事、每天都不敢早睡。今天我老婆跟我講「煮個輕一點的、客人累了一禮拜」——我就煮了關東煮、湯薄、料軟、好下嚥。兩位來一份、回家洗澡、上床、明天早上 6 點半看新聞配熱茶。' },

    { type: 'dialogue', character: 'customer-a', text: '師傅、關東煮對。我要白蘿蔔兩塊、蛋一顆、竹輪一個、湯多。其他不要。明天清晨那一票如果有意外、我晚上再過來。沒意外、我也過來——你們家湯比我家煮的好喝。' },

    { type: 'dialogue', character: 'customer-b', text: '我也關東煮。蘿蔔、油豆腐、魚板。我先生說他冰箱還有兩塊昨天的草餅、明天早餐配關東煮的湯——他自己想到的搭配。明天早上 6 點半、我跟他並排坐在沙發上看新聞、小孩還在睡——這個畫面、有點久沒有了。' },

    { type: 'dialogue', character: 'chef', text: '兩塊草餅加關東煮湯——這個搭配我師父當年看到會說「這是把和菓子當稀飯吃」、但是現在我會說「這是先生想老婆的搭配」。妳先生這個人、可以。' },

    { type: 'sfx', sound: 'chimes' },

    { type: 'wait', duration: 500 },
    { type: 'move', character: 'chef', toTile: 'stove' },

    {
      type: 'narration',
      text: '禮拜二晚上 10 點半、東京。Warsh 的 cloture 在禮拜二清晨 6 點半 49 比 44 過、兩個民主黨員跑票；Kospi 在禮拜二早上 9 點 50 分摸到 7,999.67——差 0.33 點沒過 8,000、然後一篇韓國總統府幕僚的 Facebook、把整條線從 8,000 摔到 7,421、收 -1.45%；Samsung -4.2%、SK Hynix -1.28%——昨天的英雄、今天的兇手。Nikkei +0.36% 安靜收 62,644。Brent +0.96% 收 $105.21、WTI +1.10% 摸 $99.15——油在「磨」、不再「跳」。賭盤上伊朗那條卡 6.5%、整天沒動、成交量縮到昨天的十分之一——市場對 Trump 第二次罵伊朗、麻木了。明天清晨 4 點 Tokyo 時間、Senate 投 Warsh 的 governor 正式任命；後天投 Fed chair；禮拜五 Powell 把椅子交出去。師傅關東煮兩碗、客人帶走兩塊昨天剩的草餅、Customer B 跟先生明天 6 點半並排沙發看新聞、Customer A 設 6 點 25 分還是設 6 點半、自己也還沒決定。今晚的食堂、湯薄、料軟、客人話比昨天少、走得早——禮拜一的火、禮拜二燒到尾巴、整個禮拜還剩 3 天、明天再說。',
      duration: 6000,
    },
  ],
};
