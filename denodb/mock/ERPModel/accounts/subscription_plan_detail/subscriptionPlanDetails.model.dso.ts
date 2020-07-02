// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: SubscriptionPlanDetail
|--------------------------------------------------------------------------
|
| Model Class and Interface of subscriptionPlanDetails
|
*/
import {
  BaseModel,
  Field,
  FieldType,
  Model
} from "https://deno.land/x/dso@v1.0.0/mod.ts";

@Model("subscriptionPlanDetails")
export class SubscriptionPlanDetail extends BaseModel { 

  @Field({
    type: FieldType.INT,
    primary: true,
    length: 11,
    autoIncrement: true
  })
  id!: number;

  @Field({ type: FieldType.STRING })
  quantity!: string;
  
  @Field({ type: FieldType.STRING })
  plan!: string;
  
  
}

export interface ISubscriptionPlanDetail {
  id: number;
  quantity: string;
  plan: string;
  
}
