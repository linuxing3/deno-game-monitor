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
import {
  ModelFields,
} from "https://deno.land/x/denodb/lib/model.ts";


export class JournalEntryAccount extends Model { 
  static table = "journalEntryAccounts";
  static timestamps = true;
  
  static fields: ModelFields = {
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

  static meta = {
    // field meta information for UI render
    fieldProperty: [
      {
        key: 'account',
        label: 'Account',
        type: 'select',
        placeholder: 'Input Account',
        options: '',
        
      },
      {
        key: 'accountType',
        label: 'Account Type',
        type: 'input',
        placeholder: 'Input Account Type',
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
        key: 'costCenter',
        label: 'Cost Center',
        type: 'select',
        placeholder: 'Input Cost Center',
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
        key: 'partyBalance',
        label: 'Party Balance',
        type: 'select',
        placeholder: 'Input Party Balance',
        options: '',
        
      },
      {
        key: 'currency',
        label: 'Currency',
        type: 'input',
        placeholder: 'Input Currency',
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
        key: '',
        label: '',
        type: 'input',
        placeholder: 'Input ',
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
        key: 'amount',
        label: 'Amount',
        type: 'input',
        placeholder: 'Input Amount',
        options: '',
        
      },
      {
        key: 'debit',
        label: 'Debit',
        type: 'select',
        placeholder: 'Input Debit',
        options: '',
        
      },
      {
        key: 'debitInCompanyCurrency',
        label: 'Debit In Company Currency',
        type: 'select',
        placeholder: 'Input Debit In Company Currency',
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
        key: 'credit',
        label: 'Credit',
        type: 'select',
        placeholder: 'Input Credit',
        options: '',
        
      },
      {
        key: 'creditInCompanyCurrency',
        label: 'Credit In Company Currency',
        type: 'select',
        placeholder: 'Input Credit In Company Currency',
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
        key: 'referenceType',
        label: 'Reference Type',
        type: 'select',
        placeholder: 'Input Reference Type',
        options: '[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object]',
        
      },
      {
        key: 'referenceName',
        label: 'Reference Name',
        type: 'select',
        placeholder: 'Input Reference Name',
        options: '',
        
      },
      {
        key: 'referenceDueDate',
        label: 'Reference Due Date',
        type: 'input',
        placeholder: 'Input Reference Due Date',
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
        key: '',
        label: '',
        type: 'input',
        placeholder: 'Input ',
        options: '',
        
      },
      {
        key: 'isAdvance',
        label: 'Is Advance',
        type: 'select',
        placeholder: 'Input Is Advance',
        options: '[object Object]',
        
      },
      {
        key: 'userRemark',
        label: 'User Remark',
        type: 'input',
        placeholder: 'Input User Remark',
        options: '',
        
      },
      {
        key: 'againstAccount',
        label: 'Against Account',
        type: 'input',
        placeholder: 'Input Against Account',
        options: '',
        
      },
      
    ]
  };
}
