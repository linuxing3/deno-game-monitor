// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: EmployeeTaxExemptionProofSubmission
|--------------------------------------------------------------------------
|
| Model Class and Interface of employeeTaxExemptionProofSubmissions
|
*/
import {
  DataTypes,
  Model
} from "https://deno.land/x/denodb/mod.ts";
import {
  ModelFields,
} from "https://deno.land/x/denodb/lib/model.ts";


export class EmployeeTaxExemptionProofSubmission extends Model { 
  static table = "employeeTaxExemptionProofSubmissions";
  static timestamps = true;
  
  static fields: ModelFields = {
    // fields list for ORM Maping
    id: { primaryKey: true, autoIncrement: true },
    employee: DataTypes.STRING,
    company: DataTypes.STRING,
    payrollPeriod: DataTypes.STRING,
    department: DataTypes.STRING,
    submissionDate: DataTypes.STRING,
    totalExemptionAmount: DataTypes.STRING,
    taxExemptionProofs: DataTypes.STRING,
    attachments: DataTypes.STRING,
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
        key: 'company',
        label: 'Company',
        type: 'select',
        placeholder: 'Input Company',
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
        key: 'payrollPeriod',
        label: 'Payroll Period',
        type: 'select',
        placeholder: 'Input Payroll Period',
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
        key: 'submissionDate',
        label: 'Submission Date',
        type: 'input',
        placeholder: 'Input Submission Date',
        options: '',
        
      },
      {
        key: 'totalExemptionAmount',
        label: 'Total Exemption Amount',
        type: 'input',
        placeholder: 'Input Total Exemption Amount',
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
        key: 'taxExemptionProofs',
        label: 'Tax Exemption Proofs',
        type: 'select',
        placeholder: 'Input Tax Exemption Proofs',
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
        key: 'attachments',
        label: 'Attachments',
        type: 'input',
        placeholder: 'Input Attachments',
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
