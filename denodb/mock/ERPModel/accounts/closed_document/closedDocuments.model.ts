// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: ClosedDocument
|--------------------------------------------------------------------------
|
| Model of closedDocuments
|
*/
import {
  DataTypes,
  Model
} from "https://deno.land/x/denodb/mod.ts";

export class ClosedDocument extends Model { 
  static table = "closedDocuments";
  static timestamps = true;
  
  static fields = {
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
      },{
        key: 'closed',
      
        label: 'Closed',
      
        type: 'input',
      
        placeholder: 'Input Closed',
      
        options: '',
      },
    ]
  };
} 
