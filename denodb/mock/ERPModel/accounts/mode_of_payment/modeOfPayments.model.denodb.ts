// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: ModeOfPayment
|--------------------------------------------------------------------------
|
| Model Class and Interface of modeOfPayments
|
*/
import {
  DataTypes,
  Model
} from "https://deno.land/x/denodb/mod.ts";


export class ModeOfPayment extends Model { 
  static table = "modeOfPayments";
  static timestamps = true;
  
  static fields = {
    // fields list for ORM Maping
    id: { primaryKey: true, autoIncrement: true },
    modeOfPayment: DataTypes.STRING,
    type: DataTypes.STRING,
    accounts: DataTypes.STRING,
    
  };

}
