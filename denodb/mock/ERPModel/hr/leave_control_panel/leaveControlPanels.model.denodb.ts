// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: LeaveControlPanel
|--------------------------------------------------------------------------
|
| Model Class and Interface of leaveControlPanels
|
*/
import {
  DataTypes,
  Model
} from "https://deno.land/x/denodb/mod.ts";
import {
  FieldValue,
} from "https://deno.land/x/denodb/lib/query-builder.ts";
import {
  ModelFields,
} from "https://deno.land/x/denodb/lib/model.ts";


export class LeaveControlPanel extends Model { 
  static table = "leaveControlPanels";
  static timestamps = true;
  
  static fields: ModelFields = {
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

export interface ILeaveControlPanel {
  id: FieldValue;
  company: FieldValue;
  employmentType: FieldValue;
  branch: FieldValue;
  department: FieldValue;
  designation: FieldValue;
  employeeGrade: FieldValue;
  employee: FieldValue;
  fromDate: FieldValue;
  toDate: FieldValue;
  leavePolicy: FieldValue;
  leaveType: FieldValue;
  carryForward: FieldValue;
  newLeavesAllocatedInDays: FieldValue;
  allocate: FieldValue;
  
}
