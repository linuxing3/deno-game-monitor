// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: Branch
|--------------------------------------------------------------------------
|
| Model Class and Interface of branches
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


export class Branch extends Model { 
  static table = "branches";
  static timestamps = true;
  
  static fields: ModelFields = {
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

export interface IBranch {
  id: FieldValue;
  branch: FieldValue;
  
}
