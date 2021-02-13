import gql from "https://raw.githubusercontent.com/davidmwhynot/graphql-tag-deno/master/mod.ts";

const schema = gql`
	type User {
		id: String!
		name: String!
	}

	type Post {
		id: String!
		content: String!
	}

	type Query {
		user(id: String!): User!
		posts: [Post!]!
	}

	type Mutation {
		login(username: String!, password: String!): User!
		logout: Boolean!
		newPost(content: String!): Post!
	}
`;

console.log("schema", schema);
