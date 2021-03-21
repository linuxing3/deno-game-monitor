// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: TaxableSalarySlab
|--------------------------------------------------------------------------
|
| Model Class and Interface of taxableSalarySlabs
|
*/
import {
  DataTypes,
  Model
} from "https://deno.land/x/denodb/mod.ts";


export class TaxableSalarySlab extends Model { 
  static table = "taxableSalarySlabs";
  static timestamps = true;
  
  static fields = {
    // fields list for ORM Maping
    id: { primaryKey: true, autoIncrement: true },
    fromAmount: DataTypes.STRING,
    toAmount: DataTypes.STRING,
    percentDeduction: DataTypes.STRING,
    condition: DataTypes.STRING,
    
  };

}
