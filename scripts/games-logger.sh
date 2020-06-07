#!/usr/bin/env bash

export DENO_INSTALL="/root/.deno"
export PATH=$DENO_INSTALL/bin:/mnt/c/npc/:/mnt/c/Windows/System32:/mnt/c/Windows:$PATH

cd /root/workspace/deno-game-monitor

# deno install -f -A --unstable scripts/smart-logger.ts 

deno run -A --unstable scripts/smart-logger.ts log  -f csv /tmp/games

deno run -A --unstable scripts/smart-logger.ts filter -f csv -k "Code.exe" /tmp/games

deno run -A --unstable scripts/smart-logger.ts json -f csv -k "Code.exe" /tmp/games

deno run -A --unstable scripts/smart-logger.ts pids -f csv -k "Code.exe" /tmp/games

deno run -A --unstable scripts/smart-logger.ts send -f csv -k "Code.exe" /tmp/games

deno run -A --unstable scripts/smart-logger.ts kill -f csv -k "Code.exe" /tmp/games

