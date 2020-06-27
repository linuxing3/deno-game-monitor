import { Crony } from "https://deno.land/x/crony/mod.ts";

// Create a new instance of Crony
const crony = new Crony();

// Every job has a name
crony.add({
  name: "process",
  schedule: "* * * * *",
  enabled: true,
  debug: true,
  command: "ps -ax | grep deno | cut -d ' ' -f 1",
});

// Or with function

crony.add({
  name: "fetch denoland",
  schedule: "*/2 * * * *",
  debug: true,
  command: async () => {
    const res = await fetch("https://deno.land/").then((body) => body.text());
    return { res };
  },
  enabled: true,
});

await crony.run();
