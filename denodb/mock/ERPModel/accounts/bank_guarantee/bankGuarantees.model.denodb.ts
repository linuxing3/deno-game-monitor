// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: BankGuarantee
|--------------------------------------------------------------------------
|
| Model Class and Interface of bankGuarantees
|
*/
import {
  DataTypes,
  Model
} from "https://deno.land/x/denodb/mod.ts";


export class BankGuarantee extends Model { 
  static table = "bankGuarantees";
  static timestamps = true;
  
  static fields = {
    // fields list for ORM Maping
    id: { primaryKey: true, autoIncrement: true },
    bankGuaranteeType: DataTypes.STRING,
    referenceDocumentType: DataTypes.STRING,
    referenceDocumentName: DataTypes.STRING,
    customer: DataTypes.STRING,
    supplier: DataTypes.STRING,
    project: DataTypes.STRING,
    amount: DataTypes.STRING,
    startDate: DataTypes.STRING,
    validityInDays: DataTypes.STRING,
    endDate: DataTypes.STRING,
    bankAccountInfo: DataTypes.STRING,
    bank: DataTypes.STRING,
    bankAccount: DataTypes.STRING,
    account: DataTypes.STRING,
    bankAccountNo: DataTypes.STRING,
    iban: DataTypes.STRING,
    branchCode: DataTypes.STRING,
    swiftNumber: DataTypes.STRING,
    clausesAndConditions: DataTypes.STRING,
    otherDetails: DataTypes.STRING,
    bankGuaranteeNumber: DataTypes.STRING,
    nameOfBeneficiary: DataTypes.STRING,
    marginMoney: DataTypes.STRING,
    chargesIncurred: DataTypes.STRING,
    fixedDepositNumber: DataTypes.STRING,
    amendedFrom: DataTypes.STRING,
    
  };

}
