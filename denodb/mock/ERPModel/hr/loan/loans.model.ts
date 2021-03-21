// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: Loan
|--------------------------------------------------------------------------
|
| Model Class and Interface of loans
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


export class Loan extends Model { 
  static table = "loans";
  static timestamps = true;
  
  static fields: ModelFields = {
    // fields list for ORM Maping
    id: { primaryKey: true, autoIncrement: true },
    applicantType: DataTypes.STRING,
    applicant: DataTypes.STRING,
    applicantName: DataTypes.STRING,
    loanApplication: DataTypes.STRING,
    loanType: DataTypes.STRING,
    postingDate: DataTypes.STRING,
    company: DataTypes.STRING,
    status: DataTypes.STRING,
    repayFromSalary: DataTypes.STRING,
    loanDetails: DataTypes.STRING,
    loanAmount: DataTypes.STRING,
    rateOfInterestYear: DataTypes.STRING,
    disbursementDate: DataTypes.STRING,
    repaymentStartDate: DataTypes.STRING,
    repaymentMethod: DataTypes.STRING,
    repaymentPeriodInMonths: DataTypes.STRING,
    monthlyRepaymentAmount: DataTypes.STRING,
    accountInfo: DataTypes.STRING,
    modeOfPayment: DataTypes.STRING,
    paymentAccount: DataTypes.STRING,
    loanAccount: DataTypes.STRING,
    interestIncomeAccount: DataTypes.STRING,
    repaymentSchedule: DataTypes.STRING,
    totals: DataTypes.STRING,
    totalPayment: DataTypes.STRING,
    totalInterestPayable: DataTypes.STRING,
    totalAmountPaid: DataTypes.STRING,
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
        
      },
      {
        key: 'applicant',
        label: 'Applicant',
        type: 'select',
        placeholder: 'Input Applicant',
        options: '',
        
      },
      {
        key: 'applicantName',
        label: 'Applicant Name',
        type: 'input',
        placeholder: 'Input Applicant Name',
        options: '',
        
      },
      {
        key: 'loanApplication',
        label: 'Loan Application',
        type: 'select',
        placeholder: 'Input Loan Application',
        options: '',
        
      },
      {
        key: 'loanType',
        label: 'Loan Type',
        type: 'select',
        placeholder: 'Input Loan Type',
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
        key: 'company',
        label: 'Company',
        type: 'select',
        placeholder: 'Input Company',
        options: '',
        
      },
      {
        key: 'status',
        label: 'Status',
        type: 'select',
        placeholder: 'Input Status',
        options: '[object Object],[object Object]',
        
      },
      {
        key: 'repayFromSalary',
        label: 'Repay From Salary',
        type: 'input',
        placeholder: 'Input Repay From Salary',
        options: '',
        
      },
      {
        key: 'loanDetails',
        label: 'Loan Details',
        type: 'input',
        placeholder: 'Input Loan Details',
        options: '',
        
      },
      {
        key: 'loanAmount',
        label: 'Loan Amount',
        type: 'select',
        placeholder: 'Input Loan Amount',
        options: '',
        
      },
      {
        key: 'rateOfInterestYear',
        label: 'Rate Of Interest Year',
        type: 'input',
        placeholder: 'Input Rate Of Interest Year',
        options: '',
        
      },
      {
        key: 'disbursementDate',
        label: 'Disbursement Date',
        type: 'input',
        placeholder: 'Input Disbursement Date',
        options: '',
        
      },
      {
        key: 'repaymentStartDate',
        label: 'Repayment Start Date',
        type: 'input',
        placeholder: 'Input Repayment Start Date',
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
        key: 'repaymentMethod',
        label: 'Repayment Method',
        type: 'select',
        placeholder: 'Input Repayment Method',
        options: '[object Object],[object Object]',
        
      },
      {
        key: 'repaymentPeriodInMonths',
        label: 'Repayment Period In Months',
        type: 'input',
        placeholder: 'Input Repayment Period In Months',
        options: '',
        
      },
      {
        key: 'monthlyRepaymentAmount',
        label: 'Monthly Repayment Amount',
        type: 'select',
        placeholder: 'Input Monthly Repayment Amount',
        options: '',
        
      },
      {
        key: 'accountInfo',
        label: 'Account Info',
        type: 'input',
        placeholder: 'Input Account Info',
        options: '',
        
      },
      {
        key: 'modeOfPayment',
        label: 'Mode Of Payment',
        type: 'select',
        placeholder: 'Input Mode Of Payment',
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
        key: 'loanAccount',
        label: 'Loan Account',
        type: 'select',
        placeholder: 'Input Loan Account',
        options: '',
        
      },
      {
        key: 'interestIncomeAccount',
        label: 'Interest Income Account',
        type: 'select',
        placeholder: 'Input Interest Income Account',
        options: '',
        
      },
      {
        key: 'repaymentSchedule',
        label: 'Repayment Schedule',
        type: 'input',
        placeholder: 'Input Repayment Schedule',
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
        key: 'totalPayment',
        label: 'Total Payment',
        type: 'select',
        placeholder: 'Input Total Payment',
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
        key: 'totalInterestPayable',
        label: 'Total Interest Payable',
        type: 'select',
        placeholder: 'Input Total Interest Payable',
        options: '',
        
      },
      {
        key: 'totalAmountPaid',
        label: 'Total Amount Paid',
        type: 'select',
        placeholder: 'Input Total Amount Paid',
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

export interface ILoan {
  id: FieldValue;
  applicantType: FieldValue;
  applicant: FieldValue;
  applicantName: FieldValue;
  loanApplication: FieldValue;
  loanType: FieldValue;
  postingDate: FieldValue;
  company: FieldValue;
  status: FieldValue;
  repayFromSalary: FieldValue;
  loanDetails: FieldValue;
  loanAmount: FieldValue;
  rateOfInterestYear: FieldValue;
  disbursementDate: FieldValue;
  repaymentStartDate: FieldValue;
  repaymentMethod: FieldValue;
  repaymentPeriodInMonths: FieldValue;
  monthlyRepaymentAmount: FieldValue;
  accountInfo: FieldValue;
  modeOfPayment: FieldValue;
  paymentAccount: FieldValue;
  loanAccount: FieldValue;
  interestIncomeAccount: FieldValue;
  repaymentSchedule: FieldValue;
  totals: FieldValue;
  totalPayment: FieldValue;
  totalInterestPayable: FieldValue;
  totalAmountPaid: FieldValue;
  amendedFrom: FieldValue;
  
}
