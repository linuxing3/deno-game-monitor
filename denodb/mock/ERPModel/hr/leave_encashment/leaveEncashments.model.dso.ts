// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: LeaveEncashment
|--------------------------------------------------------------------------
|
| Model Class and Interface of leaveEncashments
|
*/
import {
  BaseModel,
  Field,
  FieldType,
  Model
} from "https://deno.land/x/dso@v1.0.0/mod.ts";

@Model("leaveEncashments")
export class LeaveEncashment extends BaseModel { 

  @Field({
    type: FieldType.INT,
    primary: true,
    length: 11,
    autoIncrement: true
  })
  id!: number;

  @Field({ type: FieldType.STRING })
  leavePeriod!: string;
  
  @Field({ type: FieldType.STRING })
  employee!: string;
  
  @Field({ type: FieldType.STRING })
  employeeName!: string;
  
  @Field({ type: FieldType.STRING })
  department!: string;
  
  @Field({ type: FieldType.STRING })
  leaveType!: string;
  
  @Field({ type: FieldType.STRING })
  leaveAllocation!: string;
  
  @Field({ type: FieldType.STRING })
  leaveBalance!: string;
  
  @Field({ type: FieldType.STRING })
  encashableDays!: string;
  
  @Field({ type: FieldType.STRING })
  amendedFrom!: string;
  
  @Field({ type: FieldType.STRING })
  payroll!: string;
  
  @Field({ type: FieldType.STRING })
  encashmentAmount!: string;
  
  @Field({ type: FieldType.STRING })
  encashmentDate!: string;
  
  @Field({ type: FieldType.STRING })
  additionalSalary!: string;
  
  
}

export interface ILeaveEncashment {
  id: number;
  leavePeriod: string;
  employee: string;
  employeeName: string;
  department: string;
  leaveType: string;
  leaveAllocation: string;
  leaveBalance: string;
  encashableDays: string;
  amendedFrom: string;
  payroll: string;
  encashmentAmount: string;
  encashmentDate: string;
  additionalSalary: string;
  
}
