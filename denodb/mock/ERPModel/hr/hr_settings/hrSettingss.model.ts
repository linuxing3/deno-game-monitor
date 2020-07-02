// Copyright 2018-2020 Xing Wenju.
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: HrSettings
|--------------------------------------------------------------------------
|
| Model of hrSettingss
|
*/
import {
  DataTypes,
  Model,
} from "https://deno.land/x/denodb/mod.ts";

export class HrSettings extends Model {
  static table = "hrSettingss";
  static timestamps = true;

  static fields = {
    // fields list for ORM Maping
    id: { primaryKey: true, autoIncrement: true },
    employeeSettings: DataTypes.STRING,
    retirementAge: DataTypes.STRING,
    employeeRecordsToBeCreatedBy: DataTypes.STRING,
    leaveApprovalNotificationTemplate: DataTypes.STRING,
    leaveStatusNotificationTemplate: DataTypes.STRING,
    stopBirthdayReminders: DataTypes.STRING,
    maintainBillingHoursAndWorkingHoursSameOnTimesheet: DataTypes.STRING,
    leaveApproverMandatoryInLeaveApplication: DataTypes.STRING,
    expenseApproverMandatoryInExpenseClaim: DataTypes.STRING,
    payrollSettings: DataTypes.STRING,
    includeHolidaysInTotalNoOfWorkingDays: DataTypes.STRING,
    emailSalarySlipToEmployee: DataTypes.STRING,
    maxWorkingHoursAgainstTimesheet: DataTypes.STRING,
    leaveSettings: DataTypes.STRING,
    showLeavesOfAllDepartmentMembersInCalendar: DataTypes.STRING,
  };

  static meta = {
    // field meta information for UI render
    fieldProperty: [
      {
        key: "employeeSettings",
        label: "Employee Settings",
        type: "input",
        placeholder: "Input Employee Settings",
        options: "",
      },
      {
        key: "retirementAge",
        label: "Retirement Age",
        type: "input",
        placeholder: "Input Retirement Age",
        options: "",
      },
      {
        key: "employeeRecordsToBeCreatedBy",
        label: "Employee Records To Be Created By",
        type: "select",
        placeholder: "Input Employee Records To Be Created By",
        options: "[object Object],[object Object]",
      },
      {
        key: "leaveApprovalNotificationTemplate",
        label: "Leave Approval Notification Template",
        type: "select",
        placeholder: "Input Leave Approval Notification Template",
        options: "",
      },
      {
        key: "leaveStatusNotificationTemplate",
        label: "Leave Status Notification Template",
        type: "select",
        placeholder: "Input Leave Status Notification Template",
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
        key: "stopBirthdayReminders",
        label: "Stop Birthday Reminders",
        type: "input",
        placeholder: "Input Stop Birthday Reminders",
        options: "",
      },
      {
        key: "maintainBillingHoursAndWorkingHoursSameOnTimesheet",
        label: "Maintain Billing Hours And Working Hours Same On Timesheet",
        type: "input",
        placeholder:
          "Input Maintain Billing Hours And Working Hours Same On Timesheet",
        options: "",
      },
      {
        key: "leaveApproverMandatoryInLeaveApplication",
        label: "Leave Approver Mandatory In Leave Application",
        type: "input",
        placeholder: "Input Leave Approver Mandatory In Leave Application",
        options: "",
      },
      {
        key: "expenseApproverMandatoryInExpenseClaim",
        label: "Expense Approver Mandatory In Expense Claim",
        type: "input",
        placeholder: "Input Expense Approver Mandatory In Expense Claim",
        options: "",
      },
      {
        key: "payrollSettings",
        label: "Payroll Settings",
        type: "input",
        placeholder: "Input Payroll Settings",
        options: "",
      },
      {
        key: "includeHolidaysInTotalNoOfWorkingDays",
        label: "Include Holidays In Total No Of Working Days",
        type: "input",
        placeholder: "Input Include Holidays In Total No Of Working Days",
        options: "",
      },
      {
        key: "emailSalarySlipToEmployee",
        label: "Email Salary Slip To Employee",
        type: "input",
        placeholder: "Input Email Salary Slip To Employee",
        options: "",
      },
      {
        key: "maxWorkingHoursAgainstTimesheet",
        label: "Max Working Hours Against Timesheet",
        type: "input",
        placeholder: "Input Max Working Hours Against Timesheet",
        options: "",
      },
      {
        key: "leaveSettings",
        label: "Leave Settings",
        type: "input",
        placeholder: "Input Leave Settings",
        options: "",
      },
      {
        key: "showLeavesOfAllDepartmentMembersInCalendar",
        label: "Show Leaves Of All Department Members In Calendar",
        type: "input",
        placeholder: "Input Show Leaves Of All Department Members In Calendar",
        options: "",
      },
    ],
  };
}
