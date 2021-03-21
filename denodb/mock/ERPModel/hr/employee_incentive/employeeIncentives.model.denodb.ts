// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: EmployeeIncentive
|--------------------------------------------------------------------------
|
| Model Class and Interface of employeeIncentives
|
*/
import {
  DataTypes,
  Model
} from "https://deno.land/x/denodb/mod.ts";


export class EmployeeIncentive extends Model { 
  static table = "employeeIncentives";
  static timestamps = true;
  
  static fields = {
    // fields list for ORM Maping
    id: { primaryKey: true, autoIncrement: true },
    employee: DataTypes.STRING,
    incentiveAmount: DataTypes.STRING,
    payrollDate: DataTypes.STRING,
    amendedFrom: DataTypes.STRING,
    employeeName: DataTypes.STRING,
    department: DataTypes.STRING,
    
  };

}
