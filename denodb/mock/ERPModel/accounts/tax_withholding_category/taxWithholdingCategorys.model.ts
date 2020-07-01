// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: TaxWithholdingCategory
|--------------------------------------------------------------------------
|
| Model of taxWithholdingCategorys
|
*/
import {
  DataTypes,
  Model
} from "https://deno.land/x/denodb/mod.ts";

export class TaxWithholdingCategory extends Model { 
  static table = "taxWithholdingCategorys";
  static timestamps = true;
  
  static fields = {
    // fields list for ORM Maping
    id: { primaryKey: true, autoIncrement: true },
    categoryName: DataTypes.STRING,
    taxWithholdingRates: DataTypes.STRING,
    rates: DataTypes.STRING,
    accountDetails: DataTypes.STRING,
    accounts: DataTypes.STRING,
    
  };

  static meta = {
    // field meta information for UI render
    fieldProperty: [
      {
        
        key: 'categoryName',
      
        label: 'Category Name',
      
        type: 'input',
      
        placeholder: 'Input Category Name',
      
        options: '',
      
      },
      {
        
        key: 'taxWithholdingRates',
      
        label: 'Tax Withholding Rates',
      
        type: 'input',
      
        placeholder: 'Input Tax Withholding Rates',
      
        options: '',
      
      },
      {
        
        key: 'rates',
      
        label: 'Rates',
      
        type: 'select',
      
        placeholder: 'Input Rates',
      
        options: '',
      
      },
      {
        
        key: 'accountDetails',
      
        label: 'Account Details',
      
        type: 'input',
      
        placeholder: 'Input Account Details',
      
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
