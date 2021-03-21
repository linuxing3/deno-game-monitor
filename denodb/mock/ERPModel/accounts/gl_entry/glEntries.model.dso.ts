// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: GlEntry
|--------------------------------------------------------------------------
|
| Model Class and Interface of glEntries
|
*/
import {
  BaseModel,
  Field,
  FieldType,
  Model
} from "https://deno.land/x/dso@v1.0.0/mod.ts";

@Model("glEntries")
export class GlEntry extends BaseModel { 

  @Field({
    type: FieldType.INT,
    primary: true,
    length: 11,
    autoIncrement: true
  })
  id!: number;

  @Field({ type: FieldType.STRING })
  postingDate!: string;
  
  @Field({ type: FieldType.STRING })
  transactionDate!: string;
  
  @Field({ type: FieldType.STRING })
  account!: string;
  
  @Field({ type: FieldType.STRING })
  partyType!: string;
  
  @Field({ type: FieldType.STRING })
  party!: string;
  
  @Field({ type: FieldType.STRING })
  costCenter!: string;
  
  @Field({ type: FieldType.STRING })
  debitAmount!: string;
  
  @Field({ type: FieldType.STRING })
  creditAmount!: string;
  
  @Field({ type: FieldType.STRING })
  accountCurrency!: string;
  
  @Field({ type: FieldType.STRING })
  debitAmountInAccountCurrency!: string;
  
  @Field({ type: FieldType.STRING })
  creditAmountInAccountCurrency!: string;
  
  @Field({ type: FieldType.STRING })
  against!: string;
  
  @Field({ type: FieldType.STRING })
  againstVoucherType!: string;
  
  @Field({ type: FieldType.STRING })
  againstVoucher!: string;
  
  @Field({ type: FieldType.STRING })
  voucherType!: string;
  
  @Field({ type: FieldType.STRING })
  voucherNo!: string;
  
  @Field({ type: FieldType.STRING })
  voucherDetailNo!: string;
  
  @Field({ type: FieldType.STRING })
  project!: string;
  
  @Field({ type: FieldType.STRING })
  remarks!: string;
  
  @Field({ type: FieldType.STRING })
  isOpening!: string;
  
  @Field({ type: FieldType.STRING })
  isAdvance!: string;
  
  @Field({ type: FieldType.STRING })
  fiscalYear!: string;
  
  @Field({ type: FieldType.STRING })
  company!: string;
  
  @Field({ type: FieldType.STRING })
  financeBook!: string;
  
  @Field({ type: FieldType.STRING })
  toRename!: string;
  
  
}

export interface IGlEntry {
  id: number;
  postingDate: string;
  transactionDate: string;
  account: string;
  partyType: string;
  party: string;
  costCenter: string;
  debitAmount: string;
  creditAmount: string;
  accountCurrency: string;
  debitAmountInAccountCurrency: string;
  creditAmountInAccountCurrency: string;
  against: string;
  againstVoucherType: string;
  againstVoucher: string;
  voucherType: string;
  voucherNo: string;
  voucherDetailNo: string;
  project: string;
  remarks: string;
  isOpening: string;
  isAdvance: string;
  fiscalYear: string;
  company: string;
  financeBook: string;
  toRename: string;
  
}
