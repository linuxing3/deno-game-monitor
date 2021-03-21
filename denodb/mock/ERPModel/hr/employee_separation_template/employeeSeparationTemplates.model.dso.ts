// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: EmployeeSeparationTemplate
|--------------------------------------------------------------------------
|
| Model Class and Interface of employeeSeparationTemplates
|
*/
import {
  BaseModel,
  Field,
  FieldType,
  Model
} from "https://deno.land/x/dso@v1.0.0/mod.ts";

@Model("employeeSeparationTemplates")
export class EmployeeSeparationTemplate extends BaseModel { 

  @Field({
    type: FieldType.INT,
    primary: true,
    length: 11,
    autoIncrement: true
  })
  id!: number;

  @Field({ type: FieldType.STRING })
  company!: string;
  
  @Field({ type: FieldType.STRING })
  department!: string;
  
  @Field({ type: FieldType.STRING })
  designation!: string;
  
  @Field({ type: FieldType.STRING })
  employeeGrade!: string;
  
  @Field({ type: FieldType.STRING })
  activities!: string;
  
  
}

export interface IEmployeeSeparationTemplate {
  id: number;
  company: string;
  department: string;
  designation: string;
  employeeGrade: string;
  activities: string;
  
}
