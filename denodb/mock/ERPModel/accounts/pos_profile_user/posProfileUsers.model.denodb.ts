// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: PosProfileUser
|--------------------------------------------------------------------------
|
| Model Class and Interface of posProfileUsers
|
*/
import {
  DataTypes,
  Model
} from "https://deno.land/x/denodb/mod.ts";


export class PosProfileUser extends Model { 
  static table = "posProfileUsers";
  static timestamps = true;
  
  static fields = {
    // fields list for ORM Maping
    id: { primaryKey: true, autoIncrement: true },
    default: DataTypes.STRING,
    user: DataTypes.STRING,
    
  };

}
