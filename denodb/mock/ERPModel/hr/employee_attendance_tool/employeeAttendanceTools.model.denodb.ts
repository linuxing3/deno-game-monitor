// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: EmployeeAttendanceTool
|--------------------------------------------------------------------------
|
| Model Class and Interface of employeeAttendanceTools
|
*/
import {
  DataTypes,
  Model
} from "https://deno.land/x/denodb/mod.ts";


export class EmployeeAttendanceTool extends Model { 
  static table = "employeeAttendanceTools";
  static timestamps = true;
  
  static fields = {
    // fields list for ORM Maping
    id: { primaryKey: true, autoIncrement: true },
    date: DataTypes.STRING,
    department: DataTypes.STRING,
    branch: DataTypes.STRING,
    company: DataTypes.STRING,
    unmarkedAttendance: DataTypes.STRING,
    employeesHtml: DataTypes.STRING,
    markedAttendance: DataTypes.STRING,
    markedAttendanceHtml: DataTypes.STRING,
    
  };

}
