// Copyright 2018-2020 Xing Wenju.
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: SalaryStructure
|--------------------------------------------------------------------------
|
| Model of salaryStructures
|
*/
import {
  DataTypes,
  Model,
} from "https://deno.land/x/denodb/mod.ts";

export class SalaryStructure extends Model {
  static table = "salaryStructures";
  static timestamps = true;

  static fields = {
    // fields list for ORM Maping
    id: { primaryKey: true, autoIncrement: true },
    company: DataTypes.STRING,
    letterHead: DataTypes.STRING,
    isActive: DataTypes.STRING,
    payrollFrequency: DataTypes.STRING,
    isDefault: DataTypes.STRING,
    salarySlipBasedOnTimesheet: DataTypes.STRING,
    salaryComponent: DataTypes.STRING,
    hourRate: DataTypes.STRING,
    leaveEncashmentAmountPerDay: DataTypes.STRING,
    maxBenefitsAmount: DataTypes.STRING,
    earning: DataTypes.STRING,
    earnings: DataTypes.STRING,
    deduction: DataTypes.STRING,
    deductions: DataTypes.STRING,
    totalEarning: DataTypes.STRING,
    totalDeduction: DataTypes.STRING,
    netPay: DataTypes.STRING,
    account: DataTypes.STRING,
    modeOfPayment: DataTypes.STRING,
    paymentAccount: DataTypes.STRING,
    amendedFrom: DataTypes.STRING,
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
        key: "letterHead",
        label: "Letter Head",
        type: "select",
        placeholder: "Input Letter Head",
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
        key: "isActive",
        label: "Is Active",
        type: "select",
        placeholder: "Input Is Active",
        options: "[object Object],[object Object]",
      },
      {
        key: "payrollFrequency",
        label: "Payroll Frequency",
        type: "select",
        placeholder: "Input Payroll Frequency",
        options:
          "[object Object],[object Object],[object Object],[object Object],[object Object]",
      },
      {
        key: "isDefault",
        label: "Is Default",
        type: "select",
        placeholder: "Input Is Default",
        options: "[object Object]",
      },
      {
        key: "",
        label: "",
        type: "input",
        placeholder: "Input ",
        options: "",
      },
      {
        key: "salarySlipBasedOnTimesheet",
        label: "Salary Slip Based On Timesheet",
        type: "input",
        placeholder: "Input Salary Slip Based On Timesheet",
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
        key: "salaryComponent",
        label: "Salary Component",
        type: "select",
        placeholder: "Input Salary Component",
        options: "",
      },
      {
        key: "hourRate",
        label: "Hour Rate",
        type: "select",
        placeholder: "Input Hour Rate",
        options: "",
      },
      {
        key: "leaveEncashmentAmountPerDay",
        label: "Leave Encashment Amount Per Day",
        type: "input",
        placeholder: "Input Leave Encashment Amount Per Day",
        options: "",
      },
      {
        key: "maxBenefitsAmount",
        label: "Max Benefits Amount",
        type: "input",
        placeholder: "Input Max Benefits Amount",
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
        key: "earning",
        label: "Earning",
        type: "input",
        placeholder: "Input Earning",
        options: "",
      },
      {
        key: "earnings",
        label: "Earnings",
        type: "select",
        placeholder: "Input Earnings",
        options: "",
      },
      {
        key: "deduction",
        label: "Deduction",
        type: "input",
        placeholder: "Input Deduction",
        options: "",
      },
      {
        key: "deductions",
        label: "Deductions",
        type: "select",
        placeholder: "Input Deductions",
        options: "",
      },
      {
        key: "",
        label: "",
        type: "select",
        placeholder: "Input ",
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
        key: "totalEarning",
        label: "Total Earning",
        type: "select",
        placeholder: "Input Total Earning",
        options: "",
      },
      {
        key: "totalDeduction",
        label: "Total Deduction",
        type: "select",
        placeholder: "Input Total Deduction",
        options: "",
      },
      {
        key: "netPay",
        label: "Net Pay",
        type: "select",
        placeholder: "Input Net Pay",
        options: "",
      },
      {
        key: "account",
        label: "Account",
        type: "input",
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
        key: "",
        label: "",
        type: "input",
        placeholder: "Input ",
        options: "",
      },
      {
        key: "paymentAccount",
        label: "Payment Account",
        type: "select",
        placeholder: "Input Payment Account",
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
