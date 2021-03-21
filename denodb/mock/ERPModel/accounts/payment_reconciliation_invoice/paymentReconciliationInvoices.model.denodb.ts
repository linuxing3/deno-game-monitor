// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: PaymentReconciliationInvoice
|--------------------------------------------------------------------------
|
| Model Class and Interface of paymentReconciliationInvoices
|
*/
import {
  DataTypes,
  Model
} from "https://deno.land/x/denodb/mod.ts";


export class PaymentReconciliationInvoice extends Model { 
  static table = "paymentReconciliationInvoices";
  static timestamps = true;
  
  static fields = {
    // fields list for ORM Maping
    id: { primaryKey: true, autoIncrement: true },
    invoiceType: DataTypes.STRING,
    invoiceNumber: DataTypes.STRING,
    invoiceDate: DataTypes.STRING,
    amount: DataTypes.STRING,
    outstandingAmount: DataTypes.STRING,
    
  };

  static meta = {
    // field meta information for UI render
    fieldProperty: [
      {
        key: 'invoiceType',
        label: 'Invoice Type',
        type: 'select',
        placeholder: 'Input Invoice Type',
        options: '[object Object],[object Object]',
        
      },
      {
        key: 'invoiceNumber',
        label: 'Invoice Number',
        type: 'select',
        placeholder: 'Input Invoice Number',
        options: '',
        
      },
      {
        key: 'invoiceDate',
        label: 'Invoice Date',
        type: 'input',
        placeholder: 'Input Invoice Date',
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
        key: 'amount',
        label: 'Amount',
        type: 'input',
        placeholder: 'Input Amount',
        options: '',
        
      },
      {
        key: 'outstandingAmount',
        label: 'Outstanding Amount',
        type: 'input',
        placeholder: 'Input Outstanding Amount',
        options: '',
        
      },
      
    ]
  };
}
