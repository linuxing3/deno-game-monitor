// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: SalarySlipLoan
|--------------------------------------------------------------------------
|
| Model Class and Interface of salarySlipLoans
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

}
