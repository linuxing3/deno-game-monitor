// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: SalarySlip
|--------------------------------------------------------------------------
|
| Model Class and Interface of salarySlips
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


export class SalarySlip extends Model { 
  static table = "salarySlips";
  static timestamps = true;
  
  static fields: ModelFields = {
    // fields list for ORM Maping
    id: { primaryKey: true, autoIncrement: true },
    postingDate: DataTypes.STRING,
    employee: DataTypes.STRING,
    employeeName: DataTypes.STRING,
    department: DataTypes.STRING,
    designation: DataTypes.STRING,
    branch: DataTypes.STRING,
    status: DataTypes.STRING,
    journalEntry: DataTypes.STRING,
    payrollEntry: DataTypes.STRING,
    company: DataTypes.STRING,
    letterHead: DataTypes.STRING,
    salarySlipBasedOnTimesheet: DataTypes.STRING,
    startDate: DataTypes.STRING,
    endDate: DataTypes.STRING,
    salaryStructure: DataTypes.STRING,
    payrollFrequency: DataTypes.STRING,
    workingDays: DataTypes.STRING,
    leaveWithoutPay: DataTypes.STRING,
    paymentDays: DataTypes.STRING,
    salarySlipTimesheet: DataTypes.STRING,
    totalWorkingHours: DataTypes.STRING,
    hourRate: DataTypes.STRING,
    bankName: DataTypes.STRING,
    bankAccountNo: DataTypes.STRING,
    amendedFrom: DataTypes.STRING,
    deductTaxForUnclaimedEmployeeBenefits: DataTypes.STRING,
    deductTaxForUnsubmittedTaxExemptionProof: DataTypes.STRING,
    earningDeduction: DataTypes.STRING,
    earning: DataTypes.STRING,
    earnings: DataTypes.STRING,
    deduction: DataTypes.STRING,
    deductions: DataTypes.STRING,
    grossPay: DataTypes.STRING,
    totalDeduction: DataTypes.STRING,
    loanRepayment: DataTypes.STRING,
    employeeLoan: DataTypes.STRING,
    totalPrincipalAmount: DataTypes.STRING,
    totalInterestAmount: DataTypes.STRING,
    totalLoanRepayment: DataTypes.STRING,
    netPayInfo: DataTypes.STRING,
    netPay: DataTypes.STRING,
    roundedTotal: DataTypes.STRING,
    totalInWords: DataTypes.STRING,
    
  };

