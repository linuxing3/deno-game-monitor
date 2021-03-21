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


export class ProjectType extends Model { 
  static table = "projectTypes";
  static timestamps = true;
  
  static fields = {
    // fields list for ORM Maping
    id: { primaryKey: true, autoIncrement: true },
    projectType: DataTypes.STRING,
    description: DataTypes.STRING,
    
  };

}
