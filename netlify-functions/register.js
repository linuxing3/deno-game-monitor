// with thanks to https://github.com/vnovick/netlify-function-example/blob/master/functions/bad-words.js
const axios = require("axios");
const Filter = require("bad-words");
const filter = new Filter();
const hgeEndpoint = "https://prepared-pangolin-10.hasura.app/";

const query = `
mutation UserMutation($name: String = "", $email: String = "", $password: String = "") {
  insert_users_one(object: {name: $name, password: $password, email: $email}) {
    id
  }
}
`;

exports.handler = async (event, context) => {
  let request;
  try {
    request = JSON.parse(event.body);
  } catch (e) {
    return { statusCode: 400, body: "cannot parse hasura event" };
  }

  const variables = {
    name: request.event.data.new.name,
    email: filter.clean(request.event.data.new.email),
    password: filter.clean(request.event.data.new.password)
  };

  const headers = {
    "Hasura-Client-Name": "hasura-console",
    "hasura-collaborator-token": "IDToken eyJhbGciOiJSUzI1NiIsImtpZCI6InB1YmxpYzoyMzIyM2JiNi1lODQ3LTRhMTAtOThhNS02Yzk1YjZlYWUxOGEiLCJ0eXAiOiJKV1QifQ.eyJhbGxvd2VkX3NjaGVtYXMiOltdLCJhbGxvd2VkX3RhYmxlcyI6e30sImF0X2hhc2giOiI1YlV5czN5MHcwc0Jiek9ZUGZETkZBIiwiYXVkIjpbIjhmNzE2MDc5LTgyOTYtNDA4Yy1i"
  }
  try {
    await axios.post(hgeEndpoint + "/v1/graphql", { headers, query, variables });
    return { statusCode: 200, body: "success" };
  } catch (err) {
    return { statusCode: 500, body: err.toString() };
  }
};
