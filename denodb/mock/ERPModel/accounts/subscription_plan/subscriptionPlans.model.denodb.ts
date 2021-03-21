// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: SubscriptionPlan
|--------------------------------------------------------------------------
|
| Model Class and Interface of subscriptionPlans
|
*/
import {
  DataTypes,
  Model
} from "https://deno.land/x/denodb/mod.ts";


export class SubscriptionPlan extends Model { 
  static table = "subscriptionPlans";
  static timestamps = true;
  
  static fields = {
    // fields list for ORM Maping
    id: { primaryKey: true, autoIncrement: true },
    planName: DataTypes.STRING,
    currency: DataTypes.STRING,
    item: DataTypes.STRING,
    priceDetermination: DataTypes.STRING,
    cost: DataTypes.STRING,
    priceList: DataTypes.STRING,
    billingInterval: DataTypes.STRING,
    billingIntervalCount: DataTypes.STRING,
    paymentPlan: DataTypes.STRING,
    paymentGateway: DataTypes.STRING,
    
  };

}
