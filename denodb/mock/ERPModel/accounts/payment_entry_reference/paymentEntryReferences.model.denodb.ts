// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: PaymentEntryReference
|--------------------------------------------------------------------------
|
| Model Class and Interface of paymentEntryReferences
|
*/
import {
  DataTypes,
  Model
} from "https://deno.land/x/denodb/mod.ts";


export class PaymentEntryReference extends Model { 
  static table = "paymentEntryReferences";
  static timestamps = true;
  
  static fields = {
    // fields list for ORM Maping
    id: { primaryKey: true, autoIncrement: true },
    type: DataTypes.STRING,
    name: DataTypes.STRING,
    dueDate: DataTypes.STRING,
    supplierInvoiceNo: DataTypes.STRING,
    totalAmount: DataTypes.STRING,
    outstanding: DataTypes.STRING,
    allocated: DataTypes.STRING,
    exchangeRate: DataTypes.STRING,
    
  };

}
