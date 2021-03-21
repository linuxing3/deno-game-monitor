// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: ShareBalance
|--------------------------------------------------------------------------
|
| Model Class and Interface of shareBalances
|
*/
import {
  DataTypes,
  Model
} from "https://deno.land/x/denodb/mod.ts";


export class ShareBalance extends Model { 
  static table = "shareBalances";
  static timestamps = true;
  
  static fields = {
    // fields list for ORM Maping
    id: { primaryKey: true, autoIncrement: true },
    shareType: DataTypes.STRING,
    fromNo: DataTypes.STRING,
    rate: DataTypes.STRING,
    noOfShares: DataTypes.STRING,
    toNo: DataTypes.STRING,
    amount: DataTypes.STRING,
    isCompany: DataTypes.STRING,
    currentState: DataTypes.STRING,
    
  };

}
