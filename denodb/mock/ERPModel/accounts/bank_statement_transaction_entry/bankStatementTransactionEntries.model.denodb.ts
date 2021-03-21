// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: BankStatementTransactionEntry
|--------------------------------------------------------------------------
|
| Model Class and Interface of bankStatementTransactionEntries
|
*/
import {
  DataTypes,
  Model
} from "https://deno.land/x/denodb/mod.ts";


export class BankStatementTransactionEntry extends Model { 
  static table = "bankStatementTransactionEntries";
  static timestamps = true;
  
  static fields = {
    // fields list for ORM Maping
    id: { primaryKey: true, autoIncrement: true },
    bankAccount: DataTypes.STRING,
    fromDate: DataTypes.STRING,
    toDate: DataTypes.STRING,
    bankStatementSettings: DataTypes.STRING,
    bank: DataTypes.STRING,
    receivableAccount: DataTypes.STRING,
    payableAccount: DataTypes.STRING,
    bankStatement: DataTypes.STRING,
    bankTransactionEntries: DataTypes.STRING,
    newTransactions: DataTypes.STRING,
    matchTransactionToInvoices: DataTypes.STRING,
    createNewPaymentJournalEntry: DataTypes.STRING,
    submitReconcilePayments: DataTypes.STRING,
    matchingInvoices: DataTypes.STRING,
    paymentInvoiceItems: DataTypes.STRING,
    reconciledTransactions: DataTypes.STRING,
    amendedFrom: DataTypes.STRING,
    
  };

}
