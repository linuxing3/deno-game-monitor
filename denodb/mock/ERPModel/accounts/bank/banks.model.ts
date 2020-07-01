// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: Bank
|--------------------------------------------------------------------------
|
| Model of banks
|
*/
import {
  DataTypes,
  Model
} from "https://deno.land/x/denodb/mod.ts";

export class Bank extends Model { 
  static table = "banks";
  static timestamps = true;
  
  static fields = {
    // fields list for ORM Maping
    id: { primaryKey: true, autoIncrement: true },
    bankName: DataTypes.STRING,
    
  };

  static meta = {
    // field meta information for UI render
    fieldProperty: [
      {
        key: 'bankName',
        label: 'Bank Name',
        type: 'input',
        placeholder: 'Input Bank Name',
        options: '',
        
      },
      
    ]
  };
} 
