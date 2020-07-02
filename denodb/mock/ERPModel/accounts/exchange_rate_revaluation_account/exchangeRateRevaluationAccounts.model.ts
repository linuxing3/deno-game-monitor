// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: ExchangeRateRevaluationAccount
|--------------------------------------------------------------------------
|
| Model Class and Interface of exchangeRateRevaluationAccounts
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


export class ExchangeRateRevaluationAccount extends Model { 
  static table = "exchangeRateRevaluationAccounts";
  static timestamps = true;
  
  static fields: ModelFields = {
    // fields list for ORM Maping
    id: { primaryKey: true, autoIncrement: true },
    account: DataTypes.STRING,
    partyType: DataTypes.STRING,
    party: DataTypes.STRING,
    accountCurrency: DataTypes.STRING,
    balanceInAccountCurrency: DataTypes.STRING,
    currentExchangeRate: DataTypes.STRING,
    balanceInBaseCurrency: DataTypes.STRING,
    newExchangeRate: DataTypes.STRING,
    newBalanceInBaseCurrency: DataTypes.STRING,
    gainLoss: DataTypes.STRING,
    
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
        key: '',
        label: '',
        type: 'input',
        placeholder: 'Input ',
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
        key: 'balanceInAccountCurrency',
        label: 'Balance In Account Currency',
        type: 'input',
        placeholder: 'Input Balance In Account Currency',
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
        key: 'currentExchangeRate',
        label: 'Current Exchange Rate',
        type: 'input',
        placeholder: 'Input Current Exchange Rate',
        options: '',
        
      },
      {
        key: 'balanceInBaseCurrency',
        label: 'Balance In Base Currency',
        type: 'input',
        placeholder: 'Input Balance In Base Currency',
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
        key: 'newExchangeRate',
        label: 'New Exchange Rate',
        type: 'input',
        placeholder: 'Input New Exchange Rate',
        options: '',
        
      },
      {
        key: 'newBalanceInBaseCurrency',
        label: 'New Balance In Base Currency',
        type: 'input',
        placeholder: 'Input New Balance In Base Currency',
        options: '',
        
      },
      {
        key: 'gainLoss',
        label: 'Gain Loss',
        type: 'input',
        placeholder: 'Input Gain Loss',
        options: '',
        
      },
      
    ]
  };
}

export interface IExchangeRateRevaluationAccount {
  id: FieldValue;
  account: FieldValue;
  partyType: FieldValue;
  party: FieldValue;
  accountCurrency: FieldValue;
  balanceInAccountCurrency: FieldValue;
  currentExchangeRate: FieldValue;
  balanceInBaseCurrency: FieldValue;
  newExchangeRate: FieldValue;
  newBalanceInBaseCurrency: FieldValue;
  gainLoss: FieldValue;
  
}
