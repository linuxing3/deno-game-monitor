// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: ActivityType
|--------------------------------------------------------------------------
|
| Model Class and Interface of activityTypes
|
*/
import {
  BaseModel,
  Field,
  FieldType,
  Model
} from "https://deno.land/x/dso@v1.0.0/mod.ts";

@Model("activityTypes")
export class ActivityType extends BaseModel { 

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
  defaultCostingRate!: string;
  
  @Field({ type: FieldType.STRING })
  defaultBillingRate!: string;
  
  @Field({ type: FieldType.STRING })
  disabled!: string;
  
  
}

export interface IActivityType {
  id: number;
  activityType: string;
  defaultCostingRate: string;
  defaultBillingRate: string;
  disabled: string;
  
}
