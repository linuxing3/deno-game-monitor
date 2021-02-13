// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: RetentionBonu
|--------------------------------------------------------------------------
|
| Model Class and Interface of retentionBonuses
|
*/
import {
  BaseModel,
  Field,
  FieldType,
  Model
} from "https://deno.land/x/dso@v1.0.0/mod.ts";

@Model("retentionBonuses")
export class RetentionBonu extends BaseModel { 

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
  employee!: string;
  
  @Field({ type: FieldType.STRING })
  bonusPaymentDate!: string;
  
  @Field({ type: FieldType.STRING })
  bonusAmount!: string;
  
  @Field({ type: FieldType.STRING })
  amendedFrom!: string;
  
  @Field({ type: FieldType.STRING })
  employeeName!: string;
  
  @Field({ type: FieldType.STRING })
  department!: string;
  
  @Field({ type: FieldType.STRING })
  dateOfJoining!: string;
  
  
}

export interface IRetentionBonu {
  id: number;
  company: string;
  employee: string;
  bonusPaymentDate: string;
  bonusAmount: string;
  amendedFrom: string;
  employeeName: string;
  department: string;
  dateOfJoining: string;
  
}
