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


export class Loan extends Model { 
  static table = "loans";
  static timestamps = true;
  
  static fields = {
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

}
