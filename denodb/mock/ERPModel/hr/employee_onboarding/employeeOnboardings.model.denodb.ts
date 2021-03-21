// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: EmployeeOnboarding
|--------------------------------------------------------------------------
|
| Model Class and Interface of employeeOnboardings
|
*/
import {
  DataTypes,
  Model
} from "https://deno.land/x/denodb/mod.ts";


export class EmployeeOnboarding extends Model { 
  static table = "employeeOnboardings";
  static timestamps = true;
  
  static fields = {
    // fields list for ORM Maping
    id: { primaryKey: true, autoIncrement: true },
    jobApplicant: DataTypes.STRING,
    jobOffer: DataTypes.STRING,
    employeeName: DataTypes.STRING,
    employee: DataTypes.STRING,
    dateOfJoining: DataTypes.STRING,
    status: DataTypes.STRING,
    employeeOnboardingTemplate: DataTypes.STRING,
    company: DataTypes.STRING,
    department: DataTypes.STRING,
    designation: DataTypes.STRING,
    employeeGrade: DataTypes.STRING,
    project: DataTypes.STRING,
    activities: DataTypes.STRING,
    amendedFrom: DataTypes.STRING,
    
  };

}
