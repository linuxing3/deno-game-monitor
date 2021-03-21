// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: ExpenseClaimAdvance
|--------------------------------------------------------------------------
|
| Model Class and Interface of expenseClaimAdvances
|
*/
import {
  DataTypes,
  Model
} from "https://deno.land/x/denodb/mod.ts";
import {
  ModelFields,
} from "https://deno.land/x/denodb/lib/model.ts";


export class ExpenseClaimAdvance extends Model { 
  static table = "expenseClaimAdvances";
  static timestamps = true;
  
  static fields: ModelFields = {
    // fields list for ORM Maping
    id: { primaryKey: true, autoIncrement: true },
    employeeAdvance: DataTypes.STRING,
    postingDate: DataTypes.STRING,
    advancePaid: DataTypes.STRING,
    unclaimedAmount: DataTypes.STRING,
    allocatedAmount: DataTypes.STRING,
    advanceAccount: DataTypes.STRING,
    
  };

  static meta = {
    // field meta information for UI render
    fieldProperty: [
      {
        key: 'employeeAdvance',
        label: 'Employee Advance',
        type: 'select',
        placeholder: 'Input Employee Advance',
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
        key: 'advancePaid',
        label: 'Advance Paid',
        type: 'select',
        placeholder: 'Input Advance Paid',
        options: '',
        
      },
      {
        key: 'unclaimedAmount',
        label: 'Unclaimed Amount',
        type: 'select',
        placeholder: 'Input Unclaimed Amount',
        options: '',
        
      },
      {
        key: 'allocatedAmount',
        label: 'Allocated Amount',
        type: 'select',
        placeholder: 'Input Allocated Amount',
        options: '',
        
      },
      {
        key: 'advanceAccount',
        label: 'Advance Account',
        type: 'select',
        placeholder: 'Input Advance Account',
        options: '',
        
      },
      
    ]
  };
}
