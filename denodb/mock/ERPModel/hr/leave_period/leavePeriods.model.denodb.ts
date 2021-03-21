// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: LeavePeriod
|--------------------------------------------------------------------------
|
| Model Class and Interface of leavePeriods
|
*/
import {
  DataTypes,
  Model
} from "https://deno.land/x/denodb/mod.ts";


export class LeavePeriod extends Model { 
  static table = "leavePeriods";
  static timestamps = true;
  
  static fields = {
    // fields list for ORM Maping
    id: { primaryKey: true, autoIncrement: true },
    fromDate: DataTypes.STRING,
    toDate: DataTypes.STRING,
    company: DataTypes.STRING,
    isActive: DataTypes.STRING,
    holidayListForOptionalLeave: DataTypes.STRING,
    
  };

}
