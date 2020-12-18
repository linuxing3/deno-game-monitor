// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: BankStatementTransactionPaymentItem
|--------------------------------------------------------------------------
|
| Model Class and Interface of bankStatementTransactionPaymentItems
|
*/
import {
  BaseModel,
  Field,
  FieldType,
  Model
} from "https://deno.land/x/dso@v1.0.0/mod.ts";

@Model("bankStatementTransactionPaymentItems")
export class BankStatementTransactionPaymentItem extends BaseModel { 

  @Field({
    type: FieldType.INT,
    primary: true,
    length: 11,
    autoIncrement: true
  })
  id!: number;

  @Field({ type: FieldType.STRING })
  transactionDate!: string;
  
  @Field({ type: FieldType.STRING })
  description!: string;
  
  @Field({ type: FieldType.STRING })
  amount!: string;
  
  @Field({ type: FieldType.STRING })
  partyType!: string;
  
  @Field({ type: FieldType.STRING })
  party!: string;
  
  @Field({ type: FieldType.STRING })
  referenceType!: string;
  
  @Field({ type: FieldType.STRING })
  account!: string;
  
  @Field({ type: FieldType.STRING })
  modeOfPayment!: string;
  
  @Field({ type: FieldType.STRING })
  outstandingAmount!: string;
  
  @Field({ type: FieldType.STRING })
  referenceName!: string;
  
  @Field({ type: FieldType.STRING })
  paymentReference!: string;
  
  @Field({ type: FieldType.STRING })
  invoices!: string;
  
  
}

export interface IBankStatementTransactionPaymentItem {
  id: number;
  transactionDate: string;
  description: string;
  amount: string;
  partyType: string;
  party: string;
  referenceType: string;
  account: string;
  modeOfPayment: string;
  outstandingAmount: string;
  referenceName: string;
  paymentReference: string;
  invoices: string;
  
}
