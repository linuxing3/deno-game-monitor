import { Act, FileAdapter } from "https://deno.land/x/actdb/mod.ts";
const { inspect } = Deno;
const db = new Act(new FileAdapter()); // Create a new act db. You can pass in different adapters. They all take an optional name parameter. It will be used as the name for the top level file or tree.

interface Book { // Declare the type for your store. It will help in inference.
  id: number;
  author: string;
}

const book = await db.createStore<Book>("books"); // We pass in the name for our store.

const [inserted, newStore] = await book.insert([{ // Any mutation operations will return a tuple of [T[], T[]] or [Book[], Book[]]
  id: 1,
  author: "author",
}]);

console.log(inserted, newStore);

book.$insert.attach((item) => { // You can listen to operations like this. It uses evt as its internal event system.
  console.log(`Inserted: ${inspect(item, { depth: 5 })}`);
});

const result = await book.get(); // Return all the items.

console.log(result);
