// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: PaymentOrderReference
|--------------------------------------------------------------------------
|
| Model Class and Interface of paymentOrderReferences
|
*/
import {
  DataTypes,
  Model
} from "https://deno.land/x/denodb/mod.ts";


export class PaymentOrderReference extends Model { 
  static table = "paymentOrderReferences";
  static timestamps = true;
  
  static fields = {
    // fields list for ORM Maping
    id: { primaryKey: true, autoIncrement: true },
    type: DataTypes.STRING,
    name: DataTypes.STRING,
    amount: DataTypes.STRING,
    supplier: DataTypes.STRING,
    paymentRequest: DataTypes.STRING,
    modeOfPayment: DataTypes.STRING,
    bankAccountDetails: DataTypes.STRING,
    bankAccount: DataTypes.STRING,
    account: DataTypes.STRING,
    paymentReference: DataTypes.STRING,
    
  };

}
