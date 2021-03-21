// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: GstAccount
|--------------------------------------------------------------------------
|
| Model Class and Interface of gstAccounts
|
*/
import {
  DataTypes,
  Model
} from "https://deno.land/x/denodb/mod.ts";


export class GstAccount extends Model { 
  static table = "gstAccounts";
  static timestamps = true;
  
  static fields = {
    // fields list for ORM Maping
    id: { primaryKey: true, autoIncrement: true },
    company: DataTypes.STRING,
    cgstAccount: DataTypes.STRING,
    sgstAccount: DataTypes.STRING,
    igstAccount: DataTypes.STRING,
    cessAccount: DataTypes.STRING,
    
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
        key: 'cgstAccount',
        label: 'Cgst Account',
        type: 'select',
        placeholder: 'Input Cgst Account',
        options: '',
        
      },
      {
        key: 'sgstAccount',
        label: 'Sgst Account',
        type: 'select',
        placeholder: 'Input Sgst Account',
        options: '',
        
      },
      {
        key: 'igstAccount',
        label: 'Igst Account',
        type: 'select',
        placeholder: 'Input Igst Account',
        options: '',
        
      },
      {
        key: 'cessAccount',
        label: 'Cess Account',
        type: 'select',
        placeholder: 'Input Cess Account',
        options: '',
        
      },
      
    ]
  };
}
