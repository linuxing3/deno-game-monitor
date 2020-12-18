// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: AttendanceRequest
|--------------------------------------------------------------------------
|
| Model Class and Interface of attendanceRequests
|
*/
import {
  BaseModel,
  Field,
  FieldType,
  Model
} from "https://deno.land/x/dso@v1.0.0/mod.ts";

@Model("attendanceRequests")
export class AttendanceRequest extends BaseModel { 

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
  company!: string;
  
  @Field({ type: FieldType.STRING })
  fromDate!: string;
  
  @Field({ type: FieldType.STRING })
  toDate!: string;
  
  @Field({ type: FieldType.STRING })
  halfDay!: string;
  
  @Field({ type: FieldType.STRING })
  halfDayDate!: string;
  
  @Field({ type: FieldType.STRING })
  reason!: string;
  
  @Field({ type: FieldType.STRING })
  explanation!: string;
  
  @Field({ type: FieldType.STRING })
  amendedFrom!: string;
  
  
}

export interface IAttendanceRequest {
  id: number;
  employee: string;
  employeeName: string;
  department: string;
  company: string;
  fromDate: string;
  toDate: string;
  halfDay: string;
  halfDayDate: string;
  reason: string;
  explanation: string;
  amendedFrom: string;
  
}
