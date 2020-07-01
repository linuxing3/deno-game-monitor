// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: PayrollEmployeeDetail
|--------------------------------------------------------------------------
|
| Model of payrollEmployeeDetails
|
*/
import {
  DataTypes,
  Model
} from "https://deno.land/x/denodb/mod.ts";

export class PayrollEmployeeDetail extends Model { 
  static table = "payrollEmployeeDetails";
  static timestamps = true;
  
  static fields = {
    // fields list for ORM Maping
    id: { primaryKey: true, autoIncrement: true },
    employee: DataTypes.STRING,
    employeeName: DataTypes.STRING,
    department: DataTypes.STRING,
    designation: DataTypes.STRING,
    
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
        
        key: '',
      
        label: '',
      
        type: 'input',
      
        placeholder: 'Input ',
      
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
        
        key: 'designation',
      
        label: 'Designation',
      
        type: 'input',
      
        placeholder: 'Input Designation',
      
        options: '',
      
      },
      
    ]
  };
} 
