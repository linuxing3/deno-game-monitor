// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: CashFlowMappingAccount
|--------------------------------------------------------------------------
|
| Model Class and Interface of cashFlowMappingAccounts
|
*/
import {
  DataTypes,
  Model
} from "https://deno.land/x/denodb/mod.ts";


export class CashFlowMappingAccount extends Model { 
  static table = "cashFlowMappingAccounts";
  static timestamps = true;
  
  static fields = {
    // fields list for ORM Maping
    id: { primaryKey: true, autoIncrement: true },
    account: DataTypes.STRING,
    
  };

  static meta = {
    // field meta information for UI render
    fieldProperty: [
      {
        key: 'account',
        label: 'Account',
        type: 'select',
        placeholder: 'Input Account',
        options: '',
        
      },
      
    ]
  };
}
