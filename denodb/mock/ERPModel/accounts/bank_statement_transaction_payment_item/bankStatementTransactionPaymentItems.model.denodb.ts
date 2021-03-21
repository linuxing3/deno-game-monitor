// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: BankStatementTransactionPaymentItem
|--------------------------------------------------------------------------
|
| Model Class and Interface of bankStatementTransactionPaymentItems
|
*/
import {
  DataTypes,
  Model
} from "https://deno.land/x/denodb/mod.ts";


export class BankStatementTransactionPaymentItem extends Model { 
  static table = "bankStatementTransactionPaymentItems";
  static timestamps = true;
  
  static fields = {
    // fields list for ORM Maping
    id: { primaryKey: true, autoIncrement: true },
    transactionDate: DataTypes.STRING,
    description: DataTypes.STRING,
    amount: DataTypes.STRING,
    partyType: DataTypes.STRING,
    party: DataTypes.STRING,
    referenceType: DataTypes.STRING,
    account: DataTypes.STRING,
    modeOfPayment: DataTypes.STRING,
    outstandingAmount: DataTypes.STRING,
    referenceName: DataTypes.STRING,
    paymentReference: DataTypes.STRING,
    invoices: DataTypes.STRING,
    
  };

}
