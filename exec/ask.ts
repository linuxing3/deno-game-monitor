import Ask from 'https://deno.land/x/ask/mod.ts';

const ask = new Ask(); // global options are also supported! (see below)

const answers = await ask.prompt([
  {
    name: 'name',
    type: 'input',
    message: 'Name:'
  },
  {
    name: 'age',
    type: 'number',
    message: 'Age:'
  }
]);

console.log(answers); // { name: "Joe", age: 19 }