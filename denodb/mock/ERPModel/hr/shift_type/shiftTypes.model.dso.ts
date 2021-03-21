// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: ShiftType
|--------------------------------------------------------------------------
|
| Model Class and Interface of shiftTypes
|
*/
import {
  BaseModel,
  Field,
  FieldType,
  Model
} from "https://deno.land/x/dso@v1.0.0/mod.ts";

@Model("shiftTypes")
export class ShiftType extends BaseModel { 

  @Field({
    type: FieldType.INT,
    primary: true,
    length: 11,
    autoIncrement: true
  })
  id!: number;

  @Field({ type: FieldType.STRING })
  startTime!: string;
  
  @Field({ type: FieldType.STRING })
  endTime!: string;
  
  @Field({ type: FieldType.STRING })
  holidayList!: string;
  
  
}

export interface IShiftType {
  id: number;
  startTime: string;
  endTime: string;
  holidayList: string;
  
}
