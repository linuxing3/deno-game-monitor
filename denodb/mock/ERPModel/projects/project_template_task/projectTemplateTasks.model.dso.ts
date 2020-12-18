// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: ProjectTemplateTask
|--------------------------------------------------------------------------
|
| Model Class and Interface of projectTemplateTasks
|
*/
import {
  BaseModel,
  Field,
  FieldType,
  Model
} from "https://deno.land/x/dso@v1.0.0/mod.ts";

@Model("projectTemplateTasks")
export class ProjectTemplateTask extends BaseModel { 

  @Field({
    type: FieldType.INT,
    primary: true,
    length: 11,
    autoIncrement: true
  })
  id!: number;

  @Field({ type: FieldType.STRING })
  subject!: string;
  
  @Field({ type: FieldType.STRING })
  beginOnDays!: string;
  
  @Field({ type: FieldType.STRING })
  durationDays!: string;
  
  @Field({ type: FieldType.STRING })
  taskWeight!: string;
  
  @Field({ type: FieldType.STRING })
  description!: string;
  
  
}

export interface IProjectTemplateTask {
  id: number;
  subject: string;
  beginOnDays: string;
  durationDays: string;
  taskWeight: string;
  description: string;
  
}
