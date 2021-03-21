// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: CostCenter
|--------------------------------------------------------------------------
|
| Model Class and Interface of costCenters
|
*/
import {
  DataTypes,
  Model
} from "https://deno.land/x/denodb/mod.ts";


export class CostCenter extends Model { 
  static table = "costCenters";
  static timestamps = true;
  
  static fields = {
    // fields list for ORM Maping
    id: { primaryKey: true, autoIncrement: true },
    costCenterName: DataTypes.STRING,
    costCenterNumber: DataTypes.STRING,
    parentCostCenter: DataTypes.STRING,
    company: DataTypes.STRING,
    isGroup: DataTypes.STRING,
    lft: DataTypes.STRING,
    rgt: DataTypes.STRING,
    oldParent: DataTypes.STRING,
    
  };

}
