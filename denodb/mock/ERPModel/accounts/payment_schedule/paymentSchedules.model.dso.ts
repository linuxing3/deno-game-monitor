// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: PaymentSchedule
|--------------------------------------------------------------------------
|
| Model Class and Interface of paymentSchedules
|
*/
import {
  BaseModel,
  Field,
  FieldType,
  Model
} from "https://deno.land/x/dso@v1.0.0/mod.ts";

@Model("paymentSchedules")
export class PaymentSchedule extends BaseModel { 

  @Field({
    type: FieldType.INT,
    primary: true,
    length: 11,
    autoIncrement: true
  })
  id!: number;

  @Field({ type: FieldType.STRING })
  paymentTerm!: string;
  
  @Field({ type: FieldType.STRING })
  description!: string;
  
  @Field({ type: FieldType.STRING })
  dueDate!: string;
  
  @Field({ type: FieldType.STRING })
  invoicePortion!: string;
  
  @Field({ type: FieldType.STRING })
  paymentAmount!: string;
  
  @Field({ type: FieldType.STRING })
  modeOfPayment!: string;
  
  
}

export interface IPaymentSchedule {
  id: number;
  paymentTerm: string;
  description: string;
  dueDate: string;
  invoicePortion: string;
  paymentAmount: string;
  modeOfPayment: string;
  
}
