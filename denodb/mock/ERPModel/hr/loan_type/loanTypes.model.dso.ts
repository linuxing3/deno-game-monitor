// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: LoanType
|--------------------------------------------------------------------------
|
| Model Class and Interface of loanTypes
|
*/
import {
  BaseModel,
  Field,
  FieldType,
  Model
} from "https://deno.land/x/dso@v1.0.0/mod.ts";

@Model("loanTypes")
export class LoanType extends BaseModel { 

  @Field({
    type: FieldType.INT,
    primary: true,
    length: 11,
    autoIncrement: true
  })
  id!: number;

  @Field({ type: FieldType.STRING })
  loanName!: string;
  
  @Field({ type: FieldType.STRING })
  maximumLoanAmount!: string;
  
  @Field({ type: FieldType.STRING })
  rateOfInterestYearly!: string;
  
  @Field({ type: FieldType.STRING })
  disabled!: string;
  
  @Field({ type: FieldType.STRING })
  description!: string;
  
  
}

export interface ILoanType {
  id: number;
  loanName: string;
  maximumLoanAmount: string;
  rateOfInterestYearly: string;
  disabled: string;
  description: string;
  
}
