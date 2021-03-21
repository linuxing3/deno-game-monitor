// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: GlEntry
|--------------------------------------------------------------------------
|
| Model Class and Interface of glEntries
|
*/
import {
  DataTypes,
  Model
} from "https://deno.land/x/denodb/mod.ts";


export class GlEntry extends Model { 
  static table = "glEntries";
  static timestamps = true;
  
  static fields = {
    // fields list for ORM Maping
    id: { primaryKey: true, autoIncrement: true },
    postingDate: DataTypes.STRING,
    transactionDate: DataTypes.STRING,
    account: DataTypes.STRING,
    partyType: DataTypes.STRING,
    party: DataTypes.STRING,
    costCenter: DataTypes.STRING,
    debitAmount: DataTypes.STRING,
    creditAmount: DataTypes.STRING,
    accountCurrency: DataTypes.STRING,
    debitAmountInAccountCurrency: DataTypes.STRING,
    creditAmountInAccountCurrency: DataTypes.STRING,
    against: DataTypes.STRING,
    againstVoucherType: DataTypes.STRING,
    againstVoucher: DataTypes.STRING,
    voucherType: DataTypes.STRING,
    voucherNo: DataTypes.STRING,
    voucherDetailNo: DataTypes.STRING,
    project: DataTypes.STRING,
    remarks: DataTypes.STRING,
    isOpening: DataTypes.STRING,
    isAdvance: DataTypes.STRING,
    fiscalYear: DataTypes.STRING,
    company: DataTypes.STRING,
    financeBook: DataTypes.STRING,
    toRename: DataTypes.STRING,
    
  };

}
