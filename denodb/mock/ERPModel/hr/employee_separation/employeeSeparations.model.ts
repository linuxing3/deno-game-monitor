// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: EmployeeSeparation
|--------------------------------------------------------------------------
|
| Model Class and Interface of employeeSeparations
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


export class EmployeeSeparation extends Model { 
  static table = "employeeSeparations";
  static timestamps = true;
  
  static fields: ModelFields = {
    // fields list for ORM Maping
    id: { primaryKey: true, autoIncrement: true },
    employee: DataTypes.STRING,
    employeeName: DataTypes.STRING,
    resignationLetterDate: DataTypes.STRING,
    status: DataTypes.STRING,
    project: DataTypes.STRING,
    employeeSeparationTemplate: DataTypes.STRING,
    company: DataTypes.STRING,
    department: DataTypes.STRING,
    designation: DataTypes.STRING,
    employeeGrade: DataTypes.STRING,
    activities: DataTypes.STRING,
    exitInterviewSummary: DataTypes.STRING,
    amendedFrom: DataTypes.STRING,
    
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
        key: 'resignationLetterDate',
        label: 'Resignation Letter Date',
        type: 'input',
        placeholder: 'Input Resignation Letter Date',
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
        key: 'project',
        label: 'Project',
        type: 'select',
        placeholder: 'Input Project',
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
        key: 'employeeSeparationTemplate',
        label: 'Employee Separation Template',
        type: 'select',
        placeholder: 'Input Employee Separation Template',
        options: '',
        
      },
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
        key: '',
        label: '',
        type: 'input',
        placeholder: 'Input ',
        options: '',
        
      },
      {
        key: 'activities',
        label: 'Activities',
        type: 'select',
        placeholder: 'Input Activities',
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
        key: 'exitInterviewSummary',
        label: 'Exit Interview Summary',
        type: 'input',
        placeholder: 'Input Exit Interview Summary',
        options: '',
        
      },
      {
        key: 'amendedFrom',
        label: 'Amended From',
        type: 'select',
        placeholder: 'Input Amended From',
        options: '',
        
      },
      
    ]
  };
}

export interface IEmployeeSeparation {
  id: FieldValue;
  employee: FieldValue;
  employeeName: FieldValue;
  resignationLetterDate: FieldValue;
  status: FieldValue;
  project: FieldValue;
  employeeSeparationTemplate: FieldValue;
  company: FieldValue;
  department: FieldValue;
  designation: FieldValue;
  employeeGrade: FieldValue;
  activities: FieldValue;
  exitInterviewSummary: FieldValue;
  amendedFrom: FieldValue;
  
}
