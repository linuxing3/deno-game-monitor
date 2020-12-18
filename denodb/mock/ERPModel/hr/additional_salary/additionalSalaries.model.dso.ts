// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: AdditionalSalary
|--------------------------------------------------------------------------
|
| Model Class and Interface of additionalSalaries
|
*/
import {
  BaseModel,
  Field,
  FieldType,
  Model
} from "https://deno.land/x/dso@v1.0.0/mod.ts";

@Model("additionalSalaries")
export class AdditionalSalary extends BaseModel { 

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
  employee!: string;
  
  @Field({ type: FieldType.STRING })
  salaryComponent!: string;
  
  @Field({ type: FieldType.STRING })
  amount!: string;
  
  @Field({ type: FieldType.STRING })
  overwriteSalaryStructureAmount!: string;
  
  @Field({ type: FieldType.STRING })
  payrollDate!: string;
  
  @Field({ type: FieldType.STRING })
  employeeName!: string;
  
  @Field({ type: FieldType.STRING })
  department!: string;
  
  @Field({ type: FieldType.STRING })
  company!: string;
  
  @Field({ type: FieldType.STRING })
  salarySlip!: string;
  
  @Field({ type: FieldType.STRING })
  salaryComponentType!: string;
  
  @Field({ type: FieldType.STRING })
  amendedFrom!: string;
  
  
}

export interface IAdditionalSalary {
  id: number;
  series: string;
  employee: string;
  salaryComponent: string;
  amount: string;
  overwriteSalaryStructureAmount: string;
  payrollDate: string;
  employeeName: string;
  department: string;
  company: string;
  salarySlip: string;
  salaryComponentType: string;
  amendedFrom: string;
  
}
