// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: LeavePolicy
|--------------------------------------------------------------------------
|
| Model Class and Interface of leavePolicies
|
*/
import {
  BaseModel,
  Field,
  FieldType,
  Model
} from "https://deno.land/x/dso@v1.0.0/mod.ts";

@Model("leavePolicies")
export class LeavePolicy extends BaseModel { 

  @Field({
    type: FieldType.INT,
    primary: true,
    length: 11,
    autoIncrement: true
  })
  id!: number;

  @Field({ type: FieldType.STRING })
  leaveAllocations!: string;
  
  @Field({ type: FieldType.STRING })
  leavePolicyDetails!: string;
  
  @Field({ type: FieldType.STRING })
  amendedFrom!: string;
  
  
}

export interface ILeavePolicy {
  id: number;
  leaveAllocations: string;
  leavePolicyDetails: string;
  amendedFrom: string;
  
}
