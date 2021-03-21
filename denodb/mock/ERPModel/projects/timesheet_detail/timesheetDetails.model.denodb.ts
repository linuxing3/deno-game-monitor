// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: TimesheetDetail
|--------------------------------------------------------------------------
|
| Model Class and Interface of timesheetDetails
|
*/
import {
  DataTypes,
  Model
} from "https://deno.land/x/denodb/mod.ts";


export class TimesheetDetail extends Model { 
  static table = "timesheetDetails";
  static timestamps = true;
  
  static fields = {
    // fields list for ORM Maping
    id: { primaryKey: true, autoIncrement: true },
    activityType: DataTypes.STRING,
    fromTime: DataTypes.STRING,
    expectedHrs: DataTypes.STRING,
    hrs: DataTypes.STRING,
    toTime: DataTypes.STRING,
    completed: DataTypes.STRING,
    completedQty: DataTypes.STRING,
    workstation: DataTypes.STRING,
    operation: DataTypes.STRING,
    operationId: DataTypes.STRING,
    project: DataTypes.STRING,
    task: DataTypes.STRING,
    bill: DataTypes.STRING,
    billingHours: DataTypes.STRING,
    billingRate: DataTypes.STRING,
    billingAmount: DataTypes.STRING,
    costingRate: DataTypes.STRING,
    costingAmount: DataTypes.STRING,
    reference: DataTypes.STRING,
    salesInvoice: DataTypes.STRING,
    
  };

}
