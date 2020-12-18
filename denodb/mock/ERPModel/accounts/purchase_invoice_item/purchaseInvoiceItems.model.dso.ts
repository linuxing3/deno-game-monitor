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
  BaseModel,
  Field,
  FieldType,
  Model
} from "https://deno.land/x/dso@v1.0.0/mod.ts";

@Model("purchaseInvoiceItems")
export class PurchaseInvoiceItem extends BaseModel { 

  @Field({
    type: FieldType.INT,
    primary: true,
    length: 11,
    autoIncrement: true
  })
  id!: number;

  @Field({ type: FieldType.STRING })
  item!: string;
  
  @Field({ type: FieldType.STRING })
  itemName!: string;
  
  @Field({ type: FieldType.STRING })
  description!: string;
  
  @Field({ type: FieldType.STRING })
  image!: string;
  
  @Field({ type: FieldType.STRING })
  imageView!: string;
  
  @Field({ type: FieldType.STRING })
  quantityAndRate!: string;
  
  @Field({ type: FieldType.STRING })
  receivedQty!: string;
  
  @Field({ type: FieldType.STRING })
  acceptedQty!: string;
  
  @Field({ type: FieldType.STRING })
  rejectedQty!: string;
  
  @Field({ type: FieldType.STRING })
  stockUom!: string;
  
  @Field({ type: FieldType.STRING })
  uom!: string;
  
  @Field({ type: FieldType.STRING })
  uomConversionFactor!: string;
  
  @Field({ type: FieldType.STRING })
  stockQty!: string;
  
  @Field({ type: FieldType.STRING })
  priceListRate!: string;
  
  @Field({ type: FieldType.STRING })
  discountOnPriceListRate!: string;
  
  @Field({ type: FieldType.STRING })
  discountAmount!: string;
  
  @Field({ type: FieldType.STRING })
  priceListRateCompanyCurrency!: string;
  
  @Field({ type: FieldType.STRING })
  rate!: string;
  
  @Field({ type: FieldType.STRING })
  amount!: string;
  
  @Field({ type: FieldType.STRING })
  rateCompanyCurrency!: string;
  
  @Field({ type: FieldType.STRING })
  amountCompanyCurrency!: string;
  
  @Field({ type: FieldType.STRING })
  pricingRule!: string;
  
  @Field({ type: FieldType.STRING })
  netRate!: string;
  
  @Field({ type: FieldType.STRING })
  netAmount!: string;
  
  @Field({ type: FieldType.STRING })
  netRateCompanyCurrency!: string;
  
  @Field({ type: FieldType.STRING })
  netAmountCompanyCurrency!: string;
  
  @Field({ type: FieldType.STRING })
  itemWeightDetails!: string;
  
  @Field({ type: FieldType.STRING })
  weightPerUnit!: string;
  
  @Field({ type: FieldType.STRING })
  totalWeight!: string;
  
  @Field({ type: FieldType.STRING })
  weightUom!: string;
  
  @Field({ type: FieldType.STRING })
  warehouse!: string;
  
  @Field({ type: FieldType.STRING })
  acceptedWarehouse!: string;
  
  @Field({ type: FieldType.STRING })
  rejectedWarehouse!: string;
  
  @Field({ type: FieldType.STRING })
  qualityInspection!: string;
  
  @Field({ type: FieldType.STRING })
  batchNo!: string;
  
  @Field({ type: FieldType.STRING })
  serialNo!: string;
  
  @Field({ type: FieldType.STRING })
  rejectedSerialNo!: string;
  
  @Field({ type: FieldType.STRING })
  accounting!: string;
  
  @Field({ type: FieldType.STRING })
  expenseHead!: string;
  
  @Field({ type: FieldType.STRING })
  itemTaxTemplate!: string;
  
  @Field({ type: FieldType.STRING })
  project!: string;
  
  @Field({ type: FieldType.STRING })
  costCenter!: string;
  
  @Field({ type: FieldType.STRING })
  deferredExpense!: string;
  
