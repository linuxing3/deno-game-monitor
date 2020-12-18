// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: EmployeeHealthInsurance
|--------------------------------------------------------------------------
|
| Model Class and Interface of employeeHealthInsurances
|
*/
import {
  BaseModel,
  Field,
  FieldType,
  Model
} from "https://deno.land/x/dso@v1.0.0/mod.ts";

@Model("employeeHealthInsurances")
export class EmployeeHealthInsurance extends BaseModel { 

  @Field({
    type: FieldType.INT,
    primary: true,
    length: 11,
    autoIncrement: true
  })
  id!: number;

  @Field({ type: FieldType.STRING })
  healthInsuranceName!: string;
  
  
}

export interface IEmployeeHealthInsurance {
  id: number;
  healthInsuranceName: string;
  
}
