// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: Branch
|--------------------------------------------------------------------------
|
| Model of branchs
|
*/
import {
  DataTypes,
  Model
} from "https://deno.land/x/denodb/mod.ts";

export class Branch extends Model { 
  static table = "branchs";
  static timestamps = true;
  
  static fields = {
    // fields list for ORM Maping
    id: { primaryKey: true, autoIncrement: true },
    
    branch: DataTypes.STRING,
    
  };

  static meta = {
    // field meta information for UI render
    fieldProperty: [
      {
        key: 'branch',
      
        label: 'Branch',
      
        type: 'input',
      
        placeholder: 'Input Branch',
      
        options: '',
      },
    ]
  };
} 
