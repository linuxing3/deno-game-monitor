import { assertEquals } from "https://deno.land/std/testing/asserts.ts";

import { createNote, readNote } from "./note_cmd.ts";

Deno.test("note: you test statement", async () => {
  createNote({
    title: "A note",
    body: "Note body",
  });
  readNote("A note");
  assertEquals(1, 1);
});
