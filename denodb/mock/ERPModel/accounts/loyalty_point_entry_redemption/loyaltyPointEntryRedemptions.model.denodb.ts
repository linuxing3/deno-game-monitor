// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: LoyaltyPointEntryRedemption
|--------------------------------------------------------------------------
|
| Model Class and Interface of loyaltyPointEntryRedemptions
|
*/
import {
  DataTypes,
  Model
} from "https://deno.land/x/denodb/mod.ts";


export class LoyaltyPointEntryRedemption extends Model { 
  static table = "loyaltyPointEntryRedemptions";
  static timestamps = true;
  
  static fields = {
    // fields list for ORM Maping
    id: { primaryKey: true, autoIncrement: true },
    salesInvoice: DataTypes.STRING,
    redemptionDate: DataTypes.STRING,
    redeemedPoints: DataTypes.STRING,
    
  };

}
