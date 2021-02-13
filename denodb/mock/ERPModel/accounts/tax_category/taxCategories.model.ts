// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: TaxCategory
|--------------------------------------------------------------------------
|
| Model Class and Interface of taxCategories
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


export class TaxCategory extends Model { 
  static table = "taxCategories";
  static timestamps = true;
  
  static fields: ModelFields = {
    // fields list for ORM Maping
    id: { primaryKey: true, autoIncrement: true },
    title: DataTypes.STRING,
    
  };

  static meta = {
    // field meta information for UI render
    fieldProperty: [
      {
        key: 'title',
        label: 'Title',
        type: 'input',
        placeholder: 'Input Title',
        options: '',
        
      },
      
    ]
  };
}

export interface ITaxCategory {
  id: FieldValue;
  title: FieldValue;
  
}
