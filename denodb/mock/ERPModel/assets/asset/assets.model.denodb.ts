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
  DataTypes,
  Model
} from "https://deno.land/x/denodb/mod.ts";


export class Asset extends Model { 
  static table = "assets";
  static timestamps = true;
  
  static fields = {
    // fields list for ORM Maping
    id: { primaryKey: true, autoIncrement: true },
    namingSeries: DataTypes.STRING,
    assetName: DataTypes.STRING,
    itemCode: DataTypes.STRING,
    itemName: DataTypes.STRING,
    assetCategory: DataTypes.STRING,
    assetOwner: DataTypes.STRING,
    assetOwnerCompany: DataTypes.STRING,
    supplier: DataTypes.STRING,
    customer: DataTypes.STRING,
    image: DataTypes.STRING,
    company: DataTypes.STRING,
    location: DataTypes.STRING,
    custodian: DataTypes.STRING,
    costCenter: DataTypes.STRING,
    department: DataTypes.STRING,
    purchaseDate: DataTypes.STRING,
    disposalDate: DataTypes.STRING,
    journalEntryForScrap: DataTypes.STRING,
    grossPurchaseAmount: DataTypes.STRING,
    availableForUseDate: DataTypes.STRING,
    calculateDepreciation: DataTypes.STRING,
    isExistingAsset: DataTypes.STRING,
    openingAccumulatedDepreciation: DataTypes.STRING,
    numberOfDepreciationsBooked: DataTypes.STRING,
    depreciation: DataTypes.STRING,
    financeBooks: DataTypes.STRING,
    depreciationMethod: DataTypes.STRING,
    valueAfterDepreciation: DataTypes.STRING,
    totalNumberOfDepreciations: DataTypes.STRING,
    frequencyOfDepreciationMonths: DataTypes.STRING,
    nextDepreciationDate: DataTypes.STRING,
    depreciationSchedule: DataTypes.STRING,
    depreciationSchedules: DataTypes.STRING,
    insuranceDetails: DataTypes.STRING,
    policyNumber: DataTypes.STRING,
    insurer: DataTypes.STRING,
    insuredValue: DataTypes.STRING,
    insuranceStartDate: DataTypes.STRING,
    insuranceEndDate: DataTypes.STRING,
    comprehensiveInsurance: DataTypes.STRING,
    maintenance: DataTypes.STRING,
    maintenanceRequired: DataTypes.STRING,
    otherDetails: DataTypes.STRING,
    status: DataTypes.STRING,
    bookedFixedAsset: DataTypes.STRING,
    purchaseReceipt: DataTypes.STRING,
    purchaseReceiptAmount: DataTypes.STRING,
    purchaseInvoice: DataTypes.STRING,
    defaultFinanceBook: DataTypes.STRING,
    amendedFrom: DataTypes.STRING,
    
  };

}
