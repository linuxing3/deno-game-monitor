import { CasualDB } from "https://deno.land/x/casualdb@0.1.1/mod.ts";
// create an interface to describe the structure of your JSON
interface Schema {
  posts: Array<{
    id: number;
    title: string;
    views: number;
  }>;
  user: {
    name: string;
  };
}

const db = new CasualDB<Schema>(); // instantiate the db, casually 🤓
await db.connect("./casualdb/casualdb.json"); // "connect" to the db (JSON file)

// (optional) seed it with data, if starting with an empty db
await db.seed({
  posts: [
    { id: 1, title: "Post 1", views: 99 },
    { id: 2, title: "Post 2", views: 30 },
  ],
  user: { name: "Camp Vanilla" },
});

const posts = await db.get<Schema["posts"]>("posts"); // pass the interface key in order for type-checking to work

posts
  .sort(["views"]) // sort by views (ascending)
  .pick(["title"]) // pick the title of every post
  .value(); // => ['Post 2', 'Post 1']
