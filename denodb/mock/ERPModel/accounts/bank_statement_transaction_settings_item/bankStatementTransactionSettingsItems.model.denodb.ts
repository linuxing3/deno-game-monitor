// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: BankStatementTransactionSettingsItem
|--------------------------------------------------------------------------
|
| Model Class and Interface of bankStatementTransactionSettingsItems
|
*/
import {
  DataTypes,
  Model
} from "https://deno.land/x/denodb/mod.ts";


export class BankStatementTransactionSettingsItem extends Model { 
  static table = "bankStatementTransactionSettingsItems";
  static timestamps = true;
  
  static fields = {
    // fields list for ORM Maping
    id: { primaryKey: true, autoIncrement: true },
    mappingType: DataTypes.STRING,
    bankData: DataTypes.STRING,
    mappedDataType: DataTypes.STRING,
    mappedData: DataTypes.STRING,
    
  };

}
