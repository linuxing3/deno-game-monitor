// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: TaxWithholdingAccount
|--------------------------------------------------------------------------
|
| Model Class and Interface of taxWithholdingAccounts
|
*/
import {
  DataTypes,
  Model
} from "https://deno.land/x/denodb/mod.ts";


export class TaxWithholdingAccount extends Model { 
  static table = "taxWithholdingAccounts";
  static timestamps = true;
  
  static fields = {
    // fields list for ORM Maping
    id: { primaryKey: true, autoIncrement: true },
    company: DataTypes.STRING,
    account: DataTypes.STRING,
    
  };

}
