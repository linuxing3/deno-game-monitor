// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: AssetValueAdjustment
|--------------------------------------------------------------------------
|
| Model Class and Interface of assetValueAdjustments
|
*/
import {
  DataTypes,
  Model
} from "https://deno.land/x/denodb/mod.ts";


export class AssetValueAdjustment extends Model { 
  static table = "assetValueAdjustments";
  static timestamps = true;
  
  static fields = {
    // fields list for ORM Maping
    id: { primaryKey: true, autoIncrement: true },
    company: DataTypes.STRING,
    asset: DataTypes.STRING,
    assetCategory: DataTypes.STRING,
    financeBook: DataTypes.STRING,
    journalEntry: DataTypes.STRING,
    date: DataTypes.STRING,
    currentAssetValue: DataTypes.STRING,
    newAssetValue: DataTypes.STRING,
    differenceAmount: DataTypes.STRING,
    costCenter: DataTypes.STRING,
    amendedFrom: DataTypes.STRING,
    
  };

}
