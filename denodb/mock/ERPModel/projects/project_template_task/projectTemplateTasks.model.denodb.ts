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


export class ProjectTemplateTask extends Model { 
  static table = "projectTemplateTasks";
  static timestamps = true;
  
  static fields = {
    // fields list for ORM Maping
    id: { primaryKey: true, autoIncrement: true },
    subject: DataTypes.STRING,
    beginOnDays: DataTypes.STRING,
    durationDays: DataTypes.STRING,
    taskWeight: DataTypes.STRING,
    description: DataTypes.STRING,
    
  };

}
