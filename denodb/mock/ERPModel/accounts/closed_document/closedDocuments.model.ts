// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: ClosedDocument
|--------------------------------------------------------------------------
|
| Model Class and Interface of closedDocuments
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


export class ClosedDocument extends Model { 
  static table = "closedDocuments";
  static timestamps = true;
  
  static fields: ModelFields = {
    // fields list for ORM Maping
    id: { primaryKey: true, autoIncrement: true },
    documentType: DataTypes.STRING,
    closed: DataTypes.STRING,
    
  };

  static meta = {
    // field meta information for UI render
    fieldProperty: [
      {
        key: 'documentType',
        label: 'Document Type',
        type: 'select',
        placeholder: 'Input Document Type',
        options: '',
        
      },
      {
        key: 'closed',
        label: 'Closed',
        type: 'input',
        placeholder: 'Input Closed',
        options: '',
        
      },
      
    ]
  };
}

export interface IClosedDocument {
  id: FieldValue;
  documentType: FieldValue;
  closed: FieldValue;
  
}
