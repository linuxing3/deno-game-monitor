// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: IdentificationDocumentType
|--------------------------------------------------------------------------
|
| Model of identificationDocumentTypes
|
*/
import {
  DataTypes,
  Model
} from "https://deno.land/x/denodb/mod.ts";

export class IdentificationDocumentType extends Model { 
  static table = "identificationDocumentTypes";
  static timestamps = true;
  
  static fields = {
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
