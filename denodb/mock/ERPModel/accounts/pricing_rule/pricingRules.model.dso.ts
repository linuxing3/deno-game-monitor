// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: PricingRule
|--------------------------------------------------------------------------
|
| Model Class and Interface of pricingRules
|
*/
import {
  BaseModel,
  Field,
  FieldType,
  Model
} from "https://deno.land/x/dso@v1.0.0/mod.ts";

@Model("pricingRules")
export class PricingRule extends BaseModel { 

  @Field({
    type: FieldType.INT,
    primary: true,
    length: 11,
    autoIncrement: true
  })
  id!: number;

  @Field({ type: FieldType.STRING })
  title!: string;
  
  @Field({ type: FieldType.STRING })
  applyOn!: string;
  
  @Field({ type: FieldType.STRING })
  itemCode!: string;
  
  @Field({ type: FieldType.STRING })
  brand!: string;
  
  @Field({ type: FieldType.STRING })
  itemGroup!: string;
  
  @Field({ type: FieldType.STRING })
  priority!: string;
  
  @Field({ type: FieldType.STRING })
  disable!: string;
  
  @Field({ type: FieldType.STRING })
  selling!: string;
  
  @Field({ type: FieldType.STRING })
  buying!: string;
  
  @Field({ type: FieldType.STRING })
  applicableFor!: string;
  
  @Field({ type: FieldType.STRING })
  customer!: string;
  
  @Field({ type: FieldType.STRING })
  customerGroup!: string;
  
  @Field({ type: FieldType.STRING })
  territory!: string;
  
  @Field({ type: FieldType.STRING })
  salesPartner!: string;
  
  @Field({ type: FieldType.STRING })
  campaign!: string;
  
  @Field({ type: FieldType.STRING })
  supplier!: string;
  
  @Field({ type: FieldType.STRING })
  supplierGroup!: string;
  
  @Field({ type: FieldType.STRING })
  minQty!: string;
  
  @Field({ type: FieldType.STRING })
  maxQty!: string;
  
  @Field({ type: FieldType.STRING })
  validFrom!: string;
  
  @Field({ type: FieldType.STRING })
  validUpto!: string;
  
  @Field({ type: FieldType.STRING })
  company!: string;
  
  @Field({ type: FieldType.STRING })
  currency!: string;
  
  @Field({ type: FieldType.STRING })
  margin!: string;
  
  @Field({ type: FieldType.STRING })
  marginType!: string;
  
  @Field({ type: FieldType.STRING })
  marginRateOrAmount!: string;
  
  @Field({ type: FieldType.STRING })
  rateOrDiscount!: string;
  
  @Field({ type: FieldType.STRING })
  rate!: string;
  
  @Field({ type: FieldType.STRING })
  discountOnPriceListRate!: string;
  
  @Field({ type: FieldType.STRING })
  forPriceList!: string;
  
  @Field({ type: FieldType.STRING })
  pricingRuleHelp!: string;
  
  
}

export interface IPricingRule {
  id: number;
  title: string;
  applyOn: string;
  itemCode: string;
  brand: string;
  itemGroup: string;
  priority: string;
  disable: string;
  selling: string;
  buying: string;
  applicableFor: string;
  customer: string;
  customerGroup: string;
  territory: string;
  salesPartner: string;
  campaign: string;
  supplier: string;
  supplierGroup: string;
  minQty: string;
  maxQty: string;
  validFrom: string;
  validUpto: string;
  company: string;
  currency: string;
  margin: string;
  marginType: string;
  marginRateOrAmount: string;
  rateOrDiscount: string;
  rate: string;
  discountOnPriceListRate: string;
  forPriceList: string;
  pricingRuleHelp: string;
  
}
