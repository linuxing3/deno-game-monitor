// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: ProjectsSetting
|--------------------------------------------------------------------------
|
| Model Class and Interface of projectsSettings
|
*/
import {
  DataTypes,
  Model
} from "https://deno.land/x/denodb/mod.ts";


export class ProjectsSetting extends Model { 
  static table = "projectsSettings";
  static timestamps = true;
  
  static fields = {
    // fields list for ORM Maping
    id: { primaryKey: true, autoIncrement: true },
    timesheets: DataTypes.STRING,
    ignoreWorkstationTimeOverlap: DataTypes.STRING,
    ignoreUserTimeOverlap: DataTypes.STRING,
    ignoreEmployeeTimeOverlap: DataTypes.STRING,
    
  };

}
