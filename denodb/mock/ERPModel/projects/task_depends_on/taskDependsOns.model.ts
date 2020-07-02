// Copyright 2018-2020 Xing Wenju.
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: TaskDependsOn
|--------------------------------------------------------------------------
|
| Model of taskDependsOns
|
*/
import {
  DataTypes,
  Model,
} from "https://deno.land/x/denodb/mod.ts";

export class TaskDependsOn extends Model {
  static table = "taskDependsOns";
  static timestamps = true;

  static fields = {
    // fields list for ORM Maping
    id: { primaryKey: true, autoIncrement: true },
    task: DataTypes.STRING,
    subject: DataTypes.STRING,
    project: DataTypes.STRING,
  };

  static meta = {
    // field meta information for UI render
    fieldProperty: [
      {
        key: "task",
        label: "Task",
        type: "select",
        placeholder: "Input Task",
        options: "",
      },
      {
        key: "",
        label: "",
        type: "input",
        placeholder: "Input ",
        options: "",
      },
      {
        key: "subject",
        label: "Subject",
        type: "input",
        placeholder: "Input Subject",
        options: "",
      },
      {
        key: "project",
        label: "Project",
        type: "input",
        placeholder: "Input Project",
        options: "",
      },
    ],
  };
}
