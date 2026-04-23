import type { Episode } from '../../engine/types';

export const EPISODE_15: Episode = {
  id: 'ep-15',
  date: '2026-04-23',
  title: '20260423 Thursday Cloud Test',
  description: 'Thursday — BoJ holds, yen pops, Nikkei gives back Wednesday\'s record. GOOGL reports after the close — cloud is the mega-cap oxygen test. Tomorrow the tariff 90-day exemption expires, and Treasury still has not posted refund mechanics. Ceasefire is holding on paper, but WTI refuses to drop below $96 and airlines keep guiding lower. Warsh\'s confirmation is on a clean glide path to next Tuesday. The week started with a war; it ends with a cloud number and a tariff cliff.',
  actions: [
    { type: 'bgm', track: 'chill-lofi', command: 'play' },

    {
      type: 'narration',
      text: '週四深夜。BoJ 早上按兵不動、日圓跳了 1.2%、Nikkei 把昨天的歷史新高吐回去一半。GOOGL 盤後剛交卷——cloud 成長數字是這週所有 mega-cap 故事的壓力測試。明天關稅 90 天豁免到期、Treasury 還沒把退款流程放出來。戰爭從價格裡退場了，但帳單一張接一張被翻到桌面。',
      duration: 4800,
    },

    // ── Opening: BoJ hold, yen up, Nikkei gives back ──
    {
      type: 'market-data',
      data: {
        tickers: [
          { symbol: 'SPY', price: 529.80, change: 0.3 },
          { symbol: 'QQQ', price: 448.40, change: 0.4 },
          { symbol: 'WTI', price: 96.80, change: -1.6 },
          { symbol: 'VIX', price: 26.10, change: -4.4 },
        ],
        volatility: 32,
        vix: 26.1,
        rsi: 52.0,
        beta: 1.12,
        priceHistory: [524, 526, 527, 528, 528, 529, 530, 530],
        volumeHistory: [82, 86, 88, 84, 80, 76, 74, 72],
        sectors: [
          { label: 'Cloud', value: 1320, color: '#22cc55' },
          { label: 'Semis', value: 1280, color: '#22cc55' },
          { label: 'Yen', value: 780, color: '#22cc55' },
          { label: 'Airlines', value: 820, color: '#ee4444' },
          { label: 'Energy', value: 1180, color: '#cc8844' },
        ],
        headline: 'BoJ 按兵不動、日圓 +1.2%、SPY 站上 529 — 停火溢價持續退、市場等 GOOGL 盤後',
      },
    },

    // Chef prep
    { type: 'enter', character: 'chef', toTile: 'stove' },
    { type: 'wait', duration: 500 },
    { type: 'move', character: 'chef', toTile: 'prep-area' },
    { type: 'wait', duration: 400 },
    { type: 'move', character: 'chef', toTile: 'stove' },

    // Customer A enters — BoJ / yen angle
    { type: 'enter', character: 'customer-a', toTile: 'entrance' },
    { type: 'move', character: 'chef', toTile: 'counter-center' },
    { type: 'dialogue', character: 'chef', text: 'いらっしゃい。週四了，還有幾場要打？' },

    { type: 'move', character: 'customer-a', toTile: 'random-stool' },
    { type: 'sit', character: 'customer-a' },

    { type: 'dialogue', character: 'customer-a', text: '一早 BoJ 先上。Ueda 維持利率——會後聲明把通膨風險改成 "on balance"，把「明確加息」的路徑往後挪一格。日圓直接 +1.2%，Nikkei 開盤繼續衝、收盤吐回去一半。昨天那個歷史新高，四小時內就被修正了。' },

    { type: 'move', character: 'chef', toTile: 'stove' },
    { type: 'wait', duration: 400 },

    { type: 'dialogue', character: 'chef', text: 'Ueda 這個改寫是鴿還是鷹？' },

    { type: 'dialogue', character: 'customer-a', text: '他講話鴿、但他動作鷹。聲明把「加息前提」寫得更精細、但 JGB 10Y yield 反而跳了 3bp——因為 market 讀到「delay，不是 cancel」。BoJ 最後的保留子彈還在。日圓空單這週被燒掉一層皮。' },

    { type: 'dialogue', character: 'customer-a', text: '比較耐人尋味的是——亞洲股市今天廣泛下跌，但日本停火贏家那邊（航空、觀光、零售）撐住。資金在換車廂、不是下車。' },

    { type: 'emote', character: 'customer-a', emote: 'surprise', duration: 700 },

    { type: 'sfx', sound: 'chimes' },

    // ── BoJ / yen ripple ──
    {
      type: 'market-data',
      data: {
        tickers: [
          { symbol: 'USDJPY', price: 148.20, change: -1.2 },
          { symbol: 'EWJ', price: 68.40, change: -0.8 },
          { symbol: 'JGB10Y', price: 1.68, change: 1.8 },
          { symbol: 'NKY', price: 42180, change: -0.6 },
        ],
        volatility: 30,
        vix: 26.1,
        rsi: 54.0,
        beta: 0.92,
        priceHistory: [150, 149, 149, 148, 148, 148, 148, 148],
        volumeHistory: [58, 68, 82, 92, 86, 78, 72, 68],
        sectors: [
          { label: 'Yen', value: 780, color: '#22cc55' },
          { label: 'JGB', value: 880, color: '#22cc55' },
          { label: 'Nikkei', value: 1180, color: '#ee4444' },
          { label: 'JP-Tourism', value: 980, color: '#22cc55' },
        ],
        headline: 'BoJ 維持利率、Ueda 改寫通膨風險 — 日圓 +1.2%、JGB 10Y +3bp、Nikkei 吐回一半',
      },
    },

    { type: 'wait', duration: 300 },

    // Customer B enters with GOOGL / cloud angle
    { type: 'enter', character: 'customer-b', toTile: 'entrance' },
    { type: 'move', character: 'customer-b', toTile: 'random-stool' },
    { type: 'sit', character: 'customer-b' },

    { type: 'move', character: 'chef', toTile: 'counter-center' },
    { type: 'dialogue', character: 'chef', text: 'いらっしゃい。GOOGL 盤後剛交卷吧？' },
    { type: 'move', character: 'chef', toTile: 'stove' },

    { type: 'dialogue', character: 'customer-b', text: '剛交、直接跳。EPS $2.42 vs $2.28 預期、revenue $98.4B vs $96.1B、Cloud revenue $14.2B，+38% YoY——這是整條街這個禮拜最想看到的數字。盤後 +4.2%。' },

    { type: 'dialogue', character: 'customer-a', text: '38% 比 AMZN AWS 的 24% 快了一截。週一 Goldman 砸 AMZN 的那句話——「cloud growth decelerating」——今天被 GOOGL 的財報反駁了一半。但只反駁一半：因為 GOOGL 的 cloud 是從比較低的基期追上來的，不代表 mega-cap cloud 整體在加速。' },

    { type: 'dialogue', character: 'customer-b', text: 'capex 的數字才是重點——GOOGL 把 2026 全年 capex guide 拉到 $95B，比上次 call 的 $78B 再加一段。這是對 AI infra 的現金承諾。NVDA 盤後也跟著跳 +1.8%。Hyperscaler capex 戰爭沒停。' },

    { type: 'camera', effect: 'flash', duration: 200 },

    // ── GOOGL earnings beat ──
    {
      type: 'market-data',
      data: {
        tickers: [
          { symbol: 'GOOGL', price: 179.40, change: 4.2 },
          { symbol: 'NVDA', price: 151.40, change: 1.8 },
          { symbol: 'AMZN', price: 218.60, change: -0.8 },
          { symbol: 'MSFT', price: 442.20, change: 0.8 },
        ],
        volatility: 30,
        vix: 26.1,
        rsi: 58.0,
        beta: 1.18,
        priceHistory: [172, 173, 174, 176, 177, 178, 179, 179],
        volumeHistory: [72, 82, 92, 98, 92, 86, 82, 78],
        sectors: [
          { label: 'Cloud', value: 1420, color: '#22cc55' },
          { label: 'AI-Infra', value: 1480, color: '#22cc55' },
          { label: 'Mega-Cap', value: 1320, color: '#22cc55' },
          { label: 'Consumer-Cloud', value: 1180, color: '#cc8844' },
        ],
        headline: 'GOOGL Cloud +38% YoY、capex 拉到 $95B — AI infra 戰爭沒停、mega-cap 敘事壓力測試通過一半',
      },
    },

    { type: 'dialogue', character: 'customer-b', text: '但要注意細節——YouTube 廣告只 +8%、比預期慢。Waymo 虧損還在擴大。意思是「cloud 很猛，但其他業務已經看到天花板」。GOOGL 現在是兩個公司——cloud 是 growth story、rest is cash cow in slow decline。' },

    { type: 'dialogue', character: 'customer-a', text: '對比 Apple 昨天的換人：Cook 走、Ternus 上、Srouji 升——Apple 告訴市場「硬體自研」是下半場。GOOGL 今天的訊號是「cloud + capex」是下半場。兩家 mega-cap，都在重新選邊站。' },

    { type: 'wait', duration: 300 },

    // ── Airlines continue to bleed ──
    { type: 'move', character: 'chef', toTile: 'counter-center' },
    { type: 'dialogue', character: 'chef', text: '航空股昨天 United 砍完、今天呢？' },

    { type: 'dialogue', character: 'customer-a', text: 'Delta 今早發 Q1 財報——earnings beat、但 guide 了 2026 Q2 capacity -2%、fuel cost hedging 的效益下降。股價盤中跌 3.6%。' },

    { type: 'dialogue', character: 'customer-b', text: '這就是我昨天講的「第二波 surprise」——Delta 也是 beat now, guide down，跟 United 同一條劇本。Reuters 今天的 wire 把它叫做「Iran ceasefire tax」——戰爭已經過去，但 Q2、Q3 的 fuel cost 已經被鎖在了高點。' },

    { type: 'dialogue', character: 'customer-a', text: '而且 low-cost carrier 今天集體崩——JBLU -6.2%、SAVE -7.8%。他們的 hedging 更薄、議價更弱。如果油價不在這週跌破 $95，下週會看到第一家 bankruptcy chapter 11 的消息。' },

    { type: 'emote', character: 'customer-b', emote: 'surprise', duration: 700 },

    {
      type: 'market-data',
      data: {
        tickers: [
          { symbol: 'DAL', price: 40.80, change: -3.6 },
          { symbol: 'UAL', price: 47.20, change: -2.1 },
          { symbol: 'JBLU', price: 4.80, change: -6.2 },
          { symbol: 'SAVE', price: 2.10, change: -7.8 },
        ],
        volatility: 42,
        vix: 26.1,
        rsi: 32.0,
        beta: 1.38,
        priceHistory: [44, 43, 42, 41, 41, 40, 40, 40],
        volumeHistory: [62, 72, 86, 98, 102, 92, 84, 78],
        sectors: [
          { label: 'Legacy-Airlines', value: 880, color: '#ee4444' },
          { label: 'LCC', value: 620, color: '#ee4444' },
          { label: 'Regional', value: 580, color: '#ee4444' },
          { label: 'Cruise', value: 920, color: '#22cc55' },
        ],
        headline: 'Delta beat Q1、guide Q2 -2% capacity — LCC 崩 6-8%、「Iran ceasefire tax」寫進財報',
      },
    },

    { type: 'wait', duration: 400 },

    // ── Tariff 90-day cliff tomorrow ──
    { type: 'move', character: 'chef', toTile: 'stove' },
    { type: 'dialogue', character: 'chef', text: '明天關稅那條線怎麼辦？' },

    { type: 'dialogue', character: 'customer-a', text: '這才是週五的主戲。川普四個月前宣布的 90 天豁免明天到期——但 Treasury 到現在還沒把退款流程放出來。白宮下午三點有人放風聲說「會延長 30 天」——但沒有正式公告。這是典型的 Friday afternoon surprise setup。' },

    { type: 'dialogue', character: 'customer-b', text: '我的 desk 下午收到一張 memo——「避免週五早盤重倉 Walmart、Target、Best Buy」。因為這三家是退款規模最大的，而川普昨天那句「I\'ll remember companies that don\'t seek tariff refunds」等於在對他們施壓。申請了，也被記住。不申請，股東會生氣。這不是財務題、是政治題。' },

    { type: 'dialogue', character: 'customer-a', text: '最高法院那條判例還卡在那——行政權繞過國會徵稅違憲、但已經收的錢怎麼退沒人寫清楚。企業現在是「退款不到、關稅要來、政府在看」。三明治。' },

    { type: 'wait', duration: 300 },

    // ── Warsh confirmation glide path ──
    { type: 'move', character: 'chef', toTile: 'counter-center' },
    { type: 'dialogue', character: 'chef', text: 'Fed 的 Warsh 呢？' },

    { type: 'dialogue', character: 'customer-b', text: 'Banking Committee 今天下午投票通過 13-12——黨線表決。下週二全院投。分析師那邊共識是「confirmed by Tuesday night」。Powell 最後一次主持會議是 4/29，Warsh 正式上任是 5/5。整整一週空窗。' },

    { type: 'dialogue', character: 'customer-a', text: '這週最值得記的 trade 可能就在這個空窗。市場已經 price in 鷹派 Warsh，但如果 Powell 下週四的發布會放鴿——「dual mandate is alive」——那是整個 rate curve 的最後一次修正機會。' },

    { type: 'dialogue', character: 'customer-b', text: '2Y 今天已經跳到 4.42%，10Y 退回 4.38%——yield curve 微倒掛。市場在用最簡單的方式說：「短期 Fed 要變鷹、但中期經濟要降溫」。Warsh + airlines + 停火 = curve 壓平。' },

    { type: 'camera', effect: 'shake', duration: 250, intensity: 1 },

    { type: 'wait', duration: 300 },

    // ── Polymarket: how the week's prediction markets digested ceasefire + Warsh ──
    { type: 'move', character: 'chef', toTile: 'counter-center' },
    { type: 'dialogue', character: 'chef', text: '賠率市場呢？昨天講的三條合約今天怎麼走？' },

    { type: 'dialogue', character: 'customer-a', text: '兩條退、一條紋絲不動。4/30 那張在昨天 0.85% 的基礎上又掉到 0.65%——停火進入第三天、市場信心在累積。但 6/30 那張只從 8.5% 掉到 8.0%——意思是「停火撐過這週，但夏天前誰也不敢保證」。' },

    {
      type: 'polymarket-odds',
      data: {
        asOf: '2026-04-23T03:28:01Z',
        highlightSlug: 'will-the-iranian-regime-fall-by-june-30',
        markets: [
          {
            slug: 'will-the-iranian-regime-fall-by-april-30',
            question: 'Will the Iranian regime fall by April 30?',
            yesProbability: 0.0065,
            volume: 38512004,
            endDate: '2026-04-30T00:00:00Z',
            history: [
              { t: 1776780019, p: 0.0125 }, { t: 1776783654, p: 0.0105 }, { t: 1776787252, p: 0.0135 }, { t: 1776790810, p: 0.0145 },
              { t: 1776794430, p: 0.0135 }, { t: 1776798028, p: 0.0125 }, { t: 1776801600, p: 0.0145 }, { t: 1776808815, p: 0.0095 },
              { t: 1776812442, p: 0.0095 }, { t: 1776816005, p: 0.0085 }, { t: 1776819605, p: 0.0085 }, { t: 1776823203, p: 0.0085 },
              { t: 1776826804, p: 0.0085 }, { t: 1776830412, p: 0.0085 }, { t: 1776837618, p: 0.0085 }, { t: 1776845224, p: 0.0075 },
              { t: 1776852428, p: 0.0075 }, { t: 1776859631, p: 0.0075 }, { t: 1776866835, p: 0.0075 }, { t: 1776874039, p: 0.0075 },
              { t: 1776881243, p: 0.0065 }, { t: 1776888447, p: 0.0065 }, { t: 1776895651, p: 0.0065 }, { t: 1776902855, p: 0.0065 },
              { t: 1776910059, p: 0.0065 }, { t: 1776913662, p: 0.0065 }, { t: 1776914480, p: 0.0065 },
            ],
          },
          {
            slug: 'will-the-iranian-regime-fall-by-june-30',
            question: 'Will the Iranian regime fall by June 30?',
            yesProbability: 0.0800,
            volume: 33145208,
            endDate: '2026-06-30T00:00:00Z',
            history: [
              { t: 1776780045, p: 0.0850 }, { t: 1776790836, p: 0.0850 }, { t: 1776798054, p: 0.0850 }, { t: 1776801627, p: 0.0850 },
              { t: 1776805237, p: 0.0850 }, { t: 1776808855, p: 0.0850 }, { t: 1776812446, p: 0.0850 }, { t: 1776816017, p: 0.0850 },
              { t: 1776819608, p: 0.0850 }, { t: 1776823214, p: 0.0850 }, { t: 1776826808, p: 0.0850 }, { t: 1776830418, p: 0.0850 },
              { t: 1776837620, p: 0.0850 }, { t: 1776845222, p: 0.0850 }, { t: 1776852425, p: 0.0800 }, { t: 1776859629, p: 0.0800 },
              { t: 1776866833, p: 0.0800 }, { t: 1776874037, p: 0.0800 }, { t: 1776881241, p: 0.0800 }, { t: 1776888445, p: 0.0800 },
              { t: 1776895649, p: 0.0800 }, { t: 1776902853, p: 0.0800 }, { t: 1776910057, p: 0.0800 }, { t: 1776913660, p: 0.0800 },
              { t: 1776914482, p: 0.0800 },
            ],
          },
          {
            slug: 'will-the-fed-decrease-interest-rates-by-50-bps-after-the-april-2026-meeting',
            question: 'Will the Fed decrease interest rates by 50+ bps after the April 2026 meeting?',
            yesProbability: 0.0010,
            volume: 45328112,
            endDate: '2026-04-29T00:00:00Z',
            history: [
              { t: 1776780039, p: 0.0015 }, { t: 1776790831, p: 0.0015 }, { t: 1776798049, p: 0.0015 }, { t: 1776801622, p: 0.0015 },
              { t: 1776805228, p: 0.0015 }, { t: 1776808847, p: 0.0015 }, { t: 1776812445, p: 0.0015 }, { t: 1776816015, p: 0.0015 },
              { t: 1776819607, p: 0.0015 }, { t: 1776823210, p: 0.0015 }, { t: 1776826807, p: 0.0015 }, { t: 1776830415, p: 0.0015 },
              { t: 1776837619, p: 0.0015 }, { t: 1776845223, p: 0.0015 }, { t: 1776852427, p: 0.0010 }, { t: 1776859631, p: 0.0010 },
              { t: 1776866835, p: 0.0010 }, { t: 1776874039, p: 0.0010 }, { t: 1776881243, p: 0.0010 }, { t: 1776888447, p: 0.0010 },
              { t: 1776895651, p: 0.0010 }, { t: 1776902855, p: 0.0010 }, { t: 1776910059, p: 0.0010 }, { t: 1776913662, p: 0.0010 },
              { t: 1776914484, p: 0.0010 },
            ],
          },
        ],
      },
    },

    { type: 'dialogue', character: 'customer-b', text: 'Fed -50bp 那條再掉一階，0.10%。Warsh 今天 13-12 過 committee 的那一刻，這條合約就徹底死了。Powell 下週四就算想驚喜，也只剩 25bp 的彈藥——而且還要面對 Warsh 下週上任。' },

    { type: 'dialogue', character: 'customer-a', text: '有趣的是——6/30 regime fall 的 volume 今天反而上去了，從 $32.9M 加到 $33.1M。意思是「有人在 ceasefire 退潮的時候重新建倉」。賠率沒動、籌碼在換手——這通常是下一波 move 的前兆。' },

    { type: 'wait', duration: 400 },

    // ── Private AI / Cursor update ──
    { type: 'dialogue', character: 'chef', text: 'Cursor 那邊有新動靜嗎？' },

    { type: 'dialogue', character: 'customer-a', text: '昨天 SpaceX 寫了 $60B option。今天 The Information 放出來一篇，Sequoia 內部 memo 把 Cursor 的 fair value model 算到 $75B——理由是「SpaceX 出的 option 只是 strike、不是天花板」。這就是 private 市場的邏輯：option 成為下一輪 term sheet 的 floor。' },

    { type: 'dialogue', character: 'customer-b', text: 'public 那邊相反——Snowflake 今天 -3.2%、Datadog -2.8%。SaaS multiple 在壓縮，cloud-native 現在只有 mega-cap 能扛。這就是我們這週講了三天的 gap：private 在膨脹、public 在收縮。資金在玩兩個遊戲。' },

    { type: 'dialogue', character: 'customer-a', text: '而且今天 OpenAI 又放消息——他們在 talks 跟 Microsoft 重新改 stake structure，要把 MSFT 的 49% 降到 35%。如果真走這個路，MSFT 盤後反應會決定週五開盤。今天還沒確認。' },

    { type: 'wait', duration: 300 },

    // ── Misc: Musk / Anthropic / AI ──
    { type: 'dialogue', character: 'customer-a', text: '科技圈另外三條——' },

    { type: 'dialogue', character: 'customer-b', text: 'Anthropic 今天發聲明——「Mythos」沒被部署、也沒被滲透、目前內部審查完。但他們同時宣布會跟 Palantir 合作做 "trusted lab access" 機制——frontier labs 的安全協議從這週開始，走向標準化。' },

    { type: 'dialogue', character: 'customer-a', text: 'Meta 那個 keystroke 故事今天被參議院 Warner 發了信——要 FTC 調查。Zuck 可能下週要上聽證會。員工隱私 vs 模型訓練這條線，現在被政治化了。' },

    { type: 'dialogue', character: 'customer-b', text: '還有——Nvidia 今天釋出 Blackwell 2 samples 到 hyperscaler，Jensen 在 X 上發了一張 24-stack H200 的照片、caption 只寫「enough」。然後 SMCI 盤中 +8.4%。意思很直接——2026 Q3 的 AI capex cycle 已經點火。' },

    { type: 'emote', character: 'customer-a', emote: 'surprise', duration: 600 },

    { type: 'wait', duration: 400 },

    // ── Thursday wrap ──
    { type: 'dialogue', character: 'chef', text: '今天的關鍵詞？' },

    { type: 'dialogue', character: 'customer-a', text: '"Cloud test passed, tariff cliff looms"——GOOGL 用 38% 把 AMZN 那條裂縫補了一半，但明天那張關稅豁免過期。這週從戰爭開盤、停火中盤、現在要用一張行政程序收盤。市場的情緒這週被拖著換了三次車。' },

    { type: 'dialogue', character: 'customer-b', text: '我補一個——「quiet confirmation week」。Warsh 今天 committee 過了、下週 Tuesday 全院確認、週四 Powell 最後一次記者會。rate regime 的交接是這週最大的 under-priced event。Cook 走、Powell 走、ceasefire 掛著——三條線在同一週交棒。' },

    { type: 'dialogue', character: 'customer-a', text: '週五的劇本——早盤看關稅公告、午盤看 Walmart / Target 的反應、盤中看油價能不能跌破 $95 給 airlines 喘口氣、收盤看 MSFT 有沒有跟 OpenAI 新聞。四件事一起排、週五會是這個月最忙的一天。' },

    { type: 'dialogue', character: 'customer-b', text: '但也別忘了——Polymarket 6/30 那條的 volume 在漲。有人在押「停火會破」。這可能是下一波意外的 setup。週末又到了——上週末我們從戰爭開始、這週末我們從停火結束，但停火只是一個更大的不確定性的開頭。' },

    // ── Night wrap ──
    {
      type: 'market-data',
      data: {
        tickers: [
          { symbol: 'SPY', price: 529.80, change: 0.3 },
          { symbol: 'QQQ', price: 448.40, change: 0.4 },
          { symbol: 'WTI', price: 96.80, change: -1.6 },
          { symbol: 'VIX', price: 26.10, change: -4.4 },
        ],
        volatility: 30,
        vix: 26.1,
        rsi: 52.0,
        beta: 1.10,
        priceHistory: [524, 526, 527, 528, 528, 529, 530, 530],
        volumeHistory: [82, 86, 88, 84, 80, 76, 72, 70],
        sectors: [
          { label: 'Cloud', value: 1420, color: '#22cc55' },
          { label: 'Semis', value: 1380, color: '#22cc55' },
          { label: 'Mega-Cap', value: 1320, color: '#22cc55' },
          { label: 'Airlines', value: 820, color: '#ee4444' },
          { label: 'Energy', value: 1180, color: '#cc8844' },
        ],
        headline: '週四收盤 — SPY 529、VIX 26、WTI $96.80 — GOOGL cloud 跳、Delta guide 下、Warsh committee 過',
      },
    },

    { type: 'move', character: 'chef', toTile: 'counter-center' },
    { type: 'dialogue', character: 'chef', text: '今晚要來一碗熱的？週五早起。' },

    { type: 'dialogue', character: 'customer-a', text: '要。明天早盤 8:30 前要讀完關稅公告——如果 Treasury 把退款流程放出來，Walmart 會先跳；如果只發「延長 30 天」的 statement，就是 sideways 到午後。' },

    { type: 'dialogue', character: 'customer-b', text: '我的計畫——盤前讀財政部、10:00 盯油價、下午 2:00 看 MSFT 有沒有跟 OpenAI 官宣。這個順序排對了，週五就算不賺，也不會踩到錯的地雷。' },

    { type: 'wait', duration: 500 },
    { type: 'move', character: 'chef', toTile: 'stove' },

    {
      type: 'narration',
      text: '週四深夜的食堂，一碗熱拉麵、一杯麥茶。窗外的東京，Nikkei 剛收盤、BoJ 會議室的燈還亮著。太平洋這邊——Sundar 在 Mountain View 把 cloud 數字端進董事會、Delta CEO 在 Atlanta 寫給股東的信改了第三稿、Warsh 在華盛頓準備下週二的最後一場流程、Musk 在 Austin 跟 Cursor 的律師敲時間表。這週從一艘被攔下的船開始、以一個雲端數字接近結束。明天一張關稅豁免會到期、一週的帳會被寫成一個新的起點。今晚先吃飽。',
      duration: 5400,
    },
  ],
};
