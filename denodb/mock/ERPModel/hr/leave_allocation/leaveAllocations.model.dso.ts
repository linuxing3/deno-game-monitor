// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: LeaveAllocation
|--------------------------------------------------------------------------
|
| Model Class and Interface of leaveAllocations
|
*/
import {
  BaseModel,
  Field,
  FieldType,
  Model
} from "https://deno.land/x/dso@v1.0.0/mod.ts";

@Model("leaveAllocations")
export class LeaveAllocation extends BaseModel { 

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
  department!: string;
  
  @Field({ type: FieldType.STRING })
  leaveType!: string;
  
  @Field({ type: FieldType.STRING })
  fromDate!: string;
  
  @Field({ type: FieldType.STRING })
  toDate!: string;
  
  @Field({ type: FieldType.STRING })
  allocation!: string;
  
  @Field({ type: FieldType.STRING })
  newLeavesAllocated!: string;
  
  @Field({ type: FieldType.STRING })
  addUnusedLeavesFromPreviousAllocations!: string;
  
  @Field({ type: FieldType.STRING })
  unusedLeaves!: string;
  
  @Field({ type: FieldType.STRING })
  totalLeavesAllocated!: string;
  
  @Field({ type: FieldType.STRING })
  totalLeavesEncashed!: string;
  
  @Field({ type: FieldType.STRING })
  compensatoryLeaveRequest!: string;
  
  @Field({ type: FieldType.STRING })
  leavePeriod!: string;
  
  @Field({ type: FieldType.STRING })
  amendedFrom!: string;
  
  @Field({ type: FieldType.STRING })
  notes!: string;
  
  @Field({ type: FieldType.STRING })
  description!: string;
  
  
}

export interface ILeaveAllocation {
  id: number;
  series: string;
  employee: string;
  employeeName: string;
  department: string;
  leaveType: string;
  fromDate: string;
  toDate: string;
  allocation: string;
  newLeavesAllocated: string;
  addUnusedLeavesFromPreviousAllocations: string;
  unusedLeaves: string;
  totalLeavesAllocated: string;
  totalLeavesEncashed: string;
  compensatoryLeaveRequest: string;
  leavePeriod: string;
  amendedFrom: string;
  notes: string;
  description: string;
  
}
