// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: RepaymentSchedule
|--------------------------------------------------------------------------
|
| Model Class and Interface of repaymentSchedules
|
*/
import {
  DataTypes,
  Model
} from "https://deno.land/x/denodb/mod.ts";


export class RepaymentSchedule extends Model { 
  static table = "repaymentSchedules";
  static timestamps = true;
  
  static fields = {
    // fields list for ORM Maping
    id: { primaryKey: true, autoIncrement: true },
    paymentDate: DataTypes.STRING,
    principalAmount: DataTypes.STRING,
    interestAmount: DataTypes.STRING,
    totalPayment: DataTypes.STRING,
    balanceLoanAmount: DataTypes.STRING,
    paid: DataTypes.STRING,
    
  };

}
