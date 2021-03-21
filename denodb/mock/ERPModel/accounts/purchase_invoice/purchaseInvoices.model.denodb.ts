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
  DataTypes,
  Model
} from "https://deno.land/x/denodb/mod.ts";
import {
  ModelFields,
} from "https://deno.land/x/denodb/lib/model.ts";


export class PurchaseInvoice extends Model { 
  static table = "purchaseInvoices";
  static timestamps = true;
  
  static fields: ModelFields = {
    // fields list for ORM Maping
    id: { primaryKey: true, autoIncrement: true },
    title: DataTypes.STRING,
    series: DataTypes.STRING,
    supplier: DataTypes.STRING,
    supplierName: DataTypes.STRING,
    taxId: DataTypes.STRING,
    dueDate: DataTypes.STRING,
    isPaid: DataTypes.STRING,
    isReturnDebitNote: DataTypes.STRING,
    applyTaxWithholdingAmount: DataTypes.STRING,
    company: DataTypes.STRING,
    costCenter: DataTypes.STRING,
    date: DataTypes.STRING,
    postingTime: DataTypes.STRING,
    editPostingDateAndTime: DataTypes.STRING,
    amendedFrom: DataTypes.STRING,
    holdInvoice: DataTypes.STRING,
    releaseDate: DataTypes.STRING,
    reasonForPuttingOnHold: DataTypes.STRING,
    supplierInvoiceDetails: DataTypes.STRING,
    supplierInvoiceNo: DataTypes.STRING,
    supplierInvoiceDate: DataTypes.STRING,
    returns: DataTypes.STRING,
    returnAgainstPurchaseInvoice: DataTypes.STRING,
    addressAndContact: DataTypes.STRING,
    selectSupplierAddress: DataTypes.STRING,
    address: DataTypes.STRING,
    contactPerson: DataTypes.STRING,
    contact: DataTypes.STRING,
    mobileNo: DataTypes.STRING,
    contactEmail: DataTypes.STRING,
    selectShippingAddress: DataTypes.STRING,
    shippingAddress: DataTypes.STRING,
    currencyAndPriceList: DataTypes.STRING,
    currency: DataTypes.STRING,
    exchangeRate: DataTypes.STRING,
    priceList: DataTypes.STRING,
    priceListCurrency: DataTypes.STRING,
    priceListExchangeRate: DataTypes.STRING,
    ignorePricingRule: DataTypes.STRING,
    setAcceptedWarehouse: DataTypes.STRING,
    rejectedWarehouse: DataTypes.STRING,
    supplierWarehouse: DataTypes.STRING,
    updateStock: DataTypes.STRING,
    scanBarcode: DataTypes.STRING,
    items: DataTypes.STRING,
    rawMaterialsSupplied: DataTypes.STRING,
    suppliedItems: DataTypes.STRING,
    totalQuantity: DataTypes.STRING,
    totalCompanyCurrency: DataTypes.STRING,
    netTotalCompanyCurrency: DataTypes.STRING,
    total: DataTypes.STRING,
    netTotal: DataTypes.STRING,
    totalNetWeight: DataTypes.STRING,
    taxCategory: DataTypes.STRING,
    shippingRule: DataTypes.STRING,
    purchaseTaxesAndChargesTemplate: DataTypes.STRING,
    purchaseTaxesAndCharges: DataTypes.STRING,
    taxBreakup: DataTypes.STRING,
    taxesAndChargesCalculation: DataTypes.STRING,
    taxesAndChargesAddedCompanyCurrency: DataTypes.STRING,
    taxesAndChargesDeductedCompanyCurrency: DataTypes.STRING,
    totalTaxesAndChargesCompanyCurrency: DataTypes.STRING,
    taxesAndChargesAdded: DataTypes.STRING,
    taxesAndChargesDeducted: DataTypes.STRING,
    totalTaxesAndCharges: DataTypes.STRING,
    additionalDiscount: DataTypes.STRING,
    applyAdditionalDiscountOn: DataTypes.STRING,
    additionalDiscountAmountCompanyCurrency: DataTypes.STRING,
    additionalDiscountPercentage: DataTypes.STRING,
    additionalDiscountAmount: DataTypes.STRING,
    grandTotalCompanyCurrency: DataTypes.STRING,
    roundingAdjustmentCompanyCurrency: DataTypes.STRING,
    roundedTotalCompanyCurrency: DataTypes.STRING,
    inWordsCompanyCurrency: DataTypes.STRING,
    grandTotal: DataTypes.STRING,
    roundingAdjustment: DataTypes.STRING,
    roundedTotal: DataTypes.STRING,
    inWords: DataTypes.STRING,
    totalAdvance: DataTypes.STRING,
    outstandingAmount: DataTypes.STRING,
    disableRoundedTotal: DataTypes.STRING,
    payments: DataTypes.STRING,
    modeOfPayment: DataTypes.STRING,
    cashBankAccount: DataTypes.STRING,
    paidAmount: DataTypes.STRING,
    paidAmountCompanyCurrency: DataTypes.STRING,
    writeOff: DataTypes.STRING,
    writeOffAmount: DataTypes.STRING,
    writeOffAmountCompanyCurrency: DataTypes.STRING,
    writeOffAccount: DataTypes.STRING,
    writeOffCostCenter: DataTypes.STRING,
    advancePayments: DataTypes.STRING,
    setAdvancesAndAllocateFifo: DataTypes.STRING,
    getAdvancesPaid: DataTypes.STRING,
    advances: DataTypes.STRING,
    paymentTerms: DataTypes.STRING,
    paymentTermsTemplate: DataTypes.STRING,
    paymentSchedule: DataTypes.STRING,
    termsAndConditions: DataTypes.STRING,
    terms: DataTypes.STRING,
    termsAndConditions1: DataTypes.STRING,
    printingSettings: DataTypes.STRING,
    letterHead: DataTypes.STRING,
    groupSameItems: DataTypes.STRING,
    printHeading: DataTypes.STRING,
    printLanguage: DataTypes.STRING,
    moreInformation: DataTypes.STRING,
    creditTo: DataTypes.STRING,
    partyAccountCurrency: DataTypes.STRING,
    isOpening: DataTypes.STRING,
    againstExpenseAccount: DataTypes.STRING,
    status: DataTypes.STRING,
    interCompanyInvoiceReference: DataTypes.STRING,
    remarks: DataTypes.STRING,
    subscriptionSection: DataTypes.STRING,
    fromDate: DataTypes.STRING,
    toDate: DataTypes.STRING,
    autoRepeat: DataTypes.STRING,
    updateAutoRepeatReference: DataTypes.STRING,
    
  };

