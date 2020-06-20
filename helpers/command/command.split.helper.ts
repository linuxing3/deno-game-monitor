// Copyright 2018-2020 Author: linuxing3<linuxing3@qq.com>. All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Helper: command split
|--------------------------------------------------------------------------
| Calcuate value between
*/
export const split = (command: string): string[] => {
  var myRegexp = /[^\s"]+|"([^"]*)"/gi;
  var splits = [];

  do {
    //Each call to exec returns the next regex match as an array
    var match = myRegexp.exec(command);
    if (match != null) {
      //Index 1 in the array is the captured group if it exists
      //Index 0 is the matched text, which we use if no captured group exists
      splits.push(match[1] ? match[1] : match[0]);
    }
  } while (match != null);

  return splits;
};

// hygen starts
// hygen ends
