// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: ItemTaxTemplate
|--------------------------------------------------------------------------
|
| Model Class and Interface of itemTaxTemplates
|
*/
import {
  DataTypes,
  Model
} from "https://deno.land/x/denodb/mod.ts";


export class ItemTaxTemplate extends Model { 
  static table = "itemTaxTemplates";
  static timestamps = true;
  
  static fields = {
    // fields list for ORM Maping
    id: { primaryKey: true, autoIncrement: true },
    title: DataTypes.STRING,
    taxRates: DataTypes.STRING,
    
  };

}
