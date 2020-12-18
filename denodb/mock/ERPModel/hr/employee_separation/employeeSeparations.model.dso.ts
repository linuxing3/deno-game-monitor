// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: EmployeeSeparation
|--------------------------------------------------------------------------
|
| Model Class and Interface of employeeSeparations
|
*/
import {
  BaseModel,
  Field,
  FieldType,
  Model
} from "https://deno.land/x/dso@v1.0.0/mod.ts";

@Model("employeeSeparations")
export class EmployeeSeparation extends BaseModel { 

  @Field({
    type: FieldType.INT,
    primary: true,
    length: 11,
    autoIncrement: true
  })
  id!: number;

  @Field({ type: FieldType.STRING })
  employee!: string;
  
  @Field({ type: FieldType.STRING })
  employeeName!: string;
  
  @Field({ type: FieldType.STRING })
  resignationLetterDate!: string;
  
  @Field({ type: FieldType.STRING })
  status!: string;
  
  @Field({ type: FieldType.STRING })
  project!: string;
  
  @Field({ type: FieldType.STRING })
  employeeSeparationTemplate!: string;
  
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
  
  @Field({ type: FieldType.STRING })
  exitInterviewSummary!: string;
  
  @Field({ type: FieldType.STRING })
  amendedFrom!: string;
  
  
}

export interface IEmployeeSeparation {
  id: number;
  employee: string;
  employeeName: string;
  resignationLetterDate: string;
  status: string;
  project: string;
  employeeSeparationTemplate: string;
  company: string;
  department: string;
  designation: string;
  employeeGrade: string;
  activities: string;
  exitInterviewSummary: string;
  amendedFrom: string;
  
}
