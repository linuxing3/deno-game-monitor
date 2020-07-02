// Copyright 2018-2020 Xing Wenju.
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: FinanceBook
|--------------------------------------------------------------------------
|
| Model of financeBooks
|
*/
import {
  DataTypes,
  Model,
} from "https://deno.land/x/denodb/mod.ts";

export class FinanceBook extends Model {
  static table = "financeBooks";
  static timestamps = true;

  static fields = {
    // fields list for ORM Maping
    id: { primaryKey: true, autoIncrement: true },
    name: DataTypes.STRING,
  };

  static meta = {
    // field meta information for UI render
    fieldProperty: [
      {
        key: "name",
        label: "Name",
        type: "input",
        placeholder: "Input Name",
        options: "",
      },
    ],
  };
}
