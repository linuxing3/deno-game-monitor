// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: DependentTask
|--------------------------------------------------------------------------
|
| Model Class and Interface of dependentTasks
|
*/
import {
  DataTypes,
  Model
} from "https://deno.land/x/denodb/mod.ts";


export class DependentTask extends Model { 
  static table = "dependentTasks";
  static timestamps = true;
  
  static fields = {
    // fields list for ORM Maping
    id: { primaryKey: true, autoIncrement: true },
    task: DataTypes.STRING,
    
  };

}
