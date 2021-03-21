// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: HolidayList
|--------------------------------------------------------------------------
|
| Model Class and Interface of holidayLists
|
*/
import {
  DataTypes,
  Model
} from "https://deno.land/x/denodb/mod.ts";


export class HolidayList extends Model { 
  static table = "holidayLists";
  static timestamps = true;
  
  static fields = {
    // fields list for ORM Maping
    id: { primaryKey: true, autoIncrement: true },
    holidayListName: DataTypes.STRING,
    fromDate: DataTypes.STRING,
    toDate: DataTypes.STRING,
    totalHolidays: DataTypes.STRING,
    addWeeklyHolidays: DataTypes.STRING,
    weeklyOff: DataTypes.STRING,
    addToHolidays: DataTypes.STRING,
    holidays: DataTypes.STRING,
    clearTable: DataTypes.STRING,
    color: DataTypes.STRING,
    
  };

}
