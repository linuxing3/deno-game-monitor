// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: IdentificationDocumentType
|--------------------------------------------------------------------------
|
| Model Class and Interface of identificationDocumentTypes
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


export class IdentificationDocumentType extends Model { 
  static table = "identificationDocumentTypes";
  static timestamps = true;
  
  static fields: ModelFields = {
    // fields list for ORM Maping
    id: { primaryKey: true, autoIncrement: true },
    identificationDocumentType: DataTypes.STRING,
    
  };

  static meta = {
    // field meta information for UI render
    fieldProperty: [
      {
        key: 'identificationDocumentType',
        label: 'Identification Document Type',
        type: 'input',
        placeholder: 'Input Identification Document Type',
        options: '',
        
      },
      
    ]
  };
}

export interface IIdentificationDocumentType {
  id: FieldValue;
  identificationDocumentType: FieldValue;
  
}