  static meta = {
    // field meta information for UI render
    fieldProperty: [
      {
        key: 'title',
        label: 'Title',
        type: 'input',
        placeholder: 'Input Title',
        options: '',
        
      },
      {
        key: 'series',
        label: 'Series',
        type: 'select',
        placeholder: 'Input Series',
        options: '',
        
      },
      {
        key: 'supplier',
        label: 'Supplier',
        type: 'select',
        placeholder: 'Input Supplier',
        options: '',
        
      },
      {
        key: 'supplierName',
        label: 'Supplier Name',
        type: 'input',
        placeholder: 'Input Supplier Name',
        options: '',
        
      },
      {
        key: 'taxId',
        label: 'Tax Id',
        type: 'input',
        placeholder: 'Input Tax Id',
        options: '',
        
      },
      {
        key: 'dueDate',
        label: 'Due Date',
        type: 'input',
        placeholder: 'Input Due Date',
        options: '',
        
      },
      {
        key: 'isPaid',
        label: 'Is Paid',
        type: 'input',
        placeholder: 'Input Is Paid',
        options: '',
        
      },
      {
        key: 'isReturnDebitNote',
        label: 'Is Return Debit Note',
        type: 'input',
        placeholder: 'Input Is Return Debit Note',
        options: '',
        
      },
      {
        key: 'applyTaxWithholdingAmount',
        label: 'Apply Tax Withholding Amount',
        type: 'input',
        placeholder: 'Input Apply Tax Withholding Amount',
        options: '',
        
      },
      {
        key: '',
        label: '',
        type: 'input',
        placeholder: 'Input ',
        options: '',
        
      },
      {
        key: 'company',
        label: 'Company',
        type: 'select',
        placeholder: 'Input Company',
        options: '',
        
      },
      {
        key: 'costCenter',
        label: 'Cost Center',
        type: 'select',
        placeholder: 'Input Cost Center',
        options: '',
        
      },
      {
        key: 'date',
        label: 'Date',
        type: 'input',
        placeholder: 'Input Date',
        options: '',
        
      },
      {
        key: 'postingTime',
        label: 'Posting Time',
        type: 'input',
        placeholder: 'Input Posting Time',
        options: '',
        
      },
      {
        key: 'editPostingDateAndTime',
        label: 'Edit Posting Date And Time',
        type: 'input',
        placeholder: 'Input Edit Posting Date And Time',
        options: '',
        
      },
      {
        key: 'amendedFrom',
        label: 'Amended From',
        type: 'select',
        placeholder: 'Input Amended From',
        options: '',
        
      },
      {
        key: 'holdInvoice',
        label: 'Hold Invoice',
        type: 'input',
        placeholder: 'Input Hold Invoice',
        options: '',
        
      },
      {
        key: 'releaseDate',
        label: 'Release Date',
        type: 'input',
        placeholder: 'Input Release Date',
        options: '',
        
      },
      {
        key: '',
        label: '',
        type: 'input',
        placeholder: 'Input ',
        options: '',
        
      },
      {
        key: 'reasonForPuttingOnHold',
        label: 'Reason For Putting On Hold',
        type: 'input',
        placeholder: 'Input Reason For Putting On Hold',
        options: '',
        
      },
      {
        key: 'supplierInvoiceDetails',
        label: 'Supplier Invoice Details',
        type: 'input',
        placeholder: 'Input Supplier Invoice Details',
        options: '',
        
      },
      {
        key: 'supplierInvoiceNo',
        label: 'Supplier Invoice No',
        type: 'input',
        placeholder: 'Input Supplier Invoice No',
        options: '',
        
      },
      {
        key: '',
        label: '',
        type: 'input',
        placeholder: 'Input ',
        options: '',
        
      },
      {
        key: 'supplierInvoiceDate',
        label: 'Supplier Invoice Date',
        type: 'input',
        placeholder: 'Input Supplier Invoice Date',
        options: '',
        
      },
      {
        key: 'returns',
        label: 'Returns',
        type: 'input',
        placeholder: 'Input Returns',
        options: '',
        
      },
      {
        key: 'returnAgainstPurchaseInvoice',
        label: 'Return Against Purchase Invoice',
        type: 'select',
        placeholder: 'Input Return Against Purchase Invoice',
        options: '',
        
      },
      {
        key: 'addressAndContact',
        label: 'Address And Contact',
        type: 'input',
        placeholder: 'Input Address And Contact',
        options: '',
        
      },
      {
        key: 'selectSupplierAddress',
        label: 'Select Supplier Address',
        type: 'select',
        placeholder: 'Input Select Supplier Address',
        options: '',
        
      },
      {
        key: 'address',
        label: 'Address',
        type: 'input',
        placeholder: 'Input Address',
        options: '',
        
      },
      {
        key: 'contactPerson',
        label: 'Contact Person',
        type: 'select',
        placeholder: 'Input Contact Person',
        options: '',
        
      },
      {
        key: 'contact',
        label: 'Contact',
        type: 'input',
        placeholder: 'Input Contact',
        options: '',
        
      },
      {
        key: 'mobileNo',
        label: 'Mobile No',
        type: 'input',
        placeholder: 'Input Mobile No',
        options: '',
        
      },
      {
        key: 'contactEmail',
        label: 'Contact Email',
        type: 'input',
        placeholder: 'Input Contact Email',
        options: '',
        
      },
      {
        key: '',
        label: '',
        type: 'input',
        placeholder: 'Input ',
        options: '',
        
      },
      {
        key: 'selectShippingAddress',
        label: 'Select Shipping Address',
        type: 'select',
        placeholder: 'Input Select Shipping Address',
        options: '',
        
      },
      {
        key: 'shippingAddress',
        label: 'Shipping Address',
        type: 'input',
        placeholder: 'Input Shipping Address',
        options: '',
        
      },
      {
        key: 'currencyAndPriceList',
        label: 'Currency And Price List',
        type: 'select',
        placeholder: 'Input Currency And Price List',
        options: '',
        
      },
      {
        key: 'currency',
        label: 'Currency',
        type: 'select',
        placeholder: 'Input Currency',
        options: '',
        
      },
      {
        key: 'exchangeRate',
        label: 'Exchange Rate',
        type: 'input',
        placeholder: 'Input Exchange Rate',
        options: '',
        
      },
      {
        key: '',
        label: '',
        type: 'input',
        placeholder: 'Input ',
        options: '',
        
      },
      {
        key: 'priceList',
        label: 'Price List',
        type: 'select',
        placeholder: 'Input Price List',
        options: '',
        
      },
      {
        key: 'priceListCurrency',
        label: 'Price List Currency',
        type: 'select',
        placeholder: 'Input Price List Currency',
        options: '',
        
      },
      {
        key: 'priceListExchangeRate',
        label: 'Price List Exchange Rate',
        type: 'input',
        placeholder: 'Input Price List Exchange Rate',
        options: '',
        
      },
      {
        key: 'ignorePricingRule',
        label: 'Ignore Pricing Rule',
        type: 'input',
        placeholder: 'Input Ignore Pricing Rule',
        options: '',
        
      },
      {
        key: '',
        label: '',
        type: 'input',
        placeholder: 'Input ',
        options: '',
        
      },
      {
        key: 'setAcceptedWarehouse',
        label: 'Set Accepted Warehouse',
        type: 'select',
        placeholder: 'Input Set Accepted Warehouse',
        options: '',
        
      },
      {
        key: 'rejectedWarehouse',
        label: 'Rejected Warehouse',
        type: 'select',
        placeholder: 'Input Rejected Warehouse',
        options: '',
        
      },
      {
        key: '',
        label: '',
        type: 'input',
        placeholder: 'Input ',
        options: '',
        
      },
      {
        key: 'supplierWarehouse',
        label: 'Supplier Warehouse',
        type: 'select',
        placeholder: 'Input Supplier Warehouse',
        options: '',
        
      },
      {
        key: '',
        label: '',
        type: 'select',
        placeholder: 'Input ',
        options: '',
        
      },
      {
        key: 'updateStock',
        label: 'Update Stock',
        type: 'input',
        placeholder: 'Input Update Stock',
        options: '',
        
      },
      {
        key: 'scanBarcode',
        label: 'Scan Barcode',
        type: 'input',
        placeholder: 'Input Scan Barcode',
        options: '',
        
      },
      {
        key: 'items',
        label: 'Items',
        type: 'select',
        placeholder: 'Input Items',
        options: '',
        
      },
      {
        key: 'rawMaterialsSupplied',
        label: 'Raw Materials Supplied',
        type: 'input',
        placeholder: 'Input Raw Materials Supplied',
        options: '',
        
      },
      {
        key: 'suppliedItems',
        label: 'Supplied Items',
        type: 'select',
        placeholder: 'Input Supplied Items',
        options: '',
        
      },
      {
        key: '',
        label: '',
        type: 'input',
        placeholder: 'Input ',
        options: '',
        
      },
      {
        key: 'totalQuantity',
        label: 'Total Quantity',
        type: 'input',
        placeholder: 'Input Total Quantity',
        options: '',
        
      },
      {
        key: 'totalCompanyCurrency',
        label: 'Total Company Currency',
        type: 'select',
        placeholder: 'Input Total Company Currency',
        options: '',
        
      },
      {
        key: 'netTotalCompanyCurrency',
        label: 'Net Total Company Currency',
        type: 'select',
        placeholder: 'Input Net Total Company Currency',
        options: '',
        
      },
      {
        key: '',
        label: '',
        type: 'input',
        placeholder: 'Input ',
        options: '',
        
      },
      {
        key: 'total',
        label: 'Total',
        type: 'select',
        placeholder: 'Input Total',
        options: '',
        
      },
      {
        key: 'netTotal',
        label: 'Net Total',
        type: 'select',
        placeholder: 'Input Net Total',
        options: '',
        
      },
      {
        key: 'totalNetWeight',
        label: 'Total Net Weight',
        type: 'input',
        placeholder: 'Input Total Net Weight',
        options: '',
        
      },
      {
        key: '',
        label: '',
        type: 'select',
        placeholder: 'Input ',
        options: '',
        
      },
      {
        key: 'taxCategory',
        label: 'Tax Category',
        type: 'select',
        placeholder: 'Input Tax Category',
        options: '',
        
      },
      {
        key: '',
        label: '',
        type: 'input',
        placeholder: 'Input ',
        options: '',
        
      },
      {
        key: 'shippingRule',
        label: 'Shipping Rule',
        type: 'select',
        placeholder: 'Input Shipping Rule',
        options: '',
        
      },
      {
        key: '',
        label: '',
        type: 'input',
        placeholder: 'Input ',
        options: '',
        
      },
      {
        key: 'purchaseTaxesAndChargesTemplate',
        label: 'Purchase Taxes And Charges Template',
        type: 'select',
        placeholder: 'Input Purchase Taxes And Charges Template',
        options: '',
        
      },
      {
        key: 'purchaseTaxesAndCharges',
        label: 'Purchase Taxes And Charges',
        type: 'select',
        placeholder: 'Input Purchase Taxes And Charges',
        options: '',
        
      },
      {
        key: 'taxBreakup',
        label: 'Tax Breakup',
        type: 'input',
        placeholder: 'Input Tax Breakup',
        options: '',
        
      },
      {
        key: 'taxesAndChargesCalculation',
        label: 'Taxes And Charges Calculation',
        type: 'input',
        placeholder: 'Input Taxes And Charges Calculation',
        options: '',
        
      },
      {
        key: '',
        label: '',
        type: 'select',
        placeholder: 'Input ',
        options: '',
        
      },
      {
        key: 'taxesAndChargesAddedCompanyCurrency',
        label: 'Taxes And Charges Added Company Currency',
        type: 'select',
        placeholder: 'Input Taxes And Charges Added Company Currency',
        options: '',
        
      },
      {
        key: 'taxesAndChargesDeductedCompanyCurrency',
        label: 'Taxes And Charges Deducted Company Currency',
        type: 'select',
        placeholder: 'Input Taxes And Charges Deducted Company Currency',
        options: '',
        
      },
      {
        key: 'totalTaxesAndChargesCompanyCurrency',
        label: 'Total Taxes And Charges Company Currency',
        type: 'select',
        placeholder: 'Input Total Taxes And Charges Company Currency',
        options: '',
        
      },
      {
        key: '',
        label: '',
        type: 'input',
        placeholder: 'Input ',
        options: '',
        
      },
      {
        key: 'taxesAndChargesAdded',
        label: 'Taxes And Charges Added',
        type: 'select',
        placeholder: 'Input Taxes And Charges Added',
        options: '',
        
      },
      {
        key: 'taxesAndChargesDeducted',
        label: 'Taxes And Charges Deducted',
        type: 'select',
        placeholder: 'Input Taxes And Charges Deducted',
        options: '',
        
      },
      {
        key: 'totalTaxesAndCharges',
        label: 'Total Taxes And Charges',
        type: 'select',
        placeholder: 'Input Total Taxes And Charges',
        options: '',
        
      },
      {
        key: 'additionalDiscount',
        label: 'Additional Discount',
        type: 'input',
        placeholder: 'Input Additional Discount',
        options: '',
        
      },
      {
        key: 'applyAdditionalDiscountOn',
        label: 'Apply Additional Discount On',
        type: 'select',
        placeholder: 'Input Apply Additional Discount On',
        options: '[object Object],[object Object]',
        
      },
      {
        key: 'additionalDiscountAmountCompanyCurrency',
        label: 'Additional Discount Amount Company Currency',
        type: 'select',
        placeholder: 'Input Additional Discount Amount Company Currency',
        options: '',
        
      },
      {
        key: '',
        label: '',
        type: 'input',
        placeholder: 'Input ',
        options: '',
        
      },
      {
        key: 'additionalDiscountPercentage',
        label: 'Additional Discount Percentage',
        type: 'input',
        placeholder: 'Input Additional Discount Percentage',
        options: '',
        
      },
      {
        key: 'additionalDiscountAmount',
        label: 'Additional Discount Amount',
        type: 'select',
        placeholder: 'Input Additional Discount Amount',
        options: '',
        
      },
      {
        key: '',
        label: '',
        type: 'input',
        placeholder: 'Input ',
        options: '',
        
      },
      {
        key: 'grandTotalCompanyCurrency',
        label: 'Grand Total Company Currency',
        type: 'select',
        placeholder: 'Input Grand Total Company Currency',
        options: '',
        
      },
      {
        key: 'roundingAdjustmentCompanyCurrency',
        label: 'Rounding Adjustment Company Currency',
        type: 'select',
        placeholder: 'Input Rounding Adjustment Company Currency',
        options: '',
        
      },
      {
        key: 'roundedTotalCompanyCurrency',
        label: 'Rounded Total Company Currency',
        type: 'select',
        placeholder: 'Input Rounded Total Company Currency',
        options: '',
        
      },
      {
        key: 'inWordsCompanyCurrency',
        label: 'In Words Company Currency',
        type: 'input',
        placeholder: 'Input In Words Company Currency',
        options: '',
        
      },
      {
        key: '',
        label: '',
        type: 'input',
        placeholder: 'Input ',
        options: '',
        
      },
      {
        key: 'grandTotal',
        label: 'Grand Total',
        type: 'select',
        placeholder: 'Input Grand Total',
        options: '',
        
      },
      {
        key: 'roundingAdjustment',
        label: 'Rounding Adjustment',
        type: 'select',
        placeholder: 'Input Rounding Adjustment',
        options: '',
        
      },
      {
        key: 'roundedTotal',
        label: 'Rounded Total',
        type: 'select',
        placeholder: 'Input Rounded Total',
        options: '',
        
      },
      {
        key: 'inWords',
        label: 'In Words',
        type: 'input',
        placeholder: 'Input In Words',
        options: '',
        
      },
      {
        key: 'totalAdvance',
        label: 'Total Advance',
        type: 'select',
        placeholder: 'Input Total Advance',
        options: '',
        
      },
      {
        key: 'outstandingAmount',
        label: 'Outstanding Amount',
        type: 'select',
        placeholder: 'Input Outstanding Amount',
        options: '',
        
      },
      {
        key: 'disableRoundedTotal',
        label: 'Disable Rounded Total',
        type: 'input',
        placeholder: 'Input Disable Rounded Total',
        options: '',
        
      },
      {
        key: 'payments',
        label: 'Payments',
        type: 'input',
        placeholder: 'Input Payments',
        options: '',
        
      },
      {
        key: 'modeOfPayment',
        label: 'Mode Of Payment',
        type: 'select',
        placeholder: 'Input Mode Of Payment',
        options: '',
        
      },
      {
        key: 'cashBankAccount',
        label: 'Cash Bank Account',
        type: 'select',
        placeholder: 'Input Cash Bank Account',
        options: '',
        
      },
      {
        key: '',
        label: '',
        type: 'input',
        placeholder: 'Input ',
        options: '',
        
      },
      {
        key: 'paidAmount',
        label: 'Paid Amount',
        type: 'select',
        placeholder: 'Input Paid Amount',
        options: '',
        
      },
      {
        key: 'paidAmountCompanyCurrency',
        label: 'Paid Amount Company Currency',
        type: 'select',
        placeholder: 'Input Paid Amount Company Currency',
        options: '',
        
      },
      {
        key: 'writeOff',
        label: 'Write Off',
        type: 'input',
        placeholder: 'Input Write Off',
        options: '',
        
      },
      {
        key: 'writeOffAmount',
        label: 'Write Off Amount',
        type: 'select',
        placeholder: 'Input Write Off Amount',
        options: '',
        
      },
      {
        key: 'writeOffAmountCompanyCurrency',
        label: 'Write Off Amount Company Currency',
        type: 'select',
        placeholder: 'Input Write Off Amount Company Currency',
        options: '',
        
      },
      {
        key: '',
        label: '',
        type: 'input',
        placeholder: 'Input ',
        options: '',
        
      },
      {
        key: 'writeOffAccount',
        label: 'Write Off Account',
        type: 'select',
        placeholder: 'Input Write Off Account',
        options: '',
        
      },
      {
        key: 'writeOffCostCenter',
        label: 'Write Off Cost Center',
        type: 'select',
        placeholder: 'Input Write Off Cost Center',
        options: '',
        
      },
      {
        key: 'advancePayments',
        label: 'Advance Payments',
        type: 'select',
        placeholder: 'Input Advance Payments',
        options: '',
        
      },
      {
        key: 'setAdvancesAndAllocateFifo',
        label: 'Set Advances And Allocate Fifo',
        type: 'input',
        placeholder: 'Input Set Advances And Allocate Fifo',
        options: '',
        
      },
      {
        key: 'getAdvancesPaid',
        label: 'Get Advances Paid',
        type: 'input',
        placeholder: 'Input Get Advances Paid',
        options: '',
        
      },
      {
        key: 'advances',
        label: 'Advances',
        type: 'select',
        placeholder: 'Input Advances',
        options: '',
        
      },
      {
        key: 'paymentTerms',
        label: 'Payment Terms',
        type: 'input',
        placeholder: 'Input Payment Terms',
        options: '',
        
      },
      {
        key: 'paymentTermsTemplate',
        label: 'Payment Terms Template',
        type: 'select',
        placeholder: 'Input Payment Terms Template',
        options: '',
        
      },
      {
        key: 'paymentSchedule',
        label: 'Payment Schedule',
        type: 'select',
        placeholder: 'Input Payment Schedule',
        options: '',
        
      },
      {
        key: 'termsAndConditions',
        label: 'Terms And Conditions',
        type: 'select',
        placeholder: 'Input Terms And Conditions',
        options: '',
        
      },
      {
        key: 'terms',
        label: 'Terms',
        type: 'select',
        placeholder: 'Input Terms',
        options: '',
        
      },
      {
        key: 'termsAndConditions1',
        label: 'Terms And Conditions1',
        type: 'input',
        placeholder: 'Input Terms And Conditions1',
        options: '',
        
      },
      {
        key: 'printingSettings',
        label: 'Printing Settings',
        type: 'input',
        placeholder: 'Input Printing Settings',
        options: '',
        
      },
      {
        key: 'letterHead',
        label: 'Letter Head',
        type: 'select',
        placeholder: 'Input Letter Head',
        options: '',
        
      },
      {
        key: 'groupSameItems',
        label: 'Group Same Items',
        type: 'input',
        placeholder: 'Input Group Same Items',
        options: '',
        
      },
      {
        key: '',
        label: '',
        type: 'input',
        placeholder: 'Input ',
        options: '',
        
      },
      {
        key: 'printHeading',
        label: 'Print Heading',
        type: 'select',
        placeholder: 'Input Print Heading',
        options: '',
        
      },
      {
        key: 'printLanguage',
        label: 'Print Language',
        type: 'input',
        placeholder: 'Input Print Language',
        options: '',
        
      },
      {
        key: 'moreInformation',
        label: 'More Information',
        type: 'select',
        placeholder: 'Input More Information',
        options: '',
        
      },
      {
        key: 'creditTo',
        label: 'Credit To',
        type: 'select',
        placeholder: 'Input Credit To',
        options: '',
        
      },
      {
        key: 'partyAccountCurrency',
        label: 'Party Account Currency',
        type: 'select',
        placeholder: 'Input Party Account Currency',
        options: '',
        
      },
      {
        key: 'isOpening',
        label: 'Is Opening',
        type: 'select',
        placeholder: 'Input Is Opening',
        options: '[object Object]',
        
      },
      {
        key: 'againstExpenseAccount',
        label: 'Against Expense Account',
        type: 'input',
        placeholder: 'Input Against Expense Account',
        options: '',
        
      },
      {
        key: '',
        label: '',
        type: 'input',
        placeholder: 'Input ',
        options: '',
        
      },
      {
        key: 'status',
        label: 'Status',
        type: 'select',
        placeholder: 'Input Status',
        options: '[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object]',
        
      },
      {
        key: 'interCompanyInvoiceReference',
        label: 'Inter Company Invoice Reference',
        type: 'select',
        placeholder: 'Input Inter Company Invoice Reference',
        options: '',
        
      },
      {
        key: 'remarks',
        label: 'Remarks',
        type: 'input',
        placeholder: 'Input Remarks',
        options: '',
        
      },
      {
        key: 'subscriptionSection',
        label: 'Subscription Section',
        type: 'input',
        placeholder: 'Input Subscription Section',
        options: '',
        
      },
      {
        key: 'fromDate',
        label: 'From Date',
        type: 'input',
        placeholder: 'Input From Date',
        options: '',
        
      },
      {
        key: 'toDate',
        label: 'To Date',
        type: 'input',
        placeholder: 'Input To Date',
        options: '',
        
      },
      {
        key: '',
        label: '',
        type: 'input',
        placeholder: 'Input ',
        options: '',
        
      },
      {
        key: 'autoRepeat',
        label: 'Auto Repeat',
        type: 'select',
        placeholder: 'Input Auto Repeat',
        options: '',
        
      },
      {
        key: 'updateAutoRepeatReference',
        label: 'Update Auto Repeat Reference',
        type: 'input',
        placeholder: 'Input Update Auto Repeat Reference',
        options: '',
        
      },
      
    ]
  };
}
