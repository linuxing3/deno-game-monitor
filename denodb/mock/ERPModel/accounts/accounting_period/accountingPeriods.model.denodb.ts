// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: AccountingPeriod
|--------------------------------------------------------------------------
|
| Model Class and Interface of accountingPeriods
|
*/
import {
  DataTypes,
  Model
} from "https://deno.land/x/denodb/mod.ts";


export class AccountingPeriod extends Model { 
  static table = "accountingPeriods";
  static timestamps = true;
  
  static fields = {
    // fields list for ORM Maping
    id: { primaryKey: true, autoIncrement: true },
    periodName: DataTypes.STRING,
    startDate: DataTypes.STRING,
    endDate: DataTypes.STRING,
    company: DataTypes.STRING,
    status: DataTypes.STRING,
    closedDocuments: DataTypes.STRING,
    
  };

}
