// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: ProjectType
|--------------------------------------------------------------------------
|
| Model Class and Interface of projectTypes
|
*/
import {
  BaseModel,
  Field,
  FieldType,
  Model
} from "https://deno.land/x/dso@v1.0.0/mod.ts";

@Model("projectTypes")
export class ProjectType extends BaseModel { 

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
  description!: string;
  
  
}

export interface IProjectType {
  id: number;
  projectType: string;
  description: string;
  
}
