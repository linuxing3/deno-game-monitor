// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: LeaveEncashment
|--------------------------------------------------------------------------
|
| Model Class and Interface of leaveEncashments
|
*/
import {
  DataTypes,
  Model
} from "https://deno.land/x/denodb/mod.ts";


export class LeaveEncashment extends Model { 
  static table = "leaveEncashments";
  static timestamps = true;
  
  static fields = {
    // fields list for ORM Maping
    id: { primaryKey: true, autoIncrement: true },
    leavePeriod: DataTypes.STRING,
    employee: DataTypes.STRING,
    employeeName: DataTypes.STRING,
    department: DataTypes.STRING,
    leaveType: DataTypes.STRING,
    leaveAllocation: DataTypes.STRING,
    leaveBalance: DataTypes.STRING,
    encashableDays: DataTypes.STRING,
    amendedFrom: DataTypes.STRING,
    payroll: DataTypes.STRING,
    encashmentAmount: DataTypes.STRING,
    encashmentDate: DataTypes.STRING,
    additionalSalary: DataTypes.STRING,
    
  };

}
