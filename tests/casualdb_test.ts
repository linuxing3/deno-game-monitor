import { assertEquals, assertThrows } from "testing/asserts.ts"
import { db, RootSchema } from "../services/db.casual.ts";
await db.connect("../data/test-casualdb.json"); // "connect" to the db (JSON file)

// (optional) seed it with data, if starting with an empty db
await db.seed({
  posts: [
    { id: 1, title: "Post 1", views: 99 },
    { id: 2, title: "Post 2", views: 30 },
  ],
  user: { name: "Camp Vanilla" },
});

Deno.test('Casualdb: Posts should match', async () => {

  const posts = await db.get<RootSchema['posts']>('posts'); // pass the interface key in order for type-checking to work
  const postTitlesByViews = (
    posts
      .sort(['views']) // sort by views (ascending)
      .pick(['title']) // pick the title of every post
      .value() // => ['Post 2', 'Post 1']
  );
  assertEquals(postTitlesByViews, ['Post 2', 'Post 1'])
})