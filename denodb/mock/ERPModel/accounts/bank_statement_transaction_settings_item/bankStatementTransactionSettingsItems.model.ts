// Copyright 2018-2020 Xing Wenju.
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: BankStatementTransactionSettingsItem
|--------------------------------------------------------------------------
|
| Model of bankStatementTransactionSettingsItems
|
*/
import {
  DataTypes,
  Model,
} from "https://deno.land/x/denodb/mod.ts";

export class BankStatementTransactionSettingsItem extends Model {
  static table = "bankStatementTransactionSettingsItems";
  static timestamps = true;

  static fields = {
    // fields list for ORM Maping
    id: { primaryKey: true, autoIncrement: true },
    mappingType: DataTypes.STRING,
    bankData: DataTypes.STRING,
    mappedDataType: DataTypes.STRING,
    mappedData: DataTypes.STRING,
  };

  static meta = {
    // field meta information for UI render
    fieldProperty: [
      {
        key: "mappingType",
        label: "Mapping Type",
        type: "select",
        placeholder: "Input Mapping Type",
        options: "",
      },
      {
        key: "bankData",
        label: "Bank Data",
        type: "input",
        placeholder: "Input Bank Data",
        options: "",
      },
      {
        key: "mappedDataType",
        label: "Mapped Data Type",
        type: "select",
        placeholder: "Input Mapped Data Type",
        options: "[object Object],[object Object],[object Object]",
      },
      {
        key: "mappedData",
        label: "Mapped Data",
        type: "select",
        placeholder: "Input Mapped Data",
        options: "",
      },
    ],
  };
}
