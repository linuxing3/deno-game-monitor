// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: AssetCategoryAccount
|--------------------------------------------------------------------------
|
| Model Class and Interface of assetCategoryAccounts
|
*/
import {
  DataTypes,
  Model
} from "https://deno.land/x/denodb/mod.ts";


export class AssetCategoryAccount extends Model { 
  static table = "assetCategoryAccounts";
  static timestamps = true;
  
  static fields = {
    // fields list for ORM Maping
    id: { primaryKey: true, autoIncrement: true },
    company: DataTypes.STRING,
    fixedAssetAccount: DataTypes.STRING,
    accumulatedDepreciationAccount: DataTypes.STRING,
    depreciationExpenseAccount: DataTypes.STRING,
    capitalWorkInProgressAccount: DataTypes.STRING,
    
  };

}
