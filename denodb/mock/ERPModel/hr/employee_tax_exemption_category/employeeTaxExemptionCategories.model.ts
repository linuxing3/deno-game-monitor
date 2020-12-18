// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: EmployeeTaxExemptionCategory
|--------------------------------------------------------------------------
|
| Model Class and Interface of employeeTaxExemptionCategories
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


export class EmployeeTaxExemptionCategory extends Model { 
  static table = "employeeTaxExemptionCategories";
  static timestamps = true;
  
  static fields: ModelFields = {
    // fields list for ORM Maping
    id: { primaryKey: true, autoIncrement: true },
    maxAmount: DataTypes.STRING,
    isActive: DataTypes.STRING,
    
  };

  static meta = {
    // field meta information for UI render
    fieldProperty: [
      {
        key: 'maxAmount',
        label: 'Max Amount',
        type: 'input',
        placeholder: 'Input Max Amount',
        options: '',
        
      },
      {
        key: 'isActive',
        label: 'Is Active',
        type: 'input',
        placeholder: 'Input Is Active',
        options: '',
        
      },
      
    ]
  };
}

export interface IEmployeeTaxExemptionCategory {
  id: FieldValue;
  maxAmount: FieldValue;
  isActive: FieldValue;
  
}
