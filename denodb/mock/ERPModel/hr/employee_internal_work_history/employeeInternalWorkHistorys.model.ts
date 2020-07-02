// Copyright 2018-2020 Xing Wenju.
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: EmployeeInternalWorkHistory
|--------------------------------------------------------------------------
|
| Model of employeeInternalWorkHistorys
|
*/
import {
  DataTypes,
  Model,
} from "https://deno.land/x/denodb/mod.ts";

export class EmployeeInternalWorkHistory extends Model {
  static table = "employeeInternalWorkHistorys";
  static timestamps = true;

  static fields = {
    // fields list for ORM Maping
    id: { primaryKey: true, autoIncrement: true },
    branch: DataTypes.STRING,
    department: DataTypes.STRING,
    designation: DataTypes.STRING,
    fromDate: DataTypes.STRING,
    toDate: DataTypes.STRING,
  };

  static meta = {
    // field meta information for UI render
    fieldProperty: [
      {
        key: "branch",
        label: "Branch",
        type: "select",
        placeholder: "Input Branch",
        options: "",
      },
      {
        key: "department",
        label: "Department",
        type: "select",
        placeholder: "Input Department",
        options: "",
      },
      {
        key: "designation",
        label: "Designation",
        type: "select",
        placeholder: "Input Designation",
        options: "",
      },
      {
        key: "fromDate",
        label: "From Date",
        type: "input",
        placeholder: "Input From Date",
        options: "",
      },
      {
        key: "toDate",
        label: "To Date",
        type: "input",
        placeholder: "Input To Date",
        options: "",
      },
    ],
  };
}
