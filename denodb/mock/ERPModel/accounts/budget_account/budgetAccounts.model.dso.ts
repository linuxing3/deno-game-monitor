// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: BudgetAccount
|--------------------------------------------------------------------------
|
| Model Class and Interface of budgetAccounts
|
*/
import {
  BaseModel,
  Field,
  FieldType,
  Model
} from "https://deno.land/x/dso@v1.0.0/mod.ts";

@Model("budgetAccounts")
export class BudgetAccount extends BaseModel { 

  @Field({
    type: FieldType.INT,
    primary: true,
    length: 11,
    autoIncrement: true
  })
  id!: number;

  @Field({ type: FieldType.STRING })
  account!: string;
  
  @Field({ type: FieldType.STRING })
  budgetAmount!: string;
  
  
}

export interface IBudgetAccount {
  id: number;
  account: string;
  budgetAmount: string;
  
}
