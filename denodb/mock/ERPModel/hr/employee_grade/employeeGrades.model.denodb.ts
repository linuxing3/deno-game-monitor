// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: EmployeeGrade
|--------------------------------------------------------------------------
|
| Model Class and Interface of employeeGrades
|
*/
import {
  DataTypes,
  Model
} from "https://deno.land/x/denodb/mod.ts";


export class EmployeeGrade extends Model { 
  static table = "employeeGrades";
  static timestamps = true;
  
  static fields = {
    // fields list for ORM Maping
    id: { primaryKey: true, autoIncrement: true },
    defaultLeavePolicy: DataTypes.STRING,
    defaultSalaryStructure: DataTypes.STRING,
    
  };

}
