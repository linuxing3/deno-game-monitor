// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: PaymentOrder
|--------------------------------------------------------------------------
|
| Model Class and Interface of paymentOrders
|
*/
import {
  DataTypes,
  Model
} from "https://deno.land/x/denodb/mod.ts";


export class PaymentOrder extends Model { 
  static table = "paymentOrders";
  static timestamps = true;
  
  static fields = {
    // fields list for ORM Maping
    id: { primaryKey: true, autoIncrement: true },
    series: DataTypes.STRING,
    company: DataTypes.STRING,
    supplier: DataTypes.STRING,
    postingDate: DataTypes.STRING,
    bank: DataTypes.STRING,
    paymentOrderReference: DataTypes.STRING,
    amendedFrom: DataTypes.STRING,
    
  };

}
