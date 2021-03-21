// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: EmployeePropertyHistory
|--------------------------------------------------------------------------
|
| Model Class and Interface of employeePropertyHistories
|
*/
import {
  DataTypes,
  Model
} from "https://deno.land/x/denodb/mod.ts";


export class EmployeePropertyHistory extends Model { 
  static table = "employeePropertyHistories";
  static timestamps = true;
  
  static fields = {
    // fields list for ORM Maping
    id: { primaryKey: true, autoIncrement: true },
    property: DataTypes.STRING,
    current: DataTypes.STRING,
    new: DataTypes.STRING,
    fieldName: DataTypes.STRING,
    
  };

}
