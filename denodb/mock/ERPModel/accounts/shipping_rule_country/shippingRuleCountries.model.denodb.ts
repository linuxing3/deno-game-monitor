// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: ShippingRuleCountry
|--------------------------------------------------------------------------
|
| Model Class and Interface of shippingRuleCountries
|
*/
import {
  DataTypes,
  Model
} from "https://deno.land/x/denodb/mod.ts";


export class ShippingRuleCountry extends Model { 
  static table = "shippingRuleCountries";
  static timestamps = true;
  
  static fields = {
    // fields list for ORM Maping
    id: { primaryKey: true, autoIncrement: true },
    country: DataTypes.STRING,
    
  };

}
