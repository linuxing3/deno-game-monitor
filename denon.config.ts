import { DenonConfig } from "https://deno.land/x/denon/mod.ts";

const config: DenonConfig = {
  scripts: {
    start: {
      cmd: "deno run -A --unstable server.ts",
      desc: "run my server ts file",
    },
  },
};

export default config;
