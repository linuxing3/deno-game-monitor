// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: EmployeeGrade
|--------------------------------------------------------------------------
|
| Model of employeeGrades
|
*/
import {
  DataTypes,
  Model
} from "https://deno.land/x/denodb/mod.ts";

export class EmployeeGrade extends Model { 
  static table = "employeeGrades";
  static timestamps = true;
  
  static fields = {
    // fields list for ORM Maping
    id: { primaryKey: true, autoIncrement: true },
    defaultLeavePolicy: DataTypes.STRING,
    defaultSalaryStructure: DataTypes.STRING,
    
  };

  static meta = {
    // field meta information for UI render
    fieldProperty: [
      {
        key: 'defaultLeavePolicy',
        label: 'Default Leave Policy',
        type: 'select',
        placeholder: 'Input Default Leave Policy',
        options: '',
        
      },
      {
        key: 'defaultSalaryStructure',
        label: 'Default Salary Structure',
        type: 'select',
        placeholder: 'Input Default Salary Structure',
        options: '',
        
      },
      
    ]
  };
} 
