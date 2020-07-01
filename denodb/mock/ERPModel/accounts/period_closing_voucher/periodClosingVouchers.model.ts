// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: PeriodClosingVoucher
|--------------------------------------------------------------------------
|
| Model of periodClosingVouchers
|
*/
import {
  DataTypes,
  Model
} from "https://deno.land/x/denodb/mod.ts";

export class PeriodClosingVoucher extends Model { 
  static table = "periodClosingVouchers";
  static timestamps = true;
  
  static fields = {
    // fields list for ORM Maping
    id: { primaryKey: true, autoIncrement: true },
    transactionDate: DataTypes.STRING,
    postingDate: DataTypes.STRING,
    closingFiscalYear: DataTypes.STRING,
    amendedFrom: DataTypes.STRING,
    company: DataTypes.STRING,
    closingAccountHead: DataTypes.STRING,
    remarks: DataTypes.STRING,
    
  };

  static meta = {
    // field meta information for UI render
    fieldProperty: [
      {
        
        key: 'transactionDate',
      
        label: 'Transaction Date',
      
        type: 'input',
      
        placeholder: 'Input Transaction Date',
      
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
        
        key: 'closingFiscalYear',
      
        label: 'Closing Fiscal Year',
      
        type: 'select',
      
        placeholder: 'Input Closing Fiscal Year',
      
        options: '',
      
      },
      {
        
        key: 'amendedFrom',
      
        label: 'Amended From',
      
        type: 'select',
      
        placeholder: 'Input Amended From',
      
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
        
        key: 'closingAccountHead',
      
        label: 'Closing Account Head',
      
        type: 'select',
      
        placeholder: 'Input Closing Account Head',
      
        options: '',
      
      },
      {
        
        key: 'remarks',
      
        label: 'Remarks',
      
        type: 'input',
      
        placeholder: 'Input Remarks',
      
        options: '',
      
      },
      
    ]
  };
} 
