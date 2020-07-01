// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: BankStatementTransactionInvoiceItem
|--------------------------------------------------------------------------
|
| Model of bankStatementTransactionInvoiceItems
|
*/
import {
  DataTypes,
  Model
} from "https://deno.land/x/denodb/mod.ts";

export class BankStatementTransactionInvoiceItem extends Model { 
  static table = "bankStatementTransactionInvoiceItems";
  static timestamps = true;
  
  static fields = {
    // fields list for ORM Maping
    id: { primaryKey: true, autoIncrement: true },
    
    transactionDate: DataTypes.STRING,
    
    paymentDescription: DataTypes.STRING,
    
    partyType: DataTypes.STRING,
    
    party: DataTypes.STRING,
    
    : DataTypes.STRING,
    
    invoiceDate: DataTypes.STRING,
    
    invoiceType: DataTypes.STRING,
    
    invoice: DataTypes.STRING,
    
    outstandingAmount: DataTypes.STRING,
    
    allocatedAmount: DataTypes.STRING,
    
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
      },{
        key: 'paymentDescription',
      
        label: 'Payment Description',
      
        type: 'input',
      
        placeholder: 'Input Payment Description',
      
        options: '',
      },{
        key: 'partyType',
      
        label: 'Party Type',
      
        type: 'select',
      
        placeholder: 'Input Party Type',
      
        options: '[object Object],[object Object]',
      },{
        key: 'party',
      
        label: 'Party',
      
        type: 'select',
      
        placeholder: 'Input Party',
      
        options: '',
      },{
        key: '',
      
        label: '',
      
        type: 'input',
      
        placeholder: 'Input ',
      
        options: '',
      },{
        key: 'invoiceDate',
      
        label: 'Invoice Date',
      
        type: 'input',
      
        placeholder: 'Input Invoice Date',
      
        options: '',
      },{
        key: 'invoiceType',
      
        label: 'Invoice Type',
      
        type: 'select',
      
        placeholder: 'Input Invoice Type',
      
        options: '[object Object],[object Object]',
      },{
        key: 'invoice',
      
        label: 'Invoice',
      
        type: 'select',
      
        placeholder: 'Input Invoice',
      
        options: '',
      },{
        key: 'outstandingAmount',
      
        label: 'Outstanding Amount',
      
        type: 'input',
      
        placeholder: 'Input Outstanding Amount',
      
        options: '',
      },{
        key: 'allocatedAmount',
      
        label: 'Allocated Amount',
      
        type: 'input',
      
        placeholder: 'Input Allocated Amount',
      
        options: '',
      },
    ]
  };
} 
