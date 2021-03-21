// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: EmployeeOnboardingActivity
|--------------------------------------------------------------------------
|
| Model Class and Interface of employeeOnboardingActivities
|
*/
import {
  DataTypes,
  Model
} from "https://deno.land/x/denodb/mod.ts";


export class EmployeeOnboardingActivity extends Model { 
  static table = "employeeOnboardingActivities";
  static timestamps = true;
  
  static fields = {
    // fields list for ORM Maping
    id: { primaryKey: true, autoIncrement: true },
    activityName: DataTypes.STRING,
    user: DataTypes.STRING,
    role: DataTypes.STRING,
    completed: DataTypes.STRING,
    requiredForEmployeeCreation: DataTypes.STRING,
    description: DataTypes.STRING,
    
  };

}
