// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: PaymentReconciliation
|--------------------------------------------------------------------------
|
| Model of paymentReconciliations
|
*/
import {
  DataTypes,
  Model
} from "https://deno.land/x/denodb/mod.ts";

export class PaymentReconciliation extends Model { 
  static table = "paymentReconciliations";
  static timestamps = true;
  
  static fields = {
    // fields list for ORM Maping
    id: { primaryKey: true, autoIncrement: true },
    company: DataTypes.STRING,
    partyType: DataTypes.STRING,
    party: DataTypes.STRING,
    receivablePayableAccount: DataTypes.STRING,
    bankCashAccount: DataTypes.STRING,
    fromInvoiceDate: DataTypes.STRING,
    toInvoiceDate: DataTypes.STRING,
    minimumInvoiceAmount: DataTypes.STRING,
    maximumInvoiceAmount: DataTypes.STRING,
    limit: DataTypes.STRING,
    getUnreconciledEntries: DataTypes.STRING,
    unreconciledPaymentDetails: DataTypes.STRING,
    payments: DataTypes.STRING,
    reconcile: DataTypes.STRING,
    invoiceJournalEntryDetails: DataTypes.STRING,
    invoices: DataTypes.STRING,
    
  };

  static meta = {
    // field meta information for UI render
    fieldProperty: [
      {
        key: 'company',
        label: 'Company',
        type: 'select',
        placeholder: 'Input Company',
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
        key: 'receivablePayableAccount',
        label: 'Receivable Payable Account',
        type: 'select',
        placeholder: 'Input Receivable Payable Account',
        options: '',
        
      },
      {
        key: 'bankCashAccount',
        label: 'Bank Cash Account',
        type: 'select',
        placeholder: 'Input Bank Cash Account',
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
        key: 'fromInvoiceDate',
        label: 'From Invoice Date',
        type: 'input',
        placeholder: 'Input From Invoice Date',
        options: '',
        
      },
      {
        key: 'toInvoiceDate',
        label: 'To Invoice Date',
        type: 'input',
        placeholder: 'Input To Invoice Date',
        options: '',
        
      },
      {
        key: 'minimumInvoiceAmount',
        label: 'Minimum Invoice Amount',
        type: 'input',
        placeholder: 'Input Minimum Invoice Amount',
        options: '',
        
      },
      {
        key: 'maximumInvoiceAmount',
        label: 'Maximum Invoice Amount',
        type: 'input',
        placeholder: 'Input Maximum Invoice Amount',
        options: '',
        
      },
      {
        key: 'limit',
        label: 'Limit',
        type: 'input',
        placeholder: 'Input Limit',
        options: '',
        
      },
      {
        key: 'getUnreconciledEntries',
        label: 'Get Unreconciled Entries',
        type: 'input',
        placeholder: 'Input Get Unreconciled Entries',
        options: '',
        
      },
      {
        key: 'unreconciledPaymentDetails',
        label: 'Unreconciled Payment Details',
        type: 'input',
        placeholder: 'Input Unreconciled Payment Details',
        options: '',
        
      },
      {
        key: 'payments',
        label: 'Payments',
        type: 'select',
        placeholder: 'Input Payments',
        options: '',
        
      },
      {
        key: 'reconcile',
        label: 'Reconcile',
        type: 'input',
        placeholder: 'Input Reconcile',
        options: '',
        
      },
      {
        key: 'invoiceJournalEntryDetails',
        label: 'Invoice Journal Entry Details',
        type: 'input',
        placeholder: 'Input Invoice Journal Entry Details',
        options: '',
        
      },
      {
        key: 'invoices',
        label: 'Invoices',
        type: 'select',
        placeholder: 'Input Invoices',
        options: '',
        
      },
      
    ]
  };
} 
