// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: EmployeeTaxExemptionProofSubmissionDetail
|--------------------------------------------------------------------------
|
| Model Class and Interface of employeeTaxExemptionProofSubmissionDetails
|
*/
import {
  BaseModel,
  Field,
  FieldType,
  Model
} from "https://deno.land/x/dso@v1.0.0/mod.ts";

@Model("employeeTaxExemptionProofSubmissionDetails")
export class EmployeeTaxExemptionProofSubmissionDetail extends BaseModel { 

  @Field({
    type: FieldType.INT,
    primary: true,
    length: 11,
    autoIncrement: true
  })
  id!: number;

  @Field({ type: FieldType.STRING })
  exemptionSubCategory!: string;
  
  @Field({ type: FieldType.STRING })
  exemptionCategory!: string;
  
  @Field({ type: FieldType.STRING })
  typeOfProof!: string;
  
  @Field({ type: FieldType.STRING })
  amount!: string;
  
  
}

export interface IEmployeeTaxExemptionProofSubmissionDetail {
  id: number;
  exemptionSubCategory: string;
  exemptionCategory: string;
  typeOfProof: string;
  amount: string;
  
}
