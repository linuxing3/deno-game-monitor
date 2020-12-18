// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: PaymentOrder
|--------------------------------------------------------------------------
|
| Model Class and Interface of paymentOrders
|
*/
import {
  BaseModel,
  Field,
  FieldType,
  Model
} from "https://deno.land/x/dso@v1.0.0/mod.ts";

@Model("paymentOrders")
export class PaymentOrder extends BaseModel { 

  @Field({
    type: FieldType.INT,
    primary: true,
    length: 11,
    autoIncrement: true
  })
  id!: number;

  @Field({ type: FieldType.STRING })
  series!: string;
  
  @Field({ type: FieldType.STRING })
  company!: string;
  
  @Field({ type: FieldType.STRING })
  supplier!: string;
  
  @Field({ type: FieldType.STRING })
  postingDate!: string;
  
  @Field({ type: FieldType.STRING })
  bank!: string;
  
  @Field({ type: FieldType.STRING })
  paymentOrderReference!: string;
  
  @Field({ type: FieldType.STRING })
  amendedFrom!: string;
  
  
}

export interface IPaymentOrder {
  id: number;
  series: string;
  company: string;
  supplier: string;
  postingDate: string;
  bank: string;
  paymentOrderReference: string;
  amendedFrom: string;
  
}
