// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: SalesInvoice
|--------------------------------------------------------------------------
|
| Model Class and Interface of salesInvoices
|
*/
import {
  BaseModel,
  Field,
  FieldType,
  Model
} from "https://deno.land/x/dso@v1.0.0/mod.ts";

@Model("salesInvoices")
export class SalesInvoice extends BaseModel { 

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
  customer!: string;
  
  @Field({ type: FieldType.STRING })
  customerName!: string;
  
  @Field({ type: FieldType.STRING })
  taxId!: string;
  
  @Field({ type: FieldType.STRING })
  project!: string;
  
  @Field({ type: FieldType.STRING })
  includePaymentPos!: string;
  
  @Field({ type: FieldType.STRING })
  posProfile!: string;
  
  @Field({ type: FieldType.STRING })
  offlinePosName!: string;
  
  @Field({ type: FieldType.STRING })
  isReturnCreditNote!: string;
  
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
  paymentDueDate!: string;
  
  @Field({ type: FieldType.STRING })
  amendedFrom!: string;
  
  @Field({ type: FieldType.STRING })
  returns!: string;
  
  @Field({ type: FieldType.STRING })
  returnAgainstSalesInvoice!: string;
  
  @Field({ type: FieldType.STRING })
  updateBilledAmountInSalesOrder!: string;
  
  @Field({ type: FieldType.STRING })
  customerPoDetails!: string;
  
  @Field({ type: FieldType.STRING })
  customerSPurchaseOrder!: string;
  
  @Field({ type: FieldType.STRING })
  customerSPurchaseOrderDate!: string;
  
  @Field({ type: FieldType.STRING })
  addressAndContact!: string;
  
  @Field({ type: FieldType.STRING })
  customerAddress!: string;
  
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
  territory!: string;
  
  @Field({ type: FieldType.STRING })
  shippingAddressName!: string;
  
  @Field({ type: FieldType.STRING })
  shippingAddress!: string;
  
  @Field({ type: FieldType.STRING })
  companyAddressName!: string;
  
  @Field({ type: FieldType.STRING })
  companyAddress!: string;
  
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
  setSourceWarehouse!: string;
  
  @Field({ type: FieldType.STRING })
  updateStock!: string;
  
  @Field({ type: FieldType.STRING })
  scanBarcode!: string;
  
  @Field({ type: FieldType.STRING })
  items!: string;
  
  @Field({ type: FieldType.STRING })
  packingList!: string;
  
  @Field({ type: FieldType.STRING })
  packedItems!: string;
  
  @Field({ type: FieldType.STRING })
  productBundleHelp!: string;
  
  @Field({ type: FieldType.STRING })
  timeSheetList!: string;
  
  @Field({ type: FieldType.STRING })
  timeSheets!: string;
  
  @Field({ type: FieldType.STRING })
  totalBillingAmount!: string;
  
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
  salesTaxesAndChargesTemplate!: string;
  
  @Field({ type: FieldType.STRING })
  salesTaxesAndCharges!: string;
  
  @Field({ type: FieldType.STRING })
  taxBreakup!: string;
  
  @Field({ type: FieldType.STRING })
  taxesAndChargesCalculation!: string;
  
  @Field({ type: FieldType.STRING })
  totalTaxesAndChargesCompanyCurrency!: string;
  
  @Field({ type: FieldType.STRING })
  totalTaxesAndCharges!: string;
  
  @Field({ type: FieldType.STRING })
  loyaltyPointsRedemption!: string;
  
  @Field({ type: FieldType.STRING })
  loyaltyPoints!: string;
  
  @Field({ type: FieldType.STRING })
  loyaltyAmount!: string;
  
  @Field({ type: FieldType.STRING })
  redeemLoyaltyPoints!: string;
  
  @Field({ type: FieldType.STRING })
  loyaltyProgram!: string;
  
  @Field({ type: FieldType.STRING })
  redemptionAccount!: string;
  
