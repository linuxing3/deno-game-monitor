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
  BaseModel,
  Field,
  FieldType,
  Model
} from "https://deno.land/x/dso@v1.0.0/mod.ts";

@Model("salesInvoiceItems")
export class SalesInvoiceItem extends BaseModel { 

  @Field({
    type: FieldType.INT,
    primary: true,
    length: 11,
    autoIncrement: true
  })
  id!: number;

  @Field({ type: FieldType.STRING })
  barcode!: string;
  
  @Field({ type: FieldType.STRING })
  item!: string;
  
  @Field({ type: FieldType.STRING })
  itemName!: string;
  
  @Field({ type: FieldType.STRING })
  customerSItemCode!: string;
  
  @Field({ type: FieldType.STRING })
  editDescription!: string;
  
  @Field({ type: FieldType.STRING })
  description!: string;
  
  @Field({ type: FieldType.STRING })
  imageView!: string;
  
  @Field({ type: FieldType.STRING })
  image!: string;
  
  @Field({ type: FieldType.STRING })
  quantity!: string;
  
  @Field({ type: FieldType.STRING })
  stockUom!: string;
  
  @Field({ type: FieldType.STRING })
  uom!: string;
  
  @Field({ type: FieldType.STRING })
  uomConversionFactor!: string;
  
  @Field({ type: FieldType.STRING })
  qtyAsPerStockUom!: string;
  
  @Field({ type: FieldType.STRING })
  priceListRate!: string;
  
  @Field({ type: FieldType.STRING })
  priceListRateCompanyCurrency!: string;
  
  @Field({ type: FieldType.STRING })
  discountAndMargin!: string;
  
  @Field({ type: FieldType.STRING })
  marginType!: string;
  
  @Field({ type: FieldType.STRING })
  marginRateOrAmount!: string;
  
  @Field({ type: FieldType.STRING })
  rateWithMargin!: string;
  
  @Field({ type: FieldType.STRING })
  discountOnPriceListRateWithMargin!: string;
  
  @Field({ type: FieldType.STRING })
  discountAmount!: string;
  
  @Field({ type: FieldType.STRING })
  rateWithMarginCompanyCurrency!: string;
  
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
  dropShip!: string;
  
  @Field({ type: FieldType.STRING })
  deliveredBySupplier!: string;
  
  @Field({ type: FieldType.STRING })
  accountingDetails!: string;
  
  @Field({ type: FieldType.STRING })
  incomeAccount!: string;
  
  @Field({ type: FieldType.STRING })
  expenseAccount!: string;
  
  @Field({ type: FieldType.STRING })
  itemTaxTemplate!: string;
  
  @Field({ type: FieldType.STRING })
  costCenter!: string;
  
  @Field({ type: FieldType.STRING })
  deferredRevenue!: string;
  
  @Field({ type: FieldType.STRING })
  deferredRevenueAccount!: string;
  
  @Field({ type: FieldType.STRING })
  serviceStopDate!: string;
  
  @Field({ type: FieldType.STRING })
  enableDeferredRevenue!: string;
  
  @Field({ type: FieldType.STRING })
  serviceStartDate!: string;
  
  @Field({ type: FieldType.STRING })
  serviceEndDate!: string;
  
  @Field({ type: FieldType.STRING })
  itemWeightDetails!: string;
  
  @Field({ type: FieldType.STRING })
  weightPerUnit!: string;
  
  @Field({ type: FieldType.STRING })
  totalWeight!: string;
  
  @Field({ type: FieldType.STRING })
  weightUom!: string;
  
  @Field({ type: FieldType.STRING })
  stockDetails!: string;
  
  @Field({ type: FieldType.STRING })
  warehouse!: string;
  
  @Field({ type: FieldType.STRING })
  customerWarehouseOptional!: string;
  
  @Field({ type: FieldType.STRING })
  qualityInspection!: string;
  
  @Field({ type: FieldType.STRING })
  batchNo!: string;
  
  @Field({ type: FieldType.STRING })
  allowZeroValuationRate!: string;
  
  @Field({ type: FieldType.STRING })
  serialNo!: string;
  
  @Field({ type: FieldType.STRING })
  itemGroup!: string;
  
  @Field({ type: FieldType.STRING })
  brandName!: string;
  
  @Field({ type: FieldType.STRING })
  itemTaxRate!: string;
  
  @Field({ type: FieldType.STRING })
  availableBatchQtyAtWarehouse!: string;
  
  @Field({ type: FieldType.STRING })
  availableQtyAtWarehouse!: string;
  
  @Field({ type: FieldType.STRING })
  references!: string;
  
  @Field({ type: FieldType.STRING })
  salesOrder!: string;
  
  @Field({ type: FieldType.STRING })
  salesOrderItem!: string;
  
  @Field({ type: FieldType.STRING })
  deliveryNote!: string;
  
  @Field({ type: FieldType.STRING })
  deliveryNoteItem!: string;
  
  @Field({ type: FieldType.STRING })
  deliveredQty!: string;
  
  @Field({ type: FieldType.STRING })
  isFixedAsset!: string;
  
  @Field({ type: FieldType.STRING })
  asset!: string;
  
  @Field({ type: FieldType.STRING })
  pageBreak!: string;
  
  
}

export interface ISalesInvoiceItem {
  id: number;
  barcode: string;
  item: string;
  itemName: string;
  customerSItemCode: string;
  editDescription: string;
  description: string;
  imageView: string;
  image: string;
  quantity: string;
  stockUom: string;
  uom: string;
  uomConversionFactor: string;
  qtyAsPerStockUom: string;
  priceListRate: string;
  priceListRateCompanyCurrency: string;
  discountAndMargin: string;
  marginType: string;
  marginRateOrAmount: string;
  rateWithMargin: string;
  discountOnPriceListRateWithMargin: string;
  discountAmount: string;
  rateWithMarginCompanyCurrency: string;
  rate: string;
  amount: string;
  rateCompanyCurrency: string;
  amountCompanyCurrency: string;
  pricingRule: string;
  netRate: string;
  netAmount: string;
  netRateCompanyCurrency: string;
  netAmountCompanyCurrency: string;
  dropShip: string;
  deliveredBySupplier: string;
  accountingDetails: string;
  incomeAccount: string;
  expenseAccount: string;
  itemTaxTemplate: string;
  costCenter: string;
  deferredRevenue: string;
  deferredRevenueAccount: string;
  serviceStopDate: string;
  enableDeferredRevenue: string;
  serviceStartDate: string;
  serviceEndDate: string;
  itemWeightDetails: string;
  weightPerUnit: string;
  totalWeight: string;
  weightUom: string;
  stockDetails: string;
  warehouse: string;
  customerWarehouseOptional: string;
  qualityInspection: string;
  batchNo: string;
  allowZeroValuationRate: string;
  serialNo: string;
  itemGroup: string;
  brandName: string;
  itemTaxRate: string;
  availableBatchQtyAtWarehouse: string;
  availableQtyAtWarehouse: string;
  references: string;
  salesOrder: string;
  salesOrderItem: string;
  deliveryNote: string;
  deliveryNoteItem: string;
  deliveredQty: string;
  isFixedAsset: string;
  asset: string;
  pageBreak: string;
  
}
