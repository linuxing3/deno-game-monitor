// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: LeaveType
|--------------------------------------------------------------------------
|
| Model Class and Interface of leaveTypes
|
*/
import {
  BaseModel,
  Field,
  FieldType,
  Model
} from "https://deno.land/x/dso@v1.0.0/mod.ts";

@Model("leaveTypes")
export class LeaveType extends BaseModel { 

  @Field({
    type: FieldType.INT,
    primary: true,
    length: 11,
    autoIncrement: true
  })
  id!: number;

  @Field({ type: FieldType.STRING })
  leaveTypeName!: string;
  
  @Field({ type: FieldType.STRING })
  maxLeavesAllowed!: string;
  
  @Field({ type: FieldType.STRING })
  applicableAfterWorkingDays!: string;
  
  @Field({ type: FieldType.STRING })
  maximumContinuousDaysApplicable!: string;
  
  @Field({ type: FieldType.STRING })
  isCarryForward!: string;
  
  @Field({ type: FieldType.STRING })
  isLeaveWithoutPay!: string;
  
  @Field({ type: FieldType.STRING })
  isOptionalLeave!: string;
  
  @Field({ type: FieldType.STRING })
  allowNegativeBalance!: string;
  
  @Field({ type: FieldType.STRING })
  includeHolidaysWithinLeavesAsLeaves!: string;
  
  @Field({ type: FieldType.STRING })
  isCompensatory!: string;
  
  @Field({ type: FieldType.STRING })
  encashment!: string;
  
  @Field({ type: FieldType.STRING })
  allowEncashment!: string;
  
  @Field({ type: FieldType.STRING })
  encashmentThresholdDays!: string;
  
  @Field({ type: FieldType.STRING })
  earningComponent!: string;
  
  @Field({ type: FieldType.STRING })
  earnedLeave!: string;
  
  @Field({ type: FieldType.STRING })
  isEarnedLeave!: string;
  
  @Field({ type: FieldType.STRING })
  earnedLeaveFrequency!: string;
  
  @Field({ type: FieldType.STRING })
  rounding!: string;
  
  
}

export interface ILeaveType {
  id: number;
  leaveTypeName: string;
  maxLeavesAllowed: string;
  applicableAfterWorkingDays: string;
  maximumContinuousDaysApplicable: string;
  isCarryForward: string;
  isLeaveWithoutPay: string;
  isOptionalLeave: string;
  allowNegativeBalance: string;
  includeHolidaysWithinLeavesAsLeaves: string;
  isCompensatory: string;
  encashment: string;
  allowEncashment: string;
  encashmentThresholdDays: string;
  earningComponent: string;
  earnedLeave: string;
  isEarnedLeave: string;
  earnedLeaveFrequency: string;
  rounding: string;
  
}
