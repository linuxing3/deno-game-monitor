// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: EmploymentType
|--------------------------------------------------------------------------
|
| Model Class and Interface of employmentTypes
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


export class EmploymentType extends Model { 
  static table = "employmentTypes";
  static timestamps = true;
  
  static fields: ModelFields = {
    // fields list for ORM Maping
    id: { primaryKey: true, autoIncrement: true },
    employmentType: DataTypes.STRING,
    
  };

  static meta = {
    // field meta information for UI render
    fieldProperty: [
      {
        key: 'employmentType',
        label: 'Employment Type',
        type: 'input',
        placeholder: 'Input Employment Type',
        options: '',
        
      },
      
    ]
  };
}

export interface IEmploymentType {
  id: FieldValue;
  employmentType: FieldValue;
  
}
