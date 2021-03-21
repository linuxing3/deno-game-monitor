// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: BankAccount
|--------------------------------------------------------------------------
|
| Model Class and Interface of bankAccounts
|
*/
import {
  DataTypes,
  Model
} from "https://deno.land/x/denodb/mod.ts";


export class BankAccount extends Model { 
  static table = "bankAccounts";
  static timestamps = true;
  
  static fields = {
    // fields list for ORM Maping
    id: { primaryKey: true, autoIncrement: true },
    accountName: DataTypes.STRING,
    account: DataTypes.STRING,
    bank: DataTypes.STRING,
    isCompanyAccount: DataTypes.STRING,
    company: DataTypes.STRING,
    isDefault: DataTypes.STRING,
    bankAccountNo: DataTypes.STRING,
    iban: DataTypes.STRING,
    branchCode: DataTypes.STRING,
    swiftNumber: DataTypes.STRING,
    partyType: DataTypes.STRING,
    party: DataTypes.STRING,
    addressAndContact: DataTypes.STRING,
    addressHtml: DataTypes.STRING,
    website: DataTypes.STRING,
    contactHtml: DataTypes.STRING,
    
  };

}
