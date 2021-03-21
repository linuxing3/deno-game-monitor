// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: PaymentReconciliationPayment
|--------------------------------------------------------------------------
|
| Model Class and Interface of paymentReconciliationPayments
|
*/
import {
  DataTypes,
  Model
} from "https://deno.land/x/denodb/mod.ts";


export class PaymentReconciliationPayment extends Model { 
  static table = "paymentReconciliationPayments";
  static timestamps = true;
  
  static fields = {
    // fields list for ORM Maping
    id: { primaryKey: true, autoIncrement: true },
    referenceType: DataTypes.STRING,
    referenceName: DataTypes.STRING,
    postingDate: DataTypes.STRING,
    isAdvance: DataTypes.STRING,
    referenceRow: DataTypes.STRING,
    invoiceNumber: DataTypes.STRING,
    amount: DataTypes.STRING,
    allocatedAmount: DataTypes.STRING,
    remark: DataTypes.STRING,
    
  };

}
