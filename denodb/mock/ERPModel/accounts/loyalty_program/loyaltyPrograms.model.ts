// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: LoyaltyProgram
|--------------------------------------------------------------------------
|
| Model Class and Interface of loyaltyPrograms
|
*/
import {
  DataTypes,
  Model
} from "https://deno.land/x/denodb/mod.ts";
import {
  FieldValue,
} from "https://deno.land/x/denodb/lib/query-builder.ts";
import {
  ModelFields,
} from "https://deno.land/x/denodb/lib/model.ts";


export class LoyaltyProgram extends Model { 
  static table = "loyaltyPrograms";
  static timestamps = true;
  
  static fields: ModelFields = {
    // fields list for ORM Maping
    id: { primaryKey: true, autoIncrement: true },
    loyaltyProgramName: DataTypes.STRING,
    loyaltyProgramType: DataTypes.STRING,
    fromDate: DataTypes.STRING,
    toDate: DataTypes.STRING,
    customerGroup: DataTypes.STRING,
    customerTerritory: DataTypes.STRING,
    autoOptInForAllCustomers: DataTypes.STRING,
    collectionTier: DataTypes.STRING,
    collectionRules: DataTypes.STRING,
    redemption: DataTypes.STRING,
    conversionFactor: DataTypes.STRING,
    expiryDurationInDays: DataTypes.STRING,
    expenseAccount: DataTypes.STRING,
    costCenter: DataTypes.STRING,
    company: DataTypes.STRING,
    helpSection: DataTypes.STRING,
    loyaltyProgramHelp: DataTypes.STRING,
    
  };

  static meta = {
    // field meta information for UI render
    fieldProperty: [
      {
        key: 'loyaltyProgramName',
        label: 'Loyalty Program Name',
        type: 'input',
        placeholder: 'Input Loyalty Program Name',
        options: '',
        
      },
      {
        key: 'loyaltyProgramType',
        label: 'Loyalty Program Type',
        type: 'select',
        placeholder: 'Input Loyalty Program Type',
        options: '[object Object]',
        
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
        key: 'customerGroup',
        label: 'Customer Group',
        type: 'select',
        placeholder: 'Input Customer Group',
        options: '',
        
      },
      {
        key: 'customerTerritory',
        label: 'Customer Territory',
        type: 'select',
        placeholder: 'Input Customer Territory',
        options: '',
        
      },
      {
        key: 'autoOptInForAllCustomers',
        label: 'Auto Opt In For All Customers',
        type: 'input',
        placeholder: 'Input Auto Opt In For All Customers',
        options: '',
        
      },
      {
        key: 'collectionTier',
        label: 'Collection Tier',
        type: 'input',
        placeholder: 'Input Collection Tier',
        options: '',
        
      },
      {
        key: 'collectionRules',
        label: 'Collection Rules',
        type: 'select',
        placeholder: 'Input Collection Rules',
        options: '',
        
      },
      {
        key: 'redemption',
        label: 'Redemption',
        type: 'input',
        placeholder: 'Input Redemption',
        options: '',
        
      },
      {
        key: 'conversionFactor',
        label: 'Conversion Factor',
        type: 'input',
        placeholder: 'Input Conversion Factor',
        options: '',
        
      },
      {
        key: 'expiryDurationInDays',
        label: 'Expiry Duration In Days',
        type: 'input',
        placeholder: 'Input Expiry Duration In Days',
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
        key: 'expenseAccount',
        label: 'Expense Account',
        type: 'select',
        placeholder: 'Input Expense Account',
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
        key: 'company',
        label: 'Company',
        type: 'select',
        placeholder: 'Input Company',
        options: '',
        
      },
      {
        key: 'helpSection',
        label: 'Help Section',
        type: 'input',
        placeholder: 'Input Help Section',
        options: '',
        
      },
      {
        key: 'loyaltyProgramHelp',
        label: 'Loyalty Program Help',
        type: 'input',
        placeholder: 'Input Loyalty Program Help',
        options: '',
        
      },
      
    ]
  };
}

export interface ILoyaltyProgram {
  id: FieldValue;
  loyaltyProgramName: FieldValue;
  loyaltyProgramType: FieldValue;
  fromDate: FieldValue;
  toDate: FieldValue;
  customerGroup: FieldValue;
  customerTerritory: FieldValue;
  autoOptInForAllCustomers: FieldValue;
  collectionTier: FieldValue;
  collectionRules: FieldValue;
  redemption: FieldValue;
  conversionFactor: FieldValue;
  expiryDurationInDays: FieldValue;
  expenseAccount: FieldValue;
  costCenter: FieldValue;
  company: FieldValue;
  helpSection: FieldValue;
  loyaltyProgramHelp: FieldValue;
  
}
