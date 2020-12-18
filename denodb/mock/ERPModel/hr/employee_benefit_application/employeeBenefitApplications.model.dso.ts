// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: EmployeeBenefitApplication
|--------------------------------------------------------------------------
|
| Model Class and Interface of employeeBenefitApplications
|
*/
import {
  BaseModel,
  Field,
  FieldType,
  Model
} from "https://deno.land/x/dso@v1.0.0/mod.ts";

@Model("employeeBenefitApplications")
export class EmployeeBenefitApplication extends BaseModel { 

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
  maxBenefitsYearly!: string;
  
  @Field({ type: FieldType.STRING })
  remainingBenefitsYearly!: string;
  
  @Field({ type: FieldType.STRING })
  date!: string;
  
  @Field({ type: FieldType.STRING })
  payrollPeriod!: string;
  
  @Field({ type: FieldType.STRING })
  department!: string;
  
  @Field({ type: FieldType.STRING })
  amendedFrom!: string;
  
  @Field({ type: FieldType.STRING })
  benefitsApplied!: string;
  
  @Field({ type: FieldType.STRING })
  employeeBenefits!: string;
  
  @Field({ type: FieldType.STRING })
  totals!: string;
  
  @Field({ type: FieldType.STRING })
  totalAmount!: string;
  
  @Field({ type: FieldType.STRING })
  dispensedAmountProRated!: string;
  
  
}

export interface IEmployeeBenefitApplication {
  id: number;
  employee: string;
  employeeName: string;
  maxBenefitsYearly: string;
  remainingBenefitsYearly: string;
  date: string;
  payrollPeriod: string;
  department: string;
  amendedFrom: string;
  benefitsApplied: string;
  employeeBenefits: string;
  totals: string;
  totalAmount: string;
  dispensedAmountProRated: string;
  
}
