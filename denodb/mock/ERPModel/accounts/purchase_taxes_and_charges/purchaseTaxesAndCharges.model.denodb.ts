// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: PurchaseTaxesAndCharge
|--------------------------------------------------------------------------
|
| Model Class and Interface of purchaseTaxesAndCharges
|
*/
import {
  DataTypes,
  Model
} from "https://deno.land/x/denodb/mod.ts";


export class PurchaseTaxesAndCharge extends Model { 
  static table = "purchaseTaxesAndCharges";
  static timestamps = true;
  
  static fields = {
    // fields list for ORM Maping
    id: { primaryKey: true, autoIncrement: true },
    considerTaxOrChargeFor: DataTypes.STRING,
    addOrDeduct: DataTypes.STRING,
    type: DataTypes.STRING,
    referenceRow: DataTypes.STRING,
    isThisTaxIncludedInBasicRate: DataTypes.STRING,
    accountHead: DataTypes.STRING,
    costCenter: DataTypes.STRING,
    description: DataTypes.STRING,
    rate: DataTypes.STRING,
    amount: DataTypes.STRING,
    taxAmountAfterDiscountAmount: DataTypes.STRING,
    total: DataTypes.STRING,
    amountCompanyCurrency: DataTypes.STRING,
    totalCompanyCurrency: DataTypes.STRING,
    itemWiseTaxDetail: DataTypes.STRING,
    parenttype: DataTypes.STRING,
    
  };

}
