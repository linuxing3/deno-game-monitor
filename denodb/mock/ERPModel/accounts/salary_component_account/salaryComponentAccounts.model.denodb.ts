// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: SalaryComponentAccount
|--------------------------------------------------------------------------
|
| Model Class and Interface of salaryComponentAccounts
|
*/
import {
  DataTypes,
  Model
} from "https://deno.land/x/denodb/mod.ts";


export class SalaryComponentAccount extends Model { 
  static table = "salaryComponentAccounts";
  static timestamps = true;
  
  static fields = {
    // fields list for ORM Maping
    id: { primaryKey: true, autoIncrement: true },
    company: DataTypes.STRING,
    defaultAccount: DataTypes.STRING,
    
  };

}
