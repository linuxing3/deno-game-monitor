// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: EmployeeBoardingActivity
|--------------------------------------------------------------------------
|
| Model Class and Interface of employeeBoardingActivities
|
*/
import {
  DataTypes,
  Model
} from "https://deno.land/x/denodb/mod.ts";


export class EmployeeBoardingActivity extends Model { 
  static table = "employeeBoardingActivities";
  static timestamps = true;
  
  static fields = {
    // fields list for ORM Maping
    id: { primaryKey: true, autoIncrement: true },
    activityName: DataTypes.STRING,
    user: DataTypes.STRING,
    role: DataTypes.STRING,
    task: DataTypes.STRING,
    requiredForEmployeeCreation: DataTypes.STRING,
    description: DataTypes.STRING,
    
  };

}
