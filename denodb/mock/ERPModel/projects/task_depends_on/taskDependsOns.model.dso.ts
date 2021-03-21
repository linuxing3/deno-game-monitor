// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: TaskDependsOn
|--------------------------------------------------------------------------
|
| Model Class and Interface of taskDependsOns
|
*/
import {
  BaseModel,
  Field,
  FieldType,
  Model
} from "https://deno.land/x/dso@v1.0.0/mod.ts";

@Model("taskDependsOns")
export class TaskDependsOn extends BaseModel { 

  @Field({
    type: FieldType.INT,
    primary: true,
    length: 11,
    autoIncrement: true
  })
  id!: number;

  @Field({ type: FieldType.STRING })
  task!: string;
  
  @Field({ type: FieldType.STRING })
  subject!: string;
  
  @Field({ type: FieldType.STRING })
  project!: string;
  
  
}

export interface ITaskDependsOn {
  id: number;
  task: string;
  subject: string;
  project: string;
  
}
