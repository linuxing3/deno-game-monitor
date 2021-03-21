// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: ShippingRule
|--------------------------------------------------------------------------
|
| Model Class and Interface of shippingRules
|
*/
import {
  DataTypes,
  Model
} from "https://deno.land/x/denodb/mod.ts";


export class ShippingRule extends Model { 
  static table = "shippingRules";
  static timestamps = true;
  
  static fields = {
    // fields list for ORM Maping
    id: { primaryKey: true, autoIncrement: true },
    shippingRuleLabel: DataTypes.STRING,
    disabled: DataTypes.STRING,
    shippingRuleType: DataTypes.STRING,
    accounting: DataTypes.STRING,
    company: DataTypes.STRING,
    shippingAccount: DataTypes.STRING,
    costCenter: DataTypes.STRING,
    calculateBasedOn: DataTypes.STRING,
    shippingAmount: DataTypes.STRING,
    shippingRuleConditions: DataTypes.STRING,
    restrictToCountries: DataTypes.STRING,
    validForCountries: DataTypes.STRING,
    
  };

}
