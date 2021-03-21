// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: ActivityCost
|--------------------------------------------------------------------------
|
| Model Class and Interface of activityCosts
|
*/
import {
  BaseModel,
  Field,
  FieldType,
  Model
} from "https://deno.land/x/dso@v1.0.0/mod.ts";

@Model("activityCosts")
export class ActivityCost extends BaseModel { 

  @Field({
    type: FieldType.INT,
    primary: true,
    length: 11,
    autoIncrement: true
  })
  id!: number;

  @Field({ type: FieldType.STRING })
  activityType!: string;
  
  @Field({ type: FieldType.STRING })
  employee!: string;
  
  @Field({ type: FieldType.STRING })
  employeeName!: string;
  
  @Field({ type: FieldType.STRING })
  department!: string;
  
  @Field({ type: FieldType.STRING })
  billingRate!: string;
  
  @Field({ type: FieldType.STRING })
  costingRate!: string;
  
  @Field({ type: FieldType.STRING })
  title!: string;
  
  
}

export interface IActivityCost {
  id: number;
  activityType: string;
  employee: string;
  employeeName: string;
  department: string;
  billingRate: string;
  costingRate: string;
  title: string;
  
}
