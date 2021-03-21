// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: SalaryComponent
|--------------------------------------------------------------------------
|
| Model Class and Interface of salaryComponents
|
*/
import {
  BaseModel,
  Field,
  FieldType,
  Model
} from "https://deno.land/x/dso@v1.0.0/mod.ts";

@Model("salaryComponents")
export class SalaryComponent extends BaseModel { 

  @Field({
    type: FieldType.INT,
    primary: true,
    length: 11,
    autoIncrement: true
  })
  id!: number;

  @Field({ type: FieldType.STRING })
  name!: string;
  
  @Field({ type: FieldType.STRING })
  abbr!: string;
  
  @Field({ type: FieldType.STRING })
  type!: string;
  
  @Field({ type: FieldType.STRING })
  isAdditionalComponent!: string;
  
  @Field({ type: FieldType.STRING })
  isTaxApplicable!: string;
  
  @Field({ type: FieldType.STRING })
  isPayable!: string;
  
  @Field({ type: FieldType.STRING })
  dependsOnLeaveWithoutPay!: string;
  
  @Field({ type: FieldType.STRING })
  doNotIncludeInTotal!: string;
  
  @Field({ type: FieldType.STRING })
  disabled!: string;
  
  @Field({ type: FieldType.STRING })
  description!: string;
  
  @Field({ type: FieldType.STRING })
  statisticalComponent!: string;
  
  @Field({ type: FieldType.STRING })
  flexibleBenefits!: string;
  
  @Field({ type: FieldType.STRING })
  isFlexibleBenefit!: string;
  
  @Field({ type: FieldType.STRING })
  maxBenefitAmountYearly!: string;
  
  @Field({ type: FieldType.STRING })
  payAgainstBenefitClaim!: string;
  
  @Field({ type: FieldType.STRING })
  onlyTaxImpactCannotClaimButPartOfTaxableIncome!: string;
  
  @Field({ type: FieldType.STRING })
  createSeparatePaymentEntryAgainstBenefitClaim!: string;
  
  @Field({ type: FieldType.STRING })
  variableBasedOnTaxableSalary!: string;
  
  @Field({ type: FieldType.STRING })
  accounts!: string;
  
  @Field({ type: FieldType.STRING })
  conditionAndFormula!: string;
  
  @Field({ type: FieldType.STRING })
  condition!: string;
  
  @Field({ type: FieldType.STRING })
  amountBasedOnFormula!: string;
  
  @Field({ type: FieldType.STRING })
  formula!: string;
  
  @Field({ type: FieldType.STRING })
  amount!: string;
  
  @Field({ type: FieldType.STRING })
  help!: string;
  
  
}

export interface ISalaryComponent {
  id: number;
  name: string;
  abbr: string;
  type: string;
  isAdditionalComponent: string;
  isTaxApplicable: string;
  isPayable: string;
  dependsOnLeaveWithoutPay: string;
  doNotIncludeInTotal: string;
  disabled: string;
  description: string;
  statisticalComponent: string;
  flexibleBenefits: string;
  isFlexibleBenefit: string;
  maxBenefitAmountYearly: string;
  payAgainstBenefitClaim: string;
  onlyTaxImpactCannotClaimButPartOfTaxableIncome: string;
  createSeparatePaymentEntryAgainstBenefitClaim: string;
  variableBasedOnTaxableSalary: string;
  accounts: string;
  conditionAndFormula: string;
  condition: string;
  amountBasedOnFormula: string;
  formula: string;
  amount: string;
  help: string;
  
}
