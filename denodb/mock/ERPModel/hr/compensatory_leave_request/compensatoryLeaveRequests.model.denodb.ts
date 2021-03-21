// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: CompensatoryLeaveRequest
|--------------------------------------------------------------------------
|
| Model Class and Interface of compensatoryLeaveRequests
|
*/
import {
  DataTypes,
  Model
} from "https://deno.land/x/denodb/mod.ts";


export class CompensatoryLeaveRequest extends Model { 
  static table = "compensatoryLeaveRequests";
  static timestamps = true;
  
  static fields = {
    // fields list for ORM Maping
    id: { primaryKey: true, autoIncrement: true },
    employee: DataTypes.STRING,
    employeeName: DataTypes.STRING,
    department: DataTypes.STRING,
    leaveType: DataTypes.STRING,
    leaveAllocation: DataTypes.STRING,
    workedOnHoliday: DataTypes.STRING,
    workFromDate: DataTypes.STRING,
    workEndDate: DataTypes.STRING,
    halfDay: DataTypes.STRING,
    halfDayDate: DataTypes.STRING,
    reason: DataTypes.STRING,
    amendedFrom: DataTypes.STRING,
    
  };

}