  static meta = {
    // field meta information for UI render
    fieldProperty: [
      {
        key: 'postingDate',
        label: 'Posting Date',
        type: 'input',
        placeholder: 'Input Posting Date',
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
        key: 'department',
        label: 'Department',
        type: 'select',
        placeholder: 'Input Department',
        options: '',
        
      },
      {
        key: 'designation',
        label: 'Designation',
        type: 'input',
        placeholder: 'Input Designation',
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
        options: '[object Object],[object Object]',
        
      },
      {
        key: 'journalEntry',
        label: 'Journal Entry',
        type: 'select',
        placeholder: 'Input Journal Entry',
        options: '',
        
      },
      {
        key: 'payrollEntry',
        label: 'Payroll Entry',
        type: 'select',
        placeholder: 'Input Payroll Entry',
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
        key: 'letterHead',
        label: 'Letter Head',
        type: 'select',
        placeholder: 'Input Letter Head',
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
        key: 'salaryStructure',
        label: 'Salary Structure',
        type: 'select',
        placeholder: 'Input Salary Structure',
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
        key: 'workingDays',
        label: 'Working Days',
        type: 'input',
        placeholder: 'Input Working Days',
        options: '',
        
      },
      {
        key: 'leaveWithoutPay',
        label: 'Leave Without Pay',
        type: 'input',
        placeholder: 'Input Leave Without Pay',
        options: '',
        
      },
      {
        key: 'paymentDays',
        label: 'Payment Days',
        type: 'input',
        placeholder: 'Input Payment Days',
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
        key: 'salarySlipTimesheet',
        label: 'Salary Slip Timesheet',
        type: 'select',
        placeholder: 'Input Salary Slip Timesheet',
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
        key: 'totalWorkingHours',
        label: 'Total Working Hours',
        type: 'input',
        placeholder: 'Input Total Working Hours',
        options: '',
        
      },
      {
        key: 'hourRate',
        label: 'Hour Rate',
        type: 'select',
        placeholder: 'Input Hour Rate',
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
        key: 'bankName',
        label: 'Bank Name',
        type: 'input',
        placeholder: 'Input Bank Name',
        options: '',
        
      },
      {
        key: 'bankAccountNo',
        label: 'Bank Account No',
        type: 'input',
        placeholder: 'Input Bank Account No',
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
        key: 'earningDeduction',
        label: 'Earning Deduction',
        type: 'input',
        placeholder: 'Input Earning Deduction',
        options: '',
        
      },
      {
        key: 'earning',
        label: 'Earning',
        type: 'input',
        placeholder: 'Input Earning',
        options: '',
        
      },
      {
        key: 'earnings',
        label: 'Earnings',
        type: 'select',
        placeholder: 'Input Earnings',
        options: '',
        
      },
      {
        key: 'deduction',
        label: 'Deduction',
        type: 'input',
        placeholder: 'Input Deduction',
        options: '',
        
      },
      {
        key: 'deductions',
        label: 'Deductions',
        type: 'select',
        placeholder: 'Input Deductions',
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
        key: 'grossPay',
        label: 'Gross Pay',
        type: 'select',
        placeholder: 'Input Gross Pay',
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
        key: 'totalDeduction',
        label: 'Total Deduction',
        type: 'select',
        placeholder: 'Input Total Deduction',
        options: '',
        
      },
      {
        key: 'loanRepayment',
        label: 'Loan Repayment',
        type: 'input',
        placeholder: 'Input Loan Repayment',
        options: '',
        
      },
      {
        key: 'employeeLoan',
        label: 'Employee Loan',
        type: 'select',
        placeholder: 'Input Employee Loan',
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
        key: 'totalPrincipalAmount',
        label: 'Total Principal Amount',
        type: 'select',
        placeholder: 'Input Total Principal Amount',
        options: '',
        
      },
      {
        key: 'totalInterestAmount',
        label: 'Total Interest Amount',
        type: 'select',
        placeholder: 'Input Total Interest Amount',
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
        key: 'totalLoanRepayment',
        label: 'Total Loan Repayment',
        type: 'select',
        placeholder: 'Input Total Loan Repayment',
        options: '',
        
      },
      {
        key: 'netPayInfo',
        label: 'Net Pay Info',
        type: 'input',
        placeholder: 'Input Net Pay Info',
        options: '',
        
      },
      {
        key: 'netPay',
        label: 'Net Pay',
        type: 'select',
        placeholder: 'Input Net Pay',
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
        key: 'roundedTotal',
        label: 'Rounded Total',
        type: 'select',
        placeholder: 'Input Rounded Total',
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
        key: 'totalInWords',
        label: 'Total In Words',
        type: 'input',
        placeholder: 'Input Total In Words',
        options: '',
        
      },
      
    ]
  };
}

export interface ISalarySlip {
  id: FieldValue;
  postingDate: FieldValue;
  employee: FieldValue;
  employeeName: FieldValue;
  department: FieldValue;
  designation: FieldValue;
  branch: FieldValue;
  status: FieldValue;
  journalEntry: FieldValue;
  payrollEntry: FieldValue;
  company: FieldValue;
  letterHead: FieldValue;
  salarySlipBasedOnTimesheet: FieldValue;
  startDate: FieldValue;
  endDate: FieldValue;
  salaryStructure: FieldValue;
  payrollFrequency: FieldValue;
  workingDays: FieldValue;
  leaveWithoutPay: FieldValue;
  paymentDays: FieldValue;
  salarySlipTimesheet: FieldValue;
  totalWorkingHours: FieldValue;
  hourRate: FieldValue;
  bankName: FieldValue;
  bankAccountNo: FieldValue;
  amendedFrom: FieldValue;
  deductTaxForUnclaimedEmployeeBenefits: FieldValue;
  deductTaxForUnsubmittedTaxExemptionProof: FieldValue;
  earningDeduction: FieldValue;
  earning: FieldValue;
  earnings: FieldValue;
  deduction: FieldValue;
  deductions: FieldValue;
  grossPay: FieldValue;
  totalDeduction: FieldValue;
  loanRepayment: FieldValue;
  employeeLoan: FieldValue;
  totalPrincipalAmount: FieldValue;
  totalInterestAmount: FieldValue;
  totalLoanRepayment: FieldValue;
  netPayInfo: FieldValue;
  netPay: FieldValue;
  roundedTotal: FieldValue;
  totalInWords: FieldValue;
  
}
