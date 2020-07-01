// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: ExpenseClaimType
|--------------------------------------------------------------------------
|
| Model of expenseClaimTypes
|
*/
import {
  DataTypes,
  Model
} from "https://deno.land/x/denodb/mod.ts";

export class ExpenseClaimType extends Model { 
  static table = "expenseClaimTypes";
  static timestamps = true;
  
  static fields = {
    // fields list for ORM Maping
    id: { primaryKey: true, autoIncrement: true },
    expenseClaimType: DataTypes.STRING,
    description: DataTypes.STRING,
    accounts: DataTypes.STRING,
    
  };

  static meta = {
    // field meta information for UI render
    fieldProperty: [
      {
        key: 'expenseClaimType',
        label: 'Expense Claim Type',
        type: 'input',
        placeholder: 'Input Expense Claim Type',
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
        key: 'accounts',
        label: 'Accounts',
        type: 'select',
        placeholder: 'Input Accounts',
        options: '',
        
      },
      
    ]
  };
} 
