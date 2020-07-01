// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: ExchangeRateRevaluation
|--------------------------------------------------------------------------
|
| Model of exchangeRateRevaluations
|
*/
import {
  DataTypes,
  Model
} from "https://deno.land/x/denodb/mod.ts";

export class ExchangeRateRevaluation extends Model { 
  static table = "exchangeRateRevaluations";
  static timestamps = true;
  
  static fields = {
    // fields list for ORM Maping
    id: { primaryKey: true, autoIncrement: true },
    postingDate: DataTypes.STRING,
    company: DataTypes.STRING,
    getEntries: DataTypes.STRING,
    exchangeRateRevaluationAccount: DataTypes.STRING,
    totalGainLoss: DataTypes.STRING,
    amendedFrom: DataTypes.STRING,
    
  };

  static meta = {
    // field meta information for UI render
    fieldProperty: [
      {
        key: 'postingDate',
        label: 'Posting Date',
        type: 'input',
        placeholder: 'Input Posting Date',
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
        key: 'company',
        label: 'Company',
        type: 'select',
        placeholder: 'Input Company',
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
        key: 'getEntries',
        label: 'Get Entries',
        type: 'input',
        placeholder: 'Input Get Entries',
        options: '',
        
      },
      {
        key: 'exchangeRateRevaluationAccount',
        label: 'Exchange Rate Revaluation Account',
        type: 'select',
        placeholder: 'Input Exchange Rate Revaluation Account',
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
        key: 'totalGainLoss',
        label: 'Total Gain Loss',
        type: 'input',
        placeholder: 'Input Total Gain Loss',
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
