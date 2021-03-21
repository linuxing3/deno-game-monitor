// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: ExpenseClaim
|--------------------------------------------------------------------------
|
| Model Class and Interface of expenseClaims
|
*/
import {
  DataTypes,
  Model
} from "https://deno.land/x/denodb/mod.ts";


export class ExpenseClaim extends Model { 
  static table = "expenseClaims";
  static timestamps = true;
  
  static fields = {
    // fields list for ORM Maping
    id: { primaryKey: true, autoIncrement: true },
    series: DataTypes.STRING,
    fromEmployee: DataTypes.STRING,
    employeeName: DataTypes.STRING,
    department: DataTypes.STRING,
    expenseApprover: DataTypes.STRING,
    approvalStatus: DataTypes.STRING,
    totalClaimedAmount: DataTypes.STRING,
    totalSanctionedAmount: DataTypes.STRING,
    isPaid: DataTypes.STRING,
    expenses: DataTypes.STRING,
    postingDate: DataTypes.STRING,
    vehicleLog: DataTypes.STRING,
    project: DataTypes.STRING,
    task: DataTypes.STRING,
    totalAmountReimbursed: DataTypes.STRING,
    remark: DataTypes.STRING,
    title: DataTypes.STRING,
    employeesEmailId: DataTypes.STRING,
    accountingDetails: DataTypes.STRING,
    company: DataTypes.STRING,
    modeOfPayment: DataTypes.STRING,
    payableAccount: DataTypes.STRING,
    costCenter: DataTypes.STRING,
    moreDetails: DataTypes.STRING,
    status: DataTypes.STRING,
    amendedFrom: DataTypes.STRING,
    advancePayments: DataTypes.STRING,
    advances: DataTypes.STRING,
    totalAdvanceAmount: DataTypes.STRING,
    
  };

}
