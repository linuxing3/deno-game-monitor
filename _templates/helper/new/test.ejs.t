---
to: helpers/<%= name %>/<%= name %>.<%= action %>.test.ts
---
import { assertEquals } from "https://deno.land/std/testing/asserts.ts";

import { <%= action %> } from "./<%= name %>.<%= action %>.helper.ts";

Deno.test("Testing <%= name %> <%= action %>: ...", async () => {
  assertEquals(1, 1);
});
