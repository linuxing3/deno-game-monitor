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
import { Select } from "https://deno.land/x/cliffy/prompt.ts";

const { cwd } = Deno;

interface TemplateConfig {
  modelTemplate: string;
  modelIndexFileName: string;
  modelIndexTemplate: string;
}

interface SchemaConfig {
  modelName: string;
  tableName: string;
  fields: any;
}

interface ModelConfig {
  tableName: string;
  modelName: string;
  path: string;
}

async function renderModelFile(
  path: string,
  schema: SchemaConfig,
  template: string,
) {
  try {
    console.log("[model file name] :" + path);
    const modelOutput = await renderFileToString(template, schema);
    await writeFileStr(path, modelOutput);
  } catch (error) {
    console.log(error);
  }
}

// inject to a models index file
async function renderModelIndexFile(
  models: ModelConfig[],
  config: TemplateConfig,
) {
  const { modelIndexFileName, modelIndexTemplate } = config;
  try {
    const modelIndexOutput = await renderFileToString(
      modelIndexTemplate,
      { models },
    );
    await writeFileStr(modelIndexFileName, modelIndexOutput);
    console.log("[model index file name] :" + modelIndexFileName);
  } catch (error) {
    console.log(error);
  }
}

async function useTemplates(): Promise<TemplateConfig> {
  const modelIndexFileName = "models.index.ts";
  const modelIndexTemplate = "models.index.ejs";

  // Choose a template
  console.log(`Starting waling the dir ${cwd()}`);
  const modelTemplate: string = await Select.prompt({
    message: `Pick a template to generate model file `,
    options: [
      { name: "denodb min ejs template", value: "template.denodb.min.ejs" },
      { name: "denodb ejs template", value: "template.denodb.ejs" },
      Select.separator("--------"),
      { name: "dso ejs template", value: "template.dso.ejs" },
      { name: "cotton ejs template", value: "template.cotton.ejs" },
      { name: "orm ejs template", value: "template.orm.ejs" },
    ],
  });
  console.log(`You choosed template: [${modelTemplate}]`);
  console.log(`Using default model index template: [${modelIndexTemplate}]`);
  console.log(`Model Index file will be: [${modelIndexFileName}]`);
  return {
    modelTemplate,
    modelIndexFileName,
    modelIndexTemplate,
  };
}

/**
 * Walk through dir and generate ORM models
 * @param path path
 */
async function walkModels(
  path: string,
  config: TemplateConfig,
): Promise<ModelConfig[]> {
  const {
    modelTemplate,
  } = config;

  let models: ModelConfig[] = [];

  // Start walking
  for await (const entry of walk(path)) {
    // Delete unuseful files
    if (
      entry.name === "test_records.json" ||
      entry.name === "testRecordss.model.ts"
    ) {
      console.log("removing" + entry.path);
      await Deno.remove(entry.path);
    } // check extension of json file
    const ext = posix.extname(entry.path);
    if (ext === ".json") {
      try {
        const shortFileName = posix.basename(entry.path).split(".")[0];
        const modelName = pascalCase(shortFileName);
        const tableName = camelCase(shortFileName) + "s";

        const shortDirName = posix.dirname(entry.path);
        const modelFileName = `${shortDirName}/${tableName}.model.ts`;

        // Read file and fetch model schema
        const model: any = await readJson(entry.path);
        // define schema of model
        const schema: SchemaConfig = {
          modelName,
          tableName,
          fields: model.fields,
        };
        // render model and write to file
        await renderModelFile(
          modelFileName,
          schema,
          `${cwd()}/${modelTemplate}`,
        );

        // push model for injection in a index file
        models.push({
          tableName,
          modelName,
          path: modelFileName.replace(`${cwd()}`, "."),
        });
        // console.log(models);
      } catch (error) {
        console.log(error);
      }
    }
  }
  return models;
}

const config = await useTemplates();
const models = await walkModels(`${cwd()}`, config);
// inject to a models index file
await renderModelIndexFile(
  models,
  config,
);
console.log(`Done!`);
