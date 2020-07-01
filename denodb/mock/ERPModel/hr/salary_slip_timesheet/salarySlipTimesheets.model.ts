// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: SalarySlipTimesheet
|--------------------------------------------------------------------------
|
| Model of salarySlipTimesheets
|
*/
import {
  DataTypes,
  Model
} from "https://deno.land/x/denodb/mod.ts";

export class SalarySlipTimesheet extends Model { 
  static table = "salarySlipTimesheets";
  static timestamps = true;
  
  static fields = {
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
