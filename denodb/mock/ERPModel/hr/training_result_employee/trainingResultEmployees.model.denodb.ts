// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: TrainingResultEmployee
|--------------------------------------------------------------------------
|
| Model Class and Interface of trainingResultEmployees
|
*/
import {
  DataTypes,
  Model
} from "https://deno.land/x/denodb/mod.ts";


export class TrainingResultEmployee extends Model { 
  static table = "trainingResultEmployees";
  static timestamps = true;
  
  static fields = {
    // fields list for ORM Maping
    id: { primaryKey: true, autoIncrement: true },
    employee: DataTypes.STRING,
    employeeName: DataTypes.STRING,
    department: DataTypes.STRING,
    hours: DataTypes.STRING,
    grade: DataTypes.STRING,
    comments: DataTypes.STRING,
    
  };

}
