// Copyright 2018-2020 Xing Wenju.
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: BankAccount
|--------------------------------------------------------------------------
|
| Model of bankAccounts
|
*/
import {
  DataTypes,
  Model,
} from "https://deno.land/x/denodb/mod.ts";

export class BankAccount extends Model {
  static table = "bankAccounts";
  static timestamps = true;

  static fields = {
    // fields list for ORM Maping
    id: { primaryKey: true, autoIncrement: true },
    accountName: DataTypes.STRING,
    account: DataTypes.STRING,
    bank: DataTypes.STRING,
    isCompanyAccount: DataTypes.STRING,
    company: DataTypes.STRING,
    isDefault: DataTypes.STRING,
    bankAccountNo: DataTypes.STRING,
    iban: DataTypes.STRING,
    branchCode: DataTypes.STRING,
    swiftNumber: DataTypes.STRING,
    partyType: DataTypes.STRING,
    party: DataTypes.STRING,
    addressAndContact: DataTypes.STRING,
    addressHtml: DataTypes.STRING,
    website: DataTypes.STRING,
    contactHtml: DataTypes.STRING,
  };

  static meta = {
    // field meta information for UI render
    fieldProperty: [
      {
        key: "accountName",
        label: "Account Name",
        type: "input",
        placeholder: "Input Account Name",
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
        key: "bank",
        label: "Bank",
        type: "select",
        placeholder: "Input Bank",
        options: "",
      },
      {
        key: "isCompanyAccount",
        label: "Is Company Account",
        type: "input",
        placeholder: "Input Is Company Account",
        options: "",
      },
      {
        key: "company",
        label: "Company",
        type: "select",
        placeholder: "Input Company",
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
        key: "isDefault",
        label: "Is Default",
        type: "input",
        placeholder: "Input Is Default",
        options: "",
      },
      {
        key: "bankAccountNo",
        label: "Bank Account No",
        type: "input",
        placeholder: "Input Bank Account No",
        options: "",
      },
      {
        key: "iban",
        label: "Iban",
        type: "input",
        placeholder: "Input Iban",
        options: "",
      },
      {
        key: "branchCode",
        label: "Branch Code",
        type: "input",
        placeholder: "Input Branch Code",
        options: "",
      },
      {
        key: "swiftNumber",
        label: "Swift Number",
        type: "input",
        placeholder: "Input Swift Number",
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
        key: "party",
        label: "Party",
        type: "select",
        placeholder: "Input Party",
        options: "",
      },
      {
        key: "addressAndContact",
        label: "Address And Contact",
        type: "select",
        placeholder: "Input Address And Contact",
        options: "",
      },
      {
        key: "addressHtml",
        label: "Address Html",
        type: "input",
        placeholder: "Input Address Html",
        options: "",
      },
      {
        key: "website",
        label: "Website",
        type: "input",
        placeholder: "Input Website",
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
        key: "contactHtml",
        label: "Contact Html",
        type: "input",
        placeholder: "Input Contact Html",
        options: "",
      },
    ],
  };
}
