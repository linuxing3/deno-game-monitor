// Copyright 2018-2020 Xing Wenju.
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: ShareTransfer
|--------------------------------------------------------------------------
|
| Model of shareTransfers
|
*/
import {
  DataTypes,
  Model,
} from "https://deno.land/x/denodb/mod.ts";

export class ShareTransfer extends Model {
  static table = "shareTransfers";
  static timestamps = true;

  static fields = {
    // fields list for ORM Maping
    id: { primaryKey: true, autoIncrement: true },
    transferType: DataTypes.STRING,
    date: DataTypes.STRING,
    fromShareholder: DataTypes.STRING,
    fromFolioNo: DataTypes.STRING,
    equityLiabilityAccount: DataTypes.STRING,
    assetAccount: DataTypes.STRING,
    toShareholder: DataTypes.STRING,
    toFolioNo: DataTypes.STRING,
    shareType: DataTypes.STRING,
    fromNo: DataTypes.STRING,
    rate: DataTypes.STRING,
    noOfShares: DataTypes.STRING,
    toNo: DataTypes.STRING,
    amount: DataTypes.STRING,
    company: DataTypes.STRING,
    remarks: DataTypes.STRING,
    amendedFrom: DataTypes.STRING,
  };

  static meta = {
    // field meta information for UI render
    fieldProperty: [
      {
        key: "transferType",
        label: "Transfer Type",
        type: "select",
        placeholder: "Input Transfer Type",
        options: "[object Object],[object Object],[object Object]",
      },
      {
        key: "",
        label: "",
        type: "input",
        placeholder: "Input ",
        options: "",
      },
      {
        key: "date",
        label: "Date",
        type: "input",
        placeholder: "Input Date",
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
        key: "fromShareholder",
        label: "From Shareholder",
        type: "select",
        placeholder: "Input From Shareholder",
        options: "",
      },
      {
        key: "fromFolioNo",
        label: "From Folio No",
        type: "input",
        placeholder: "Input From Folio No",
        options: "",
      },
      {
        key: "equityLiabilityAccount",
        label: "Equity Liability Account",
        type: "select",
        placeholder: "Input Equity Liability Account",
        options: "",
      },
      {
        key: "assetAccount",
        label: "Asset Account",
        type: "select",
        placeholder: "Input Asset Account",
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
        key: "toShareholder",
        label: "To Shareholder",
        type: "select",
        placeholder: "Input To Shareholder",
        options: "",
      },
      {
        key: "toFolioNo",
        label: "To Folio No",
        type: "input",
        placeholder: "Input To Folio No",
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
        key: "shareType",
        label: "Share Type",
        type: "select",
        placeholder: "Input Share Type",
        options: "",
      },
      {
        key: "fromNo",
        label: "From No",
        type: "input",
        placeholder: "Input From No",
        options: "",
      },
      {
        key: "rate",
        label: "Rate",
        type: "input",
        placeholder: "Input Rate",
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
        key: "noOfShares",
        label: "No Of Shares",
        type: "input",
        placeholder: "Input No Of Shares",
        options: "",
      },
      {
        key: "toNo",
        label: "To No",
        type: "input",
        placeholder: "Input To No",
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
        key: "remarks",
        label: "Remarks",
        type: "input",
        placeholder: "Input Remarks",
        options: "",
      },
      {
        key: "amendedFrom",
        label: "Amended From",
        type: "select",
        placeholder: "Input Amended From",
        options: "",
      },
    ],
  };
}
