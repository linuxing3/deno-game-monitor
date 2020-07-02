// Copyright 2018-2020 Xing Wenju.
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: PayrollPeriod
|--------------------------------------------------------------------------
|
| Model of payrollPeriods
|
*/
import {
  DataTypes,
  Model,
} from "https://deno.land/x/denodb/mod.ts";

export class PayrollPeriod extends Model {
  static table = "payrollPeriods";
  static timestamps = true;

  static fields = {
    // fields list for ORM Maping
    id: { primaryKey: true, autoIncrement: true },
    company: DataTypes.STRING,
    startDate: DataTypes.STRING,
    endDate: DataTypes.STRING,
    payrollPeriods: DataTypes.STRING,
    payrollPeriods: DataTypes.STRING,
    taxableSalarySlabs: DataTypes.STRING,
    taxableSalarySlabs: DataTypes.STRING,
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
        key: "",
        label: "",
        type: "input",
        placeholder: "Input ",
        options: "",
      },
      {
        key: "startDate",
        label: "Start Date",
        type: "input",
        placeholder: "Input Start Date",
        options: "",
      },
      {
        key: "endDate",
        label: "End Date",
        type: "input",
        placeholder: "Input End Date",
        options: "",
      },
      {
        key: "payrollPeriods",
        label: "Payroll Periods",
        type: "input",
        placeholder: "Input Payroll Periods",
        options: "",
      },
      {
        key: "payrollPeriods",
        label: "Payroll Periods",
        type: "select",
        placeholder: "Input Payroll Periods",
        options: "",
      },
      {
        key: "taxableSalarySlabs",
        label: "Taxable Salary Slabs",
        type: "input",
        placeholder: "Input Taxable Salary Slabs",
        options: "",
      },
      {
        key: "taxableSalarySlabs",
        label: "Taxable Salary Slabs",
        type: "select",
        placeholder: "Input Taxable Salary Slabs",
        options: "",
      },
    ],
  };
}
