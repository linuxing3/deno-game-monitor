// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: PaymentTermsTemplate
|--------------------------------------------------------------------------
|
| Model Class and Interface of paymentTermsTemplates
|
*/
import {
  BaseModel,
  Field,
  FieldType,
  Model
} from "https://deno.land/x/dso@v1.0.0/mod.ts";

@Model("paymentTermsTemplates")
export class PaymentTermsTemplate extends BaseModel { 

  @Field({
    type: FieldType.INT,
    primary: true,
    length: 11,
    autoIncrement: true
  })
  id!: number;

  @Field({ type: FieldType.STRING })
  templateName!: string;
  
  @Field({ type: FieldType.STRING })
  paymentTerms!: string;
  
  
}

export interface IPaymentTermsTemplate {
  id: number;
  templateName: string;
  paymentTerms: string;
  
}
