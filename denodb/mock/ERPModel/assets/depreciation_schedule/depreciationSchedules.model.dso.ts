// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: DepreciationSchedule
|--------------------------------------------------------------------------
|
| Model Class and Interface of depreciationSchedules
|
*/
import {
  BaseModel,
  Field,
  FieldType,
  Model
} from "https://deno.land/x/dso@v1.0.0/mod.ts";

@Model("depreciationSchedules")
export class DepreciationSchedule extends BaseModel { 

  @Field({
    type: FieldType.INT,
    primary: true,
    length: 11,
    autoIncrement: true
  })
  id!: number;

  @Field({ type: FieldType.STRING })
  financeBook!: string;
  
  @Field({ type: FieldType.STRING })
  scheduleDate!: string;
  
  @Field({ type: FieldType.STRING })
  depreciationAmount!: string;
  
  @Field({ type: FieldType.STRING })
  accumulatedDepreciationAmount!: string;
  
  @Field({ type: FieldType.STRING })
  journalEntry!: string;
  
  @Field({ type: FieldType.STRING })
  makeDepreciationEntry!: string;
  
  @Field({ type: FieldType.STRING })
  financeBookId!: string;
  
  @Field({ type: FieldType.STRING })
  depreciationMethod!: string;
  
  
}

export interface IDepreciationSchedule {
  id: number;
  financeBook: string;
  scheduleDate: string;
  depreciationAmount: string;
  accumulatedDepreciationAmount: string;
  journalEntry: string;
  makeDepreciationEntry: string;
  financeBookId: string;
  depreciationMethod: string;
  
}
