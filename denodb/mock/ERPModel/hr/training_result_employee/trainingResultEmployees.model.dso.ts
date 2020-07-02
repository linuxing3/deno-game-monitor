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
  BaseModel,
  Field,
  FieldType,
  Model
} from "https://deno.land/x/dso@v1.0.0/mod.ts";

@Model("trainingResultEmployees")
export class TrainingResultEmployee extends BaseModel { 

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
  hours!: string;
  
  @Field({ type: FieldType.STRING })
  grade!: string;
  
  @Field({ type: FieldType.STRING })
  comments!: string;
  
  
}

export interface ITrainingResultEmployee {
  id: number;
  employee: string;
  employeeName: string;
  department: string;
  hours: string;
  grade: string;
  comments: string;
  
}
