// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: MonthlyDistribution
|--------------------------------------------------------------------------
|
| Model Class and Interface of monthlyDistributions
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


export class MonthlyDistribution extends Model { 
  static table = "monthlyDistributions";
  static timestamps = true;
  
  static fields: ModelFields = {
    // fields list for ORM Maping
    id: { primaryKey: true, autoIncrement: true },
    distributionName: DataTypes.STRING,
    fiscalYear: DataTypes.STRING,
    monthlyDistributionPercentages: DataTypes.STRING,
    
  };

  static meta = {
    // field meta information for UI render
    fieldProperty: [
      {
        key: 'distributionName',
        label: 'Distribution Name',
        type: 'input',
        placeholder: 'Input Distribution Name',
        options: '',
        
      },
      {
        key: 'fiscalYear',
        label: 'Fiscal Year',
        type: 'select',
        placeholder: 'Input Fiscal Year',
        options: '',
        
      },
      {
        key: 'monthlyDistributionPercentages',
        label: 'Monthly Distribution Percentages',
        type: 'select',
        placeholder: 'Input Monthly Distribution Percentages',
        options: '',
        
      },
      
    ]
  };
}

export interface IMonthlyDistribution {
  id: FieldValue;
  distributionName: FieldValue;
  fiscalYear: FieldValue;
  monthlyDistributionPercentages: FieldValue;
  
}
