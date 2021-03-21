// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: TaxWithholdingCategory
|--------------------------------------------------------------------------
|
| Model Class and Interface of taxWithholdingCategories
|
*/
import {
  DataTypes,
  Model
} from "https://deno.land/x/denodb/mod.ts";


export class TaxWithholdingCategory extends Model { 
  static table = "taxWithholdingCategories";
  static timestamps = true;
  
  static fields = {
    // fields list for ORM Maping
    id: { primaryKey: true, autoIncrement: true },
    categoryName: DataTypes.STRING,
    taxWithholdingRates: DataTypes.STRING,
    rates: DataTypes.STRING,
    accountDetails: DataTypes.STRING,
    accounts: DataTypes.STRING,
    
  };

}
