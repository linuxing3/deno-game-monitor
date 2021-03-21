// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: ExpenseClaimDetail
|--------------------------------------------------------------------------
|
| Model Class and Interface of expenseClaimDetails
|
*/
import {
  DataTypes,
  Model
} from "https://deno.land/x/denodb/mod.ts";
import {
  ModelFields,
} from "https://deno.land/x/denodb/lib/model.ts";


export class ExpenseClaimDetail extends Model { 
  static table = "expenseClaimDetails";
  static timestamps = true;
  
  static fields: ModelFields = {
    // fields list for ORM Maping
    id: { primaryKey: true, autoIncrement: true },
    expenseDate: DataTypes.STRING,
    expenseClaimType: DataTypes.STRING,
    defaultAccount: DataTypes.STRING,
    description: DataTypes.STRING,
    claimAmount: DataTypes.STRING,
    sanctionedAmount: DataTypes.STRING,
    
  };

  static meta = {
    // field meta information for UI render
    fieldProperty: [
      {
        key: 'expenseDate',
        label: 'Expense Date',
        type: 'input',
        placeholder: 'Input Expense Date',
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
        key: 'expenseClaimType',
        label: 'Expense Claim Type',
        type: 'select',
        placeholder: 'Input Expense Claim Type',
        options: '',
        
      },
      {
        key: 'defaultAccount',
        label: 'Default Account',
        type: 'select',
        placeholder: 'Input Default Account',
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
        key: 'description',
        label: 'Description',
        type: 'input',
        placeholder: 'Input Description',
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
        key: 'claimAmount',
        label: 'Claim Amount',
        type: 'select',
        placeholder: 'Input Claim Amount',
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
        key: 'sanctionedAmount',
        label: 'Sanctioned Amount',
        type: 'select',
        placeholder: 'Input Sanctioned Amount',
        options: '',
        
      },
      
    ]
  };
}
