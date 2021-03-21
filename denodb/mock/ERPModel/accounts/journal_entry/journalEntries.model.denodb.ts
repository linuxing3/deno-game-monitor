// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: JournalEntry
|--------------------------------------------------------------------------
|
| Model Class and Interface of journalEntries
|
*/
import {
  DataTypes,
  Model
} from "https://deno.land/x/denodb/mod.ts";


export class JournalEntry extends Model { 
  static table = "journalEntries";
  static timestamps = true;
  
  static fields = {
    // fields list for ORM Maping
    id: { primaryKey: true, autoIncrement: true },
    title: DataTypes.STRING,
    entryType: DataTypes.STRING,
    series: DataTypes.STRING,
    postingDate: DataTypes.STRING,
    company: DataTypes.STRING,
    financeBook: DataTypes.STRING,
    accountingEntries: DataTypes.STRING,
    referenceNumber: DataTypes.STRING,
    referenceDate: DataTypes.STRING,
    userRemark: DataTypes.STRING,
    totalDebit: DataTypes.STRING,
    totalCredit: DataTypes.STRING,
    differenceDrCr: DataTypes.STRING,
    makeDifferenceEntry: DataTypes.STRING,
    multiCurrency: DataTypes.STRING,
    totalAmountCurrency: DataTypes.STRING,
    totalAmount: DataTypes.STRING,
    totalAmountInWords: DataTypes.STRING,
    reference: DataTypes.STRING,
    clearanceDate: DataTypes.STRING,
    remark: DataTypes.STRING,
    paidLoan: DataTypes.STRING,
    interCompanyJournalEntryReference: DataTypes.STRING,
    billNo: DataTypes.STRING,
    billDate: DataTypes.STRING,
    dueDate: DataTypes.STRING,
    writeOff: DataTypes.STRING,
    writeOffBasedOn: DataTypes.STRING,
    getOutstandingInvoices: DataTypes.STRING,
    writeOffAmount: DataTypes.STRING,
    printingSettings: DataTypes.STRING,
    payToRecdFrom: DataTypes.STRING,
    letterHead: DataTypes.STRING,
    printHeading: DataTypes.STRING,
    moreInformation: DataTypes.STRING,
    modeOfPayment: DataTypes.STRING,
    paymentOrder: DataTypes.STRING,
    isOpening: DataTypes.STRING,
    stockEntry: DataTypes.STRING,
    subscriptionSection: DataTypes.STRING,
    autoRepeat: DataTypes.STRING,
    amendedFrom: DataTypes.STRING,
    
  };

}
