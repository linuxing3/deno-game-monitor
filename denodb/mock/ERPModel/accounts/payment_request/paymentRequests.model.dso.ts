// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: PaymentRequest
|--------------------------------------------------------------------------
|
| Model Class and Interface of paymentRequests
|
*/
import {
  BaseModel,
  Field,
  FieldType,
  Model
} from "https://deno.land/x/dso@v1.0.0/mod.ts";

@Model("paymentRequests")
export class PaymentRequest extends BaseModel { 

  @Field({
    type: FieldType.INT,
    primary: true,
    length: 11,
    autoIncrement: true
  })
  id!: number;

  @Field({ type: FieldType.STRING })
  paymentRequestType!: string;
  
  @Field({ type: FieldType.STRING })
  transactionDate!: string;
  
  @Field({ type: FieldType.STRING })
  series!: string;
  
  @Field({ type: FieldType.STRING })
  modeOfPayment!: string;
  
  @Field({ type: FieldType.STRING })
  partyDetails!: string;
  
  @Field({ type: FieldType.STRING })
  partyType!: string;
  
  @Field({ type: FieldType.STRING })
  party!: string;
  
  @Field({ type: FieldType.STRING })
  referenceDoctype!: string;
  
  @Field({ type: FieldType.STRING })
  referenceName!: string;
  
  @Field({ type: FieldType.STRING })
  transactionDetails!: string;
  
  @Field({ type: FieldType.STRING })
  amount!: string;
  
  @Field({ type: FieldType.STRING })
  isASubscription!: string;
  
  @Field({ type: FieldType.STRING })
  transactionCurrency!: string;
  
  @Field({ type: FieldType.STRING })
  subscriptionSection!: string;
  
  @Field({ type: FieldType.STRING })
  subscriptionPlans!: string;
  
  @Field({ type: FieldType.STRING })
  bankAccountDetails!: string;
  
  @Field({ type: FieldType.STRING })
  bankAccount!: string;
  
  @Field({ type: FieldType.STRING })
  bank!: string;
  
  @Field({ type: FieldType.STRING })
  bankAccountNo!: string;
  
  @Field({ type: FieldType.STRING })
  account!: string;
  
  @Field({ type: FieldType.STRING })
  iban!: string;
  
  @Field({ type: FieldType.STRING })
  branchCode!: string;
  
  @Field({ type: FieldType.STRING })
  swiftNumber!: string;
  
  @Field({ type: FieldType.STRING })
  recipientMessageAndPaymentDetails!: string;
  
  @Field({ type: FieldType.STRING })
  printFormat!: string;
  
  @Field({ type: FieldType.STRING })
  to!: string;
  
  @Field({ type: FieldType.STRING })
  subject!: string;
  
  @Field({ type: FieldType.STRING })
  paymentGatewayAccount!: string;
  
  @Field({ type: FieldType.STRING })
  status!: string;
  
  @Field({ type: FieldType.STRING })
  makeSalesInvoice!: string;
  
  @Field({ type: FieldType.STRING })
  message!: string;
  
  @Field({ type: FieldType.STRING })
  messageExamples!: string;
  
  @Field({ type: FieldType.STRING })
  muteEmail!: string;
  
  @Field({ type: FieldType.STRING })
  paymentUrl!: string;
  
  @Field({ type: FieldType.STRING })
  paymentGatewayDetails!: string;
  
  @Field({ type: FieldType.STRING })
  paymentGateway!: string;
  
  @Field({ type: FieldType.STRING })
  paymentAccount!: string;
  
  @Field({ type: FieldType.STRING })
  paymentOrder!: string;
  
  @Field({ type: FieldType.STRING })
  amendedFrom!: string;
  
  
}

export interface IPaymentRequest {
  id: number;
  paymentRequestType: string;
  transactionDate: string;
  series: string;
  modeOfPayment: string;
  partyDetails: string;
  partyType: string;
  party: string;
  referenceDoctype: string;
  referenceName: string;
  transactionDetails: string;
  amount: string;
  isASubscription: string;
  transactionCurrency: string;
  subscriptionSection: string;
  subscriptionPlans: string;
  bankAccountDetails: string;
  bankAccount: string;
  bank: string;
  bankAccountNo: string;
  account: string;
  iban: string;
  branchCode: string;
  swiftNumber: string;
  recipientMessageAndPaymentDetails: string;
  printFormat: string;
  to: string;
  subject: string;
  paymentGatewayAccount: string;
  status: string;
  makeSalesInvoice: string;
  message: string;
  messageExamples: string;
  muteEmail: string;
  paymentUrl: string;
  paymentGatewayDetails: string;
  paymentGateway: string;
  paymentAccount: string;
  paymentOrder: string;
  amendedFrom: string;
  
}
