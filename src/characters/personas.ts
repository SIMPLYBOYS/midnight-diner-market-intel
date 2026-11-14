/**
 * Character personas — single source of truth for dialogue authoring.
 *
 * These fields are not consumed at runtime; they exist to keep episode
 * scripts internally consistent (gender, family, occupation, voice).
 * When a new fact about a character gets written into an episode, add
 * it here too so future episodes don't contradict it.
 *
 * ⚠️ CONTINUITY DEBT (ep59–ep61, 2026-06-08~10): those three episodes
 * drifted into writing A and B as colleagues at the SAME desk (joint
 * morning review、共同 white paper、A 替 B 跟 desk head 排班、B 照 A 的
 * 計畫下單)。This violates the standing guardrail that they are
 * independent regulars who met at the diner. Do NOT extend the drift:
 * future episodes should fade the joint-desk framing out — they can
 * compare notes over dinner, reference each other's views, even
 * "傳訊息給對方", but no shared desk head / joint position decisions /
 * co-authored internal docs. Treat ep59-61 as「那一週剛好合作密切」,
 * not a permanent arrangement.
 */

export interface Persona {
  /** Matches CharacterConfig.key */
  key: 'chef' | 'customer-a' | 'customer-b';
  /** Display name used in dialogue cues */
  displayName: string;
  gender: 'male' | 'female';
  /** Loose age band — for voice/reference points, not displayed */
  ageBand: string;
  /** One-line elevator pitch */
  oneLiner: string;
  /** Occupation / role in the world */
  occupation: string;
  /** Family facts that have been written into scripts and must stay consistent */
  family: string[];
  /** Speech register and verbal tics */
  voice: string[];
  /** What this character does NOT do — guardrails */
  avoid: string[];
  /** Spouse term to use in dialogue (if applicable) */
  spouseTerm?: '老婆' | '老公' | '先生' | '太太';
}

export const CHEF_PERSONA: Persona = {
  key: 'chef',
  displayName: 'Master / 師傅',
  gender: 'male',
  ageBand: '40s',
  oneLiner: '東京小巷深夜食堂的老闆。金融素人，是觀眾的代理人。',
  occupation: '食堂店主——自己掌廚、自己進貨、自己算帳。沒有老闆、自己就是老闆。',
  family: [
    '已婚——稱呼太太為「我老婆」（ep21、ep22）',
    '老婆退休前在公司當總機 30 年（ep52/53/55 展開）——每天 6:30 準時下班、沒拖過；退休那天她媽哭說「他終於回家了」是 B 爸的對照組；自評「這輩子最大的好處是嫁給自己當老闆的人、上班時間自己訂」（ep36/51）',
    '老婆的名言已成 recurring device、會被 A/B 抄去 desk 白板：「店滿是表象、後場是真實」（ep53）、「不要被一週兩端的情緒拉走」（ep54）、「客人不在乎你進貨價的歷史、只在乎今天這碗值不值」（ep61）',
    '有一個妹妹，妹妹有小孩（ep21：妹妹累積一堆飛行里程、想帶小孩去韓國）',
    '有一位師父，最近從某家店退休/交班（ep22；ep35-36：交班那天把刀洗乾淨掛回原位、一句話沒講就走）',
    '師父的名言也是 recurring device：「店是工具、家才是目的」（ep50）、「讓舌頭歸零」（ep43）、「備料備到有剩才是本事、丟掉的備料是保險費」（ep61）、「沒被颱風夜考過的高湯不能放 menu」（ep57/60）',
  ],
  voice: [
    '日常用詞——「股票」「利息」「政府開會」「公司倒了」這種層級',
    '反問、聽不懂、用日常事物類比（鄰居、火災險、店長換人、煮菜、進貨單）',
    '用食堂日常（湯頭、客流、食材成本、天氣）切換節奏',
    '對話開頭常說「いらっしゃい」',
    '常轉述「我老婆今天看新聞問我…」當每集金融議題的開場引子——他答不出來、等客人解',
  ],
  avoid: [
    '不主動拋專業詞——FOMC、DIP、CDS、oracle、midpoint、basis points 等都不會講',
    '不講「我老闆」「我主管」——他自己就是老闆',
    '不講「我同事」——他是一人小店',
    '不主動提交易策略、倉位配置；他只會問「然後呢？」「這跟我有什麼關係？」',
  ],
  spouseTerm: '老婆',
};

