// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: TrainingEventEmployee
|--------------------------------------------------------------------------
|
| Model Class and Interface of trainingEventEmployees
|
*/
import {
  DataTypes,
  Model
} from "https://deno.land/x/denodb/mod.ts";


export class TrainingEventEmployee extends Model { 
  static table = "trainingEventEmployees";
  static timestamps = true;
  
  static fields = {
    // fields list for ORM Maping
    id: { primaryKey: true, autoIncrement: true },
    employee: DataTypes.STRING,
    employeeName: DataTypes.STRING,
    department: DataTypes.STRING,
    status: DataTypes.STRING,
    attendance: DataTypes.STRING,
    
  };

}
