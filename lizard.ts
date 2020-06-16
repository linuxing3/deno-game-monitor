import { Lizard, program } from "https://deno.land/x/denomander/mod.ts";
// Local imports
import * as notes from "./scripts/note_cmd.ts";
import { INote } from "./scripts/note_app.ts";

Lizard.appDetails({
  app_name: "Lizard Note app",
  app_description: "Taking notes everyday",
  app_version: "1.0.0",
});

Lizard.command("add [title] [body]", add)
  .describe(
    "Create Note",
  );

function add({ title, body }: INote) {
  notes.createNote({ title, body });
}

Lizard.command("list", () => {
  notes.listNotes();
}).describe("List all notes");

Lizard.command("read [title]", ({ title }: INote) => {
  notes.readNote(title);
}).describe("List all notes");

Lizard.command("update [title] [newTitle] [newBody]", (note: INote) => {
  notes.updateNote(note.title, String(note.newBody), String(note.newTitle));
}).describe("Update a note");

Lizard.command("remove [title]", ({ title }: INote) => {
  notes.removeNote(title);
}).describe("Update a note");

export { Lizard };
