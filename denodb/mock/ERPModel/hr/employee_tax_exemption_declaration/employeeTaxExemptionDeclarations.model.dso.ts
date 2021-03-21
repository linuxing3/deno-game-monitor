// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: EmployeeTaxExemptionDeclaration
|--------------------------------------------------------------------------
|
| Model Class and Interface of employeeTaxExemptionDeclarations
|
*/
import {
  BaseModel,
  Field,
  FieldType,
  Model
} from "https://deno.land/x/dso@v1.0.0/mod.ts";

@Model("employeeTaxExemptionDeclarations")
export class EmployeeTaxExemptionDeclaration extends BaseModel { 

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
  totalExemptionAmount!: string;
  
  @Field({ type: FieldType.STRING })
  department!: string;
  
  @Field({ type: FieldType.STRING })
  amendedFrom!: string;
  
  @Field({ type: FieldType.STRING })
  declarations!: string;
  
  
}

export interface IEmployeeTaxExemptionDeclaration {
  id: number;
  employee: string;
  company: string;
  payrollPeriod: string;
  totalExemptionAmount: string;
  department: string;
  amendedFrom: string;
  declarations: string;
  
}
