// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: LoanApplication
|--------------------------------------------------------------------------
|
| Model Class and Interface of loanApplications
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
    postingDate: DataTypes.STRING,
    status: DataTypes.STRING,
    company: DataTypes.STRING,
    loanInfo: DataTypes.STRING,
    loanType: DataTypes.STRING,
    loanAmount: DataTypes.STRING,
    requiredByDate: DataTypes.STRING,
    reason: DataTypes.STRING,
    repaymentInfo: DataTypes.STRING,
    repaymentMethod: DataTypes.STRING,
    rateOfInterest: DataTypes.STRING,
    totalPayableInterest: DataTypes.STRING,
    monthlyRepaymentAmount: DataTypes.STRING,
    repaymentPeriodInMonths: DataTypes.STRING,
    totalPayableAmount: DataTypes.STRING,
    amendedFrom: DataTypes.STRING,
    
  };

}
