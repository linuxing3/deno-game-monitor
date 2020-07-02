// Copyright 2018-2020 Xing Wenju.
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: LoyaltyPointEntry
|--------------------------------------------------------------------------
|
| Model of loyaltyPointEntrys
|
*/
import {
  DataTypes,
  Model,
} from "https://deno.land/x/denodb/mod.ts";

export class LoyaltyPointEntry extends Model {
  static table = "loyaltyPointEntrys";
  static timestamps = true;

  static fields = {
    // fields list for ORM Maping
    id: { primaryKey: true, autoIncrement: true },
    loyaltyProgram: DataTypes.STRING,
    loyaltyProgramTier: DataTypes.STRING,
    customer: DataTypes.STRING,
    salesInvoice: DataTypes.STRING,
    redeemAgainst: DataTypes.STRING,
    loyaltyPoints: DataTypes.STRING,
    purchaseAmount: DataTypes.STRING,
    expiryDate: DataTypes.STRING,
    postingDate: DataTypes.STRING,
    company: DataTypes.STRING,
  };

  static meta = {
    // field meta information for UI render
    fieldProperty: [
      {
        key: "loyaltyProgram",
        label: "Loyalty Program",
        type: "select",
        placeholder: "Input Loyalty Program",
        options: "",
      },
      {
        key: "loyaltyProgramTier",
        label: "Loyalty Program Tier",
        type: "input",
        placeholder: "Input Loyalty Program Tier",
        options: "",
      },
      {
        key: "customer",
        label: "Customer",
        type: "select",
        placeholder: "Input Customer",
        options: "",
      },
      {
        key: "salesInvoice",
        label: "Sales Invoice",
        type: "select",
        placeholder: "Input Sales Invoice",
        options: "",
      },
      {
        key: "redeemAgainst",
        label: "Redeem Against",
        type: "select",
        placeholder: "Input Redeem Against",
        options: "",
      },
      {
        key: "loyaltyPoints",
        label: "Loyalty Points",
        type: "input",
        placeholder: "Input Loyalty Points",
        options: "",
      },
      {
        key: "purchaseAmount",
        label: "Purchase Amount",
        type: "input",
        placeholder: "Input Purchase Amount",
        options: "",
      },
      {
        key: "expiryDate",
        label: "Expiry Date",
        type: "input",
        placeholder: "Input Expiry Date",
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
        key: "company",
        label: "Company",
        type: "select",
        placeholder: "Input Company",
        options: "",
      },
    ],
  };
}
