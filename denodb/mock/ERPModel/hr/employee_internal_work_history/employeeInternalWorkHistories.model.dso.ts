// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: EmployeeInternalWorkHistory
|--------------------------------------------------------------------------
|
| Model Class and Interface of employeeInternalWorkHistories
|
*/
import {
  BaseModel,
  Field,
  FieldType,
  Model
} from "https://deno.land/x/dso@v1.0.0/mod.ts";

@Model("employeeInternalWorkHistories")
export class EmployeeInternalWorkHistory extends BaseModel { 

  @Field({
    type: FieldType.INT,
    primary: true,
    length: 11,
    autoIncrement: true
  })
  id!: number;

  @Field({ type: FieldType.STRING })
  branch!: string;
  
  @Field({ type: FieldType.STRING })
  department!: string;
  
  @Field({ type: FieldType.STRING })
  designation!: string;
  
  @Field({ type: FieldType.STRING })
  fromDate!: string;
  
  @Field({ type: FieldType.STRING })
  toDate!: string;
  
  
}

export interface IEmployeeInternalWorkHistory {
  id: number;
  branch: string;
  department: string;
  designation: string;
  fromDate: string;
  toDate: string;
  
}
