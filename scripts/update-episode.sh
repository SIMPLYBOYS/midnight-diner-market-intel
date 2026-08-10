#!/usr/bin/env bash
# Daily episode generator — invoked by launchd (see scripts/com.midnightdiner.episode.plist).
# Runs Claude Code headless to write + verify today's episode, then pushes only if it typechecks.
#
# Flow: this script owns the git plumbing (pull / gated push); Claude owns the
# content (verify date, fetch real data or ABORT, write epNN, typecheck, commit).
# Push is gated on typecheck so a broken episode can never reach the remote.
set -uo pipefail

REPO="/Users/mac/dev/midnight-diner-market-intel"
BRANCH="develop"
cd "$REPO" || { echo "repo not found: $REPO"; exit 1; }

echo "=== $(date '+%Y-%m-%d %H:%M:%S %Z') : start ==="

# Start from remote HEAD so we don't fork the auto-refreshed polymarket commits.
git pull --rebase --autostash origin "$BRANCH" || { echo "git pull failed — abort"; exit 1; }

BEFORE=$(git rev-parse HEAD)

# ── The prompt encodes the non-negotiable guardrails. `<<'EOF'` = no shell
# ── interpolation, so Chinese text and $ signs pass through untouched.
read -r -d '' PROMPT <<'EOF'
更新今天的 episode。這是無人值守的自動排程，請嚴格遵守以下防線，任何一條不滿足就 abort、不要硬寫：

1.【先驗日期】不要相信系統時鐘（它曾偏差三週）。先用 WebSearch 查當天真實財經新聞，確認「今天」實際是幾月幾號、星期幾；用這個真實日期當 episode 的 date。
2.【只用真實資料】動筆前先用 WebSearch/WebFetch 抓當天或最近的真實市場數字與新聞（指數收盤、匯率、央行、財報等）。抓不到就 abort、明講資料源失敗，不要編造或外推任何數字／事件。
3.【讀設定】寫對白前先讀 src/characters/personas.ts；sectors[].value 必須是該行指標資產當日 |%change|×100；對白要口語、chef 是金融素人。其餘慣例見 CLAUDE.md 與記憶。
4.【時區】episode 設定在東京傍晚。若此刻東京當日盤（15:00 JST）尚未收盤，不要捏造當日收盤，改以已確認的隔夜美股／前一日收盤／盤中方向為錨，或把該集寫成盤前／等待框架。
5.【輪替】看最新一集的 cast，讓 customer-a／customer-b 出場數平衡；題材盡量不要跟前幾集重複。
6.【產出】新檔 src/assets/episodes/episodeNN.ts（NN = 目前最新集數 + 1），內部 id: 'ep-NN' 對齊檔名。寫完務必跑 npm run typecheck 且必須通過。
7.【提交】git add 只加那一個新檔，用 Conventional Commits 寫訊息（feat(epNN): …、中文描述、標明資料來源）。**不要 push**——外層腳本會在 typecheck 通過後代為 push。

若任何一步無法滿足（尤其是 1、2），不要建立 episode，直接說明原因並結束。
EOF

claude -p "$PROMPT" \
  --model claude-opus-4-8 \
  --dangerously-skip-permissions

AFTER=$(git rev-parse HEAD)

if [ "$BEFORE" = "$AFTER" ]; then
  echo "no new episode committed (Claude aborted, or nothing to do) — nothing to push"
  echo "=== $(date '+%Y-%m-%d %H:%M:%S %Z') : end ==="
  exit 0
fi

# Gate: never push a broken episode.
if npm run --silent typecheck; then
  git push origin "$BRANCH" && echo "pushed $AFTER"
else
  echo "typecheck FAILED on new commit $AFTER — NOT pushing; leaving commit for manual review"
  exit 1
fi

echo "=== $(date '+%Y-%m-%d %H:%M:%S %Z') : end ==="
