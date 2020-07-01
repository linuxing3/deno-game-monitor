// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: LoanApplication
|--------------------------------------------------------------------------
|
| Model of loanApplications
|
*/
import {
  DataTypes,
  Model
} from "https://deno.land/x/denodb/mod.ts";

export class LoanApplication extends Model { 
  static table = "loanApplications";
  static timestamps = true;
  
  static fields = {
    // fields list for ORM Maping
    id: { primaryKey: true, autoIncrement: true },
    
    applicantType: DataTypes.STRING,
    
    applicant: DataTypes.STRING,
    
    applicantName: DataTypes.STRING,
    
    : DataTypes.STRING,
    
    postingDate: DataTypes.STRING,
    
    status: DataTypes.STRING,
    
    company: DataTypes.STRING,
    
    loanInfo: DataTypes.STRING,
    
    loanType: DataTypes.STRING,
    
    loanAmount: DataTypes.STRING,
    
    requiredByDate: DataTypes.STRING,
    
    : DataTypes.STRING,
    
    reason: DataTypes.STRING,
    
    repaymentInfo: DataTypes.STRING,
    
    repaymentMethod: DataTypes.STRING,
    
    rateOfInterest: DataTypes.STRING,
    
    totalPayableInterest: DataTypes.STRING,
    
    : DataTypes.STRING,
    
    monthlyRepaymentAmount: DataTypes.STRING,
    
    repaymentPeriodInMonths: DataTypes.STRING,
    
    totalPayableAmount: DataTypes.STRING,
    
    amendedFrom: DataTypes.STRING,
    
  };

  static meta = {
    // field meta information for UI render
    fieldProperty: [
      {
        key: 'applicantType',
      
        label: 'Applicant Type',
      
        type: 'select',
      
        placeholder: 'Input Applicant Type',
      
        options: '[object Object]',
      },{
        key: 'applicant',
      
        label: 'Applicant',
      
        type: 'select',
      
        placeholder: 'Input Applicant',
      
        options: '',
      },{
        key: 'applicantName',
      
        label: 'Applicant Name',
      
        type: 'input',
      
        placeholder: 'Input Applicant Name',
      
        options: '',
      },{
        key: '',
      
        label: '',
      
        type: 'input',
      
        placeholder: 'Input ',
      
        options: '',
      },{
        key: 'postingDate',
      
        label: 'Posting Date',
      
        type: 'input',
      
        placeholder: 'Input Posting Date',
      
        options: '',
      },{
        key: 'status',
      
        label: 'Status',
      
        type: 'select',
      
        placeholder: 'Input Status',
      
        options: '[object Object],[object Object]',
      },{
        key: 'company',
      
        label: 'Company',
      
        type: 'select',
      
        placeholder: 'Input Company',
      
        options: '',
      },{
        key: 'loanInfo',
      
        label: 'Loan Info',
      
        type: 'input',
      
        placeholder: 'Input Loan Info',
      
        options: '',
      },{
        key: 'loanType',
      
        label: 'Loan Type',
      
        type: 'select',
      
        placeholder: 'Input Loan Type',
      
        options: '',
      },{
        key: 'loanAmount',
      
        label: 'Loan Amount',
      
        type: 'select',
      
        placeholder: 'Input Loan Amount',
      
        options: '',
      },{
        key: 'requiredByDate',
      
        label: 'Required By Date',
      
        type: 'input',
      
        placeholder: 'Input Required By Date',
      
        options: '',
      },{
        key: '',
      
        label: '',
      
        type: 'input',
      
        placeholder: 'Input ',
      
        options: '',
      },{
        key: 'reason',
      
        label: 'Reason',
      
        type: 'input',
      
        placeholder: 'Input Reason',
      
        options: '',
      },{
        key: 'repaymentInfo',
      
        label: 'Repayment Info',
      
        type: 'input',
      
        placeholder: 'Input Repayment Info',
      
        options: '',
      },{
        key: 'repaymentMethod',
      
        label: 'Repayment Method',
      
        type: 'select',
      
        placeholder: 'Input Repayment Method',
      
        options: '[object Object],[object Object]',
      },{
        key: 'rateOfInterest',
      
        label: 'Rate Of Interest',
      
        type: 'input',
      
        placeholder: 'Input Rate Of Interest',
      
        options: '',
      },{
        key: 'totalPayableInterest',
      
        label: 'Total Payable Interest',
      
        type: 'select',
      
        placeholder: 'Input Total Payable Interest',
      
        options: '',
      },{
        key: '',
      
        label: '',
      
        type: 'input',
      
        placeholder: 'Input ',
      
        options: '',
      },{
        key: 'monthlyRepaymentAmount',
      
        label: 'Monthly Repayment Amount',
      
        type: 'select',
      
        placeholder: 'Input Monthly Repayment Amount',
      
        options: '',
      },{
        key: 'repaymentPeriodInMonths',
      
        label: 'Repayment Period In Months',
      
        type: 'input',
      
        placeholder: 'Input Repayment Period In Months',
      
        options: '',
      },{
        key: 'totalPayableAmount',
      
        label: 'Total Payable Amount',
      
        type: 'select',
      
        placeholder: 'Input Total Payable Amount',
      
        options: '',
      },{
        key: 'amendedFrom',
      
        label: 'Amended From',
      
        type: 'select',
      
        placeholder: 'Input Amended From',
      
        options: '',
      },
    ]
  };
} 
