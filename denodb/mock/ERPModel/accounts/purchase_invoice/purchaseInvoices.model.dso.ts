// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: PurchaseInvoice
|--------------------------------------------------------------------------
|
| Model Class and Interface of purchaseInvoices
|
*/
import {
  BaseModel,
  Field,
  FieldType,
  Model
} from "https://deno.land/x/dso@v1.0.0/mod.ts";

@Model("purchaseInvoices")
export class PurchaseInvoice extends BaseModel { 

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
  series!: string;
  
  @Field({ type: FieldType.STRING })
  supplier!: string;
  
  @Field({ type: FieldType.STRING })
  supplierName!: string;
  
  @Field({ type: FieldType.STRING })
  taxId!: string;
  
  @Field({ type: FieldType.STRING })
  dueDate!: string;
  
  @Field({ type: FieldType.STRING })
  isPaid!: string;
  
  @Field({ type: FieldType.STRING })
  isReturnDebitNote!: string;
  
  @Field({ type: FieldType.STRING })
  applyTaxWithholdingAmount!: string;
  
  @Field({ type: FieldType.STRING })
  company!: string;
  
  @Field({ type: FieldType.STRING })
  costCenter!: string;
  
  @Field({ type: FieldType.STRING })
  date!: string;
  
  @Field({ type: FieldType.STRING })
  postingTime!: string;
  
  @Field({ type: FieldType.STRING })
  editPostingDateAndTime!: string;
  
  @Field({ type: FieldType.STRING })
  amendedFrom!: string;
  
  @Field({ type: FieldType.STRING })
  holdInvoice!: string;
  
  @Field({ type: FieldType.STRING })
  releaseDate!: string;
  
  @Field({ type: FieldType.STRING })
  reasonForPuttingOnHold!: string;
  
  @Field({ type: FieldType.STRING })
  supplierInvoiceDetails!: string;
  
  @Field({ type: FieldType.STRING })
  supplierInvoiceNo!: string;
  
  @Field({ type: FieldType.STRING })
  supplierInvoiceDate!: string;
  
  @Field({ type: FieldType.STRING })
  returns!: string;
  
  @Field({ type: FieldType.STRING })
  returnAgainstPurchaseInvoice!: string;
  
  @Field({ type: FieldType.STRING })
  addressAndContact!: string;
  
  @Field({ type: FieldType.STRING })
  selectSupplierAddress!: string;
  
  @Field({ type: FieldType.STRING })
  address!: string;
  
  @Field({ type: FieldType.STRING })
  contactPerson!: string;
  
  @Field({ type: FieldType.STRING })
  contact!: string;
  
  @Field({ type: FieldType.STRING })
  mobileNo!: string;
  
  @Field({ type: FieldType.STRING })
  contactEmail!: string;
  
  @Field({ type: FieldType.STRING })
  selectShippingAddress!: string;
  
  @Field({ type: FieldType.STRING })
  shippingAddress!: string;
  
  @Field({ type: FieldType.STRING })
  currencyAndPriceList!: string;
  
  @Field({ type: FieldType.STRING })
  currency!: string;
  
  @Field({ type: FieldType.STRING })
  exchangeRate!: string;
  
  @Field({ type: FieldType.STRING })
  priceList!: string;
  
  @Field({ type: FieldType.STRING })
  priceListCurrency!: string;
  
  @Field({ type: FieldType.STRING })
  priceListExchangeRate!: string;
  
  @Field({ type: FieldType.STRING })
  ignorePricingRule!: string;
  
  @Field({ type: FieldType.STRING })
  setAcceptedWarehouse!: string;
  
  @Field({ type: FieldType.STRING })
  rejectedWarehouse!: string;
  
  @Field({ type: FieldType.STRING })
  supplierWarehouse!: string;
  
  @Field({ type: FieldType.STRING })
  updateStock!: string;
  
  @Field({ type: FieldType.STRING })
  scanBarcode!: string;
  
  @Field({ type: FieldType.STRING })
  items!: string;
  
  @Field({ type: FieldType.STRING })
  rawMaterialsSupplied!: string;
  
  @Field({ type: FieldType.STRING })
  suppliedItems!: string;
  
  @Field({ type: FieldType.STRING })
  totalQuantity!: string;
  
  @Field({ type: FieldType.STRING })
  totalCompanyCurrency!: string;
  
  @Field({ type: FieldType.STRING })
  netTotalCompanyCurrency!: string;
  
  @Field({ type: FieldType.STRING })
  total!: string;
  
  @Field({ type: FieldType.STRING })
  netTotal!: string;
  
  @Field({ type: FieldType.STRING })
  totalNetWeight!: string;
  
  @Field({ type: FieldType.STRING })
  taxCategory!: string;
  
