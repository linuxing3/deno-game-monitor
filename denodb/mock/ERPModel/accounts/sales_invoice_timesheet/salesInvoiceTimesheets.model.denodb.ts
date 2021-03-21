// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: SalesInvoiceTimesheet
|--------------------------------------------------------------------------
|
| Model Class and Interface of salesInvoiceTimesheets
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

}
