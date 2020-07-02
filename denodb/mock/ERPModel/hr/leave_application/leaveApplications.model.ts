// Copyright 2018-2020 Xing Wenju.
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: LeaveApplication
|--------------------------------------------------------------------------
|
| Model of leaveApplications
|
*/
import {
  DataTypes,
  Model,
} from "https://deno.land/x/denodb/mod.ts";

export class LeaveApplication extends Model {
  static table = "leaveApplications";
  static timestamps = true;

  static fields = {
    // fields list for ORM Maping
    id: { primaryKey: true, autoIncrement: true },
    series: DataTypes.STRING,
    employee: DataTypes.STRING,
    employeeName: DataTypes.STRING,
    leaveType: DataTypes.STRING,
    department: DataTypes.STRING,
    leaveBalanceBeforeApplication: DataTypes.STRING,
    fromDate: DataTypes.STRING,
    toDate: DataTypes.STRING,
    halfDay: DataTypes.STRING,
    halfDayDate: DataTypes.STRING,
    totalLeaveDays: DataTypes.STRING,
    reason: DataTypes.STRING,
    leaveApprover: DataTypes.STRING,
    leaveApproverName: DataTypes.STRING,
    status: DataTypes.STRING,
    salarySlip: DataTypes.STRING,
    postingDate: DataTypes.STRING,
    followViaEmail: DataTypes.STRING,
    color: DataTypes.STRING,
    company: DataTypes.STRING,
    letterHead: DataTypes.STRING,
    amendedFrom: DataTypes.STRING,
  };

  static meta = {
    // field meta information for UI render
    fieldProperty: [
      {
        key: "series",
        label: "Series",
        type: "select",
        placeholder: "Input Series",
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
        key: "",
        label: "",
        type: "input",
        placeholder: "Input ",
        options: "",
      },
      {
        key: "leaveType",
        label: "Leave Type",
        type: "select",
        placeholder: "Input Leave Type",
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
        key: "leaveBalanceBeforeApplication",
        label: "Leave Balance Before Application",
        type: "input",
        placeholder: "Input Leave Balance Before Application",
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
        key: "fromDate",
        label: "From Date",
        type: "input",
        placeholder: "Input From Date",
        options: "",
      },
      {
        key: "toDate",
        label: "To Date",
        type: "input",
        placeholder: "Input To Date",
        options: "",
      },
      {
        key: "halfDay",
        label: "Half Day",
        type: "input",
        placeholder: "Input Half Day",
        options: "",
      },
      {
        key: "halfDayDate",
        label: "Half Day Date",
        type: "input",
        placeholder: "Input Half Day Date",
        options: "",
      },
      {
        key: "totalLeaveDays",
        label: "Total Leave Days",
        type: "input",
        placeholder: "Input Total Leave Days",
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
        key: "reason",
        label: "Reason",
        type: "input",
        placeholder: "Input Reason",
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
        key: "leaveApprover",
        label: "Leave Approver",
        type: "select",
        placeholder: "Input Leave Approver",
        options: "",
      },
      {
        key: "leaveApproverName",
        label: "Leave Approver Name",
        type: "input",
        placeholder: "Input Leave Approver Name",
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
        key: "status",
        label: "Status",
        type: "select",
        placeholder: "Input Status",
        options: "[object Object],[object Object],[object Object]",
      },
      {
        key: "salarySlip",
        label: "Salary Slip",
        type: "select",
        placeholder: "Input Salary Slip",
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
        key: "postingDate",
        label: "Posting Date",
        type: "input",
        placeholder: "Input Posting Date",
        options: "",
      },
      {
        key: "followViaEmail",
        label: "Follow Via Email",
        type: "input",
        placeholder: "Input Follow Via Email",
        options: "",
      },
      {
        key: "color",
        label: "Color",
        type: "input",
        placeholder: "Input Color",
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
        key: "letterHead",
        label: "Letter Head",
        type: "select",
        placeholder: "Input Letter Head",
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