  @Field({ type: FieldType.STRING })
  shippingRule!: string;
  
  @Field({ type: FieldType.STRING })
  purchaseTaxesAndChargesTemplate!: string;
  
  @Field({ type: FieldType.STRING })
  purchaseTaxesAndCharges!: string;
  
  @Field({ type: FieldType.STRING })
  taxBreakup!: string;
  
  @Field({ type: FieldType.STRING })
  taxesAndChargesCalculation!: string;
  
  @Field({ type: FieldType.STRING })
  taxesAndChargesAddedCompanyCurrency!: string;
  
  @Field({ type: FieldType.STRING })
  taxesAndChargesDeductedCompanyCurrency!: string;
  
  @Field({ type: FieldType.STRING })
  totalTaxesAndChargesCompanyCurrency!: string;
  
  @Field({ type: FieldType.STRING })
  taxesAndChargesAdded!: string;
  
  @Field({ type: FieldType.STRING })
  taxesAndChargesDeducted!: string;
  
  @Field({ type: FieldType.STRING })
  totalTaxesAndCharges!: string;
  
  @Field({ type: FieldType.STRING })
  additionalDiscount!: string;
  
  @Field({ type: FieldType.STRING })
  applyAdditionalDiscountOn!: string;
  
  @Field({ type: FieldType.STRING })
  additionalDiscountAmountCompanyCurrency!: string;
  
  @Field({ type: FieldType.STRING })
  additionalDiscountPercentage!: string;
  
  @Field({ type: FieldType.STRING })
  additionalDiscountAmount!: string;
  
  @Field({ type: FieldType.STRING })
  grandTotalCompanyCurrency!: string;
  
  @Field({ type: FieldType.STRING })
  roundingAdjustmentCompanyCurrency!: string;
  
  @Field({ type: FieldType.STRING })
  roundedTotalCompanyCurrency!: string;
  
  @Field({ type: FieldType.STRING })
  inWordsCompanyCurrency!: string;
  
  @Field({ type: FieldType.STRING })
  grandTotal!: string;
  
  @Field({ type: FieldType.STRING })
  roundingAdjustment!: string;
  
  @Field({ type: FieldType.STRING })
  roundedTotal!: string;
  
  @Field({ type: FieldType.STRING })
  inWords!: string;
  
  @Field({ type: FieldType.STRING })
  totalAdvance!: string;
  
  @Field({ type: FieldType.STRING })
  outstandingAmount!: string;
  
  @Field({ type: FieldType.STRING })
  disableRoundedTotal!: string;
  
  @Field({ type: FieldType.STRING })
  payments!: string;
  
  @Field({ type: FieldType.STRING })
  modeOfPayment!: string;
  
  @Field({ type: FieldType.STRING })
  cashBankAccount!: string;
  
  @Field({ type: FieldType.STRING })
  paidAmount!: string;
  
  @Field({ type: FieldType.STRING })
  paidAmountCompanyCurrency!: string;
  
  @Field({ type: FieldType.STRING })
  writeOff!: string;
  
  @Field({ type: FieldType.STRING })
  writeOffAmount!: string;
  
  @Field({ type: FieldType.STRING })
  writeOffAmountCompanyCurrency!: string;
  
  @Field({ type: FieldType.STRING })
  writeOffAccount!: string;
  
  @Field({ type: FieldType.STRING })
  writeOffCostCenter!: string;
  
  @Field({ type: FieldType.STRING })
  advancePayments!: string;
  
  @Field({ type: FieldType.STRING })
  setAdvancesAndAllocateFifo!: string;
  
  @Field({ type: FieldType.STRING })
  getAdvancesPaid!: string;
  
  @Field({ type: FieldType.STRING })
  advances!: string;
  
  @Field({ type: FieldType.STRING })
  paymentTerms!: string;
  
  @Field({ type: FieldType.STRING })
  paymentTermsTemplate!: string;
  
  @Field({ type: FieldType.STRING })
  paymentSchedule!: string;
  
  @Field({ type: FieldType.STRING })
  termsAndConditions!: string;
  
  @Field({ type: FieldType.STRING })
  terms!: string;
  
  @Field({ type: FieldType.STRING })
  termsAndConditions1!: string;
  
  @Field({ type: FieldType.STRING })
  printingSettings!: string;
  
  @Field({ type: FieldType.STRING })
  letterHead!: string;
  
  @Field({ type: FieldType.STRING })
  groupSameItems!: string;
  
  @Field({ type: FieldType.STRING })
  printHeading!: string;
  
  @Field({ type: FieldType.STRING })
  printLanguage!: string;
  
  @Field({ type: FieldType.STRING })
  moreInformation!: string;
  
  @Field({ type: FieldType.STRING })
  creditTo!: string;
  
