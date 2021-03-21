// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: PaymentReconciliationInvoice
|--------------------------------------------------------------------------
|
| Model Class and Interface of paymentReconciliationInvoices
|
*/
import {
  DataTypes,
  Model
} from "https://deno.land/x/denodb/mod.ts";


export class PaymentReconciliationInvoice extends Model { 
  static table = "paymentReconciliationInvoices";
  static timestamps = true;
  
  static fields = {
    // fields list for ORM Maping
    id: { primaryKey: true, autoIncrement: true },
    invoiceType: DataTypes.STRING,
    invoiceNumber: DataTypes.STRING,
    invoiceDate: DataTypes.STRING,
    amount: DataTypes.STRING,
    outstandingAmount: DataTypes.STRING,
    
  };

}
