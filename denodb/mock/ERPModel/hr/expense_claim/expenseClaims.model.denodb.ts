// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: ExpenseClaim
|--------------------------------------------------------------------------
|
| Model Class and Interface of expenseClaims
|
*/
import {
  DataTypes,
  Model
} from "https://deno.land/x/denodb/mod.ts";
import {
  ModelFields,
} from "https://deno.land/x/denodb/lib/model.ts";


export class ExpenseClaim extends Model { 
  static table = "expenseClaims";
  static timestamps = true;
  
  static fields: ModelFields = {
    // fields list for ORM Maping
    id: { primaryKey: true, autoIncrement: true },
    series: DataTypes.STRING,
    fromEmployee: DataTypes.STRING,
    employeeName: DataTypes.STRING,
    department: DataTypes.STRING,
    expenseApprover: DataTypes.STRING,
    approvalStatus: DataTypes.STRING,
    totalClaimedAmount: DataTypes.STRING,
    totalSanctionedAmount: DataTypes.STRING,
    isPaid: DataTypes.STRING,
    expenses: DataTypes.STRING,
    postingDate: DataTypes.STRING,
    vehicleLog: DataTypes.STRING,
    project: DataTypes.STRING,
    task: DataTypes.STRING,
    totalAmountReimbursed: DataTypes.STRING,
    remark: DataTypes.STRING,
    title: DataTypes.STRING,
    employeesEmailId: DataTypes.STRING,
    accountingDetails: DataTypes.STRING,
    company: DataTypes.STRING,
    modeOfPayment: DataTypes.STRING,
    payableAccount: DataTypes.STRING,
    costCenter: DataTypes.STRING,
    moreDetails: DataTypes.STRING,
    status: DataTypes.STRING,
    amendedFrom: DataTypes.STRING,
    advancePayments: DataTypes.STRING,
    advances: DataTypes.STRING,
    totalAdvanceAmount: DataTypes.STRING,
    
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
        key: 'fromEmployee',
        label: 'From Employee',
        type: 'select',
        placeholder: 'Input From Employee',
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
        key: 'expenseApprover',
        label: 'Expense Approver',
        type: 'select',
        placeholder: 'Input Expense Approver',
        options: '',
        
      },
      {
        key: 'approvalStatus',
        label: 'Approval Status',
        type: 'select',
        placeholder: 'Input Approval Status',
        options: '[object Object],[object Object]',
        
      },
      {
        key: 'totalClaimedAmount',
        label: 'Total Claimed Amount',
        type: 'select',
        placeholder: 'Input Total Claimed Amount',
        options: '',
        
      },
      {
        key: 'totalSanctionedAmount',
        label: 'Total Sanctioned Amount',
        type: 'select',
        placeholder: 'Input Total Sanctioned Amount',
        options: '',
        
      },
      {
        key: 'isPaid',
        label: 'Is Paid',
        type: 'input',
        placeholder: 'Input Is Paid',
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
        key: 'expenses',
        label: 'Expenses',
        type: 'select',
        placeholder: 'Input Expenses',
        options: '',
        
      },
      {
        key: '',
        label: '',
        type: 'select',
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
        key: 'vehicleLog',
        label: 'Vehicle Log',
        type: 'select',
        placeholder: 'Input Vehicle Log',
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
        key: 'task',
        label: 'Task',
        type: 'select',
        placeholder: 'Input Task',
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
        key: 'totalAmountReimbursed',
        label: 'Total Amount Reimbursed',
        type: 'select',
        placeholder: 'Input Total Amount Reimbursed',
        options: '',
        
      },
      {
        key: 'remark',
        label: 'Remark',
        type: 'input',
        placeholder: 'Input Remark',
        options: '',
        
      },
      {
        key: 'title',
        label: 'Title',
        type: 'input',
        placeholder: 'Input Title',
        options: '',
        
      },
      {
        key: 'employeesEmailId',
        label: 'Employees Email Id',
        type: 'input',
        placeholder: 'Input Employees Email Id',
        options: '',
        
      },
      {
        key: 'accountingDetails',
        label: 'Accounting Details',
        type: 'input',
        placeholder: 'Input Accounting Details',
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
        key: 'modeOfPayment',
        label: 'Mode Of Payment',
        type: 'select',
        placeholder: 'Input Mode Of Payment',
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
        key: 'payableAccount',
        label: 'Payable Account',
        type: 'select',
        placeholder: 'Input Payable Account',
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
        key: 'moreDetails',
        label: 'More Details',
        type: 'input',
        placeholder: 'Input More Details',
        options: '',
        
      },
      {
        key: 'status',
        label: 'Status',
        type: 'select',
        placeholder: 'Input Status',
        options: '[object Object],[object Object],[object Object],[object Object],[object Object]',
        
      },
      {
        key: 'amendedFrom',
        label: 'Amended From',
        type: 'select',
        placeholder: 'Input Amended From',
        options: '',
        
      },
      {
        key: 'advancePayments',
        label: 'Advance Payments',
        type: 'input',
        placeholder: 'Input Advance Payments',
        options: '',
        
      },
      {
        key: 'advances',
        label: 'Advances',
        type: 'select',
        placeholder: 'Input Advances',
        options: '',
        
      },
      {
        key: 'totalAdvanceAmount',
        label: 'Total Advance Amount',
        type: 'select',
        placeholder: 'Input Total Advance Amount',
        options: '',
        
      },
      
    ]
  };
}
