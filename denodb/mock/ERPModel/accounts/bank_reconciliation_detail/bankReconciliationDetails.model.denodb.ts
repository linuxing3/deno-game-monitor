// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: BankReconciliationDetail
|--------------------------------------------------------------------------
|
| Model Class and Interface of bankReconciliationDetails
|
*/
import {
  DataTypes,
  Model
} from "https://deno.land/x/denodb/mod.ts";


export class BankReconciliationDetail extends Model { 
  static table = "bankReconciliationDetails";
  static timestamps = true;
  
  static fields = {
    // fields list for ORM Maping
    id: { primaryKey: true, autoIncrement: true },
    paymentDocument: DataTypes.STRING,
    paymentEntry: DataTypes.STRING,
    againstAccount: DataTypes.STRING,
    amount: DataTypes.STRING,
    postingDate: DataTypes.STRING,
    chequeNumber: DataTypes.STRING,
    chequeDate: DataTypes.STRING,
    clearanceDate: DataTypes.STRING,
    
  };

}
