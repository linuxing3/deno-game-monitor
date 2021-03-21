// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: PaymentEntryReference
|--------------------------------------------------------------------------
|
| Model Class and Interface of paymentEntryReferences
|
*/
import {
  BaseModel,
  Field,
  FieldType,
  Model
} from "https://deno.land/x/dso@v1.0.0/mod.ts";

@Model("paymentEntryReferences")
export class PaymentEntryReference extends BaseModel { 

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
  dueDate!: string;
  
  @Field({ type: FieldType.STRING })
  supplierInvoiceNo!: string;
  
  @Field({ type: FieldType.STRING })
  totalAmount!: string;
  
  @Field({ type: FieldType.STRING })
  outstanding!: string;
  
  @Field({ type: FieldType.STRING })
  allocated!: string;
  
  @Field({ type: FieldType.STRING })
  exchangeRate!: string;
  
  
}

export interface IPaymentEntryReference {
  id: number;
  type: string;
  name: string;
  dueDate: string;
  supplierInvoiceNo: string;
  totalAmount: string;
  outstanding: string;
  allocated: string;
  exchangeRate: string;
  
}
