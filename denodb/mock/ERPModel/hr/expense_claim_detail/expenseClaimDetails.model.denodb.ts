// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: ExpenseClaimDetail
|--------------------------------------------------------------------------
|
| Model Class and Interface of expenseClaimDetails
|
*/
import {
  DataTypes,
  Model
} from "https://deno.land/x/denodb/mod.ts";


export class ExpenseClaimDetail extends Model { 
  static table = "expenseClaimDetails";
  static timestamps = true;
  
  static fields = {
    // fields list for ORM Maping
    id: { primaryKey: true, autoIncrement: true },
    expenseDate: DataTypes.STRING,
    expenseClaimType: DataTypes.STRING,
    defaultAccount: DataTypes.STRING,
    description: DataTypes.STRING,
    claimAmount: DataTypes.STRING,
    sanctionedAmount: DataTypes.STRING,
    
  };

}
