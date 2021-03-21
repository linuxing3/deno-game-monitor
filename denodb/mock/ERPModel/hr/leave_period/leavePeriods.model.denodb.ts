// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: LeavePeriod
|--------------------------------------------------------------------------
|
| Model Class and Interface of leavePeriods
|
*/
import {
  DataTypes,
  Model
} from "https://deno.land/x/denodb/mod.ts";
import {
  ModelFields,
} from "https://deno.land/x/denodb/lib/model.ts";


export class LeavePeriod extends Model { 
  static table = "leavePeriods";
  static timestamps = true;
  
  static fields: ModelFields = {
    // fields list for ORM Maping
    id: { primaryKey: true, autoIncrement: true },
    fromDate: DataTypes.STRING,
    toDate: DataTypes.STRING,
    company: DataTypes.STRING,
    isActive: DataTypes.STRING,
    holidayListForOptionalLeave: DataTypes.STRING,
    
  };

  static meta = {
    // field meta information for UI render
    fieldProperty: [
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
        key: 'company',
        label: 'Company',
        type: 'select',
        placeholder: 'Input Company',
        options: '',
        
      },
      {
        key: 'isActive',
        label: 'Is Active',
        type: 'input',
        placeholder: 'Input Is Active',
        options: '',
        
      },
      {
        key: 'holidayListForOptionalLeave',
        label: 'Holiday List For Optional Leave',
        type: 'select',
        placeholder: 'Input Holiday List For Optional Leave',
        options: '',
        
      },
      
    ]
  };
}
