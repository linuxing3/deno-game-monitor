// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: Interest
|--------------------------------------------------------------------------
|
| Model Class and Interface of interests
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


export class Interest extends Model { 
  static table = "interests";
  static timestamps = true;
  
  static fields: ModelFields = {
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

export interface IInterest {
  id: FieldValue;
  interest: FieldValue;
  
}
