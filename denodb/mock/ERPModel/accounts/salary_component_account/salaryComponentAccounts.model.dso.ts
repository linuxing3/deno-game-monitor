// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: SalaryComponentAccount
|--------------------------------------------------------------------------
|
| Model Class and Interface of salaryComponentAccounts
|
*/
import {
  BaseModel,
  Field,
  FieldType,
  Model
} from "https://deno.land/x/dso@v1.0.0/mod.ts";

@Model("salaryComponentAccounts")
export class SalaryComponentAccount extends BaseModel { 

  @Field({
    type: FieldType.INT,
    primary: true,
    length: 11,
    autoIncrement: true
  })
  id!: number;

  @Field({ type: FieldType.STRING })
  company!: string;
  
  @Field({ type: FieldType.STRING })
  defaultAccount!: string;
  
  
}

export interface ISalaryComponentAccount {
  id: number;
  company: string;
  defaultAccount: string;
  
}
