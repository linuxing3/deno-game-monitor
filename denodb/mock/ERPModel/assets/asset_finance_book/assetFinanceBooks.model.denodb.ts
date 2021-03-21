// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: AssetFinanceBook
|--------------------------------------------------------------------------
|
| Model Class and Interface of assetFinanceBooks
|
*/
import {
  DataTypes,
  Model
} from "https://deno.land/x/denodb/mod.ts";


export class AssetFinanceBook extends Model { 
  static table = "assetFinanceBooks";
  static timestamps = true;
  
  static fields = {
    // fields list for ORM Maping
    id: { primaryKey: true, autoIncrement: true },
    financeBook: DataTypes.STRING,
    depreciationMethod: DataTypes.STRING,
    totalNumberOfDepreciations: DataTypes.STRING,
    frequencyOfDepreciationMonths: DataTypes.STRING,
    depreciationStartDate: DataTypes.STRING,
    expectedValueAfterUsefulLife: DataTypes.STRING,
    valueAfterDepreciation: DataTypes.STRING,
    
  };

}
