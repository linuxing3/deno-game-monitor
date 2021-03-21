// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: ExpenseClaimAdvance
|--------------------------------------------------------------------------
|
| Model Class and Interface of expenseClaimAdvances
|
*/
import {
  BaseModel,
  Field,
  FieldType,
  Model
} from "https://deno.land/x/dso@v1.0.0/mod.ts";

@Model("expenseClaimAdvances")
export class ExpenseClaimAdvance extends BaseModel { 

  @Field({
    type: FieldType.INT,
    primary: true,
    length: 11,
    autoIncrement: true
  })
  id!: number;

  @Field({ type: FieldType.STRING })
  employeeAdvance!: string;
  
  @Field({ type: FieldType.STRING })
  postingDate!: string;
  
  @Field({ type: FieldType.STRING })
  advancePaid!: string;
  
  @Field({ type: FieldType.STRING })
  unclaimedAmount!: string;
  
  @Field({ type: FieldType.STRING })
  allocatedAmount!: string;
  
  @Field({ type: FieldType.STRING })
  advanceAccount!: string;
  
  
}

export interface IExpenseClaimAdvance {
  id: number;
  employeeAdvance: string;
  postingDate: string;
  advancePaid: string;
  unclaimedAmount: string;
  allocatedAmount: string;
  advanceAccount: string;
  
}
