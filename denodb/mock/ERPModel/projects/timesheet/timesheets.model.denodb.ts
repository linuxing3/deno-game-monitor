// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: Timesheet
|--------------------------------------------------------------------------
|
| Model Class and Interface of timesheets
|
*/
import {
  DataTypes,
  Model
} from "https://deno.land/x/denodb/mod.ts";


export class Timesheet extends Model { 
  static table = "timesheets";
  static timestamps = true;
  
  static fields = {
    // fields list for ORM Maping
    id: { primaryKey: true, autoIncrement: true },
    title: DataTypes.STRING,
    series: DataTypes.STRING,
    company: DataTypes.STRING,
    salesInvoice: DataTypes.STRING,
    salarySlip: DataTypes.STRING,
    status: DataTypes.STRING,
    employeeDetail: DataTypes.STRING,
    employee: DataTypes.STRING,
    employeeName: DataTypes.STRING,
    department: DataTypes.STRING,
    user: DataTypes.STRING,
    startDate: DataTypes.STRING,
    endDate: DataTypes.STRING,
    timeSheets: DataTypes.STRING,
    totalWorkingHours: DataTypes.STRING,
    billingDetails: DataTypes.STRING,
    totalBillableHours: DataTypes.STRING,
    totalBilledHours: DataTypes.STRING,
    totalCostingAmount: DataTypes.STRING,
    totalBillableAmount: DataTypes.STRING,
    totalBilledAmount: DataTypes.STRING,
    amountBilled: DataTypes.STRING,
    note: DataTypes.STRING,
    amendedFrom: DataTypes.STRING,
    
  };

}
