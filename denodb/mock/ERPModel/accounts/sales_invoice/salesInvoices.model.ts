// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: SalesInvoice
|--------------------------------------------------------------------------
|
| Model of salesInvoices
|
*/
import {
  DataTypes,
  Model
} from "https://deno.land/x/denodb/mod.ts";

export class SalesInvoice extends Model { 
  static table = "salesInvoices";
  static timestamps = true;
  
  static fields = {
    // fields list for ORM Maping
    id: { primaryKey: true, autoIncrement: true },
    
    : DataTypes.STRING,
    
    title: DataTypes.STRING,
    
    series: DataTypes.STRING,
    
    customer: DataTypes.STRING,
    
    customerName: DataTypes.STRING,
    
    taxId: DataTypes.STRING,
    
    project: DataTypes.STRING,
    
    includePaymentPos: DataTypes.STRING,
    
    posProfile: DataTypes.STRING,
    
    offlinePosName: DataTypes.STRING,
    
    isReturnCreditNote: DataTypes.STRING,
    
    : DataTypes.STRING,
    
    company: DataTypes.STRING,
    
    costCenter: DataTypes.STRING,
    
    date: DataTypes.STRING,
    
    postingTime: DataTypes.STRING,
    
    editPostingDateAndTime: DataTypes.STRING,
    
    paymentDueDate: DataTypes.STRING,
    
    amendedFrom: DataTypes.STRING,
    
    returns: DataTypes.STRING,
    
    returnAgainstSalesInvoice: DataTypes.STRING,
    
    : DataTypes.STRING,
    
    updateBilledAmountInSalesOrder: DataTypes.STRING,
    
    customerPoDetails: DataTypes.STRING,
    
    customerSPurchaseOrder: DataTypes.STRING,
    
    : DataTypes.STRING,
    
    customerSPurchaseOrderDate: DataTypes.STRING,
    
    addressAndContact: DataTypes.STRING,
    
    customerAddress: DataTypes.STRING,
    
    address: DataTypes.STRING,
    
    contactPerson: DataTypes.STRING,
    
    contact: DataTypes.STRING,
    
    mobileNo: DataTypes.STRING,
    
    contactEmail: DataTypes.STRING,
    
    territory: DataTypes.STRING,
    
    : DataTypes.STRING,
    
    shippingAddressName: DataTypes.STRING,
    
    shippingAddress: DataTypes.STRING,
    
    companyAddressName: DataTypes.STRING,
    
    companyAddress: DataTypes.STRING,
    
    currencyAndPriceList: DataTypes.STRING,
    
    currency: DataTypes.STRING,
    
    exchangeRate: DataTypes.STRING,
    
    : DataTypes.STRING,
    
    priceList: DataTypes.STRING,
    
    priceListCurrency: DataTypes.STRING,
    
    priceListExchangeRate: DataTypes.STRING,
    
    ignorePricingRule: DataTypes.STRING,
    
    : DataTypes.STRING,
    
    setSourceWarehouse: DataTypes.STRING,
    
    : DataTypes.STRING,
    
    updateStock: DataTypes.STRING,
    
    scanBarcode: DataTypes.STRING,
    
    items: DataTypes.STRING,
    
    packingList: DataTypes.STRING,
    
    packedItems: DataTypes.STRING,
    
    productBundleHelp: DataTypes.STRING,
    
    timeSheetList: DataTypes.STRING,
    
    timeSheets: DataTypes.STRING,
    
    totalBillingAmount: DataTypes.STRING,
    
    : DataTypes.STRING,
    
    totalQuantity: DataTypes.STRING,
    
    totalCompanyCurrency: DataTypes.STRING,
    
    netTotalCompanyCurrency: DataTypes.STRING,
    
    : DataTypes.STRING,
    
    total: DataTypes.STRING,
    
    netTotal: DataTypes.STRING,
    
    totalNetWeight: DataTypes.STRING,
    
    : DataTypes.STRING,
    
    taxCategory: DataTypes.STRING,
    
    : DataTypes.STRING,
    
    shippingRule: DataTypes.STRING,
    
    : DataTypes.STRING,
    
    salesTaxesAndChargesTemplate: DataTypes.STRING,
    
    salesTaxesAndCharges: DataTypes.STRING,
    
    taxBreakup: DataTypes.STRING,
    
    taxesAndChargesCalculation: DataTypes.STRING,
    
    : DataTypes.STRING,
    
    totalTaxesAndChargesCompanyCurrency: DataTypes.STRING,
    
    : DataTypes.STRING,
    
    totalTaxesAndCharges: DataTypes.STRING,
    
    loyaltyPointsRedemption: DataTypes.STRING,
    
    loyaltyPoints: DataTypes.STRING,
    
    loyaltyAmount: DataTypes.STRING,
    
    redeemLoyaltyPoints: DataTypes.STRING,
    
    : DataTypes.STRING,
    
    loyaltyProgram: DataTypes.STRING,
    
    redemptionAccount: DataTypes.STRING,
    
    redemptionCostCenter: DataTypes.STRING,
    
    additionalDiscount: DataTypes.STRING,
    
    applyAdditionalDiscountOn: DataTypes.STRING,
    
    additionalDiscountAmountCompanyCurrency: DataTypes.STRING,
    
    : DataTypes.STRING,
    
    additionalDiscountPercentage: DataTypes.STRING,
    
    additionalDiscountAmount: DataTypes.STRING,
    
    : DataTypes.STRING,
    
    grandTotalCompanyCurrency: DataTypes.STRING,
    
    roundingAdjustmentCompanyCurrency: DataTypes.STRING,
    
    roundedTotalCompanyCurrency: DataTypes.STRING,
    
    inWordsCompanyCurrency: DataTypes.STRING,
    
    : DataTypes.STRING,
    
    grandTotal: DataTypes.STRING,
    
    roundingAdjustment: DataTypes.STRING,
    
    roundedTotal: DataTypes.STRING,
    
    inWords: DataTypes.STRING,
    
    totalAdvance: DataTypes.STRING,
    
    outstandingAmount: DataTypes.STRING,
    
    advancePayments: DataTypes.STRING,
    
    allocateAdvancesAutomaticallyFifo: DataTypes.STRING,
    
    getAdvancesReceived: DataTypes.STRING,
    
    advances: DataTypes.STRING,
    
    paymentTerms: DataTypes.STRING,
    
    paymentTermsTemplate: DataTypes.STRING,
    
    paymentSchedule: DataTypes.STRING,
    
    payments: DataTypes.STRING,
    
    cashBankAccount: DataTypes.STRING,
    
    salesInvoicePayment: DataTypes.STRING,
    
    : DataTypes.STRING,
    
    paidAmountCompanyCurrency: DataTypes.STRING,
    
    : DataTypes.STRING,
    
    paidAmount: DataTypes.STRING,
    
    : DataTypes.STRING,
    
    baseChangeAmountCompanyCurrency: DataTypes.STRING,
    
    : DataTypes.STRING,
    
    changeAmount: DataTypes.STRING,
    
    accountForChangeAmount: DataTypes.STRING,
    
    writeOff: DataTypes.STRING,
    
    writeOffAmount: DataTypes.STRING,
    
    writeOffAmountCompanyCurrency: DataTypes.STRING,
    
    writeOffOutstandingAmount: DataTypes.STRING,
    
    : DataTypes.STRING,
    
    writeOffAccount: DataTypes.STRING,
    
    writeOffCostCenter: DataTypes.STRING,
    
    terms: DataTypes.STRING,
    
    terms: DataTypes.STRING,
    
    termsAndConditionsDetails: DataTypes.STRING,
    
    printingSettings: DataTypes.STRING,
    
    letterHead: DataTypes.STRING,
    
    groupSameItems: DataTypes.STRING,
    
    printLanguage: DataTypes.STRING,
    
    : DataTypes.STRING,
    
    printHeading: DataTypes.STRING,
    
    moreInformation: DataTypes.STRING,
    
    interCompanyInvoiceReference: DataTypes.STRING,
    
    customerGroup: DataTypes.STRING,
    
    campaign: DataTypes.STRING,
    
    : DataTypes.STRING,
    
    status: DataTypes.STRING,
    
    source: DataTypes.STRING,
    
    accountingDetails: DataTypes.STRING,
    
    debitTo: DataTypes.STRING,
    
    partyAccountCurrency: DataTypes.STRING,
    
    isOpeningEntry: DataTypes.STRING,
    
    cFormApplicable: DataTypes.STRING,
    
    cFormNo: DataTypes.STRING,
    
    : DataTypes.STRING,
    
    remarks: DataTypes.STRING,
    
    commission: DataTypes.STRING,
    
    salesPartner: DataTypes.STRING,
    
    : DataTypes.STRING,
    
    commissionRate: DataTypes.STRING,
    
    totalCommission: DataTypes.STRING,
    
    salesTeam: DataTypes.STRING,
    
    salesTeam1: DataTypes.STRING,
    
    subscriptionSection: DataTypes.STRING,
    
    fromDate: DataTypes.STRING,
    
    toDate: DataTypes.STRING,
    
    : DataTypes.STRING,
    
    autoRepeat: DataTypes.STRING,
    
    updateAutoRepeatReference: DataTypes.STRING,
    
    againstIncomeAccount: DataTypes.STRING,
    
    totalQty: DataTypes.STRING,
    
  };

