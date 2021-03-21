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
import {
  FieldValue,
} from "https://deno.land/x/denodb/lib/query-builder.ts";
import {
  ModelFields,
} from "https://deno.land/x/denodb/lib/model.ts";


export class JournalEntry extends Model { 
  static table = "journalEntries";
  static timestamps = true;
  
  static fields: ModelFields = {
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

  static meta = {
    // field meta information for UI render
    fieldProperty: [
      {
        key: '',
        label: '',
        type: 'select',
        placeholder: 'Input ',
        options: '',
        
      },
      {
        key: 'title',
        label: 'Title',
        type: 'input',
        placeholder: 'Input Title',
        options: '',
        
      },
      {
        key: 'entryType',
        label: 'Entry Type',
        type: 'select',
        placeholder: 'Input Entry Type',
        options: '[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object]',
        
      },
      {
        key: 'series',
        label: 'Series',
        type: 'select',
        placeholder: 'Input Series',
        options: '',
        
      },
      {
        key: '',
        label: '',
        type: 'input',
        placeholder: 'Input ',
        options: '',
        
      },
      {
        key: 'postingDate',
        label: 'Posting Date',
        type: 'input',
        placeholder: 'Input Posting Date',
        options: '',
        
      },
      {
        key: 'company',
        label: 'Company',
        type: 'select',
        placeholder: 'Input Company',
        options: '',
        
      },
      {
        key: 'financeBook',
        label: 'Finance Book',
        type: 'select',
        placeholder: 'Input Finance Book',
        options: '',
        
      },
      {
        key: '',
        label: '',
        type: 'select',
        placeholder: 'Input ',
        options: '',
        
      },
      {
        key: 'accountingEntries',
        label: 'Accounting Entries',
        type: 'select',
        placeholder: 'Input Accounting Entries',
        options: '',
        
      },
      {
        key: '',
        label: '',
        type: 'input',
        placeholder: 'Input ',
        options: '',
        
      },
      {
        key: 'referenceNumber',
        label: 'Reference Number',
        type: 'input',
        placeholder: 'Input Reference Number',
        options: '',
        
      },
      {
        key: 'referenceDate',
        label: 'Reference Date',
        type: 'input',
        placeholder: 'Input Reference Date',
        options: '',
        
      },
      {
        key: 'userRemark',
        label: 'User Remark',
        type: 'input',
        placeholder: 'Input User Remark',
        options: '',
        
      },
      {
        key: '',
        label: '',
        type: 'input',
        placeholder: 'Input ',
        options: '',
        
      },
      {
        key: 'totalDebit',
        label: 'Total Debit',
        type: 'select',
        placeholder: 'Input Total Debit',
        options: '',
        
      },
      {
        key: 'totalCredit',
        label: 'Total Credit',
        type: 'select',
        placeholder: 'Input Total Credit',
        options: '',
        
      },
      {
        key: 'differenceDrCr',
        label: 'Difference Dr Cr',
        type: 'select',
        placeholder: 'Input Difference Dr Cr',
        options: '',
        
      },
      {
        key: 'makeDifferenceEntry',
        label: 'Make Difference Entry',
        type: 'input',
        placeholder: 'Input Make Difference Entry',
        options: '',
        
      },
      {
        key: 'multiCurrency',
        label: 'Multi Currency',
        type: 'input',
        placeholder: 'Input Multi Currency',
        options: '',
        
      },
      {
        key: 'totalAmountCurrency',
        label: 'Total Amount Currency',
        type: 'select',
        placeholder: 'Input Total Amount Currency',
        options: '',
        
      },
      {
        key: 'totalAmount',
        label: 'Total Amount',
        type: 'select',
        placeholder: 'Input Total Amount',
        options: '',
        
      },
      {
        key: 'totalAmountInWords',
        label: 'Total Amount In Words',
        type: 'input',
        placeholder: 'Input Total Amount In Words',
        options: '',
        
      },
      {
        key: 'reference',
        label: 'Reference',
        type: 'select',
        placeholder: 'Input Reference',
        options: '',
        
      },
      {
        key: 'clearanceDate',
        label: 'Clearance Date',
        type: 'input',
        placeholder: 'Input Clearance Date',
        options: '',
        
      },
      {
        key: 'remark',
        label: 'Remark',
        type: 'input',
        placeholder: 'Input Remark',
        options: '',
        
      },
      {
        key: 'paidLoan',
        label: 'Paid Loan',
        type: 'input',
        placeholder: 'Input Paid Loan',
        options: '',
        
      },
      {
        key: 'interCompanyJournalEntryReference',
        label: 'Inter Company Journal Entry Reference',
        type: 'select',
        placeholder: 'Input Inter Company Journal Entry Reference',
        options: '',
        
      },
      {
        key: '',
        label: '',
        type: 'input',
        placeholder: 'Input ',
        options: '',
        
      },
      {
        key: 'billNo',
        label: 'Bill No',
        type: 'input',
        placeholder: 'Input Bill No',
        options: '',
        
      },
      {
        key: 'billDate',
        label: 'Bill Date',
        type: 'input',
        placeholder: 'Input Bill Date',
        options: '',
        
      },
      {
        key: 'dueDate',
        label: 'Due Date',
        type: 'input',
        placeholder: 'Input Due Date',
        options: '',
        
      },
      {
        key: 'writeOff',
        label: 'Write Off',
        type: 'input',
        placeholder: 'Input Write Off',
        options: '',
        
      },
      {
        key: 'writeOffBasedOn',
        label: 'Write Off Based On',
        type: 'select',
        placeholder: 'Input Write Off Based On',
        options: '[object Object]',
        
      },
      {
        key: 'getOutstandingInvoices',
        label: 'Get Outstanding Invoices',
        type: 'select',
        placeholder: 'Input Get Outstanding Invoices',
        options: '',
        
      },
      {
        key: '',
        label: '',
        type: 'input',
        placeholder: 'Input ',
        options: '',
        
      },
      {
        key: 'writeOffAmount',
        label: 'Write Off Amount',
        type: 'select',
        placeholder: 'Input Write Off Amount',
        options: '',
        
      },
      {
        key: 'printingSettings',
        label: 'Printing Settings',
        type: 'input',
        placeholder: 'Input Printing Settings',
        options: '',
        
      },
      {
        key: 'payToRecdFrom',
        label: 'Pay To Recd From',
        type: 'input',
        placeholder: 'Input Pay To Recd From',
        options: '',
        
      },
      {
        key: '',
        label: '',
        type: 'input',
        placeholder: 'Input ',
        options: '',
        
      },
      {
        key: 'letterHead',
        label: 'Letter Head',
        type: 'select',
        placeholder: 'Input Letter Head',
        options: '',
        
      },
      {
        key: 'printHeading',
        label: 'Print Heading',
        type: 'select',
        placeholder: 'Input Print Heading',
        options: '',
        
      },
      {
        key: 'moreInformation',
        label: 'More Information',
        type: 'select',
        placeholder: 'Input More Information',
        options: '',
        
      },
      {
        key: 'modeOfPayment',
        label: 'Mode Of Payment',
        type: 'select',
        placeholder: 'Input Mode Of Payment',
        options: '',
        
      },
      {
        key: 'paymentOrder',
        label: 'Payment Order',
        type: 'select',
        placeholder: 'Input Payment Order',
        options: '',
        
      },
      {
        key: '',
        label: '',
        type: 'input',
        placeholder: 'Input ',
        options: '',
        
      },
      {
        key: 'isOpening',
        label: 'Is Opening',
        type: 'select',
        placeholder: 'Input Is Opening',
        options: '[object Object]',
        
      },
      {
        key: 'stockEntry',
        label: 'Stock Entry',
        type: 'select',
        placeholder: 'Input Stock Entry',
        options: '',
        
      },
      {
        key: 'subscriptionSection',
        label: 'Subscription Section',
        type: 'input',
        placeholder: 'Input Subscription Section',
        options: '',
        
      },
      {
        key: 'autoRepeat',
        label: 'Auto Repeat',
        type: 'select',
        placeholder: 'Input Auto Repeat',
        options: '',
        
      },
      {
        key: 'amendedFrom',
        label: 'Amended From',
        type: 'select',
        placeholder: 'Input Amended From',
        options: '',
        
      },
      
    ]
  };
}

export interface IJournalEntry {
  id: FieldValue;
  title: FieldValue;
  entryType: FieldValue;
  series: FieldValue;
  postingDate: FieldValue;
  company: FieldValue;
  financeBook: FieldValue;
  accountingEntries: FieldValue;
  referenceNumber: FieldValue;
  referenceDate: FieldValue;
  userRemark: FieldValue;
  totalDebit: FieldValue;
  totalCredit: FieldValue;
  differenceDrCr: FieldValue;
  makeDifferenceEntry: FieldValue;
  multiCurrency: FieldValue;
  totalAmountCurrency: FieldValue;
  totalAmount: FieldValue;
  totalAmountInWords: FieldValue;
  reference: FieldValue;
  clearanceDate: FieldValue;
  remark: FieldValue;
  paidLoan: FieldValue;
  interCompanyJournalEntryReference: FieldValue;
  billNo: FieldValue;
  billDate: FieldValue;
  dueDate: FieldValue;
  writeOff: FieldValue;
  writeOffBasedOn: FieldValue;
  getOutstandingInvoices: FieldValue;
  writeOffAmount: FieldValue;
  printingSettings: FieldValue;
  payToRecdFrom: FieldValue;
  letterHead: FieldValue;
  printHeading: FieldValue;
  moreInformation: FieldValue;
  modeOfPayment: FieldValue;
  paymentOrder: FieldValue;
  isOpening: FieldValue;
  stockEntry: FieldValue;
  subscriptionSection: FieldValue;
  autoRepeat: FieldValue;
  amendedFrom: FieldValue;
  
}
