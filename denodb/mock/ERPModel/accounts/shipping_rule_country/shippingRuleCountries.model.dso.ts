// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: ShippingRuleCountry
|--------------------------------------------------------------------------
|
| Model Class and Interface of shippingRuleCountries
|
*/
import {
  BaseModel,
  Field,
  FieldType,
  Model
} from "https://deno.land/x/dso@v1.0.0/mod.ts";

@Model("shippingRuleCountries")
export class ShippingRuleCountry extends BaseModel { 

  @Field({
    type: FieldType.INT,
    primary: true,
    length: 11,
    autoIncrement: true
  })
  id!: number;

  @Field({ type: FieldType.STRING })
  country!: string;
  
  
}

export interface IShippingRuleCountry {
  id: number;
  country: string;
  
}
