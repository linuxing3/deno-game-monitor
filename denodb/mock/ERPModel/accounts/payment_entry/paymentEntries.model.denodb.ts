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
  DataTypes,
  Model
} from "https://deno.land/x/denodb/mod.ts";


export class PaymentEntry extends Model { 
  static table = "paymentEntries";
  static timestamps = true;
  
  static fields = {
    // fields list for ORM Maping
    id: { primaryKey: true, autoIncrement: true },
    typeOfPayment: DataTypes.STRING,
    series: DataTypes.STRING,
    paymentType: DataTypes.STRING,
    postingDate: DataTypes.STRING,
    company: DataTypes.STRING,
    costCenter: DataTypes.STRING,
    modeOfPayment: DataTypes.STRING,
    paymentFromTo: DataTypes.STRING,
    partyType: DataTypes.STRING,
    party: DataTypes.STRING,
    partyName: DataTypes.STRING,
    bankAccount: DataTypes.STRING,
    email: DataTypes.STRING,
    contact: DataTypes.STRING,
    accounts: DataTypes.STRING,
    partyBalance: DataTypes.STRING,
    accountPaidFrom: DataTypes.STRING,
    accountCurrency: DataTypes.STRING,
    accountBalance: DataTypes.STRING,
    accountPaidTo: DataTypes.STRING,
    amount: DataTypes.STRING,
    paidAmount: DataTypes.STRING,
    paidAmountCompanyCurrency: DataTypes.STRING,
    receivedAmount: DataTypes.STRING,
    exchangeRate: DataTypes.STRING,
    receivedAmountCompanyCurrency: DataTypes.STRING,
    reference: DataTypes.STRING,
    allocatePaymentAmount: DataTypes.STRING,
    paymentReferences: DataTypes.STRING,
    writeoff: DataTypes.STRING,
    totalAllocatedAmount: DataTypes.STRING,
    totalAllocatedAmountCompanyCurrency: DataTypes.STRING,
    setExchangeGainLoss: DataTypes.STRING,
    unallocatedAmount: DataTypes.STRING,
    differenceAmountCompanyCurrency: DataTypes.STRING,
    writeOffDifferenceAmount: DataTypes.STRING,
    deductionsOrLoss: DataTypes.STRING,
    paymentDeductionsOrLoss: DataTypes.STRING,
    transactionId: DataTypes.STRING,
    chequeReferenceNo: DataTypes.STRING,
    chequeReferenceDate: DataTypes.STRING,
    clearanceDate: DataTypes.STRING,
    moreInformation: DataTypes.STRING,
    project: DataTypes.STRING,
    remarks: DataTypes.STRING,
    letterHead: DataTypes.STRING,
    printHeading: DataTypes.STRING,
    bank: DataTypes.STRING,
    bankAccountNo: DataTypes.STRING,
    paymentOrder: DataTypes.STRING,
    subscriptionSection: DataTypes.STRING,
    autoRepeat: DataTypes.STRING,
    amendedFrom: DataTypes.STRING,
    title: DataTypes.STRING,
    
  };

}
