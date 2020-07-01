// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: TrainingEventEmployee
|--------------------------------------------------------------------------
|
| Model of trainingEventEmployees
|
*/
import {
  DataTypes,
  Model
} from "https://deno.land/x/denodb/mod.ts";

export class TrainingEventEmployee extends Model { 
  static table = "trainingEventEmployees";
  static timestamps = true;
  
  static fields = {
    // fields list for ORM Maping
    id: { primaryKey: true, autoIncrement: true },
    employee: DataTypes.STRING,
    employeeName: DataTypes.STRING,
    department: DataTypes.STRING,
    status: DataTypes.STRING,
    attendance: DataTypes.STRING,
    
  };

  static meta = {
    // field meta information for UI render
    fieldProperty: [
      {
        key: 'employee',
        label: 'Employee',
        type: 'select',
        placeholder: 'Input Employee',
        options: '',
        
      },
      {
        key: 'employeeName',
        label: 'Employee Name',
        type: 'input',
        placeholder: 'Input Employee Name',
        options: '',
        
      },
      {
        key: 'department',
        label: 'Department',
        type: 'select',
        placeholder: 'Input Department',
        options: '',
        
      },
      {
        key: '',
        label: '',
        type: 'input',
        placeholder: 'Input ',
        options: '',
        
      },
      {
        key: 'status',
        label: 'Status',
        type: 'select',
        placeholder: 'Input Status',
        options: '[object Object],[object Object],[object Object]',
        
      },
      {
        key: 'attendance',
        label: 'Attendance',
        type: 'select',
        placeholder: 'Input Attendance',
        options: '[object Object]',
        
      },
      
    ]
  };
} 
