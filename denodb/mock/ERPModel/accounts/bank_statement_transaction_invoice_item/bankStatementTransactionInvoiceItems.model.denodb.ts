// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: BankStatementTransactionInvoiceItem
|--------------------------------------------------------------------------
|
| Model Class and Interface of bankStatementTransactionInvoiceItems
|
*/
import {
  DataTypes,
  Model
} from "https://deno.land/x/denodb/mod.ts";


export class BankStatementTransactionInvoiceItem extends Model { 
  static table = "bankStatementTransactionInvoiceItems";
  static timestamps = true;
  
  static fields = {
    // fields list for ORM Maping
    id: { primaryKey: true, autoIncrement: true },
    transactionDate: DataTypes.STRING,
    paymentDescription: DataTypes.STRING,
    partyType: DataTypes.STRING,
    party: DataTypes.STRING,
    invoiceDate: DataTypes.STRING,
    invoiceType: DataTypes.STRING,
    invoice: DataTypes.STRING,
    outstandingAmount: DataTypes.STRING,
    allocatedAmount: DataTypes.STRING,
    
  };

}
