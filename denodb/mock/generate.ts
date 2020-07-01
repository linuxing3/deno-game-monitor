/**
 * Backend api development Work Flow
 * Generate ORM Model from json scheme
 * Generate graphql from ORM Model
 * Sync ORM Model to postgres database
 * Generate schema with harusa.io
 */

import {
  walk,
  readJson,
  writeFileStr,
} from "https://deno.land/x/std/fs/mod.ts";
import { posix } from "https://deno.land/std/path/mod.ts";
import {
  renderFileToString,
} from "https://deno.land/x/dejs/mod.ts";
import {
  camelCase,
  pascalCase,
} from "https://deno.land/x/case/mod.ts";
import { Select, Separator } from "https://deno.land/x/cliffy/prompt.ts";

const { cwd, stdout, copy } = Deno;

// FIXME testing
// await walkModels(`ERPModel/accounts/bank`);
console.log(`Starting waling the dir ${cwd()}`);
// Choose a template

const template: string = await Select.prompt({
  message: `Pick a template`,
  options: [
    { name: "template.denodb.ejs", value: "template.denodb.ejs" },
    { name: "template.dso.ejs", value: "template.dso.ejs" },
    Select.separator("--------"),
    { name: "template.cotton.ejs", value: "template.cotton.ejs" },
    { name: "template.orm.ejs", value: "template.orm.ejs" },
  ],
});
/**
 * Walk through dir and generate ORM models
 * @param path path
 */
async function walkModels(path: string) {
  for await (const entry of walk(path)) {
    const ext = posix.extname(entry.path);
    if (ext === ".json") {
      try {
        const shortDirName = posix.dirname(entry.path);
        const shortFileName = posix.basename(entry.path).split(".")[0];
        const modelName = pascalCase(shortFileName);
        const tableName = camelCase(shortFileName) + "s";
        const modelFileName = `${shortDirName}/${tableName}.model.ts`;
        // Read file and fetch model schema
        const model: any = await readJson(entry.path);
        const schema = {
          modelName,
          tableName,
          fields: model.fields,
        };
        console.log('[model name] : ' + modelName);
        console.log('[entry path] : ' +entry.path);
        console.log('[model file name] :' + modelFileName);
        const output = await renderFileToString(`${cwd()}/${template}`, schema);
        await writeFileStr(modelFileName, output);
      } catch (error) {
        console.log(error);
      }

    }
  }
}

console.log(`You choosed template: [${template}]`);

await walkModels(`${cwd()}`);
console.log(`Done!`);
