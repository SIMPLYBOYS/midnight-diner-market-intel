# AGENTS.md — Midnight Diner × Market Intel

本文件定義專案中各 AI Agent 的角色分工與協作方式。

---

## Agent 角色定義

### 1. Pixel Scene Architect（像素場景架構師）

**職責**：負責 Phaser 3 場景搭建、地圖載入、角色 sprite 管理、燈光效果

**擅長領域**：
- Phaser 3 Scene 生命週期管理
- Tilemap 載入與圖層渲染
- Sprite sheet 動畫配置
- 光影效果（暖黃色深夜氛圍）
- 攝影機與視窗設定

**工作原則**：
- 所有 Phaser 場景繼承自專案的 BaseScene
- 動畫定義集中管理，不散落在各 scene
- 性能優先：使用 object pooling 管理重複物件
- 地圖修改必須同步更新 Tiled 原始檔與匯出 JSON

---

### 2. Timeline Engine Builder（劇本引擎工程師）

**職責**：負責 TimelinePlayer 核心引擎、劇本解析、播放控制邏輯

**擅長領域**：
- 劇本 JSON schema 設計與型別定義
- 播放 / 暫停 / 快轉 / 跳轉邏輯
- Action 排程與時序控制
- DataSource 抽象層設計
- 劇本驗證與錯誤處理

**工作原則**：
- TimelinePlayer 為純邏輯層，不直接操作 DOM 或 Phaser 物件
- 透過 event emitter 通知場景執行動作
- 所有時間單位統一使用毫秒 (ms)
- 新 Action 類型必須先更新型別定義，再實作處理邏輯

---

### 3. UI/UX Composer（介面設計師）

**職責**：負責 React UI 層、市場情報視覺元件、播放控制介面

**擅長領域**：
- React 元件設計（HUD、報告面板、進度條）
- CRT 電視風格 UI 效果
- 資料視覺化（賠率看板、話題標籤）
- React ↔ Phaser 通訊橋接
- 響應式佈局與動畫

**工作原則**：
- UI 元件使用 React，不用 Phaser 的 DOM 元件
- 所有 UI 狀態透過 React state/context 管理
- CRT 效果使用 CSS filter + animation，不用 canvas
- UI 元件必須支援播放中 / 暫停 / 結束三種狀態

---

### 4. Dialogue Director（對話系統導演）

**職責**：負責對話泡泡系統、打字機效果、角色語音/音效整合

**擅長領域**：
- 對話泡泡渲染（Phaser 內嵌 UI）
- 打字機效果與節奏控制
- 角色表情/動作與對話同步
- 多語言文字處理（中文排版）
- 音效觸發與對話節奏搭配

**工作原則**：
- 對話泡泡在 Phaser 場景內渲染（跟隨角色位置）
- 打字機速度可在常數檔調整
- 對話文字支援基本標記語法（粗體、顏色）
- 音效播放不阻塞對話流程

---

### 5. Script Writer（劇本編劇）

**職責**：負責撰寫 JSON 劇本、設計角色對話內容、規劃市場情報數據

**擅長領域**：
- Episode JSON 結構編寫
- 角色性格與對話風格設定
- 市場情報數據設計（賠率、話題）
- 劇情節奏與場景轉換安排
- 劇本格式驗證

**工作原則**：
- 每集劇本獨立一個 JSON 檔，放在 `src/assets/episodes/`
- 劇本必須通過 TypeScript 型別檢查
- 對話內容用繁體中文，保持深夜食堂的溫馨氛圍
- 市場情報數據需合理但不必為真實數據

---

## Agent 協作流程

```
Script Writer ──(JSON 劇本)──→ Timeline Engine Builder
                                      │
                              ┌───────┼───────┐
                              ▼       ▼       ▼
                     Pixel Scene  Dialogue  UI/UX
                     Architect    Director  Composer
```

1. **Script Writer** 產出劇本 JSON
2. **Timeline Engine Builder** 解析劇本，分派事件
3. 三個消費端各自處理對應事件：
   - **Pixel Scene Architect**：角色移動、場景變化
   - **Dialogue Director**：對話顯示、音效
   - **UI/UX Composer**：HUD 更新、市場情報展示

## 使用指引

在 Claude Code 中，可根據當前任務指定對應角色視角：

- 建構場景 → 以 Pixel Scene Architect 角度思考
- 設計引擎 → 以 Timeline Engine Builder 角度思考
- 製作 UI → 以 UI/UX Composer 角度思考
- 寫對話系統 → 以 Dialogue Director 角度思考
- 編寫劇本 → 以 Script Writer 角度思考

跨領域任務時，優先確認各 Agent 的邊界與介面定義，避免職責重疊。
