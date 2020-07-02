// Copyright 2018-2020 Xing Wenju.
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: PaymentOrderReference
|--------------------------------------------------------------------------
|
| Model of paymentOrderReferences
|
*/
import {
  DataTypes,
  Model,
} from "https://deno.land/x/denodb/mod.ts";

export class PaymentOrderReference extends Model {
  static table = "paymentOrderReferences";
  static timestamps = true;

  static fields = {
    // fields list for ORM Maping
    id: { primaryKey: true, autoIncrement: true },
    type: DataTypes.STRING,
    name: DataTypes.STRING,
    amount: DataTypes.STRING,
    supplier: DataTypes.STRING,
    paymentRequest: DataTypes.STRING,
    modeOfPayment: DataTypes.STRING,
    bankAccountDetails: DataTypes.STRING,
    bankAccount: DataTypes.STRING,
    account: DataTypes.STRING,
    paymentReference: DataTypes.STRING,
  };

  static meta = {
    // field meta information for UI render
    fieldProperty: [
      {
        key: "type",
        label: "Type",
        type: "select",
        placeholder: "Input Type",
        options: "",
      },
      {
        key: "name",
        label: "Name",
        type: "select",
        placeholder: "Input Name",
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
        key: "supplier",
        label: "Supplier",
        type: "select",
        placeholder: "Input Supplier",
        options: "",
      },
      {
        key: "paymentRequest",
        label: "Payment Request",
        type: "select",
        placeholder: "Input Payment Request",
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
        key: "bankAccountDetails",
        label: "Bank Account Details",
        type: "input",
        placeholder: "Input Bank Account Details",
        options: "",
      },
      {
        key: "bankAccount",
        label: "Bank Account",
        type: "select",
        placeholder: "Input Bank Account",
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
        key: "account",
        label: "Account",
        type: "select",
        placeholder: "Input Account",
        options: "",
      },
      {
        key: "paymentReference",
        label: "Payment Reference",
        type: "input",
        placeholder: "Input Payment Reference",
        options: "",
      },
    ],
  };
}
