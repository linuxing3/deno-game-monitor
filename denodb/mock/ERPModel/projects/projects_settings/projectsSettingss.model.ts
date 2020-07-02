// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: ProjectsSettings
|--------------------------------------------------------------------------
|
| Model Class and Interface of projectsSettingss
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


export class ProjectsSettings extends Model { 
  static table = "projectsSettingss";
  static timestamps = true;
  
  static fields: ModelFields = {
    // fields list for ORM Maping
    id: { primaryKey: true, autoIncrement: true },
    timesheets: DataTypes.STRING,
    ignoreWorkstationTimeOverlap: DataTypes.STRING,
    ignoreUserTimeOverlap: DataTypes.STRING,
    ignoreEmployeeTimeOverlap: DataTypes.STRING,
    
  };

  static meta = {
    // field meta information for UI render
    fieldProperty: [
      {
        key: 'timesheets',
        label: 'Timesheets',
        type: 'input',
        placeholder: 'Input Timesheets',
        options: '',
        
      },
      {
        key: 'ignoreWorkstationTimeOverlap',
        label: 'Ignore Workstation Time Overlap',
        type: 'input',
        placeholder: 'Input Ignore Workstation Time Overlap',
        options: '',
        
      },
      {
        key: 'ignoreUserTimeOverlap',
        label: 'Ignore User Time Overlap',
        type: 'input',
        placeholder: 'Input Ignore User Time Overlap',
        options: '',
        
      },
      {
        key: 'ignoreEmployeeTimeOverlap',
        label: 'Ignore Employee Time Overlap',
        type: 'input',
        placeholder: 'Input Ignore Employee Time Overlap',
        options: '',
        
      },
      
    ]
  };
}

export interface IProjectsSettings {
  id: FieldValue;
  timesheets: FieldValue;
  ignoreWorkstationTimeOverlap: FieldValue;
  ignoreUserTimeOverlap: FieldValue;
  ignoreEmployeeTimeOverlap: FieldValue;
  
}
