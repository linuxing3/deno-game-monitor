// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: OpeningInvoiceCreationTool
|--------------------------------------------------------------------------
|
| Model of openingInvoiceCreationTools
|
*/
import {
  DataTypes,
  Model
} from "https://deno.land/x/denodb/mod.ts";

export class OpeningInvoiceCreationTool extends Model { 
  static table = "openingInvoiceCreationTools";
  static timestamps = true;
  
  static fields = {
    // fields list for ORM Maping
    id: { primaryKey: true, autoIncrement: true },
    company: DataTypes.STRING,
    createMissingParty: DataTypes.STRING,
    invoiceType: DataTypes.STRING,
    invoices: DataTypes.STRING,
    
  };

  static meta = {
    // field meta information for UI render
    fieldProperty: [
      {
        
        key: 'company',
      
        label: 'Company',
      
        type: 'select',
      
        placeholder: 'Input Company',
      
        options: '',
      
      },
      {
        
        key: 'createMissingParty',
      
        label: 'Create Missing Party',
      
        type: 'input',
      
        placeholder: 'Input Create Missing Party',
      
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
        
        key: 'invoiceType',
      
        label: 'Invoice Type',
      
        type: 'select',
      
        placeholder: 'Input Invoice Type',
      
        options: '[object Object]',
      
      },
      {
        
        key: 'invoices',
      
        label: 'Invoices',
      
        type: 'input',
      
        placeholder: 'Input Invoices',
      
        options: '',
      
      },
      {
        
        key: '',
      
        label: '',
      
        type: 'select',
      
        placeholder: 'Input ',
      
        options: '',
      
      },
      
    ]
  };
} 
