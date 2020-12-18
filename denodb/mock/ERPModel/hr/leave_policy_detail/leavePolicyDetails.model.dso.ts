// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: LeavePolicyDetail
|--------------------------------------------------------------------------
|
| Model Class and Interface of leavePolicyDetails
|
*/
import {
  BaseModel,
  Field,
  FieldType,
  Model
} from "https://deno.land/x/dso@v1.0.0/mod.ts";

@Model("leavePolicyDetails")
export class LeavePolicyDetail extends BaseModel { 

  @Field({
    type: FieldType.INT,
    primary: true,
    length: 11,
    autoIncrement: true
  })
  id!: number;

  @Field({ type: FieldType.STRING })
  leaveType!: string;
  
  @Field({ type: FieldType.STRING })
  annualAllocation!: string;
  
  
}

export interface ILeavePolicyDetail {
  id: number;
  leaveType: string;
  annualAllocation: string;
  
}
