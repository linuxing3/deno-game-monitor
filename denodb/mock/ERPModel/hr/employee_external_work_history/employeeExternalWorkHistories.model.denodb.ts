// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: EmployeeExternalWorkHistory
|--------------------------------------------------------------------------
|
| Model Class and Interface of employeeExternalWorkHistories
|
*/
import {
  DataTypes,
  Model
} from "https://deno.land/x/denodb/mod.ts";


export class EmployeeExternalWorkHistory extends Model { 
  static table = "employeeExternalWorkHistories";
  static timestamps = true;
  
  static fields = {
    // fields list for ORM Maping
    id: { primaryKey: true, autoIncrement: true },
    company: DataTypes.STRING,
    designation: DataTypes.STRING,
    salary: DataTypes.STRING,
    address: DataTypes.STRING,
    contact: DataTypes.STRING,
    totalExperience: DataTypes.STRING,
    
  };

}
