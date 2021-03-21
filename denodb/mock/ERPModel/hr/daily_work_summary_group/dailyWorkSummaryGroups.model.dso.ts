// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: DailyWorkSummaryGroup
|--------------------------------------------------------------------------
|
| Model Class and Interface of dailyWorkSummaryGroups
|
*/
import {
  BaseModel,
  Field,
  FieldType,
  Model
} from "https://deno.land/x/dso@v1.0.0/mod.ts";

@Model("dailyWorkSummaryGroups")
export class DailyWorkSummaryGroup extends BaseModel { 

  @Field({
    type: FieldType.INT,
    primary: true,
    length: 11,
    autoIncrement: true
  })
  id!: number;

  @Field({ type: FieldType.STRING })
  enabled!: string;
  
  @Field({ type: FieldType.STRING })
  selectUsers!: string;
  
  @Field({ type: FieldType.STRING })
  users!: string;
  
  @Field({ type: FieldType.STRING })
  sendEmailsAt!: string;
  
  @Field({ type: FieldType.STRING })
  holidayList!: string;
  
  @Field({ type: FieldType.STRING })
  reminder!: string;
  
  @Field({ type: FieldType.STRING })
  subject!: string;
  
  @Field({ type: FieldType.STRING })
  message!: string;
  
  
}

export interface IDailyWorkSummaryGroup {
  id: number;
  enabled: string;
  selectUsers: string;
  users: string;
  sendEmailsAt: string;
  holidayList: string;
  reminder: string;
  subject: string;
  message: string;
  
}
