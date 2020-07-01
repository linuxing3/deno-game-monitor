// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: CFormInvoiceDetail
|--------------------------------------------------------------------------
|
| Model of cFormInvoiceDetails
|
*/
import {
  DataTypes,
  Model
} from "https://deno.land/x/denodb/mod.ts";

export class CFormInvoiceDetail extends Model { 
  static table = "cFormInvoiceDetails";
  static timestamps = true;
  
  static fields = {
    // fields list for ORM Maping
    id: { primaryKey: true, autoIncrement: true },
    invoiceNo: DataTypes.STRING,
    invoiceDate: DataTypes.STRING,
    territory: DataTypes.STRING,
    netTotal: DataTypes.STRING,
    grandTotal: DataTypes.STRING,
    
  };

  static meta = {
    // field meta information for UI render
    fieldProperty: [
      {
        
        key: 'invoiceNo',
      
        label: 'Invoice No',
      
        type: 'select',
      
        placeholder: 'Input Invoice No',
      
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
        
        key: 'territory',
      
        label: 'Territory',
      
        type: 'select',
      
        placeholder: 'Input Territory',
      
        options: '',
      
      },
      {
        
        key: 'netTotal',
      
        label: 'Net Total',
      
        type: 'select',
      
        placeholder: 'Input Net Total',
      
        options: '',
      
      },
      {
        
        key: 'grandTotal',
      
        label: 'Grand Total',
      
        type: 'select',
      
        placeholder: 'Input Grand Total',
      
        options: '',
      
      },
      
    ]
  };
} 
