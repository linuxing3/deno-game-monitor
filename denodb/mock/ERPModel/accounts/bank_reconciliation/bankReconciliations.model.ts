// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: BankReconciliation
|--------------------------------------------------------------------------
|
| Model Class and Interface of bankReconciliations
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


export class BankReconciliation extends Model { 
  static table = "bankReconciliations";
  static timestamps = true;
  
  static fields: ModelFields = {
    // fields list for ORM Maping
    id: { primaryKey: true, autoIncrement: true },
    bankAccount: DataTypes.STRING,
    accountCurrency: DataTypes.STRING,
    fromDate: DataTypes.STRING,
    toDate: DataTypes.STRING,
    includeReconciledEntries: DataTypes.STRING,
    includePosTransactions: DataTypes.STRING,
    getPaymentEntries: DataTypes.STRING,
    paymentEntries: DataTypes.STRING,
    updateClearanceDate: DataTypes.STRING,
    totalAmount: DataTypes.STRING,
    
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
        key: 'accountCurrency',
        label: 'Account Currency',
        type: 'select',
        placeholder: 'Input Account Currency',
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
        key: 'includeReconciledEntries',
        label: 'Include Reconciled Entries',
        type: 'input',
        placeholder: 'Input Include Reconciled Entries',
        options: '',
        
      },
      {
        key: 'includePosTransactions',
        label: 'Include Pos Transactions',
        type: 'input',
        placeholder: 'Input Include Pos Transactions',
        options: '',
        
      },
      {
        key: 'getPaymentEntries',
        label: 'Get Payment Entries',
        type: 'input',
        placeholder: 'Input Get Payment Entries',
        options: '',
        
      },
      {
        key: 'paymentEntries',
        label: 'Payment Entries',
        type: 'select',
        placeholder: 'Input Payment Entries',
        options: '',
        
      },
      {
        key: 'updateClearanceDate',
        label: 'Update Clearance Date',
        type: 'input',
        placeholder: 'Input Update Clearance Date',
        options: '',
        
      },
      {
        key: 'totalAmount',
        label: 'Total Amount',
        type: 'select',
        placeholder: 'Input Total Amount',
        options: '',
        
      },
      
    ]
  };
}

export interface IBankReconciliation {
  id: FieldValue;
  bankAccount: FieldValue;
  accountCurrency: FieldValue;
  fromDate: FieldValue;
  toDate: FieldValue;
  includeReconciledEntries: FieldValue;
  includePosTransactions: FieldValue;
  getPaymentEntries: FieldValue;
  paymentEntries: FieldValue;
  updateClearanceDate: FieldValue;
  totalAmount: FieldValue;
  
}
