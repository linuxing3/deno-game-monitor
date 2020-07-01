// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: AssetSettings
|--------------------------------------------------------------------------
|
| Model of assetSettingss
|
*/
import {
  DataTypes,
  Model
} from "https://deno.land/x/denodb/mod.ts";

export class AssetSettings extends Model { 
  static table = "assetSettingss";
  static timestamps = true;
  
  static fields = {
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
      },{
        key: 'calculateProratedDepreciationScheduleBasedOnFiscalYear',
      
        label: 'Calculate Prorated Depreciation Schedule Based On Fiscal Year',
      
        type: 'input',
      
        placeholder: 'Input Calculate Prorated Depreciation Schedule Based On Fiscal Year',
      
        options: '',
      },{
        key: 'numberOfDaysInFiscalYear',
      
        label: 'Number Of Days In Fiscal Year',
      
        type: 'input',
      
        placeholder: 'Input Number Of Days In Fiscal Year',
      
        options: '',
      },
    ]
  };
} 
