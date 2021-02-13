// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: PaymentTermsTemplateDetail
|--------------------------------------------------------------------------
|
| Model Class and Interface of paymentTermsTemplateDetails
|
*/
import {
  BaseModel,
  Field,
  FieldType,
  Model
} from "https://deno.land/x/dso@v1.0.0/mod.ts";

@Model("paymentTermsTemplateDetails")
export class PaymentTermsTemplateDetail extends BaseModel { 

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
  invoicePortion!: string;
  
  @Field({ type: FieldType.STRING })
  dueDateBasedOn!: string;
  
  @Field({ type: FieldType.STRING })
  creditDays!: string;
  
  @Field({ type: FieldType.STRING })
  creditMonths!: string;
  
  @Field({ type: FieldType.STRING })
  modeOfPayment!: string;
  
  
}

export interface IPaymentTermsTemplateDetail {
  id: number;
  paymentTerm: string;
  description: string;
  invoicePortion: string;
  dueDateBasedOn: string;
  creditDays: string;
  creditMonths: string;
  modeOfPayment: string;
  
}
