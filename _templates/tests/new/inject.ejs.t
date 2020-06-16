---
inject: true
to: tests/<%= name %>/<%= action %>.tests.ts
after: hygen starts
skip_if: tests
---
Deno.test("<%= name %>: you test statement", async () => {
  assertEqual(1, 1);
});