// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: PaymentOrder
|--------------------------------------------------------------------------
|
| Model of paymentOrders
|
*/
import {
  DataTypes,
  Model
} from "https://deno.land/x/denodb/mod.ts";

export class PaymentOrder extends Model { 
  static table = "paymentOrders";
  static timestamps = true;
  
  static fields = {
    // fields list for ORM Maping
    id: { primaryKey: true, autoIncrement: true },
    series: DataTypes.STRING,
    company: DataTypes.STRING,
    supplier: DataTypes.STRING,
    postingDate: DataTypes.STRING,
    bank: DataTypes.STRING,
    paymentOrderReference: DataTypes.STRING,
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
      
      },
      {
        
        key: 'company',
      
        label: 'Company',
      
        type: 'select',
      
        placeholder: 'Input Company',
      
        options: '',
      
      },
      {
        
        key: 'supplier',
      
        label: 'Supplier',
      
        type: 'select',
      
        placeholder: 'Input Supplier',
      
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
        
        key: 'postingDate',
      
        label: 'Posting Date',
      
        type: 'input',
      
        placeholder: 'Input Posting Date',
      
        options: '',
      
      },
      {
        
        key: 'bank',
      
        label: 'Bank',
      
        type: 'select',
      
        placeholder: 'Input Bank',
      
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
        
        key: 'paymentOrderReference',
      
        label: 'Payment Order Reference',
      
        type: 'select',
      
        placeholder: 'Input Payment Order Reference',
      
        options: '',
      
      },
      {
        
        key: 'amendedFrom',
      
        label: 'Amended From',
      
        type: 'select',
      
        placeholder: 'Input Amended From',
      
        options: '',
      
      },
      
    ]
  };
} 
