// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: EmployeePropertyHistory
|--------------------------------------------------------------------------
|
| Model Class and Interface of employeePropertyHistories
|
*/
import {
  BaseModel,
  Field,
  FieldType,
  Model
} from "https://deno.land/x/dso@v1.0.0/mod.ts";

@Model("employeePropertyHistories")
export class EmployeePropertyHistory extends BaseModel { 

  @Field({
    type: FieldType.INT,
    primary: true,
    length: 11,
    autoIncrement: true
  })
  id!: number;

  @Field({ type: FieldType.STRING })
  property!: string;
  
  @Field({ type: FieldType.STRING })
  current!: string;
  
  @Field({ type: FieldType.STRING })
  new!: string;
  
  @Field({ type: FieldType.STRING })
  fieldName!: string;
  
  
}

export interface IEmployeePropertyHistory {
  id: number;
  property: string;
  current: string;
  new: string;
  fieldName: string;
  
}
