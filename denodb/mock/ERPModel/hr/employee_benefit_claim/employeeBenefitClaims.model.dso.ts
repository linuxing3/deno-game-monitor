// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: EmployeeBenefitClaim
|--------------------------------------------------------------------------
|
| Model Class and Interface of employeeBenefitClaims
|
*/
import {
  BaseModel,
  Field,
  FieldType,
  Model
} from "https://deno.land/x/dso@v1.0.0/mod.ts";

@Model("employeeBenefitClaims")
export class EmployeeBenefitClaim extends BaseModel { 

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
  claimDate!: string;
  
  @Field({ type: FieldType.STRING })
  benefitTypeAndAmount!: string;
  
  @Field({ type: FieldType.STRING })
  claimBenefitFor!: string;
  
  @Field({ type: FieldType.STRING })
  maxAmountEligible!: string;
  
  @Field({ type: FieldType.STRING })
  payAgainstBenefitClaim!: string;
  
  @Field({ type: FieldType.STRING })
  claimedAmount!: string;
  
  @Field({ type: FieldType.STRING })
  salarySlip!: string;
  
  @Field({ type: FieldType.STRING })
  amendedFrom!: string;
  
  @Field({ type: FieldType.STRING })
  expenseProof!: string;
  
  @Field({ type: FieldType.STRING })
  attachments!: string;
  
  
}

export interface IEmployeeBenefitClaim {
  id: number;
  employee: string;
  employeeName: string;
  department: string;
  claimDate: string;
  benefitTypeAndAmount: string;
  claimBenefitFor: string;
  maxAmountEligible: string;
  payAgainstBenefitClaim: string;
  claimedAmount: string;
  salarySlip: string;
  amendedFrom: string;
  expenseProof: string;
  attachments: string;
  
}
