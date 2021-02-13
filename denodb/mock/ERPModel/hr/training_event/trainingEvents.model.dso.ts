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
  BaseModel,
  Field,
  FieldType,
  Model
} from "https://deno.land/x/dso@v1.0.0/mod.ts";

@Model("trainingEvents")
export class TrainingEvent extends BaseModel { 

  @Field({
    type: FieldType.INT,
    primary: true,
    length: 11,
    autoIncrement: true
  })
  id!: number;

  @Field({ type: FieldType.STRING })
  eventName!: string;
  
  @Field({ type: FieldType.STRING })
  trainingProgram!: string;
  
  @Field({ type: FieldType.STRING })
  eventStatus!: string;
  
  @Field({ type: FieldType.STRING })
  hasCertificate!: string;
  
  @Field({ type: FieldType.STRING })
  type!: string;
  
  @Field({ type: FieldType.STRING })
  level!: string;
  
  @Field({ type: FieldType.STRING })
  company!: string;
  
  @Field({ type: FieldType.STRING })
  trainerName!: string;
  
  @Field({ type: FieldType.STRING })
  trainerEmail!: string;
  
  @Field({ type: FieldType.STRING })
  supplier!: string;
  
  @Field({ type: FieldType.STRING })
  contactNumber!: string;
  
  @Field({ type: FieldType.STRING })
  course!: string;
  
  @Field({ type: FieldType.STRING })
  location!: string;
  
  @Field({ type: FieldType.STRING })
  startTime!: string;
  
  @Field({ type: FieldType.STRING })
  endTime!: string;
  
  @Field({ type: FieldType.STRING })
  introduction!: string;
  
  @Field({ type: FieldType.STRING })
  attendees!: string;
  
  @Field({ type: FieldType.STRING })
  employees!: string;
  
  @Field({ type: FieldType.STRING })
  amendedFrom!: string;
  
  @Field({ type: FieldType.STRING })
  employeeEmails!: string;
  
  
}

export interface ITrainingEvent {
  id: number;
  eventName: string;
  trainingProgram: string;
  eventStatus: string;
  hasCertificate: string;
  type: string;
  level: string;
  company: string;
  trainerName: string;
  trainerEmail: string;
  supplier: string;
  contactNumber: string;
  course: string;
  location: string;
  startTime: string;
  endTime: string;
  introduction: string;
  attendees: string;
  employees: string;
  amendedFrom: string;
  employeeEmails: string;
  
}
