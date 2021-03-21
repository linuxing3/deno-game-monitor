// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: ShippingRule
|--------------------------------------------------------------------------
|
| Model Class and Interface of shippingRules
|
*/
import {
  BaseModel,
  Field,
  FieldType,
  Model
} from "https://deno.land/x/dso@v1.0.0/mod.ts";

@Model("shippingRules")
export class ShippingRule extends BaseModel { 

  @Field({
    type: FieldType.INT,
    primary: true,
    length: 11,
    autoIncrement: true
  })
  id!: number;

  @Field({ type: FieldType.STRING })
  shippingRuleLabel!: string;
  
  @Field({ type: FieldType.STRING })
  disabled!: string;
  
  @Field({ type: FieldType.STRING })
  shippingRuleType!: string;
  
  @Field({ type: FieldType.STRING })
  accounting!: string;
  
  @Field({ type: FieldType.STRING })
  company!: string;
  
  @Field({ type: FieldType.STRING })
  shippingAccount!: string;
  
  @Field({ type: FieldType.STRING })
  costCenter!: string;
  
  @Field({ type: FieldType.STRING })
  calculateBasedOn!: string;
  
  @Field({ type: FieldType.STRING })
  shippingAmount!: string;
  
  @Field({ type: FieldType.STRING })
  shippingRuleConditions!: string;
  
  @Field({ type: FieldType.STRING })
  restrictToCountries!: string;
  
  @Field({ type: FieldType.STRING })
  validForCountries!: string;
  
  
}

export interface IShippingRule {
  id: number;
  shippingRuleLabel: string;
  disabled: string;
  shippingRuleType: string;
  accounting: string;
  company: string;
  shippingAccount: string;
  costCenter: string;
  calculateBasedOn: string;
  shippingAmount: string;
  shippingRuleConditions: string;
  restrictToCountries: string;
  validForCountries: string;
  
}
