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
import {
  ModelFields,
} from "https://deno.land/x/denodb/lib/model.ts";


export class BankStatementTransactionEntry extends Model { 
  static table = "bankStatementTransactionEntries";
  static timestamps = true;
  
  static fields: ModelFields = {
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

  static meta = {
    // field meta information for UI render
    fieldProperty: [
      {
        key: 'bankAccount',
        label: 'Bank Account',
        type: 'select',
        placeholder: 'Input Bank Account',
        options: '',
        
      },
      {
        key: 'fromDate',
        label: 'From Date',
        type: 'input',
        placeholder: 'Input From Date',
        options: '',
        
      },
      {
        key: 'toDate',
        label: 'To Date',
        type: 'input',
        placeholder: 'Input To Date',
        options: '',
        
      },
      {
        key: 'bankStatementSettings',
        label: 'Bank Statement Settings',
        type: 'select',
        placeholder: 'Input Bank Statement Settings',
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
        key: 'bank',
        label: 'Bank',
        type: 'select',
        placeholder: 'Input Bank',
        options: '',
        
      },
      {
        key: 'receivableAccount',
        label: 'Receivable Account',
        type: 'select',
        placeholder: 'Input Receivable Account',
        options: '',
        
      },
      {
        key: 'payableAccount',
        label: 'Payable Account',
        type: 'select',
        placeholder: 'Input Payable Account',
        options: '',
        
      },
      {
        key: 'bankStatement',
        label: 'Bank Statement',
        type: 'input',
        placeholder: 'Input Bank Statement',
        options: '',
        
      },
      {
        key: 'bankTransactionEntries',
        label: 'Bank Transaction Entries',
        type: 'input',
        placeholder: 'Input Bank Transaction Entries',
        options: '',
        
      },
      {
        key: 'newTransactions',
        label: 'New Transactions',
        type: 'select',
        placeholder: 'Input New Transactions',
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
        key: 'matchTransactionToInvoices',
        label: 'Match Transaction To Invoices',
        type: 'input',
        placeholder: 'Input Match Transaction To Invoices',
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
        key: 'createNewPaymentJournalEntry',
        label: 'Create New Payment Journal Entry',
        type: 'input',
        placeholder: 'Input Create New Payment Journal Entry',
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
        key: 'submitReconcilePayments',
        label: 'Submit Reconcile Payments',
        type: 'input',
        placeholder: 'Input Submit Reconcile Payments',
        options: '',
        
      },
      {
        key: 'matchingInvoices',
        label: 'Matching Invoices',
        type: 'input',
        placeholder: 'Input Matching Invoices',
        options: '',
        
      },
      {
        key: 'paymentInvoiceItems',
        label: 'Payment Invoice Items',
        type: 'select',
        placeholder: 'Input Payment Invoice Items',
        options: '',
        
      },
      {
        key: 'reconciledTransactions',
        label: 'Reconciled Transactions',
        type: 'input',
        placeholder: 'Input Reconciled Transactions',
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
