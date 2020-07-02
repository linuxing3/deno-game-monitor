// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: Asset
|--------------------------------------------------------------------------
|
| Model Class and Interface of assets
|
*/
import {
  BaseModel,
  Field,
  FieldType,
  Model
} from "https://deno.land/x/dso@v1.0.0/mod.ts";

@Model("assets")
export class Asset extends BaseModel { 

  @Field({
    type: FieldType.INT,
    primary: true,
    length: 11,
    autoIncrement: true
  })
  id!: number;

  @Field({ type: FieldType.STRING })
  namingSeries!: string;
  
  @Field({ type: FieldType.STRING })
  assetName!: string;
  
  @Field({ type: FieldType.STRING })
  itemCode!: string;
  
  @Field({ type: FieldType.STRING })
  itemName!: string;
  
  @Field({ type: FieldType.STRING })
  assetCategory!: string;
  
  @Field({ type: FieldType.STRING })
  assetOwner!: string;
  
  @Field({ type: FieldType.STRING })
  assetOwnerCompany!: string;
  
  @Field({ type: FieldType.STRING })
  supplier!: string;
  
  @Field({ type: FieldType.STRING })
  customer!: string;
  
  @Field({ type: FieldType.STRING })
  image!: string;
  
  @Field({ type: FieldType.STRING })
  company!: string;
  
  @Field({ type: FieldType.STRING })
  location!: string;
  
  @Field({ type: FieldType.STRING })
  custodian!: string;
  
  @Field({ type: FieldType.STRING })
  costCenter!: string;
  
  @Field({ type: FieldType.STRING })
  department!: string;
  
  @Field({ type: FieldType.STRING })
  purchaseDate!: string;
  
  @Field({ type: FieldType.STRING })
  disposalDate!: string;
  
  @Field({ type: FieldType.STRING })
  journalEntryForScrap!: string;
  
  @Field({ type: FieldType.STRING })
  grossPurchaseAmount!: string;
  
  @Field({ type: FieldType.STRING })
  availableForUseDate!: string;
  
  @Field({ type: FieldType.STRING })
  calculateDepreciation!: string;
  
  @Field({ type: FieldType.STRING })
  isExistingAsset!: string;
  
  @Field({ type: FieldType.STRING })
  openingAccumulatedDepreciation!: string;
  
  @Field({ type: FieldType.STRING })
  numberOfDepreciationsBooked!: string;
  
  @Field({ type: FieldType.STRING })
  depreciation!: string;
  
  @Field({ type: FieldType.STRING })
  financeBooks!: string;
  
  @Field({ type: FieldType.STRING })
  depreciationMethod!: string;
  
  @Field({ type: FieldType.STRING })
  valueAfterDepreciation!: string;
  
  @Field({ type: FieldType.STRING })
  totalNumberOfDepreciations!: string;
  
  @Field({ type: FieldType.STRING })
  frequencyOfDepreciationMonths!: string;
  
  @Field({ type: FieldType.STRING })
  nextDepreciationDate!: string;
  
  @Field({ type: FieldType.STRING })
  depreciationSchedule!: string;
  
  @Field({ type: FieldType.STRING })
  depreciationSchedules!: string;
  
  @Field({ type: FieldType.STRING })
  insuranceDetails!: string;
  
  @Field({ type: FieldType.STRING })
  policyNumber!: string;
  
  @Field({ type: FieldType.STRING })
  insurer!: string;
  
  @Field({ type: FieldType.STRING })
  insuredValue!: string;
  
  @Field({ type: FieldType.STRING })
  insuranceStartDate!: string;
  
  @Field({ type: FieldType.STRING })
  insuranceEndDate!: string;
  
  @Field({ type: FieldType.STRING })
  comprehensiveInsurance!: string;
  
  @Field({ type: FieldType.STRING })
  maintenance!: string;
  
  @Field({ type: FieldType.STRING })
  maintenanceRequired!: string;
  
  @Field({ type: FieldType.STRING })
  otherDetails!: string;
  
  @Field({ type: FieldType.STRING })
  status!: string;
  
  @Field({ type: FieldType.STRING })
  bookedFixedAsset!: string;
  
  @Field({ type: FieldType.STRING })
  purchaseReceipt!: string;
  
  @Field({ type: FieldType.STRING })
  purchaseReceiptAmount!: string;
  
  @Field({ type: FieldType.STRING })
  purchaseInvoice!: string;
  
  @Field({ type: FieldType.STRING })
  defaultFinanceBook!: string;
  
  @Field({ type: FieldType.STRING })
  amendedFrom!: string;
  
  
}

export interface IAsset {
  id: number;
  namingSeries: string;
  assetName: string;
  itemCode: string;
  itemName: string;
  assetCategory: string;
  assetOwner: string;
  assetOwnerCompany: string;
  supplier: string;
  customer: string;
  image: string;
  company: string;
  location: string;
  custodian: string;
  costCenter: string;
  department: string;
  purchaseDate: string;
  disposalDate: string;
  journalEntryForScrap: string;
  grossPurchaseAmount: string;
  availableForUseDate: string;
  calculateDepreciation: string;
  isExistingAsset: string;
  openingAccumulatedDepreciation: string;
  numberOfDepreciationsBooked: string;
  depreciation: string;
  financeBooks: string;
  depreciationMethod: string;
  valueAfterDepreciation: string;
  totalNumberOfDepreciations: string;
  frequencyOfDepreciationMonths: string;
  nextDepreciationDate: string;
  depreciationSchedule: string;
  depreciationSchedules: string;
  insuranceDetails: string;
  policyNumber: string;
  insurer: string;
  insuredValue: string;
  insuranceStartDate: string;
  insuranceEndDate: string;
  comprehensiveInsurance: string;
  maintenance: string;
  maintenanceRequired: string;
  otherDetails: string;
  status: string;
  bookedFixedAsset: string;
  purchaseReceipt: string;
  purchaseReceiptAmount: string;
  purchaseInvoice: string;
  defaultFinanceBook: string;
  amendedFrom: string;
  
}
