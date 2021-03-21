// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: CashFlowMapping
|--------------------------------------------------------------------------
|
| Model Class and Interface of cashFlowMappings
|
*/
import {
  DataTypes,
  Model
} from "https://deno.land/x/denodb/mod.ts";


export class CashFlowMapping extends Model { 
  static table = "cashFlowMappings";
  static timestamps = true;
  
  static fields = {
    // fields list for ORM Maping
    id: { primaryKey: true, autoIncrement: true },
    name: DataTypes.STRING,
    label: DataTypes.STRING,
    accounts: DataTypes.STRING,
    selectMaximumOf_1: DataTypes.STRING,
    isFinanceCost: DataTypes.STRING,
    isWorkingCapital: DataTypes.STRING,
    isFinanceCostAdjustment: DataTypes.STRING,
    isIncomeTaxLiability: DataTypes.STRING,
    isIncomeTaxExpense: DataTypes.STRING,
    
  };

}
