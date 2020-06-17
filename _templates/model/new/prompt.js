// see types of prompts:
// https://github.com/enquirer/enquirer/tree/master/examples
//
module.exports = [
  {
    type: "input",
    name: "name",
    message: "What's your model name?"
  },
  {
    type: "input",
    name: "fields",
    message: "What's your model fields?"
  }
];
