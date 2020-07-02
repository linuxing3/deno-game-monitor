// Copyright 2018-2020 Xing Wenju.
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: BankStatementTransactionPaymentItem
|--------------------------------------------------------------------------
|
| Model of bankStatementTransactionPaymentItems
|
*/
import {
  DataTypes,
  Model,
} from "https://deno.land/x/denodb/mod.ts";

export class BankStatementTransactionPaymentItem extends Model {
  static table = "bankStatementTransactionPaymentItems";
  static timestamps = true;

  static fields = {
    // fields list for ORM Maping
    id: { primaryKey: true, autoIncrement: true },
    transactionDate: DataTypes.STRING,
    description: DataTypes.STRING,
    amount: DataTypes.STRING,
    partyType: DataTypes.STRING,
    party: DataTypes.STRING,
    referenceType: DataTypes.STRING,
    account: DataTypes.STRING,
    modeOfPayment: DataTypes.STRING,
    outstandingAmount: DataTypes.STRING,
    referenceName: DataTypes.STRING,
    paymentReference: DataTypes.STRING,
    invoices: DataTypes.STRING,
  };

  static meta = {
    // field meta information for UI render
    fieldProperty: [
      {
        key: "transactionDate",
        label: "Transaction Date",
        type: "input",
        placeholder: "Input Transaction Date",
        options: "",
      },
      {
        key: "description",
        label: "Description",
        type: "input",
        placeholder: "Input Description",
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
        key: "partyType",
        label: "Party Type",
        type: "select",
        placeholder: "Input Party Type",
        options: "[object Object],[object Object]",
      },
      {
        key: "party",
        label: "Party",
        type: "select",
        placeholder: "Input Party",
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
        key: "referenceType",
        label: "Reference Type",
        type: "select",
        placeholder: "Input Reference Type",
        options: "[object Object]",
      },
      {
        key: "account",
        label: "Account",
        type: "select",
        placeholder: "Input Account",
        options: "",
      },
      {
        key: "modeOfPayment",
        label: "Mode Of Payment",
        type: "select",
        placeholder: "Input Mode Of Payment",
        options: "",
      },
      {
        key: "outstandingAmount",
        label: "Outstanding Amount",
        type: "input",
        placeholder: "Input Outstanding Amount",
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
        key: "referenceName",
        label: "Reference Name",
        type: "select",
        placeholder: "Input Reference Name",
        options: "",
      },
      {
        key: "paymentReference",
        label: "Payment Reference",
        type: "input",
        placeholder: "Input Payment Reference",
        options: "",
      },
      {
        key: "invoices",
        label: "Invoices",
        type: "input",
        placeholder: "Input Invoices",
        options: "",
      },
    ],
  };
}
