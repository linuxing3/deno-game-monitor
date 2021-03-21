// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: EmployeeGrade
|--------------------------------------------------------------------------
|
| Model Class and Interface of employeeGrades
|
*/
import {
  BaseModel,
  Field,
  FieldType,
  Model
} from "https://deno.land/x/dso@v1.0.0/mod.ts";

@Model("employeeGrades")
export class EmployeeGrade extends BaseModel { 

  @Field({
    type: FieldType.INT,
    primary: true,
    length: 11,
    autoIncrement: true
  })
  id!: number;

  @Field({ type: FieldType.STRING })
  defaultLeavePolicy!: string;
  
  @Field({ type: FieldType.STRING })
  defaultSalaryStructure!: string;
  
  
}

export interface IEmployeeGrade {
  id: number;
  defaultLeavePolicy: string;
  defaultSalaryStructure: string;
  
}
