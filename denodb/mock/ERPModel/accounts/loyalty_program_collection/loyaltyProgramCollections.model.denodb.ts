// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: LoyaltyProgramCollection
|--------------------------------------------------------------------------
|
| Model Class and Interface of loyaltyProgramCollections
|
*/
import {
  DataTypes,
  Model
} from "https://deno.land/x/denodb/mod.ts";


export class LoyaltyProgramCollection extends Model { 
  static table = "loyaltyProgramCollections";
  static timestamps = true;
  
  static fields = {
    // fields list for ORM Maping
    id: { primaryKey: true, autoIncrement: true },
    tierName: DataTypes.STRING,
    minimumTotalSpent: DataTypes.STRING,
    collectionFactor_1Lp: DataTypes.STRING,
    
  };

}
