// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: ProjectUser
|--------------------------------------------------------------------------
|
| Model Class and Interface of projectUsers
|
*/
import {
  DataTypes,
  Model
} from "https://deno.land/x/denodb/mod.ts";


export class ProjectUser extends Model { 
  static table = "projectUsers";
  static timestamps = true;
  
  static fields = {
    // fields list for ORM Maping
    id: { primaryKey: true, autoIncrement: true },
    user: DataTypes.STRING,
    email: DataTypes.STRING,
    image: DataTypes.STRING,
    fullName: DataTypes.STRING,
    welcomeEmailSent: DataTypes.STRING,
    viewAttachments: DataTypes.STRING,
    projectStatus: DataTypes.STRING,
    
  };

}
