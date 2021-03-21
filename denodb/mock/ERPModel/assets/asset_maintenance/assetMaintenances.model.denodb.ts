// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: AssetMaintenance
|--------------------------------------------------------------------------
|
| Model Class and Interface of assetMaintenances
|
*/
import {
  DataTypes,
  Model
} from "https://deno.land/x/denodb/mod.ts";


export class AssetMaintenance extends Model { 
  static table = "assetMaintenances";
  static timestamps = true;
  
  static fields = {
    // fields list for ORM Maping
    id: { primaryKey: true, autoIncrement: true },
    assetName: DataTypes.STRING,
    assetCategory: DataTypes.STRING,
    itemCode: DataTypes.STRING,
    itemName: DataTypes.STRING,
    company: DataTypes.STRING,
    selectSerialNo: DataTypes.STRING,
    serialNo: DataTypes.STRING,
    maintenanceTeam: DataTypes.STRING,
    maintenanceManager: DataTypes.STRING,
    maintenanceManagerName: DataTypes.STRING,
    tasks: DataTypes.STRING,
    maintenanceTasks: DataTypes.STRING,
    
  };

}
