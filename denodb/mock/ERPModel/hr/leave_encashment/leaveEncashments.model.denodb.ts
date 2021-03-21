// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: LeaveEncashment
|--------------------------------------------------------------------------
|
| Model Class and Interface of leaveEncashments
|
*/
import {
  DataTypes,
  Model
} from "https://deno.land/x/denodb/mod.ts";


export class LeaveEncashment extends Model { 
  static table = "leaveEncashments";
  static timestamps = true;
  
  static fields = {
    // fields list for ORM Maping
    id: { primaryKey: true, autoIncrement: true },
    leavePeriod: DataTypes.STRING,
    employee: DataTypes.STRING,
    employeeName: DataTypes.STRING,
    department: DataTypes.STRING,
    leaveType: DataTypes.STRING,
    leaveAllocation: DataTypes.STRING,
    leaveBalance: DataTypes.STRING,
    encashableDays: DataTypes.STRING,
    amendedFrom: DataTypes.STRING,
    payroll: DataTypes.STRING,
    encashmentAmount: DataTypes.STRING,
    encashmentDate: DataTypes.STRING,
    additionalSalary: DataTypes.STRING,
    
  };

  static meta = {
    // field meta information for UI render
    fieldProperty: [
      {
        key: 'leavePeriod',
        label: 'Leave Period',
        type: 'select',
        placeholder: 'Input Leave Period',
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
        key: 'leaveType',
        label: 'Leave Type',
        type: 'select',
        placeholder: 'Input Leave Type',
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
        key: 'leaveAllocation',
        label: 'Leave Allocation',
        type: 'select',
        placeholder: 'Input Leave Allocation',
        options: '',
        
      },
      {
        key: 'leaveBalance',
        label: 'Leave Balance',
        type: 'input',
        placeholder: 'Input Leave Balance',
        options: '',
        
      },
      {
        key: 'encashableDays',
        label: 'Encashable Days',
        type: 'input',
        placeholder: 'Input Encashable Days',
        options: '',
        
      },
      {
        key: 'amendedFrom',
        label: 'Amended From',
        type: 'select',
        placeholder: 'Input Amended From',
        options: '',
        
      },
      {
        key: 'payroll',
        label: 'Payroll',
        type: 'input',
        placeholder: 'Input Payroll',
        options: '',
        
      },
      {
        key: 'encashmentAmount',
        label: 'Encashment Amount',
        type: 'input',
        placeholder: 'Input Encashment Amount',
        options: '',
        
      },
      {
        key: 'encashmentDate',
        label: 'Encashment Date',
        type: 'input',
        placeholder: 'Input Encashment Date',
        options: '',
        
      },
      {
        key: 'additionalSalary',
        label: 'Additional Salary',
        type: 'select',
        placeholder: 'Input Additional Salary',
        options: '',
        
      },
      
    ]
  };
}
