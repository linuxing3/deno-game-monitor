// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: SalesInvoiceTimesheet
|--------------------------------------------------------------------------
|
| Model of salesInvoiceTimesheets
|
*/
import {
  DataTypes,
  Model
} from "https://deno.land/x/denodb/mod.ts";

export class SalesInvoiceTimesheet extends Model { 
  static table = "salesInvoiceTimesheets";
  static timestamps = true;
  
  static fields = {
    // fields list for ORM Maping
    id: { primaryKey: true, autoIncrement: true },
    timeSheet: DataTypes.STRING,
    billingHours: DataTypes.STRING,
    billingAmount: DataTypes.STRING,
    timesheetDetail: DataTypes.STRING,
    
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
        
        key: 'billingHours',
      
        label: 'Billing Hours',
      
        type: 'input',
      
        placeholder: 'Input Billing Hours',
      
        options: '',
      
      },
      {
        
        key: 'billingAmount',
      
        label: 'Billing Amount',
      
        type: 'input',
      
        placeholder: 'Input Billing Amount',
      
        options: '',
      
      },
      {
        
        key: 'timesheetDetail',
      
        label: 'Timesheet Detail',
      
        type: 'input',
      
        placeholder: 'Input Timesheet Detail',
      
        options: '',
      
      },
      
    ]
  };
} 
