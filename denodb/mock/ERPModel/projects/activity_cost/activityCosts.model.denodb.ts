// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: ActivityCost
|--------------------------------------------------------------------------
|
| Model Class and Interface of activityCosts
|
*/
import {
  DataTypes,
  Model
} from "https://deno.land/x/denodb/mod.ts";


export class ActivityCost extends Model { 
  static table = "activityCosts";
  static timestamps = true;
  
  static fields = {
    // fields list for ORM Maping
    id: { primaryKey: true, autoIncrement: true },
    activityType: DataTypes.STRING,
    employee: DataTypes.STRING,
    employeeName: DataTypes.STRING,
    department: DataTypes.STRING,
    billingRate: DataTypes.STRING,
    costingRate: DataTypes.STRING,
    title: DataTypes.STRING,
    
  };

}
