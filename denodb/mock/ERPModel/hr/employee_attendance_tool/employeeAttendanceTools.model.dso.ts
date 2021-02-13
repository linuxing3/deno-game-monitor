// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: EmployeeAttendanceTool
|--------------------------------------------------------------------------
|
| Model Class and Interface of employeeAttendanceTools
|
*/
import {
  BaseModel,
  Field,
  FieldType,
  Model
} from "https://deno.land/x/dso@v1.0.0/mod.ts";

@Model("employeeAttendanceTools")
export class EmployeeAttendanceTool extends BaseModel { 

  @Field({
    type: FieldType.INT,
    primary: true,
    length: 11,
    autoIncrement: true
  })
  id!: number;

  @Field({ type: FieldType.STRING })
  date!: string;
  
  @Field({ type: FieldType.STRING })
  department!: string;
  
  @Field({ type: FieldType.STRING })
  branch!: string;
  
  @Field({ type: FieldType.STRING })
  company!: string;
  
  @Field({ type: FieldType.STRING })
  unmarkedAttendance!: string;
  
  @Field({ type: FieldType.STRING })
  employeesHtml!: string;
  
  @Field({ type: FieldType.STRING })
  markedAttendance!: string;
  
  @Field({ type: FieldType.STRING })
  markedAttendanceHtml!: string;
  
  
}

export interface IEmployeeAttendanceTool {
  id: number;
  date: string;
  department: string;
  branch: string;
  company: string;
  unmarkedAttendance: string;
  employeesHtml: string;
  markedAttendance: string;
  markedAttendanceHtml: string;
  
}
