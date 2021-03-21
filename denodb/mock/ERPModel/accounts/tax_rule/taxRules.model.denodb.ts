// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: TaxRule
|--------------------------------------------------------------------------
|
| Model Class and Interface of taxRules
|
*/
import {
  DataTypes,
  Model
} from "https://deno.land/x/denodb/mod.ts";


export class TaxRule extends Model { 
  static table = "taxRules";
  static timestamps = true;
  
  static fields = {
    // fields list for ORM Maping
    id: { primaryKey: true, autoIncrement: true },
    taxType: DataTypes.STRING,
    useForShoppingCart: DataTypes.STRING,
    salesTaxTemplate: DataTypes.STRING,
    purchaseTaxTemplate: DataTypes.STRING,
    filters: DataTypes.STRING,
    customer: DataTypes.STRING,
    supplier: DataTypes.STRING,
    item: DataTypes.STRING,
    billingCity: DataTypes.STRING,
    billingCounty: DataTypes.STRING,
    billingState: DataTypes.STRING,
    billingZipcode: DataTypes.STRING,
    billingCountry: DataTypes.STRING,
    taxCategory: DataTypes.STRING,
    customerGroup: DataTypes.STRING,
    supplierGroup: DataTypes.STRING,
    itemGroup: DataTypes.STRING,
    shippingCity: DataTypes.STRING,
    shippingCounty: DataTypes.STRING,
    shippingState: DataTypes.STRING,
    shippingZipcode: DataTypes.STRING,
    shippingCountry: DataTypes.STRING,
    validity: DataTypes.STRING,
    fromDate: DataTypes.STRING,
    toDate: DataTypes.STRING,
    priority: DataTypes.STRING,
    company: DataTypes.STRING,
    
  };

}
