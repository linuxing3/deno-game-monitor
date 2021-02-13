// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: ShiftAssignment
|--------------------------------------------------------------------------
|
| Model Class and Interface of shiftAssignments
|
*/
import {
  BaseModel,
  Field,
  FieldType,
  Model
} from "https://deno.land/x/dso@v1.0.0/mod.ts";

@Model("shiftAssignments")
export class ShiftAssignment extends BaseModel { 

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
  shiftType!: string;
  
  @Field({ type: FieldType.STRING })
  present!: string;
  
  @Field({ type: FieldType.STRING })
  company!: string;
  
  @Field({ type: FieldType.STRING })
  date!: string;
  
  @Field({ type: FieldType.STRING })
  shiftRequest!: string;
  
  @Field({ type: FieldType.STRING })
  amendedFrom!: string;
  
  
}

export interface IShiftAssignment {
  id: number;
  employee: string;
  employeeName: string;
  department: string;
  shiftType: string;
  present: string;
  company: string;
  date: string;
  shiftRequest: string;
  amendedFrom: string;
  
}
