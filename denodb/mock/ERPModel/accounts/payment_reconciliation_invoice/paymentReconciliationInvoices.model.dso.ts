// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: PaymentReconciliationInvoice
|--------------------------------------------------------------------------
|
| Model Class and Interface of paymentReconciliationInvoices
|
*/
import {
  BaseModel,
  Field,
  FieldType,
  Model
} from "https://deno.land/x/dso@v1.0.0/mod.ts";

@Model("paymentReconciliationInvoices")
export class PaymentReconciliationInvoice extends BaseModel { 

  @Field({
    type: FieldType.INT,
    primary: true,
    length: 11,
    autoIncrement: true
  })
  id!: number;

  @Field({ type: FieldType.STRING })
  invoiceType!: string;
  
  @Field({ type: FieldType.STRING })
  invoiceNumber!: string;
  
  @Field({ type: FieldType.STRING })
  invoiceDate!: string;
  
  @Field({ type: FieldType.STRING })
  amount!: string;
  
  @Field({ type: FieldType.STRING })
  outstandingAmount!: string;
  
  
}

export interface IPaymentReconciliationInvoice {
  id: number;
  invoiceType: string;
  invoiceNumber: string;
  invoiceDate: string;
  amount: string;
  outstandingAmount: string;
  
}
