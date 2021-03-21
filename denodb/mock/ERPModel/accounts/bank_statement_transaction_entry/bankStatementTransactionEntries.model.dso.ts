// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: BankStatementTransactionEntry
|--------------------------------------------------------------------------
|
| Model Class and Interface of bankStatementTransactionEntries
|
*/
import {
  BaseModel,
  Field,
  FieldType,
  Model
} from "https://deno.land/x/dso@v1.0.0/mod.ts";

@Model("bankStatementTransactionEntries")
export class BankStatementTransactionEntry extends BaseModel { 

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
  fromDate!: string;
  
  @Field({ type: FieldType.STRING })
  toDate!: string;
  
  @Field({ type: FieldType.STRING })
  bankStatementSettings!: string;
  
  @Field({ type: FieldType.STRING })
  bank!: string;
  
  @Field({ type: FieldType.STRING })
  receivableAccount!: string;
  
  @Field({ type: FieldType.STRING })
  payableAccount!: string;
  
  @Field({ type: FieldType.STRING })
  bankStatement!: string;
  
  @Field({ type: FieldType.STRING })
  bankTransactionEntries!: string;
  
  @Field({ type: FieldType.STRING })
  newTransactions!: string;
  
  @Field({ type: FieldType.STRING })
  matchTransactionToInvoices!: string;
  
  @Field({ type: FieldType.STRING })
  createNewPaymentJournalEntry!: string;
  
  @Field({ type: FieldType.STRING })
  submitReconcilePayments!: string;
  
  @Field({ type: FieldType.STRING })
  matchingInvoices!: string;
  
  @Field({ type: FieldType.STRING })
  paymentInvoiceItems!: string;
  
  @Field({ type: FieldType.STRING })
  reconciledTransactions!: string;
  
  @Field({ type: FieldType.STRING })
  amendedFrom!: string;
  
  
}

export interface IBankStatementTransactionEntry {
  id: number;
  bankAccount: string;
  fromDate: string;
  toDate: string;
  bankStatementSettings: string;
  bank: string;
  receivableAccount: string;
  payableAccount: string;
  bankStatement: string;
  bankTransactionEntries: string;
  newTransactions: string;
  matchTransactionToInvoices: string;
  createNewPaymentJournalEntry: string;
  submitReconcilePayments: string;
  matchingInvoices: string;
  paymentInvoiceItems: string;
  reconciledTransactions: string;
  amendedFrom: string;
  
}
