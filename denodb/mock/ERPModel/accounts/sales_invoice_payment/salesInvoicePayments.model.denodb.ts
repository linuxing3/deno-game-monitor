// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: SalesInvoicePayment
|--------------------------------------------------------------------------
|
| Model Class and Interface of salesInvoicePayments
|
*/
import {
  DataTypes,
  Model
} from "https://deno.land/x/denodb/mod.ts";


export class SalesInvoicePayment extends Model { 
  static table = "salesInvoicePayments";
  static timestamps = true;
  
  static fields = {
    // fields list for ORM Maping
    id: { primaryKey: true, autoIncrement: true },
    default: DataTypes.STRING,
    modeOfPayment: DataTypes.STRING,
    amount: DataTypes.STRING,
    account: DataTypes.STRING,
    type: DataTypes.STRING,
    baseAmountCompanyCurrency: DataTypes.STRING,
    clearanceDate: DataTypes.STRING,
    
  };

  static meta = {
    // field meta information for UI render
    fieldProperty: [
      {
        key: 'default',
        label: 'Default',
        type: 'input',
        placeholder: 'Input Default',
        options: '',
        
      },
      {
        key: 'modeOfPayment',
        label: 'Mode Of Payment',
        type: 'select',
        placeholder: 'Input Mode Of Payment',
        options: '',
        
      },
      {
        key: 'amount',
        label: 'Amount',
        type: 'select',
        placeholder: 'Input Amount',
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
        key: 'account',
        label: 'Account',
        type: 'select',
        placeholder: 'Input Account',
        options: '',
        
      },
      {
        key: 'type',
        label: 'Type',
        type: 'input',
        placeholder: 'Input Type',
        options: '',
        
      },
      {
        key: 'baseAmountCompanyCurrency',
        label: 'Base Amount Company Currency',
        type: 'select',
        placeholder: 'Input Base Amount Company Currency',
        options: '',
        
      },
      {
        key: 'clearanceDate',
        label: 'Clearance Date',
        type: 'input',
        placeholder: 'Input Clearance Date',
        options: '',
        
      },
      
    ]
  };
}
