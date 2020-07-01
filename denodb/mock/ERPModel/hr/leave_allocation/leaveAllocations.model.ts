// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: LeaveAllocation
|--------------------------------------------------------------------------
|
| Model of leaveAllocations
|
*/
import {
  DataTypes,
  Model
} from "https://deno.land/x/denodb/mod.ts";

export class LeaveAllocation extends Model { 
  static table = "leaveAllocations";
  static timestamps = true;
  
  static fields = {
    // fields list for ORM Maping
    id: { primaryKey: true, autoIncrement: true },
    
    series: DataTypes.STRING,
    
    employee: DataTypes.STRING,
    
    employeeName: DataTypes.STRING,
    
    department: DataTypes.STRING,
    
    : DataTypes.STRING,
    
    leaveType: DataTypes.STRING,
    
    fromDate: DataTypes.STRING,
    
    toDate: DataTypes.STRING,
    
    allocation: DataTypes.STRING,
    
    newLeavesAllocated: DataTypes.STRING,
    
    addUnusedLeavesFromPreviousAllocations: DataTypes.STRING,
    
    unusedLeaves: DataTypes.STRING,
    
    totalLeavesAllocated: DataTypes.STRING,
    
    totalLeavesEncashed: DataTypes.STRING,
    
    : DataTypes.STRING,
    
    compensatoryLeaveRequest: DataTypes.STRING,
    
    leavePeriod: DataTypes.STRING,
    
    amendedFrom: DataTypes.STRING,
    
    notes: DataTypes.STRING,
    
    description: DataTypes.STRING,
    
  };

  static meta = {
    // field meta information for UI render
    fieldProperty: [
      {
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
        key: 'department',
      
        label: 'Department',
      
        type: 'select',
      
        placeholder: 'Input Department',
      
        options: '',
      },{
        key: '',
      
        label: '',
      
        type: 'input',
      
        placeholder: 'Input ',
      
        options: '',
      },{
        key: 'leaveType',
      
        label: 'Leave Type',
      
        type: 'select',
      
        placeholder: 'Input Leave Type',
      
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
        key: 'allocation',
      
        label: 'Allocation',
      
        type: 'input',
      
        placeholder: 'Input Allocation',
      
        options: '',
      },{
        key: 'newLeavesAllocated',
      
        label: 'New Leaves Allocated',
      
        type: 'input',
      
        placeholder: 'Input New Leaves Allocated',
      
        options: '',
      },{
        key: 'addUnusedLeavesFromPreviousAllocations',
      
        label: 'Add Unused Leaves From Previous Allocations',
      
        type: 'input',
      
        placeholder: 'Input Add Unused Leaves From Previous Allocations',
      
        options: '',
      },{
        key: 'unusedLeaves',
      
        label: 'Unused Leaves',
      
        type: 'input',
      
        placeholder: 'Input Unused Leaves',
      
        options: '',
      },{
        key: 'totalLeavesAllocated',
      
        label: 'Total Leaves Allocated',
      
        type: 'input',
      
        placeholder: 'Input Total Leaves Allocated',
      
        options: '',
      },{
        key: 'totalLeavesEncashed',
      
        label: 'Total Leaves Encashed',
      
        type: 'input',
      
        placeholder: 'Input Total Leaves Encashed',
      
        options: '',
      },{
        key: '',
      
        label: '',
      
        type: 'input',
      
        placeholder: 'Input ',
      
        options: '',
      },{
        key: 'compensatoryLeaveRequest',
      
        label: 'Compensatory Leave Request',
      
        type: 'select',
      
        placeholder: 'Input Compensatory Leave Request',
      
        options: '',
      },{
        key: 'leavePeriod',
      
        label: 'Leave Period',
      
        type: 'select',
      
        placeholder: 'Input Leave Period',
      
        options: '',
      },{
        key: 'amendedFrom',
      
        label: 'Amended From',
      
        type: 'select',
      
        placeholder: 'Input Amended From',
      
        options: '',
      },{
        key: 'notes',
      
        label: 'Notes',
      
        type: 'input',
      
        placeholder: 'Input Notes',
      
        options: '',
      },{
        key: 'description',
      
        label: 'Description',
      
        type: 'input',
      
        placeholder: 'Input Description',
      
        options: '',
      },
    ]
  };
} 
