// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: CashFlowMappingTemplateDetail
|--------------------------------------------------------------------------
|
| Model Class and Interface of cashFlowMappingTemplateDetails
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


export class CashFlowMappingTemplateDetail extends Model { 
  static table = "cashFlowMappingTemplateDetails";
  static timestamps = true;
  
  static fields: ModelFields = {
    // fields list for ORM Maping
    id: { primaryKey: true, autoIncrement: true },
    mapping: DataTypes.STRING,
    
  };

  static meta = {
    // field meta information for UI render
    fieldProperty: [
      {
        key: 'mapping',
        label: 'Mapping',
        type: 'select',
        placeholder: 'Input Mapping',
        options: '',
        
      },
      
    ]
  };
}

export interface ICashFlowMappingTemplateDetail {
  id: FieldValue;
  mapping: FieldValue;
  
}
