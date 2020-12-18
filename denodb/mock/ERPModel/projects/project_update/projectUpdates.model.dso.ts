// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: ProjectUpdate
|--------------------------------------------------------------------------
|
| Model Class and Interface of projectUpdates
|
*/
import {
  BaseModel,
  Field,
  FieldType,
  Model
} from "https://deno.land/x/dso@v1.0.0/mod.ts";

@Model("projectUpdates")
export class ProjectUpdate extends BaseModel { 

  @Field({
    type: FieldType.INT,
    primary: true,
    length: 11,
    autoIncrement: true
  })
  id!: number;

  @Field({ type: FieldType.STRING })
  series!: string;
  
  @Field({ type: FieldType.STRING })
  project!: string;
  
  @Field({ type: FieldType.STRING })
  sent!: string;
  
  @Field({ type: FieldType.STRING })
  date!: string;
  
  @Field({ type: FieldType.STRING })
  time!: string;
  
  @Field({ type: FieldType.STRING })
  users!: string;
  
  @Field({ type: FieldType.STRING })
  amendedFrom!: string;
  
  
}

export interface IProjectUpdate {
  id: number;
  series: string;
  project: string;
  sent: string;
  date: string;
  time: string;
  users: string;
  amendedFrom: string;
  
}
