// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: Department
|--------------------------------------------------------------------------
|
| Model Class and Interface of departments
|
*/
import {
  BaseModel,
  Field,
  FieldType,
  Model
} from "https://deno.land/x/dso@v1.0.0/mod.ts";

@Model("departments")
export class Department extends BaseModel { 

  @Field({
    type: FieldType.INT,
    primary: true,
    length: 11,
    autoIncrement: true
  })
  id!: number;

  @Field({ type: FieldType.STRING })
  department!: string;
  
  @Field({ type: FieldType.STRING })
  parentDepartment!: string;
  
  @Field({ type: FieldType.STRING })
  company!: string;
  
  @Field({ type: FieldType.STRING })
  isGroup!: string;
  
  @Field({ type: FieldType.STRING })
  disabled!: string;
  
  @Field({ type: FieldType.STRING })
  leaveBlockList!: string;
  
  @Field({ type: FieldType.STRING })
  leaveApprovers!: string;
  
  @Field({ type: FieldType.STRING })
  leaveApprover!: string;
  
  @Field({ type: FieldType.STRING })
  expenseApprovers!: string;
  
  @Field({ type: FieldType.STRING })
  expenseApprover!: string;
  
  @Field({ type: FieldType.STRING })
  lft!: string;
  
  @Field({ type: FieldType.STRING })
  rgt!: string;
  
  @Field({ type: FieldType.STRING })
  oldParent!: string;
  
  
}

export interface IDepartment {
  id: number;
  department: string;
  parentDepartment: string;
  company: string;
  isGroup: string;
  disabled: string;
  leaveBlockList: string;
  leaveApprovers: string;
  leaveApprover: string;
  expenseApprovers: string;
  expenseApprover: string;
  lft: string;
  rgt: string;
  oldParent: string;
  
}
