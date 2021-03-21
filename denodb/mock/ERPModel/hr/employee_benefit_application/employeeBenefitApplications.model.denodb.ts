// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: EmployeeBenefitApplication
|--------------------------------------------------------------------------
|
| Model Class and Interface of employeeBenefitApplications
|
*/
import {
  DataTypes,
  Model
} from "https://deno.land/x/denodb/mod.ts";


export class EmployeeBenefitApplication extends Model { 
  static table = "employeeBenefitApplications";
  static timestamps = true;
  
  static fields = {
    // fields list for ORM Maping
    id: { primaryKey: true, autoIncrement: true },
    employee: DataTypes.STRING,
    employeeName: DataTypes.STRING,
    maxBenefitsYearly: DataTypes.STRING,
    remainingBenefitsYearly: DataTypes.STRING,
    date: DataTypes.STRING,
    payrollPeriod: DataTypes.STRING,
    department: DataTypes.STRING,
    amendedFrom: DataTypes.STRING,
    benefitsApplied: DataTypes.STRING,
    employeeBenefits: DataTypes.STRING,
    totals: DataTypes.STRING,
    totalAmount: DataTypes.STRING,
    dispensedAmountProRated: DataTypes.STRING,
    
  };

}
