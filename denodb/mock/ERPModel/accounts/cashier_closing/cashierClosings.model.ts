// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: CashierClosing
|--------------------------------------------------------------------------
|
| Model of cashierClosings
|
*/
import {
  DataTypes,
  Model
} from "https://deno.land/x/denodb/mod.ts";

export class CashierClosing extends Model { 
  static table = "cashierClosings";
  static timestamps = true;
  
  static fields = {
    // fields list for ORM Maping
    id: { primaryKey: true, autoIncrement: true },
    
    series: DataTypes.STRING,
    
    user: DataTypes.STRING,
    
    date: DataTypes.STRING,
    
    fromTime: DataTypes.STRING,
    
    toTime: DataTypes.STRING,
    
    expense: DataTypes.STRING,
    
    custody: DataTypes.STRING,
    
    returns: DataTypes.STRING,
    
    outstandingAmount: DataTypes.STRING,
    
    payments: DataTypes.STRING,
    
    netAmount: DataTypes.STRING,
    
    amendedFrom: DataTypes.STRING,
    
  };

  static meta = {
    // field meta information for UI render
    fieldProperty: [
      {
        key: 'series',
      
        label: 'Series',
      
        type: 'select',
      
        placeholder: 'Input Series',
      
        options: '',
      },{
        key: 'user',
      
        label: 'User',
      
        type: 'select',
      
        placeholder: 'Input User',
      
        options: '',
      },{
        key: 'date',
      
        label: 'Date',
      
        type: 'input',
      
        placeholder: 'Input Date',
      
        options: '',
      },{
        key: 'fromTime',
      
        label: 'From Time',
      
        type: 'input',
      
        placeholder: 'Input From Time',
      
        options: '',
      },{
        key: 'toTime',
      
        label: 'To Time',
      
        type: 'input',
      
        placeholder: 'Input To Time',
      
        options: '',
      },{
        key: 'expense',
      
        label: 'Expense',
      
        type: 'input',
      
        placeholder: 'Input Expense',
      
        options: '',
      },{
        key: 'custody',
      
        label: 'Custody',
      
        type: 'input',
      
        placeholder: 'Input Custody',
      
        options: '',
      },{
        key: 'returns',
      
        label: 'Returns',
      
        type: 'input',
      
        placeholder: 'Input Returns',
      
        options: '',
      },{
        key: 'outstandingAmount',
      
        label: 'Outstanding Amount',
      
        type: 'input',
      
        placeholder: 'Input Outstanding Amount',
      
        options: '',
      },{
        key: 'payments',
      
        label: 'Payments',
      
        type: 'select',
      
        placeholder: 'Input Payments',
      
        options: '',
      },{
        key: 'netAmount',
      
        label: 'Net Amount',
      
        type: 'input',
      
        placeholder: 'Input Net Amount',
      
        options: '',
      },{
        key: 'amendedFrom',
      
        label: 'Amended From',
      
        type: 'select',
      
        placeholder: 'Input Amended From',
      
        options: '',
      },
    ]
  };
} 
