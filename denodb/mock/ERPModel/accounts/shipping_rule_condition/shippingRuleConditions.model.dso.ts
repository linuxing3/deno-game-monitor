// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: ShippingRuleCondition
|--------------------------------------------------------------------------
|
| Model Class and Interface of shippingRuleConditions
|
*/
import {
  BaseModel,
  Field,
  FieldType,
  Model
} from "https://deno.land/x/dso@v1.0.0/mod.ts";

@Model("shippingRuleConditions")
export class ShippingRuleCondition extends BaseModel { 

  @Field({
    type: FieldType.INT,
    primary: true,
    length: 11,
    autoIncrement: true
  })
  id!: number;

  @Field({ type: FieldType.STRING })
  fromValue!: string;
  
  @Field({ type: FieldType.STRING })
  toValue!: string;
  
  @Field({ type: FieldType.STRING })
  shippingAmount!: string;
  
  
}

export interface IShippingRuleCondition {
  id: number;
  fromValue: string;
  toValue: string;
  shippingAmount: string;
  
}
