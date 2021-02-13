// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: EmploymentType
|--------------------------------------------------------------------------
|
| Model Class and Interface of employmentTypes
|
*/
import {
  BaseModel,
  Field,
  FieldType,
  Model
} from "https://deno.land/x/dso@v1.0.0/mod.ts";

@Model("employmentTypes")
export class EmploymentType extends BaseModel { 

  @Field({
    type: FieldType.INT,
    primary: true,
    length: 11,
    autoIncrement: true
  })
  id!: number;

  @Field({ type: FieldType.STRING })
  employmentType!: string;
  
  
}

export interface IEmploymentType {
  id: number;
  employmentType: string;
  
}
