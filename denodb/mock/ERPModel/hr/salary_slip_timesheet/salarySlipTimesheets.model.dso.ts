// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: SalarySlipTimesheet
|--------------------------------------------------------------------------
|
| Model Class and Interface of salarySlipTimesheets
|
*/
import {
  BaseModel,
  Field,
  FieldType,
  Model
} from "https://deno.land/x/dso@v1.0.0/mod.ts";

@Model("salarySlipTimesheets")
export class SalarySlipTimesheet extends BaseModel { 

  @Field({
    type: FieldType.INT,
    primary: true,
    length: 11,
    autoIncrement: true
  })
  id!: number;

  @Field({ type: FieldType.STRING })
  timeSheet!: string;
  
  @Field({ type: FieldType.STRING })
  workingHours!: string;
  
  
}

export interface ISalarySlipTimesheet {
  id: number;
  timeSheet: string;
  workingHours: string;
  
}
