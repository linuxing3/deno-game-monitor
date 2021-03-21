// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: AssetCategory
|--------------------------------------------------------------------------
|
| Model Class and Interface of assetCategories
|
*/
import {
  DataTypes,
  Model
} from "https://deno.land/x/denodb/mod.ts";


export class AssetCategory extends Model { 
  static table = "assetCategories";
  static timestamps = true;
  
  static fields = {
    // fields list for ORM Maping
    id: { primaryKey: true, autoIncrement: true },
    assetCategoryName: DataTypes.STRING,
    financeBookDetail: DataTypes.STRING,
    financeBooks: DataTypes.STRING,
    accounts: DataTypes.STRING,
    
  };

}
