// Copyright 2018-2020 Xing Wenju.
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: AccountingPeriod
|--------------------------------------------------------------------------
|
| Model of accountingPeriods
|
*/
import {
  DataTypes,
  Model,
} from "https://deno.land/x/denodb/mod.ts";

export class AccountingPeriod extends Model {
  static table = "accountingPeriods";
  static timestamps = true;

  static fields = {
    // fields list for ORM Maping
    id: { primaryKey: true, autoIncrement: true },
    periodName: DataTypes.STRING,
    startDate: DataTypes.STRING,
    endDate: DataTypes.STRING,
    company: DataTypes.STRING,
    status: DataTypes.STRING,
    closedDocuments: DataTypes.STRING,
  };

  static meta = {
    // field meta information for UI render
    fieldProperty: [
      {
        key: "periodName",
        label: "Period Name",
        type: "input",
        placeholder: "Input Period Name",
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
        key: "status",
        label: "Status",
        type: "select",
        placeholder: "Input Status",
        options: "[object Object]",
      },
      {
        key: "",
        label: "",
        type: "input",
        placeholder: "Input ",
        options: "",
      },
      {
        key: "closedDocuments",
        label: "Closed Documents",
        type: "select",
        placeholder: "Input Closed Documents",
        options: "",
      },
    ],
  };
}
