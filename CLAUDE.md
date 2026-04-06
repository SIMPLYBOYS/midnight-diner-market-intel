# CLAUDE.md — Midnight Diner × Market Intel

## Project Overview

像素風深夜食堂場景 + 市場情報視覺化的互動式 Demo。以 JSON 劇本驅動像素場景回放，架構預留 LLM 接口。目標：4 週內完成可展示的求職 Demo。

## Tech Stack

- **Frontend**: React + TypeScript
- **Game Engine**: Phaser 3
- **Build Tool**: Vite
- **Audio**: Howler.js
- **Map Editor**: Tiled Map Editor (exports JSON)
- **Deploy**: GitHub Pages

## Project Structure

```
src/
├── components/        # React UI (HUD, 報告面板, 播放控制)
├── scenes/            # Phaser 3 scenes (食堂場景, 角色動畫)
├── engine/            # TimelinePlayer 核心引擎
│   ├── TimelinePlayer.ts
│   └── types.ts       # Episode / Action TypeScript 型別
├── datasource/        # DataSource 抽象層
│   ├── interface.ts   # DataSource 介面定義
│   ├── JsonDataSource.ts
│   └── LlmDataSource.ts  # 預留
├── ui/                # 市場情報 UI 元件
│   ├── Hud.tsx        # 底部資訊列
│   ├── CrtBoard.tsx   # CRT 電視風格賠率看板
│   └── ReportPanel.tsx
├── dialogue/          # 對話系統 (泡泡 + 打字機效果)
├── characters/        # 角色定義與 sprite 管理
└── assets/            # 靜態資源
    ├── tilemaps/      # Tiled 匯出的 JSON 地圖
    ├── sprites/       # 角色 sprite sheets
    ├── audio/         # BGM + 音效
    └── episodes/      # JSON 劇本檔
```

## Key Architecture

- **TimelinePlayer** 是核心引擎，讀取 JSON 劇本驅動場景播放
- **DataSource** 抽象層：目前用 JSON 劇本，未來可切換至 LLM API
- React 負責 UI overlay (HUD / 報告 / 控制面板)，Phaser 負責像素場景渲染
- React 與 Phaser 透過 event bus 通訊，避免直接耦合

## Development Commands

```bash
npm run dev        # 啟動開發伺服器
npm run build      # 建置生產版本
npm run preview    # 預覽生產版本
npm run lint       # ESLint 檢查
npm run typecheck  # TypeScript 型別檢查
npm run deploy     # 部署至 GitHub Pages
```

## Code Conventions

- 語言：TypeScript strict mode，不使用 `any`
- 命名：React 元件 PascalCase，函式/變數 camelCase，常數 UPPER_SNAKE_CASE
- 檔案命名：React 元件 PascalCase.tsx，其餘 camelCase.ts
- CSS：CSS Modules 或 Tailwind（視初始化選擇）
- Phaser scenes 使用 class-based 寫法繼承 `Phaser.Scene`
- 所有遊戲常數（tile size, map dimensions, animation speeds）集中在 `src/constants.ts`
- JSON 劇本格式需符合 `Episode` 型別定義，新增劇本時必須通過型別檢查
- 不使用 `console.log` debug，改用統一的 logger utility

## Commit Convention

使用 Conventional Commits：
- `feat:` 新功能
- `fix:` 修復
- `refactor:` 重構
- `style:` 樣式/像素美術調整
- `asset:` 素材新增或更新
- `docs:` 文件
- `chore:` 工具/設定

commit message 用英文，description 可用中文補充。

## Target Environment

- MacBook Pro 2016 (Intel i7 / 16GB)
- 瀏覽器：Chrome / Safari 最新版
- 螢幕：確保 1280×720 以上正常顯示
- 性能目標：穩定 30fps（考量舊機器）

## Important Notes

- 這是求職 Demo，優先展示完整度與架構設計能力
- 素材優先使用免費/開源授權，記錄來源於 `CREDITS.md`
- Phaser 與 React 整合時注意生命週期管理，避免記憶體洩漏
- 地圖尺寸固定 32×24 tiles，不做動態地圖
