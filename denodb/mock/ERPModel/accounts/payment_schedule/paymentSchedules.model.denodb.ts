// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: PaymentSchedule
|--------------------------------------------------------------------------
|
| Model Class and Interface of paymentSchedules
|
*/
import {
  DataTypes,
  Model
} from "https://deno.land/x/denodb/mod.ts";


export class PaymentSchedule extends Model { 
  static table = "paymentSchedules";
  static timestamps = true;
  
  static fields = {
    // fields list for ORM Maping
    id: { primaryKey: true, autoIncrement: true },
    paymentTerm: DataTypes.STRING,
    description: DataTypes.STRING,
    dueDate: DataTypes.STRING,
    invoicePortion: DataTypes.STRING,
    paymentAmount: DataTypes.STRING,
    modeOfPayment: DataTypes.STRING,
    
  };

}
