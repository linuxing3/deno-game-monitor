---
to: tests/<%= name %>/<%= name %>.<%= action %>.tests.ts
---
import { assertEquals } from "https://deno.land/std/testing/asserts.ts";

Deno.test("Testing <%= name %> <%= action %>: ...", async () => {
  assertEquals(1, 1);
});

// hygen starts
// hygen ends