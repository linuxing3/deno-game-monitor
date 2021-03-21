// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: EmployeeAdvance
|--------------------------------------------------------------------------
|
| Model Class and Interface of employeeAdvances
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


export class EmployeeAdvance extends Model { 
  static table = "employeeAdvances";
  static timestamps = true;
  
  static fields: ModelFields = {
    // fields list for ORM Maping
    id: { primaryKey: true, autoIncrement: true },
    series: DataTypes.STRING,
    employee: DataTypes.STRING,
    employeeName: DataTypes.STRING,
    postingDate: DataTypes.STRING,
    department: DataTypes.STRING,
    purpose: DataTypes.STRING,
    advanceAmount: DataTypes.STRING,
    paidAmount: DataTypes.STRING,
    dueAdvanceAmount: DataTypes.STRING,
    claimedAmount: DataTypes.STRING,
    status: DataTypes.STRING,
    company: DataTypes.STRING,
    amendedFrom: DataTypes.STRING,
    advanceAccount: DataTypes.STRING,
    modeOfPayment: DataTypes.STRING,
    
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
        key: '',
        label: '',
        type: 'input',
        placeholder: 'Input ',
        options: '',
        
      },
      {
        key: 'postingDate',
        label: 'Posting Date',
        type: 'input',
        placeholder: 'Input Posting Date',
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
        key: 'purpose',
        label: 'Purpose',
        type: 'input',
        placeholder: 'Input Purpose',
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
        key: 'advanceAmount',
        label: 'Advance Amount',
        type: 'select',
        placeholder: 'Input Advance Amount',
        options: '',
        
      },
      {
        key: 'paidAmount',
        label: 'Paid Amount',
        type: 'select',
        placeholder: 'Input Paid Amount',
        options: '',
        
      },
      {
        key: 'dueAdvanceAmount',
        label: 'Due Advance Amount',
        type: 'select',
        placeholder: 'Input Due Advance Amount',
        options: '',
        
      },
      {
        key: 'claimedAmount',
        label: 'Claimed Amount',
        type: 'select',
        placeholder: 'Input Claimed Amount',
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
        key: 'status',
        label: 'Status',
        type: 'select',
        placeholder: 'Input Status',
        options: '[object Object],[object Object],[object Object],[object Object]',
        
      },
      {
        key: 'company',
        label: 'Company',
        type: 'select',
        placeholder: 'Input Company',
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
        key: '',
        label: '',
        type: 'input',
        placeholder: 'Input ',
        options: '',
        
      },
      {
        key: 'advanceAccount',
        label: 'Advance Account',
        type: 'select',
        placeholder: 'Input Advance Account',
        options: '',
        
      },
      {
        key: 'modeOfPayment',
        label: 'Mode Of Payment',
        type: 'select',
        placeholder: 'Input Mode Of Payment',
        options: '',
        
      },
      
    ]
  };
}

export interface IEmployeeAdvance {
  id: FieldValue;
  series: FieldValue;
  employee: FieldValue;
  employeeName: FieldValue;
  postingDate: FieldValue;
  department: FieldValue;
  purpose: FieldValue;
  advanceAmount: FieldValue;
  paidAmount: FieldValue;
  dueAdvanceAmount: FieldValue;
  claimedAmount: FieldValue;
  status: FieldValue;
  company: FieldValue;
  amendedFrom: FieldValue;
  advanceAccount: FieldValue;
  modeOfPayment: FieldValue;
  
}
