// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: Loan
|--------------------------------------------------------------------------
|
| Model Class and Interface of loans
|
*/
import {
  BaseModel,
  Field,
  FieldType,
  Model
} from "https://deno.land/x/dso@v1.0.0/mod.ts";

@Model("loans")
export class Loan extends BaseModel { 

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
  loanApplication!: string;
  
  @Field({ type: FieldType.STRING })
  loanType!: string;
  
  @Field({ type: FieldType.STRING })
  postingDate!: string;
  
  @Field({ type: FieldType.STRING })
  company!: string;
  
  @Field({ type: FieldType.STRING })
  status!: string;
  
  @Field({ type: FieldType.STRING })
  repayFromSalary!: string;
  
  @Field({ type: FieldType.STRING })
  loanDetails!: string;
  
  @Field({ type: FieldType.STRING })
  loanAmount!: string;
  
  @Field({ type: FieldType.STRING })
  rateOfInterestYear!: string;
  
  @Field({ type: FieldType.STRING })
  disbursementDate!: string;
  
  @Field({ type: FieldType.STRING })
  repaymentStartDate!: string;
  
  @Field({ type: FieldType.STRING })
  repaymentMethod!: string;
  
  @Field({ type: FieldType.STRING })
  repaymentPeriodInMonths!: string;
  
  @Field({ type: FieldType.STRING })
  monthlyRepaymentAmount!: string;
  
  @Field({ type: FieldType.STRING })
  accountInfo!: string;
  
  @Field({ type: FieldType.STRING })
  modeOfPayment!: string;
  
  @Field({ type: FieldType.STRING })
  paymentAccount!: string;
  
  @Field({ type: FieldType.STRING })
  loanAccount!: string;
  
  @Field({ type: FieldType.STRING })
  interestIncomeAccount!: string;
  
  @Field({ type: FieldType.STRING })
  repaymentSchedule!: string;
  
  @Field({ type: FieldType.STRING })
  totals!: string;
  
  @Field({ type: FieldType.STRING })
  totalPayment!: string;
  
  @Field({ type: FieldType.STRING })
  totalInterestPayable!: string;
  
  @Field({ type: FieldType.STRING })
  totalAmountPaid!: string;
  
  @Field({ type: FieldType.STRING })
  amendedFrom!: string;
  
  
}

export interface ILoan {
  id: number;
  applicantType: string;
  applicant: string;
  applicantName: string;
  loanApplication: string;
  loanType: string;
  postingDate: string;
  company: string;
  status: string;
  repayFromSalary: string;
  loanDetails: string;
  loanAmount: string;
  rateOfInterestYear: string;
  disbursementDate: string;
  repaymentStartDate: string;
  repaymentMethod: string;
  repaymentPeriodInMonths: string;
  monthlyRepaymentAmount: string;
  accountInfo: string;
  modeOfPayment: string;
  paymentAccount: string;
  loanAccount: string;
  interestIncomeAccount: string;
  repaymentSchedule: string;
  totals: string;
  totalPayment: string;
  totalInterestPayable: string;
  totalAmountPaid: string;
  amendedFrom: string;
  
}
