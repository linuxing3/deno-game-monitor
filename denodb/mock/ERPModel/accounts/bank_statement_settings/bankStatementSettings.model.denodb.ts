// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: BankStatementSetting
|--------------------------------------------------------------------------
|
| Model Class and Interface of bankStatementSettings
|
*/
import {
  DataTypes,
  Model
} from "https://deno.land/x/denodb/mod.ts";


export class BankStatementSetting extends Model { 
  static table = "bankStatementSettings";
  static timestamps = true;
  
  static fields = {
    // fields list for ORM Maping
    id: { primaryKey: true, autoIncrement: true },
    bankAccount: DataTypes.STRING,
    dateFormat: DataTypes.STRING,
    statementHeaderMapping: DataTypes.STRING,
    statementHeaders: DataTypes.STRING,
    transactionDataMapping: DataTypes.STRING,
    mappedItems: DataTypes.STRING,
    
  };

}
