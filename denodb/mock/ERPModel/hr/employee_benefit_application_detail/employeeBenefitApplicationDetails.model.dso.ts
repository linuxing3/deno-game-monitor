// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: EmployeeBenefitApplicationDetail
|--------------------------------------------------------------------------
|
| Model Class and Interface of employeeBenefitApplicationDetails
|
*/
import {
  BaseModel,
  Field,
  FieldType,
  Model
} from "https://deno.land/x/dso@v1.0.0/mod.ts";

@Model("employeeBenefitApplicationDetails")
export class EmployeeBenefitApplicationDetail extends BaseModel { 

  @Field({
    type: FieldType.INT,
    primary: true,
    length: 11,
    autoIncrement: true
  })
  id!: number;

  @Field({ type: FieldType.STRING })
  earningComponent!: string;
  
  @Field({ type: FieldType.STRING })
  payAgainstBenefitClaim!: string;
  
  @Field({ type: FieldType.STRING })
  maxBenefitAmount!: string;
  
  @Field({ type: FieldType.STRING })
  amount!: string;
  
  
}

export interface IEmployeeBenefitApplicationDetail {
  id: number;
  earningComponent: string;
  payAgainstBenefitClaim: string;
  maxBenefitAmount: string;
  amount: string;
  
}
