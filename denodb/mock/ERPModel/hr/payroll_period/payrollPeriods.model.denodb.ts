// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: PayrollPeriod
|--------------------------------------------------------------------------
|
| Model Class and Interface of payrollPeriods
|
*/
import {
  DataTypes,
  Model
} from "https://deno.land/x/denodb/mod.ts";


export class PayrollPeriod extends Model { 
  static table = "payrollPeriods";
  static timestamps = true;
  
  static fields = {
    // fields list for ORM Maping
    id: { primaryKey: true, autoIncrement: true },
    company: DataTypes.STRING,
    startDate: DataTypes.STRING,
    endDate: DataTypes.STRING,
    payrollPeriods: DataTypes.STRING,
    taxableSalarySlabs: DataTypes.STRING,
    
  };

}
