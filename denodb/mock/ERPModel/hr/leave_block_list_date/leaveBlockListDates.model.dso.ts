// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: LeaveBlockListDate
|--------------------------------------------------------------------------
|
| Model Class and Interface of leaveBlockListDates
|
*/
import {
  BaseModel,
  Field,
  FieldType,
  Model
} from "https://deno.land/x/dso@v1.0.0/mod.ts";

@Model("leaveBlockListDates")
export class LeaveBlockListDate extends BaseModel { 

  @Field({
    type: FieldType.INT,
    primary: true,
    length: 11,
    autoIncrement: true
  })
  id!: number;

  @Field({ type: FieldType.STRING })
  blockDate!: string;
  
  @Field({ type: FieldType.STRING })
  reason!: string;
  
  
}

export interface ILeaveBlockListDate {
  id: number;
  blockDate: string;
  reason: string;
  
}
