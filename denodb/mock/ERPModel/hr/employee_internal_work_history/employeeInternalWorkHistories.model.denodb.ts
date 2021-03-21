// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: EmployeeInternalWorkHistory
|--------------------------------------------------------------------------
|
| Model Class and Interface of employeeInternalWorkHistories
|
*/
import {
  DataTypes,
  Model
} from "https://deno.land/x/denodb/mod.ts";


export class EmployeeInternalWorkHistory extends Model { 
  static table = "employeeInternalWorkHistories";
  static timestamps = true;
  
  static fields = {
    // fields list for ORM Maping
    id: { primaryKey: true, autoIncrement: true },
    branch: DataTypes.STRING,
    department: DataTypes.STRING,
    designation: DataTypes.STRING,
    fromDate: DataTypes.STRING,
    toDate: DataTypes.STRING,
    
  };

}
