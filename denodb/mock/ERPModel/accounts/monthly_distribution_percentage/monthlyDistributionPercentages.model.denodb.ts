// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: MonthlyDistributionPercentage
|--------------------------------------------------------------------------
|
| Model Class and Interface of monthlyDistributionPercentages
|
*/
import {
  DataTypes,
  Model
} from "https://deno.land/x/denodb/mod.ts";


export class MonthlyDistributionPercentage extends Model { 
  static table = "monthlyDistributionPercentages";
  static timestamps = true;
  
  static fields = {
    // fields list for ORM Maping
    id: { primaryKey: true, autoIncrement: true },
    month: DataTypes.STRING,
    percentageAllocation: DataTypes.STRING,
    
  };

}
