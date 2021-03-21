// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: AssetRepair
|--------------------------------------------------------------------------
|
| Model Class and Interface of assetRepairs
|
*/
import {
  DataTypes,
  Model
} from "https://deno.land/x/denodb/mod.ts";


export class AssetRepair extends Model { 
  static table = "assetRepairs";
  static timestamps = true;
  
  static fields = {
    // fields list for ORM Maping
    id: { primaryKey: true, autoIncrement: true },
    assetName: DataTypes.STRING,
    series: DataTypes.STRING,
    itemCode: DataTypes.STRING,
    itemName: DataTypes.STRING,
    failureDate: DataTypes.STRING,
    assignTo: DataTypes.STRING,
    assignToName: DataTypes.STRING,
    completionDate: DataTypes.STRING,
    repairStatus: DataTypes.STRING,
    errorDescription: DataTypes.STRING,
    actionsPerformed: DataTypes.STRING,
    downtime: DataTypes.STRING,
    repairCost: DataTypes.STRING,
    amendedFrom: DataTypes.STRING,
    
  };

}
