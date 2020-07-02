// Copyright 2018-2020 Xing Wenju.
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: Timesheet
|--------------------------------------------------------------------------
|
| Model of timesheets
|
*/
import {
  DataTypes,
  Model,
} from "https://deno.land/x/denodb/mod.ts";

export class Timesheet extends Model {
  static table = "timesheets";
  static timestamps = true;

  static fields = {
    // fields list for ORM Maping
    id: { primaryKey: true, autoIncrement: true },
    title: DataTypes.STRING,
    series: DataTypes.STRING,
    company: DataTypes.STRING,
    salesInvoice: DataTypes.STRING,
    salarySlip: DataTypes.STRING,
    status: DataTypes.STRING,
    employeeDetail: DataTypes.STRING,
    employee: DataTypes.STRING,
    employeeName: DataTypes.STRING,
    department: DataTypes.STRING,
    user: DataTypes.STRING,
    startDate: DataTypes.STRING,
    endDate: DataTypes.STRING,
    timeSheets: DataTypes.STRING,
    totalWorkingHours: DataTypes.STRING,
    billingDetails: DataTypes.STRING,
    totalBillableHours: DataTypes.STRING,
    totalBilledHours: DataTypes.STRING,
    totalCostingAmount: DataTypes.STRING,
    totalBillableAmount: DataTypes.STRING,
    totalBilledAmount: DataTypes.STRING,
    amountBilled: DataTypes.STRING,
    note: DataTypes.STRING,
    amendedFrom: DataTypes.STRING,
  };

  static meta = {
    // field meta information for UI render
    fieldProperty: [
      {
        key: "title",
        label: "Title",
        type: "input",
        placeholder: "Input Title",
        options: "",
      },
      {
        key: "series",
        label: "Series",
        type: "select",
        placeholder: "Input Series",
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
        key: "salesInvoice",
        label: "Sales Invoice",
        type: "select",
        placeholder: "Input Sales Invoice",
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
        key: "salarySlip",
        label: "Salary Slip",
        type: "select",
        placeholder: "Input Salary Slip",
        options: "",
      },
      {
        key: "status",
        label: "Status",
        type: "select",
        placeholder: "Input Status",
        options:
          "[object Object],[object Object],[object Object],[object Object],[object Object]",
      },
      {
        key: "employeeDetail",
        label: "Employee Detail",
        type: "input",
        placeholder: "Input Employee Detail",
        options: "",
      },
      {
        key: "employee",
        label: "Employee",
        type: "select",
        placeholder: "Input Employee",
        options: "",
      },
      {
        key: "employeeName",
        label: "Employee Name",
        type: "input",
        placeholder: "Input Employee Name",
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
        key: "",
        label: "",
        type: "input",
        placeholder: "Input ",
        options: "",
      },
      {
        key: "user",
        label: "User",
        type: "select",
        placeholder: "Input User",
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
        key: "",
        label: "",
        type: "input",
        placeholder: "Input ",
        options: "",
      },
      {
        key: "timeSheets",
        label: "Time Sheets",
        type: "select",
        placeholder: "Input Time Sheets",
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
        key: "totalWorkingHours",
        label: "Total Working Hours",
        type: "input",
        placeholder: "Input Total Working Hours",
        options: "",
      },
      {
        key: "billingDetails",
        label: "Billing Details",
        type: "input",
        placeholder: "Input Billing Details",
        options: "",
      },
      {
        key: "totalBillableHours",
        label: "Total Billable Hours",
        type: "input",
        placeholder: "Input Total Billable Hours",
        options: "",
      },
      {
        key: "totalBilledHours",
        label: "Total Billed Hours",
        type: "input",
        placeholder: "Input Total Billed Hours",
        options: "",
      },
      {
        key: "totalCostingAmount",
        label: "Total Costing Amount",
        type: "input",
        placeholder: "Input Total Costing Amount",
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
        key: "totalBillableAmount",
        label: "Total Billable Amount",
        type: "input",
        placeholder: "Input Total Billable Amount",
        options: "",
      },
      {
        key: "totalBilledAmount",
        label: "Total Billed Amount",
        type: "input",
        placeholder: "Input Total Billed Amount",
        options: "",
      },
      {
        key: "amountBilled",
        label: "Amount Billed",
        type: "input",
        placeholder: "Input Amount Billed",
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
        key: "note",
        label: "Note",
        type: "input",
        placeholder: "Input Note",
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
