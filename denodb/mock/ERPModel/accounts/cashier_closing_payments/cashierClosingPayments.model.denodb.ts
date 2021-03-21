// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: CashierClosingPayment
|--------------------------------------------------------------------------
|
| Model Class and Interface of cashierClosingPayments
|
*/
import {
  DataTypes,
  Model
} from "https://deno.land/x/denodb/mod.ts";


export class CashierClosingPayment extends Model { 
  static table = "cashierClosingPayments";
  static timestamps = true;
  
  static fields = {
    // fields list for ORM Maping
    id: { primaryKey: true, autoIncrement: true },
    modeOfPayment: DataTypes.STRING,
    amount: DataTypes.STRING,
    
  };

}
