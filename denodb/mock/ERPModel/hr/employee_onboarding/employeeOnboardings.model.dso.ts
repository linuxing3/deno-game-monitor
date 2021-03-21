// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: EmployeeOnboarding
|--------------------------------------------------------------------------
|
| Model Class and Interface of employeeOnboardings
|
*/
import {
  BaseModel,
  Field,
  FieldType,
  Model
} from "https://deno.land/x/dso@v1.0.0/mod.ts";

@Model("employeeOnboardings")
export class EmployeeOnboarding extends BaseModel { 

  @Field({
    type: FieldType.INT,
    primary: true,
    length: 11,
    autoIncrement: true
  })
  id!: number;

  @Field({ type: FieldType.STRING })
  jobApplicant!: string;
  
  @Field({ type: FieldType.STRING })
  jobOffer!: string;
  
  @Field({ type: FieldType.STRING })
  employeeName!: string;
  
  @Field({ type: FieldType.STRING })
  employee!: string;
  
  @Field({ type: FieldType.STRING })
  dateOfJoining!: string;
  
  @Field({ type: FieldType.STRING })
  status!: string;
  
  @Field({ type: FieldType.STRING })
  employeeOnboardingTemplate!: string;
  
  @Field({ type: FieldType.STRING })
  company!: string;
  
  @Field({ type: FieldType.STRING })
  department!: string;
  
  @Field({ type: FieldType.STRING })
  designation!: string;
  
  @Field({ type: FieldType.STRING })
  employeeGrade!: string;
  
  @Field({ type: FieldType.STRING })
  project!: string;
  
  @Field({ type: FieldType.STRING })
  activities!: string;
  
  @Field({ type: FieldType.STRING })
  amendedFrom!: string;
  
  
}

export interface IEmployeeOnboarding {
  id: number;
  jobApplicant: string;
  jobOffer: string;
  employeeName: string;
  employee: string;
  dateOfJoining: string;
  status: string;
  employeeOnboardingTemplate: string;
  company: string;
  department: string;
  designation: string;
  employeeGrade: string;
  project: string;
  activities: string;
  amendedFrom: string;
  
}
