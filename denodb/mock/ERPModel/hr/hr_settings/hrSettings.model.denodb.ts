// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: HrSetting
|--------------------------------------------------------------------------
|
| Model Class and Interface of hrSettings
|
*/
import {
  DataTypes,
  Model
} from "https://deno.land/x/denodb/mod.ts";


export class HrSetting extends Model { 
  static table = "hrSettings";
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

}
