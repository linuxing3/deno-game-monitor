// Copyright 2018-2020 Xing Wenju.
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: EmployeeBenefitApplicationDetail
|--------------------------------------------------------------------------
|
| Model of employeeBenefitApplicationDetails
|
*/
import {
  DataTypes,
  Model,
} from "https://deno.land/x/denodb/mod.ts";

export class EmployeeBenefitApplicationDetail extends Model {
  static table = "employeeBenefitApplicationDetails";
  static timestamps = true;

  static fields = {
    // fields list for ORM Maping
    id: { primaryKey: true, autoIncrement: true },
    earningComponent: DataTypes.STRING,
    payAgainstBenefitClaim: DataTypes.STRING,
    maxBenefitAmount: DataTypes.STRING,
    amount: DataTypes.STRING,
  };

  static meta = {
    // field meta information for UI render
    fieldProperty: [
      {
        key: "earningComponent",
        label: "Earning Component",
        type: "select",
        placeholder: "Input Earning Component",
        options: "",
      },
      {
        key: "payAgainstBenefitClaim",
        label: "Pay Against Benefit Claim",
        type: "input",
        placeholder: "Input Pay Against Benefit Claim",
        options: "",
      },
      {
        key: "maxBenefitAmount",
        label: "Max Benefit Amount",
        type: "input",
        placeholder: "Input Max Benefit Amount",
        options: "",
      },
      {
        key: "amount",
        label: "Amount",
        type: "input",
        placeholder: "Input Amount",
        options: "",
      },
    ],
  };
}
