// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: ItemTaxTemplateDetail
|--------------------------------------------------------------------------
|
| Model Class and Interface of itemTaxTemplateDetails
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


export class ItemTaxTemplateDetail extends Model { 
  static table = "itemTaxTemplateDetails";
  static timestamps = true;
  
  static fields: ModelFields = {
    // fields list for ORM Maping
    id: { primaryKey: true, autoIncrement: true },
    tax: DataTypes.STRING,
    taxRate: DataTypes.STRING,
    
  };

  static meta = {
    // field meta information for UI render
    fieldProperty: [
      {
        key: 'tax',
        label: 'Tax',
        type: 'select',
        placeholder: 'Input Tax',
        options: '',
        
      },
      {
        key: 'taxRate',
        label: 'Tax Rate',
        type: 'input',
        placeholder: 'Input Tax Rate',
        options: '',
        
      },
      
    ]
  };
}

export interface IItemTaxTemplateDetail {
  id: FieldValue;
  tax: FieldValue;
  taxRate: FieldValue;
  
}
