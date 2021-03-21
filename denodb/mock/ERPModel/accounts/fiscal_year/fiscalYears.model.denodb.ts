// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: FiscalYear
|--------------------------------------------------------------------------
|
| Model Class and Interface of fiscalYears
|
*/
import {
  DataTypes,
  Model
} from "https://deno.land/x/denodb/mod.ts";


export class FiscalYear extends Model { 
  static table = "fiscalYears";
  static timestamps = true;
  
  static fields = {
    // fields list for ORM Maping
    id: { primaryKey: true, autoIncrement: true },
    yearName: DataTypes.STRING,
    disabled: DataTypes.STRING,
    yearStartDate: DataTypes.STRING,
    yearEndDate: DataTypes.STRING,
    companies: DataTypes.STRING,
    autoCreated: DataTypes.STRING,
    
  };

}
