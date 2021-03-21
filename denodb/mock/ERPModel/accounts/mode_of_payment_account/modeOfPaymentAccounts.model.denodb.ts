// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: ModeOfPaymentAccount
|--------------------------------------------------------------------------
|
| Model Class and Interface of modeOfPaymentAccounts
|
*/
import {
  DataTypes,
  Model
} from "https://deno.land/x/denodb/mod.ts";


export class ModeOfPaymentAccount extends Model { 
  static table = "modeOfPaymentAccounts";
  static timestamps = true;
  
  static fields = {
    // fields list for ORM Maping
    id: { primaryKey: true, autoIncrement: true },
    company: DataTypes.STRING,
    defaultAccount: DataTypes.STRING,
    
  };

}
