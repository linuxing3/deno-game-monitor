// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: Designation
|--------------------------------------------------------------------------
|
| Model Class and Interface of designations
|
*/
import {
  DataTypes,
  Model
} from "https://deno.land/x/denodb/mod.ts";


export class Designation extends Model { 
  static table = "designations";
  static timestamps = true;
  
  static fields = {
    // fields list for ORM Maping
    id: { primaryKey: true, autoIncrement: true },
    designation: DataTypes.STRING,
    description: DataTypes.STRING,
    
  };

}
