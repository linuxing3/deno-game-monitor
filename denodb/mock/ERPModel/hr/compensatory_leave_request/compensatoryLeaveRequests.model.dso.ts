// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: CompensatoryLeaveRequest
|--------------------------------------------------------------------------
|
| Model Class and Interface of compensatoryLeaveRequests
|
*/
import {
  BaseModel,
  Field,
  FieldType,
  Model
} from "https://deno.land/x/dso@v1.0.0/mod.ts";

@Model("compensatoryLeaveRequests")
export class CompensatoryLeaveRequest extends BaseModel { 

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
  leaveType!: string;
  
  @Field({ type: FieldType.STRING })
  leaveAllocation!: string;
  
  @Field({ type: FieldType.STRING })
  workedOnHoliday!: string;
  
  @Field({ type: FieldType.STRING })
  workFromDate!: string;
  
  @Field({ type: FieldType.STRING })
  workEndDate!: string;
  
  @Field({ type: FieldType.STRING })
  halfDay!: string;
  
  @Field({ type: FieldType.STRING })
  halfDayDate!: string;
  
  @Field({ type: FieldType.STRING })
  reason!: string;
  
  @Field({ type: FieldType.STRING })
  amendedFrom!: string;
  
  
}

export interface ICompensatoryLeaveRequest {
  id: number;
  employee: string;
  employeeName: string;
  department: string;
  leaveType: string;
  leaveAllocation: string;
  workedOnHoliday: string;
  workFromDate: string;
  workEndDate: string;
  halfDay: string;
  halfDayDate: string;
  reason: string;
  amendedFrom: string;
  
}
