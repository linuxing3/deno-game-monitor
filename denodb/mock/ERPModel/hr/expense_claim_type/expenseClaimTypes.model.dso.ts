// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: ExpenseClaimType
|--------------------------------------------------------------------------
|
| Model Class and Interface of expenseClaimTypes
|
*/
import {
  BaseModel,
  Field,
  FieldType,
  Model
} from "https://deno.land/x/dso@v1.0.0/mod.ts";

@Model("expenseClaimTypes")
export class ExpenseClaimType extends BaseModel { 

  @Field({
    type: FieldType.INT,
    primary: true,
    length: 11,
    autoIncrement: true
  })
  id!: number;

  @Field({ type: FieldType.STRING })
  expenseClaimType!: string;
  
  @Field({ type: FieldType.STRING })
  description!: string;
  
  @Field({ type: FieldType.STRING })
  accounts!: string;
  
  
}

export interface IExpenseClaimType {
  id: number;
  expenseClaimType: string;
  description: string;
  accounts: string;
  
}
