// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: SalaryStructureAssignment
|--------------------------------------------------------------------------
|
| Model Class and Interface of salaryStructureAssignments
|
*/
import {
  BaseModel,
  Field,
  FieldType,
  Model
} from "https://deno.land/x/dso@v1.0.0/mod.ts";

@Model("salaryStructureAssignments")
export class SalaryStructureAssignment extends BaseModel { 

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
  department!: string;
  
  @Field({ type: FieldType.STRING })
  designation!: string;
  
  @Field({ type: FieldType.STRING })
  salaryStructure!: string;
  
  @Field({ type: FieldType.STRING })
  fromDate!: string;
  
  @Field({ type: FieldType.STRING })
  company!: string;
  
  @Field({ type: FieldType.STRING })
  base!: string;
  
  @Field({ type: FieldType.STRING })
  variable!: string;
  
  @Field({ type: FieldType.STRING })
  amendedFrom!: string;
  
  
}

export interface ISalaryStructureAssignment {
  id: number;
  employee: string;
  employeeName: string;
  department: string;
  designation: string;
  salaryStructure: string;
  fromDate: string;
  company: string;
  base: string;
  variable: string;
  amendedFrom: string;
  
}
