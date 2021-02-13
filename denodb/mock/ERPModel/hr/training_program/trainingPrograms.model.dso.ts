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
  BaseModel,
  Field,
  FieldType,
  Model
} from "https://deno.land/x/dso@v1.0.0/mod.ts";

@Model("trainingPrograms")
export class TrainingProgram extends BaseModel { 

  @Field({
    type: FieldType.INT,
    primary: true,
    length: 11,
    autoIncrement: true
  })
  id!: number;

  @Field({ type: FieldType.STRING })
  trainingProgram!: string;
  
  @Field({ type: FieldType.STRING })
  status!: string;
  
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
  description!: string;
  
  @Field({ type: FieldType.STRING })
  amendedFrom!: string;
  
  
}

export interface ITrainingProgram {
  id: number;
  trainingProgram: string;
  status: string;
  company: string;
  trainerName: string;
  trainerEmail: string;
  supplier: string;
  contactNumber: string;
  description: string;
  amendedFrom: string;
  
}
