// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: PayrollEntry
|--------------------------------------------------------------------------
|
| Model Class and Interface of payrollEntries
|
*/
import {
  DataTypes,
  Model
} from "https://deno.land/x/denodb/mod.ts";


export class PayrollEntry extends Model { 
  static table = "payrollEntries";
  static timestamps = true;
  
  static fields = {
    // fields list for ORM Maping
    id: { primaryKey: true, autoIncrement: true },
    selectEmployees: DataTypes.STRING,
    postingDate: DataTypes.STRING,
    payrollFrequency: DataTypes.STRING,
    company: DataTypes.STRING,
    employees: DataTypes.STRING,
    branch: DataTypes.STRING,
    department: DataTypes.STRING,
    designation: DataTypes.STRING,
    numberOfEmployees: DataTypes.STRING,
    employeeDetails: DataTypes.STRING,
    validateAttendance: DataTypes.STRING,
    salarySlipBasedOnTimesheet: DataTypes.STRING,
    selectPayrollPeriod: DataTypes.STRING,
    startDate: DataTypes.STRING,
    endDate: DataTypes.STRING,
    deductTaxForUnclaimedEmployeeBenefits: DataTypes.STRING,
    deductTaxForUnsubmittedTaxExemptionProof: DataTypes.STRING,
    accounts: DataTypes.STRING,
    costCenter: DataTypes.STRING,
    project: DataTypes.STRING,
    paymentEntry: DataTypes.STRING,
    paymentAccount: DataTypes.STRING,
    amendedFrom: DataTypes.STRING,
    salarySlipsCreated: DataTypes.STRING,
    salarySlipsSubmitted: DataTypes.STRING,
    
  };

}
