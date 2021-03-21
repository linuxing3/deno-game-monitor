// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: LoyaltyPointEntry
|--------------------------------------------------------------------------
|
| Model Class and Interface of loyaltyPointEntries
|
*/
import {
  DataTypes,
  Model
} from "https://deno.land/x/denodb/mod.ts";


export class LoyaltyPointEntry extends Model { 
  static table = "loyaltyPointEntries";
  static timestamps = true;
  
  static fields = {
    // fields list for ORM Maping
    id: { primaryKey: true, autoIncrement: true },
    loyaltyProgram: DataTypes.STRING,
    loyaltyProgramTier: DataTypes.STRING,
    customer: DataTypes.STRING,
    salesInvoice: DataTypes.STRING,
    redeemAgainst: DataTypes.STRING,
    loyaltyPoints: DataTypes.STRING,
    purchaseAmount: DataTypes.STRING,
    expiryDate: DataTypes.STRING,
    postingDate: DataTypes.STRING,
    company: DataTypes.STRING,
    
  };

}
