// Copyright 2018-2020 Xing Wenju.
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: BankReconciliationDetail
|--------------------------------------------------------------------------
|
| Model of bankReconciliationDetails
|
*/
import {
  DataTypes,
  Model,
} from "https://deno.land/x/denodb/mod.ts";

export class BankReconciliationDetail extends Model {
  static table = "bankReconciliationDetails";
  static timestamps = true;

  static fields = {
    // fields list for ORM Maping
    id: { primaryKey: true, autoIncrement: true },
    paymentDocument: DataTypes.STRING,
    paymentEntry: DataTypes.STRING,
    againstAccount: DataTypes.STRING,
    amount: DataTypes.STRING,
    postingDate: DataTypes.STRING,
    chequeNumber: DataTypes.STRING,
    chequeDate: DataTypes.STRING,
    clearanceDate: DataTypes.STRING,
  };

  static meta = {
    // field meta information for UI render
    fieldProperty: [
      {
        key: "paymentDocument",
        label: "Payment Document",
        type: "select",
        placeholder: "Input Payment Document",
        options: "",
      },
      {
        key: "paymentEntry",
        label: "Payment Entry",
        type: "select",
        placeholder: "Input Payment Entry",
        options: "",
      },
      {
        key: "againstAccount",
        label: "Against Account",
        type: "input",
        placeholder: "Input Against Account",
        options: "",
      },
      {
        key: "amount",
        label: "Amount",
        type: "input",
        placeholder: "Input Amount",
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
        key: "postingDate",
        label: "Posting Date",
        type: "input",
        placeholder: "Input Posting Date",
        options: "",
      },
      {
        key: "chequeNumber",
        label: "Cheque Number",
        type: "input",
        placeholder: "Input Cheque Number",
        options: "",
      },
      {
        key: "chequeDate",
        label: "Cheque Date",
        type: "input",
        placeholder: "Input Cheque Date",
        options: "",
      },
      {
        key: "clearanceDate",
        label: "Clearance Date",
        type: "input",
        placeholder: "Input Clearance Date",
        options: "",
      },
    ],
  };
}
