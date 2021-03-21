// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: SalaryStructureAssignment
|--------------------------------------------------------------------------
|
| Model Class and Interface of salaryStructureAssignments
|
*/
import {
  DataTypes,
  Model
} from "https://deno.land/x/denodb/mod.ts";


export class SalaryStructureAssignment extends Model { 
  static table = "salaryStructureAssignments";
  static timestamps = true;
  
  static fields = {
    // fields list for ORM Maping
    id: { primaryKey: true, autoIncrement: true },
    employee: DataTypes.STRING,
    employeeName: DataTypes.STRING,
    department: DataTypes.STRING,
    designation: DataTypes.STRING,
    salaryStructure: DataTypes.STRING,
    fromDate: DataTypes.STRING,
    company: DataTypes.STRING,
    base: DataTypes.STRING,
    variable: DataTypes.STRING,
    amendedFrom: DataTypes.STRING,
    
  };

}
