// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: LeaveAllocation
|--------------------------------------------------------------------------
|
| Model Class and Interface of leaveAllocations
|
*/
import {
  DataTypes,
  Model
} from "https://deno.land/x/denodb/mod.ts";


export class LeaveAllocation extends Model { 
  static table = "leaveAllocations";
  static timestamps = true;
  
  static fields = {
    // fields list for ORM Maping
    id: { primaryKey: true, autoIncrement: true },
    series: DataTypes.STRING,
    employee: DataTypes.STRING,
    employeeName: DataTypes.STRING,
    department: DataTypes.STRING,
    leaveType: DataTypes.STRING,
    fromDate: DataTypes.STRING,
    toDate: DataTypes.STRING,
    allocation: DataTypes.STRING,
    newLeavesAllocated: DataTypes.STRING,
    addUnusedLeavesFromPreviousAllocations: DataTypes.STRING,
    unusedLeaves: DataTypes.STRING,
    totalLeavesAllocated: DataTypes.STRING,
    totalLeavesEncashed: DataTypes.STRING,
    compensatoryLeaveRequest: DataTypes.STRING,
    leavePeriod: DataTypes.STRING,
    amendedFrom: DataTypes.STRING,
    notes: DataTypes.STRING,
    description: DataTypes.STRING,
    
  };

}
