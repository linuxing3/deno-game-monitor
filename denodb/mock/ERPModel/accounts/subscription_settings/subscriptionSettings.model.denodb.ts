// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: SubscriptionSetting
|--------------------------------------------------------------------------
|
| Model Class and Interface of subscriptionSettings
|
*/
import {
  DataTypes,
  Model
} from "https://deno.land/x/denodb/mod.ts";


export class SubscriptionSetting extends Model { 
  static table = "subscriptionSettings";
  static timestamps = true;
  
  static fields = {
    // fields list for ORM Maping
    id: { primaryKey: true, autoIncrement: true },
    gracePeriod: DataTypes.STRING,
    cancelInvoiceAfterGracePeriod: DataTypes.STRING,
    prorate: DataTypes.STRING,
    
  };

}
