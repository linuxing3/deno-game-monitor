// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: PaymentReconciliationPayment
|--------------------------------------------------------------------------
|
| Model Class and Interface of paymentReconciliationPayments
|
*/
import {
  DataTypes,
  Model
} from "https://deno.land/x/denodb/mod.ts";
import {
  ModelFields,
} from "https://deno.land/x/denodb/lib/model.ts";


export class PaymentReconciliationPayment extends Model { 
  static table = "paymentReconciliationPayments";
  static timestamps = true;
  
  static fields: ModelFields = {
    // fields list for ORM Maping
    id: { primaryKey: true, autoIncrement: true },
    referenceType: DataTypes.STRING,
    referenceName: DataTypes.STRING,
    postingDate: DataTypes.STRING,
    isAdvance: DataTypes.STRING,
    referenceRow: DataTypes.STRING,
    invoiceNumber: DataTypes.STRING,
    amount: DataTypes.STRING,
    allocatedAmount: DataTypes.STRING,
    remark: DataTypes.STRING,
    
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
        key: 'postingDate',
        label: 'Posting Date',
        type: 'input',
        placeholder: 'Input Posting Date',
        options: '',
        
      },
      {
        key: 'isAdvance',
        label: 'Is Advance',
        type: 'input',
        placeholder: 'Input Is Advance',
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
        key: 'invoiceNumber',
        label: 'Invoice Number',
        type: 'input',
        placeholder: 'Input Invoice Number',
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
        key: 'allocatedAmount',
        label: 'Allocated Amount',
        type: 'input',
        placeholder: 'Input Allocated Amount',
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
        key: 'remark',
        label: 'Remark',
        type: 'input',
        placeholder: 'Input Remark',
        options: '',
        
      },
      
    ]
  };
}
