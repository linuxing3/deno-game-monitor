// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: PayrollPeriodDate
|--------------------------------------------------------------------------
|
| Model Class and Interface of payrollPeriodDates
|
*/
import {
  DataTypes,
  Model
} from "https://deno.land/x/denodb/mod.ts";
import {
  ModelFields,
} from "https://deno.land/x/denodb/lib/model.ts";


export class PayrollPeriodDate extends Model { 
  static table = "payrollPeriodDates";
  static timestamps = true;
  
  static fields: ModelFields = {
    // fields list for ORM Maping
    id: { primaryKey: true, autoIncrement: true },
    startDate: DataTypes.STRING,
    endDate: DataTypes.STRING,
    
  };

  static meta = {
    // field meta information for UI render
    fieldProperty: [
      {
        key: 'startDate',
        label: 'Start Date',
        type: 'input',
        placeholder: 'Input Start Date',
        options: '',
        
      },
      {
        key: 'endDate',
        label: 'End Date',
        type: 'input',
        placeholder: 'Input End Date',
        options: '',
        
      },
      
    ]
  };
}
