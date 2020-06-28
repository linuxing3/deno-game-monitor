Add following line in your crontab file

```bash
* * * * * cd ~/workspace/deno-game-monitor/crony/ && deno run --allow-run --allow-net --allow-read --allow-write --unstable crony.ts >> /dev/null 2>&1
```
