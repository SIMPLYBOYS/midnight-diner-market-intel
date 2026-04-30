/**
 * Character personas — single source of truth for dialogue authoring.
 *
 * These fields are not consumed at runtime; they exist to keep episode
 * scripts internally consistent (gender, family, occupation, voice).
 * When a new fact about a character gets written into an episode, add
 * it here too so future episodes don't contradict it.
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
    '有一個妹妹，妹妹有小孩（ep21：妹妹累積一堆飛行里程、想帶小孩去韓國）',
    '有一位師父，最近從某家店退休/交班（ep22：「我師父最後一天交班」那段讓他老婆哭了）',
  ],
  voice: [
    '日常用詞——「股票」「利息」「政府開會」「公司倒了」這種層級',
    '反問、聽不懂、用日常事物類比（鄰居、火災險、店長換人、煮菜、進貨單）',
    '用食堂日常（湯頭、客流、食材成本、天氣）切換節奏',
    '對話開頭常說「いらっしゃい」',
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
    '有一位大學/前公司同學在 JetBlue 做財務副理——38 歲、有兩個小孩、住紐約（ep21、ep22）',
    '配偶/小孩未在劇本中出現過——保留空位，需要再寫進來時不要跟 customer-b 撞',
  ],
  voice: [
    '會用業內詞、但會自己白話補充——是 chef 的解釋者',
    '常引用「我們桌上」「我們這群人」「我同事」的觀點',
    '看市場時偏分析、偏歷史對照、偏冷靜推理',
  ],
  avoid: [
    '不要寫成喊單派——他不喊買賣、他講邏輯',
    '不要每集都做「對賭/押注」——避免題材重複',
  ],
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
    '有小孩（ep21、ep22：「回家陪小孩」、團隊同事有人剛買了帶小孩去 Disney World 的票）',
    '父親是退休金融人——做了三十年（ep22：「我爸退休那年、講三十年金融業生涯」）',
  ],
  voice: [
    '比 customer-a 多一點業務口吻——「我們 desk 收到一張 note」「我們團隊」',
    '對市場看法偏戰術、偏短線訊號、偏波動',
    '會提到家庭——小孩、先生、父親——customer-a 不會',
  ],
  avoid: [
    '不要寫「我老婆」「我太太」——她是女性，配偶是「我先生」',
    '不要把她寫成跟 customer-a 同一家公司的同事——他們是各自獨立的常客、在食堂相識',
  ],
  spouseTerm: '先生',
};

export const PERSONAS: Record<Persona['key'], Persona> = {
  chef: CHEF_PERSONA,
  'customer-a': CUSTOMER_A_PERSONA,
  'customer-b': CUSTOMER_B_PERSONA,
};
