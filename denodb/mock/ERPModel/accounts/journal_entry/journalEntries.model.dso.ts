// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: JournalEntry
|--------------------------------------------------------------------------
|
| Model Class and Interface of journalEntries
|
*/
import {
  BaseModel,
  Field,
  FieldType,
  Model
} from "https://deno.land/x/dso@v1.0.0/mod.ts";

@Model("journalEntries")
export class JournalEntry extends BaseModel { 

  @Field({
    type: FieldType.INT,
    primary: true,
    length: 11,
    autoIncrement: true
  })
  id!: number;

  @Field({ type: FieldType.STRING })
  title!: string;
  
  @Field({ type: FieldType.STRING })
  entryType!: string;
  
  @Field({ type: FieldType.STRING })
  series!: string;
  
  @Field({ type: FieldType.STRING })
  postingDate!: string;
  
  @Field({ type: FieldType.STRING })
  company!: string;
  
  @Field({ type: FieldType.STRING })
  financeBook!: string;
  
  @Field({ type: FieldType.STRING })
  accountingEntries!: string;
  
  @Field({ type: FieldType.STRING })
  referenceNumber!: string;
  
  @Field({ type: FieldType.STRING })
  referenceDate!: string;
  
  @Field({ type: FieldType.STRING })
  userRemark!: string;
  
  @Field({ type: FieldType.STRING })
  totalDebit!: string;
  
  @Field({ type: FieldType.STRING })
  totalCredit!: string;
  
  @Field({ type: FieldType.STRING })
  differenceDrCr!: string;
  
  @Field({ type: FieldType.STRING })
  makeDifferenceEntry!: string;
  
  @Field({ type: FieldType.STRING })
  multiCurrency!: string;
  
  @Field({ type: FieldType.STRING })
  totalAmountCurrency!: string;
  
  @Field({ type: FieldType.STRING })
  totalAmount!: string;
  
  @Field({ type: FieldType.STRING })
  totalAmountInWords!: string;
  
  @Field({ type: FieldType.STRING })
  reference!: string;
  
  @Field({ type: FieldType.STRING })
  clearanceDate!: string;
  
  @Field({ type: FieldType.STRING })
  remark!: string;
  
  @Field({ type: FieldType.STRING })
  paidLoan!: string;
  
  @Field({ type: FieldType.STRING })
  interCompanyJournalEntryReference!: string;
  
  @Field({ type: FieldType.STRING })
  billNo!: string;
  
  @Field({ type: FieldType.STRING })
  billDate!: string;
  
  @Field({ type: FieldType.STRING })
  dueDate!: string;
  
  @Field({ type: FieldType.STRING })
  writeOff!: string;
  
  @Field({ type: FieldType.STRING })
  writeOffBasedOn!: string;
  
  @Field({ type: FieldType.STRING })
  getOutstandingInvoices!: string;
  
  @Field({ type: FieldType.STRING })
  writeOffAmount!: string;
  
  @Field({ type: FieldType.STRING })
  printingSettings!: string;
  
  @Field({ type: FieldType.STRING })
  payToRecdFrom!: string;
  
  @Field({ type: FieldType.STRING })
  letterHead!: string;
  
  @Field({ type: FieldType.STRING })
  printHeading!: string;
  
  @Field({ type: FieldType.STRING })
  moreInformation!: string;
  
  @Field({ type: FieldType.STRING })
  modeOfPayment!: string;
  
  @Field({ type: FieldType.STRING })
  paymentOrder!: string;
  
  @Field({ type: FieldType.STRING })
  isOpening!: string;
  
  @Field({ type: FieldType.STRING })
  stockEntry!: string;
  
  @Field({ type: FieldType.STRING })
  subscriptionSection!: string;
  
  @Field({ type: FieldType.STRING })
  autoRepeat!: string;
  
  @Field({ type: FieldType.STRING })
  amendedFrom!: string;
  
  
}

export interface IJournalEntry {
  id: number;
  title: string;
  entryType: string;
  series: string;
  postingDate: string;
  company: string;
  financeBook: string;
  accountingEntries: string;
  referenceNumber: string;
  referenceDate: string;
  userRemark: string;
  totalDebit: string;
  totalCredit: string;
  differenceDrCr: string;
  makeDifferenceEntry: string;
  multiCurrency: string;
  totalAmountCurrency: string;
  totalAmount: string;
  totalAmountInWords: string;
  reference: string;
  clearanceDate: string;
  remark: string;
  paidLoan: string;
  interCompanyJournalEntryReference: string;
  billNo: string;
  billDate: string;
  dueDate: string;
  writeOff: string;
  writeOffBasedOn: string;
  getOutstandingInvoices: string;
  writeOffAmount: string;
  printingSettings: string;
  payToRecdFrom: string;
  letterHead: string;
  printHeading: string;
  moreInformation: string;
  modeOfPayment: string;
  paymentOrder: string;
  isOpening: string;
  stockEntry: string;
  subscriptionSection: string;
  autoRepeat: string;
  amendedFrom: string;
  
}
