// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: EmployeeTransferProperty
|--------------------------------------------------------------------------
|
| Model Class and Interface of employeeTransferProperties
|
*/
import {
  BaseModel,
  Field,
  FieldType,
  Model
} from "https://deno.land/x/dso@v1.0.0/mod.ts";

@Model("employeeTransferProperties")
export class EmployeeTransferProperty extends BaseModel { 

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
  
  
}

export interface IEmployeeTransferProperty {
  id: number;
  property: string;
  current: string;
  new: string;
  
}
