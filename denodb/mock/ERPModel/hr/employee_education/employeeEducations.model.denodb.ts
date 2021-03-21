// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: EmployeeEducation
|--------------------------------------------------------------------------
|
| Model Class and Interface of employeeEducations
|
*/
import {
  DataTypes,
  Model
} from "https://deno.land/x/denodb/mod.ts";


export class EmployeeEducation extends Model { 
  static table = "employeeEducations";
  static timestamps = true;
  
  static fields = {
    // fields list for ORM Maping
    id: { primaryKey: true, autoIncrement: true },
    schoolUniversity: DataTypes.STRING,
    qualification: DataTypes.STRING,
    level: DataTypes.STRING,
    yearOfPassing: DataTypes.STRING,
    classPercentage: DataTypes.STRING,
    majorOptionalSubjects: DataTypes.STRING,
    
  };

}
