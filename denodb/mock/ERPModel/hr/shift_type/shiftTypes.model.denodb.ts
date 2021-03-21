// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: ShiftType
|--------------------------------------------------------------------------
|
| Model Class and Interface of shiftTypes
|
*/
import {
  DataTypes,
  Model
} from "https://deno.land/x/denodb/mod.ts";


export class ShiftType extends Model { 
  static table = "shiftTypes";
  static timestamps = true;
  
  static fields = {
    // fields list for ORM Maping
    id: { primaryKey: true, autoIncrement: true },
    startTime: DataTypes.STRING,
    endTime: DataTypes.STRING,
    holidayList: DataTypes.STRING,
    
  };

}
