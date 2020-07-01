// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: Attendance
|--------------------------------------------------------------------------
|
| Model of attendances
|
*/
import {
  DataTypes,
  Model
} from "https://deno.land/x/denodb/mod.ts";

export class Attendance extends Model { 
  static table = "attendances";
  static timestamps = true;
  
  static fields = {
    // fields list for ORM Maping
    id: { primaryKey: true, autoIncrement: true },
    
    : DataTypes.STRING,
    
    series: DataTypes.STRING,
    
    employee: DataTypes.STRING,
    
    employeeName: DataTypes.STRING,
    
    status: DataTypes.STRING,
    
    leaveType: DataTypes.STRING,
    
    : DataTypes.STRING,
    
    attendanceDate: DataTypes.STRING,
    
    company: DataTypes.STRING,
    
    department: DataTypes.STRING,
    
    attendanceRequest: DataTypes.STRING,
    
    amendedFrom: DataTypes.STRING,
    
  };

  static meta = {
    // field meta information for UI render
    fieldProperty: [
      {
        key: '',
      
        label: '',
      
        type: 'select',
      
        placeholder: 'Input ',
      
        options: '',
      },{
        key: 'series',
      
        label: 'Series',
      
        type: 'select',
      
        placeholder: 'Input Series',
      
        options: '',
      },{
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
        key: 'status',
      
        label: 'Status',
      
        type: 'select',
      
        placeholder: 'Input Status',
      
        options: '[object Object],[object Object],[object Object],[object Object]',
      },{
        key: 'leaveType',
      
        label: 'Leave Type',
      
        type: 'select',
      
        placeholder: 'Input Leave Type',
      
        options: '',
      },{
        key: '',
      
        label: '',
      
        type: 'input',
      
        placeholder: 'Input ',
      
        options: '',
      },{
        key: 'attendanceDate',
      
        label: 'Attendance Date',
      
        type: 'input',
      
        placeholder: 'Input Attendance Date',
      
        options: '',
      },{
        key: 'company',
      
        label: 'Company',
      
        type: 'select',
      
        placeholder: 'Input Company',
      
        options: '',
      },{
        key: 'department',
      
        label: 'Department',
      
        type: 'select',
      
        placeholder: 'Input Department',
      
        options: '',
      },{
        key: 'attendanceRequest',
      
        label: 'Attendance Request',
      
        type: 'select',
      
        placeholder: 'Input Attendance Request',
      
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
