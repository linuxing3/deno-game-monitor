// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: SalaryStructure
|--------------------------------------------------------------------------
|
| Model Class and Interface of salaryStructures
|
*/
import {
  BaseModel,
  Field,
  FieldType,
  Model
} from "https://deno.land/x/dso@v1.0.0/mod.ts";

@Model("salaryStructures")
export class SalaryStructure extends BaseModel { 

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
  letterHead!: string;
  
  @Field({ type: FieldType.STRING })
  isActive!: string;
  
  @Field({ type: FieldType.STRING })
  payrollFrequency!: string;
  
  @Field({ type: FieldType.STRING })
  isDefault!: string;
  
  @Field({ type: FieldType.STRING })
  salarySlipBasedOnTimesheet!: string;
  
  @Field({ type: FieldType.STRING })
  salaryComponent!: string;
  
  @Field({ type: FieldType.STRING })
  hourRate!: string;
  
  @Field({ type: FieldType.STRING })
  leaveEncashmentAmountPerDay!: string;
  
  @Field({ type: FieldType.STRING })
  maxBenefitsAmount!: string;
  
  @Field({ type: FieldType.STRING })
  earning!: string;
  
  @Field({ type: FieldType.STRING })
  earnings!: string;
  
  @Field({ type: FieldType.STRING })
  deduction!: string;
  
  @Field({ type: FieldType.STRING })
  deductions!: string;
  
  @Field({ type: FieldType.STRING })
  totalEarning!: string;
  
  @Field({ type: FieldType.STRING })
  totalDeduction!: string;
  
  @Field({ type: FieldType.STRING })
  netPay!: string;
  
  @Field({ type: FieldType.STRING })
  account!: string;
  
  @Field({ type: FieldType.STRING })
  modeOfPayment!: string;
  
  @Field({ type: FieldType.STRING })
  paymentAccount!: string;
  
  @Field({ type: FieldType.STRING })
  amendedFrom!: string;
  
  
}

export interface ISalaryStructure {
  id: number;
  company: string;
  letterHead: string;
  isActive: string;
  payrollFrequency: string;
  isDefault: string;
  salarySlipBasedOnTimesheet: string;
  salaryComponent: string;
  hourRate: string;
  leaveEncashmentAmountPerDay: string;
  maxBenefitsAmount: string;
  earning: string;
  earnings: string;
  deduction: string;
  deductions: string;
  totalEarning: string;
  totalDeduction: string;
  netPay: string;
  account: string;
  modeOfPayment: string;
  paymentAccount: string;
  amendedFrom: string;
  
}
