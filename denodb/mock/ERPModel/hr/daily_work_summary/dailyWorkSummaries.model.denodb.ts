// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: DailyWorkSummary
|--------------------------------------------------------------------------
|
| Model Class and Interface of dailyWorkSummaries
|
*/
import {
  DataTypes,
  Model
} from "https://deno.land/x/denodb/mod.ts";


export class DailyWorkSummary extends Model { 
  static table = "dailyWorkSummaries";
  static timestamps = true;
  
  static fields = {
    // fields list for ORM Maping
    id: { primaryKey: true, autoIncrement: true },
    dailyWorkSummaryGroup: DataTypes.STRING,
    status: DataTypes.STRING,
    emailSentTo: DataTypes.STRING,
    
  };

}