export const CUSTOMER_A_PERSONA: Persona = {
  key: 'customer-a',
  displayName: 'Customer A',
  gender: 'male',
  ageBand: 'late 30s',
  oneLiner: '金融圈第一線、買方/賣方分析師路線。常客中比較資深的那位。',
  occupation: '在交易所/投資機構工作（ep01：「我剛從交易所回來」）。會講桌上同事的觀點、會引述報告。',
  family: [
    '已婚——配偶稱呼用「太太」（ep51 起）；太太偶爾回娘家住幾天（ep51/53）',
    '2026-06 初帶太太去箱根住一晚、手機交給太太保管 24 小時——「framework 概念用在生活的 self-graduation test」（ep57-59）',
    '太太的角色：能判斷哪些新聞嚴重到該打斷他休假（ep59 新幹線那段）',
    '小孩未在劇本中出現過——保留空位、寫進來前先想清楚',
    '有一位大學/前公司同學在 JetBlue 做財務副理——38 歲、有兩個小孩、住紐約（ep21、ep22）',
  ],
  voice: [
    '會用業內詞、但會自己白話補充——是 chef 的解釋者',
    '常引用「我們桌上」「我們這群人」「我同事」的觀點',
    '看市場時偏分析、偏歷史對照、偏冷靜推理',
    'signature 是演進中的信心配比 framework：「七分信三分留」→「八分信二分留」→ 被打臉降回「七分信」→「七分半二分半」（ep49-60）——新事件進來時調的是「留」的內容、不輕易動湯底',
    '常用概念詞（自己會白話補充）：「鈍化」「earned conviction vs 白給的信心」「talk vs walk」「scenario completeness beats directional accuracy」',
  ],
  avoid: [
    '不要寫成喊單派——他不喊買賣、他講邏輯',
    '不要每集都做「對賭/押注」——避免題材重複',
    '不要寫成跟 customer-b 同 desk / 同公司（見檔頭 CONTINUITY DEBT）——他們是獨立常客、交流止於食堂與訊息',
  ],
  spouseTerm: '太太',
};

export const CUSTOMER_B_PERSONA: Persona = {
  key: 'customer-b',
  displayName: 'Customer B',
  gender: 'female',
  ageBand: 'late 30s to early 40s',
  oneLiner: '金融圈做市/業務員路線（sell-side desk）。家庭跟工作之間在拉扯的那位。',
  occupation: '在投行/券商交易桌（ep15、16、18：「我的 desk」、「我們團隊」）。看波動率、看訊息流、做客戶。',
  family: [
    '已婚——配偶稱呼用「我先生」（不要寫「老公」、不要寫「老婆」）',
    '有小孩（ep21、ep22）；日常由先生 / 外婆家 / 先生的爸媽輪流接手、她才能晚上來食堂（ep46-61 多次）',
    '父親是退休金融人——做了三十年（ep22）；退休前一年才學會把週末劃一半給她媽（ep52）',
    '爸爸的名言是 recurring device：「客戶要你追高、你最該保護他、不是討好他」（ep46）、「你讓客戶在高點接了刀、他記你一輩子」（ep48）、「週五收盤手上要乾淨、別把煩惱帶回家過週末」（ep44）、「計畫內的後悔叫成本、計畫外的才叫災難」（ep61）',
  ],
  voice: [
    '比 customer-a 多一點業務口吻——「我們 desk 收到一張 note」「我們團隊」',
    '對市場看法偏戰術、偏短線訊號、偏波動',
    '會提到家庭——小孩、先生、父親——customer-a 不會',
    'recurring devices：一位往來 15 年的老客戶（ep48 想砍韓國 AI 被勸住、ep61 又想全壓被勸回分批）；desk 自製的「散戶情緒指數」（統計客戶來電的驚慌字眼、ep54/58）',
    '自我定位名言：「我們真正的價值不是預測未來、是幫客戶在恐慌時不做傻事」（ep56）、「人的情緒是放大器、我的工作是裝減震器」（ep61）',
  ],
  avoid: [
    '不要寫「我老婆」「我太太」——她是女性，配偶是「我先生」',
    '不要把她寫成跟 customer-a 同一家公司的同事——他們是各自獨立的常客、在食堂相識（ep59-61 曾漂移成同 desk、見檔頭 CONTINUITY DEBT、之後淡出、不要再寫 joint review / 共同倉位決策）',
  ],
  spouseTerm: '先生',
};

export const PERSONAS: Record<Persona['key'], Persona> = {
  chef: CHEF_PERSONA,
  'customer-a': CUSTOMER_A_PERSONA,
  'customer-b': CUSTOMER_B_PERSONA,
};
