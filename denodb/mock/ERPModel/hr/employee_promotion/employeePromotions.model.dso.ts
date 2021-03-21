// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: EmployeePromotion
|--------------------------------------------------------------------------
|
| Model Class and Interface of employeePromotions
|
*/
import {
  BaseModel,
  Field,
  FieldType,
  Model
} from "https://deno.land/x/dso@v1.0.0/mod.ts";

@Model("employeePromotions")
export class EmployeePromotion extends BaseModel { 

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
  department!: string;
  
  @Field({ type: FieldType.STRING })
  promotionDate!: string;
  
  @Field({ type: FieldType.STRING })
  company!: string;
  
  @Field({ type: FieldType.STRING })
  employeePromotionDetails!: string;
  
  @Field({ type: FieldType.STRING })
  employeePromotionDetail!: string;
  
  @Field({ type: FieldType.STRING })
  amendedFrom!: string;
  
  
}

export interface IEmployeePromotion {
  id: number;
  employee: string;
  employeeName: string;
  department: string;
  promotionDate: string;
  company: string;
  employeePromotionDetails: string;
  employeePromotionDetail: string;
  amendedFrom: string;
  
}
