// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: AssetMaintenanceTask
|--------------------------------------------------------------------------
|
| Model Class and Interface of assetMaintenanceTasks
|
*/
import {
  DataTypes,
  Model
} from "https://deno.land/x/denodb/mod.ts";


export class AssetMaintenanceTask extends Model { 
  static table = "assetMaintenanceTasks";
  static timestamps = true;
  
  static fields = {
    // fields list for ORM Maping
    id: { primaryKey: true, autoIncrement: true },
    maintenanceTask: DataTypes.STRING,
    maintenanceType: DataTypes.STRING,
    maintenanceStatus: DataTypes.STRING,
    startDate: DataTypes.STRING,
    periodicity: DataTypes.STRING,
    endDate: DataTypes.STRING,
    certificateRequired: DataTypes.STRING,
    assignTo: DataTypes.STRING,
    assignToName: DataTypes.STRING,
    nextDueDate: DataTypes.STRING,
    lastCompletionDate: DataTypes.STRING,
    description: DataTypes.STRING,
    
  };

}
