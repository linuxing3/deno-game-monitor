// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: PaymentGatewayAccount
|--------------------------------------------------------------------------
|
| Model Class and Interface of paymentGatewayAccounts
|
*/
import {
  BaseModel,
  Field,
  FieldType,
  Model
} from "https://deno.land/x/dso@v1.0.0/mod.ts";

@Model("paymentGatewayAccounts")
export class PaymentGatewayAccount extends BaseModel { 

  @Field({
    type: FieldType.INT,
    primary: true,
    length: 11,
    autoIncrement: true
  })
  id!: number;

  @Field({ type: FieldType.STRING })
  paymentGateway!: string;
  
  @Field({ type: FieldType.STRING })
  isDefault!: string;
  
  @Field({ type: FieldType.STRING })
  paymentAccount!: string;
  
  @Field({ type: FieldType.STRING })
  currency!: string;
  
  @Field({ type: FieldType.STRING })
  defaultPaymentRequestMessage!: string;
  
  @Field({ type: FieldType.STRING })
  messageExamples!: string;
  
  
}

export interface IPaymentGatewayAccount {
  id: number;
  paymentGateway: string;
  isDefault: string;
  paymentAccount: string;
  currency: string;
  defaultPaymentRequestMessage: string;
  messageExamples: string;
  
}
