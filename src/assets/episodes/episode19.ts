import type { Episode } from '../../engine/types';

export const EPISODE_19: Episode = {
  id: 'ep-19',
  date: '2026-04-27',
  title: '20260427 The Monday Print',
  description: 'Monday closed — the week\'s first print landed and several Sunday-night calls broke. MSFT-OpenAI cap-table reset opened roughly as scripted (MSFT -1.4% to $440 then $443 by lunch, NVDA +1.8% beat the +1.0% call), but BBY went full Target — flat refused — instead of the "half-pay" guess, and JBLU\'s 8-K hit at 08:15 ET dragging equity to $3.20 and bonds to $54. Iran 4/30 ground down another step from 0.35% to 0.25% (72 hours to expiry); Iran 6/30 held 8.5% the whole day — Sunday\'s "Asia noise" call did NOT mean-revert, which is the read worth re-pricing. Fed-50bp flat at 0.05%. Tomorrow: Warsh confirmation 21:00 ET. Wednesday: Q1 GDP advance 08:30. Thursday: Powell\'s last presser.',
  actions: [
    { type: 'bgm', track: 'chill-lofi', command: 'play' },

    {
      type: 'narration',
      text: '禮拜一收盤後 — 這一週第一次有 print。MSFT 拆帳故事大致照腳本走（開盤跌 1.4% 到 $440、中午回 $443）、NVDA 漲 1.8% 比預期還多。但兩條押錯——BBY 沒走「半交半留」、直接全拒、走 Target 同一條路；JBLU 早上 8:15 美東 8-K 補件、股價直接掉到 $3.20、債券 54 cents。Polymarket 那邊 4/30 又退一階到 0.25%（剩 72 小時）；6/30 反過來 8.5% 撐了整天——禮拜天說那是「亞洲噪音」、結果沒被吃回去、那就要重看。Fed 50bp 還是 0.05%、死透。明晚 9 點 Warsh 確認投票、後天 Q1 GDP、禮拜四 Powell 最後一場。今天的定價、把這一週的劇本砍掉重練了三分之一。',
      duration: 5400,
    },

    // ── Opening: Monday close — what actually printed ──
    {
      type: 'market-data',
      data: {
        tickers: [
          { symbol: 'SPY', price: 533.40, change: 0.5 },
          { symbol: 'MSFT', price: 443.20, change: -1.0 },
          { symbol: 'NVDA', price: 1206.40, change: 1.9 },
          { symbol: 'JBLU', price: 3.20, change: -23.8 },
        ],
        volatility: 26,
        vix: 24.8,
        rsi: 56.0,
        beta: 1.05,
        priceHistory: [530, 531, 532, 533, 533, 534, 533, 533],
        volumeHistory: [108, 124, 138, 142, 128, 116, 104, 92],
        sectors: [
          { label: 'AI-Cap-Reset', value: 1380, color: '#22cc55' },
          { label: 'NVDA-Beat-Call', value: 1280, color: '#22cc55' },
          { label: 'BBY-Full-Refuse', value: 480, color: '#cc8844' },
          { label: 'JBLU-8K-Hit', value: 320, color: '#ee4444' },
          { label: 'Cloud-Anchor', value: 1140, color: '#22cc55' },
        ],
        headline: '禮拜一收盤：SPY +0.5% / MSFT -1.0%（早盤摸 $440）/ NVDA +1.9%（超預期）/ JBLU -23.8%（8-K 補件）',
      },
    },

    // Chef Monday late evening — busier than weekend
    { type: 'enter', character: 'chef', toTile: 'stove' },
    { type: 'wait', duration: 500 },
    { type: 'move', character: 'chef', toTile: 'prep-area' },
    { type: 'wait', duration: 400 },
    { type: 'move', character: 'chef', toTile: 'stove' },
    { type: 'wait', duration: 400 },

    // Customer A enters — exhausted from full trading day
    { type: 'enter', character: 'customer-a', toTile: 'entrance' },
    { type: 'move', character: 'chef', toTile: 'counter-center' },
    { type: 'dialogue', character: 'chef', text: 'いらっしゃい。看這臉、今天忙到剛才——禮拜天的 morning note 對到幾條？' },

    { type: 'move', character: 'customer-a', toTile: 'random-stool' },
    { type: 'sit', character: 'customer-a' },

    { type: 'dialogue', character: 'customer-a', text: '對到的：MSFT 早上 9:35 跌到 $440.10——比我們押的 $440 多十分錢；中午 12:08 回到 $443.40、跟昨晚算的 $443 差兩毛。NVDA 我們押 +1.0%、結果 +1.9%、收 $1206——這個我們小看了。GOOGL 只漲 0.3%（我們押 +1.0%）——上週四的雲端紅利已經吃完了。整體上 AI 圈大方向對、細節差兩成。' },

    { type: 'move', character: 'chef', toTile: 'stove' },
    { type: 'wait', duration: 400 },

    { type: 'dialogue', character: 'customer-a', text: '錯到的：BBY 那條完全沒猜中。我們以為他們會走「半交半留」——交一部分、保留一部分當槓桿。結果他們 8 點美東公告——全拒、跟 Target 走同一條路。一句話「在現有合規框架下、我們不認為自願性退款符合股東利益」。零售圈現在三家領頭不交（Walmart 是交、其他三家不交）、Costco 跟 Home Depot 還沒表態、明早再看。' },

    { type: 'dialogue', character: 'customer-a', text: 'JBLU 那條我們押對方向、低估幅度。原本算開盤 $4.20 是頂、可能跌到 $3.80。實際——8:15 美東 8-K 補件公告「正在評估包括重組在內的所有選項」、開盤直接 $3.40、整天慢慢爬到 $3.20 收。債券 OTC 場外 54 cents（昨晚還 58）、Apollo 條件清單市場已經當預設。明早 SAVE / Frontier 開盤再看。' },

    { type: 'emote', character: 'customer-a', emote: 'thinking', duration: 700 },

    // ── Polymarket — Monday evening snapshot ──
    {
      type: 'polymarket-odds',
      data: {
        asOf: '2026-04-27T01:05:59Z',
        highlightSlug: 'will-the-iranian-regime-fall-by-april-30',
        markets: [
          {
            slug: 'will-the-iranian-regime-fall-by-april-30',
            question: 'Will the Iranian regime fall by April 30?',
            yesProbability: 0.0025,
            volume: 43704476,
            endDate: '2026-04-30T00:00:00Z',
            history: [
              { t: 1777150806, p: 0.0035 }, { t: 1777154417, p: 0.0035 }, { t: 1777158004, p: 0.0035 }, { t: 1777161604, p: 0.0035 },
              { t: 1777165206, p: 0.0035 }, { t: 1777168804, p: 0.0035 }, { t: 1777172420, p: 0.0035 }, { t: 1777176003, p: 0.0035 },
              { t: 1777179604, p: 0.0035 }, { t: 1777183203, p: 0.0035 }, { t: 1777186804, p: 0.0035 }, { t: 1777190406, p: 0.0035 },
              { t: 1777194004, p: 0.0035 }, { t: 1777197604, p: 0.0035 }, { t: 1777201204, p: 0.0035 }, { t: 1777204804, p: 0.0035 },
              { t: 1777208405, p: 0.0035 }, { t: 1777212007, p: 0.0035 }, { t: 1777215603, p: 0.0035 }, { t: 1777219205, p: 0.0025 },
              { t: 1777222804, p: 0.0025 }, { t: 1777226416, p: 0.0025 }, { t: 1777230004, p: 0.0025 }, { t: 1777233604, p: 0.0025 },
              { t: 1777237206, p: 0.0025 }, { t: 1777240805, p: 0.0025 }, { t: 1777244403, p: 0.0025 }, { t: 1777248004, p: 0.0025 },
              { t: 1777251604, p: 0.0025 }, { t: 1777251844, p: 0.0025 },
            ],
          },
          {
            slug: 'will-the-iranian-regime-fall-by-june-30',
            question: 'Will the Iranian regime fall by June 30?',
            yesProbability: 0.0850,
            volume: 33939260,
            endDate: '2026-06-30T00:00:00Z',
            history: [
              { t: 1777150810, p: 0.0850 }, { t: 1777154419, p: 0.0850 }, { t: 1777158005, p: 0.0850 }, { t: 1777161609, p: 0.0850 },
              { t: 1777165207, p: 0.0850 }, { t: 1777168805, p: 0.0850 }, { t: 1777172425, p: 0.0850 }, { t: 1777176004, p: 0.0850 },
              { t: 1777179610, p: 0.0850 }, { t: 1777183208, p: 0.0850 }, { t: 1777186805, p: 0.0850 }, { t: 1777190410, p: 0.0850 },
              { t: 1777194009, p: 0.0850 }, { t: 1777197609, p: 0.0850 }, { t: 1777201207, p: 0.0850 }, { t: 1777204811, p: 0.0850 },
              { t: 1777208408, p: 0.0850 }, { t: 1777212010, p: 0.0850 }, { t: 1777215609, p: 0.0850 }, { t: 1777219208, p: 0.0850 },
              { t: 1777222809, p: 0.0850 }, { t: 1777226425, p: 0.0850 }, { t: 1777230007, p: 0.0850 }, { t: 1777233607, p: 0.0850 },
              { t: 1777237212, p: 0.0850 }, { t: 1777240807, p: 0.0850 }, { t: 1777244406, p: 0.0850 }, { t: 1777248011, p: 0.0850 },
              { t: 1777251605, p: 0.0850 }, { t: 1777251904, p: 0.0850 },
            ],
          },
          {
            slug: 'will-the-fed-decrease-interest-rates-by-50-bps-after-the-april-2026-meeting',
            question: 'Will the Fed decrease interest rates by 50+ bps after the April 2026 meeting?',
            yesProbability: 0.0005,
            volume: 56281416,
            endDate: '2026-04-29T00:00:00Z',
            history: [
              { t: 1777150810, p: 0.0005 }, { t: 1777154419, p: 0.0005 }, { t: 1777158005, p: 0.0005 }, { t: 1777161609, p: 0.0005 },
              { t: 1777165207, p: 0.0005 }, { t: 1777168805, p: 0.0005 }, { t: 1777172424, p: 0.0005 }, { t: 1777176004, p: 0.0005 },
              { t: 1777179609, p: 0.0005 }, { t: 1777183208, p: 0.0005 }, { t: 1777186805, p: 0.0005 }, { t: 1777190409, p: 0.0005 },
              { t: 1777194009, p: 0.0005 }, { t: 1777197608, p: 0.0005 }, { t: 1777201207, p: 0.0005 }, { t: 1777204811, p: 0.0005 },
              { t: 1777208408, p: 0.0005 }, { t: 1777212010, p: 0.0005 }, { t: 1777215609, p: 0.0005 }, { t: 1777219207, p: 0.0005 },
              { t: 1777222807, p: 0.0005 }, { t: 1777226424, p: 0.0005 }, { t: 1777230006, p: 0.0005 }, { t: 1777233607, p: 0.0005 },
              { t: 1777237212, p: 0.0005 }, { t: 1777240807, p: 0.0005 }, { t: 1777244405, p: 0.0005 }, { t: 1777248011, p: 0.0005 },
              { t: 1777251605, p: 0.0005 }, { t: 1777251904, p: 0.0005 },
            ],
          },
        ],
      },
    },

    { type: 'dialogue', character: 'customer-a', text: 'Polymarket 才是今天最值得讀的東西。4/30 那檔——美東中午 12 點美國時段一開始、從 0.35% 直接退到 0.25%、整個下午紋風不動。剩 72 小時、市場已經在說「99.75% 不會發生」。如果禮拜三半夜還是 0.25% 以上、那就是時間都壓不下去的「無法歸零的恐懼」、那才需要重看。' },

    { type: 'dialogue', character: 'customer-a', text: '6/30 那檔才是真正的訊號——禮拜天早上從 7.5% 跳到 8.5%、我說那是亞洲薄量噪音、應該被吃回去。結果整個禮拜一都沒動、收盤還是 8.5%。如果是噪音、美國時段成交量大、應該推回 7.5%。但沒有。意思是——市場不是在賭「短期變天」、是在說「長期那 9% 的尾巴沒消失」。我們 morning note 沒寫到這條、明早要補一張 addendum。' },

    { type: 'wait', duration: 400 },

    // ── Customer B enters — Apollo / JBLU side of the day ──
    { type: 'enter', character: 'customer-b', toTile: 'entrance' },
    { type: 'move', character: 'customer-b', toTile: 'random-stool' },
    { type: 'sit', character: 'customer-b' },

    { type: 'move', character: 'chef', toTile: 'counter-center' },
    { type: 'dialogue', character: 'chef', text: 'いらっしゃい。今天 Apollo 那張條件清單真的進到 8-K？' },
    { type: 'move', character: 'chef', toTile: 'stove' },

    { type: 'dialogue', character: 'customer-b', text: '進到了、但用詞很狠。8-K 第三段直接寫「正在與多家替代資本來源評估包括 chapter 11 在內的所有選項」。chapter 11 三個字寫進去、市場就懂——這不是再說「考慮考慮」、是「準備動了」。Apollo 17%、Cerberus 那邊傳出 19%、還有 Oaktree 加進來——三家都在搶這筆 10 億美金的續命錢、條件越來越接近。' },

    { type: 'dialogue', character: 'customer-a', text: '我同事午餐時候被 Citi 一個高收益債的桌約電話會——他們在賣 JBLU 50-55 cents 那段、買的人都是不良資產基金。重點是「換股的選擇權」這條——整個圈內人都知道、誰拿到那 18% 換股權、誰就拿到重整後新公司的鑰匙。Apollo 跟 Cerberus 兩家是世仇、這次會比條件、最後可能還會比「跟董事會的人脈」。' },

    { type: 'dialogue', character: 'customer-b', text: 'SAVE 今天場外又被報到 $0.95——三天前 $1.80、今天破 $1。Frontier CDS 跳到 880bp、ALGT（Allegiant）反而 +2.4%。K 形分帳越來越明顯、最弱的快歸零、體質好的反而吃到了「市佔率重分配」這個故事。明天可能會有第二家廉航公告 8-K、不是 SAVE 就是 Frontier。' },

    { type: 'camera', effect: 'flash', duration: 200 },

    // ── Monday-close airline / distressed snapshot ──
    {
      type: 'market-data',
      data: {
        tickers: [
          { symbol: 'JBLU', price: 3.20, change: -23.8 },
          { symbol: 'SAVE-OTC', price: 0.95, change: -20.8 },
          { symbol: 'ULCC-CDS', price: 880, change: 10.0 },
          { symbol: 'ALGT', price: 49.40, change: 2.4 },
        ],
        volatility: 62,
        vix: 24.8,
        rsi: 16.0,
        beta: 1.82,
        priceHistory: [4.20, 3.90, 3.60, 3.40, 3.30, 3.25, 3.22, 3.20],
        volumeHistory: [62, 88, 124, 156, 142, 118, 96, 78],
        sectors: [
          { label: 'JBLU-Ch11-Ready', value: 380, color: '#ee4444' },
          { label: 'SAVE-Sub-Dollar', value: 220, color: '#ee4444' },
          { label: 'CDS-Wider', value: 980, color: '#ee4444' },
          { label: 'ALGT-Survivor', value: 580, color: '#22cc55' },
          { label: 'DIP-Bidding-War', value: 720, color: '#cc8844' },
        ],
        headline: 'JBLU 8-K 寫進「chapter 11」三個字 — Apollo / Cerberus / Oaktree 三家搶 DIP 借款、SAVE 跌破 $1、ALGT +2.4% 吃市佔',
      },
    },

    { type: 'wait', duration: 400 },

    // ── MSFT/OpenAI cap-table reset — what actually played out ──
    { type: 'move', character: 'chef', toTile: 'counter-center' },
    { type: 'dialogue', character: 'chef', text: 'GS 跟 Morgan Stanley 早上 6 點那兩份研報、最後寫到什麼？' },

    { type: 'dialogue', character: 'customer-a', text: 'GS 把 OpenAI 隱含估值從 3000 億砍出來、單獨給了 4800 億——比我們昨晚算的 4500 億還高一截。Morgan Stanley 比較保守、只給 4200 億。兩家對 MSFT 都降一階——GS 從買進降到中立（目標價 $470 → $455），Morgan Stanley 維持買進但降目標價（$485 → $465）。整體共識：MSFT 從「下個世代 AI 最大股東」變成「房東」、租金穩定、但 upside 給了房客。' },

    { type: 'dialogue', character: 'customer-b', text: 'NVDA 那 1.9% 漲幅是被 Cathie Wood 一張凌晨買單帶起來的——ARKK 加碼了一批。整個 AI 圈現在的資金邏輯——MSFT 從 35 倍本益比縮到 32 倍、那 3 倍的差價跑到哪裡？跑到 NVDA、AMD、跟一些雲端二線（CRWD、SNOW）。「同樣的 AI 故事、不同的章節」、整盤的 PE 結構在重排。' },

    { type: 'dialogue', character: 'customer-a', text: '更值得看的是——MSFT 今天收 $443.20、跟我們算的 $443 只差兩毛。表面看是市場反應理性、但這個「太準」反而有點怪——通常 narrative reset 都會 overshoot 一晚才回。如果明早 MSFT 又跌一段到 $440 以下、那是「機構還沒消化完、第二波在賣」。如果穩在 $443、那真的就此拉平。' },

    { type: 'wait', duration: 400 },

    // ── Walmart / BBY / retail split ──
    { type: 'move', character: 'chef', toTile: 'stove' },
    { type: 'dialogue', character: 'chef', text: 'BBY 那條全拒、零售圈現在的陣線怎麼分？' },

    { type: 'dialogue', character: 'customer-b', text: '交退款的：Walmart、Lowe\'s、Dollar General。不交的：Target、BBY、Home Depot（早盤偷偷補了表態）。中間派：Costco、Macy\'s、Kohl\'s——還沒表態。今天股價反應——交的微跌（Walmart -0.4%、Lowe\'s -0.6%）、不交的小漲（Target +1.1%、BBY +0.8%、HD +0.5%）。市場短期在獎賞「不交」這條路。' },

    { type: 'dialogue', character: 'customer-a', text: '但「短期市場獎賞」跟「長期會被怎麼修理」是兩件事。今晚 Bloomberg 一則漏出來——財政部內部備忘、預計禮拜五前發布「自願性退款獎勵清單」、白話講就是「點名乖寶寶 vs 壞學生」。如果壞學生清單真的出、Target / BBY / HD 三家可能要在 Q3 重新算「不交」這筆帳。但那是 Q3 的事、這禮拜還是「不交贏」。' },

    { type: 'dialogue', character: 'customer-b', text: 'Walmart 那筆退款已經進了財政部的審核佇列、編號拿到了——CFO 今天下午發內部信給高層、說「我們做了正確的事、即使股價短期不會給我們獎賞」。這封信半小時後在 X 上轉了 3 萬次——市場在分裂、但 Walmart 在賭「長期形象 > 短期股價」。CFO 那句話會在 Q3 重新被引用。' },

    { type: 'wait', duration: 300 },

    // ── Iran / Oil / OPEC+ — globex follow-through ──
    { type: 'move', character: 'chef', toTile: 'counter-center' },
    { type: 'dialogue', character: 'chef', text: 'OPEC+ 禮拜天沒聲明、原油今天怎麼走？' },

    { type: 'dialogue', character: 'customer-a', text: '禮拜天 6 點電子盤開、原油立刻在 $95.30 區間靜止——OPEC+ 沒講話、就被解讀成「他們不打算放棄 $95」。整個亞洲時段穩住、歐洲早盤摸到 $95.80、美國時段微退到 $95.20 收。Brent 收 $97.10。整天 1.5 美金的振幅、算今年最窄的。市場現在把 $95 當成「沙烏地的 put option」（保護傘）——除非他們自己鬆口、不然不會破。' },

    { type: 'dialogue', character: 'customer-b', text: '伊朗那邊今天有一則小消息——德黑蘭兩個區的網路被「技術性故障」斷了三小時、然後恢復。革命衛隊發言人否認、但 BBC 波斯語跟 Iran International 兩邊都有報。Polymarket 4/30 對這條完全沒反應、繼續在 0.25% 紋風不動。意思是——市場已經完全「免疫」這種小動作、只剩下「真的開槍」才會把曲線往上推。' },

    { type: 'dialogue', character: 'customer-a', text: '但是 6/30 那條還是 8.5%、那才是真正在說話的——「這個禮拜、這個月不會、但 6 月底之前還沒結束」。我們桌明天會把伊朗 6 月那條從「衰退中的尾巴」重新標記成「持續存在的尾巴」。對整個能源 / 國防股 / DXY 的影響、會在 morning note 補一段。' },

    { type: 'camera', effect: 'shake', duration: 250, intensity: 1 },

    { type: 'wait', duration: 300 },

    // ── Tomorrow: Warsh confirmation + GDP/Powell setup ──
    { type: 'move', character: 'chef', toTile: 'stove' },
    { type: 'dialogue', character: 'chef', text: '明天 Warsh 投票、後天 GDP——你們桌怎麼擺位置？' },

    { type: 'dialogue', character: 'customer-a', text: '明早盤前不動、等 8:30 看有沒有奇怪的盤前消息。9:30 開盤後等到中午、看 Costco / Macy\'s / Kohl\'s 三家是不是公告退款立場。下午 1 點前不開新倉、留現金等 9 點 Warsh 投票。投票要是真的 52-48 過關、晚盤期貨可能跳 0.3%、債券殖利率也會跳 6-8bp。我會在投票結果出來那一刻、買 SPY 隔日選擇權當避險。' },

    { type: 'dialogue', character: 'customer-b', text: '我們桌押後天 GDP 數字會比共識的 +1.8% 差一點——可能 +1.5%。如果真的 +1.5%、那就是 A 劇本（鴿派 + 標普 540）的第一個確認。Powell 禮拜四講話前、市場會在 SPY 535-538 這個區間整理。但是——如果 GDP 直接 +2.2%（超預期）、那就反過來、變成 C 劇本（鷹 + SPY 跌到 520）。我們今天把 A 跟 C 各押四成、B 兩成、留彈性。' },

    { type: 'dialogue', character: 'customer-a', text: 'Polymarket 那條 Fed 50bp 還是 0.05%——市場已經在說「Powell 不會降 2 碼」。但這檔合約禮拜三晚上到期、那才是真的見真章。如果 Powell 禮拜四下午講出某些字、即使 0.05% 已經到期、4 月會議結果（禮拜三公布）的反應會直接做在 SPY / 10 年期上。所以禮拜三 14:00 美東 FOMC 聲明那一刻、是這個禮拜真正的爆點。' },

    { type: 'wait', duration: 400 },

    // ── Tuesday positioning matrix ──
    {
      type: 'market-data',
      data: {
        tickers: [
          { symbol: 'SPY-fut', price: 533.60, change: 0.05 },
          { symbol: '10Y', price: 4.39, change: -0.03 },
          { symbol: 'DXY', price: 104.10, change: -0.2 },
          { symbol: 'WTI', price: 95.20, change: -0.1 },
        ],
        volatility: 26,
        vix: 24.8,
        rsi: 56.0,
        beta: 1.05,
        priceHistory: [533, 534, 534, 534, 534, 533, 533, 533],
        volumeHistory: [62, 70, 78, 84, 80, 72, 64, 56],
        sectors: [
          { label: 'A-Dovish', value: 1380, color: '#22cc55' },
          { label: 'B-Inline', value: 760, color: '#cc8844' },
          { label: 'C-Hawk', value: 1320, color: '#ee4444' },
          { label: 'Iran-Tail-Sticky', value: 540, color: '#cc8844' },
          { label: 'Retail-Split', value: 720, color: '#cc8844' },
        ],
        headline: '禮拜一收盤後重排：A=40% / B=20% / C=40% — 6/30 伊朗尾巴沒退、Warsh 明晚 9 點、GDP 後天早上',
      },
    },

    { type: 'wait', duration: 300 },

    // ── Wrap: Monday after-hours, food ──
    { type: 'move', character: 'chef', toTile: 'counter-center' },
    { type: 'dialogue', character: 'chef', text: '這個時間還沒吃飯——兩位是熱拉麵、還是要冷一點的？' },

    { type: 'dialogue', character: 'customer-a', text: '熱拉麵、加溏心、湯多。回辦公室還要把「6/30 沒退」這條補進明早的 morning note。' },

    { type: 'dialogue', character: 'customer-b', text: '我也熱拉麵、不要蔥。Apollo 那邊條件清單最終版可能凌晨才會定、我等下回去要在 Slack 上盯。明早 5 點要起床看亞洲時段有沒有 SAVE / Frontier 的 8-K。' },

    { type: 'sfx', sound: 'chimes' },

    { type: 'wait', duration: 500 },
    { type: 'move', character: 'chef', toTile: 'stove' },

    {
      type: 'narration',
      text: '禮拜一收盤後的食堂、兩碗熱拉麵、麥茶、外面是東京週一深夜、計程車燈在路口閃黃。太平洋那邊——GS 的 AI 桌剛把第二天的 morning note 改完、Apollo 在 Park Avenue 的會議室還亮著燈、JBLU 的破產律師在達拉斯擬章節 11 申請書草稿、Walmart 的 CFO 已經回家但桌上的便利貼寫著「Q3 對國會聽證準備」、Powell 在 D.C. 把禮拜四講稿的最後一段又改了一次（這次刪了「鷹」這個字）。市場關著、但工作沒停。Polymarket 那條 0.25% 的線——三天就會到期、然後消失；6/30 那條 8.5%——六月底前都不會走。今天的定價、把這個禮拜剩下三天、整個重排。明晚 9 點 Warsh 投票、要看的不是「過不過關」、是「過關之後 10 年期跳幾 bp」。先把拉麵吃完。',
      duration: 5800,
    },
  ],
};
