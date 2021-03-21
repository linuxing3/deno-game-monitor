// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: AllowedToTransactWith
|--------------------------------------------------------------------------
|
| Model Class and Interface of allowedToTransactWiths
|
*/
import {
  DataTypes,
  Model
} from "https://deno.land/x/denodb/mod.ts";


export class AllowedToTransactWith extends Model { 
  static table = "allowedToTransactWiths";
  static timestamps = true;
  
  static fields = {
    // fields list for ORM Maping
    id: { primaryKey: true, autoIncrement: true },
    company: DataTypes.STRING,
    
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
      
    ]
  };
}
