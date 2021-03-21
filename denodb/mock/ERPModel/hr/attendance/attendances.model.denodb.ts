// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: Attendance
|--------------------------------------------------------------------------
|
| Model Class and Interface of attendances
|
*/
import {
  DataTypes,
  Model
} from "https://deno.land/x/denodb/mod.ts";


export class Attendance extends Model { 
  static table = "attendances";
  static timestamps = true;
  
  static fields = {
    // fields list for ORM Maping
    id: { primaryKey: true, autoIncrement: true },
    series: DataTypes.STRING,
    employee: DataTypes.STRING,
    employeeName: DataTypes.STRING,
    status: DataTypes.STRING,
    leaveType: DataTypes.STRING,
    attendanceDate: DataTypes.STRING,
    company: DataTypes.STRING,
    department: DataTypes.STRING,
    attendanceRequest: DataTypes.STRING,
    amendedFrom: DataTypes.STRING,
    
  };

}
