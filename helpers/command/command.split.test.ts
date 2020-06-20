import { assertEquals } from "https://deno.land/std/testing/asserts.ts";

import { split } from "./command.split.helper.ts";

Deno.test("Testing command split: ...", async () => {
  const r = split('command -f arg2 -c "arg3 arg4"');
  assertEquals(r, ["command", "-f", "arg2", "-c", "arg3 arg4"]);
});
