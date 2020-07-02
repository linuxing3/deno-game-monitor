// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: BankGuarantee
|--------------------------------------------------------------------------
|
| Model Class and Interface of bankGuarantees
|
*/
import {
  BaseModel,
  Field,
  FieldType,
  Model
} from "https://deno.land/x/dso@v1.0.0/mod.ts";

@Model("bankGuarantees")
export class BankGuarantee extends BaseModel { 

  @Field({
    type: FieldType.INT,
    primary: true,
    length: 11,
    autoIncrement: true
  })
  id!: number;

  @Field({ type: FieldType.STRING })
  bankGuaranteeType!: string;
  
  @Field({ type: FieldType.STRING })
  referenceDocumentType!: string;
  
  @Field({ type: FieldType.STRING })
  referenceDocumentName!: string;
  
  @Field({ type: FieldType.STRING })
  customer!: string;
  
  @Field({ type: FieldType.STRING })
  supplier!: string;
  
  @Field({ type: FieldType.STRING })
  project!: string;
  
  @Field({ type: FieldType.STRING })
  amount!: string;
  
  @Field({ type: FieldType.STRING })
  startDate!: string;
  
  @Field({ type: FieldType.STRING })
  validityInDays!: string;
  
  @Field({ type: FieldType.STRING })
  endDate!: string;
  
  @Field({ type: FieldType.STRING })
  bankAccountInfo!: string;
  
  @Field({ type: FieldType.STRING })
  bank!: string;
  
  @Field({ type: FieldType.STRING })
  bankAccount!: string;
  
  @Field({ type: FieldType.STRING })
  account!: string;
  
  @Field({ type: FieldType.STRING })
  bankAccountNo!: string;
  
  @Field({ type: FieldType.STRING })
  iban!: string;
  
  @Field({ type: FieldType.STRING })
  branchCode!: string;
  
  @Field({ type: FieldType.STRING })
  swiftNumber!: string;
  
  @Field({ type: FieldType.STRING })
  clausesAndConditions!: string;
  
  @Field({ type: FieldType.STRING })
  otherDetails!: string;
  
  @Field({ type: FieldType.STRING })
  bankGuaranteeNumber!: string;
  
  @Field({ type: FieldType.STRING })
  nameOfBeneficiary!: string;
  
  @Field({ type: FieldType.STRING })
  marginMoney!: string;
  
  @Field({ type: FieldType.STRING })
  chargesIncurred!: string;
  
  @Field({ type: FieldType.STRING })
  fixedDepositNumber!: string;
  
  @Field({ type: FieldType.STRING })
  amendedFrom!: string;
  
  
}

export interface IBankGuarantee {
  id: number;
  bankGuaranteeType: string;
  referenceDocumentType: string;
  referenceDocumentName: string;
  customer: string;
  supplier: string;
  project: string;
  amount: string;
  startDate: string;
  validityInDays: string;
  endDate: string;
  bankAccountInfo: string;
  bank: string;
  bankAccount: string;
  account: string;
  bankAccountNo: string;
  iban: string;
  branchCode: string;
  swiftNumber: string;
  clausesAndConditions: string;
  otherDetails: string;
  bankGuaranteeNumber: string;
  nameOfBeneficiary: string;
  marginMoney: string;
  chargesIncurred: string;
  fixedDepositNumber: string;
  amendedFrom: string;
  
}
