// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: EmployeeTaxExemptionCategory
|--------------------------------------------------------------------------
|
| Model Class and Interface of employeeTaxExemptionCategories
|
*/
import {
  BaseModel,
  Field,
  FieldType,
  Model
} from "https://deno.land/x/dso@v1.0.0/mod.ts";

@Model("employeeTaxExemptionCategories")
export class EmployeeTaxExemptionCategory extends BaseModel { 

  @Field({
    type: FieldType.INT,
    primary: true,
    length: 11,
    autoIncrement: true
  })
  id!: number;

  @Field({ type: FieldType.STRING })
  maxAmount!: string;
  
  @Field({ type: FieldType.STRING })
  isActive!: string;
  
  
}

export interface IEmployeeTaxExemptionCategory {
  id: number;
  maxAmount: string;
  isActive: string;
  
}
