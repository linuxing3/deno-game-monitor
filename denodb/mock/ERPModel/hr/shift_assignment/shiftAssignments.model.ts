// Copyright 2018-2020 Xing Wenju.
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: ShiftAssignment
|--------------------------------------------------------------------------
|
| Model of shiftAssignments
|
*/
import {
  DataTypes,
  Model,
} from "https://deno.land/x/denodb/mod.ts";

export class ShiftAssignment extends Model {
  static table = "shiftAssignments";
  static timestamps = true;

  static fields = {
    // fields list for ORM Maping
    id: { primaryKey: true, autoIncrement: true },
    employee: DataTypes.STRING,
    employeeName: DataTypes.STRING,
    department: DataTypes.STRING,
    shiftType: DataTypes.STRING,
    present: DataTypes.STRING,
    company: DataTypes.STRING,
    date: DataTypes.STRING,
    shiftRequest: DataTypes.STRING,
    amendedFrom: DataTypes.STRING,
  };

  static meta = {
    // field meta information for UI render
    fieldProperty: [
      {
        key: "employee",
        label: "Employee",
        type: "select",
        placeholder: "Input Employee",
        options: "",
      },
      {
        key: "employeeName",
        label: "Employee Name",
        type: "input",
        placeholder: "Input Employee Name",
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
        key: "shiftType",
        label: "Shift Type",
        type: "select",
        placeholder: "Input Shift Type",
        options: "",
      },
      {
        key: "present",
        label: "Present",
        type: "input",
        placeholder: "Input Present",
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
        key: "company",
        label: "Company",
        type: "select",
        placeholder: "Input Company",
        options: "",
      },
      {
        key: "date",
        label: "Date",
        type: "input",
        placeholder: "Input Date",
        options: "",
      },
      {
        key: "shiftRequest",
        label: "Shift Request",
        type: "select",
        placeholder: "Input Shift Request",
        options: "",
      },
      {
        key: "amendedFrom",
        label: "Amended From",
        type: "select",
        placeholder: "Input Amended From",
        options: "",
      },
    ],
  };
}
