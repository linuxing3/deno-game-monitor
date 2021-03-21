// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: AdditionalSalary
|--------------------------------------------------------------------------
|
| Model Class and Interface of additionalSalaries
|
*/
import {
  DataTypes,
  Model
} from "https://deno.land/x/denodb/mod.ts";


export class AdditionalSalary extends Model { 
  static table = "additionalSalaries";
  static timestamps = true;
  
  static fields = {
    // fields list for ORM Maping
    id: { primaryKey: true, autoIncrement: true },
    series: DataTypes.STRING,
    employee: DataTypes.STRING,
    salaryComponent: DataTypes.STRING,
    amount: DataTypes.STRING,
    overwriteSalaryStructureAmount: DataTypes.STRING,
    payrollDate: DataTypes.STRING,
    employeeName: DataTypes.STRING,
    department: DataTypes.STRING,
    company: DataTypes.STRING,
    salarySlip: DataTypes.STRING,
    salaryComponentType: DataTypes.STRING,
    amendedFrom: DataTypes.STRING,
    
  };

}