  @Field({ type: FieldType.STRING })
  redemptionCostCenter!: string;
  
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
  advancePayments!: string;
  
  @Field({ type: FieldType.STRING })
  allocateAdvancesAutomaticallyFifo!: string;
  
  @Field({ type: FieldType.STRING })
  getAdvancesReceived!: string;
  
  @Field({ type: FieldType.STRING })
  advances!: string;
  
  @Field({ type: FieldType.STRING })
  paymentTerms!: string;
  
  @Field({ type: FieldType.STRING })
  paymentTermsTemplate!: string;
  
  @Field({ type: FieldType.STRING })
  paymentSchedule!: string;
  
  @Field({ type: FieldType.STRING })
  payments!: string;
  
  @Field({ type: FieldType.STRING })
  cashBankAccount!: string;
  
  @Field({ type: FieldType.STRING })
  salesInvoicePayment!: string;
  
  @Field({ type: FieldType.STRING })
  paidAmountCompanyCurrency!: string;
  
  @Field({ type: FieldType.STRING })
  paidAmount!: string;
  
  @Field({ type: FieldType.STRING })
  baseChangeAmountCompanyCurrency!: string;
  
  @Field({ type: FieldType.STRING })
  changeAmount!: string;
  
  @Field({ type: FieldType.STRING })
  accountForChangeAmount!: string;
  
  @Field({ type: FieldType.STRING })
  writeOff!: string;
  
  @Field({ type: FieldType.STRING })
  writeOffAmount!: string;
  
  @Field({ type: FieldType.STRING })
  writeOffAmountCompanyCurrency!: string;
  
  @Field({ type: FieldType.STRING })
  writeOffOutstandingAmount!: string;
  
  @Field({ type: FieldType.STRING })
  writeOffAccount!: string;
  
  @Field({ type: FieldType.STRING })
  writeOffCostCenter!: string;
  
  @Field({ type: FieldType.STRING })
  terms!: string;
  
  @Field({ type: FieldType.STRING })
  termsAndConditionsDetails!: string;
  
  @Field({ type: FieldType.STRING })
  printingSettings!: string;
  
  @Field({ type: FieldType.STRING })
  letterHead!: string;
  
  @Field({ type: FieldType.STRING })
  groupSameItems!: string;
  
  @Field({ type: FieldType.STRING })
  printLanguage!: string;
  
  @Field({ type: FieldType.STRING })
  printHeading!: string;
  
  @Field({ type: FieldType.STRING })
  moreInformation!: string;
  
  @Field({ type: FieldType.STRING })
  interCompanyInvoiceReference!: string;
  
  @Field({ type: FieldType.STRING })
  customerGroup!: string;
  
  @Field({ type: FieldType.STRING })
  campaign!: string;
  
  @Field({ type: FieldType.STRING })
  status!: string;
  
  @Field({ type: FieldType.STRING })
  source!: string;
  
  @Field({ type: FieldType.STRING })
  accountingDetails!: string;
  
  @Field({ type: FieldType.STRING })
  debitTo!: string;
  
  @Field({ type: FieldType.STRING })
  partyAccountCurrency!: string;
  
  @Field({ type: FieldType.STRING })
  isOpeningEntry!: string;
  
  @Field({ type: FieldType.STRING })
  cFormApplicable!: string;
  
  @Field({ type: FieldType.STRING })
  cFormNo!: string;
  
  @Field({ type: FieldType.STRING })
  remarks!: string;
  
  @Field({ type: FieldType.STRING })
  commission!: string;
  
  @Field({ type: FieldType.STRING })
  salesPartner!: string;
  
  @Field({ type: FieldType.STRING })
  commissionRate!: string;
  
  @Field({ type: FieldType.STRING })
  totalCommission!: string;
  
  @Field({ type: FieldType.STRING })
  salesTeam!: string;
  
  @Field({ type: FieldType.STRING })
  salesTeam1!: string;
  
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
  
