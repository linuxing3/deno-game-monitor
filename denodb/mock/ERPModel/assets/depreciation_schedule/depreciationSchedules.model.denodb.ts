// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: DepreciationSchedule
|--------------------------------------------------------------------------
|
| Model Class and Interface of depreciationSchedules
|
*/
import {
  DataTypes,
  Model
} from "https://deno.land/x/denodb/mod.ts";
import {
  ModelFields,
} from "https://deno.land/x/denodb/lib/model.ts";


export class DepreciationSchedule extends Model { 
  static table = "depreciationSchedules";
  static timestamps = true;
  
  static fields: ModelFields = {
    // fields list for ORM Maping
    id: { primaryKey: true, autoIncrement: true },
    financeBook: DataTypes.STRING,
    scheduleDate: DataTypes.STRING,
    depreciationAmount: DataTypes.STRING,
    accumulatedDepreciationAmount: DataTypes.STRING,
    journalEntry: DataTypes.STRING,
    makeDepreciationEntry: DataTypes.STRING,
    financeBookId: DataTypes.STRING,
    depreciationMethod: DataTypes.STRING,
    
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
        key: 'scheduleDate',
        label: 'Schedule Date',
        type: 'input',
        placeholder: 'Input Schedule Date',
        options: '',
        
      },
      {
        key: 'depreciationAmount',
        label: 'Depreciation Amount',
        type: 'select',
        placeholder: 'Input Depreciation Amount',
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
        key: 'accumulatedDepreciationAmount',
        label: 'Accumulated Depreciation Amount',
        type: 'select',
        placeholder: 'Input Accumulated Depreciation Amount',
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
        key: 'makeDepreciationEntry',
        label: 'Make Depreciation Entry',
        type: 'input',
        placeholder: 'Input Make Depreciation Entry',
        options: '',
        
      },
      {
        key: 'financeBookId',
        label: 'Finance Book Id',
        type: 'input',
        placeholder: 'Input Finance Book Id',
        options: '',
        
      },
      {
        key: 'depreciationMethod',
        label: 'Depreciation Method',
        type: 'select',
        placeholder: 'Input Depreciation Method',
        options: '[object Object],[object Object],[object Object],[object Object]',
        
      },
      
    ]
  };
}
