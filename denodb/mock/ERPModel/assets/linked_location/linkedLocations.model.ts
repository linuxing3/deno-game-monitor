// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: LinkedLocation
|--------------------------------------------------------------------------
|
| Model Class and Interface of linkedLocations
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


export class LinkedLocation extends Model { 
  static table = "linkedLocations";
  static timestamps = true;
  
  static fields: ModelFields = {
    // fields list for ORM Maping
    id: { primaryKey: true, autoIncrement: true },
    location: DataTypes.STRING,
    
  };

  static meta = {
    // field meta information for UI render
    fieldProperty: [
      {
        key: 'location',
        label: 'Location',
        type: 'select',
        placeholder: 'Input Location',
        options: '',
        
      },
      
    ]
  };
}

export interface ILinkedLocation {
  id: FieldValue;
  location: FieldValue;
  
}
