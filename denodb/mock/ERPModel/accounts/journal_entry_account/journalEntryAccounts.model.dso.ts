// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: JournalEntryAccount
|--------------------------------------------------------------------------
|
| Model Class and Interface of journalEntryAccounts
|
*/
import {
  BaseModel,
  Field,
  FieldType,
  Model
} from "https://deno.land/x/dso@v1.0.0/mod.ts";

@Model("journalEntryAccounts")
export class JournalEntryAccount extends BaseModel { 

  @Field({
    type: FieldType.INT,
    primary: true,
    length: 11,
    autoIncrement: true
  })
  id!: number;

  @Field({ type: FieldType.STRING })
  account!: string;
  
  @Field({ type: FieldType.STRING })
  accountType!: string;
  
  @Field({ type: FieldType.STRING })
  accountBalance!: string;
  
  @Field({ type: FieldType.STRING })
  costCenter!: string;
  
  @Field({ type: FieldType.STRING })
  partyType!: string;
  
  @Field({ type: FieldType.STRING })
  party!: string;
  
  @Field({ type: FieldType.STRING })
  partyBalance!: string;
  
  @Field({ type: FieldType.STRING })
  currency!: string;
  
  @Field({ type: FieldType.STRING })
  accountCurrency!: string;
  
  @Field({ type: FieldType.STRING })
  exchangeRate!: string;
  
  @Field({ type: FieldType.STRING })
  amount!: string;
  
  @Field({ type: FieldType.STRING })
  debit!: string;
  
  @Field({ type: FieldType.STRING })
  debitInCompanyCurrency!: string;
  
  @Field({ type: FieldType.STRING })
  credit!: string;
  
  @Field({ type: FieldType.STRING })
  creditInCompanyCurrency!: string;
  
  @Field({ type: FieldType.STRING })
  reference!: string;
  
  @Field({ type: FieldType.STRING })
  referenceType!: string;
  
  @Field({ type: FieldType.STRING })
  referenceName!: string;
  
  @Field({ type: FieldType.STRING })
  referenceDueDate!: string;
  
  @Field({ type: FieldType.STRING })
  project!: string;
  
  @Field({ type: FieldType.STRING })
  isAdvance!: string;
  
  @Field({ type: FieldType.STRING })
  userRemark!: string;
  
  @Field({ type: FieldType.STRING })
  againstAccount!: string;
  
  
}

export interface IJournalEntryAccount {
  id: number;
  account: string;
  accountType: string;
  accountBalance: string;
  costCenter: string;
  partyType: string;
  party: string;
  partyBalance: string;
  currency: string;
  accountCurrency: string;
  exchangeRate: string;
  amount: string;
  debit: string;
  debitInCompanyCurrency: string;
  credit: string;
  creditInCompanyCurrency: string;
  reference: string;
  referenceType: string;
  referenceName: string;
  referenceDueDate: string;
  project: string;
  isAdvance: string;
  userRemark: string;
  againstAccount: string;
  
}
