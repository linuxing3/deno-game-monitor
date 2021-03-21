// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: EmployeeAdvance
|--------------------------------------------------------------------------
|
| Model Class and Interface of employeeAdvances
|
*/
import {
  DataTypes,
  Model
} from "https://deno.land/x/denodb/mod.ts";


export class EmployeeAdvance extends Model { 
  static table = "employeeAdvances";
  static timestamps = true;
  
  static fields = {
    // fields list for ORM Maping
    id: { primaryKey: true, autoIncrement: true },
    series: DataTypes.STRING,
    employee: DataTypes.STRING,
    employeeName: DataTypes.STRING,
    postingDate: DataTypes.STRING,
    department: DataTypes.STRING,
    purpose: DataTypes.STRING,
    advanceAmount: DataTypes.STRING,
    paidAmount: DataTypes.STRING,
    dueAdvanceAmount: DataTypes.STRING,
    claimedAmount: DataTypes.STRING,
    status: DataTypes.STRING,
    company: DataTypes.STRING,
    amendedFrom: DataTypes.STRING,
    advanceAccount: DataTypes.STRING,
    modeOfPayment: DataTypes.STRING,
    
  };

}
