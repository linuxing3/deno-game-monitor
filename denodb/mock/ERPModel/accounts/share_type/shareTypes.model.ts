// Copyright 2018-2020 Xing Wenju.
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: ShareType
|--------------------------------------------------------------------------
|
| Model of shareTypes
|
*/
import {
  DataTypes,
  Model,
} from "https://deno.land/x/denodb/mod.ts";

export class ShareType extends Model {
  static table = "shareTypes";
  static timestamps = true;

  static fields = {
    // fields list for ORM Maping
    id: { primaryKey: true, autoIncrement: true },
    title: DataTypes.STRING,
    description: DataTypes.STRING,
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
        key: "description",
        label: "Description",
        type: "input",
        placeholder: "Input Description",
        options: "",
      },
    ],
  };
}
