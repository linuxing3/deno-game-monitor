// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: PaymentEntry
|--------------------------------------------------------------------------
|
| Model Class and Interface of paymentEntries
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


export class PaymentEntry extends Model { 
  static table = "paymentEntries";
  static timestamps = true;
  
  static fields: ModelFields = {
    // fields list for ORM Maping
    id: { primaryKey: true, autoIncrement: true },
    typeOfPayment: DataTypes.STRING,
    series: DataTypes.STRING,
    paymentType: DataTypes.STRING,
    postingDate: DataTypes.STRING,
    company: DataTypes.STRING,
    costCenter: DataTypes.STRING,
    modeOfPayment: DataTypes.STRING,
    paymentFromTo: DataTypes.STRING,
    partyType: DataTypes.STRING,
    party: DataTypes.STRING,
    partyName: DataTypes.STRING,
    bankAccount: DataTypes.STRING,
    email: DataTypes.STRING,
    contact: DataTypes.STRING,
    accounts: DataTypes.STRING,
    partyBalance: DataTypes.STRING,
    accountPaidFrom: DataTypes.STRING,
    accountCurrency: DataTypes.STRING,
    accountBalance: DataTypes.STRING,
    accountPaidTo: DataTypes.STRING,
    amount: DataTypes.STRING,
    paidAmount: DataTypes.STRING,
    paidAmountCompanyCurrency: DataTypes.STRING,
    receivedAmount: DataTypes.STRING,
    exchangeRate: DataTypes.STRING,
    receivedAmountCompanyCurrency: DataTypes.STRING,
    reference: DataTypes.STRING,
    allocatePaymentAmount: DataTypes.STRING,
    paymentReferences: DataTypes.STRING,
    writeoff: DataTypes.STRING,
    totalAllocatedAmount: DataTypes.STRING,
    totalAllocatedAmountCompanyCurrency: DataTypes.STRING,
    setExchangeGainLoss: DataTypes.STRING,
    unallocatedAmount: DataTypes.STRING,
    differenceAmountCompanyCurrency: DataTypes.STRING,
    writeOffDifferenceAmount: DataTypes.STRING,
    deductionsOrLoss: DataTypes.STRING,
    paymentDeductionsOrLoss: DataTypes.STRING,
    transactionId: DataTypes.STRING,
    chequeReferenceNo: DataTypes.STRING,
    chequeReferenceDate: DataTypes.STRING,
    clearanceDate: DataTypes.STRING,
    moreInformation: DataTypes.STRING,
    project: DataTypes.STRING,
    remarks: DataTypes.STRING,
    letterHead: DataTypes.STRING,
    printHeading: DataTypes.STRING,
    bank: DataTypes.STRING,
    bankAccountNo: DataTypes.STRING,
    paymentOrder: DataTypes.STRING,
    subscriptionSection: DataTypes.STRING,
    autoRepeat: DataTypes.STRING,
    amendedFrom: DataTypes.STRING,
    title: DataTypes.STRING,
    
  };

