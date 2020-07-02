// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: PosItemGroup
|--------------------------------------------------------------------------
|
| Model Class and Interface of posItemGroups
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


export class PosItemGroup extends Model { 
  static table = "posItemGroups";
  static timestamps = true;
  
  static fields: ModelFields = {
    // fields list for ORM Maping
    id: { primaryKey: true, autoIncrement: true },
    itemGroup: DataTypes.STRING,
    
  };

  static meta = {
    // field meta information for UI render
    fieldProperty: [
      {
        key: 'itemGroup',
        label: 'Item Group',
        type: 'select',
        placeholder: 'Input Item Group',
        options: '',
        
      },
      
    ]
  };
}

export interface IPosItemGroup {
  id: FieldValue;
  itemGroup: FieldValue;
  
}