  @Field({ type: FieldType.STRING })
  partyAccountCurrency!: string;
  
  @Field({ type: FieldType.STRING })
  isOpening!: string;
  
  @Field({ type: FieldType.STRING })
  againstExpenseAccount!: string;
  
  @Field({ type: FieldType.STRING })
  status!: string;
  
  @Field({ type: FieldType.STRING })
  interCompanyInvoiceReference!: string;
  
  @Field({ type: FieldType.STRING })
  remarks!: string;
  
  @Field({ type: FieldType.STRING })
  subscriptionSection!: string;
  
  @Field({ type: FieldType.STRING })
  fromDate!: string;
  
  @Field({ type: FieldType.STRING })
  toDate!: string;
  
  @Field({ type: FieldType.STRING })
  autoRepeat!: string;
  
  @Field({ type: FieldType.STRING })
  updateAutoRepeatReference!: string;
  
  
}

export interface IPurchaseInvoice {
  id: number;
  title: string;
  series: string;
  supplier: string;
  supplierName: string;
  taxId: string;
  dueDate: string;
  isPaid: string;
  isReturnDebitNote: string;
  applyTaxWithholdingAmount: string;
  company: string;
  costCenter: string;
  date: string;
  postingTime: string;
  editPostingDateAndTime: string;
  amendedFrom: string;
  holdInvoice: string;
  releaseDate: string;
  reasonForPuttingOnHold: string;
  supplierInvoiceDetails: string;
  supplierInvoiceNo: string;
  supplierInvoiceDate: string;
  returns: string;
  returnAgainstPurchaseInvoice: string;
  addressAndContact: string;
  selectSupplierAddress: string;
  address: string;
  contactPerson: string;
  contact: string;
  mobileNo: string;
  contactEmail: string;
  selectShippingAddress: string;
  shippingAddress: string;
  currencyAndPriceList: string;
  currency: string;
  exchangeRate: string;
  priceList: string;
  priceListCurrency: string;
  priceListExchangeRate: string;
  ignorePricingRule: string;
  setAcceptedWarehouse: string;
  rejectedWarehouse: string;
  supplierWarehouse: string;
  updateStock: string;
  scanBarcode: string;
  items: string;
  rawMaterialsSupplied: string;
  suppliedItems: string;
  totalQuantity: string;
  totalCompanyCurrency: string;
  netTotalCompanyCurrency: string;
  total: string;
  netTotal: string;
  totalNetWeight: string;
  taxCategory: string;
  shippingRule: string;
  purchaseTaxesAndChargesTemplate: string;
  purchaseTaxesAndCharges: string;
  taxBreakup: string;
  taxesAndChargesCalculation: string;
  taxesAndChargesAddedCompanyCurrency: string;
  taxesAndChargesDeductedCompanyCurrency: string;
  totalTaxesAndChargesCompanyCurrency: string;
  taxesAndChargesAdded: string;
  taxesAndChargesDeducted: string;
  totalTaxesAndCharges: string;
  additionalDiscount: string;
  applyAdditionalDiscountOn: string;
  additionalDiscountAmountCompanyCurrency: string;
  additionalDiscountPercentage: string;
  additionalDiscountAmount: string;
  grandTotalCompanyCurrency: string;
  roundingAdjustmentCompanyCurrency: string;
  roundedTotalCompanyCurrency: string;
  inWordsCompanyCurrency: string;
  grandTotal: string;
  roundingAdjustment: string;
  roundedTotal: string;
  inWords: string;
  totalAdvance: string;
  outstandingAmount: string;
  disableRoundedTotal: string;
  payments: string;
  modeOfPayment: string;
  cashBankAccount: string;
  paidAmount: string;
  paidAmountCompanyCurrency: string;
  writeOff: string;
  writeOffAmount: string;
  writeOffAmountCompanyCurrency: string;
  writeOffAccount: string;
  writeOffCostCenter: string;
  advancePayments: string;
  setAdvancesAndAllocateFifo: string;
  getAdvancesPaid: string;
  advances: string;
  paymentTerms: string;
  paymentTermsTemplate: string;
  paymentSchedule: string;
  termsAndConditions: string;
  terms: string;
  termsAndConditions1: string;
  printingSettings: string;
  letterHead: string;
  groupSameItems: string;
  printHeading: string;
  printLanguage: string;
  moreInformation: string;
  creditTo: string;
  partyAccountCurrency: string;
  isOpening: string;
  againstExpenseAccount: string;
  status: string;
  interCompanyInvoiceReference: string;
  remarks: string;
  subscriptionSection: string;
  fromDate: string;
  toDate: string;
  autoRepeat: string;
  updateAutoRepeatReference: string;
  
}
