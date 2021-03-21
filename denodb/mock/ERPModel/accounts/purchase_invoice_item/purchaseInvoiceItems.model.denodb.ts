// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: PurchaseInvoiceItem
|--------------------------------------------------------------------------
|
| Model Class and Interface of purchaseInvoiceItems
|
*/
import {
  DataTypes,
  Model
} from "https://deno.land/x/denodb/mod.ts";
import {
  ModelFields,
} from "https://deno.land/x/denodb/lib/model.ts";


export class PurchaseInvoiceItem extends Model { 
  static table = "purchaseInvoiceItems";
  static timestamps = true;
  
  static fields: ModelFields = {
    // fields list for ORM Maping
    id: { primaryKey: true, autoIncrement: true },
    item: DataTypes.STRING,
    itemName: DataTypes.STRING,
    description: DataTypes.STRING,
    image: DataTypes.STRING,
    imageView: DataTypes.STRING,
    quantityAndRate: DataTypes.STRING,
    receivedQty: DataTypes.STRING,
    acceptedQty: DataTypes.STRING,
    rejectedQty: DataTypes.STRING,
    stockUom: DataTypes.STRING,
    uom: DataTypes.STRING,
    uomConversionFactor: DataTypes.STRING,
    stockQty: DataTypes.STRING,
    priceListRate: DataTypes.STRING,
    discountOnPriceListRate: DataTypes.STRING,
    discountAmount: DataTypes.STRING,
    priceListRateCompanyCurrency: DataTypes.STRING,
    rate: DataTypes.STRING,
    amount: DataTypes.STRING,
    rateCompanyCurrency: DataTypes.STRING,
    amountCompanyCurrency: DataTypes.STRING,
    pricingRule: DataTypes.STRING,
    netRate: DataTypes.STRING,
    netAmount: DataTypes.STRING,
    netRateCompanyCurrency: DataTypes.STRING,
    netAmountCompanyCurrency: DataTypes.STRING,
    itemWeightDetails: DataTypes.STRING,
    weightPerUnit: DataTypes.STRING,
    totalWeight: DataTypes.STRING,
    weightUom: DataTypes.STRING,
    warehouse: DataTypes.STRING,
    acceptedWarehouse: DataTypes.STRING,
    rejectedWarehouse: DataTypes.STRING,
    qualityInspection: DataTypes.STRING,
    batchNo: DataTypes.STRING,
    serialNo: DataTypes.STRING,
    rejectedSerialNo: DataTypes.STRING,
    accounting: DataTypes.STRING,
    expenseHead: DataTypes.STRING,
    itemTaxTemplate: DataTypes.STRING,
    project: DataTypes.STRING,
    costCenter: DataTypes.STRING,
    deferredExpense: DataTypes.STRING,
    deferredExpenseAccount: DataTypes.STRING,
    serviceStopDate: DataTypes.STRING,
    enableDeferredExpense: DataTypes.STRING,
    serviceStartDate: DataTypes.STRING,
    serviceEndDate: DataTypes.STRING,
    reference: DataTypes.STRING,
    allowZeroValuationRate: DataTypes.STRING,
    brand: DataTypes.STRING,
    itemGroup: DataTypes.STRING,
    itemTaxRate: DataTypes.STRING,
    itemTaxAmount: DataTypes.STRING,
    purchaseOrder: DataTypes.STRING,
    bom: DataTypes.STRING,
    includeExplodedItems: DataTypes.STRING,
    isFixedAsset: DataTypes.STRING,
    asset: DataTypes.STRING,
    assetLocation: DataTypes.STRING,
    purchaseOrderItem: DataTypes.STRING,
    purchaseReceipt: DataTypes.STRING,
    pageBreak: DataTypes.STRING,
    prDetail: DataTypes.STRING,
    valuationRate: DataTypes.STRING,
    rawMaterialsSuppliedCost: DataTypes.STRING,
    landedCostVoucherAmount: DataTypes.STRING,
    
  };

