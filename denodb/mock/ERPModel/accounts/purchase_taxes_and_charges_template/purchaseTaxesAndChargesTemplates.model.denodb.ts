// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: PurchaseTaxesAndChargesTemplate
|--------------------------------------------------------------------------
|
| Model Class and Interface of purchaseTaxesAndChargesTemplates
|
*/
import {
  DataTypes,
  Model
} from "https://deno.land/x/denodb/mod.ts";


export class PurchaseTaxesAndChargesTemplate extends Model { 
  static table = "purchaseTaxesAndChargesTemplates";
  static timestamps = true;
  
  static fields = {
    // fields list for ORM Maping
    id: { primaryKey: true, autoIncrement: true },
    title: DataTypes.STRING,
    default: DataTypes.STRING,
    disabled: DataTypes.STRING,
    company: DataTypes.STRING,
    purchaseTaxesAndCharges: DataTypes.STRING,
    
  };

}
