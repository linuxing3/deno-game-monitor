// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: JournalEntryAccount
|--------------------------------------------------------------------------
|
| Model Class and Interface of journalEntryAccounts
|
*/
import {
  DataTypes,
  Model
} from "https://deno.land/x/denodb/mod.ts";


export class JournalEntryAccount extends Model { 
  static table = "journalEntryAccounts";
  static timestamps = true;
  
  static fields = {
    // fields list for ORM Maping
    id: { primaryKey: true, autoIncrement: true },
    account: DataTypes.STRING,
    accountType: DataTypes.STRING,
    accountBalance: DataTypes.STRING,
    costCenter: DataTypes.STRING,
    partyType: DataTypes.STRING,
    party: DataTypes.STRING,
    partyBalance: DataTypes.STRING,
    currency: DataTypes.STRING,
    accountCurrency: DataTypes.STRING,
    exchangeRate: DataTypes.STRING,
    amount: DataTypes.STRING,
    debit: DataTypes.STRING,
    debitInCompanyCurrency: DataTypes.STRING,
    credit: DataTypes.STRING,
    creditInCompanyCurrency: DataTypes.STRING,
    reference: DataTypes.STRING,
    referenceType: DataTypes.STRING,
    referenceName: DataTypes.STRING,
    referenceDueDate: DataTypes.STRING,
    project: DataTypes.STRING,
    isAdvance: DataTypes.STRING,
    userRemark: DataTypes.STRING,
    againstAccount: DataTypes.STRING,
    
  };

}
