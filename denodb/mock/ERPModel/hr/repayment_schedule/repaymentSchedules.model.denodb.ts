// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: RepaymentSchedule
|--------------------------------------------------------------------------
|
| Model Class and Interface of repaymentSchedules
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


export class RepaymentSchedule extends Model { 
  static table = "repaymentSchedules";
  static timestamps = true;
  
  static fields: ModelFields = {
    // fields list for ORM Maping
    id: { primaryKey: true, autoIncrement: true },
    paymentDate: DataTypes.STRING,
    principalAmount: DataTypes.STRING,
    interestAmount: DataTypes.STRING,
    totalPayment: DataTypes.STRING,
    balanceLoanAmount: DataTypes.STRING,
    paid: DataTypes.STRING,
    
  };

  static meta = {
    // field meta information for UI render
    fieldProperty: [
      {
        key: 'paymentDate',
        label: 'Payment Date',
        type: 'input',
        placeholder: 'Input Payment Date',
        options: '',
        
      },
      {
        key: 'principalAmount',
        label: 'Principal Amount',
        type: 'select',
        placeholder: 'Input Principal Amount',
        options: '',
        
      },
      {
        key: 'interestAmount',
        label: 'Interest Amount',
        type: 'select',
        placeholder: 'Input Interest Amount',
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
        key: 'balanceLoanAmount',
        label: 'Balance Loan Amount',
        type: 'select',
        placeholder: 'Input Balance Loan Amount',
        options: '',
        
      },
      {
        key: 'paid',
        label: 'Paid',
        type: 'input',
        placeholder: 'Input Paid',
        options: '',
        
      },
      
    ]
  };
}

export interface IRepaymentSchedule {
  id: FieldValue;
  paymentDate: FieldValue;
  principalAmount: FieldValue;
  interestAmount: FieldValue;
  totalPayment: FieldValue;
  balanceLoanAmount: FieldValue;
  paid: FieldValue;
  
}
