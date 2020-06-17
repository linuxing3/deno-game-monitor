---
inject: true
to: tests/<%= name %>/<%= name %>.<%= action %>.tests.ts
after: hygen starts
skip_if: tests
---
Deno.test("Testing <%= name %> <%= action %>: ...", async () => {
  assertEqual(1, 1);
});