// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: AttendanceRequest
|--------------------------------------------------------------------------
|
| Model Class and Interface of attendanceRequests
|
*/
import {
  DataTypes,
  Model
} from "https://deno.land/x/denodb/mod.ts";


export class AttendanceRequest extends Model { 
  static table = "attendanceRequests";
  static timestamps = true;
  
  static fields = {
    // fields list for ORM Maping
    id: { primaryKey: true, autoIncrement: true },
    employee: DataTypes.STRING,
    employeeName: DataTypes.STRING,
    department: DataTypes.STRING,
    company: DataTypes.STRING,
    fromDate: DataTypes.STRING,
    toDate: DataTypes.STRING,
    halfDay: DataTypes.STRING,
    halfDayDate: DataTypes.STRING,
    reason: DataTypes.STRING,
    explanation: DataTypes.STRING,
    amendedFrom: DataTypes.STRING,
    
  };

}
