// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: EmployeeExternalWorkHistory
|--------------------------------------------------------------------------
|
| Model of employeeExternalWorkHistorys
|
*/
import {
  DataTypes,
  Model
} from "https://deno.land/x/denodb/mod.ts";

export class EmployeeExternalWorkHistory extends Model { 
  static table = "employeeExternalWorkHistorys";
  static timestamps = true;
  
  static fields = {
    // fields list for ORM Maping
    id: { primaryKey: true, autoIncrement: true },
    
    company: DataTypes.STRING,
    
    designation: DataTypes.STRING,
    
    salary: DataTypes.STRING,
    
    address: DataTypes.STRING,
    
    contact: DataTypes.STRING,
    
    totalExperience: DataTypes.STRING,
    
  };

  static meta = {
    // field meta information for UI render
    fieldProperty: [
      {
        key: 'company',
      
        label: 'Company',
      
        type: 'input',
      
        placeholder: 'Input Company',
      
        options: '',
      },{
        key: 'designation',
      
        label: 'Designation',
      
        type: 'input',
      
        placeholder: 'Input Designation',
      
        options: '',
      },{
        key: 'salary',
      
        label: 'Salary',
      
        type: 'select',
      
        placeholder: 'Input Salary',
      
        options: '',
      },{
        key: 'address',
      
        label: 'Address',
      
        type: 'input',
      
        placeholder: 'Input Address',
      
        options: '',
      },{
        key: 'contact',
      
        label: 'Contact',
      
        type: 'input',
      
        placeholder: 'Input Contact',
      
        options: '',
      },{
        key: 'totalExperience',
      
        label: 'Total Experience',
      
        type: 'input',
      
        placeholder: 'Input Total Experience',
      
        options: '',
      },
    ]
  };
} 
