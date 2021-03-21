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
import {
  FieldValue,
} from "https://deno.land/x/denodb/lib/query-builder.ts";
import {
  ModelFields,
} from "https://deno.land/x/denodb/lib/model.ts";


export class GstAccount extends Model { 
  static table = "gstAccounts";
  static timestamps = true;
  
  static fields: ModelFields = {
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

export interface IGstAccount {
  id: FieldValue;
  company: FieldValue;
  cgstAccount: FieldValue;
  sgstAccount: FieldValue;
  igstAccount: FieldValue;
  cessAccount: FieldValue;
  
}
