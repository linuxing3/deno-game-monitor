const { cwd, stdout, copy } = Deno;
import { renderFile } from "https://deno.land/x/dejs/mod.ts";

(async () => {
  const output = await renderFile(`${cwd()}/template.ejs`, {
    name: "world",
  });
  await copy(output, stdout);
})();
