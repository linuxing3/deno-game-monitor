// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: LinkedLocation
|--------------------------------------------------------------------------
|
| Model Class and Interface of linkedLocations
|
*/
import {
  DataTypes,
  Model
} from "https://deno.land/x/denodb/mod.ts";


export class LinkedLocation extends Model { 
  static table = "linkedLocations";
  static timestamps = true;
  
  static fields = {
    // fields list for ORM Maping
    id: { primaryKey: true, autoIncrement: true },
    location: DataTypes.STRING,
    
  };

}
