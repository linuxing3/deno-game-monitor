// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: CForm
|--------------------------------------------------------------------------
|
| Model Class and Interface of cForms
|
*/
import {
  DataTypes,
  Model
} from "https://deno.land/x/denodb/mod.ts";


export class CForm extends Model { 
  static table = "cForms";
  static timestamps = true;
  
  static fields = {
    // fields list for ORM Maping
    id: { primaryKey: true, autoIncrement: true },
    series: DataTypes.STRING,
    cFormNo: DataTypes.STRING,
    receivedDate: DataTypes.STRING,
    customer: DataTypes.STRING,
    company: DataTypes.STRING,
    quarter: DataTypes.STRING,
    totalAmount: DataTypes.STRING,
    state: DataTypes.STRING,
    invoices: DataTypes.STRING,
    totalInvoicedAmount: DataTypes.STRING,
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
        key: 'cFormNo',
        label: 'C Form No',
        type: 'input',
        placeholder: 'Input C Form No',
        options: '',
        
      },
      {
        key: 'receivedDate',
        label: 'Received Date',
        type: 'input',
        placeholder: 'Input Received Date',
        options: '',
        
      },
      {
        key: 'customer',
        label: 'Customer',
        type: 'select',
        placeholder: 'Input Customer',
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
        key: 'company',
        label: 'Company',
        type: 'select',
        placeholder: 'Input Company',
        options: '',
        
      },
      {
        key: 'quarter',
        label: 'Quarter',
        type: 'select',
        placeholder: 'Input Quarter',
        options: '[object Object],[object Object],[object Object],[object Object]',
        
      },
      {
        key: 'totalAmount',
        label: 'Total Amount',
        type: 'select',
        placeholder: 'Input Total Amount',
        options: '',
        
      },
      {
        key: 'state',
        label: 'State',
        type: 'input',
        placeholder: 'Input State',
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
        key: 'invoices',
        label: 'Invoices',
        type: 'select',
        placeholder: 'Input Invoices',
        options: '',
        
      },
      {
        key: 'totalInvoicedAmount',
        label: 'Total Invoiced Amount',
        type: 'select',
        placeholder: 'Input Total Invoiced Amount',
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
