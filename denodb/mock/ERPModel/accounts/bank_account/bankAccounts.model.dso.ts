// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: BankAccount
|--------------------------------------------------------------------------
|
| Model Class and Interface of bankAccounts
|
*/
import {
  BaseModel,
  Field,
  FieldType,
  Model
} from "https://deno.land/x/dso@v1.0.0/mod.ts";

@Model("bankAccounts")
export class BankAccount extends BaseModel { 

  @Field({
    type: FieldType.INT,
    primary: true,
    length: 11,
    autoIncrement: true
  })
  id!: number;

  @Field({ type: FieldType.STRING })
  accountName!: string;
  
  @Field({ type: FieldType.STRING })
  account!: string;
  
  @Field({ type: FieldType.STRING })
  bank!: string;
  
  @Field({ type: FieldType.STRING })
  isCompanyAccount!: string;
  
  @Field({ type: FieldType.STRING })
  company!: string;
  
  @Field({ type: FieldType.STRING })
  isDefault!: string;
  
  @Field({ type: FieldType.STRING })
  bankAccountNo!: string;
  
  @Field({ type: FieldType.STRING })
  iban!: string;
  
  @Field({ type: FieldType.STRING })
  branchCode!: string;
  
  @Field({ type: FieldType.STRING })
  swiftNumber!: string;
  
  @Field({ type: FieldType.STRING })
  partyType!: string;
  
  @Field({ type: FieldType.STRING })
  party!: string;
  
  @Field({ type: FieldType.STRING })
  addressAndContact!: string;
  
  @Field({ type: FieldType.STRING })
  addressHtml!: string;
  
  @Field({ type: FieldType.STRING })
  website!: string;
  
  @Field({ type: FieldType.STRING })
  contactHtml!: string;
  
  
}

export interface IBankAccount {
  id: number;
  accountName: string;
  account: string;
  bank: string;
  isCompanyAccount: string;
  company: string;
  isDefault: string;
  bankAccountNo: string;
  iban: string;
  branchCode: string;
  swiftNumber: string;
  partyType: string;
  party: string;
  addressAndContact: string;
  addressHtml: string;
  website: string;
  contactHtml: string;
  
}
