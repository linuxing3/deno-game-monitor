// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: BankStatementTransactionInvoiceItem
|--------------------------------------------------------------------------
|
| Model Class and Interface of bankStatementTransactionInvoiceItems
|
*/
import {
  BaseModel,
  Field,
  FieldType,
  Model
} from "https://deno.land/x/dso@v1.0.0/mod.ts";

@Model("bankStatementTransactionInvoiceItems")
export class BankStatementTransactionInvoiceItem extends BaseModel { 

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
  paymentDescription!: string;
  
  @Field({ type: FieldType.STRING })
  partyType!: string;
  
  @Field({ type: FieldType.STRING })
  party!: string;
  
  @Field({ type: FieldType.STRING })
  invoiceDate!: string;
  
  @Field({ type: FieldType.STRING })
  invoiceType!: string;
  
  @Field({ type: FieldType.STRING })
  invoice!: string;
  
  @Field({ type: FieldType.STRING })
  outstandingAmount!: string;
  
  @Field({ type: FieldType.STRING })
  allocatedAmount!: string;
  
  
}

export interface IBankStatementTransactionInvoiceItem {
  id: number;
  transactionDate: string;
  paymentDescription: string;
  partyType: string;
  party: string;
  invoiceDate: string;
  invoiceType: string;
  invoice: string;
  outstandingAmount: string;
  allocatedAmount: string;
  
}
