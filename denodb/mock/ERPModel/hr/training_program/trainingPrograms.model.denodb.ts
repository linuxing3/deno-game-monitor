// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: TrainingProgram
|--------------------------------------------------------------------------
|
| Model Class and Interface of trainingPrograms
|
*/
import {
  DataTypes,
  Model
} from "https://deno.land/x/denodb/mod.ts";


export class TrainingProgram extends Model { 
  static table = "trainingPrograms";
  static timestamps = true;
  
  static fields = {
    // fields list for ORM Maping
    id: { primaryKey: true, autoIncrement: true },
    trainingProgram: DataTypes.STRING,
    status: DataTypes.STRING,
    company: DataTypes.STRING,
    trainerName: DataTypes.STRING,
    trainerEmail: DataTypes.STRING,
    supplier: DataTypes.STRING,
    contactNumber: DataTypes.STRING,
    description: DataTypes.STRING,
    amendedFrom: DataTypes.STRING,
    
  };

}
