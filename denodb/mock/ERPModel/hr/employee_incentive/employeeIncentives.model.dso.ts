// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: EmployeeIncentive
|--------------------------------------------------------------------------
|
| Model Class and Interface of employeeIncentives
|
*/
import {
  BaseModel,
  Field,
  FieldType,
  Model
} from "https://deno.land/x/dso@v1.0.0/mod.ts";

@Model("employeeIncentives")
export class EmployeeIncentive extends BaseModel { 

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
  incentiveAmount!: string;
  
  @Field({ type: FieldType.STRING })
  payrollDate!: string;
  
  @Field({ type: FieldType.STRING })
  amendedFrom!: string;
  
  @Field({ type: FieldType.STRING })
  employeeName!: string;
  
  @Field({ type: FieldType.STRING })
  department!: string;
  
  
}

export interface IEmployeeIncentive {
  id: number;
  employee: string;
  incentiveAmount: string;
  payrollDate: string;
  amendedFrom: string;
  employeeName: string;
  department: string;
  
}
