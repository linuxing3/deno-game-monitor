// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: SubscriptionInvoice
|--------------------------------------------------------------------------
|
| Model Class and Interface of subscriptionInvoices
|
*/
import {
  DataTypes,
  Model
} from "https://deno.land/x/denodb/mod.ts";


export class SubscriptionInvoice extends Model { 
  static table = "subscriptionInvoices";
  static timestamps = true;
  
  static fields = {
    // fields list for ORM Maping
    id: { primaryKey: true, autoIncrement: true },
    invoice: DataTypes.STRING,
    
  };

}
