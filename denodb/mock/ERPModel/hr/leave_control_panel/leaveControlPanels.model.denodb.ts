// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: LeaveControlPanel
|--------------------------------------------------------------------------
|
| Model Class and Interface of leaveControlPanels
|
*/
import {
  DataTypes,
  Model
} from "https://deno.land/x/denodb/mod.ts";


export class LeaveControlPanel extends Model { 
  static table = "leaveControlPanels";
  static timestamps = true;
  
  static fields = {
    // fields list for ORM Maping
    id: { primaryKey: true, autoIncrement: true },
    company: DataTypes.STRING,
    employmentType: DataTypes.STRING,
    branch: DataTypes.STRING,
    department: DataTypes.STRING,
    designation: DataTypes.STRING,
    employeeGrade: DataTypes.STRING,
    employee: DataTypes.STRING,
    fromDate: DataTypes.STRING,
    toDate: DataTypes.STRING,
    leavePolicy: DataTypes.STRING,
    leaveType: DataTypes.STRING,
    carryForward: DataTypes.STRING,
    newLeavesAllocatedInDays: DataTypes.STRING,
    allocate: DataTypes.STRING,
    
  };

}
