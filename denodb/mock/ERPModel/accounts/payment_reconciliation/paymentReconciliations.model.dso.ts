// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: PaymentReconciliation
|--------------------------------------------------------------------------
|
| Model Class and Interface of paymentReconciliations
|
*/
import {
  BaseModel,
  Field,
  FieldType,
  Model
} from "https://deno.land/x/dso@v1.0.0/mod.ts";

@Model("paymentReconciliations")
export class PaymentReconciliation extends BaseModel { 

  @Field({
    type: FieldType.INT,
    primary: true,
    length: 11,
    autoIncrement: true
  })
  id!: number;

  @Field({ type: FieldType.STRING })
  company!: string;
  
  @Field({ type: FieldType.STRING })
  partyType!: string;
  
  @Field({ type: FieldType.STRING })
  party!: string;
  
  @Field({ type: FieldType.STRING })
  receivablePayableAccount!: string;
  
  @Field({ type: FieldType.STRING })
  bankCashAccount!: string;
  
  @Field({ type: FieldType.STRING })
  fromInvoiceDate!: string;
  
  @Field({ type: FieldType.STRING })
  toInvoiceDate!: string;
  
  @Field({ type: FieldType.STRING })
  minimumInvoiceAmount!: string;
  
  @Field({ type: FieldType.STRING })
  maximumInvoiceAmount!: string;
  
  @Field({ type: FieldType.STRING })
  limit!: string;
  
  @Field({ type: FieldType.STRING })
  getUnreconciledEntries!: string;
  
  @Field({ type: FieldType.STRING })
  unreconciledPaymentDetails!: string;
  
  @Field({ type: FieldType.STRING })
  payments!: string;
  
  @Field({ type: FieldType.STRING })
  reconcile!: string;
  
  @Field({ type: FieldType.STRING })
  invoiceJournalEntryDetails!: string;
  
  @Field({ type: FieldType.STRING })
  invoices!: string;
  
  
}

export interface IPaymentReconciliation {
  id: number;
  company: string;
  partyType: string;
  party: string;
  receivablePayableAccount: string;
  bankCashAccount: string;
  fromInvoiceDate: string;
  toInvoiceDate: string;
  minimumInvoiceAmount: string;
  maximumInvoiceAmount: string;
  limit: string;
  getUnreconciledEntries: string;
  unreconciledPaymentDetails: string;
  payments: string;
  reconcile: string;
  invoiceJournalEntryDetails: string;
  invoices: string;
  
}
