// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: CompensatoryLeaveRequest
|--------------------------------------------------------------------------
|
| Model of compensatoryLeaveRequests
|
*/
import {
  DataTypes,
  Model
} from "https://deno.land/x/denodb/mod.ts";

export class CompensatoryLeaveRequest extends Model { 
  static table = "compensatoryLeaveRequests";
  static timestamps = true;
  
  static fields = {
    // fields list for ORM Maping
    id: { primaryKey: true, autoIncrement: true },
    employee: DataTypes.STRING,
    employeeName: DataTypes.STRING,
    department: DataTypes.STRING,
    leaveType: DataTypes.STRING,
    leaveAllocation: DataTypes.STRING,
    workedOnHoliday: DataTypes.STRING,
    workFromDate: DataTypes.STRING,
    workEndDate: DataTypes.STRING,
    halfDay: DataTypes.STRING,
    halfDayDate: DataTypes.STRING,
    reason: DataTypes.STRING,
    amendedFrom: DataTypes.STRING,
    
  };

  static meta = {
    // field meta information for UI render
    fieldProperty: [
      {
        
        key: 'employee',
      
        label: 'Employee',
      
        type: 'select',
      
        placeholder: 'Input Employee',
      
        options: '',
      
      },
      {
        
        key: 'employeeName',
      
        label: 'Employee Name',
      
        type: 'input',
      
        placeholder: 'Input Employee Name',
      
        options: '',
      
      },
      {
        
        key: 'department',
      
        label: 'Department',
      
        type: 'select',
      
        placeholder: 'Input Department',
      
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
        
        key: 'leaveType',
      
        label: 'Leave Type',
      
        type: 'select',
      
        placeholder: 'Input Leave Type',
      
        options: '',
      
      },
      {
        
        key: 'leaveAllocation',
      
        label: 'Leave Allocation',
      
        type: 'select',
      
        placeholder: 'Input Leave Allocation',
      
        options: '',
      
      },
      {
        
        key: 'workedOnHoliday',
      
        label: 'Worked On Holiday',
      
        type: 'input',
      
        placeholder: 'Input Worked On Holiday',
      
        options: '',
      
      },
      {
        
        key: 'workFromDate',
      
        label: 'Work From Date',
      
        type: 'input',
      
        placeholder: 'Input Work From Date',
      
        options: '',
      
      },
      {
        
        key: 'workEndDate',
      
        label: 'Work End Date',
      
        type: 'input',
      
        placeholder: 'Input Work End Date',
      
        options: '',
      
      },
      {
        
        key: 'halfDay',
      
        label: 'Half Day',
      
        type: 'input',
      
        placeholder: 'Input Half Day',
      
        options: '',
      
      },
      {
        
        key: 'halfDayDate',
      
        label: 'Half Day Date',
      
        type: 'input',
      
        placeholder: 'Input Half Day Date',
      
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
        
        key: 'reason',
      
        label: 'Reason',
      
        type: 'input',
      
        placeholder: 'Input Reason',
      
        options: '',
      
      },
      {
        
        key: 'amendedFrom',
      
        label: 'Amended From',
      
        type: 'select',
      
        placeholder: 'Input Amended From',
      
        options: '',
      
      },
      
    ]
  };
} 
