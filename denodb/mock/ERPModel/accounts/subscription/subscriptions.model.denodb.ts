// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: Subscription
|--------------------------------------------------------------------------
|
| Model Class and Interface of subscriptions
|
*/
import {
  DataTypes,
  Model
} from "https://deno.land/x/denodb/mod.ts";


export class Subscription extends Model { 
  static table = "subscriptions";
  static timestamps = true;
  
  static fields = {
    // fields list for ORM Maping
    id: { primaryKey: true, autoIncrement: true },
    customer: DataTypes.STRING,
    status: DataTypes.STRING,
    subscriptionPeriod: DataTypes.STRING,
    subscriptionStartDate: DataTypes.STRING,
    cancelationDate: DataTypes.STRING,
    trialPeriodStartDate: DataTypes.STRING,
    trialPeriodEndDate: DataTypes.STRING,
    currentInvoiceStartDate: DataTypes.STRING,
    currentInvoiceEndDate: DataTypes.STRING,
    daysUntilDue: DataTypes.STRING,
    cancelAtEndOfPeriod: DataTypes.STRING,
    generateInvoiceAtBeginningOfPeriod: DataTypes.STRING,
    plans: DataTypes.STRING,
    taxes: DataTypes.STRING,
    salesTaxesAndChargesTemplate: DataTypes.STRING,
    discounts: DataTypes.STRING,
    applyAdditionalDiscountOn: DataTypes.STRING,
    additionalDIscountPercentage: DataTypes.STRING,
    additionalDIscountAmount: DataTypes.STRING,
    invoices: DataTypes.STRING,
    
  };

}
