// Copyright 2018-2020 Xing Wenju.
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: LeaveBlockListDate
|--------------------------------------------------------------------------
|
| Model of leaveBlockListDates
|
*/
import {
  DataTypes,
  Model,
} from "https://deno.land/x/denodb/mod.ts";

export class LeaveBlockListDate extends Model {
  static table = "leaveBlockListDates";
  static timestamps = true;

  static fields = {
    // fields list for ORM Maping
    id: { primaryKey: true, autoIncrement: true },
    blockDate: DataTypes.STRING,
    reason: DataTypes.STRING,
  };

  static meta = {
    // field meta information for UI render
    fieldProperty: [
      {
        key: "blockDate",
        label: "Block Date",
        type: "input",
        placeholder: "Input Block Date",
        options: "",
      },
      {
        key: "reason",
        label: "Reason",
        type: "input",
        placeholder: "Input Reason",
        options: "",
      },
    ],
  };
}
