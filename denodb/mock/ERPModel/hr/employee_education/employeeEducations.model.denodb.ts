// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: EmployeeEducation
|--------------------------------------------------------------------------
|
| Model Class and Interface of employeeEducations
|
*/
import {
  DataTypes,
  Model
} from "https://deno.land/x/denodb/mod.ts";


export class EmployeeEducation extends Model { 
  static table = "employeeEducations";
  static timestamps = true;
  
  static fields = {
    // fields list for ORM Maping
    id: { primaryKey: true, autoIncrement: true },
    schoolUniversity: DataTypes.STRING,
    qualification: DataTypes.STRING,
    level: DataTypes.STRING,
    yearOfPassing: DataTypes.STRING,
    classPercentage: DataTypes.STRING,
    majorOptionalSubjects: DataTypes.STRING,
    
  };

  static meta = {
    // field meta information for UI render
    fieldProperty: [
      {
        key: 'schoolUniversity',
        label: 'School University',
        type: 'input',
        placeholder: 'Input School University',
        options: '',
        
      },
      {
        key: 'qualification',
        label: 'Qualification',
        type: 'input',
        placeholder: 'Input Qualification',
        options: '',
        
      },
      {
        key: 'level',
        label: 'Level',
        type: 'select',
        placeholder: 'Input Level',
        options: '[object Object],[object Object]',
        
      },
      {
        key: 'yearOfPassing',
        label: 'Year Of Passing',
        type: 'input',
        placeholder: 'Input Year Of Passing',
        options: '',
        
      },
      {
        key: 'classPercentage',
        label: 'Class Percentage',
        type: 'input',
        placeholder: 'Input Class Percentage',
        options: '',
        
      },
      {
        key: 'majorOptionalSubjects',
        label: 'Major Optional Subjects',
        type: 'input',
        placeholder: 'Input Major Optional Subjects',
        options: '',
        
      },
      
    ]
  };
}
