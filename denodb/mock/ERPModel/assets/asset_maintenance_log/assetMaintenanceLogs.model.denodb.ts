// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: AssetMaintenanceLog
|--------------------------------------------------------------------------
|
| Model Class and Interface of assetMaintenanceLogs
|
*/
import {
  DataTypes,
  Model
} from "https://deno.land/x/denodb/mod.ts";


export class AssetMaintenanceLog extends Model { 
  static table = "assetMaintenanceLogs";
  static timestamps = true;
  
  static fields = {
    // fields list for ORM Maping
    id: { primaryKey: true, autoIncrement: true },
    assetMaintenance: DataTypes.STRING,
    series: DataTypes.STRING,
    assetName: DataTypes.STRING,
    itemCode: DataTypes.STRING,
    itemName: DataTypes.STRING,
    task: DataTypes.STRING,
    maintenanceType: DataTypes.STRING,
    periodicity: DataTypes.STRING,
    assignTo: DataTypes.STRING,
    dueDate: DataTypes.STRING,
    completionDate: DataTypes.STRING,
    maintenanceStatus: DataTypes.STRING,
    hasCertificate: DataTypes.STRING,
    certificate: DataTypes.STRING,
    description: DataTypes.STRING,
    actionsPerformed: DataTypes.STRING,
    amendedFrom: DataTypes.STRING,
    
  };

}
