// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: EmployeeAdvance
|--------------------------------------------------------------------------
|
| Model Class and Interface of employeeAdvances
|
*/
import {
  BaseModel,
  Field,
  FieldType,
  Model
} from "https://deno.land/x/dso@v1.0.0/mod.ts";

@Model("employeeAdvances")
export class EmployeeAdvance extends BaseModel { 

  @Field({
    type: FieldType.INT,
    primary: true,
    length: 11,
    autoIncrement: true
  })
  id!: number;

  @Field({ type: FieldType.STRING })
  series!: string;
  
  @Field({ type: FieldType.STRING })
  employee!: string;
  
  @Field({ type: FieldType.STRING })
  employeeName!: string;
  
  @Field({ type: FieldType.STRING })
  postingDate!: string;
  
  @Field({ type: FieldType.STRING })
  department!: string;
  
  @Field({ type: FieldType.STRING })
  purpose!: string;
  
  @Field({ type: FieldType.STRING })
  advanceAmount!: string;
  
  @Field({ type: FieldType.STRING })
  paidAmount!: string;
  
  @Field({ type: FieldType.STRING })
  dueAdvanceAmount!: string;
  
  @Field({ type: FieldType.STRING })
  claimedAmount!: string;
  
  @Field({ type: FieldType.STRING })
  status!: string;
  
  @Field({ type: FieldType.STRING })
  company!: string;
  
  @Field({ type: FieldType.STRING })
  amendedFrom!: string;
  
  @Field({ type: FieldType.STRING })
  advanceAccount!: string;
  
  @Field({ type: FieldType.STRING })
  modeOfPayment!: string;
  
  
}

export interface IEmployeeAdvance {
  id: number;
  series: string;
  employee: string;
  employeeName: string;
  postingDate: string;
  department: string;
  purpose: string;
  advanceAmount: string;
  paidAmount: string;
  dueAdvanceAmount: string;
  claimedAmount: string;
  status: string;
  company: string;
  amendedFrom: string;
  advanceAccount: string;
  modeOfPayment: string;
  
}
