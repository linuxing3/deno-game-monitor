// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: ProjectTemplate
|--------------------------------------------------------------------------
|
| Model of projectTemplates
|
*/
import {
  DataTypes,
  Model
} from "https://deno.land/x/denodb/mod.ts";

export class ProjectTemplate extends Model { 
  static table = "projectTemplates";
  static timestamps = true;
  
  static fields = {
    // fields list for ORM Maping
    id: { primaryKey: true, autoIncrement: true },
    
    projectType: DataTypes.STRING,
    
    tasks: DataTypes.STRING,
    
  };

  static meta = {
    // field meta information for UI render
    fieldProperty: [
      {
        key: 'projectType',
      
        label: 'Project Type',
      
        type: 'select',
      
        placeholder: 'Input Project Type',
      
        options: '',
      },{
        key: 'tasks',
      
        label: 'Tasks',
      
        type: 'select',
      
        placeholder: 'Input Tasks',
      
        options: '',
      },
    ]
  };
} 
