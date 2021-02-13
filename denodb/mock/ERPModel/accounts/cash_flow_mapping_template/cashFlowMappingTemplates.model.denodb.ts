// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: CashFlowMappingTemplate
|--------------------------------------------------------------------------
|
| Model Class and Interface of cashFlowMappingTemplates
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


export class CashFlowMappingTemplate extends Model { 
  static table = "cashFlowMappingTemplates";
  static timestamps = true;
  
  static fields: ModelFields = {
    // fields list for ORM Maping
    id: { primaryKey: true, autoIncrement: true },
    templateName: DataTypes.STRING,
    cashFlowMapping: DataTypes.STRING,
    
  };

  static meta = {
    // field meta information for UI render
    fieldProperty: [
      {
        key: 'templateName',
        label: 'Template Name',
        type: 'input',
        placeholder: 'Input Template Name',
        options: '',
        
      },
      {
        key: 'cashFlowMapping',
        label: 'Cash Flow Mapping',
        type: 'select',
        placeholder: 'Input Cash Flow Mapping',
        options: '',
        
      },
      
    ]
  };
}

export interface ICashFlowMappingTemplate {
  id: FieldValue;
  templateName: FieldValue;
  cashFlowMapping: FieldValue;
  
}
