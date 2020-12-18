// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: EmployeeEducation
|--------------------------------------------------------------------------
|
| Model Class and Interface of employeeEducations
|
*/
import {
  BaseModel,
  Field,
  FieldType,
  Model
} from "https://deno.land/x/dso@v1.0.0/mod.ts";

@Model("employeeEducations")
export class EmployeeEducation extends BaseModel { 

  @Field({
    type: FieldType.INT,
    primary: true,
    length: 11,
    autoIncrement: true
  })
  id!: number;

  @Field({ type: FieldType.STRING })
  schoolUniversity!: string;
  
  @Field({ type: FieldType.STRING })
  qualification!: string;
  
  @Field({ type: FieldType.STRING })
  level!: string;
  
  @Field({ type: FieldType.STRING })
  yearOfPassing!: string;
  
  @Field({ type: FieldType.STRING })
  classPercentage!: string;
  
  @Field({ type: FieldType.STRING })
  majorOptionalSubjects!: string;
  
  
}

export interface IEmployeeEducation {
  id: number;
  schoolUniversity: string;
  qualification: string;
  level: string;
  yearOfPassing: string;
  classPercentage: string;
  majorOptionalSubjects: string;
  
}
