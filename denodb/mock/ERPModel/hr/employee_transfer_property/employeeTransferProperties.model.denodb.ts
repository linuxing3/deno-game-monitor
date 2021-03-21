// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: EmployeeTransferProperty
|--------------------------------------------------------------------------
|
| Model Class and Interface of employeeTransferProperties
|
*/
import {
  DataTypes,
  Model
} from "https://deno.land/x/denodb/mod.ts";


export class EmployeeTransferProperty extends Model { 
  static table = "employeeTransferProperties";
  static timestamps = true;
  
  static fields = {
    // fields list for ORM Maping
    id: { primaryKey: true, autoIncrement: true },
    property: DataTypes.STRING,
    current: DataTypes.STRING,
    new: DataTypes.STRING,
    
  };

}
