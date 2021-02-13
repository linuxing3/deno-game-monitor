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
  BaseModel,
  Field,
  FieldType,
  Model
} from "https://deno.land/x/dso@v1.0.0/mod.ts";

@Model("trainingResults")
export class TrainingResult extends BaseModel { 

  @Field({
    type: FieldType.INT,
    primary: true,
    length: 11,
    autoIncrement: true
  })
  id!: number;

  @Field({ type: FieldType.STRING })
  trainingEvent!: string;
  
  @Field({ type: FieldType.STRING })
  employees!: string;
  
  @Field({ type: FieldType.STRING })
  amendedFrom!: string;
  
  @Field({ type: FieldType.STRING })
  employeeEmails!: string;
  
  
}

export interface ITrainingResult {
  id: number;
  trainingEvent: string;
  employees: string;
  amendedFrom: string;
  employeeEmails: string;
  
}
