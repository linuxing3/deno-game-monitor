#!/usr/bin/env bash

export DENO_INSTALL="/root/.deno"
export PATH=$DENO_INSTALL/bin:/mnt/c/npc/:/mnt/c/Windows/System32:/mnt/c/Windows:$PATH

cd /root/workspace/deno-game-monitor
deno run -A ./games-logger.ts /tmp/games.log
