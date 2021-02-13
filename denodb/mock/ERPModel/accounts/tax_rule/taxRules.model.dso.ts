// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: TaxRule
|--------------------------------------------------------------------------
|
| Model Class and Interface of taxRules
|
*/
import {
  BaseModel,
  Field,
  FieldType,
  Model
} from "https://deno.land/x/dso@v1.0.0/mod.ts";

@Model("taxRules")
export class TaxRule extends BaseModel { 

  @Field({
    type: FieldType.INT,
    primary: true,
    length: 11,
    autoIncrement: true
  })
  id!: number;

  @Field({ type: FieldType.STRING })
  taxType!: string;
  
  @Field({ type: FieldType.STRING })
  useForShoppingCart!: string;
  
  @Field({ type: FieldType.STRING })
  salesTaxTemplate!: string;
  
  @Field({ type: FieldType.STRING })
  purchaseTaxTemplate!: string;
  
  @Field({ type: FieldType.STRING })
  filters!: string;
  
  @Field({ type: FieldType.STRING })
  customer!: string;
  
  @Field({ type: FieldType.STRING })
  supplier!: string;
  
  @Field({ type: FieldType.STRING })
  item!: string;
  
  @Field({ type: FieldType.STRING })
  billingCity!: string;
  
  @Field({ type: FieldType.STRING })
  billingCounty!: string;
  
  @Field({ type: FieldType.STRING })
  billingState!: string;
  
  @Field({ type: FieldType.STRING })
  billingZipcode!: string;
  
  @Field({ type: FieldType.STRING })
  billingCountry!: string;
  
  @Field({ type: FieldType.STRING })
  taxCategory!: string;
  
  @Field({ type: FieldType.STRING })
  customerGroup!: string;
  
  @Field({ type: FieldType.STRING })
  supplierGroup!: string;
  
  @Field({ type: FieldType.STRING })
  itemGroup!: string;
  
  @Field({ type: FieldType.STRING })
  shippingCity!: string;
  
  @Field({ type: FieldType.STRING })
  shippingCounty!: string;
  
  @Field({ type: FieldType.STRING })
  shippingState!: string;
  
  @Field({ type: FieldType.STRING })
  shippingZipcode!: string;
  
  @Field({ type: FieldType.STRING })
  shippingCountry!: string;
  
  @Field({ type: FieldType.STRING })
  validity!: string;
  
  @Field({ type: FieldType.STRING })
  fromDate!: string;
  
  @Field({ type: FieldType.STRING })
  toDate!: string;
  
  @Field({ type: FieldType.STRING })
  priority!: string;
  
  @Field({ type: FieldType.STRING })
  company!: string;
  
  
}

export interface ITaxRule {
  id: number;
  taxType: string;
  useForShoppingCart: string;
  salesTaxTemplate: string;
  purchaseTaxTemplate: string;
  filters: string;
  customer: string;
  supplier: string;
  item: string;
  billingCity: string;
  billingCounty: string;
  billingState: string;
  billingZipcode: string;
  billingCountry: string;
  taxCategory: string;
  customerGroup: string;
  supplierGroup: string;
  itemGroup: string;
  shippingCity: string;
  shippingCounty: string;
  shippingState: string;
  shippingZipcode: string;
  shippingCountry: string;
  validity: string;
  fromDate: string;
  toDate: string;
  priority: string;
  company: string;
  
}
