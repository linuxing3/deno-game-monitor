// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: ItemTaxTemplateDetail
|--------------------------------------------------------------------------
|
| Model Class and Interface of itemTaxTemplateDetails
|
*/
import {
  DataTypes,
  Model
} from "https://deno.land/x/denodb/mod.ts";


export class ItemTaxTemplateDetail extends Model { 
  static table = "itemTaxTemplateDetails";
  static timestamps = true;
  
  static fields = {
    // fields list for ORM Maping
    id: { primaryKey: true, autoIncrement: true },
    tax: DataTypes.STRING,
    taxRate: DataTypes.STRING,
    
  };

}
