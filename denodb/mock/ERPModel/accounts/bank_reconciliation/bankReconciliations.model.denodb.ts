// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: BankReconciliation
|--------------------------------------------------------------------------
|
| Model Class and Interface of bankReconciliations
|
*/
import {
  DataTypes,
  Model
} from "https://deno.land/x/denodb/mod.ts";


export class BankReconciliation extends Model { 
  static table = "bankReconciliations";
  static timestamps = true;
  
  static fields = {
    // fields list for ORM Maping
    id: { primaryKey: true, autoIncrement: true },
    bankAccount: DataTypes.STRING,
    accountCurrency: DataTypes.STRING,
    fromDate: DataTypes.STRING,
    toDate: DataTypes.STRING,
    includeReconciledEntries: DataTypes.STRING,
    includePosTransactions: DataTypes.STRING,
    getPaymentEntries: DataTypes.STRING,
    paymentEntries: DataTypes.STRING,
    updateClearanceDate: DataTypes.STRING,
    totalAmount: DataTypes.STRING,
    
  };

}
