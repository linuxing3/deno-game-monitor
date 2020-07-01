// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: Interest
|--------------------------------------------------------------------------
|
| Model of interests
|
*/
import {
  DataTypes,
  Model
} from "https://deno.land/x/denodb/mod.ts";

export class Interest extends Model { 
  static table = "interests";
  static timestamps = true;
  
  static fields = {
    // fields list for ORM Maping
    id: { primaryKey: true, autoIncrement: true },
    
    interest: DataTypes.STRING,
    
  };

  static meta = {
    // field meta information for UI render
    fieldProperty: [
      {
        key: 'interest',
      
        label: 'Interest',
      
        type: 'input',
      
        placeholder: 'Input Interest',
      
        options: '',
      },
    ]
  };
} 
