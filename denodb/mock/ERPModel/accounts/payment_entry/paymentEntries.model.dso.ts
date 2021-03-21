// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: PaymentEntry
|--------------------------------------------------------------------------
|
| Model Class and Interface of paymentEntries
|
*/
import {
  BaseModel,
  Field,
  FieldType,
  Model
} from "https://deno.land/x/dso@v1.0.0/mod.ts";

@Model("paymentEntries")
export class PaymentEntry extends BaseModel { 

  @Field({
    type: FieldType.INT,
    primary: true,
    length: 11,
    autoIncrement: true
  })
  id!: number;

  @Field({ type: FieldType.STRING })
  typeOfPayment!: string;
  
  @Field({ type: FieldType.STRING })
  series!: string;
  
  @Field({ type: FieldType.STRING })
  paymentType!: string;
  
  @Field({ type: FieldType.STRING })
  postingDate!: string;
  
  @Field({ type: FieldType.STRING })
  company!: string;
  
  @Field({ type: FieldType.STRING })
  costCenter!: string;
  
  @Field({ type: FieldType.STRING })
  modeOfPayment!: string;
  
  @Field({ type: FieldType.STRING })
  paymentFromTo!: string;
  
  @Field({ type: FieldType.STRING })
  partyType!: string;
  
  @Field({ type: FieldType.STRING })
  party!: string;
  
  @Field({ type: FieldType.STRING })
  partyName!: string;
  
  @Field({ type: FieldType.STRING })
  bankAccount!: string;
  
  @Field({ type: FieldType.STRING })
  email!: string;
  
  @Field({ type: FieldType.STRING })
  contact!: string;
  
  @Field({ type: FieldType.STRING })
  accounts!: string;
  
  @Field({ type: FieldType.STRING })
  partyBalance!: string;
  
  @Field({ type: FieldType.STRING })
  accountPaidFrom!: string;
  
  @Field({ type: FieldType.STRING })
  accountCurrency!: string;
  
  @Field({ type: FieldType.STRING })
  accountBalance!: string;
  
  @Field({ type: FieldType.STRING })
  accountPaidTo!: string;
  
  @Field({ type: FieldType.STRING })
  amount!: string;
  
  @Field({ type: FieldType.STRING })
  paidAmount!: string;
  
  @Field({ type: FieldType.STRING })
  paidAmountCompanyCurrency!: string;
  
  @Field({ type: FieldType.STRING })
  receivedAmount!: string;
  
  @Field({ type: FieldType.STRING })
  exchangeRate!: string;
  
  @Field({ type: FieldType.STRING })
  receivedAmountCompanyCurrency!: string;
  
  @Field({ type: FieldType.STRING })
  reference!: string;
  
  @Field({ type: FieldType.STRING })
  allocatePaymentAmount!: string;
  
  @Field({ type: FieldType.STRING })
  paymentReferences!: string;
  
  @Field({ type: FieldType.STRING })
  writeoff!: string;
  
  @Field({ type: FieldType.STRING })
  totalAllocatedAmount!: string;
  
  @Field({ type: FieldType.STRING })
  totalAllocatedAmountCompanyCurrency!: string;
  
  @Field({ type: FieldType.STRING })
  setExchangeGainLoss!: string;
  
  @Field({ type: FieldType.STRING })
  unallocatedAmount!: string;
  
  @Field({ type: FieldType.STRING })
  differenceAmountCompanyCurrency!: string;
  
  @Field({ type: FieldType.STRING })
  writeOffDifferenceAmount!: string;
  
  @Field({ type: FieldType.STRING })
  deductionsOrLoss!: string;
  
  @Field({ type: FieldType.STRING })
  paymentDeductionsOrLoss!: string;
  
  @Field({ type: FieldType.STRING })
  transactionId!: string;
  
  @Field({ type: FieldType.STRING })
  chequeReferenceNo!: string;
  
  @Field({ type: FieldType.STRING })
  chequeReferenceDate!: string;
  
  @Field({ type: FieldType.STRING })
  clearanceDate!: string;
  
  @Field({ type: FieldType.STRING })
  moreInformation!: string;
  
  @Field({ type: FieldType.STRING })
  project!: string;
  
  @Field({ type: FieldType.STRING })
  remarks!: string;
  
  @Field({ type: FieldType.STRING })
  letterHead!: string;
  
  @Field({ type: FieldType.STRING })
  printHeading!: string;
  
  @Field({ type: FieldType.STRING })
  bank!: string;
  
  @Field({ type: FieldType.STRING })
  bankAccountNo!: string;
  
  @Field({ type: FieldType.STRING })
  paymentOrder!: string;
  
  @Field({ type: FieldType.STRING })
  subscriptionSection!: string;
  
  @Field({ type: FieldType.STRING })
  autoRepeat!: string;
  
  @Field({ type: FieldType.STRING })
  amendedFrom!: string;
  
  @Field({ type: FieldType.STRING })
  title!: string;
  
  
}

export interface IPaymentEntry {
  id: number;
  typeOfPayment: string;
  series: string;
  paymentType: string;
  postingDate: string;
  company: string;
  costCenter: string;
  modeOfPayment: string;
  paymentFromTo: string;
  partyType: string;
  party: string;
  partyName: string;
  bankAccount: string;
  email: string;
  contact: string;
  accounts: string;
  partyBalance: string;
  accountPaidFrom: string;
  accountCurrency: string;
  accountBalance: string;
  accountPaidTo: string;
  amount: string;
  paidAmount: string;
  paidAmountCompanyCurrency: string;
  receivedAmount: string;
  exchangeRate: string;
  receivedAmountCompanyCurrency: string;
  reference: string;
  allocatePaymentAmount: string;
  paymentReferences: string;
  writeoff: string;
  totalAllocatedAmount: string;
  totalAllocatedAmountCompanyCurrency: string;
  setExchangeGainLoss: string;
  unallocatedAmount: string;
  differenceAmountCompanyCurrency: string;
  writeOffDifferenceAmount: string;
  deductionsOrLoss: string;
  paymentDeductionsOrLoss: string;
  transactionId: string;
  chequeReferenceNo: string;
  chequeReferenceDate: string;
  clearanceDate: string;
  moreInformation: string;
  project: string;
  remarks: string;
  letterHead: string;
  printHeading: string;
  bank: string;
  bankAccountNo: string;
  paymentOrder: string;
  subscriptionSection: string;
  autoRepeat: string;
  amendedFrom: string;
  title: string;
  
}
