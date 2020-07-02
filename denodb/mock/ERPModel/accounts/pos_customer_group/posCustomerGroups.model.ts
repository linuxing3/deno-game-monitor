// Copyright 2018-2020 Xing Wenju.
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: PosCustomerGroup
|--------------------------------------------------------------------------
|
| Model of posCustomerGroups
|
*/
import {
  DataTypes,
  Model,
} from "https://deno.land/x/denodb/mod.ts";

export class PosCustomerGroup extends Model {
  static table = "posCustomerGroups";
  static timestamps = true;

  static fields = {
    // fields list for ORM Maping
    id: { primaryKey: true, autoIncrement: true },
    customerGroup: DataTypes.STRING,
  };

  static meta = {
    // field meta information for UI render
    fieldProperty: [
      {
        key: "customerGroup",
        label: "Customer Group",
        type: "select",
        placeholder: "Input Customer Group",
        options: "",
      },
    ],
  };
}
