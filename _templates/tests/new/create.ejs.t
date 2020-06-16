---
to: tests/<%= name %>/<%= action %>.tests.ts
---
import { assertEqual } from "https://deno.land/std/testing/mod.ts";

Deno.test("note: you test statement", async () => {
  assertEqual(1, 1);
});

// hygen starts
// hygen ends