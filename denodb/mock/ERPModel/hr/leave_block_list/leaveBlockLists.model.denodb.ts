// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: LeaveBlockList
|--------------------------------------------------------------------------
|
| Model Class and Interface of leaveBlockLists
|
*/
import {
  DataTypes,
  Model
} from "https://deno.land/x/denodb/mod.ts";


export class LeaveBlockList extends Model { 
  static table = "leaveBlockLists";
  static timestamps = true;
  
  static fields = {
    // fields list for ORM Maping
    id: { primaryKey: true, autoIncrement: true },
    leaveBlockListName: DataTypes.STRING,
    company: DataTypes.STRING,
    appliesToCompany: DataTypes.STRING,
    blockDays: DataTypes.STRING,
    leaveBlockListDates: DataTypes.STRING,
    allowUsers: DataTypes.STRING,
    leaveBlockListAllowed: DataTypes.STRING,
    
  };

}
