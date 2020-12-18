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
  BaseModel,
  Field,
  FieldType,
  Model
} from "https://deno.land/x/dso@v1.0.0/mod.ts";

@Model("trainingFeedbacks")
export class TrainingFeedback extends BaseModel { 

  @Field({
    type: FieldType.INT,
    primary: true,
    length: 11,
    autoIncrement: true
  })
  id!: number;

  @Field({ type: FieldType.STRING })
  employee!: string;
  
  @Field({ type: FieldType.STRING })
  employeeName!: string;
  
  @Field({ type: FieldType.STRING })
  department!: string;
  
  @Field({ type: FieldType.STRING })
  course!: string;
  
  @Field({ type: FieldType.STRING })
  trainingEvent!: string;
  
  @Field({ type: FieldType.STRING })
  eventName!: string;
  
  @Field({ type: FieldType.STRING })
  trainerName!: string;
  
  @Field({ type: FieldType.STRING })
  feedback!: string;
  
  @Field({ type: FieldType.STRING })
  amendedFrom!: string;
  
  
}

export interface ITrainingFeedback {
  id: number;
  employee: string;
  employeeName: string;
  department: string;
  course: string;
  trainingEvent: string;
  eventName: string;
  trainerName: string;
  feedback: string;
  amendedFrom: string;
  
}
