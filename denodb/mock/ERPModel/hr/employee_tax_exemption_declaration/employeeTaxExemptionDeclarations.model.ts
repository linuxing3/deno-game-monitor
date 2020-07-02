// Copyright 2018-2020 Xing Wenju.
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: EmployeeTaxExemptionDeclaration
|--------------------------------------------------------------------------
|
| Model of employeeTaxExemptionDeclarations
|
*/
import {
  DataTypes,
  Model,
} from "https://deno.land/x/denodb/mod.ts";

export class EmployeeTaxExemptionDeclaration extends Model {
  static table = "employeeTaxExemptionDeclarations";
  static timestamps = true;

  static fields = {
    // fields list for ORM Maping
    id: { primaryKey: true, autoIncrement: true },
    employee: DataTypes.STRING,
    company: DataTypes.STRING,
    payrollPeriod: DataTypes.STRING,
    totalExemptionAmount: DataTypes.STRING,
    department: DataTypes.STRING,
    amendedFrom: DataTypes.STRING,
    declarations: DataTypes.STRING,
  };

  static meta = {
    // field meta information for UI render
    fieldProperty: [
      {
        key: "employee",
        label: "Employee",
        type: "select",
        placeholder: "Input Employee",
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
        key: "payrollPeriod",
        label: "Payroll Period",
        type: "select",
        placeholder: "Input Payroll Period",
        options: "",
      },
      {
        key: "totalExemptionAmount",
        label: "Total Exemption Amount",
        type: "input",
        placeholder: "Input Total Exemption Amount",
        options: "",
      },
      {
        key: "department",
        label: "Department",
        type: "select",
        placeholder: "Input Department",
        options: "",
      },
      {
        key: "amendedFrom",
        label: "Amended From",
        type: "select",
        placeholder: "Input Amended From",
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
        key: "declarations",
        label: "Declarations",
        type: "select",
        placeholder: "Input Declarations",
        options: "",
      },
    ],
  };
}
