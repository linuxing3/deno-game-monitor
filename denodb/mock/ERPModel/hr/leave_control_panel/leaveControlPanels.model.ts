// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: LeaveControlPanel
|--------------------------------------------------------------------------
|
| Model of leaveControlPanels
|
*/
import {
  DataTypes,
  Model
} from "https://deno.land/x/denodb/mod.ts";

export class LeaveControlPanel extends Model { 
  static table = "leaveControlPanels";
  static timestamps = true;
  
  static fields = {
    // fields list for ORM Maping
    id: { primaryKey: true, autoIncrement: true },
    company: DataTypes.STRING,
    employmentType: DataTypes.STRING,
    branch: DataTypes.STRING,
    department: DataTypes.STRING,
    designation: DataTypes.STRING,
    employeeGrade: DataTypes.STRING,
    employee: DataTypes.STRING,
    fromDate: DataTypes.STRING,
    toDate: DataTypes.STRING,
    leavePolicy: DataTypes.STRING,
    leaveType: DataTypes.STRING,
    carryForward: DataTypes.STRING,
    newLeavesAllocatedInDays: DataTypes.STRING,
    allocate: DataTypes.STRING,
    
  };

  static meta = {
    // field meta information for UI render
    fieldProperty: [
      {
        
        key: 'company',
      
        label: 'Company',
      
        type: 'select',
      
        placeholder: 'Input Company',
      
        options: '',
      
      },
      {
        
        key: 'employmentType',
      
        label: 'Employment Type',
      
        type: 'select',
      
        placeholder: 'Input Employment Type',
      
        options: '',
      
      },
      {
        
        key: 'branch',
      
        label: 'Branch',
      
        type: 'select',
      
        placeholder: 'Input Branch',
      
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
        
        key: 'designation',
      
        label: 'Designation',
      
        type: 'select',
      
        placeholder: 'Input Designation',
      
        options: '',
      
      },
      {
        
        key: 'employeeGrade',
      
        label: 'Employee Grade',
      
        type: 'select',
      
        placeholder: 'Input Employee Grade',
      
        options: '',
      
      },
      {
        
        key: 'employee',
      
        label: 'Employee',
      
        type: 'select',
      
        placeholder: 'Input Employee',
      
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
        
        key: 'fromDate',
      
        label: 'From Date',
      
        type: 'input',
      
        placeholder: 'Input From Date',
      
        options: '',
      
      },
      {
        
        key: 'toDate',
      
        label: 'To Date',
      
        type: 'input',
      
        placeholder: 'Input To Date',
      
        options: '',
      
      },
      {
        
        key: 'leavePolicy',
      
        label: 'Leave Policy',
      
        type: 'select',
      
        placeholder: 'Input Leave Policy',
      
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
        
        key: 'carryForward',
      
        label: 'Carry Forward',
      
        type: 'input',
      
        placeholder: 'Input Carry Forward',
      
        options: '',
      
      },
      {
        
        key: 'newLeavesAllocatedInDays',
      
        label: 'New Leaves Allocated In Days',
      
        type: 'input',
      
        placeholder: 'Input New Leaves Allocated In Days',
      
        options: '',
      
      },
      {
        
        key: 'allocate',
      
        label: 'Allocate',
      
        type: 'select',
      
        placeholder: 'Input Allocate',
      
        options: '',
      
      },
      
    ]
  };
} 
