// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: DepartmentApprover
|--------------------------------------------------------------------------
|
| Model Class and Interface of departmentApprovers
|
*/
import {
  BaseModel,
  Field,
  FieldType,
  Model
} from "https://deno.land/x/dso@v1.0.0/mod.ts";

@Model("departmentApprovers")
export class DepartmentApprover extends BaseModel { 

  @Field({
    type: FieldType.INT,
    primary: true,
    length: 11,
    autoIncrement: true
  })
  id!: number;

  @Field({ type: FieldType.STRING })
  approver!: string;
  
  
}

export interface IDepartmentApprover {
  id: number;
  approver: string;
  
}
