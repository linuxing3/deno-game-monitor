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
  WalkEntry,
} from "https://deno.land/x/std/fs/mod.ts";
import { posix } from "https://deno.land/std/path/mod.ts";
import {
  renderFileToString,
} from "https://deno.land/x/dejs/mod.ts";
import {
  camelCase,
  pascalCase,
} from "https://deno.land/x/case/mod.ts";
import { singular, plural } from "https://deno.land/x/deno_plural/mod.ts";
import { Input, Select } from "https://deno.land/x/cliffy/prompt.ts";

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

/**
 * Model Generator Class
 */
class ModelGenerator {
  modelIndexFileName: string = "models.index.ts";
  modelIndexTemplate: string = "models.index.ejs";
  modelTemplate: string = "models.single.ejs";
  adaptor: string = "";
  models: ModelConfig[] = [];
  cwd: string = ".";
  postfix: string = "model";

  constructor(adaptor?: string, cwd?: string) {
    this.adaptor = adaptor || "denodb";
    this.cwd = cwd || Deno.cwd();
    this.useTemplates();
  }

  renderModelFile = async (
    path: string,
    schema: SchemaConfig,
    template: string,
  ) => {
    try {
      console.log("[model file name]:  " + path);
      const modelOutput = await renderFileToString(template, schema);
      await writeFileStr(path, modelOutput);
    } catch (error) {
      console.log(error);
    }
  };
  // inject to a models index file
  renderModelIndexFile = async () => {
    const { models, modelIndexFileName, modelIndexTemplate } = this;
    try {
      const modelIndexOutput = await renderFileToString(
        modelIndexTemplate,
        { models },
      );
      await writeFileStr(modelIndexFileName, modelIndexOutput);
      console.log("[model index file name]:    " + modelIndexFileName);
    } catch (error) {
      console.log(error);
    }
  };

  fileAdapter = (path: string, segment: string) => {
    const { adaptor } = this;
    const adaptors = ["dso", "denodb", "cotton", "orm"];
    if (adaptors.includes(adaptor)) {
      return path.replace(segment, `${segment}.${adaptor}`);
    }
    return path;
  };

  useTemplates = async () => {
    this.modelIndexFileName = this.fileAdapter(
      this.modelIndexFileName,
      "index",
    );
    this.modelIndexTemplate = this.fileAdapter(
      this.modelIndexTemplate,
      "index",
    );
    this.modelTemplate = this.fileAdapter(this.modelTemplate, "single");
  };

  shouldBeCleand(entry: WalkEntry) {
    return entry.name === "test_records.json" ||
      posix.extname(entry.path) === ".ts";
  }

  // Delete unuseful files
  clean = async (entry: WalkEntry) => {
    if (this.shouldBeCleand(entry)) {
      const confirmClean: string = await Select.prompt({
        message: `confirm to delete`,
        options: [
          { name: "No", value: "n" },
          { name: "Yes", value: "y" },
        ],
      });
      if (confirmClean === "n") console.log("Not deleted old file!");
      if (confirmClean === "y") await Deno.remove(entry.path);
    }
  };

  useModelConfig = async (entry: WalkEntry) => {
    const shortFileName = posix.basename(entry.path).split(".")[0];
    const modelName = pascalCase(singular(shortFileName));
    const tableName = camelCase(plural(shortFileName));

    const shortDirName = posix.dirname(entry.path);
    const modelFileName = `${shortDirName}/${tableName}.${this.postfix}.ts`;

    // Read file and fetch model schema
    const model: any = await readJson(entry.path);
    // define schema of model
    const schema: SchemaConfig = {
      modelName,
      tableName,
      fields: model.fields,
    };

    return { tableName, modelName, modelFileName, schema };
  };

  /**
   * Walk through dir and generate ORM models
   * @param path path
   */
  walkModels = async () => {
    const {
      models,
      modelTemplate,
      cwd,
    } = this;

    // Start walking
    for await (const entry of walk(cwd)) {
      // Delete unuseful files
      // await clean(entry);

      const ext = posix.extname(entry.path);
      if (ext === ".json") {
        try {
          const { modelFileName, schema, tableName, modelName } = await this
            .useModelConfig(entry);
          const adaptedModelFileName = this.fileAdapter(
            modelFileName,
            this.postfix,
          );
          // render model and write to file
          await this.renderModelFile(
            adaptedModelFileName,
            schema,
            `${cwd}/${modelTemplate}`,
          );

          // push model for injection in a index file
          models.push({
            tableName,
            modelName,
            path: adaptedModelFileName.replace(`${cwd}`, "."),
          });
          // console.log(models);
        } catch (error) {
          console.log(error);
        }
      }
    }
    return this;
  };
}

// Bootstrap
const adaptor: string = await Select.prompt({
  message: "Select your adaptor?",
  options: [
    {
      name: "denodb",
      value: "denodb",
    },
    {
      name: "dso",
      value: "dso",
    },
  ],
});
const dir: string = await Input.prompt(
  `What's your working dir, empty for current?`,
);
let generator = new ModelGenerator(adaptor, dir || Deno.cwd());
await generator.walkModels();
await generator.renderModelIndexFile();
console.log(`Done!`);
