// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: ProjectTemplateTask
|--------------------------------------------------------------------------
|
| Model Class and Interface of projectTemplateTasks
|
*/
import {
  DataTypes,
  Model
} from "https://deno.land/x/denodb/mod.ts";
import {
  ModelFields,
} from "https://deno.land/x/denodb/lib/model.ts";


export class ProjectTemplateTask extends Model { 
  static table = "projectTemplateTasks";
  static timestamps = true;
  
  static fields: ModelFields = {
    // fields list for ORM Maping
    id: { primaryKey: true, autoIncrement: true },
    subject: DataTypes.STRING,
    beginOnDays: DataTypes.STRING,
    durationDays: DataTypes.STRING,
    taskWeight: DataTypes.STRING,
    description: DataTypes.STRING,
    
  };

  static meta = {
    // field meta information for UI render
    fieldProperty: [
      {
        key: 'subject',
        label: 'Subject',
        type: 'input',
        placeholder: 'Input Subject',
        options: '',
        
      },
      {
        key: 'beginOnDays',
        label: 'Begin On Days',
        type: 'input',
        placeholder: 'Input Begin On Days',
        options: '',
        
      },
      {
        key: 'durationDays',
        label: 'Duration Days',
        type: 'input',
        placeholder: 'Input Duration Days',
        options: '',
        
      },
      {
        key: 'taskWeight',
        label: 'Task Weight',
        type: 'input',
        placeholder: 'Input Task Weight',
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
