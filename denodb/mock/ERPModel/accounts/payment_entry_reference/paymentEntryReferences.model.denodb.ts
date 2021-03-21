// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: PaymentEntryReference
|--------------------------------------------------------------------------
|
| Model Class and Interface of paymentEntryReferences
|
*/
import {
  DataTypes,
  Model
} from "https://deno.land/x/denodb/mod.ts";
import {
  ModelFields,
} from "https://deno.land/x/denodb/lib/model.ts";


export class PaymentEntryReference extends Model { 
  static table = "paymentEntryReferences";
  static timestamps = true;
  
  static fields: ModelFields = {
    // fields list for ORM Maping
    id: { primaryKey: true, autoIncrement: true },
    type: DataTypes.STRING,
    name: DataTypes.STRING,
    dueDate: DataTypes.STRING,
    supplierInvoiceNo: DataTypes.STRING,
    totalAmount: DataTypes.STRING,
    outstanding: DataTypes.STRING,
    allocated: DataTypes.STRING,
    exchangeRate: DataTypes.STRING,
    
  };

  static meta = {
    // field meta information for UI render
    fieldProperty: [
      {
        key: 'type',
        label: 'Type',
        type: 'select',
        placeholder: 'Input Type',
        options: '',
        
      },
      {
        key: 'name',
        label: 'Name',
        type: 'select',
        placeholder: 'Input Name',
        options: '',
        
      },
      {
        key: 'dueDate',
        label: 'Due Date',
        type: 'input',
        placeholder: 'Input Due Date',
        options: '',
        
      },
      {
        key: 'supplierInvoiceNo',
        label: 'Supplier Invoice No',
        type: 'input',
        placeholder: 'Input Supplier Invoice No',
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
        key: 'totalAmount',
        label: 'Total Amount',
        type: 'input',
        placeholder: 'Input Total Amount',
        options: '',
        
      },
      {
        key: 'outstanding',
        label: 'Outstanding',
        type: 'input',
        placeholder: 'Input Outstanding',
        options: '',
        
      },
      {
        key: 'allocated',
        label: 'Allocated',
        type: 'input',
        placeholder: 'Input Allocated',
        options: '',
        
      },
      {
        key: 'exchangeRate',
        label: 'Exchange Rate',
        type: 'input',
        placeholder: 'Input Exchange Rate',
        options: '',
        
      },
      
    ]
  };
}