  @Field({ type: FieldType.STRING })
  againstIncomeAccount!: string;
  
  @Field({ type: FieldType.STRING })
  totalQty!: string;
  
  
}

export interface ISalesInvoice {
  id: number;
  title: string;
  series: string;
  customer: string;
  customerName: string;
  taxId: string;
  project: string;
  includePaymentPos: string;
  posProfile: string;
  offlinePosName: string;
  isReturnCreditNote: string;
  company: string;
  costCenter: string;
  date: string;
  postingTime: string;
  editPostingDateAndTime: string;
  paymentDueDate: string;
  amendedFrom: string;
  returns: string;
  returnAgainstSalesInvoice: string;
  updateBilledAmountInSalesOrder: string;
  customerPoDetails: string;
  customerSPurchaseOrder: string;
  customerSPurchaseOrderDate: string;
  addressAndContact: string;
  customerAddress: string;
  address: string;
  contactPerson: string;
  contact: string;
  mobileNo: string;
  contactEmail: string;
  territory: string;
  shippingAddressName: string;
  shippingAddress: string;
  companyAddressName: string;
  companyAddress: string;
  currencyAndPriceList: string;
  currency: string;
  exchangeRate: string;
  priceList: string;
  priceListCurrency: string;
  priceListExchangeRate: string;
  ignorePricingRule: string;
  setSourceWarehouse: string;
  updateStock: string;
  scanBarcode: string;
  items: string;
  packingList: string;
  packedItems: string;
  productBundleHelp: string;
  timeSheetList: string;
  timeSheets: string;
  totalBillingAmount: string;
  totalQuantity: string;
  totalCompanyCurrency: string;
  netTotalCompanyCurrency: string;
  total: string;
  netTotal: string;
  totalNetWeight: string;
  taxCategory: string;
  shippingRule: string;
  salesTaxesAndChargesTemplate: string;
  salesTaxesAndCharges: string;
  taxBreakup: string;
  taxesAndChargesCalculation: string;
  totalTaxesAndChargesCompanyCurrency: string;
  totalTaxesAndCharges: string;
  loyaltyPointsRedemption: string;
  loyaltyPoints: string;
  loyaltyAmount: string;
  redeemLoyaltyPoints: string;
  loyaltyProgram: string;
  redemptionAccount: string;
  redemptionCostCenter: string;
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
  advancePayments: string;
  allocateAdvancesAutomaticallyFifo: string;
  getAdvancesReceived: string;
  advances: string;
  paymentTerms: string;
  paymentTermsTemplate: string;
  paymentSchedule: string;
  payments: string;
  cashBankAccount: string;
  salesInvoicePayment: string;
  paidAmountCompanyCurrency: string;
  paidAmount: string;
  baseChangeAmountCompanyCurrency: string;
  changeAmount: string;
  accountForChangeAmount: string;
  writeOff: string;
  writeOffAmount: string;
  writeOffAmountCompanyCurrency: string;
  writeOffOutstandingAmount: string;
  writeOffAccount: string;
  writeOffCostCenter: string;
  terms: string;
  termsAndConditionsDetails: string;
  printingSettings: string;
  letterHead: string;
  groupSameItems: string;
  printLanguage: string;
  printHeading: string;
  moreInformation: string;
  interCompanyInvoiceReference: string;
  customerGroup: string;
  campaign: string;
  status: string;
  source: string;
  accountingDetails: string;
  debitTo: string;
  partyAccountCurrency: string;
  isOpeningEntry: string;
  cFormApplicable: string;
  cFormNo: string;
  remarks: string;
  commission: string;
  salesPartner: string;
  commissionRate: string;
  totalCommission: string;
  salesTeam: string;
  salesTeam1: string;
  subscriptionSection: string;
  fromDate: string;
  toDate: string;
  autoRepeat: string;
  updateAutoRepeatReference: string;
  againstIncomeAccount: string;
  totalQty: string;
  
}
