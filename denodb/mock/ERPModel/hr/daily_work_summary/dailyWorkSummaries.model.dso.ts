// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: DailyWorkSummary
|--------------------------------------------------------------------------
|
| Model Class and Interface of dailyWorkSummaries
|
*/
import {
  BaseModel,
  Field,
  FieldType,
  Model
} from "https://deno.land/x/dso@v1.0.0/mod.ts";

@Model("dailyWorkSummaries")
export class DailyWorkSummary extends BaseModel { 

  @Field({
    type: FieldType.INT,
    primary: true,
    length: 11,
    autoIncrement: true
  })
  id!: number;

  @Field({ type: FieldType.STRING })
  dailyWorkSummaryGroup!: string;
  
  @Field({ type: FieldType.STRING })
  status!: string;
  
  @Field({ type: FieldType.STRING })
  emailSentTo!: string;
  
  
}

export interface IDailyWorkSummary {
  id: number;
  dailyWorkSummaryGroup: string;
  status: string;
  emailSentTo: string;
  
}
