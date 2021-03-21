// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: DependentTask
|--------------------------------------------------------------------------
|
| Model Class and Interface of dependentTasks
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


export class DependentTask extends Model { 
  static table = "dependentTasks";
  static timestamps = true;
  
  static fields: ModelFields = {
    // fields list for ORM Maping
    id: { primaryKey: true, autoIncrement: true },
    task: DataTypes.STRING,
    
  };

  static meta = {
    // field meta information for UI render
    fieldProperty: [
      {
        key: 'task',
        label: 'Task',
        type: 'select',
        placeholder: 'Input Task',
        options: '',
        
      },
      
    ]
  };
}

export interface IDependentTask {
  id: FieldValue;
  task: FieldValue;
  
}
