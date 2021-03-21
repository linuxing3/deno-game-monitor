// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: MonthlyDistribution
|--------------------------------------------------------------------------
|
| Model Class and Interface of monthlyDistributions
|
*/
import {
  DataTypes,
  Model
} from "https://deno.land/x/denodb/mod.ts";


export class MonthlyDistribution extends Model { 
  static table = "monthlyDistributions";
  static timestamps = true;
  
  static fields = {
    // fields list for ORM Maping
    id: { primaryKey: true, autoIncrement: true },
    distributionName: DataTypes.STRING,
    fiscalYear: DataTypes.STRING,
    monthlyDistributionPercentages: DataTypes.STRING,
    
  };

}
