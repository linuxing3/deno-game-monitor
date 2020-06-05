#!/usr/bin/env bash

cd /root/workspace/deno-game-monitor
deno run --allow-net --allow-run ./games-logger.ts /tmp/games.log
