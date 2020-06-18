// Copyright 2018-2020 Author: linuxing3<linuxing3@qq.com>. All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Helper: math tailrecursion
|--------------------------------------------------------------------------
| Calcuate value between
*/
export const tailrecursion = (n: number) => {
  let a = 0;
  let b = 1;

  if (n === 0) {
    return a;
  }
  if (n === 1) {
    return b;
  }

  for (let i = 2; i <= n; i++) {
    const tmp = a + b;
    a = b;
    b = tmp;
  }
  return b;
};

export const tailrecursionMemo = (
  index: number = 1,
  cache: number[] = [0, 1, 1],
): number => {
  if (cache[index]) {
    return cache[index];
  }
  if (index < 3) return 1;
  return tailrecursionMemo(index - 1, cache) +
    tailrecursionMemo(index - 2, cache);
};

export const tailrecursionReducer = (
  index: number = 1,
  cache: number[] = [0, 1, 1],
): number => {
  if (index < 3) return 1;
  const newCache: number[] = cache.reduce((pre: number[], item: number) => {
    const r = [pre[-1], pre[-1] + item];
    return r;
  }, [0, 1]);
  return newCache[index - 1] + newCache[index - 2];
};
// hygen starts
// hygen ends
