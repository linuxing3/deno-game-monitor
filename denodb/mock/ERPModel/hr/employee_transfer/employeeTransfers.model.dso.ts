// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: EmployeeTransfer
|--------------------------------------------------------------------------
|
| Model Class and Interface of employeeTransfers
|
*/
import {
  BaseModel,
  Field,
  FieldType,
  Model
} from "https://deno.land/x/dso@v1.0.0/mod.ts";

@Model("employeeTransfers")
export class EmployeeTransfer extends BaseModel { 

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
  transferDate!: string;
  
  @Field({ type: FieldType.STRING })
  company!: string;
  
  @Field({ type: FieldType.STRING })
  newCompany!: string;
  
  @Field({ type: FieldType.STRING })
  department!: string;
  
  @Field({ type: FieldType.STRING })
  employeeTransferDetails!: string;
  
  @Field({ type: FieldType.STRING })
  employeeTransferDetail!: string;
  
  @Field({ type: FieldType.STRING })
  reAllocateLeaves!: string;
  
  @Field({ type: FieldType.STRING })
  createNewEmployeeId!: string;
  
  @Field({ type: FieldType.STRING })
  newEmployeeId!: string;
  
  @Field({ type: FieldType.STRING })
  amendedFrom!: string;
  
  
}

export interface IEmployeeTransfer {
  id: number;
  employee: string;
  employeeName: string;
  transferDate: string;
  company: string;
  newCompany: string;
  department: string;
  employeeTransferDetails: string;
  employeeTransferDetail: string;
  reAllocateLeaves: string;
  createNewEmployeeId: string;
  newEmployeeId: string;
  amendedFrom: string;
  
}
