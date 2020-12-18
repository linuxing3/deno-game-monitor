// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: PayrollEmployeeDetail
|--------------------------------------------------------------------------
|
| Model Class and Interface of payrollEmployeeDetails
|
*/
import {
  BaseModel,
  Field,
  FieldType,
  Model
} from "https://deno.land/x/dso@v1.0.0/mod.ts";

@Model("payrollEmployeeDetails")
export class PayrollEmployeeDetail extends BaseModel { 

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
  employeeName!: string;
  
  @Field({ type: FieldType.STRING })
  department!: string;
  
  @Field({ type: FieldType.STRING })
  designation!: string;
  
  
}

export interface IPayrollEmployeeDetail {
  id: number;
  employee: string;
  employeeName: string;
  department: string;
  designation: string;
  
}
