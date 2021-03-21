// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: CashierClosing
|--------------------------------------------------------------------------
|
| Model Class and Interface of cashierClosings
|
*/
import {
  DataTypes,
  Model
} from "https://deno.land/x/denodb/mod.ts";


export class CashierClosing extends Model { 
  static table = "cashierClosings";
  static timestamps = true;
  
  static fields = {
    // fields list for ORM Maping
    id: { primaryKey: true, autoIncrement: true },
    series: DataTypes.STRING,
    user: DataTypes.STRING,
    date: DataTypes.STRING,
    fromTime: DataTypes.STRING,
    toTime: DataTypes.STRING,
    expense: DataTypes.STRING,
    custody: DataTypes.STRING,
    returns: DataTypes.STRING,
    outstandingAmount: DataTypes.STRING,
    payments: DataTypes.STRING,
    netAmount: DataTypes.STRING,
    amendedFrom: DataTypes.STRING,
    
  };

}
