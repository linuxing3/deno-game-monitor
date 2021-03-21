// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: Appraisal
|--------------------------------------------------------------------------
|
| Model Class and Interface of appraisals
|
*/
import {
  BaseModel,
  Field,
  FieldType,
  Model
} from "https://deno.land/x/dso@v1.0.0/mod.ts";

@Model("appraisals")
export class Appraisal extends BaseModel { 

  @Field({
    type: FieldType.INT,
    primary: true,
    length: 11,
    autoIncrement: true
  })
  id!: number;

  @Field({ type: FieldType.STRING })
  forEmployeeName!: string;
  
  @Field({ type: FieldType.STRING })
  startDate!: string;
  
  @Field({ type: FieldType.STRING })
  endDate!: string;
  
  @Field({ type: FieldType.STRING })
  department!: string;
  
  @Field({ type: FieldType.STRING })
  goals!: string;
  
  @Field({ type: FieldType.STRING })
  totalScoreOutOf_5!: string;
  
  @Field({ type: FieldType.STRING })
  remarks!: string;
  
  @Field({ type: FieldType.STRING })
  company!: string;
  
  
}

export interface IAppraisal {
  id: number;
  forEmployeeName: string;
  startDate: string;
  endDate: string;
  department: string;
  goals: string;
  totalScoreOutOf_5: string;
  remarks: string;
  company: string;
  
}