  static meta = {
    // field meta information for UI render
    fieldProperty: [
      {
        key: '',
      
        label: '',
      
        type: 'select',
      
        placeholder: 'Input ',
      
        options: '',
      },{
        key: 'title',
      
        label: 'Title',
      
        type: 'input',
      
        placeholder: 'Input Title',
      
        options: '',
      },{
        key: 'series',
      
        label: 'Series',
      
        type: 'select',
      
        placeholder: 'Input Series',
      
        options: '',
      },{
        key: 'customer',
      
        label: 'Customer',
      
        type: 'select',
      
        placeholder: 'Input Customer',
      
        options: '',
      },{
        key: 'customerName',
      
        label: 'Customer Name',
      
        type: 'input',
      
        placeholder: 'Input Customer Name',
      
        options: '',
      },{
        key: 'taxId',
      
        label: 'Tax Id',
      
        type: 'input',
      
        placeholder: 'Input Tax Id',
      
        options: '',
      },{
        key: 'project',
      
        label: 'Project',
      
        type: 'select',
      
        placeholder: 'Input Project',
      
        options: '',
      },{
        key: 'includePaymentPos',
      
        label: 'Include Payment Pos',
      
        type: 'input',
      
        placeholder: 'Input Include Payment Pos',
      
        options: '',
      },{
        key: 'posProfile',
      
        label: 'Pos Profile',
      
        type: 'select',
      
        placeholder: 'Input Pos Profile',
      
        options: '',
      },{
        key: 'offlinePosName',
      
        label: 'Offline Pos Name',
      
        type: 'input',
      
        placeholder: 'Input Offline Pos Name',
      
        options: '',
      },{
        key: 'isReturnCreditNote',
      
        label: 'Is Return Credit Note',
      
        type: 'input',
      
        placeholder: 'Input Is Return Credit Note',
      
        options: '',
      },{
        key: '',
      
        label: '',
      
        type: 'input',
      
        placeholder: 'Input ',
      
        options: '',
      },{
        key: 'company',
      
        label: 'Company',
      
        type: 'select',
      
        placeholder: 'Input Company',
      
        options: '',
      },{
        key: 'costCenter',
      
        label: 'Cost Center',
      
        type: 'select',
      
        placeholder: 'Input Cost Center',
      
        options: '',
      },{
        key: 'date',
      
        label: 'Date',
      
        type: 'input',
      
        placeholder: 'Input Date',
      
        options: '',
      },{
        key: 'postingTime',
      
        label: 'Posting Time',
      
        type: 'input',
      
        placeholder: 'Input Posting Time',
      
        options: '',
      },{
        key: 'editPostingDateAndTime',
      
        label: 'Edit Posting Date And Time',
      
        type: 'input',
      
        placeholder: 'Input Edit Posting Date And Time',
      
        options: '',
      },{
        key: 'paymentDueDate',
      
        label: 'Payment Due Date',
      
        type: 'input',
      
        placeholder: 'Input Payment Due Date',
      
        options: '',
      },{
        key: 'amendedFrom',
      
        label: 'Amended From',
      
        type: 'select',
      
        placeholder: 'Input Amended From',
      
        options: '',
      },{
        key: 'returns',
      
        label: 'Returns',
      
        type: 'input',
      
        placeholder: 'Input Returns',
      
        options: '',
      },{
        key: 'returnAgainstSalesInvoice',
      
        label: 'Return Against Sales Invoice',
      
        type: 'select',
      
        placeholder: 'Input Return Against Sales Invoice',
      
        options: '',
      },{
        key: '',
      
        label: '',
      
        type: 'input',
      
        placeholder: 'Input ',
      
        options: '',
      },{
        key: 'updateBilledAmountInSalesOrder',
      
        label: 'Update Billed Amount In Sales Order',
      
        type: 'input',
      
        placeholder: 'Input Update Billed Amount In Sales Order',
      
        options: '',
      },{
        key: 'customerPoDetails',
      
        label: 'Customer Po Details',
      
        type: 'input',
      
        placeholder: 'Input Customer Po Details',
      
        options: '',
      },{
        key: 'customerSPurchaseOrder',
      
        label: 'Customer S Purchase Order',
      
        type: 'input',
      
        placeholder: 'Input Customer S Purchase Order',
      
        options: '',
      },{
        key: '',
      
        label: '',
      
        type: 'input',
      
        placeholder: 'Input ',
      
        options: '',
      },{
        key: 'customerSPurchaseOrderDate',
      
        label: 'Customer S Purchase Order Date',
      
        type: 'input',
      
        placeholder: 'Input Customer S Purchase Order Date',
      
        options: '',
      },{
        key: 'addressAndContact',
      
        label: 'Address And Contact',
      
        type: 'input',
      
        placeholder: 'Input Address And Contact',
      
        options: '',
      },{
        key: 'customerAddress',
      
        label: 'Customer Address',
      
        type: 'select',
      
        placeholder: 'Input Customer Address',
      
        options: '',
      },{
        key: 'address',
      
        label: 'Address',
      
        type: 'input',
      
        placeholder: 'Input Address',
      
        options: '',
      },{
        key: 'contactPerson',
      
        label: 'Contact Person',
      
        type: 'select',
      
        placeholder: 'Input Contact Person',
      
        options: '',
      },{
        key: 'contact',
      
        label: 'Contact',
      
        type: 'input',
      
        placeholder: 'Input Contact',
      
        options: '',
      },{
        key: 'mobileNo',
      
        label: 'Mobile No',
      
        type: 'input',
      
        placeholder: 'Input Mobile No',
      
        options: '',
      },{
        key: 'contactEmail',
      
        label: 'Contact Email',
      
        type: 'select',
      
        placeholder: 'Input Contact Email',
      
        options: '',
      },{
        key: 'territory',
      
        label: 'Territory',
      
        type: 'select',
      
        placeholder: 'Input Territory',
      
        options: '',
      },{
        key: '',
      
        label: '',
      
        type: 'input',
      
        placeholder: 'Input ',
      
        options: '',
      },{
        key: 'shippingAddressName',
      
        label: 'Shipping Address Name',
      
        type: 'select',
      
        placeholder: 'Input Shipping Address Name',
      
        options: '',
      },{
        key: 'shippingAddress',
      
        label: 'Shipping Address',
      
        type: 'input',
      
        placeholder: 'Input Shipping Address',
      
        options: '',
      },{
        key: 'companyAddressName',
      
        label: 'Company Address Name',
      
        type: 'select',
      
        placeholder: 'Input Company Address Name',
      
        options: '',
      },{
        key: 'companyAddress',
      
        label: 'Company Address',
      
        type: 'input',
      
        placeholder: 'Input Company Address',
      
        options: '',
      },{
        key: 'currencyAndPriceList',
      
        label: 'Currency And Price List',
      
        type: 'input',
      
        placeholder: 'Input Currency And Price List',
      
        options: '',
      },{
        key: 'currency',
      
        label: 'Currency',
      
        type: 'select',
      
        placeholder: 'Input Currency',
      
        options: '',
      },{
        key: 'exchangeRate',
      
        label: 'Exchange Rate',
      
        type: 'input',
      
        placeholder: 'Input Exchange Rate',
      
        options: '',
      },{
        key: '',
      
        label: '',
      
        type: 'input',
      
        placeholder: 'Input ',
      
        options: '',
      },{
        key: 'priceList',
      
        label: 'Price List',
      
        type: 'select',
      
        placeholder: 'Input Price List',
      
        options: '',
      },{
        key: 'priceListCurrency',
      
        label: 'Price List Currency',
      
        type: 'select',
      
        placeholder: 'Input Price List Currency',
      
        options: '',
      },{
        key: 'priceListExchangeRate',
      
        label: 'Price List Exchange Rate',
      
        type: 'input',
      
        placeholder: 'Input Price List Exchange Rate',
      
        options: '',
      },{
        key: 'ignorePricingRule',
      
        label: 'Ignore Pricing Rule',
      
        type: 'input',
      
        placeholder: 'Input Ignore Pricing Rule',
      
        options: '',
      },{
        key: '',
      
        label: '',
      
        type: 'input',
      
        placeholder: 'Input ',
      
        options: '',
      },{
        key: 'setSourceWarehouse',
      
        label: 'Set Source Warehouse',
      
        type: 'select',
      
        placeholder: 'Input Set Source Warehouse',
      
        options: '',
      },{
        key: '',
      
        label: '',
      
        type: 'select',
      
        placeholder: 'Input ',
      
        options: '',
      },{
        key: 'updateStock',
      
        label: 'Update Stock',
      
        type: 'input',
      
        placeholder: 'Input Update Stock',
      
        options: '',
      },{
        key: 'scanBarcode',
      
        label: 'Scan Barcode',
      
        type: 'input',
      
        placeholder: 'Input Scan Barcode',
      
        options: '',
      },{
        key: 'items',
      
        label: 'Items',
      
        type: 'select',
      
        placeholder: 'Input Items',
      
        options: '',
      },{
        key: 'packingList',
      
        label: 'Packing List',
      
        type: 'select',
      
        placeholder: 'Input Packing List',
      
        options: '',
      },{
        key: 'packedItems',
      
        label: 'Packed Items',
      
        type: 'select',
      
        placeholder: 'Input Packed Items',
      
        options: '',
      },{
        key: 'productBundleHelp',
      
        label: 'Product Bundle Help',
      
        type: 'input',
      
        placeholder: 'Input Product Bundle Help',
      
        options: '',
      },{
        key: 'timeSheetList',
      
        label: 'Time Sheet List',
      
        type: 'input',
      
        placeholder: 'Input Time Sheet List',
      
        options: '',
      },{
        key: 'timeSheets',
      
        label: 'Time Sheets',
      
        type: 'select',
      
        placeholder: 'Input Time Sheets',
      
        options: '',
      },{
        key: 'totalBillingAmount',
      
        label: 'Total Billing Amount',
      
        type: 'input',
      
        placeholder: 'Input Total Billing Amount',
      
        options: '',
      },{
        key: '',
      
        label: '',
      
        type: 'input',
      
        placeholder: 'Input ',
      
        options: '',
      },{
        key: 'totalQuantity',
      
        label: 'Total Quantity',
      
        type: 'input',
      
        placeholder: 'Input Total Quantity',
      
        options: '',
      },{
        key: 'totalCompanyCurrency',
      
        label: 'Total Company Currency',
      
        type: 'select',
      
        placeholder: 'Input Total Company Currency',
      
        options: '',
      },{
        key: 'netTotalCompanyCurrency',
      
        label: 'Net Total Company Currency',
      
        type: 'select',
      
        placeholder: 'Input Net Total Company Currency',
      
        options: '',
      },{
        key: '',
      
        label: '',
      
        type: 'input',
      
        placeholder: 'Input ',
      
        options: '',
      },{
        key: 'total',
      
        label: 'Total',
      
        type: 'select',
      
        placeholder: 'Input Total',
      
        options: '',
      },{
        key: 'netTotal',
      
        label: 'Net Total',
      
        type: 'select',
      
        placeholder: 'Input Net Total',
      
        options: '',
      },{
        key: 'totalNetWeight',
      
        label: 'Total Net Weight',
      
        type: 'input',
      
        placeholder: 'Input Total Net Weight',
      
        options: '',
      },{
        key: '',
      
        label: '',
      
        type: 'select',
      
        placeholder: 'Input ',
      
        options: '',
      },{
        key: 'taxCategory',
      
        label: 'Tax Category',
      
        type: 'select',
      
        placeholder: 'Input Tax Category',
      
        options: '',
      },{
        key: '',
      
        label: '',
      
        type: 'input',
      
        placeholder: 'Input ',
      
        options: '',
      },{
        key: 'shippingRule',
      
        label: 'Shipping Rule',
      
        type: 'select',
      
        placeholder: 'Input Shipping Rule',
      
        options: '',
      },{
        key: '',
      
        label: '',
      
        type: 'input',
      
        placeholder: 'Input ',
      
        options: '',
      },{
        key: 'salesTaxesAndChargesTemplate',
      
        label: 'Sales Taxes And Charges Template',
      
        type: 'select',
      
        placeholder: 'Input Sales Taxes And Charges Template',
      
        options: '',
      },{
        key: 'salesTaxesAndCharges',
      
        label: 'Sales Taxes And Charges',
      
        type: 'select',
      
        placeholder: 'Input Sales Taxes And Charges',
      
        options: '',
      },{
        key: 'taxBreakup',
      
        label: 'Tax Breakup',
      
        type: 'input',
      
        placeholder: 'Input Tax Breakup',
      
        options: '',
      },{
        key: 'taxesAndChargesCalculation',
      
        label: 'Taxes And Charges Calculation',
      
        type: 'input',
      
        placeholder: 'Input Taxes And Charges Calculation',
      
        options: '',
      },{
        key: '',
      
        label: '',
      
        type: 'input',
      
        placeholder: 'Input ',
      
        options: '',
      },{
        key: 'totalTaxesAndChargesCompanyCurrency',
      
        label: 'Total Taxes And Charges Company Currency',
      
        type: 'select',
      
        placeholder: 'Input Total Taxes And Charges Company Currency',
      
        options: '',
      },{
        key: '',
      
        label: '',
      
        type: 'input',
      
        placeholder: 'Input ',
      
        options: '',
      },{
        key: 'totalTaxesAndCharges',
      
        label: 'Total Taxes And Charges',
      
        type: 'select',
      
        placeholder: 'Input Total Taxes And Charges',
      
        options: '',
      },{
        key: 'loyaltyPointsRedemption',
      
        label: 'Loyalty Points Redemption',
      
        type: 'input',
      
        placeholder: 'Input Loyalty Points Redemption',
      
        options: '',
      },{
        key: 'loyaltyPoints',
      
        label: 'Loyalty Points',
      
        type: 'input',
      
        placeholder: 'Input Loyalty Points',
      
        options: '',
      },{
        key: 'loyaltyAmount',
      
        label: 'Loyalty Amount',
      
        type: 'select',
      
        placeholder: 'Input Loyalty Amount',
      
        options: '',
      },{
        key: 'redeemLoyaltyPoints',
      
        label: 'Redeem Loyalty Points',
      
        type: 'input',
      
        placeholder: 'Input Redeem Loyalty Points',
      
        options: '',
      },{
        key: '',
      
        label: '',
      
        type: 'input',
      
        placeholder: 'Input ',
      
        options: '',
      },{
        key: 'loyaltyProgram',
      
        label: 'Loyalty Program',
      
        type: 'select',
      
        placeholder: 'Input Loyalty Program',
      
        options: '',
      },{
        key: 'redemptionAccount',
      
        label: 'Redemption Account',
      
        type: 'select',
      
        placeholder: 'Input Redemption Account',
      
        options: '',
      },{
        key: 'redemptionCostCenter',
      
        label: 'Redemption Cost Center',
      
        type: 'select',
      
        placeholder: 'Input Redemption Cost Center',
      
        options: '',
      },{
        key: 'additionalDiscount',
      
        label: 'Additional Discount',
      
        type: 'input',
      
        placeholder: 'Input Additional Discount',
      
        options: '',
      },{
        key: 'applyAdditionalDiscountOn',
      
        label: 'Apply Additional Discount On',
      
        type: 'select',
      
        placeholder: 'Input Apply Additional Discount On',
      
        options: '[object Object],[object Object]',
      },{
        key: 'additionalDiscountAmountCompanyCurrency',
      
        label: 'Additional Discount Amount Company Currency',
      
        type: 'select',
      
        placeholder: 'Input Additional Discount Amount Company Currency',
      
        options: '',
      },{
        key: '',
      
        label: '',
      
        type: 'input',
      
        placeholder: 'Input ',
      
        options: '',
      },{
        key: 'additionalDiscountPercentage',
      
        label: 'Additional Discount Percentage',
      
        type: 'input',
      
        placeholder: 'Input Additional Discount Percentage',
      
        options: '',
      },{
        key: 'additionalDiscountAmount',
      
        label: 'Additional Discount Amount',
      
        type: 'select',
      
        placeholder: 'Input Additional Discount Amount',
      
        options: '',
      },{
        key: '',
      
        label: '',
      
        type: 'select',
      
        placeholder: 'Input ',
      
        options: '',
      },{
        key: 'grandTotalCompanyCurrency',
      
        label: 'Grand Total Company Currency',
      
        type: 'select',
      
        placeholder: 'Input Grand Total Company Currency',
      
        options: '',
      },{
        key: 'roundingAdjustmentCompanyCurrency',
      
        label: 'Rounding Adjustment Company Currency',
      
        type: 'select',
      
        placeholder: 'Input Rounding Adjustment Company Currency',
      
        options: '',
      },{
        key: 'roundedTotalCompanyCurrency',
      
        label: 'Rounded Total Company Currency',
      
        type: 'select',
      
        placeholder: 'Input Rounded Total Company Currency',
      
        options: '',
      },{
        key: 'inWordsCompanyCurrency',
      
        label: 'In Words Company Currency',
      
        type: 'input',
      
        placeholder: 'Input In Words Company Currency',
      
        options: '',
      },{
        key: '',
      
        label: '',
      
        type: 'input',
      
        placeholder: 'Input ',
      
        options: '',
      },{
        key: 'grandTotal',
      
        label: 'Grand Total',
      
        type: 'select',
      
        placeholder: 'Input Grand Total',
      
        options: '',
      },{
        key: 'roundingAdjustment',
      
        label: 'Rounding Adjustment',
      
        type: 'select',
      
        placeholder: 'Input Rounding Adjustment',
      
        options: '',
      },{
        key: 'roundedTotal',
      
        label: 'Rounded Total',
      
        type: 'select',
      
        placeholder: 'Input Rounded Total',
      
        options: '',
      },{
        key: 'inWords',
      
        label: 'In Words',
      
        type: 'input',
      
        placeholder: 'Input In Words',
      
        options: '',
      },{
        key: 'totalAdvance',
      
        label: 'Total Advance',
      
        type: 'select',
      
        placeholder: 'Input Total Advance',
      
        options: '',
      },{
        key: 'outstandingAmount',
      
        label: 'Outstanding Amount',
      
        type: 'select',
      
        placeholder: 'Input Outstanding Amount',
      
        options: '',
      },{
        key: 'advancePayments',
      
        label: 'Advance Payments',
      
        type: 'select',
      
        placeholder: 'Input Advance Payments',
      
        options: '',
      },{
        key: 'allocateAdvancesAutomaticallyFifo',
      
        label: 'Allocate Advances Automatically Fifo',
      
        type: 'input',
      
        placeholder: 'Input Allocate Advances Automatically Fifo',
      
        options: '',
      },{
        key: 'getAdvancesReceived',
      
        label: 'Get Advances Received',
      
        type: 'select',
      
        placeholder: 'Input Get Advances Received',
      
        options: '',
      },{
        key: 'advances',
      
        label: 'Advances',
      
        type: 'select',
      
        placeholder: 'Input Advances',
      
        options: '',
      },{
        key: 'paymentTerms',
      
        label: 'Payment Terms',
      
        type: 'input',
      
        placeholder: 'Input Payment Terms',
      
        options: '',
      },{
        key: 'paymentTermsTemplate',
      
        label: 'Payment Terms Template',
      
        type: 'select',
      
        placeholder: 'Input Payment Terms Template',
      
        options: '',
      },{
        key: 'paymentSchedule',
      
        label: 'Payment Schedule',
      
        type: 'select',
      
        placeholder: 'Input Payment Schedule',
      
        options: '',
      },{
        key: 'payments',
      
        label: 'Payments',
      
        type: 'select',
      
        placeholder: 'Input Payments',
      
        options: '',
      },{
        key: 'cashBankAccount',
      
        label: 'Cash Bank Account',
      
        type: 'select',
      
        placeholder: 'Input Cash Bank Account',
      
        options: '',
      },{
        key: 'salesInvoicePayment',
      
        label: 'Sales Invoice Payment',
      
        type: 'select',
      
        placeholder: 'Input Sales Invoice Payment',
      
        options: '',
      },{
        key: '',
      
        label: '',
      
        type: 'input',
      
        placeholder: 'Input ',
      
        options: '',
      },{
        key: 'paidAmountCompanyCurrency',
      
        label: 'Paid Amount Company Currency',
      
        type: 'select',
      
        placeholder: 'Input Paid Amount Company Currency',
      
        options: '',
      },{
        key: '',
      
        label: '',
      
        type: 'input',
      
        placeholder: 'Input ',
      
        options: '',
      },{
        key: 'paidAmount',
      
        label: 'Paid Amount',
      
        type: 'select',
      
        placeholder: 'Input Paid Amount',
      
        options: '',
      },{
        key: '',
      
        label: '',
      
        type: 'input',
      
        placeholder: 'Input ',
      
        options: '',
      },{
        key: 'baseChangeAmountCompanyCurrency',
      
        label: 'Base Change Amount Company Currency',
      
        type: 'select',
      
        placeholder: 'Input Base Change Amount Company Currency',
      
        options: '',
      },{
        key: '',
      
        label: '',
      
        type: 'input',
      
        placeholder: 'Input ',
      
        options: '',
      },{
        key: 'changeAmount',
      
        label: 'Change Amount',
      
        type: 'select',
      
        placeholder: 'Input Change Amount',
      
        options: '',
      },{
        key: 'accountForChangeAmount',
      
        label: 'Account For Change Amount',
      
        type: 'select',
      
        placeholder: 'Input Account For Change Amount',
      
        options: '',
      },{
        key: 'writeOff',
      
        label: 'Write Off',
      
        type: 'input',
      
        placeholder: 'Input Write Off',
      
        options: '',
      },{
        key: 'writeOffAmount',
      
        label: 'Write Off Amount',
      
        type: 'select',
      
        placeholder: 'Input Write Off Amount',
      
        options: '',
      },{
        key: 'writeOffAmountCompanyCurrency',
      
        label: 'Write Off Amount Company Currency',
      
        type: 'select',
      
        placeholder: 'Input Write Off Amount Company Currency',
      
        options: '',
      },{
        key: 'writeOffOutstandingAmount',
      
        label: 'Write Off Outstanding Amount',
      
        type: 'input',
      
        placeholder: 'Input Write Off Outstanding Amount',
      
        options: '',
      },{
        key: '',
      
        label: '',
      
        type: 'input',
      
        placeholder: 'Input ',
      
        options: '',
      },{
        key: 'writeOffAccount',
      
        label: 'Write Off Account',
      
        type: 'select',
      
        placeholder: 'Input Write Off Account',
      
        options: '',
      },{
        key: 'writeOffCostCenter',
      
        label: 'Write Off Cost Center',
      
        type: 'select',
      
        placeholder: 'Input Write Off Cost Center',
      
        options: '',
      },{
        key: 'terms',
      
        label: 'Terms',
      
        type: 'input',
      
        placeholder: 'Input Terms',
      
        options: '',
      },{
        key: 'terms',
      
        label: 'Terms',
      
        type: 'select',
      
        placeholder: 'Input Terms',
      
        options: '',
      },{
        key: 'termsAndConditionsDetails',
      
        label: 'Terms And Conditions Details',
      
        type: 'input',
      
        placeholder: 'Input Terms And Conditions Details',
      
        options: '',
      },{
        key: 'printingSettings',
      
        label: 'Printing Settings',
      
        type: 'input',
      
        placeholder: 'Input Printing Settings',
      
        options: '',
      },{
        key: 'letterHead',
      
        label: 'Letter Head',
      
        type: 'select',
      
        placeholder: 'Input Letter Head',
      
        options: '',
      },{
        key: 'groupSameItems',
      
        label: 'Group Same Items',
      
        type: 'input',
      
        placeholder: 'Input Group Same Items',
      
        options: '',
      },{
        key: 'printLanguage',
      
        label: 'Print Language',
      
        type: 'input',
      
        placeholder: 'Input Print Language',
      
        options: '',
      },{
        key: '',
      
        label: '',
      
        type: 'input',
      
        placeholder: 'Input ',
      
        options: '',
      },{
        key: 'printHeading',
      
        label: 'Print Heading',
      
        type: 'select',
      
        placeholder: 'Input Print Heading',
      
        options: '',
      },{
        key: 'moreInformation',
      
        label: 'More Information',
      
        type: 'input',
      
        placeholder: 'Input More Information',
      
        options: '',
      },{
        key: 'interCompanyInvoiceReference',
      
        label: 'Inter Company Invoice Reference',
      
        type: 'select',
      
        placeholder: 'Input Inter Company Invoice Reference',
      
        options: '',
      },{
        key: 'customerGroup',
      
        label: 'Customer Group',
      
        type: 'select',
      
        placeholder: 'Input Customer Group',
      
        options: '',
      },{
        key: 'campaign',
      
        label: 'Campaign',
      
        type: 'select',
      
        placeholder: 'Input Campaign',
      
        options: '',
      },{
        key: '',
      
        label: '',
      
        type: 'input',
      
        placeholder: 'Input ',
      
        options: '',
      },{
        key: 'status',
      
        label: 'Status',
      
        type: 'select',
      
        placeholder: 'Input Status',
      
        options: '[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object]',
      },{
        key: 'source',
      
        label: 'Source',
      
        type: 'select',
      
        placeholder: 'Input Source',
      
        options: '',
      },{
        key: 'accountingDetails',
      
        label: 'Accounting Details',
      
        type: 'select',
      
        placeholder: 'Input Accounting Details',
      
        options: '',
      },{
        key: 'debitTo',
      
        label: 'Debit To',
      
        type: 'select',
      
        placeholder: 'Input Debit To',
      
        options: '',
      },{
        key: 'partyAccountCurrency',
      
        label: 'Party Account Currency',
      
        type: 'select',
      
        placeholder: 'Input Party Account Currency',
      
        options: '',
      },{
        key: 'isOpeningEntry',
      
        label: 'Is Opening Entry',
      
        type: 'select',
      
        placeholder: 'Input Is Opening Entry',
      
        options: '[object Object]',
      },{
        key: 'cFormApplicable',
      
        label: 'C Form Applicable',
      
        type: 'select',
      
        placeholder: 'Input C Form Applicable',
      
        options: '[object Object]',
      },{
        key: 'cFormNo',
      
        label: 'C Form No',
      
        type: 'select',
      
        placeholder: 'Input C Form No',
      
        options: '',
      },{
        key: '',
      
        label: '',
      
        type: 'input',
      
        placeholder: 'Input ',
      
        options: '',
      },{
        key: 'remarks',
      
        label: 'Remarks',
      
        type: 'input',
      
        placeholder: 'Input Remarks',
      
        options: '',
      },{
        key: 'commission',
      
        label: 'Commission',
      
        type: 'select',
      
        placeholder: 'Input Commission',
      
        options: '',
      },{
        key: 'salesPartner',
      
        label: 'Sales Partner',
      
        type: 'select',
      
        placeholder: 'Input Sales Partner',
      
        options: '',
      },{
        key: '',
      
        label: '',
      
        type: 'input',
      
        placeholder: 'Input ',
      
        options: '',
      },{
        key: 'commissionRate',
      
        label: 'Commission Rate',
      
        type: 'input',
      
        placeholder: 'Input Commission Rate',
      
        options: '',
      },{
        key: 'totalCommission',
      
        label: 'Total Commission',
      
        type: 'select',
      
        placeholder: 'Input Total Commission',
      
        options: '',
      },{
        key: 'salesTeam',
      
        label: 'Sales Team',
      
        type: 'input',
      
        placeholder: 'Input Sales Team',
      
        options: '',
      },{
        key: 'salesTeam1',
      
        label: 'Sales Team1',
      
        type: 'select',
      
        placeholder: 'Input Sales Team1',
      
        options: '',
      },{
        key: 'subscriptionSection',
      
        label: 'Subscription Section',
      
        type: 'input',
      
        placeholder: 'Input Subscription Section',
      
        options: '',
      },{
        key: 'fromDate',
      
        label: 'From Date',
      
        type: 'input',
      
        placeholder: 'Input From Date',
      
        options: '',
      },{
        key: 'toDate',
      
        label: 'To Date',
      
        type: 'input',
      
        placeholder: 'Input To Date',
      
        options: '',
      },{
        key: '',
      
        label: '',
      
        type: 'input',
      
        placeholder: 'Input ',
      
        options: '',
      },{
        key: 'autoRepeat',
      
        label: 'Auto Repeat',
      
        type: 'select',
      
        placeholder: 'Input Auto Repeat',
      
        options: '',
      },{
        key: 'updateAutoRepeatReference',
      
        label: 'Update Auto Repeat Reference',
      
        type: 'input',
      
        placeholder: 'Input Update Auto Repeat Reference',
      
        options: '',
      },{
        key: 'againstIncomeAccount',
      
        label: 'Against Income Account',
      
        type: 'input',
      
        placeholder: 'Input Against Income Account',
      
        options: '',
      },{
        key: 'totalQty',
      
        label: 'Total Qty',
      
        type: 'input',
      
        placeholder: 'Input Total Qty',
      
        options: '',
      },
    ]
  };
} 
