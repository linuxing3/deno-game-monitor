// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: DailyWorkSummaryGroup
|--------------------------------------------------------------------------
|
| Model Class and Interface of dailyWorkSummaryGroups
|
*/
import {
  DataTypes,
  Model
} from "https://deno.land/x/denodb/mod.ts";


export class DailyWorkSummaryGroup extends Model { 
  static table = "dailyWorkSummaryGroups";
  static timestamps = true;
  
  static fields = {
    // fields list for ORM Maping
    id: { primaryKey: true, autoIncrement: true },
    enabled: DataTypes.STRING,
    selectUsers: DataTypes.STRING,
    users: DataTypes.STRING,
    sendEmailsAt: DataTypes.STRING,
    holidayList: DataTypes.STRING,
    reminder: DataTypes.STRING,
    subject: DataTypes.STRING,
    message: DataTypes.STRING,
    
  };

}
