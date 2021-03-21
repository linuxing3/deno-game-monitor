// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: LoyaltyProgram
|--------------------------------------------------------------------------
|
| Model Class and Interface of loyaltyPrograms
|
*/
import {
  DataTypes,
  Model
} from "https://deno.land/x/denodb/mod.ts";


export class LoyaltyProgram extends Model { 
  static table = "loyaltyPrograms";
  static timestamps = true;
  
  static fields = {
    // fields list for ORM Maping
    id: { primaryKey: true, autoIncrement: true },
    loyaltyProgramName: DataTypes.STRING,
    loyaltyProgramType: DataTypes.STRING,
    fromDate: DataTypes.STRING,
    toDate: DataTypes.STRING,
    customerGroup: DataTypes.STRING,
    customerTerritory: DataTypes.STRING,
    autoOptInForAllCustomers: DataTypes.STRING,
    collectionTier: DataTypes.STRING,
    collectionRules: DataTypes.STRING,
    redemption: DataTypes.STRING,
    conversionFactor: DataTypes.STRING,
    expiryDurationInDays: DataTypes.STRING,
    expenseAccount: DataTypes.STRING,
    costCenter: DataTypes.STRING,
    company: DataTypes.STRING,
    helpSection: DataTypes.STRING,
    loyaltyProgramHelp: DataTypes.STRING,
    
  };

}
