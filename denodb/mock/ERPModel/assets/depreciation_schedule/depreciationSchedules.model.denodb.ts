// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: DepreciationSchedule
|--------------------------------------------------------------------------
|
| Model Class and Interface of depreciationSchedules
|
*/
import {
  DataTypes,
  Model
} from "https://deno.land/x/denodb/mod.ts";


export class DepreciationSchedule extends Model { 
  static table = "depreciationSchedules";
  static timestamps = true;
  
  static fields = {
    // fields list for ORM Maping
    id: { primaryKey: true, autoIncrement: true },
    financeBook: DataTypes.STRING,
    scheduleDate: DataTypes.STRING,
    depreciationAmount: DataTypes.STRING,
    accumulatedDepreciationAmount: DataTypes.STRING,
    journalEntry: DataTypes.STRING,
    makeDepreciationEntry: DataTypes.STRING,
    financeBookId: DataTypes.STRING,
    depreciationMethod: DataTypes.STRING,
    
  };

}
