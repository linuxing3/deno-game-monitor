// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: LeaveBlockListDate
|--------------------------------------------------------------------------
|
| Model Class and Interface of leaveBlockListDates
|
*/
import {
  DataTypes,
  Model
} from "https://deno.land/x/denodb/mod.ts";


export class LeaveBlockListDate extends Model { 
  static table = "leaveBlockListDates";
  static timestamps = true;
  
  static fields = {
    // fields list for ORM Maping
    id: { primaryKey: true, autoIncrement: true },
    blockDate: DataTypes.STRING,
    reason: DataTypes.STRING,
    
  };

}
