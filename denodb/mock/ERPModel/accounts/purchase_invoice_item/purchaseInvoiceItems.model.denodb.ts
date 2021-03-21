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


export class PurchaseInvoiceItem extends Model { 
  static table = "purchaseInvoiceItems";
  static timestamps = true;
  
  static fields = {
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

}
