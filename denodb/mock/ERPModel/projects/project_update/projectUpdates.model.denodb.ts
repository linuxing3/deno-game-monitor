// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: ProjectUpdate
|--------------------------------------------------------------------------
|
| Model Class and Interface of projectUpdates
|
*/
import {
  DataTypes,
  Model
} from "https://deno.land/x/denodb/mod.ts";


export class ProjectUpdate extends Model { 
  static table = "projectUpdates";
  static timestamps = true;
  
  static fields = {
    // fields list for ORM Maping
    id: { primaryKey: true, autoIncrement: true },
    series: DataTypes.STRING,
    project: DataTypes.STRING,
    sent: DataTypes.STRING,
    date: DataTypes.STRING,
    time: DataTypes.STRING,
    users: DataTypes.STRING,
    amendedFrom: DataTypes.STRING,
    
  };

}
