// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: EmployeeTaxExemptionDeclarationCategory
|--------------------------------------------------------------------------
|
| Model Class and Interface of employeeTaxExemptionDeclarationCategories
|
*/
import {
  DataTypes,
  Model
} from "https://deno.land/x/denodb/mod.ts";


export class EmployeeTaxExemptionDeclarationCategory extends Model { 
  static table = "employeeTaxExemptionDeclarationCategories";
  static timestamps = true;
  
  static fields = {
    // fields list for ORM Maping
    id: { primaryKey: true, autoIncrement: true },
    exemptionSubCategory: DataTypes.STRING,
    exemptionCategory: DataTypes.STRING,
    amount: DataTypes.STRING,
    
  };

}
