// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: TrainingResult
|--------------------------------------------------------------------------
|
| Model Class and Interface of trainingResults
|
*/
import {
  DataTypes,
  Model
} from "https://deno.land/x/denodb/mod.ts";


export class TrainingResult extends Model { 
  static table = "trainingResults";
  static timestamps = true;
  
  static fields = {
    // fields list for ORM Maping
    id: { primaryKey: true, autoIncrement: true },
    trainingEvent: DataTypes.STRING,
    employees: DataTypes.STRING,
    amendedFrom: DataTypes.STRING,
    employeeEmails: DataTypes.STRING,
    
  };

}
