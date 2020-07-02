// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: PaymentTerm
|--------------------------------------------------------------------------
|
| Model Class and Interface of paymentTerms
|
*/
import {
  BaseModel,
  Field,
  FieldType,
  Model
} from "https://deno.land/x/dso@v1.0.0/mod.ts";

@Model("paymentTerms")
export class PaymentTerm extends BaseModel { 

  @Field({
    type: FieldType.INT,
    primary: true,
    length: 11,
    autoIncrement: true
  })
  id!: number;

  @Field({ type: FieldType.STRING })
  paymentTermName!: string;
  
  @Field({ type: FieldType.STRING })
  invoicePortion!: string;
  
  @Field({ type: FieldType.STRING })
  modeOfPayment!: string;
  
  @Field({ type: FieldType.STRING })
  dueDateBasedOn!: string;
  
  @Field({ type: FieldType.STRING })
  creditDays!: string;
  
  @Field({ type: FieldType.STRING })
  creditMonths!: string;
  
  @Field({ type: FieldType.STRING })
  description!: string;
  
  
}

export interface IPaymentTerm {
  id: number;
  paymentTermName: string;
  invoicePortion: string;
  modeOfPayment: string;
  dueDateBasedOn: string;
  creditDays: string;
  creditMonths: string;
  description: string;
  
}
