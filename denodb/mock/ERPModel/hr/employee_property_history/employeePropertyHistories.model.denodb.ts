// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: EmployeePropertyHistory
|--------------------------------------------------------------------------
|
| Model Class and Interface of employeePropertyHistories
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


export class EmployeePropertyHistory extends Model { 
  static table = "employeePropertyHistories";
  static timestamps = true;
  
  static fields: ModelFields = {
    // fields list for ORM Maping
    id: { primaryKey: true, autoIncrement: true },
    property: DataTypes.STRING,
    current: DataTypes.STRING,
    new: DataTypes.STRING,
    fieldName: DataTypes.STRING,
    
  };

  static meta = {
    // field meta information for UI render
    fieldProperty: [
      {
        key: 'property',
        label: 'Property',
        type: 'input',
        placeholder: 'Input Property',
        options: '',
        
      },
      {
        key: 'current',
        label: 'Current',
        type: 'input',
        placeholder: 'Input Current',
        options: '',
        
      },
      {
        key: 'new',
        label: 'New',
        type: 'input',
        placeholder: 'Input New',
        options: '',
        
      },
      {
        key: 'fieldName',
        label: 'Field Name',
        type: 'input',
        placeholder: 'Input Field Name',
        options: '',
        
      },
      
    ]
  };
}

export interface IEmployeePropertyHistory {
  id: FieldValue;
  property: FieldValue;
  current: FieldValue;
  new: FieldValue;
  fieldName: FieldValue;
  
}
