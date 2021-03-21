// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: CashFlowMapper
|--------------------------------------------------------------------------
|
| Model Class and Interface of cashFlowMappers
|
*/
import {
  DataTypes,
  Model
} from "https://deno.land/x/denodb/mod.ts";


export class CashFlowMapper extends Model { 
  static table = "cashFlowMappers";
  static timestamps = true;
  
  static fields = {
    // fields list for ORM Maping
    id: { primaryKey: true, autoIncrement: true },
    sectionName: DataTypes.STRING,
    sectionHeader: DataTypes.STRING,
    sectionLeader: DataTypes.STRING,
    sectionSubtotal: DataTypes.STRING,
    sectionFooter: DataTypes.STRING,
    accounts: DataTypes.STRING,
    position: DataTypes.STRING,
    
  };

}
