// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: ProjectTask
|--------------------------------------------------------------------------
|
| Model Class and Interface of projectTasks
|
*/
import {
  DataTypes,
  Model
} from "https://deno.land/x/denodb/mod.ts";


export class ProjectTask extends Model { 
  static table = "projectTasks";
  static timestamps = true;
  
  static fields = {
    // fields list for ORM Maping
    id: { primaryKey: true, autoIncrement: true },
    title: DataTypes.STRING,
    status: DataTypes.STRING,
    viewTask: DataTypes.STRING,
    viewTimesheet: DataTypes.STRING,
    makeTimesheet: DataTypes.STRING,
    startDate: DataTypes.STRING,
    endDate: DataTypes.STRING,
    weight: DataTypes.STRING,
    description: DataTypes.STRING,
    taskId: DataTypes.STRING,
    
  };

}
