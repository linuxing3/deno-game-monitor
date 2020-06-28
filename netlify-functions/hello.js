// with thanks to https://github.com/vnovick/netlify-function-example/blob/master/functions/bad-words.js
exports.handler = async (event, context) => {
  try {
    return { statusCode: 200, body: "hello" };
  } catch (err) {
    return { statusCode: 500, body: err.toString() };
  }
};
