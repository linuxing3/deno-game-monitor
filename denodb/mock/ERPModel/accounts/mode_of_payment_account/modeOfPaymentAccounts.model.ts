// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: ModeOfPaymentAccount
|--------------------------------------------------------------------------
|
| Model Class and Interface of modeOfPaymentAccounts
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


export class ModeOfPaymentAccount extends Model { 
  static table = "modeOfPaymentAccounts";
  static timestamps = true;
  
  static fields: ModelFields = {
    // fields list for ORM Maping
    id: { primaryKey: true, autoIncrement: true },
    company: DataTypes.STRING,
    defaultAccount: DataTypes.STRING,
    
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
        key: 'defaultAccount',
        label: 'Default Account',
        type: 'select',
        placeholder: 'Input Default Account',
        options: '',
        
      },
      
    ]
  };
}

export interface IModeOfPaymentAccount {
  id: FieldValue;
  company: FieldValue;
  defaultAccount: FieldValue;
  
}
