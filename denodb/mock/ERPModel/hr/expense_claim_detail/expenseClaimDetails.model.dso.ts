// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: ExpenseClaimDetail
|--------------------------------------------------------------------------
|
| Model Class and Interface of expenseClaimDetails
|
*/
import {
  BaseModel,
  Field,
  FieldType,
  Model
} from "https://deno.land/x/dso@v1.0.0/mod.ts";

@Model("expenseClaimDetails")
export class ExpenseClaimDetail extends BaseModel { 

  @Field({
    type: FieldType.INT,
    primary: true,
    length: 11,
    autoIncrement: true
  })
  id!: number;

  @Field({ type: FieldType.STRING })
  expenseDate!: string;
  
  @Field({ type: FieldType.STRING })
  expenseClaimType!: string;
  
  @Field({ type: FieldType.STRING })
  defaultAccount!: string;
  
  @Field({ type: FieldType.STRING })
  description!: string;
  
  @Field({ type: FieldType.STRING })
  claimAmount!: string;
  
  @Field({ type: FieldType.STRING })
  sanctionedAmount!: string;
  
  
}

export interface IExpenseClaimDetail {
  id: number;
  expenseDate: string;
  expenseClaimType: string;
  defaultAccount: string;
  description: string;
  claimAmount: string;
  sanctionedAmount: string;
  
}
