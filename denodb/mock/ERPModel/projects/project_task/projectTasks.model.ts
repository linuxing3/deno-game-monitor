// Copyright 2018-2020 Xing Wenju.
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: ProjectTask
|--------------------------------------------------------------------------
|
| Model of projectTasks
|
*/
import {
  DataTypes,
  Model,
} from "https://deno.land/x/denodb/mod.ts";

export class ProjectTask extends Model {
  static table = "projectTasks";
  static timestamps = true;

  static fields = {
    // fields list for ORM Maping
    id: { primaryKey: true, autoIncrement: true },
    title: DataTypes.STRING,
    status: DataTypes.STRING,
    viewTask: DataTypes.STRING,
    viewTimesheet: DataTypes.STRING,
    makeTimesheet: DataTypes.STRING,
    startDate: DataTypes.STRING,
    endDate: DataTypes.STRING,
    weight: DataTypes.STRING,
    description: DataTypes.STRING,
    taskId: DataTypes.STRING,
  };

  static meta = {
    // field meta information for UI render
    fieldProperty: [
      {
        key: "title",
        label: "Title",
        type: "input",
        placeholder: "Input Title",
        options: "",
      },
      {
        key: "status",
        label: "Status",
        type: "select",
        placeholder: "Input Status",
        options:
          "[object Object],[object Object],[object Object],[object Object],[object Object]",
      },
      {
        key: "viewTask",
        label: "View Task",
        type: "input",
        placeholder: "Input View Task",
        options: "",
      },
      {
        key: "viewTimesheet",
        label: "View Timesheet",
        type: "input",
        placeholder: "Input View Timesheet",
        options: "",
      },
      {
        key: "makeTimesheet",
        label: "Make Timesheet",
        type: "input",
        placeholder: "Input Make Timesheet",
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
        key: "startDate",
        label: "Start Date",
        type: "input",
        placeholder: "Input Start Date",
        options: "",
      },
      {
        key: "endDate",
        label: "End Date",
        type: "input",
        placeholder: "Input End Date",
        options: "",
      },
      {
        key: "weight",
        label: "Weight",
        type: "input",
        placeholder: "Input Weight",
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
        key: "description",
        label: "Description",
        type: "input",
        placeholder: "Input Description",
        options: "",
      },
      {
        key: "taskId",
        label: "Task Id",
        type: "select",
        placeholder: "Input Task Id",
        options: "",
      },
    ],
  };
}
