// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: SalarySlipLoan
|--------------------------------------------------------------------------
|
| Model of salarySlipLoans
|
*/
import {
  DataTypes,
  Model
} from "https://deno.land/x/denodb/mod.ts";

export class SalarySlipLoan extends Model { 
  static table = "salarySlipLoans";
  static timestamps = true;
  
  static fields = {
    // fields list for ORM Maping
    id: { primaryKey: true, autoIncrement: true },
    loan: DataTypes.STRING,
    loanAccount: DataTypes.STRING,
    interestIncomeAccount: DataTypes.STRING,
    principalAmount: DataTypes.STRING,
    interestAmount: DataTypes.STRING,
    totalPayment: DataTypes.STRING,
    
  };

  static meta = {
    // field meta information for UI render
    fieldProperty: [
      {
        
        key: 'loan',
      
        label: 'Loan',
      
        type: 'select',
      
        placeholder: 'Input Loan',
      
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
        
        key: '',
      
        label: '',
      
        type: 'input',
      
        placeholder: 'Input ',
      
        options: '',
      
      },
      {
        
        key: 'principalAmount',
      
        label: 'Principal Amount',
      
        type: 'input',
      
        placeholder: 'Input Principal Amount',
      
        options: '',
      
      },
      {
        
        key: 'interestAmount',
      
        label: 'Interest Amount',
      
        type: 'input',
      
        placeholder: 'Input Interest Amount',
      
        options: '',
      
      },
      {
        
        key: 'totalPayment',
      
        label: 'Total Payment',
      
        type: 'input',
      
        placeholder: 'Input Total Payment',
      
        options: '',
      
      },
      
    ]
  };
} 
