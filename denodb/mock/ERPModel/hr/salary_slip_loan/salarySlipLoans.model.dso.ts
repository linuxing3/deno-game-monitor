// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: SalarySlipLoan
|--------------------------------------------------------------------------
|
| Model Class and Interface of salarySlipLoans
|
*/
import {
  BaseModel,
  Field,
  FieldType,
  Model
} from "https://deno.land/x/dso@v1.0.0/mod.ts";

@Model("salarySlipLoans")
export class SalarySlipLoan extends BaseModel { 

  @Field({
    type: FieldType.INT,
    primary: true,
    length: 11,
    autoIncrement: true
  })
  id!: number;

  @Field({ type: FieldType.STRING })
  loan!: string;
  
  @Field({ type: FieldType.STRING })
  loanAccount!: string;
  
  @Field({ type: FieldType.STRING })
  interestIncomeAccount!: string;
  
  @Field({ type: FieldType.STRING })
  principalAmount!: string;
  
  @Field({ type: FieldType.STRING })
  interestAmount!: string;
  
  @Field({ type: FieldType.STRING })
  totalPayment!: string;
  
  
}

export interface ISalarySlipLoan {
  id: number;
  loan: string;
  loanAccount: string;
  interestIncomeAccount: string;
  principalAmount: string;
  interestAmount: string;
  totalPayment: string;
  
}
