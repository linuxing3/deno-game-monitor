// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: SalesInvoiceItem
|--------------------------------------------------------------------------
|
| Model Class and Interface of salesInvoiceItems
|
*/
import {
  DataTypes,
  Model
} from "https://deno.land/x/denodb/mod.ts";


export class SalesInvoiceItem extends Model { 
  static table = "salesInvoiceItems";
  static timestamps = true;
  
  static fields = {
    // fields list for ORM Maping
    id: { primaryKey: true, autoIncrement: true },
    barcode: DataTypes.STRING,
    item: DataTypes.STRING,
    itemName: DataTypes.STRING,
    customerSItemCode: DataTypes.STRING,
    editDescription: DataTypes.STRING,
    description: DataTypes.STRING,
    imageView: DataTypes.STRING,
    image: DataTypes.STRING,
    quantity: DataTypes.STRING,
    stockUom: DataTypes.STRING,
    uom: DataTypes.STRING,
    uomConversionFactor: DataTypes.STRING,
    qtyAsPerStockUom: DataTypes.STRING,
    priceListRate: DataTypes.STRING,
    priceListRateCompanyCurrency: DataTypes.STRING,
    discountAndMargin: DataTypes.STRING,
    marginType: DataTypes.STRING,
    marginRateOrAmount: DataTypes.STRING,
    rateWithMargin: DataTypes.STRING,
    discountOnPriceListRateWithMargin: DataTypes.STRING,
    discountAmount: DataTypes.STRING,
    rateWithMarginCompanyCurrency: DataTypes.STRING,
    rate: DataTypes.STRING,
    amount: DataTypes.STRING,
    rateCompanyCurrency: DataTypes.STRING,
    amountCompanyCurrency: DataTypes.STRING,
    pricingRule: DataTypes.STRING,
    netRate: DataTypes.STRING,
    netAmount: DataTypes.STRING,
    netRateCompanyCurrency: DataTypes.STRING,
    netAmountCompanyCurrency: DataTypes.STRING,
    dropShip: DataTypes.STRING,
    deliveredBySupplier: DataTypes.STRING,
    accountingDetails: DataTypes.STRING,
    incomeAccount: DataTypes.STRING,
    expenseAccount: DataTypes.STRING,
    itemTaxTemplate: DataTypes.STRING,
    costCenter: DataTypes.STRING,
    deferredRevenue: DataTypes.STRING,
    deferredRevenueAccount: DataTypes.STRING,
    serviceStopDate: DataTypes.STRING,
    enableDeferredRevenue: DataTypes.STRING,
    serviceStartDate: DataTypes.STRING,
    serviceEndDate: DataTypes.STRING,
    itemWeightDetails: DataTypes.STRING,
    weightPerUnit: DataTypes.STRING,
    totalWeight: DataTypes.STRING,
    weightUom: DataTypes.STRING,
    stockDetails: DataTypes.STRING,
    warehouse: DataTypes.STRING,
    customerWarehouseOptional: DataTypes.STRING,
    qualityInspection: DataTypes.STRING,
    batchNo: DataTypes.STRING,
    allowZeroValuationRate: DataTypes.STRING,
    serialNo: DataTypes.STRING,
    itemGroup: DataTypes.STRING,
    brandName: DataTypes.STRING,
    itemTaxRate: DataTypes.STRING,
    availableBatchQtyAtWarehouse: DataTypes.STRING,
    availableQtyAtWarehouse: DataTypes.STRING,
    references: DataTypes.STRING,
    salesOrder: DataTypes.STRING,
    salesOrderItem: DataTypes.STRING,
    deliveryNote: DataTypes.STRING,
    deliveryNoteItem: DataTypes.STRING,
    deliveredQty: DataTypes.STRING,
    isFixedAsset: DataTypes.STRING,
    asset: DataTypes.STRING,
    pageBreak: DataTypes.STRING,
    
  };

}
