// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: SalaryDetail
|--------------------------------------------------------------------------
|
| Model Class and Interface of salaryDetails
|
*/
import {
  BaseModel,
  Field,
  FieldType,
  Model
} from "https://deno.land/x/dso@v1.0.0/mod.ts";

@Model("salaryDetails")
export class SalaryDetail extends BaseModel { 

  @Field({
    type: FieldType.INT,
    primary: true,
    length: 11,
    autoIncrement: true
  })
  id!: number;

  @Field({ type: FieldType.STRING })
  component!: string;
  
  @Field({ type: FieldType.STRING })
  abbr!: string;
  
  @Field({ type: FieldType.STRING })
  statisticalComponent!: string;
  
  @Field({ type: FieldType.STRING })
  isTaxApplicable!: string;
  
  @Field({ type: FieldType.STRING })
  isFlexibleBenefit!: string;
  
  @Field({ type: FieldType.STRING })
  isAdditionalComponent!: string;
  
  @Field({ type: FieldType.STRING })
  variableBasedOnTaxableSalary!: string;
  
  @Field({ type: FieldType.STRING })
  dependsOnLeaveWithoutPay!: string;
  
  @Field({ type: FieldType.STRING })
  condition!: string;
  
  @Field({ type: FieldType.STRING })
  amountBasedOnFormula!: string;
  
  @Field({ type: FieldType.STRING })
  formula!: string;
  
  @Field({ type: FieldType.STRING })
  amount!: string;
  
  @Field({ type: FieldType.STRING })
  doNotIncludeInTotal!: string;
  
  @Field({ type: FieldType.STRING })
  defaultAmount!: string;
  
  @Field({ type: FieldType.STRING })
  taxOnFlexibleBenefit!: string;
  
  @Field({ type: FieldType.STRING })
  taxOnAdditionalSalary!: string;
  
  @Field({ type: FieldType.STRING })
  conditionAndFormulaHelp!: string;
  
  
}

export interface ISalaryDetail {
  id: number;
  component: string;
  abbr: string;
  statisticalComponent: string;
  isTaxApplicable: string;
  isFlexibleBenefit: string;
  isAdditionalComponent: string;
  variableBasedOnTaxableSalary: string;
  dependsOnLeaveWithoutPay: string;
  condition: string;
  amountBasedOnFormula: string;
  formula: string;
  amount: string;
  doNotIncludeInTotal: string;
  defaultAmount: string;
  taxOnFlexibleBenefit: string;
  taxOnAdditionalSalary: string;
  conditionAndFormulaHelp: string;
  
}
