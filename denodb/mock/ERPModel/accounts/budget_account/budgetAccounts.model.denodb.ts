// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: BudgetAccount
|--------------------------------------------------------------------------
|
| Model Class and Interface of budgetAccounts
|
*/
import {
  DataTypes,
  Model
} from "https://deno.land/x/denodb/mod.ts";


export class BudgetAccount extends Model { 
  static table = "budgetAccounts";
  static timestamps = true;
  
  static fields = {
    // fields list for ORM Maping
    id: { primaryKey: true, autoIncrement: true },
    account: DataTypes.STRING,
    budgetAmount: DataTypes.STRING,
    
  };

}
