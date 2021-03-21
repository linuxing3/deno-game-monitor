// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: PaymentEntryDeduction
|--------------------------------------------------------------------------
|
| Model Class and Interface of paymentEntryDeductions
|
*/
import {
  DataTypes,
  Model
} from "https://deno.land/x/denodb/mod.ts";


export class PaymentEntryDeduction extends Model { 
  static table = "paymentEntryDeductions";
  static timestamps = true;
  
  static fields = {
    // fields list for ORM Maping
    id: { primaryKey: true, autoIncrement: true },
    account: DataTypes.STRING,
    costCenter: DataTypes.STRING,
    amount: DataTypes.STRING,
    
  };

}
