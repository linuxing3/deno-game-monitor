// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: ProjectTemplate
|--------------------------------------------------------------------------
|
| Model Class and Interface of projectTemplates
|
*/
import {
  BaseModel,
  Field,
  FieldType,
  Model
} from "https://deno.land/x/dso@v1.0.0/mod.ts";

@Model("projectTemplates")
export class ProjectTemplate extends BaseModel { 

  @Field({
    type: FieldType.INT,
    primary: true,
    length: 11,
    autoIncrement: true
  })
  id!: number;

  @Field({ type: FieldType.STRING })
  projectType!: string;
  
  @Field({ type: FieldType.STRING })
  tasks!: string;
  
  
}

export interface IProjectTemplate {
  id: number;
  projectType: string;
  tasks: string;
  
}
