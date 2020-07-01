// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: OpeningInvoiceCreationToolItem
|--------------------------------------------------------------------------
|
| Model of openingInvoiceCreationToolItems
|
*/
import {
  DataTypes,
  Model
} from "https://deno.land/x/denodb/mod.ts";

export class OpeningInvoiceCreationToolItem extends Model { 
  static table = "openingInvoiceCreationToolItems";
  static timestamps = true;
  
  static fields = {
    // fields list for ORM Maping
    id: { primaryKey: true, autoIncrement: true },
    partyType: DataTypes.STRING,
    party: DataTypes.STRING,
    temporaryOpeningAccount: DataTypes.STRING,
    postingDate: DataTypes.STRING,
    dueDate: DataTypes.STRING,
    itemName: DataTypes.STRING,
    outstandingAmount: DataTypes.STRING,
    quantity: DataTypes.STRING,
    
  };

  static meta = {
    // field meta information for UI render
    fieldProperty: [
      {
        
        key: 'partyType',
      
        label: 'Party Type',
      
        type: 'select',
      
        placeholder: 'Input Party Type',
      
        options: '',
      
      },
      {
        
        key: 'party',
      
        label: 'Party',
      
        type: 'select',
      
        placeholder: 'Input Party',
      
        options: '',
      
      },
      {
        
        key: 'temporaryOpeningAccount',
      
        label: 'Temporary Opening Account',
      
        type: 'select',
      
        placeholder: 'Input Temporary Opening Account',
      
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
        
        key: 'dueDate',
      
        label: 'Due Date',
      
        type: 'input',
      
        placeholder: 'Input Due Date',
      
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
        
        key: 'itemName',
      
        label: 'Item Name',
      
        type: 'input',
      
        placeholder: 'Input Item Name',
      
        options: '',
      
      },
      {
        
        key: 'outstandingAmount',
      
        label: 'Outstanding Amount',
      
        type: 'input',
      
        placeholder: 'Input Outstanding Amount',
      
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
        
        key: 'quantity',
      
        label: 'Quantity',
      
        type: 'input',
      
        placeholder: 'Input Quantity',
      
        options: '',
      
      },
      
    ]
  };
} 
