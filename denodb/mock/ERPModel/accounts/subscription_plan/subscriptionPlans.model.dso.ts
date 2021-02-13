// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: SubscriptionPlan
|--------------------------------------------------------------------------
|
| Model Class and Interface of subscriptionPlans
|
*/
import {
  BaseModel,
  Field,
  FieldType,
  Model
} from "https://deno.land/x/dso@v1.0.0/mod.ts";

@Model("subscriptionPlans")
export class SubscriptionPlan extends BaseModel { 

  @Field({
    type: FieldType.INT,
    primary: true,
    length: 11,
    autoIncrement: true
  })
  id!: number;

  @Field({ type: FieldType.STRING })
  planName!: string;
  
  @Field({ type: FieldType.STRING })
  currency!: string;
  
  @Field({ type: FieldType.STRING })
  item!: string;
  
  @Field({ type: FieldType.STRING })
  priceDetermination!: string;
  
  @Field({ type: FieldType.STRING })
  cost!: string;
  
  @Field({ type: FieldType.STRING })
  priceList!: string;
  
  @Field({ type: FieldType.STRING })
  billingInterval!: string;
  
  @Field({ type: FieldType.STRING })
  billingIntervalCount!: string;
  
  @Field({ type: FieldType.STRING })
  paymentPlan!: string;
  
  @Field({ type: FieldType.STRING })
  paymentGateway!: string;
  
  
}

export interface ISubscriptionPlan {
  id: number;
  planName: string;
  currency: string;
  item: string;
  priceDetermination: string;
  cost: string;
  priceList: string;
  billingInterval: string;
  billingIntervalCount: string;
  paymentPlan: string;
  paymentGateway: string;
  
}
