import { assertEquals } from "https://deno.land/std/testing/asserts.ts";

import { pipe } from "./fp.pipe.helper.ts";

Deno.test("Testing fp pipe: ...", async () => {
  const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const result = pipe(array);
  assertEquals(result, [2, 4, 6]);
});
