import { assertEqual } from "https://deno.land/std/testing/mod.ts";

import { createNote, readNote } from "./note_cmd.ts";

Deno.test("note: you test statement", async () => {
  createNote({
    title: "A note",
    body: "Note body",
  });
  readNote("A note");
  assertEqual(1, 1);
});
