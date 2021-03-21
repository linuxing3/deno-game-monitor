// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: PricingRule
|--------------------------------------------------------------------------
|
| Model Class and Interface of pricingRules
|
*/
import {
  DataTypes,
  Model
} from "https://deno.land/x/denodb/mod.ts";


export class PricingRule extends Model { 
  static table = "pricingRules";
  static timestamps = true;
  
  static fields = {
    // fields list for ORM Maping
    id: { primaryKey: true, autoIncrement: true },
    title: DataTypes.STRING,
    applyOn: DataTypes.STRING,
    itemCode: DataTypes.STRING,
    brand: DataTypes.STRING,
    itemGroup: DataTypes.STRING,
    priority: DataTypes.STRING,
    disable: DataTypes.STRING,
    selling: DataTypes.STRING,
    buying: DataTypes.STRING,
    applicableFor: DataTypes.STRING,
    customer: DataTypes.STRING,
    customerGroup: DataTypes.STRING,
    territory: DataTypes.STRING,
    salesPartner: DataTypes.STRING,
    campaign: DataTypes.STRING,
    supplier: DataTypes.STRING,
    supplierGroup: DataTypes.STRING,
    minQty: DataTypes.STRING,
    maxQty: DataTypes.STRING,
    validFrom: DataTypes.STRING,
    validUpto: DataTypes.STRING,
    company: DataTypes.STRING,
    currency: DataTypes.STRING,
    margin: DataTypes.STRING,
    marginType: DataTypes.STRING,
    marginRateOrAmount: DataTypes.STRING,
    rateOrDiscount: DataTypes.STRING,
    rate: DataTypes.STRING,
    discountOnPriceListRate: DataTypes.STRING,
    forPriceList: DataTypes.STRING,
    pricingRuleHelp: DataTypes.STRING,
    
  };

}
