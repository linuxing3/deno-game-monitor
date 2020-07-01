// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: TimesheetDetail
|--------------------------------------------------------------------------
|
| Model of timesheetDetails
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
    
    : DataTypes.STRING,
    
    expectedHrs: DataTypes.STRING,
    
    hrs: DataTypes.STRING,
    
    toTime: DataTypes.STRING,
    
    completed: DataTypes.STRING,
    
    : DataTypes.STRING,
    
    completedQty: DataTypes.STRING,
    
    workstation: DataTypes.STRING,
    
    : DataTypes.STRING,
    
    operation: DataTypes.STRING,
    
    operationId: DataTypes.STRING,
    
    : DataTypes.STRING,
    
    project: DataTypes.STRING,
    
    : DataTypes.STRING,
    
    task: DataTypes.STRING,
    
    : DataTypes.STRING,
    
    bill: DataTypes.STRING,
    
    : DataTypes.STRING,
    
    billingHours: DataTypes.STRING,
    
    : DataTypes.STRING,
    
    billingRate: DataTypes.STRING,
    
    billingAmount: DataTypes.STRING,
    
    : DataTypes.STRING,
    
    costingRate: DataTypes.STRING,
    
    costingAmount: DataTypes.STRING,
    
    reference: DataTypes.STRING,
    
    salesInvoice: DataTypes.STRING,
    
  };

  static meta = {
    // field meta information for UI render
    fieldProperty: [
      {
        key: 'activityType',
      
        label: 'Activity Type',
      
        type: 'select',
      
        placeholder: 'Input Activity Type',
      
        options: '',
      },{
        key: 'fromTime',
      
        label: 'From Time',
      
        type: 'input',
      
        placeholder: 'Input From Time',
      
        options: '',
      },{
        key: '',
      
        label: '',
      
        type: 'input',
      
        placeholder: 'Input ',
      
        options: '',
      },{
        key: 'expectedHrs',
      
        label: 'Expected Hrs',
      
        type: 'input',
      
        placeholder: 'Input Expected Hrs',
      
        options: '',
      },{
        key: 'hrs',
      
        label: 'Hrs',
      
        type: 'input',
      
        placeholder: 'Input Hrs',
      
        options: '',
      },{
        key: 'toTime',
      
        label: 'To Time',
      
        type: 'input',
      
        placeholder: 'Input To Time',
      
        options: '',
      },{
        key: 'completed',
      
        label: 'Completed',
      
        type: 'input',
      
        placeholder: 'Input Completed',
      
        options: '',
      },{
        key: '',
      
        label: '',
      
        type: 'input',
      
        placeholder: 'Input ',
      
        options: '',
      },{
        key: 'completedQty',
      
        label: 'Completed Qty',
      
        type: 'input',
      
        placeholder: 'Input Completed Qty',
      
        options: '',
      },{
        key: 'workstation',
      
        label: 'Workstation',
      
        type: 'select',
      
        placeholder: 'Input Workstation',
      
        options: '',
      },{
        key: '',
      
        label: '',
      
        type: 'input',
      
        placeholder: 'Input ',
      
        options: '',
      },{
        key: 'operation',
      
        label: 'Operation',
      
        type: 'select',
      
        placeholder: 'Input Operation',
      
        options: '',
      },{
        key: 'operationId',
      
        label: 'Operation Id',
      
        type: 'input',
      
        placeholder: 'Input Operation Id',
      
        options: '',
      },{
        key: '',
      
        label: '',
      
        type: 'input',
      
        placeholder: 'Input ',
      
        options: '',
      },{
        key: 'project',
      
        label: 'Project',
      
        type: 'select',
      
        placeholder: 'Input Project',
      
        options: '',
      },{
        key: '',
      
        label: '',
      
        type: 'input',
      
        placeholder: 'Input ',
      
        options: '',
      },{
        key: 'task',
      
        label: 'Task',
      
        type: 'select',
      
        placeholder: 'Input Task',
      
        options: '',
      },{
        key: '',
      
        label: '',
      
        type: 'input',
      
        placeholder: 'Input ',
      
        options: '',
      },{
        key: 'bill',
      
        label: 'Bill',
      
        type: 'input',
      
        placeholder: 'Input Bill',
      
        options: '',
      },{
        key: '',
      
        label: '',
      
        type: 'input',
      
        placeholder: 'Input ',
      
        options: '',
      },{
        key: 'billingHours',
      
        label: 'Billing Hours',
      
        type: 'input',
      
        placeholder: 'Input Billing Hours',
      
        options: '',
      },{
        key: '',
      
        label: '',
      
        type: 'input',
      
        placeholder: 'Input ',
      
        options: '',
      },{
        key: 'billingRate',
      
        label: 'Billing Rate',
      
        type: 'input',
      
        placeholder: 'Input Billing Rate',
      
        options: '',
      },{
        key: 'billingAmount',
      
        label: 'Billing Amount',
      
        type: 'input',
      
        placeholder: 'Input Billing Amount',
      
        options: '',
      },{
        key: '',
      
        label: '',
      
        type: 'input',
      
        placeholder: 'Input ',
      
        options: '',
      },{
        key: 'costingRate',
      
        label: 'Costing Rate',
      
        type: 'input',
      
        placeholder: 'Input Costing Rate',
      
        options: '',
      },{
        key: 'costingAmount',
      
        label: 'Costing Amount',
      
        type: 'input',
      
        placeholder: 'Input Costing Amount',
      
        options: '',
      },{
        key: 'reference',
      
        label: 'Reference',
      
        type: 'input',
      
        placeholder: 'Input Reference',
      
        options: '',
      },{
        key: 'salesInvoice',
      
        label: 'Sales Invoice',
      
        type: 'select',
      
        placeholder: 'Input Sales Invoice',
      
        options: '',
      },
    ]
  };
} 
