// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: EmployeeTaxExemptionSubCategory
|--------------------------------------------------------------------------
|
| Model Class and Interface of employeeTaxExemptionSubCategories
|
*/
import {
  DataTypes,
  Model
} from "https://deno.land/x/denodb/mod.ts";


export class EmployeeTaxExemptionSubCategory extends Model { 
  static table = "employeeTaxExemptionSubCategories";
  static timestamps = true;
  
  static fields = {
    // fields list for ORM Maping
    id: { primaryKey: true, autoIncrement: true },
    taxExemptionCategory: DataTypes.STRING,
    maxAmount: DataTypes.STRING,
    isActive: DataTypes.STRING,
    
  };

}
