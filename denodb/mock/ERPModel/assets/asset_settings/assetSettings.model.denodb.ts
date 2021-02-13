// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: AssetSetting
|--------------------------------------------------------------------------
|
| Model Class and Interface of assetSettings
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


export class AssetSetting extends Model { 
  static table = "assetSettings";
  static timestamps = true;
  
  static fields: ModelFields = {
    // fields list for ORM Maping
    id: { primaryKey: true, autoIncrement: true },
    depreciationOptions: DataTypes.STRING,
    calculateProratedDepreciationScheduleBasedOnFiscalYear: DataTypes.STRING,
    numberOfDaysInFiscalYear: DataTypes.STRING,
    
  };

  static meta = {
    // field meta information for UI render
    fieldProperty: [
      {
        key: 'depreciationOptions',
        label: 'Depreciation Options',
        type: 'input',
        placeholder: 'Input Depreciation Options',
        options: '',
        
      },
      {
        key: 'calculateProratedDepreciationScheduleBasedOnFiscalYear',
        label: 'Calculate Prorated Depreciation Schedule Based On Fiscal Year',
        type: 'input',
        placeholder: 'Input Calculate Prorated Depreciation Schedule Based On Fiscal Year',
        options: '',
        
      },
      {
        key: 'numberOfDaysInFiscalYear',
        label: 'Number Of Days In Fiscal Year',
        type: 'input',
        placeholder: 'Input Number Of Days In Fiscal Year',
        options: '',
        
      },
      
    ]
  };
}

export interface IAssetSetting {
  id: FieldValue;
  depreciationOptions: FieldValue;
  calculateProratedDepreciationScheduleBasedOnFiscalYear: FieldValue;
  numberOfDaysInFiscalYear: FieldValue;
  
}
