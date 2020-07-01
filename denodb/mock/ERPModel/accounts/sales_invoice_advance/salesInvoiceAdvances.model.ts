// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: SalesInvoiceAdvance
|--------------------------------------------------------------------------
|
| Model of salesInvoiceAdvances
|
*/
import {
  DataTypes,
  Model
} from "https://deno.land/x/denodb/mod.ts";

export class SalesInvoiceAdvance extends Model { 
  static table = "salesInvoiceAdvances";
  static timestamps = true;
  
  static fields = {
    // fields list for ORM Maping
    id: { primaryKey: true, autoIncrement: true },
    referenceType: DataTypes.STRING,
    referenceName: DataTypes.STRING,
    remarks: DataTypes.STRING,
    referenceRow: DataTypes.STRING,
    advanceAmount: DataTypes.STRING,
    allocatedAmount: DataTypes.STRING,
    
  };

  static meta = {
    // field meta information for UI render
    fieldProperty: [
      {
        key: 'referenceType',
        label: 'Reference Type',
        type: 'select',
        placeholder: 'Input Reference Type',
        options: '',
        
      },
      {
        key: 'referenceName',
        label: 'Reference Name',
        type: 'select',
        placeholder: 'Input Reference Name',
        options: '',
        
      },
      {
        key: 'remarks',
        label: 'Remarks',
        type: 'input',
        placeholder: 'Input Remarks',
        options: '',
        
      },
      {
        key: 'referenceRow',
        label: 'Reference Row',
        type: 'input',
        placeholder: 'Input Reference Row',
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
        key: 'advanceAmount',
        label: 'Advance Amount',
        type: 'select',
        placeholder: 'Input Advance Amount',
        options: '',
        
      },
      {
        key: 'allocatedAmount',
        label: 'Allocated Amount',
        type: 'select',
        placeholder: 'Input Allocated Amount',
        options: '',
        
      },
      
    ]
  };
} 
