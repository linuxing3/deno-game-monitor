// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: EmployeeExternalWorkHistory
|--------------------------------------------------------------------------
|
| Model Class and Interface of employeeExternalWorkHistories
|
*/
import {
  BaseModel,
  Field,
  FieldType,
  Model
} from "https://deno.land/x/dso@v1.0.0/mod.ts";

@Model("employeeExternalWorkHistories")
export class EmployeeExternalWorkHistory extends BaseModel { 

  @Field({
    type: FieldType.INT,
    primary: true,
    length: 11,
    autoIncrement: true
  })
  id!: number;

  @Field({ type: FieldType.STRING })
  company!: string;
  
  @Field({ type: FieldType.STRING })
  designation!: string;
  
  @Field({ type: FieldType.STRING })
  salary!: string;
  
  @Field({ type: FieldType.STRING })
  address!: string;
  
  @Field({ type: FieldType.STRING })
  contact!: string;
  
  @Field({ type: FieldType.STRING })
  totalExperience!: string;
  
  
}

export interface IEmployeeExternalWorkHistory {
  id: number;
  company: string;
  designation: string;
  salary: string;
  address: string;
  contact: string;
  totalExperience: string;
  
}
