// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: EmployeeTaxExemptionSubCategory
|--------------------------------------------------------------------------
|
| Model Class and Interface of employeeTaxExemptionSubCategories
|
*/
import {
  BaseModel,
  Field,
  FieldType,
  Model
} from "https://deno.land/x/dso@v1.0.0/mod.ts";

@Model("employeeTaxExemptionSubCategories")
export class EmployeeTaxExemptionSubCategory extends BaseModel { 

  @Field({
    type: FieldType.INT,
    primary: true,
    length: 11,
    autoIncrement: true
  })
  id!: number;

  @Field({ type: FieldType.STRING })
  taxExemptionCategory!: string;
  
  @Field({ type: FieldType.STRING })
  maxAmount!: string;
  
  @Field({ type: FieldType.STRING })
  isActive!: string;
  
  
}

export interface IEmployeeTaxExemptionSubCategory {
  id: number;
  taxExemptionCategory: string;
  maxAmount: string;
  isActive: string;
  
}
