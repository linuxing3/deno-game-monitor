// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: FinanceBook
|--------------------------------------------------------------------------
|
| Model Class and Interface of financeBooks
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


export class FinanceBook extends Model { 
  static table = "financeBooks";
  static timestamps = true;
  
  static fields: ModelFields = {
    // fields list for ORM Maping
    id: { primaryKey: true, autoIncrement: true },
    name: DataTypes.STRING,
    
  };

  static meta = {
    // field meta information for UI render
    fieldProperty: [
      {
        key: 'name',
        label: 'Name',
        type: 'input',
        placeholder: 'Input Name',
        options: '',
        
      },
      
    ]
  };
}

export interface IFinanceBook {
  id: FieldValue;
  name: FieldValue;
  
}