  static meta = {
    // field meta information for UI render
    fieldProperty: [
      {
        key: 'item',
        label: 'Item',
        type: 'select',
        placeholder: 'Input Item',
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
        key: 'itemName',
        label: 'Item Name',
        type: 'input',
        placeholder: 'Input Item Name',
        options: '',
        
      },
      {
        key: 'description',
        label: 'Description',
        type: 'input',
        placeholder: 'Input Description',
        options: '',
        
      },
      {
        key: 'image',
        label: 'Image',
        type: 'input',
        placeholder: 'Input Image',
        options: '',
        
      },
      {
        key: 'imageView',
        label: 'Image View',
        type: 'select',
        placeholder: 'Input Image View',
        options: '',
        
      },
      {
        key: 'quantityAndRate',
        label: 'Quantity And Rate',
        type: 'input',
        placeholder: 'Input Quantity And Rate',
        options: '',
        
      },
      {
        key: 'receivedQty',
        label: 'Received Qty',
        type: 'input',
        placeholder: 'Input Received Qty',
        options: '',
        
      },
      {
        key: 'acceptedQty',
        label: 'Accepted Qty',
        type: 'input',
        placeholder: 'Input Accepted Qty',
        options: '',
        
      },
      {
        key: 'rejectedQty',
        label: 'Rejected Qty',
        type: 'input',
        placeholder: 'Input Rejected Qty',
        options: '',
        
      },
      {
        key: 'stockUom',
        label: 'Stock Uom',
        type: 'select',
        placeholder: 'Input Stock Uom',
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
        key: 'uom',
        label: 'Uom',
        type: 'select',
        placeholder: 'Input Uom',
        options: '',
        
      },
      {
        key: 'uomConversionFactor',
        label: 'Uom Conversion Factor',
        type: 'input',
        placeholder: 'Input Uom Conversion Factor',
        options: '',
        
      },
      {
        key: 'stockQty',
        label: 'Stock Qty',
        type: 'input',
        placeholder: 'Input Stock Qty',
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
        key: 'priceListRate',
        label: 'Price List Rate',
        type: 'select',
        placeholder: 'Input Price List Rate',
        options: '',
        
      },
      {
        key: 'discountOnPriceListRate',
        label: 'Discount On Price List Rate',
        type: 'input',
        placeholder: 'Input Discount On Price List Rate',
        options: '',
        
      },
      {
        key: 'discountAmount',
        label: 'Discount Amount',
        type: 'select',
        placeholder: 'Input Discount Amount',
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
        key: 'priceListRateCompanyCurrency',
        label: 'Price List Rate Company Currency',
        type: 'select',
        placeholder: 'Input Price List Rate Company Currency',
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
        key: 'rate',
        label: 'Rate',
        type: 'select',
        placeholder: 'Input Rate',
        options: '',
        
      },
      {
        key: 'amount',
        label: 'Amount',
        type: 'select',
        placeholder: 'Input Amount',
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
        key: 'rateCompanyCurrency',
        label: 'Rate Company Currency',
        type: 'select',
        placeholder: 'Input Rate Company Currency',
        options: '',
        
      },
      {
        key: 'amountCompanyCurrency',
        label: 'Amount Company Currency',
        type: 'select',
        placeholder: 'Input Amount Company Currency',
        options: '',
        
      },
      {
        key: 'pricingRule',
        label: 'Pricing Rule',
        type: 'select',
        placeholder: 'Input Pricing Rule',
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
        key: 'netRate',
        label: 'Net Rate',
        type: 'select',
        placeholder: 'Input Net Rate',
        options: '',
        
      },
      {
        key: 'netAmount',
        label: 'Net Amount',
        type: 'select',
        placeholder: 'Input Net Amount',
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
        key: 'netRateCompanyCurrency',
        label: 'Net Rate Company Currency',
        type: 'select',
        placeholder: 'Input Net Rate Company Currency',
        options: '',
        
      },
      {
        key: 'netAmountCompanyCurrency',
        label: 'Net Amount Company Currency',
        type: 'select',
        placeholder: 'Input Net Amount Company Currency',
        options: '',
        
      },
      {
        key: 'itemWeightDetails',
        label: 'Item Weight Details',
        type: 'input',
        placeholder: 'Input Item Weight Details',
        options: '',
        
      },
      {
        key: 'weightPerUnit',
        label: 'Weight Per Unit',
        type: 'input',
        placeholder: 'Input Weight Per Unit',
        options: '',
        
      },
      {
        key: 'totalWeight',
        label: 'Total Weight',
        type: 'input',
        placeholder: 'Input Total Weight',
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
        key: 'weightUom',
        label: 'Weight Uom',
        type: 'select',
        placeholder: 'Input Weight Uom',
        options: '',
        
      },
      {
        key: 'warehouse',
        label: 'Warehouse',
        type: 'input',
        placeholder: 'Input Warehouse',
        options: '',
        
      },
      {
        key: 'acceptedWarehouse',
        label: 'Accepted Warehouse',
        type: 'select',
        placeholder: 'Input Accepted Warehouse',
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
        key: 'qualityInspection',
        label: 'Quality Inspection',
        type: 'select',
        placeholder: 'Input Quality Inspection',
        options: '',
        
      },
      {
        key: 'batchNo',
        label: 'Batch No',
        type: 'select',
        placeholder: 'Input Batch No',
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
        key: 'serialNo',
        label: 'Serial No',
        type: 'input',
        placeholder: 'Input Serial No',
        options: '',
        
      },
      {
        key: 'rejectedSerialNo',
        label: 'Rejected Serial No',
        type: 'input',
        placeholder: 'Input Rejected Serial No',
        options: '',
        
      },
      {
        key: 'accounting',
        label: 'Accounting',
        type: 'input',
        placeholder: 'Input Accounting',
        options: '',
        
      },
      {
        key: 'expenseHead',
        label: 'Expense Head',
        type: 'select',
        placeholder: 'Input Expense Head',
        options: '',
        
      },
      {
        key: 'itemTaxTemplate',
        label: 'Item Tax Template',
        type: 'select',
        placeholder: 'Input Item Tax Template',
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
        key: 'project',
        label: 'Project',
        type: 'select',
        placeholder: 'Input Project',
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
        key: 'deferredExpense',
        label: 'Deferred Expense',
        type: 'input',
        placeholder: 'Input Deferred Expense',
        options: '',
        
      },
      {
        key: 'deferredExpenseAccount',
        label: 'Deferred Expense Account',
        type: 'select',
        placeholder: 'Input Deferred Expense Account',
        options: '',
        
      },
      {
        key: 'serviceStopDate',
        label: 'Service Stop Date',
        type: 'input',
        placeholder: 'Input Service Stop Date',
        options: '',
        
      },
      {
        key: 'enableDeferredExpense',
        label: 'Enable Deferred Expense',
        type: 'input',
        placeholder: 'Input Enable Deferred Expense',
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
        key: 'serviceStartDate',
        label: 'Service Start Date',
        type: 'input',
        placeholder: 'Input Service Start Date',
        options: '',
        
      },
      {
        key: 'serviceEndDate',
        label: 'Service End Date',
        type: 'input',
        placeholder: 'Input Service End Date',
        options: '',
        
      },
      {
        key: 'reference',
        label: 'Reference',
        type: 'input',
        placeholder: 'Input Reference',
        options: '',
        
      },
      {
        key: 'allowZeroValuationRate',
        label: 'Allow Zero Valuation Rate',
        type: 'input',
        placeholder: 'Input Allow Zero Valuation Rate',
        options: '',
        
      },
      {
        key: 'brand',
        label: 'Brand',
        type: 'input',
        placeholder: 'Input Brand',
        options: '',
        
      },
      {
        key: 'itemGroup',
        label: 'Item Group',
        type: 'select',
        placeholder: 'Input Item Group',
        options: '',
        
      },
      {
        key: 'itemTaxRate',
        label: 'Item Tax Rate',
        type: 'input',
        placeholder: 'Input Item Tax Rate',
        options: '',
        
      },
      {
        key: 'itemTaxAmount',
        label: 'Item Tax Amount',
        type: 'select',
        placeholder: 'Input Item Tax Amount',
        options: '',
        
      },
      {
        key: 'purchaseOrder',
        label: 'Purchase Order',
        type: 'select',
        placeholder: 'Input Purchase Order',
        options: '',
        
      },
      {
        key: 'bom',
        label: 'Bom',
        type: 'select',
        placeholder: 'Input Bom',
        options: '',
        
      },
      {
        key: 'includeExplodedItems',
        label: 'Include Exploded Items',
        type: 'input',
        placeholder: 'Input Include Exploded Items',
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
        key: 'isFixedAsset',
        label: 'Is Fixed Asset',
        type: 'input',
        placeholder: 'Input Is Fixed Asset',
        options: '',
        
      },
      {
        key: 'asset',
        label: 'Asset',
        type: 'select',
        placeholder: 'Input Asset',
        options: '',
        
      },
      {
        key: 'assetLocation',
        label: 'Asset Location',
        type: 'select',
        placeholder: 'Input Asset Location',
        options: '',
        
      },
      {
        key: 'purchaseOrderItem',
        label: 'Purchase Order Item',
        type: 'input',
        placeholder: 'Input Purchase Order Item',
        options: '',
        
      },
      {
        key: 'purchaseReceipt',
        label: 'Purchase Receipt',
        type: 'select',
        placeholder: 'Input Purchase Receipt',
        options: '',
        
      },
      {
        key: 'pageBreak',
        label: 'Page Break',
        type: 'input',
        placeholder: 'Input Page Break',
        options: '',
        
      },
      {
        key: 'prDetail',
        label: 'Pr Detail',
        type: 'input',
        placeholder: 'Input Pr Detail',
        options: '',
        
      },
      {
        key: 'valuationRate',
        label: 'Valuation Rate',
        type: 'select',
        placeholder: 'Input Valuation Rate',
        options: '',
        
      },
      {
        key: 'rawMaterialsSuppliedCost',
        label: 'Raw Materials Supplied Cost',
        type: 'select',
        placeholder: 'Input Raw Materials Supplied Cost',
        options: '',
        
      },
      {
        key: 'landedCostVoucherAmount',
        label: 'Landed Cost Voucher Amount',
        type: 'input',
        placeholder: 'Input Landed Cost Voucher Amount',
        options: '',
        
      },
      
    ]
  };
}
