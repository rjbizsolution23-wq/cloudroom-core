#!/usr/bin/env bash
# ==============================================================================
# RJ Business Solutions — Cloudroom Core Turnkey Startup Script
# Architect: Rick Jefferson, CEO | https://rjbusinesssolutions.org
# ==============================================================================
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
RUNTIME_DIR="${CLOUDROOM_RUNTIME_DIR:-$ROOT_DIR/.runtime}"
ACCOUNT_HOME="${CLOUDROOM_ACCOUNT_HOME:-$RUNTIME_DIR/home}"
STATE_DIR="${CLOUDROOM_STATE_DIR:-$RUNTIME_DIR/state}"
STORE_PATH="${CLOUDROOM_STORE:-$RUNTIME_DIR/store.json}"

mkdir -p "$ACCOUNT_HOME/.local/bin" "$ACCOUNT_HOME/.claude" "$STATE_DIR"

# 1. Provision all 416 skills, 222 autonomous agents, and RJ Brand Universe
echo "▶ Provisioning 416 runtime skills, 222 autonomous agents, and RJ Brand Universe..."
python3 "$ROOT_DIR/install/provision-rj-agents.py" --home "$ACCOUNT_HOME"

# 2. Link local Claude / Codex / Cursor / OpenCode binaries if available on host
for bin_name in claude codex cursor-agent opencode fx hermes; do
  if command -v "$bin_name" >/dev/null 2>&1; then
    ln -sf "$(command -v "$bin_name")" "$ACCOUNT_HOME/.local/bin/$bin_name"
  fi
done

# 3. Export Cloudroom Core Runtime Environment
export CLOUDROOM_TOKEN="${CLOUDROOM_TOKEN:-rj-cloudroom-sovereign-enterprise-token-2026}"
export CLOUDROOM_LISTEN="${CLOUDROOM_LISTEN:-127.0.0.1:9840}"
export CLOUDROOM_ACCOUNT_HOME="$ACCOUNT_HOME"
export CLOUDROOM_STATE_DIR="$STATE_DIR"
export CLOUDROOM_STORE="$STORE_PATH"
export CLOUDROOM_REPOSITORY="$ROOT_DIR"
export CLOUDROOM_LOCAL_HISTORY="${CLOUDROOM_LOCAL_HISTORY:-1}"
export CLOUDROOM_HARNESS="${CLOUDROOM_HARNESS:-claude-code}"

# On macOS or local workstation mode, enable loopback test mode if no Linux storage policy is set
if [[ -z "${CLOUDROOM_STORAGE_POLICY:-}" ]]; then
  export CLOUDROOM_UNPROTECTED_TEST_MODE=1
fi

# 4. Build if binary is not present
BINARY="$ROOT_DIR/target/debug/cloudroom"
if [[ ! -x "$BINARY" ]]; then
  echo "▶ Compiling cloudroom-core..."
  (cd "$ROOT_DIR" && cargo build)
fi

echo "=============================================================================="
echo "🏛️  RJ BUSINESS SOLUTIONS — CLOUDROOM CORE v0.1.57"
echo "   Command Center UI : http://${CLOUDROOM_LISTEN}/"
echo "   Catalog Endpoint  : http://${CLOUDROOM_LISTEN}/rj/catalog"
echo "   Health Endpoint   : http://${CLOUDROOM_LISTEN}/v1/health"
echo "   Auth Bearer Token : ${CLOUDROOM_TOKEN}"
echo "=============================================================================="

exec "$BINARY"
