// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: AdditionalSalary
|--------------------------------------------------------------------------
|
| Model Class and Interface of additionalSalarys
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


export class AdditionalSalary extends Model { 
  static table = "additionalSalarys";
  static timestamps = true;
  
  static fields: ModelFields = {
    // fields list for ORM Maping
    id: { primaryKey: true, autoIncrement: true },
    series: DataTypes.STRING,
    employee: DataTypes.STRING,
    salaryComponent: DataTypes.STRING,
    amount: DataTypes.STRING,
    overwriteSalaryStructureAmount: DataTypes.STRING,
    payrollDate: DataTypes.STRING,
    employeeName: DataTypes.STRING,
    department: DataTypes.STRING,
    company: DataTypes.STRING,
    salarySlip: DataTypes.STRING,
    salaryComponentType: DataTypes.STRING,
    amendedFrom: DataTypes.STRING,
    
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
        key: 'salaryComponent',
        label: 'Salary Component',
        type: 'select',
        placeholder: 'Input Salary Component',
        options: '',
        
      },
      {
        key: 'amount',
        label: 'Amount',
        type: 'input',
        placeholder: 'Input Amount',
        options: '',
        
      },
      {
        key: 'overwriteSalaryStructureAmount',
        label: 'Overwrite Salary Structure Amount',
        type: 'input',
        placeholder: 'Input Overwrite Salary Structure Amount',
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
        key: 'payrollDate',
        label: 'Payroll Date',
        type: 'input',
        placeholder: 'Input Payroll Date',
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
        key: 'company',
        label: 'Company',
        type: 'select',
        placeholder: 'Input Company',
        options: '',
        
      },
      {
        key: 'salarySlip',
        label: 'Salary Slip',
        type: 'select',
        placeholder: 'Input Salary Slip',
        options: '',
        
      },
      {
        key: 'salaryComponentType',
        label: 'Salary Component Type',
        type: 'input',
        placeholder: 'Input Salary Component Type',
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

export interface IAdditionalSalary {
  id: FieldValue;
  series: FieldValue;
  employee: FieldValue;
  salaryComponent: FieldValue;
  amount: FieldValue;
  overwriteSalaryStructureAmount: FieldValue;
  payrollDate: FieldValue;
  employeeName: FieldValue;
  department: FieldValue;
  company: FieldValue;
  salarySlip: FieldValue;
  salaryComponentType: FieldValue;
  amendedFrom: FieldValue;
  
}
