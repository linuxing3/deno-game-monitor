// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: PaymentReconciliationPayment
|--------------------------------------------------------------------------
|
| Model Class and Interface of paymentReconciliationPayments
|
*/
import {
  BaseModel,
  Field,
  FieldType,
  Model
} from "https://deno.land/x/dso@v1.0.0/mod.ts";

@Model("paymentReconciliationPayments")
export class PaymentReconciliationPayment extends BaseModel { 

  @Field({
    type: FieldType.INT,
    primary: true,
    length: 11,
    autoIncrement: true
  })
  id!: number;

  @Field({ type: FieldType.STRING })
  referenceType!: string;
  
  @Field({ type: FieldType.STRING })
  referenceName!: string;
  
  @Field({ type: FieldType.STRING })
  postingDate!: string;
  
  @Field({ type: FieldType.STRING })
  isAdvance!: string;
  
  @Field({ type: FieldType.STRING })
  referenceRow!: string;
  
  @Field({ type: FieldType.STRING })
  invoiceNumber!: string;
  
  @Field({ type: FieldType.STRING })
  amount!: string;
  
  @Field({ type: FieldType.STRING })
  allocatedAmount!: string;
  
  @Field({ type: FieldType.STRING })
  remark!: string;
  
  
}

export interface IPaymentReconciliationPayment {
  id: number;
  referenceType: string;
  referenceName: string;
  postingDate: string;
  isAdvance: string;
  referenceRow: string;
  invoiceNumber: string;
  amount: string;
  allocatedAmount: string;
  remark: string;
  
}
