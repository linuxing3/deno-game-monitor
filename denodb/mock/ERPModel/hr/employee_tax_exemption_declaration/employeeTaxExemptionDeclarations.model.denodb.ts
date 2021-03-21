// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: EmployeeTaxExemptionDeclaration
|--------------------------------------------------------------------------
|
| Model Class and Interface of employeeTaxExemptionDeclarations
|
*/
import {
  DataTypes,
  Model
} from "https://deno.land/x/denodb/mod.ts";


export class EmployeeTaxExemptionDeclaration extends Model { 
  static table = "employeeTaxExemptionDeclarations";
  static timestamps = true;
  
  static fields = {
    // fields list for ORM Maping
    id: { primaryKey: true, autoIncrement: true },
    employee: DataTypes.STRING,
    company: DataTypes.STRING,
    payrollPeriod: DataTypes.STRING,
    totalExemptionAmount: DataTypes.STRING,
    department: DataTypes.STRING,
    amendedFrom: DataTypes.STRING,
    declarations: DataTypes.STRING,
    
  };

}
