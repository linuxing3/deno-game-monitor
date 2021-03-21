// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: EmployeeOnboardingTemplate
|--------------------------------------------------------------------------
|
| Model Class and Interface of employeeOnboardingTemplates
|
*/
import {
  DataTypes,
  Model
} from "https://deno.land/x/denodb/mod.ts";
import {
  FieldValue,
} from "https://deno.land/x/denodb/lib/query-builder.ts";
import {
  ModelFields,
} from "https://deno.land/x/denodb/lib/model.ts";


export class EmployeeOnboardingTemplate extends Model { 
  static table = "employeeOnboardingTemplates";
  static timestamps = true;
  
  static fields: ModelFields = {
    // fields list for ORM Maping
    id: { primaryKey: true, autoIncrement: true },
    company: DataTypes.STRING,
    department: DataTypes.STRING,
    designation: DataTypes.STRING,
    employeeGrade: DataTypes.STRING,
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
        key: 'designation',
        label: 'Designation',
        type: 'select',
        placeholder: 'Input Designation',
        options: '',
        
      },
      {
        key: 'employeeGrade',
        label: 'Employee Grade',
        type: 'select',
        placeholder: 'Input Employee Grade',
        options: '',
        
      },
      {
        key: 'activities',
        label: 'Activities',
        type: 'input',
        placeholder: 'Input Activities',
        options: '',
        
      },
      
    ]
  };
}

export interface IEmployeeOnboardingTemplate {
  id: FieldValue;
  company: FieldValue;
  department: FieldValue;
  designation: FieldValue;
  employeeGrade: FieldValue;
  activities: FieldValue;
  
}
