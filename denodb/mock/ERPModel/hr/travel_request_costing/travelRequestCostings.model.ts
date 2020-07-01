// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: TravelRequestCosting
|--------------------------------------------------------------------------
|
| Model of travelRequestCostings
|
*/
import {
  DataTypes,
  Model
} from "https://deno.land/x/denodb/mod.ts";

export class TravelRequestCosting extends Model { 
  static table = "travelRequestCostings";
  static timestamps = true;
  
  static fields = {
    // fields list for ORM Maping
    id: { primaryKey: true, autoIncrement: true },
    expenseType: DataTypes.STRING,
    sponsoredAmount: DataTypes.STRING,
    fundedAmount: DataTypes.STRING,
    totalAmount: DataTypes.STRING,
    comments: DataTypes.STRING,
    
  };

  static meta = {
    // field meta information for UI render
    fieldProperty: [
      {
        
        key: 'expenseType',
      
        label: 'Expense Type',
      
        type: 'select',
      
        placeholder: 'Input Expense Type',
      
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
        
        key: 'sponsoredAmount',
      
        label: 'Sponsored Amount',
      
        type: 'input',
      
        placeholder: 'Input Sponsored Amount',
      
        options: '',
      
      },
      {
        
        key: 'fundedAmount',
      
        label: 'Funded Amount',
      
        type: 'input',
      
        placeholder: 'Input Funded Amount',
      
        options: '',
      
      },
      {
        
        key: 'totalAmount',
      
        label: 'Total Amount',
      
        type: 'input',
      
        placeholder: 'Input Total Amount',
      
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
        
        key: 'comments',
      
        label: 'Comments',
      
        type: 'input',
      
        placeholder: 'Input Comments',
      
        options: '',
      
      },
      
    ]
  };
} 
