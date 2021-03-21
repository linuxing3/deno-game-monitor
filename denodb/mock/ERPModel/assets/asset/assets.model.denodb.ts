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
import {
  ModelFields,
} from "https://deno.land/x/denodb/lib/model.ts";


export class Asset extends Model { 
  static table = "assets";
  static timestamps = true;
  
  static fields: ModelFields = {
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

  static meta = {
    // field meta information for UI render
    fieldProperty: [
      {
        key: 'namingSeries',
        label: 'Naming Series',
        type: 'select',
        placeholder: 'Input Naming Series',
        options: '',
        
      },
      {
        key: 'assetName',
        label: 'Asset Name',
        type: 'input',
        placeholder: 'Input Asset Name',
        options: '',
        
      },
      {
        key: 'itemCode',
        label: 'Item Code',
        type: 'select',
        placeholder: 'Input Item Code',
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
        key: 'assetCategory',
        label: 'Asset Category',
        type: 'select',
        placeholder: 'Input Asset Category',
        options: '',
        
      },
      {
        key: 'assetOwner',
        label: 'Asset Owner',
        type: 'select',
        placeholder: 'Input Asset Owner',
        options: '[object Object],[object Object],[object Object]',
        
      },
      {
        key: 'assetOwnerCompany',
        label: 'Asset Owner Company',
        type: 'select',
        placeholder: 'Input Asset Owner Company',
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
        key: 'customer',
        label: 'Customer',
        type: 'select',
        placeholder: 'Input Customer',
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
        key: 'location',
        label: 'Location',
        type: 'select',
        placeholder: 'Input Location',
        options: '',
        
      },
      {
        key: 'custodian',
        label: 'Custodian',
        type: 'select',
        placeholder: 'Input Custodian',
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
        key: 'department',
        label: 'Department',
        type: 'select',
        placeholder: 'Input Department',
        options: '',
        
      },
      {
        key: 'purchaseDate',
        label: 'Purchase Date',
        type: 'input',
        placeholder: 'Input Purchase Date',
        options: '',
        
      },
      {
        key: 'disposalDate',
        label: 'Disposal Date',
        type: 'input',
        placeholder: 'Input Disposal Date',
        options: '',
        
      },
      {
        key: 'journalEntryForScrap',
        label: 'Journal Entry For Scrap',
        type: 'select',
        placeholder: 'Input Journal Entry For Scrap',
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
        key: 'grossPurchaseAmount',
        label: 'Gross Purchase Amount',
        type: 'select',
        placeholder: 'Input Gross Purchase Amount',
        options: '',
        
      },
      {
        key: 'availableForUseDate',
        label: 'Available For Use Date',
        type: 'input',
        placeholder: 'Input Available For Use Date',
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
        key: 'calculateDepreciation',
        label: 'Calculate Depreciation',
        type: 'input',
        placeholder: 'Input Calculate Depreciation',
        options: '',
        
      },
      {
        key: 'isExistingAsset',
        label: 'Is Existing Asset',
        type: 'input',
        placeholder: 'Input Is Existing Asset',
        options: '',
        
      },
      {
        key: 'openingAccumulatedDepreciation',
        label: 'Opening Accumulated Depreciation',
        type: 'select',
        placeholder: 'Input Opening Accumulated Depreciation',
        options: '',
        
      },
      {
        key: 'numberOfDepreciationsBooked',
        label: 'Number Of Depreciations Booked',
        type: 'input',
        placeholder: 'Input Number Of Depreciations Booked',
        options: '',
        
      },
      {
        key: 'depreciation',
        label: 'Depreciation',
        type: 'input',
        placeholder: 'Input Depreciation',
        options: '',
        
      },
      {
        key: 'financeBooks',
        label: 'Finance Books',
        type: 'select',
        placeholder: 'Input Finance Books',
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
        key: 'depreciationMethod',
        label: 'Depreciation Method',
        type: 'select',
        placeholder: 'Input Depreciation Method',
        options: '[object Object],[object Object],[object Object]',
        
      },
      {
        key: 'valueAfterDepreciation',
        label: 'Value After Depreciation',
        type: 'select',
        placeholder: 'Input Value After Depreciation',
        options: '',
        
      },
      {
        key: 'totalNumberOfDepreciations',
        label: 'Total Number Of Depreciations',
        type: 'input',
        placeholder: 'Input Total Number Of Depreciations',
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
        key: 'frequencyOfDepreciationMonths',
        label: 'Frequency Of Depreciation Months',
        type: 'input',
        placeholder: 'Input Frequency Of Depreciation Months',
        options: '',
        
      },
      {
        key: 'nextDepreciationDate',
        label: 'Next Depreciation Date',
        type: 'input',
        placeholder: 'Input Next Depreciation Date',
        options: '',
        
      },
      {
        key: 'depreciationSchedule',
        label: 'Depreciation Schedule',
        type: 'input',
        placeholder: 'Input Depreciation Schedule',
        options: '',
        
      },
      {
        key: 'depreciationSchedules',
        label: 'Depreciation Schedules',
        type: 'select',
        placeholder: 'Input Depreciation Schedules',
        options: '',
        
      },
      {
        key: 'insuranceDetails',
        label: 'Insurance Details',
        type: 'input',
        placeholder: 'Input Insurance Details',
        options: '',
        
      },
      {
        key: 'policyNumber',
        label: 'Policy Number',
        type: 'input',
        placeholder: 'Input Policy Number',
        options: '',
        
      },
      {
        key: 'insurer',
        label: 'Insurer',
        type: 'input',
        placeholder: 'Input Insurer',
        options: '',
        
      },
      {
        key: 'insuredValue',
        label: 'Insured Value',
        type: 'input',
        placeholder: 'Input Insured Value',
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
        key: 'insuranceStartDate',
        label: 'Insurance Start Date',
        type: 'input',
        placeholder: 'Input Insurance Start Date',
        options: '',
        
      },
      {
        key: 'insuranceEndDate',
        label: 'Insurance End Date',
        type: 'input',
        placeholder: 'Input Insurance End Date',
        options: '',
        
      },
      {
        key: 'comprehensiveInsurance',
        label: 'Comprehensive Insurance',
        type: 'input',
        placeholder: 'Input Comprehensive Insurance',
        options: '',
        
      },
      {
        key: 'maintenance',
        label: 'Maintenance',
        type: 'input',
        placeholder: 'Input Maintenance',
        options: '',
        
      },
      {
        key: 'maintenanceRequired',
        label: 'Maintenance Required',
        type: 'input',
        placeholder: 'Input Maintenance Required',
        options: '',
        
      },
      {
        key: 'otherDetails',
        label: 'Other Details',
        type: 'input',
        placeholder: 'Input Other Details',
        options: '',
        
      },
      {
        key: 'status',
        label: 'Status',
        type: 'select',
        placeholder: 'Input Status',
        options: '[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object]',
        
      },
      {
        key: 'bookedFixedAsset',
        label: 'Booked Fixed Asset',
        type: 'input',
        placeholder: 'Input Booked Fixed Asset',
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
        key: 'purchaseReceipt',
        label: 'Purchase Receipt',
        type: 'select',
        placeholder: 'Input Purchase Receipt',
        options: '',
        
      },
      {
        key: 'purchaseReceiptAmount',
        label: 'Purchase Receipt Amount',
        type: 'input',
        placeholder: 'Input Purchase Receipt Amount',
        options: '',
        
      },
      {
        key: 'purchaseInvoice',
        label: 'Purchase Invoice',
        type: 'select',
        placeholder: 'Input Purchase Invoice',
        options: '',
        
      },
      {
        key: 'defaultFinanceBook',
        label: 'Default Finance Book',
        type: 'select',
        placeholder: 'Input Default Finance Book',
        options: '',
        
      },
      {
        key: 'amendedFrom',
        label: 'Amended From',
        type: 'select',
        placeholder: 'Input Amended From',
        options: '',
        
      },
      
    ]
  };
}
