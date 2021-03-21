// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: LeaveType
|--------------------------------------------------------------------------
|
| Model Class and Interface of leaveTypes
|
*/
import {
  DataTypes,
  Model
} from "https://deno.land/x/denodb/mod.ts";


export class LeaveType extends Model { 
  static table = "leaveTypes";
  static timestamps = true;
  
  static fields = {
    // fields list for ORM Maping
    id: { primaryKey: true, autoIncrement: true },
    leaveTypeName: DataTypes.STRING,
    maxLeavesAllowed: DataTypes.STRING,
    applicableAfterWorkingDays: DataTypes.STRING,
    maximumContinuousDaysApplicable: DataTypes.STRING,
    isCarryForward: DataTypes.STRING,
    isLeaveWithoutPay: DataTypes.STRING,
    isOptionalLeave: DataTypes.STRING,
    allowNegativeBalance: DataTypes.STRING,
    includeHolidaysWithinLeavesAsLeaves: DataTypes.STRING,
    isCompensatory: DataTypes.STRING,
    encashment: DataTypes.STRING,
    allowEncashment: DataTypes.STRING,
    encashmentThresholdDays: DataTypes.STRING,
    earningComponent: DataTypes.STRING,
    earnedLeave: DataTypes.STRING,
    isEarnedLeave: DataTypes.STRING,
    earnedLeaveFrequency: DataTypes.STRING,
    rounding: DataTypes.STRING,
    
  };

}
