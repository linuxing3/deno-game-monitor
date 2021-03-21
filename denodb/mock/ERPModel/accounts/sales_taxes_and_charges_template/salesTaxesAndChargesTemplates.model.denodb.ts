// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: SalesTaxesAndChargesTemplate
|--------------------------------------------------------------------------
|
| Model Class and Interface of salesTaxesAndChargesTemplates
|
*/
import {
  DataTypes,
  Model
} from "https://deno.land/x/denodb/mod.ts";


export class SalesTaxesAndChargesTemplate extends Model { 
  static table = "salesTaxesAndChargesTemplates";
  static timestamps = true;
  
  static fields = {
    // fields list for ORM Maping
    id: { primaryKey: true, autoIncrement: true },
    title: DataTypes.STRING,
    default: DataTypes.STRING,
    disabled: DataTypes.STRING,
    company: DataTypes.STRING,
    salesTaxesAndCharges: DataTypes.STRING,
    
  };

}
