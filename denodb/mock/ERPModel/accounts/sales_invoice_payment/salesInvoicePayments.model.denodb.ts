// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: SalesInvoicePayment
|--------------------------------------------------------------------------
|
| Model Class and Interface of salesInvoicePayments
|
*/
import {
  DataTypes,
  Model
} from "https://deno.land/x/denodb/mod.ts";


export class SalesInvoicePayment extends Model { 
  static table = "salesInvoicePayments";
  static timestamps = true;
  
  static fields = {
    // fields list for ORM Maping
    id: { primaryKey: true, autoIncrement: true },
    default: DataTypes.STRING,
    modeOfPayment: DataTypes.STRING,
    amount: DataTypes.STRING,
    account: DataTypes.STRING,
    type: DataTypes.STRING,
    baseAmountCompanyCurrency: DataTypes.STRING,
    clearanceDate: DataTypes.STRING,
    
  };

}
