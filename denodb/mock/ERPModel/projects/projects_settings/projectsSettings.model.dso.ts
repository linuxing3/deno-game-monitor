// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: ProjectsSetting
|--------------------------------------------------------------------------
|
| Model Class and Interface of projectsSettings
|
*/
import {
  BaseModel,
  Field,
  FieldType,
  Model
} from "https://deno.land/x/dso@v1.0.0/mod.ts";

@Model("projectsSettings")
export class ProjectsSetting extends BaseModel { 

  @Field({
    type: FieldType.INT,
    primary: true,
    length: 11,
    autoIncrement: true
  })
  id!: number;

  @Field({ type: FieldType.STRING })
  timesheets!: string;
  
  @Field({ type: FieldType.STRING })
  ignoreWorkstationTimeOverlap!: string;
  
  @Field({ type: FieldType.STRING })
  ignoreUserTimeOverlap!: string;
  
  @Field({ type: FieldType.STRING })
  ignoreEmployeeTimeOverlap!: string;
  
  
}

export interface IProjectsSetting {
  id: number;
  timesheets: string;
  ignoreWorkstationTimeOverlap: string;
  ignoreUserTimeOverlap: string;
  ignoreEmployeeTimeOverlap: string;
  
}