  @Field({ type: FieldType.STRING })
  deferredExpenseAccount!: string;
  
  @Field({ type: FieldType.STRING })
  serviceStopDate!: string;
  
  @Field({ type: FieldType.STRING })
  enableDeferredExpense!: string;
  
  @Field({ type: FieldType.STRING })
  serviceStartDate!: string;
  
  @Field({ type: FieldType.STRING })
  serviceEndDate!: string;
  
  @Field({ type: FieldType.STRING })
  reference!: string;
  
  @Field({ type: FieldType.STRING })
  allowZeroValuationRate!: string;
  
  @Field({ type: FieldType.STRING })
  brand!: string;
  
  @Field({ type: FieldType.STRING })
  itemGroup!: string;
  
  @Field({ type: FieldType.STRING })
  itemTaxRate!: string;
  
  @Field({ type: FieldType.STRING })
  itemTaxAmount!: string;
  
  @Field({ type: FieldType.STRING })
  purchaseOrder!: string;
  
  @Field({ type: FieldType.STRING })
  bom!: string;
  
  @Field({ type: FieldType.STRING })
  includeExplodedItems!: string;
  
  @Field({ type: FieldType.STRING })
  isFixedAsset!: string;
  
  @Field({ type: FieldType.STRING })
  asset!: string;
  
  @Field({ type: FieldType.STRING })
  assetLocation!: string;
  
  @Field({ type: FieldType.STRING })
  purchaseOrderItem!: string;
  
  @Field({ type: FieldType.STRING })
  purchaseReceipt!: string;
  
  @Field({ type: FieldType.STRING })
  pageBreak!: string;
  
  @Field({ type: FieldType.STRING })
  prDetail!: string;
  
  @Field({ type: FieldType.STRING })
  valuationRate!: string;
  
  @Field({ type: FieldType.STRING })
  rawMaterialsSuppliedCost!: string;
  
  @Field({ type: FieldType.STRING })
  landedCostVoucherAmount!: string;
  
  
}

export interface IPurchaseInvoiceItem {
  id: number;
  item: string;
  itemName: string;
  description: string;
  image: string;
  imageView: string;
  quantityAndRate: string;
  receivedQty: string;
  acceptedQty: string;
  rejectedQty: string;
  stockUom: string;
  uom: string;
  uomConversionFactor: string;
  stockQty: string;
  priceListRate: string;
  discountOnPriceListRate: string;
  discountAmount: string;
  priceListRateCompanyCurrency: string;
  rate: string;
  amount: string;
  rateCompanyCurrency: string;
  amountCompanyCurrency: string;
  pricingRule: string;
  netRate: string;
  netAmount: string;
  netRateCompanyCurrency: string;
  netAmountCompanyCurrency: string;
  itemWeightDetails: string;
  weightPerUnit: string;
  totalWeight: string;
  weightUom: string;
  warehouse: string;
  acceptedWarehouse: string;
  rejectedWarehouse: string;
  qualityInspection: string;
  batchNo: string;
  serialNo: string;
  rejectedSerialNo: string;
  accounting: string;
  expenseHead: string;
  itemTaxTemplate: string;
  project: string;
  costCenter: string;
  deferredExpense: string;
  deferredExpenseAccount: string;
  serviceStopDate: string;
  enableDeferredExpense: string;
  serviceStartDate: string;
  serviceEndDate: string;
  reference: string;
  allowZeroValuationRate: string;
  brand: string;
  itemGroup: string;
  itemTaxRate: string;
  itemTaxAmount: string;
  purchaseOrder: string;
  bom: string;
  includeExplodedItems: string;
  isFixedAsset: string;
  asset: string;
  assetLocation: string;
  purchaseOrderItem: string;
  purchaseReceipt: string;
  pageBreak: string;
  prDetail: string;
  valuationRate: string;
  rawMaterialsSuppliedCost: string;
  landedCostVoucherAmount: string;
  
}
