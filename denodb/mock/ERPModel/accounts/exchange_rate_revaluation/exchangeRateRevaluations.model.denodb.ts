// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: ExchangeRateRevaluation
|--------------------------------------------------------------------------
|
| Model Class and Interface of exchangeRateRevaluations
|
*/
import {
  DataTypes,
  Model
} from "https://deno.land/x/denodb/mod.ts";


export class ExchangeRateRevaluation extends Model { 
  static table = "exchangeRateRevaluations";
  static timestamps = true;
  
  static fields = {
    // fields list for ORM Maping
    id: { primaryKey: true, autoIncrement: true },
    postingDate: DataTypes.STRING,
    company: DataTypes.STRING,
    getEntries: DataTypes.STRING,
    exchangeRateRevaluationAccount: DataTypes.STRING,
    totalGainLoss: DataTypes.STRING,
    amendedFrom: DataTypes.STRING,
    
  };

}
