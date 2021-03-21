// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: PayrollPeriod
|--------------------------------------------------------------------------
|
| Model Class and Interface of payrollPeriods
|
*/
import {
  BaseModel,
  Field,
  FieldType,
  Model
} from "https://deno.land/x/dso@v1.0.0/mod.ts";

@Model("payrollPeriods")
export class PayrollPeriod extends BaseModel { 

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
  startDate!: string;
  
  @Field({ type: FieldType.STRING })
  endDate!: string;
  
  @Field({ type: FieldType.STRING })
  payrollPeriods!: string;
  
  @Field({ type: FieldType.STRING })
  taxableSalarySlabs!: string;
  
  
}

export interface IPayrollPeriod {
  id: number;
  company: string;
  startDate: string;
  endDate: string;
  payrollPeriods: string;
  taxableSalarySlabs: string;
  
}
