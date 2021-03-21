// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: TrainingEvent
|--------------------------------------------------------------------------
|
| Model Class and Interface of trainingEvents
|
*/
import {
  DataTypes,
  Model
} from "https://deno.land/x/denodb/mod.ts";


export class TrainingEvent extends Model { 
  static table = "trainingEvents";
  static timestamps = true;
  
  static fields = {
    // fields list for ORM Maping
    id: { primaryKey: true, autoIncrement: true },
    eventName: DataTypes.STRING,
    trainingProgram: DataTypes.STRING,
    eventStatus: DataTypes.STRING,
    hasCertificate: DataTypes.STRING,
    type: DataTypes.STRING,
    level: DataTypes.STRING,
    company: DataTypes.STRING,
    trainerName: DataTypes.STRING,
    trainerEmail: DataTypes.STRING,
    supplier: DataTypes.STRING,
    contactNumber: DataTypes.STRING,
    course: DataTypes.STRING,
    location: DataTypes.STRING,
    startTime: DataTypes.STRING,
    endTime: DataTypes.STRING,
    introduction: DataTypes.STRING,
    attendees: DataTypes.STRING,
    employees: DataTypes.STRING,
    amendedFrom: DataTypes.STRING,
    employeeEmails: DataTypes.STRING,
    
  };

}
