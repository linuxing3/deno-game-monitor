// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: ProjectTask
|--------------------------------------------------------------------------
|
| Model Class and Interface of projectTasks
|
*/
import {
  BaseModel,
  Field,
  FieldType,
  Model
} from "https://deno.land/x/dso@v1.0.0/mod.ts";

@Model("projectTasks")
export class ProjectTask extends BaseModel { 

  @Field({
    type: FieldType.INT,
    primary: true,
    length: 11,
    autoIncrement: true
  })
  id!: number;

  @Field({ type: FieldType.STRING })
  title!: string;
  
  @Field({ type: FieldType.STRING })
  status!: string;
  
  @Field({ type: FieldType.STRING })
  viewTask!: string;
  
  @Field({ type: FieldType.STRING })
  viewTimesheet!: string;
  
  @Field({ type: FieldType.STRING })
  makeTimesheet!: string;
  
  @Field({ type: FieldType.STRING })
  startDate!: string;
  
  @Field({ type: FieldType.STRING })
  endDate!: string;
  
  @Field({ type: FieldType.STRING })
  weight!: string;
  
  @Field({ type: FieldType.STRING })
  description!: string;
  
  @Field({ type: FieldType.STRING })
  taskId!: string;
  
  
}

export interface IProjectTask {
  id: number;
  title: string;
  status: string;
  viewTask: string;
  viewTimesheet: string;
  makeTimesheet: string;
  startDate: string;
  endDate: string;
  weight: string;
  description: string;
  taskId: string;
  
}