  static meta = {
    // field meta information for UI render
    fieldProperty: [
      {
        key: 'typeOfPayment',
        label: 'Type Of Payment',
        type: 'input',
        placeholder: 'Input Type Of Payment',
        options: '',
        
      },
      {
        key: 'series',
        label: 'Series',
        type: 'select',
        placeholder: 'Input Series',
        options: '',
        
      },
      {
        key: 'paymentType',
        label: 'Payment Type',
        type: 'select',
        placeholder: 'Input Payment Type',
        options: '[object Object],[object Object]',
        
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
        key: 'costCenter',
        label: 'Cost Center',
        type: 'select',
        placeholder: 'Input Cost Center',
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
        key: 'paymentFromTo',
        label: 'Payment From To',
        type: 'input',
        placeholder: 'Input Payment From To',
        options: '',
        
      },
      {
        key: 'partyType',
        label: 'Party Type',
        type: 'select',
        placeholder: 'Input Party Type',
        options: '',
        
      },
      {
        key: 'party',
        label: 'Party',
        type: 'select',
        placeholder: 'Input Party',
        options: '',
        
      },
      {
        key: 'partyName',
        label: 'Party Name',
        type: 'input',
        placeholder: 'Input Party Name',
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
        key: 'bankAccount',
        label: 'Bank Account',
        type: 'select',
        placeholder: 'Input Bank Account',
        options: '',
        
      },
      {
        key: 'email',
        label: 'Email',
        type: 'select',
        placeholder: 'Input Email',
        options: '',
        
      },
      {
        key: 'contact',
        label: 'Contact',
        type: 'select',
        placeholder: 'Input Contact',
        options: '',
        
      },
      {
        key: 'accounts',
        label: 'Accounts',
        type: 'input',
        placeholder: 'Input Accounts',
        options: '',
        
      },
      {
        key: 'partyBalance',
        label: 'Party Balance',
        type: 'input',
        placeholder: 'Input Party Balance',
        options: '',
        
      },
      {
        key: 'accountPaidFrom',
        label: 'Account Paid From',
        type: 'select',
        placeholder: 'Input Account Paid From',
        options: '',
        
      },
      {
        key: 'accountCurrency',
        label: 'Account Currency',
        type: 'select',
        placeholder: 'Input Account Currency',
        options: '',
        
      },
      {
        key: 'accountBalance',
        label: 'Account Balance',
        type: 'select',
        placeholder: 'Input Account Balance',
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
        key: 'accountPaidTo',
        label: 'Account Paid To',
        type: 'select',
        placeholder: 'Input Account Paid To',
        options: '',
        
      },
      {
        key: 'amount',
        label: 'Amount',
        type: 'input',
        placeholder: 'Input Amount',
        options: '',
        
      },
      {
        key: 'paidAmount',
        label: 'Paid Amount',
        type: 'select',
        placeholder: 'Input Paid Amount',
        options: '',
        
      },
      {
        key: 'paidAmountCompanyCurrency',
        label: 'Paid Amount Company Currency',
        type: 'select',
        placeholder: 'Input Paid Amount Company Currency',
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
        key: 'receivedAmount',
        label: 'Received Amount',
        type: 'select',
        placeholder: 'Input Received Amount',
        options: '',
        
      },
      {
        key: 'exchangeRate',
        label: 'Exchange Rate',
        type: 'input',
        placeholder: 'Input Exchange Rate',
        options: '',
        
      },
      {
        key: 'receivedAmountCompanyCurrency',
        label: 'Received Amount Company Currency',
        type: 'select',
        placeholder: 'Input Received Amount Company Currency',
        options: '',
        
      },
      {
        key: 'reference',
        label: 'Reference',
        type: 'input',
        placeholder: 'Input Reference',
        options: '',
        
      },
      {
        key: 'allocatePaymentAmount',
        label: 'Allocate Payment Amount',
        type: 'input',
        placeholder: 'Input Allocate Payment Amount',
        options: '',
        
      },
      {
        key: 'paymentReferences',
        label: 'Payment References',
        type: 'select',
        placeholder: 'Input Payment References',
        options: '',
        
      },
      {
        key: 'writeoff',
        label: 'Writeoff',
        type: 'input',
        placeholder: 'Input Writeoff',
        options: '',
        
      },
      {
        key: 'totalAllocatedAmount',
        label: 'Total Allocated Amount',
        type: 'input',
        placeholder: 'Input Total Allocated Amount',
        options: '',
        
      },
      {
        key: 'totalAllocatedAmountCompanyCurrency',
        label: 'Total Allocated Amount Company Currency',
        type: 'select',
        placeholder: 'Input Total Allocated Amount Company Currency',
        options: '',
        
      },
      {
        key: 'setExchangeGainLoss',
        label: 'Set Exchange Gain Loss',
        type: 'input',
        placeholder: 'Input Set Exchange Gain Loss',
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
        key: 'unallocatedAmount',
        label: 'Unallocated Amount',
        type: 'input',
        placeholder: 'Input Unallocated Amount',
        options: '',
        
      },
      {
        key: 'differenceAmountCompanyCurrency',
        label: 'Difference Amount Company Currency',
        type: 'select',
        placeholder: 'Input Difference Amount Company Currency',
        options: '',
        
      },
      {
        key: 'writeOffDifferenceAmount',
        label: 'Write Off Difference Amount',
        type: 'input',
        placeholder: 'Input Write Off Difference Amount',
        options: '',
        
      },
      {
        key: 'deductionsOrLoss',
        label: 'Deductions Or Loss',
        type: 'input',
        placeholder: 'Input Deductions Or Loss',
        options: '',
        
      },
      {
        key: 'paymentDeductionsOrLoss',
        label: 'Payment Deductions Or Loss',
        type: 'select',
        placeholder: 'Input Payment Deductions Or Loss',
        options: '',
        
      },
      {
        key: 'transactionId',
        label: 'Transaction Id',
        type: 'input',
        placeholder: 'Input Transaction Id',
        options: '',
        
      },
      {
        key: 'chequeReferenceNo',
        label: 'Cheque Reference No',
        type: 'input',
        placeholder: 'Input Cheque Reference No',
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
        key: 'chequeReferenceDate',
        label: 'Cheque Reference Date',
        type: 'input',
        placeholder: 'Input Cheque Reference Date',
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
        key: 'moreInformation',
        label: 'More Information',
        type: 'input',
        placeholder: 'Input More Information',
        options: '',
        
      },
      {
        key: 'project',
        label: 'Project',
        type: 'select',
        placeholder: 'Input Project',
        options: '',
        
      },
      {
        key: 'remarks',
        label: 'Remarks',
        type: 'input',
        placeholder: 'Input Remarks',
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
        key: 'bank',
        label: 'Bank',
        type: 'input',
        placeholder: 'Input Bank',
        options: '',
        
      },
      {
        key: 'bankAccountNo',
        label: 'Bank Account No',
        type: 'input',
        placeholder: 'Input Bank Account No',
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
      {
        key: 'title',
        label: 'Title',
        type: 'input',
        placeholder: 'Input Title',
        options: '',
        
      },
      
    ]
  };
}

export interface IPaymentEntry {
  id: FieldValue;
  typeOfPayment: FieldValue;
  series: FieldValue;
  paymentType: FieldValue;
  postingDate: FieldValue;
  company: FieldValue;
  costCenter: FieldValue;
  modeOfPayment: FieldValue;
  paymentFromTo: FieldValue;
  partyType: FieldValue;
  party: FieldValue;
  partyName: FieldValue;
  bankAccount: FieldValue;
  email: FieldValue;
  contact: FieldValue;
  accounts: FieldValue;
  partyBalance: FieldValue;
  accountPaidFrom: FieldValue;
  accountCurrency: FieldValue;
  accountBalance: FieldValue;
  accountPaidTo: FieldValue;
  amount: FieldValue;
  paidAmount: FieldValue;
  paidAmountCompanyCurrency: FieldValue;
  receivedAmount: FieldValue;
  exchangeRate: FieldValue;
  receivedAmountCompanyCurrency: FieldValue;
  reference: FieldValue;
  allocatePaymentAmount: FieldValue;
  paymentReferences: FieldValue;
  writeoff: FieldValue;
  totalAllocatedAmount: FieldValue;
  totalAllocatedAmountCompanyCurrency: FieldValue;
  setExchangeGainLoss: FieldValue;
  unallocatedAmount: FieldValue;
  differenceAmountCompanyCurrency: FieldValue;
  writeOffDifferenceAmount: FieldValue;
  deductionsOrLoss: FieldValue;
  paymentDeductionsOrLoss: FieldValue;
  transactionId: FieldValue;
  chequeReferenceNo: FieldValue;
  chequeReferenceDate: FieldValue;
  clearanceDate: FieldValue;
  moreInformation: FieldValue;
  project: FieldValue;
  remarks: FieldValue;
  letterHead: FieldValue;
  printHeading: FieldValue;
  bank: FieldValue;
  bankAccountNo: FieldValue;
  paymentOrder: FieldValue;
  subscriptionSection: FieldValue;
  autoRepeat: FieldValue;
  amendedFrom: FieldValue;
  title: FieldValue;
  
}
