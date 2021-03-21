// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: PaymentReconciliation
|--------------------------------------------------------------------------
|
| Model Class and Interface of paymentReconciliations
|
*/
import {
  DataTypes,
  Model
} from "https://deno.land/x/denodb/mod.ts";


export class PaymentReconciliation extends Model { 
  static table = "paymentReconciliations";
  static timestamps = true;
  
  static fields = {
    // fields list for ORM Maping
    id: { primaryKey: true, autoIncrement: true },
    company: DataTypes.STRING,
    partyType: DataTypes.STRING,
    party: DataTypes.STRING,
    receivablePayableAccount: DataTypes.STRING,
    bankCashAccount: DataTypes.STRING,
    fromInvoiceDate: DataTypes.STRING,
    toInvoiceDate: DataTypes.STRING,
    minimumInvoiceAmount: DataTypes.STRING,
    maximumInvoiceAmount: DataTypes.STRING,
    limit: DataTypes.STRING,
    getUnreconciledEntries: DataTypes.STRING,
    unreconciledPaymentDetails: DataTypes.STRING,
    payments: DataTypes.STRING,
    reconcile: DataTypes.STRING,
    invoiceJournalEntryDetails: DataTypes.STRING,
    invoices: DataTypes.STRING,
    
  };

}
