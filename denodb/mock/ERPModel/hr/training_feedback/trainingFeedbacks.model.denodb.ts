// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: TrainingFeedback
|--------------------------------------------------------------------------
|
| Model Class and Interface of trainingFeedbacks
|
*/
import {
  DataTypes,
  Model
} from "https://deno.land/x/denodb/mod.ts";


export class TrainingFeedback extends Model { 
  static table = "trainingFeedbacks";
  static timestamps = true;
  
  static fields = {
    // fields list for ORM Maping
    id: { primaryKey: true, autoIncrement: true },
    employee: DataTypes.STRING,
    employeeName: DataTypes.STRING,
    department: DataTypes.STRING,
    course: DataTypes.STRING,
    trainingEvent: DataTypes.STRING,
    eventName: DataTypes.STRING,
    trainerName: DataTypes.STRING,
    feedback: DataTypes.STRING,
    amendedFrom: DataTypes.STRING,
    
  };

}
