// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: ExpenseClaimAdvance
|--------------------------------------------------------------------------
|
| Model Class and Interface of expenseClaimAdvances
|
*/
import {
  DataTypes,
  Model
} from "https://deno.land/x/denodb/mod.ts";


export class ExpenseClaimAdvance extends Model { 
  static table = "expenseClaimAdvances";
  static timestamps = true;
  
  static fields = {
    // fields list for ORM Maping
    id: { primaryKey: true, autoIncrement: true },
    employeeAdvance: DataTypes.STRING,
    postingDate: DataTypes.STRING,
    advancePaid: DataTypes.STRING,
    unclaimedAmount: DataTypes.STRING,
    allocatedAmount: DataTypes.STRING,
    advanceAccount: DataTypes.STRING,
    
  };

}
