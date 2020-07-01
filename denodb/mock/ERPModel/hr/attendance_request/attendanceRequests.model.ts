// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: AttendanceRequest
|--------------------------------------------------------------------------
|
| Model of attendanceRequests
|
*/
import {
  DataTypes,
  Model
} from "https://deno.land/x/denodb/mod.ts";

export class AttendanceRequest extends Model { 
  static table = "attendanceRequests";
  static timestamps = true;
  
  static fields = {
    // fields list for ORM Maping
    id: { primaryKey: true, autoIncrement: true },
    
    employee: DataTypes.STRING,
    
    employeeName: DataTypes.STRING,
    
    department: DataTypes.STRING,
    
    company: DataTypes.STRING,
    
    : DataTypes.STRING,
    
    fromDate: DataTypes.STRING,
    
    toDate: DataTypes.STRING,
    
    halfDay: DataTypes.STRING,
    
    halfDayDate: DataTypes.STRING,
    
    reason: DataTypes.STRING,
    
    reason: DataTypes.STRING,
    
    : DataTypes.STRING,
    
    explanation: DataTypes.STRING,
    
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
      },{
        key: 'employeeName',
      
        label: 'Employee Name',
      
        type: 'input',
      
        placeholder: 'Input Employee Name',
      
        options: '',
      },{
        key: 'department',
      
        label: 'Department',
      
        type: 'select',
      
        placeholder: 'Input Department',
      
        options: '',
      },{
        key: 'company',
      
        label: 'Company',
      
        type: 'select',
      
        placeholder: 'Input Company',
      
        options: '',
      },{
        key: '',
      
        label: '',
      
        type: 'input',
      
        placeholder: 'Input ',
      
        options: '',
      },{
        key: 'fromDate',
      
        label: 'From Date',
      
        type: 'input',
      
        placeholder: 'Input From Date',
      
        options: '',
      },{
        key: 'toDate',
      
        label: 'To Date',
      
        type: 'input',
      
        placeholder: 'Input To Date',
      
        options: '',
      },{
        key: 'halfDay',
      
        label: 'Half Day',
      
        type: 'input',
      
        placeholder: 'Input Half Day',
      
        options: '',
      },{
        key: 'halfDayDate',
      
        label: 'Half Day Date',
      
        type: 'input',
      
        placeholder: 'Input Half Day Date',
      
        options: '',
      },{
        key: 'reason',
      
        label: 'Reason',
      
        type: 'input',
      
        placeholder: 'Input Reason',
      
        options: '',
      },{
        key: 'reason',
      
        label: 'Reason',
      
        type: 'select',
      
        placeholder: 'Input Reason',
      
        options: '[object Object]',
      },{
        key: '',
      
        label: '',
      
        type: 'input',
      
        placeholder: 'Input ',
      
        options: '',
      },{
        key: 'explanation',
      
        label: 'Explanation',
      
        type: 'input',
      
        placeholder: 'Input Explanation',
      
        options: '',
      },{
        key: 'amendedFrom',
      
        label: 'Amended From',
      
        type: 'select',
      
        placeholder: 'Input Amended From',
      
        options: '',
      },
    ]
  };
} 
