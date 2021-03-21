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


export class SalarySlip extends Model { 
  static table = "salarySlips";
  static timestamps = true;
  
  static fields = {
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

}
