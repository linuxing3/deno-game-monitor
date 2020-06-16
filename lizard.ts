import { Lizard, program } from "https://deno.land/x/denomander/mod.ts";

Lizard.appDetails({
  app_name: "Deno game monitor",
  app_description: "Monitor games of kid playing",
  app_version: "1.0.0",
});

Lizard.command("clone [url]", clone)
  .option("-c, --color", "the color")
  .option("-d, --dcolor", "the color")
  .describe(
    "this is a description",
  );

Lizard.command("pull [repo]", ({ repo }: any) => {
  if (program.force) {
    console.log(`pull from ${repo} with force`);
  } else {
    console.log("Just pull from " + repo);
  }
}).requiredOption("-f --force", "With force").describe(
  "This is a pull command",
);

function clone({ url }: any) {
  console.log("clone from ..." + url);
}

export { Lizard };
