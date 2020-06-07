#!/usr/bin/env bash

export DENO_INSTALL="/root/.deno"
export PATH=$DENO_INSTALL/bin:/mnt/c/npc/:/mnt/c/Windows/System32:/mnt/c/Windows:$PATH

cd /root/workspace/deno-game-monitor

deno run -A --unstable scripts/smart-logger.ts log /tmp/games.csv csv

deno run -A --unstable scripts/smart-logger.ts show "Code.exe" /tmp/games.csv

deno run -A --unstable scripts/smart-logger.ts json "Code.exe" /tmp/games.csv
deno run -A --unstable scripts/smart-logger.ts pids "Code.exe" /tmp/games.csv
deno run -A --unstable scripts/smart-logger.ts send "Code.exe" /tmp/games.csv

deno run -A --unstable scripts/smart-logger.ts kill "Code.exe" /tmp/games.csv

