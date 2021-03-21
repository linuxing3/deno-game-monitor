// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: ShippingRuleCondition
|--------------------------------------------------------------------------
|
| Model Class and Interface of shippingRuleConditions
|
*/
import {
  DataTypes,
  Model
} from "https://deno.land/x/denodb/mod.ts";


export class ShippingRuleCondition extends Model { 
  static table = "shippingRuleConditions";
  static timestamps = true;
  
  static fields = {
    // fields list for ORM Maping
    id: { primaryKey: true, autoIncrement: true },
    fromValue: DataTypes.STRING,
    toValue: DataTypes.STRING,
    shippingAmount: DataTypes.STRING,
    
  };

}
