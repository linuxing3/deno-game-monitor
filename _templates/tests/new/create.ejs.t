---
to: tests/<%= name %>/<%= action %>.tests.ts
---
import { assertEquals } from "https://deno.land/std/testing/asserts.ts";

Deno.test("note: you test statement", async () => {
  assertEquals(1, 1);
});

// hygen starts
// hygen ends