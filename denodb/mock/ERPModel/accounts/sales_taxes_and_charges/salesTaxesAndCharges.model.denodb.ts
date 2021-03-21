// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: SalesTaxesAndCharge
|--------------------------------------------------------------------------
|
| Model Class and Interface of salesTaxesAndCharges
|
*/
import {
  DataTypes,
  Model
} from "https://deno.land/x/denodb/mod.ts";


export class SalesTaxesAndCharge extends Model { 
  static table = "salesTaxesAndCharges";
  static timestamps = true;
  
  static fields = {
    // fields list for ORM Maping
    id: { primaryKey: true, autoIncrement: true },
    type: DataTypes.STRING,
    referenceRow: DataTypes.STRING,
    accountHead: DataTypes.STRING,
    costCenter: DataTypes.STRING,
    description: DataTypes.STRING,
    isThisTaxIncludedInBasicRate: DataTypes.STRING,
    rate: DataTypes.STRING,
    amount: DataTypes.STRING,
    total: DataTypes.STRING,
    taxAmountAfterDiscountAmount: DataTypes.STRING,
    amountCompanyCurrency: DataTypes.STRING,
    totalCompanyCurrency: DataTypes.STRING,
    taxAmountAfterDiscountAmountCompanyCurrency: DataTypes.STRING,
    itemWiseTaxDetail: DataTypes.STRING,
    parenttype: DataTypes.STRING,
    
  };

}
