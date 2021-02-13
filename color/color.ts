import clc from "https://deno.land/x/color/index.ts";
//import clc from 'https://deno.land/x/color/index.js' // For JS

console.log(clc.red.text("I am red"));
console.log(clc.blue.text("I am blue"));
console.log(clc.green.text("I am green"));
console.log(clc.yellow.text("I am yellow"));
console.log(clc.cyan.text("I am cyand"));
console.log(clc.magenta.text("I am magenta"));
console.log(clc.white.text("I am white"));

console.log(clc.bgRed.text("I am bgRred"));
console.log(clc.bgBlue.text("I am bgBlue"));
console.log(clc.bgGreen.text("I am bgGreen"));
console.log(clc.bgYellow.text("I am bgYellow"));
console.log(clc.bgCyan.text("I am bgCyand"));
console.log(clc.bgMagenta.text("I am bgMagenta"));
console.log(clc.bgWhite.text("I am bgWhite"));
console.log(clc.reset.text("I am reset"));
console.log(clc.bright.text("I am bright"));
console.log(clc.dim.text("I am dim"));
console.log(clc.underscore.text("I am underscore"));
console.log(clc.blink.text("I am blink"));
console.log(clc.reverse.text("I am reverse"));
console.log(clc.hidden.text("I am hidden"));

console.log(clc.red.bgBlue.text("Hello World"));
