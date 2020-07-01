// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: EmployeeBenefitClaim
|--------------------------------------------------------------------------
|
| Model of employeeBenefitClaims
|
*/
import {
  DataTypes,
  Model
} from "https://deno.land/x/denodb/mod.ts";

export class EmployeeBenefitClaim extends Model { 
  static table = "employeeBenefitClaims";
  static timestamps = true;
  
  static fields = {
    // fields list for ORM Maping
    id: { primaryKey: true, autoIncrement: true },
    employee: DataTypes.STRING,
    employeeName: DataTypes.STRING,
    department: DataTypes.STRING,
    claimDate: DataTypes.STRING,
    benefitTypeAndAmount: DataTypes.STRING,
    claimBenefitFor: DataTypes.STRING,
    maxAmountEligible: DataTypes.STRING,
    payAgainstBenefitClaim: DataTypes.STRING,
    claimedAmount: DataTypes.STRING,
    salarySlip: DataTypes.STRING,
    amendedFrom: DataTypes.STRING,
    expenseProof: DataTypes.STRING,
    attachments: DataTypes.STRING,
    
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
        
        key: 'claimDate',
      
        label: 'Claim Date',
      
        type: 'input',
      
        placeholder: 'Input Claim Date',
      
        options: '',
      
      },
      {
        
        key: 'benefitTypeAndAmount',
      
        label: 'Benefit Type And Amount',
      
        type: 'input',
      
        placeholder: 'Input Benefit Type And Amount',
      
        options: '',
      
      },
      {
        
        key: 'claimBenefitFor',
      
        label: 'Claim Benefit For',
      
        type: 'select',
      
        placeholder: 'Input Claim Benefit For',
      
        options: '',
      
      },
      {
        
        key: 'maxAmountEligible',
      
        label: 'Max Amount Eligible',
      
        type: 'input',
      
        placeholder: 'Input Max Amount Eligible',
      
        options: '',
      
      },
      {
        
        key: 'payAgainstBenefitClaim',
      
        label: 'Pay Against Benefit Claim',
      
        type: 'input',
      
        placeholder: 'Input Pay Against Benefit Claim',
      
        options: '',
      
      },
      {
        
        key: 'claimedAmount',
      
        label: 'Claimed Amount',
      
        type: 'input',
      
        placeholder: 'Input Claimed Amount',
      
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
        
        key: 'amendedFrom',
      
        label: 'Amended From',
      
        type: 'select',
      
        placeholder: 'Input Amended From',
      
        options: '',
      
      },
      {
        
        key: 'expenseProof',
      
        label: 'Expense Proof',
      
        type: 'input',
      
        placeholder: 'Input Expense Proof',
      
        options: '',
      
      },
      {
        
        key: 'attachments',
      
        label: 'Attachments',
      
        type: 'input',
      
        placeholder: 'Input Attachments',
      
        options: '',
      
      },
      
    ]
  };
} 
