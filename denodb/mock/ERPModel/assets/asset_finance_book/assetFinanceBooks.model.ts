// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: AssetFinanceBook
|--------------------------------------------------------------------------
|
| Model of assetFinanceBooks
|
*/
import {
  DataTypes,
  Model
} from "https://deno.land/x/denodb/mod.ts";

export class AssetFinanceBook extends Model { 
  static table = "assetFinanceBooks";
  static timestamps = true;
  
  static fields = {
    // fields list for ORM Maping
    id: { primaryKey: true, autoIncrement: true },
    financeBook: DataTypes.STRING,
    depreciationMethod: DataTypes.STRING,
    totalNumberOfDepreciations: DataTypes.STRING,
    frequencyOfDepreciationMonths: DataTypes.STRING,
    depreciationStartDate: DataTypes.STRING,
    expectedValueAfterUsefulLife: DataTypes.STRING,
    valueAfterDepreciation: DataTypes.STRING,
    
  };

  static meta = {
    // field meta information for UI render
    fieldProperty: [
      {
        
        key: 'financeBook',
      
        label: 'Finance Book',
      
        type: 'select',
      
        placeholder: 'Input Finance Book',
      
        options: '',
      
      },
      {
        
        key: 'depreciationMethod',
      
        label: 'Depreciation Method',
      
        type: 'select',
      
        placeholder: 'Input Depreciation Method',
      
        options: '[object Object],[object Object],[object Object],[object Object]',
      
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
        
        key: 'depreciationStartDate',
      
        label: 'Depreciation Start Date',
      
        type: 'input',
      
        placeholder: 'Input Depreciation Start Date',
      
        options: '',
      
      },
      {
        
        key: 'expectedValueAfterUsefulLife',
      
        label: 'Expected Value After Useful Life',
      
        type: 'select',
      
        placeholder: 'Input Expected Value After Useful Life',
      
        options: '',
      
      },
      {
        
        key: 'valueAfterDepreciation',
      
        label: 'Value After Depreciation',
      
        type: 'select',
      
        placeholder: 'Input Value After Depreciation',
      
        options: '',
      
      },
      
    ]
  };
} 
