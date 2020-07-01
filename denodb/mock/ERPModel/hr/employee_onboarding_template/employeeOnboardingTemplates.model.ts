// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: EmployeeOnboardingTemplate
|--------------------------------------------------------------------------
|
| Model of employeeOnboardingTemplates
|
*/
import {
  DataTypes,
  Model
} from "https://deno.land/x/denodb/mod.ts";

export class EmployeeOnboardingTemplate extends Model { 
  static table = "employeeOnboardingTemplates";
  static timestamps = true;
  
  static fields = {
    // fields list for ORM Maping
    id: { primaryKey: true, autoIncrement: true },
    
    company: DataTypes.STRING,
    
    department: DataTypes.STRING,
    
    : DataTypes.STRING,
    
    designation: DataTypes.STRING,
    
    employeeGrade: DataTypes.STRING,
    
    activities: DataTypes.STRING,
    
    activities: DataTypes.STRING,
    
  };

  static meta = {
    // field meta information for UI render
    fieldProperty: [
      {
        key: 'company',
      
        label: 'Company',
      
        type: 'select',
      
        placeholder: 'Input Company',
      
        options: '',
      },{
        key: 'department',
      
        label: 'Department',
      
        type: 'select',
      
        placeholder: 'Input Department',
      
        options: '',
      },{
        key: '',
      
        label: '',
      
        type: 'input',
      
        placeholder: 'Input ',
      
        options: '',
      },{
        key: 'designation',
      
        label: 'Designation',
      
        type: 'select',
      
        placeholder: 'Input Designation',
      
        options: '',
      },{
        key: 'employeeGrade',
      
        label: 'Employee Grade',
      
        type: 'select',
      
        placeholder: 'Input Employee Grade',
      
        options: '',
      },{
        key: 'activities',
      
        label: 'Activities',
      
        type: 'input',
      
        placeholder: 'Input Activities',
      
        options: '',
      },{
        key: 'activities',
      
        label: 'Activities',
      
        type: 'select',
      
        placeholder: 'Input Activities',
      
        options: '',
      },
    ]
  };
} 
