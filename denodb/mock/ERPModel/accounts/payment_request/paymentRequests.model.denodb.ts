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
  DataTypes,
  Model
} from "https://deno.land/x/denodb/mod.ts";


export class PaymentRequest extends Model { 
  static table = "paymentRequests";
  static timestamps = true;
  
  static fields = {
    // fields list for ORM Maping
    id: { primaryKey: true, autoIncrement: true },
    paymentRequestType: DataTypes.STRING,
    transactionDate: DataTypes.STRING,
    series: DataTypes.STRING,
    modeOfPayment: DataTypes.STRING,
    partyDetails: DataTypes.STRING,
    partyType: DataTypes.STRING,
    party: DataTypes.STRING,
    referenceDoctype: DataTypes.STRING,
    referenceName: DataTypes.STRING,
    transactionDetails: DataTypes.STRING,
    amount: DataTypes.STRING,
    isASubscription: DataTypes.STRING,
    transactionCurrency: DataTypes.STRING,
    subscriptionSection: DataTypes.STRING,
    subscriptionPlans: DataTypes.STRING,
    bankAccountDetails: DataTypes.STRING,
    bankAccount: DataTypes.STRING,
    bank: DataTypes.STRING,
    bankAccountNo: DataTypes.STRING,
    account: DataTypes.STRING,
    iban: DataTypes.STRING,
    branchCode: DataTypes.STRING,
    swiftNumber: DataTypes.STRING,
    recipientMessageAndPaymentDetails: DataTypes.STRING,
    printFormat: DataTypes.STRING,
    to: DataTypes.STRING,
    subject: DataTypes.STRING,
    paymentGatewayAccount: DataTypes.STRING,
    status: DataTypes.STRING,
    makeSalesInvoice: DataTypes.STRING,
    message: DataTypes.STRING,
    messageExamples: DataTypes.STRING,
    muteEmail: DataTypes.STRING,
    paymentUrl: DataTypes.STRING,
    paymentGatewayDetails: DataTypes.STRING,
    paymentGateway: DataTypes.STRING,
    paymentAccount: DataTypes.STRING,
    paymentOrder: DataTypes.STRING,
    amendedFrom: DataTypes.STRING,
    
  };

}
