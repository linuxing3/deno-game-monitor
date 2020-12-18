// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: PaymentOrderReference
|--------------------------------------------------------------------------
|
| Model Class and Interface of paymentOrderReferences
|
*/
import {
  BaseModel,
  Field,
  FieldType,
  Model
} from "https://deno.land/x/dso@v1.0.0/mod.ts";

@Model("paymentOrderReferences")
export class PaymentOrderReference extends BaseModel { 

  @Field({
    type: FieldType.INT,
    primary: true,
    length: 11,
    autoIncrement: true
  })
  id!: number;

  @Field({ type: FieldType.STRING })
  type!: string;
  
  @Field({ type: FieldType.STRING })
  name!: string;
  
  @Field({ type: FieldType.STRING })
  amount!: string;
  
  @Field({ type: FieldType.STRING })
  supplier!: string;
  
  @Field({ type: FieldType.STRING })
  paymentRequest!: string;
  
  @Field({ type: FieldType.STRING })
  modeOfPayment!: string;
  
  @Field({ type: FieldType.STRING })
  bankAccountDetails!: string;
  
  @Field({ type: FieldType.STRING })
  bankAccount!: string;
  
  @Field({ type: FieldType.STRING })
  account!: string;
  
  @Field({ type: FieldType.STRING })
  paymentReference!: string;
  
  
}

export interface IPaymentOrderReference {
  id: number;
  type: string;
  name: string;
  amount: string;
  supplier: string;
  paymentRequest: string;
  modeOfPayment: string;
  bankAccountDetails: string;
  bankAccount: string;
  account: string;
  paymentReference: string;
  
}
