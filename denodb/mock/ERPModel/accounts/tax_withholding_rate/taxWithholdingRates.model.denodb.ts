// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: TaxWithholdingRate
|--------------------------------------------------------------------------
|
| Model Class and Interface of taxWithholdingRates
|
*/
import {
  DataTypes,
  Model
} from "https://deno.land/x/denodb/mod.ts";


export class TaxWithholdingRate extends Model { 
  static table = "taxWithholdingRates";
  static timestamps = true;
  
  static fields = {
    // fields list for ORM Maping
    id: { primaryKey: true, autoIncrement: true },
    fiscalYear: DataTypes.STRING,
    taxWithholdingRate: DataTypes.STRING,
    singleTransactionThreshold: DataTypes.STRING,
    cumulativeTransactionThreshold: DataTypes.STRING,
    
  };

  static meta = {
    // field meta information for UI render
    fieldProperty: [
      {
        key: 'fiscalYear',
        label: 'Fiscal Year',
        type: 'select',
        placeholder: 'Input Fiscal Year',
        options: '',
        
      },
      {
        key: 'taxWithholdingRate',
        label: 'Tax Withholding Rate',
        type: 'input',
        placeholder: 'Input Tax Withholding Rate',
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
        key: 'singleTransactionThreshold',
        label: 'Single Transaction Threshold',
        type: 'input',
        placeholder: 'Input Single Transaction Threshold',
        options: '',
        
      },
      {
        key: 'cumulativeTransactionThreshold',
        label: 'Cumulative Transaction Threshold',
        type: 'input',
        placeholder: 'Input Cumulative Transaction Threshold',
        options: '',
        
      },
      
    ]
  };
}
