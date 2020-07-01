// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: EmployeeBenefitApplication
|--------------------------------------------------------------------------
|
| Model of employeeBenefitApplications
|
*/
import {
  DataTypes,
  Model
} from "https://deno.land/x/denodb/mod.ts";

export class EmployeeBenefitApplication extends Model { 
  static table = "employeeBenefitApplications";
  static timestamps = true;
  
  static fields = {
    // fields list for ORM Maping
    id: { primaryKey: true, autoIncrement: true },
    employee: DataTypes.STRING,
    employeeName: DataTypes.STRING,
    maxBenefitsYearly: DataTypes.STRING,
    remainingBenefitsYearly: DataTypes.STRING,
    date: DataTypes.STRING,
    payrollPeriod: DataTypes.STRING,
    department: DataTypes.STRING,
    amendedFrom: DataTypes.STRING,
    benefitsApplied: DataTypes.STRING,
    employeeBenefits: DataTypes.STRING,
    totals: DataTypes.STRING,
    totalAmount: DataTypes.STRING,
    dispensedAmountProRated: DataTypes.STRING,
    
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
        
        key: 'employeeName',
      
        label: 'Employee Name',
      
        type: 'input',
      
        placeholder: 'Input Employee Name',
      
        options: '',
      
      },
      {
        
        key: 'maxBenefitsYearly',
      
        label: 'Max Benefits Yearly',
      
        type: 'input',
      
        placeholder: 'Input Max Benefits Yearly',
      
        options: '',
      
      },
      {
        
        key: 'remainingBenefitsYearly',
      
        label: 'Remaining Benefits Yearly',
      
        type: 'input',
      
        placeholder: 'Input Remaining Benefits Yearly',
      
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
        
        key: 'date',
      
        label: 'Date',
      
        type: 'input',
      
        placeholder: 'Input Date',
      
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
        
        key: 'amendedFrom',
      
        label: 'Amended From',
      
        type: 'select',
      
        placeholder: 'Input Amended From',
      
        options: '',
      
      },
      {
        
        key: 'benefitsApplied',
      
        label: 'Benefits Applied',
      
        type: 'input',
      
        placeholder: 'Input Benefits Applied',
      
        options: '',
      
      },
      {
        
        key: 'employeeBenefits',
      
        label: 'Employee Benefits',
      
        type: 'select',
      
        placeholder: 'Input Employee Benefits',
      
        options: '',
      
      },
      {
        
        key: 'totals',
      
        label: 'Totals',
      
        type: 'input',
      
        placeholder: 'Input Totals',
      
        options: '',
      
      },
      {
        
        key: 'totalAmount',
      
        label: 'Total Amount',
      
        type: 'input',
      
        placeholder: 'Input Total Amount',
      
        options: '',
      
      },
      {
        
        key: 'dispensedAmountProRated',
      
        label: 'Dispensed Amount Pro Rated',
      
        type: 'input',
      
        placeholder: 'Input Dispensed Amount Pro Rated',
      
        options: '',
      
      },
      
    ]
  };
} 
