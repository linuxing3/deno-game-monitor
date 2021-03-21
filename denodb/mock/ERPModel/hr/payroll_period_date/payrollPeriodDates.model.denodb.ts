// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: PayrollPeriodDate
|--------------------------------------------------------------------------
|
| Model Class and Interface of payrollPeriodDates
|
*/
import {
  DataTypes,
  Model
} from "https://deno.land/x/denodb/mod.ts";


export class PayrollPeriodDate extends Model { 
  static table = "payrollPeriodDates";
  static timestamps = true;
  
  static fields = {
    // fields list for ORM Maping
    id: { primaryKey: true, autoIncrement: true },
    startDate: DataTypes.STRING,
    endDate: DataTypes.STRING,
    
  };

}
