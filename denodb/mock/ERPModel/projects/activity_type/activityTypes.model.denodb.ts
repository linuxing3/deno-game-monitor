// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: ActivityType
|--------------------------------------------------------------------------
|
| Model Class and Interface of activityTypes
|
*/
import {
  DataTypes,
  Model
} from "https://deno.land/x/denodb/mod.ts";


export class ActivityType extends Model { 
  static table = "activityTypes";
  static timestamps = true;
  
  static fields = {
    // fields list for ORM Maping
    id: { primaryKey: true, autoIncrement: true },
    activityType: DataTypes.STRING,
    defaultCostingRate: DataTypes.STRING,
    defaultBillingRate: DataTypes.STRING,
    disabled: DataTypes.STRING,
    
  };

}
