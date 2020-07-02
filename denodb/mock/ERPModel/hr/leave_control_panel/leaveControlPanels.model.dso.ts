// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: LeaveControlPanel
|--------------------------------------------------------------------------
|
| Model Class and Interface of leaveControlPanels
|
*/
import {
  BaseModel,
  Field,
  FieldType,
  Model
} from "https://deno.land/x/dso@v1.0.0/mod.ts";

@Model("leaveControlPanels")
export class LeaveControlPanel extends BaseModel { 

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
  employmentType!: string;
  
  @Field({ type: FieldType.STRING })
  branch!: string;
  
  @Field({ type: FieldType.STRING })
  department!: string;
  
  @Field({ type: FieldType.STRING })
  designation!: string;
  
  @Field({ type: FieldType.STRING })
  employeeGrade!: string;
  
  @Field({ type: FieldType.STRING })
  employee!: string;
  
  @Field({ type: FieldType.STRING })
  fromDate!: string;
  
  @Field({ type: FieldType.STRING })
  toDate!: string;
  
  @Field({ type: FieldType.STRING })
  leavePolicy!: string;
  
  @Field({ type: FieldType.STRING })
  leaveType!: string;
  
  @Field({ type: FieldType.STRING })
  carryForward!: string;
  
  @Field({ type: FieldType.STRING })
  newLeavesAllocatedInDays!: string;
  
  @Field({ type: FieldType.STRING })
  allocate!: string;
  
  
}

export interface ILeaveControlPanel {
  id: number;
  company: string;
  employmentType: string;
  branch: string;
  department: string;
  designation: string;
  employeeGrade: string;
  employee: string;
  fromDate: string;
  toDate: string;
  leavePolicy: string;
  leaveType: string;
  carryForward: string;
  newLeavesAllocatedInDays: string;
  allocate: string;
  
}
