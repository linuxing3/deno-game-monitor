// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: PayrollEntry
|--------------------------------------------------------------------------
|
| Model Class and Interface of payrollEntries
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


export class PayrollEntry extends Model { 
  static table = "payrollEntries";
  static timestamps = true;
  
  static fields: ModelFields = {
    // fields list for ORM Maping
    id: { primaryKey: true, autoIncrement: true },
    selectEmployees: DataTypes.STRING,
    postingDate: DataTypes.STRING,
    payrollFrequency: DataTypes.STRING,
    company: DataTypes.STRING,
    employees: DataTypes.STRING,
    branch: DataTypes.STRING,
    department: DataTypes.STRING,
    designation: DataTypes.STRING,
    numberOfEmployees: DataTypes.STRING,
    employeeDetails: DataTypes.STRING,
    validateAttendance: DataTypes.STRING,
    salarySlipBasedOnTimesheet: DataTypes.STRING,
    selectPayrollPeriod: DataTypes.STRING,
    startDate: DataTypes.STRING,
    endDate: DataTypes.STRING,
    deductTaxForUnclaimedEmployeeBenefits: DataTypes.STRING,
    deductTaxForUnsubmittedTaxExemptionProof: DataTypes.STRING,
    accounts: DataTypes.STRING,
    costCenter: DataTypes.STRING,
    project: DataTypes.STRING,
    paymentEntry: DataTypes.STRING,
    paymentAccount: DataTypes.STRING,
    amendedFrom: DataTypes.STRING,
    salarySlipsCreated: DataTypes.STRING,
    salarySlipsSubmitted: DataTypes.STRING,
    
  };

  static meta = {
    // field meta information for UI render
    fieldProperty: [
      {
        key: 'selectEmployees',
        label: 'Select Employees',
        type: 'input',
        placeholder: 'Input Select Employees',
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
        key: 'payrollFrequency',
        label: 'Payroll Frequency',
        type: 'select',
        placeholder: 'Input Payroll Frequency',
        options: '[object Object],[object Object],[object Object],[object Object],[object Object]',
        
      },
      {
        key: '',
        label: '',
        type: 'input',
        placeholder: 'Input ',
        options: '',
        
      },
      {
        key: 'company',
        label: 'Company',
        type: 'select',
        placeholder: 'Input Company',
        options: '',
        
      },
      {
        key: 'employees',
        label: 'Employees',
        type: 'input',
        placeholder: 'Input Employees',
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
        key: '',
        label: '',
        type: 'input',
        placeholder: 'Input ',
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
        key: 'numberOfEmployees',
        label: 'Number Of Employees',
        type: 'input',
        placeholder: 'Input Number Of Employees',
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
        key: 'employeeDetails',
        label: 'Employee Details',
        type: 'select',
        placeholder: 'Input Employee Details',
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
        key: 'validateAttendance',
        label: 'Validate Attendance',
        type: 'input',
        placeholder: 'Input Validate Attendance',
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
        key: '',
        label: '',
        type: 'input',
        placeholder: 'Input ',
        options: '',
        
      },
      {
        key: 'salarySlipBasedOnTimesheet',
        label: 'Salary Slip Based On Timesheet',
        type: 'input',
        placeholder: 'Input Salary Slip Based On Timesheet',
        options: '',
        
      },
      {
        key: 'selectPayrollPeriod',
        label: 'Select Payroll Period',
        type: 'input',
        placeholder: 'Input Select Payroll Period',
        options: '',
        
      },
      {
        key: 'startDate',
        label: 'Start Date',
        type: 'input',
        placeholder: 'Input Start Date',
        options: '',
        
      },
      {
        key: 'endDate',
        label: 'End Date',
        type: 'input',
        placeholder: 'Input End Date',
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
        key: 'deductTaxForUnclaimedEmployeeBenefits',
        label: 'Deduct Tax For Unclaimed Employee Benefits',
        type: 'input',
        placeholder: 'Input Deduct Tax For Unclaimed Employee Benefits',
        options: '',
        
      },
      {
        key: 'deductTaxForUnsubmittedTaxExemptionProof',
        label: 'Deduct Tax For Unsubmitted Tax Exemption Proof',
        type: 'input',
        placeholder: 'Input Deduct Tax For Unsubmitted Tax Exemption Proof',
        options: '',
        
      },
      {
        key: 'accounts',
        label: 'Accounts',
        type: 'input',
        placeholder: 'Input Accounts',
        options: '',
        
      },
      {
        key: 'costCenter',
        label: 'Cost Center',
        type: 'select',
        placeholder: 'Input Cost Center',
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
        key: 'project',
        label: 'Project',
        type: 'select',
        placeholder: 'Input Project',
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
        key: 'paymentEntry',
        label: 'Payment Entry',
        type: 'input',
        placeholder: 'Input Payment Entry',
        options: '',
        
      },
      {
        key: 'paymentAccount',
        label: 'Payment Account',
        type: 'select',
        placeholder: 'Input Payment Account',
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
        key: 'amendedFrom',
        label: 'Amended From',
        type: 'select',
        placeholder: 'Input Amended From',
        options: '',
        
      },
      {
        key: 'salarySlipsCreated',
        label: 'Salary Slips Created',
        type: 'input',
        placeholder: 'Input Salary Slips Created',
        options: '',
        
      },
      {
        key: 'salarySlipsSubmitted',
        label: 'Salary Slips Submitted',
        type: 'input',
        placeholder: 'Input Salary Slips Submitted',
        options: '',
        
      },
      
    ]
  };
}

export interface IPayrollEntry {
  id: FieldValue;
  selectEmployees: FieldValue;
  postingDate: FieldValue;
  payrollFrequency: FieldValue;
  company: FieldValue;
  employees: FieldValue;
  branch: FieldValue;
  department: FieldValue;
  designation: FieldValue;
  numberOfEmployees: FieldValue;
  employeeDetails: FieldValue;
  validateAttendance: FieldValue;
  salarySlipBasedOnTimesheet: FieldValue;
  selectPayrollPeriod: FieldValue;
  startDate: FieldValue;
  endDate: FieldValue;
  deductTaxForUnclaimedEmployeeBenefits: FieldValue;
  deductTaxForUnsubmittedTaxExemptionProof: FieldValue;
  accounts: FieldValue;
  costCenter: FieldValue;
  project: FieldValue;
  paymentEntry: FieldValue;
  paymentAccount: FieldValue;
  amendedFrom: FieldValue;
  salarySlipsCreated: FieldValue;
  salarySlipsSubmitted: FieldValue;
  
}
