// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: PaymentEntryDeduction
|--------------------------------------------------------------------------
|
| Model Class and Interface of paymentEntryDeductions
|
*/
import {
  BaseModel,
  Field,
  FieldType,
  Model
} from "https://deno.land/x/dso@v1.0.0/mod.ts";

@Model("paymentEntryDeductions")
export class PaymentEntryDeduction extends BaseModel { 

  @Field({
    type: FieldType.INT,
    primary: true,
    length: 11,
    autoIncrement: true
  })
  id!: number;

  @Field({ type: FieldType.STRING })
  account!: string;
  
  @Field({ type: FieldType.STRING })
  costCenter!: string;
  
  @Field({ type: FieldType.STRING })
  amount!: string;
  
  
}

export interface IPaymentEntryDeduction {
  id: number;
  account: string;
  costCenter: string;
  amount: string;
  
}
