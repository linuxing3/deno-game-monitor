// Copyright 2018-2020 Xing Wenju.
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: ExpenseClaimAccount
|--------------------------------------------------------------------------
|
| Model of expenseClaimAccounts
|
*/
import {
  DataTypes,
  Model,
} from "https://deno.land/x/denodb/mod.ts";

export class ExpenseClaimAccount extends Model {
  static table = "expenseClaimAccounts";
  static timestamps = true;

  static fields = {
    // fields list for ORM Maping
    id: { primaryKey: true, autoIncrement: true },
    company: DataTypes.STRING,
    defaultAccount: DataTypes.STRING,
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
        key: "defaultAccount",
        label: "Default Account",
        type: "select",
        placeholder: "Input Default Account",
        options: "",
      },
    ],
  };
}
