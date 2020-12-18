// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: EmployeeOnboardingTemplate
|--------------------------------------------------------------------------
|
| Model Class and Interface of employeeOnboardingTemplates
|
*/
import {
  BaseModel,
  Field,
  FieldType,
  Model
} from "https://deno.land/x/dso@v1.0.0/mod.ts";

@Model("employeeOnboardingTemplates")
export class EmployeeOnboardingTemplate extends BaseModel { 

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

export interface IEmployeeOnboardingTemplate {
  id: number;
  company: string;
  department: string;
  designation: string;
  employeeGrade: string;
  activities: string;
  
}
