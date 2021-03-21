// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: Holiday
|--------------------------------------------------------------------------
|
| Model Class and Interface of holidays
|
*/
import {
  DataTypes,
  Model
} from "https://deno.land/x/denodb/mod.ts";


export class Holiday extends Model { 
  static table = "holidays";
  static timestamps = true;
  
  static fields = {
    // fields list for ORM Maping
    id: { primaryKey: true, autoIncrement: true },
    date: DataTypes.STRING,
    description: DataTypes.STRING,
    
  };

}
