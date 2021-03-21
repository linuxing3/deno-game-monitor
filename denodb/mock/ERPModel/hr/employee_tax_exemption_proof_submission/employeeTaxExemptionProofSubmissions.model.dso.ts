// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: EmployeeTaxExemptionProofSubmission
|--------------------------------------------------------------------------
|
| Model Class and Interface of employeeTaxExemptionProofSubmissions
|
*/
import {
  BaseModel,
  Field,
  FieldType,
  Model
} from "https://deno.land/x/dso@v1.0.0/mod.ts";

@Model("employeeTaxExemptionProofSubmissions")
export class EmployeeTaxExemptionProofSubmission extends BaseModel { 

  @Field({
    type: FieldType.INT,
    primary: true,
    length: 11,
    autoIncrement: true
  })
  id!: number;

  @Field({ type: FieldType.STRING })
  employee!: string;
  
  @Field({ type: FieldType.STRING })
  company!: string;
  
  @Field({ type: FieldType.STRING })
  payrollPeriod!: string;
  
  @Field({ type: FieldType.STRING })
  department!: string;
  
  @Field({ type: FieldType.STRING })
  submissionDate!: string;
  
  @Field({ type: FieldType.STRING })
  totalExemptionAmount!: string;
  
  @Field({ type: FieldType.STRING })
  taxExemptionProofs!: string;
  
  @Field({ type: FieldType.STRING })
  attachments!: string;
  
  @Field({ type: FieldType.STRING })
  amendedFrom!: string;
  
  
}

export interface IEmployeeTaxExemptionProofSubmission {
  id: number;
  employee: string;
  company: string;
  payrollPeriod: string;
  department: string;
  submissionDate: string;
  totalExemptionAmount: string;
  taxExemptionProofs: string;
  attachments: string;
  amendedFrom: string;
  
}
