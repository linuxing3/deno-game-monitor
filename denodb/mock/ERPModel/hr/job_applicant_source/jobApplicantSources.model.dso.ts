// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: JobApplicantSource
|--------------------------------------------------------------------------
|
| Model Class and Interface of jobApplicantSources
|
*/
import {
  BaseModel,
  Field,
  FieldType,
  Model
} from "https://deno.land/x/dso@v1.0.0/mod.ts";

@Model("jobApplicantSources")
export class JobApplicantSource extends BaseModel { 

  @Field({
    type: FieldType.INT,
    primary: true,
    length: 11,
    autoIncrement: true
  })
  id!: number;

  @Field({ type: FieldType.STRING })
  sourceName!: string;
  
  @Field({ type: FieldType.STRING })
  details!: string;
  
  
}

export interface IJobApplicantSource {
  id: number;
  sourceName: string;
  details: string;
  
}
