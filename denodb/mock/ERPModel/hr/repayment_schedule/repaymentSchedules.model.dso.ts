// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: RepaymentSchedule
|--------------------------------------------------------------------------
|
| Model Class and Interface of repaymentSchedules
|
*/
import {
  BaseModel,
  Field,
  FieldType,
  Model
} from "https://deno.land/x/dso@v1.0.0/mod.ts";

@Model("repaymentSchedules")
export class RepaymentSchedule extends BaseModel { 

  @Field({
    type: FieldType.INT,
    primary: true,
    length: 11,
    autoIncrement: true
  })
  id!: number;

  @Field({ type: FieldType.STRING })
  paymentDate!: string;
  
  @Field({ type: FieldType.STRING })
  principalAmount!: string;
  
  @Field({ type: FieldType.STRING })
  interestAmount!: string;
  
  @Field({ type: FieldType.STRING })
  totalPayment!: string;
  
  @Field({ type: FieldType.STRING })
  balanceLoanAmount!: string;
  
  @Field({ type: FieldType.STRING })
  paid!: string;
  
  
}

export interface IRepaymentSchedule {
  id: number;
  paymentDate: string;
  principalAmount: string;
  interestAmount: string;
  totalPayment: string;
  balanceLoanAmount: string;
  paid: string;
  
}
