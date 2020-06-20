// Copyright 2018-2020 Author: linuxing3<linuxing3@qq.com>. All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Helper: fp pipe
|--------------------------------------------------------------------------
| Calcuate value between
*/
import * as Fae from "https://deno.land/x/fae/mod.ts";

export const pipe = (array: number[]) => {
  const transformer = Fae.pipe(
    Fae.map((item: number) => item + 1),
    Fae.filter((item: number) => item % 2 === 0),
    Fae.take(3),
  );
  return transformer(array);
};

// hygen starts
// hygen ends
