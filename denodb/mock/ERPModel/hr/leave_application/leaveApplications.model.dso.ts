// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: LeaveApplication
|--------------------------------------------------------------------------
|
| Model Class and Interface of leaveApplications
|
*/
import {
  BaseModel,
  Field,
  FieldType,
  Model
} from "https://deno.land/x/dso@v1.0.0/mod.ts";

@Model("leaveApplications")
export class LeaveApplication extends BaseModel { 

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
  leaveType!: string;
  
  @Field({ type: FieldType.STRING })
  department!: string;
  
  @Field({ type: FieldType.STRING })
  leaveBalanceBeforeApplication!: string;
  
  @Field({ type: FieldType.STRING })
  fromDate!: string;
  
  @Field({ type: FieldType.STRING })
  toDate!: string;
  
  @Field({ type: FieldType.STRING })
  halfDay!: string;
  
  @Field({ type: FieldType.STRING })
  halfDayDate!: string;
  
  @Field({ type: FieldType.STRING })
  totalLeaveDays!: string;
  
  @Field({ type: FieldType.STRING })
  reason!: string;
  
  @Field({ type: FieldType.STRING })
  leaveApprover!: string;
  
  @Field({ type: FieldType.STRING })
  leaveApproverName!: string;
  
  @Field({ type: FieldType.STRING })
  status!: string;
  
  @Field({ type: FieldType.STRING })
  salarySlip!: string;
  
  @Field({ type: FieldType.STRING })
  postingDate!: string;
  
  @Field({ type: FieldType.STRING })
  followViaEmail!: string;
  
  @Field({ type: FieldType.STRING })
  color!: string;
  
  @Field({ type: FieldType.STRING })
  company!: string;
  
  @Field({ type: FieldType.STRING })
  letterHead!: string;
  
  @Field({ type: FieldType.STRING })
  amendedFrom!: string;
  
  
}

export interface ILeaveApplication {
  id: number;
  series: string;
  employee: string;
  employeeName: string;
  leaveType: string;
  department: string;
  leaveBalanceBeforeApplication: string;
  fromDate: string;
  toDate: string;
  halfDay: string;
  halfDayDate: string;
  totalLeaveDays: string;
  reason: string;
  leaveApprover: string;
  leaveApproverName: string;
  status: string;
  salarySlip: string;
  postingDate: string;
  followViaEmail: string;
  color: string;
  company: string;
  letterHead: string;
  amendedFrom: string;
  
}
