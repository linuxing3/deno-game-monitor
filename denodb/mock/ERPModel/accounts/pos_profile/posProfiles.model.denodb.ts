// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: PosProfile
|--------------------------------------------------------------------------
|
| Model Class and Interface of posProfiles
|
*/
import {
  DataTypes,
  Model
} from "https://deno.land/x/denodb/mod.ts";


export class PosProfile extends Model { 
  static table = "posProfiles";
  static timestamps = true;
  
  static fields = {
    // fields list for ORM Maping
    id: { primaryKey: true, autoIncrement: true },
    disabled: DataTypes.STRING,
    series: DataTypes.STRING,
    customer: DataTypes.STRING,
    company: DataTypes.STRING,
    country: DataTypes.STRING,
    warehouse: DataTypes.STRING,
    campaign: DataTypes.STRING,
    companyAddress: DataTypes.STRING,
    updateStock: DataTypes.STRING,
    ignorePricingRule: DataTypes.STRING,
    allowDelete: DataTypes.STRING,
    allowUserToEditRate: DataTypes.STRING,
    allowUserToEditDiscount: DataTypes.STRING,
    allowPrintBeforePay: DataTypes.STRING,
    displayItemsInStock: DataTypes.STRING,
    applicableForUsers: DataTypes.STRING,
    modeOfPayment: DataTypes.STRING,
    salesInvoicePayment: DataTypes.STRING,
    itemGroups: DataTypes.STRING,
    customerGroups: DataTypes.STRING,
    printSettings: DataTypes.STRING,
    printFormatForOnline: DataTypes.STRING,
    letterHead: DataTypes.STRING,
    termsAndConditions: DataTypes.STRING,
    printHeading: DataTypes.STRING,
    offlinePosSettings: DataTypes.STRING,
    territory: DataTypes.STRING,
    printFormat: DataTypes.STRING,
    customerGroup: DataTypes.STRING,
    accounting: DataTypes.STRING,
    priceList: DataTypes.STRING,
    currency: DataTypes.STRING,
    writeOffAccount: DataTypes.STRING,
    writeOffCostCenter: DataTypes.STRING,
    accountForChangeAmount: DataTypes.STRING,
    incomeAccount: DataTypes.STRING,
    expenseAccount: DataTypes.STRING,
    costCenter: DataTypes.STRING,
    taxesAndCharges: DataTypes.STRING,
    applyDiscountOn: DataTypes.STRING,
    
  };

}
