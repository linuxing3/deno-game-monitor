import { assertEquals } from "https://deno.land/std/testing/asserts.ts";

import {
  tailrecursion,
  tailrecursionMemo,
} from "./math.tailrecursion.helper.ts";

Deno.test("Testing math tailrecursion: ...", async () => {
  console.log("\n1, 1, 2, 3, 5, 8, 13, 21 ...\n");

  let result = tailrecursion(7);
  assertEquals(result, 13);
});

Deno.test("Testing math tailrecursion memo: ...", async () => {
  console.log("\n1, 1, 2, 3, 5, 8, 13, 21 ...\n");

  let result = tailrecursionMemo(7);
  assertEquals(result, 13);
});
