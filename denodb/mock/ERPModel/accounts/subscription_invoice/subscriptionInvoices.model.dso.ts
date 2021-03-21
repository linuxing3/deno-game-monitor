// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: SubscriptionInvoice
|--------------------------------------------------------------------------
|
| Model Class and Interface of subscriptionInvoices
|
*/
import {
  BaseModel,
  Field,
  FieldType,
  Model
} from "https://deno.land/x/dso@v1.0.0/mod.ts";

@Model("subscriptionInvoices")
export class SubscriptionInvoice extends BaseModel { 

  @Field({
    type: FieldType.INT,
    primary: true,
    length: 11,
    autoIncrement: true
  })
  id!: number;

  @Field({ type: FieldType.STRING })
  invoice!: string;
  
  
}

export interface ISubscriptionInvoice {
  id: number;
  invoice: string;
  
}
