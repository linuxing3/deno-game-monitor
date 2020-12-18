// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: LoanApplication
|--------------------------------------------------------------------------
|
| Model Class and Interface of loanApplications
|
*/
import {
  BaseModel,
  Field,
  FieldType,
  Model
} from "https://deno.land/x/dso@v1.0.0/mod.ts";

@Model("loanApplications")
export class LoanApplication extends BaseModel { 

  @Field({
    type: FieldType.INT,
    primary: true,
    length: 11,
    autoIncrement: true
  })
  id!: number;

  @Field({ type: FieldType.STRING })
  applicantType!: string;
  
  @Field({ type: FieldType.STRING })
  applicant!: string;
  
  @Field({ type: FieldType.STRING })
  applicantName!: string;
  
  @Field({ type: FieldType.STRING })
  postingDate!: string;
  
  @Field({ type: FieldType.STRING })
  status!: string;
  
  @Field({ type: FieldType.STRING })
  company!: string;
  
  @Field({ type: FieldType.STRING })
  loanInfo!: string;
  
  @Field({ type: FieldType.STRING })
  loanType!: string;
  
  @Field({ type: FieldType.STRING })
  loanAmount!: string;
  
  @Field({ type: FieldType.STRING })
  requiredByDate!: string;
  
  @Field({ type: FieldType.STRING })
  reason!: string;
  
  @Field({ type: FieldType.STRING })
  repaymentInfo!: string;
  
  @Field({ type: FieldType.STRING })
  repaymentMethod!: string;
  
  @Field({ type: FieldType.STRING })
  rateOfInterest!: string;
  
  @Field({ type: FieldType.STRING })
  totalPayableInterest!: string;
  
  @Field({ type: FieldType.STRING })
  monthlyRepaymentAmount!: string;
  
  @Field({ type: FieldType.STRING })
  repaymentPeriodInMonths!: string;
  
  @Field({ type: FieldType.STRING })
  totalPayableAmount!: string;
  
  @Field({ type: FieldType.STRING })
  amendedFrom!: string;
  
  
}

export interface ILoanApplication {
  id: number;
  applicantType: string;
  applicant: string;
  applicantName: string;
  postingDate: string;
  status: string;
  company: string;
  loanInfo: string;
  loanType: string;
  loanAmount: string;
  requiredByDate: string;
  reason: string;
  repaymentInfo: string;
  repaymentMethod: string;
  rateOfInterest: string;
  totalPayableInterest: string;
  monthlyRepaymentAmount: string;
  repaymentPeriodInMonths: string;
  totalPayableAmount: string;
  amendedFrom: string;
  
}
