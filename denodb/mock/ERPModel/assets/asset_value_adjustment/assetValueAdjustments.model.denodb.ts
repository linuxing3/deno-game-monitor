// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: AssetValueAdjustment
|--------------------------------------------------------------------------
|
| Model Class and Interface of assetValueAdjustments
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


export class AssetValueAdjustment extends Model { 
  static table = "assetValueAdjustments";
  static timestamps = true;
  
  static fields: ModelFields = {
    // fields list for ORM Maping
    id: { primaryKey: true, autoIncrement: true },
    company: DataTypes.STRING,
    asset: DataTypes.STRING,
    assetCategory: DataTypes.STRING,
    financeBook: DataTypes.STRING,
    journalEntry: DataTypes.STRING,
    date: DataTypes.STRING,
    currentAssetValue: DataTypes.STRING,
    newAssetValue: DataTypes.STRING,
    differenceAmount: DataTypes.STRING,
    costCenter: DataTypes.STRING,
    amendedFrom: DataTypes.STRING,
    
  };

  static meta = {
    // field meta information for UI render
    fieldProperty: [
      {
        key: 'company',
        label: 'Company',
        type: 'select',
        placeholder: 'Input Company',
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
        key: 'assetCategory',
        label: 'Asset Category',
        type: 'input',
        placeholder: 'Input Asset Category',
        options: '',
        
      },
      {
        key: 'financeBook',
        label: 'Finance Book',
        type: 'select',
        placeholder: 'Input Finance Book',
        options: '',
        
      },
      {
        key: 'journalEntry',
        label: 'Journal Entry',
        type: 'select',
        placeholder: 'Input Journal Entry',
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
        key: 'date',
        label: 'Date',
        type: 'input',
        placeholder: 'Input Date',
        options: '',
        
      },
      {
        key: 'currentAssetValue',
        label: 'Current Asset Value',
        type: 'input',
        placeholder: 'Input Current Asset Value',
        options: '',
        
      },
      {
        key: 'newAssetValue',
        label: 'New Asset Value',
        type: 'input',
        placeholder: 'Input New Asset Value',
        options: '',
        
      },
      {
        key: 'differenceAmount',
        label: 'Difference Amount',
        type: 'input',
        placeholder: 'Input Difference Amount',
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
        key: 'amendedFrom',
        label: 'Amended From',
        type: 'select',
        placeholder: 'Input Amended From',
        options: '',
        
      },
      
    ]
  };
}

export interface IAssetValueAdjustment {
  id: FieldValue;
  company: FieldValue;
  asset: FieldValue;
  assetCategory: FieldValue;
  financeBook: FieldValue;
  journalEntry: FieldValue;
  date: FieldValue;
  currentAssetValue: FieldValue;
  newAssetValue: FieldValue;
  differenceAmount: FieldValue;
  costCenter: FieldValue;
  amendedFrom: FieldValue;
  
}
