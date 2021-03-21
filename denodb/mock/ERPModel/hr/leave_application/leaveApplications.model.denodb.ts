// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: LeaveApplication
|--------------------------------------------------------------------------
|
| Model Class and Interface of leaveApplications
|
*/
import {
  DataTypes,
  Model
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

}
