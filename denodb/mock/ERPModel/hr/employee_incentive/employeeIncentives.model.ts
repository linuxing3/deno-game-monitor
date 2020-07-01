// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: EmployeeIncentive
|--------------------------------------------------------------------------
|
| Model of employeeIncentives
|
*/
import {
  DataTypes,
  Model
} from "https://deno.land/x/denodb/mod.ts";

export class EmployeeIncentive extends Model { 
  static table = "employeeIncentives";
  static timestamps = true;
  
  static fields = {
    // fields list for ORM Maping
    id: { primaryKey: true, autoIncrement: true },
    
    employee: DataTypes.STRING,
    
    incentiveAmount: DataTypes.STRING,
    
    payrollDate: DataTypes.STRING,
    
    amendedFrom: DataTypes.STRING,
    
    : DataTypes.STRING,
    
    employeeName: DataTypes.STRING,
    
    department: DataTypes.STRING,
    
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
      },{
        key: 'incentiveAmount',
      
        label: 'Incentive Amount',
      
        type: 'input',
      
        placeholder: 'Input Incentive Amount',
      
        options: '',
      },{
        key: 'payrollDate',
      
        label: 'Payroll Date',
      
        type: 'input',
      
        placeholder: 'Input Payroll Date',
      
        options: '',
      },{
        key: 'amendedFrom',
      
        label: 'Amended From',
      
        type: 'select',
      
        placeholder: 'Input Amended From',
      
        options: '',
      },{
        key: '',
      
        label: '',
      
        type: 'input',
      
        placeholder: 'Input ',
      
        options: '',
      },{
        key: 'employeeName',
      
        label: 'Employee Name',
      
        type: 'input',
      
        placeholder: 'Input Employee Name',
      
        options: '',
      },{
        key: 'department',
      
        label: 'Department',
      
        type: 'select',
      
        placeholder: 'Input Department',
      
        options: '',
      },
    ]
  };
} 
