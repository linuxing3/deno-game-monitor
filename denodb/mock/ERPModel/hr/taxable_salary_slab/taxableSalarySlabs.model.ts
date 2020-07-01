// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: TaxableSalarySlab
|--------------------------------------------------------------------------
|
| Model of taxableSalarySlabs
|
*/
import {
  DataTypes,
  Model
} from "https://deno.land/x/denodb/mod.ts";

export class TaxableSalarySlab extends Model { 
  static table = "taxableSalarySlabs";
  static timestamps = true;
  
  static fields = {
    // fields list for ORM Maping
    id: { primaryKey: true, autoIncrement: true },
    fromAmount: DataTypes.STRING,
    toAmount: DataTypes.STRING,
    percentDeduction: DataTypes.STRING,
    condition: DataTypes.STRING,
    
  };

  static meta = {
    // field meta information for UI render
    fieldProperty: [
      {
        key: 'fromAmount',
        label: 'From Amount',
        type: 'input',
        placeholder: 'Input From Amount',
        options: '',
        
      },
      {
        key: 'toAmount',
        label: 'To Amount',
        type: 'input',
        placeholder: 'Input To Amount',
        options: '',
        
      },
      {
        key: 'percentDeduction',
        label: 'Percent Deduction',
        type: 'input',
        placeholder: 'Input Percent Deduction',
        options: '',
        
      },
      {
        key: 'condition',
        label: 'Condition',
        type: 'input',
        placeholder: 'Input Condition',
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
        key: '',
        label: '',
        type: 'select',
        placeholder: 'Input ',
        options: '[object Object],[object Object],[object Object],[object Object],[object Object],[object Object]',
        
      },
      
    ]
  };
} 
