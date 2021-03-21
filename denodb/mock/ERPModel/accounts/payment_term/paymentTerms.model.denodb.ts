// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: PaymentTerm
|--------------------------------------------------------------------------
|
| Model Class and Interface of paymentTerms
|
*/
import {
  DataTypes,
  Model
} from "https://deno.land/x/denodb/mod.ts";


export class PaymentTerm extends Model { 
  static table = "paymentTerms";
  static timestamps = true;
  
  static fields = {
    // fields list for ORM Maping
    id: { primaryKey: true, autoIncrement: true },
    paymentTermName: DataTypes.STRING,
    invoicePortion: DataTypes.STRING,
    modeOfPayment: DataTypes.STRING,
    dueDateBasedOn: DataTypes.STRING,
    creditDays: DataTypes.STRING,
    creditMonths: DataTypes.STRING,
    description: DataTypes.STRING,
    
  };

}
