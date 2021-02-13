// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: BankStatementSettingsItem
|--------------------------------------------------------------------------
|
| Model Class and Interface of bankStatementSettingsItems
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


export class BankStatementSettingsItem extends Model { 
  static table = "bankStatementSettingsItems";
  static timestamps = true;
  
  static fields: ModelFields = {
    // fields list for ORM Maping
    id: { primaryKey: true, autoIncrement: true },
    mappedHeader: DataTypes.STRING,
    bankHeader: DataTypes.STRING,
    
  };

  static meta = {
    // field meta information for UI render
    fieldProperty: [
      {
        key: 'mappedHeader',
        label: 'Mapped Header',
        type: 'input',
        placeholder: 'Input Mapped Header',
        options: '',
        
      },
      {
        key: 'bankHeader',
        label: 'Bank Header',
        type: 'input',
        placeholder: 'Input Bank Header',
        options: '',
        
      },
      
    ]
  };
}

export interface IBankStatementSettingsItem {
  id: FieldValue;
  mappedHeader: FieldValue;
  bankHeader: FieldValue;
  
}
