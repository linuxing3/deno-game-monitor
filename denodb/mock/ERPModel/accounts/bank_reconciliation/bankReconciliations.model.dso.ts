// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: BankReconciliation
|--------------------------------------------------------------------------
|
| Model Class and Interface of bankReconciliations
|
*/
import {
  BaseModel,
  Field,
  FieldType,
  Model
} from "https://deno.land/x/dso@v1.0.0/mod.ts";

@Model("bankReconciliations")
export class BankReconciliation extends BaseModel { 

  @Field({
    type: FieldType.INT,
    primary: true,
    length: 11,
    autoIncrement: true
  })
  id!: number;

  @Field({ type: FieldType.STRING })
  bankAccount!: string;
  
  @Field({ type: FieldType.STRING })
  accountCurrency!: string;
  
  @Field({ type: FieldType.STRING })
  fromDate!: string;
  
  @Field({ type: FieldType.STRING })
  toDate!: string;
  
  @Field({ type: FieldType.STRING })
  includeReconciledEntries!: string;
  
  @Field({ type: FieldType.STRING })
  includePosTransactions!: string;
  
  @Field({ type: FieldType.STRING })
  getPaymentEntries!: string;
  
  @Field({ type: FieldType.STRING })
  paymentEntries!: string;
  
  @Field({ type: FieldType.STRING })
  updateClearanceDate!: string;
  
  @Field({ type: FieldType.STRING })
  totalAmount!: string;
  
  
}

export interface IBankReconciliation {
  id: number;
  bankAccount: string;
  accountCurrency: string;
  fromDate: string;
  toDate: string;
  includeReconciledEntries: string;
  includePosTransactions: string;
  getPaymentEntries: string;
  paymentEntries: string;
  updateClearanceDate: string;
  totalAmount: string;
  
}
