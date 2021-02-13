// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: ProjectType
|--------------------------------------------------------------------------
|
| Model Class and Interface of projectTypes
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


export class ProjectType extends Model { 
  static table = "projectTypes";
  static timestamps = true;
  
  static fields: ModelFields = {
    // fields list for ORM Maping
    id: { primaryKey: true, autoIncrement: true },
    projectType: DataTypes.STRING,
    description: DataTypes.STRING,
    
  };

  static meta = {
    // field meta information for UI render
    fieldProperty: [
      {
        key: 'projectType',
        label: 'Project Type',
        type: 'input',
        placeholder: 'Input Project Type',
        options: '',
        
      },
      {
        key: 'description',
        label: 'Description',
        type: 'input',
        placeholder: 'Input Description',
        options: '',
        
      },
      
    ]
  };
}

export interface IProjectType {
  id: FieldValue;
  projectType: FieldValue;
  description: FieldValue;
  
}
