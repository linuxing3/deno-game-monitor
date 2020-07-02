// Copyright 2018-2020 Xing Wenju.
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: AssetCategoryAccount
|--------------------------------------------------------------------------
|
| Model of assetCategoryAccounts
|
*/
import {
  DataTypes,
  Model,
} from "https://deno.land/x/denodb/mod.ts";

export class AssetCategoryAccount extends Model {
  static table = "assetCategoryAccounts";
  static timestamps = true;

  static fields = {
    // fields list for ORM Maping
    id: { primaryKey: true, autoIncrement: true },
    company: DataTypes.STRING,
    fixedAssetAccount: DataTypes.STRING,
    accumulatedDepreciationAccount: DataTypes.STRING,
    depreciationExpenseAccount: DataTypes.STRING,
    capitalWorkInProgressAccount: DataTypes.STRING,
  };

  static meta = {
    // field meta information for UI render
    fieldProperty: [
      {
        key: "company",
        label: "Company",
        type: "select",
        placeholder: "Input Company",
        options: "",
      },
      {
        key: "fixedAssetAccount",
        label: "Fixed Asset Account",
        type: "select",
        placeholder: "Input Fixed Asset Account",
        options: "",
      },
      {
        key: "accumulatedDepreciationAccount",
        label: "Accumulated Depreciation Account",
        type: "select",
        placeholder: "Input Accumulated Depreciation Account",
        options: "",
      },
      {
        key: "depreciationExpenseAccount",
        label: "Depreciation Expense Account",
        type: "select",
        placeholder: "Input Depreciation Expense Account",
        options: "",
      },
      {
        key: "capitalWorkInProgressAccount",
        label: "Capital Work In Progress Account",
        type: "select",
        placeholder: "Input Capital Work In Progress Account",
        options: "",
      },
    ],
  };
}
