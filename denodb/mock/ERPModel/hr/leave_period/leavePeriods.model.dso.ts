// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: LeavePeriod
|--------------------------------------------------------------------------
|
| Model Class and Interface of leavePeriods
|
*/
import {
  BaseModel,
  Field,
  FieldType,
  Model
} from "https://deno.land/x/dso@v1.0.0/mod.ts";

@Model("leavePeriods")
export class LeavePeriod extends BaseModel { 

  @Field({
    type: FieldType.INT,
    primary: true,
    length: 11,
    autoIncrement: true
  })
  id!: number;

  @Field({ type: FieldType.STRING })
  fromDate!: string;
  
  @Field({ type: FieldType.STRING })
  toDate!: string;
  
  @Field({ type: FieldType.STRING })
  company!: string;
  
  @Field({ type: FieldType.STRING })
  isActive!: string;
  
  @Field({ type: FieldType.STRING })
  holidayListForOptionalLeave!: string;
  
  
}

export interface ILeavePeriod {
  id: number;
  fromDate: string;
  toDate: string;
  company: string;
  isActive: string;
  holidayListForOptionalLeave: string;
  
}
