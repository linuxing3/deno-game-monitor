// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: SalesInvoicePayment
|--------------------------------------------------------------------------
|
| Model Class and Interface of salesInvoicePayments
|
*/
import {
  BaseModel,
  Field,
  FieldType,
  Model
} from "https://deno.land/x/dso@v1.0.0/mod.ts";

@Model("salesInvoicePayments")
export class SalesInvoicePayment extends BaseModel { 

  @Field({
    type: FieldType.INT,
    primary: true,
    length: 11,
    autoIncrement: true
  })
  id!: number;

  @Field({ type: FieldType.STRING })
  default!: string;
  
  @Field({ type: FieldType.STRING })
  modeOfPayment!: string;
  
  @Field({ type: FieldType.STRING })
  amount!: string;
  
  @Field({ type: FieldType.STRING })
  account!: string;
  
  @Field({ type: FieldType.STRING })
  type!: string;
  
  @Field({ type: FieldType.STRING })
  baseAmountCompanyCurrency!: string;
  
  @Field({ type: FieldType.STRING })
  clearanceDate!: string;
  
  
}

export interface ISalesInvoicePayment {
  id: number;
  default: string;
  modeOfPayment: string;
  amount: string;
  account: string;
  type: string;
  baseAmountCompanyCurrency: string;
  clearanceDate: string;
  
}
