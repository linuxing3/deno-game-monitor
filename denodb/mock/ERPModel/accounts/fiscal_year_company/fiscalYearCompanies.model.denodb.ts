// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: FiscalYearCompany
|--------------------------------------------------------------------------
|
| Model Class and Interface of fiscalYearCompanies
|
*/
import {
  DataTypes,
  Model
} from "https://deno.land/x/denodb/mod.ts";


export class FiscalYearCompany extends Model { 
  static table = "fiscalYearCompanies";
  static timestamps = true;
  
  static fields = {
    // fields list for ORM Maping
    id: { primaryKey: true, autoIncrement: true },
    company: DataTypes.STRING,
    
  };

}
