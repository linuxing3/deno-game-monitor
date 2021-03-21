// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: SalarySlipTimesheet
|--------------------------------------------------------------------------
|
| Model Class and Interface of salarySlipTimesheets
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


export class SalarySlipTimesheet extends Model { 
  static table = "salarySlipTimesheets";
  static timestamps = true;
  
  static fields: ModelFields = {
    // fields list for ORM Maping
    id: { primaryKey: true, autoIncrement: true },
    timeSheet: DataTypes.STRING,
    workingHours: DataTypes.STRING,
    
  };

  static meta = {
    // field meta information for UI render
    fieldProperty: [
      {
        key: 'timeSheet',
        label: 'Time Sheet',
        type: 'select',
        placeholder: 'Input Time Sheet',
        options: '',
        
      },
      {
        key: 'workingHours',
        label: 'Working Hours',
        type: 'input',
        placeholder: 'Input Working Hours',
        options: '',
        
      },
      
    ]
  };
}

export interface ISalarySlipTimesheet {
  id: FieldValue;
  timeSheet: FieldValue;
  workingHours: FieldValue;
  
}
