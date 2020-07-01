// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: BankStatementSettingsItem
|--------------------------------------------------------------------------
|
| Model of bankStatementSettingsItems
|
*/
import {
  DataTypes,
  Model
} from "https://deno.land/x/denodb/mod.ts";

export class BankStatementSettingsItem extends Model { 
  static table = "bankStatementSettingsItems";
  static timestamps = true;
  
  static fields = {
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
      },{
        key: 'bankHeader',
      
        label: 'Bank Header',
      
        type: 'input',
      
        placeholder: 'Input Bank Header',
      
        options: '',
      },
    ]
  };
} 
