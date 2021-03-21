// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: DepartmentApprover
|--------------------------------------------------------------------------
|
| Model Class and Interface of departmentApprovers
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


export class DepartmentApprover extends Model { 
  static table = "departmentApprovers";
  static timestamps = true;
  
  static fields: ModelFields = {
    // fields list for ORM Maping
    id: { primaryKey: true, autoIncrement: true },
    approver: DataTypes.STRING,
    
  };

  static meta = {
    // field meta information for UI render
    fieldProperty: [
      {
        key: 'approver',
        label: 'Approver',
        type: 'select',
        placeholder: 'Input Approver',
        options: '',
        
      },
      
    ]
  };
}

export interface IDepartmentApprover {
  id: FieldValue;
  approver: FieldValue;
  
}
