// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: PaymentGatewayAccount
|--------------------------------------------------------------------------
|
| Model Class and Interface of paymentGatewayAccounts
|
*/
import {
  DataTypes,
  Model
} from "https://deno.land/x/denodb/mod.ts";


export class PaymentGatewayAccount extends Model { 
  static table = "paymentGatewayAccounts";
  static timestamps = true;
  
  static fields = {
    // fields list for ORM Maping
    id: { primaryKey: true, autoIncrement: true },
    paymentGateway: DataTypes.STRING,
    isDefault: DataTypes.STRING,
    paymentAccount: DataTypes.STRING,
    currency: DataTypes.STRING,
    defaultPaymentRequestMessage: DataTypes.STRING,
    messageExamples: DataTypes.STRING,
    
  };

}
