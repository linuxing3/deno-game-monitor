// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: SalaryStructure
|--------------------------------------------------------------------------
|
| Model Class and Interface of salaryStructures
|
*/
import {
  DataTypes,
  Model
} from "https://deno.land/x/denodb/mod.ts";


export class SalaryStructure extends Model { 
  static table = "salaryStructures";
  static timestamps = true;
  
  static fields = {
    // fields list for ORM Maping
    id: { primaryKey: true, autoIncrement: true },
    company: DataTypes.STRING,
    letterHead: DataTypes.STRING,
    isActive: DataTypes.STRING,
    payrollFrequency: DataTypes.STRING,
    isDefault: DataTypes.STRING,
    salarySlipBasedOnTimesheet: DataTypes.STRING,
    salaryComponent: DataTypes.STRING,
    hourRate: DataTypes.STRING,
    leaveEncashmentAmountPerDay: DataTypes.STRING,
    maxBenefitsAmount: DataTypes.STRING,
    earning: DataTypes.STRING,
    earnings: DataTypes.STRING,
    deduction: DataTypes.STRING,
    deductions: DataTypes.STRING,
    totalEarning: DataTypes.STRING,
    totalDeduction: DataTypes.STRING,
    netPay: DataTypes.STRING,
    account: DataTypes.STRING,
    modeOfPayment: DataTypes.STRING,
    paymentAccount: DataTypes.STRING,
    amendedFrom: DataTypes.STRING,
    
  };

}
