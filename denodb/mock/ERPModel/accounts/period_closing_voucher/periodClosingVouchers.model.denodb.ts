// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: PeriodClosingVoucher
|--------------------------------------------------------------------------
|
| Model Class and Interface of periodClosingVouchers
|
*/
import {
  DataTypes,
  Model
} from "https://deno.land/x/denodb/mod.ts";


export class PeriodClosingVoucher extends Model { 
  static table = "periodClosingVouchers";
  static timestamps = true;
  
  static fields = {
    // fields list for ORM Maping
    id: { primaryKey: true, autoIncrement: true },
    transactionDate: DataTypes.STRING,
    postingDate: DataTypes.STRING,
    closingFiscalYear: DataTypes.STRING,
    amendedFrom: DataTypes.STRING,
    company: DataTypes.STRING,
    closingAccountHead: DataTypes.STRING,
    remarks: DataTypes.STRING,
    
  };

}
