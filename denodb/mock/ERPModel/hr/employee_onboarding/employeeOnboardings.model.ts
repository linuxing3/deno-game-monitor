// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: EmployeeOnboarding
|--------------------------------------------------------------------------
|
| Model of employeeOnboardings
|
*/
import {
  DataTypes,
  Model
} from "https://deno.land/x/denodb/mod.ts";

export class EmployeeOnboarding extends Model { 
  static table = "employeeOnboardings";
  static timestamps = true;
  
  static fields = {
    // fields list for ORM Maping
    id: { primaryKey: true, autoIncrement: true },
    jobApplicant: DataTypes.STRING,
    jobOffer: DataTypes.STRING,
    employeeName: DataTypes.STRING,
    employee: DataTypes.STRING,
    dateOfJoining: DataTypes.STRING,
    status: DataTypes.STRING,
    employeeOnboardingTemplate: DataTypes.STRING,
    company: DataTypes.STRING,
    department: DataTypes.STRING,
    designation: DataTypes.STRING,
    employeeGrade: DataTypes.STRING,
    project: DataTypes.STRING,
    activities: DataTypes.STRING,
    amendedFrom: DataTypes.STRING,
    
  };

  static meta = {
    // field meta information for UI render
    fieldProperty: [
      {
        
        key: 'jobApplicant',
      
        label: 'Job Applicant',
      
        type: 'select',
      
        placeholder: 'Input Job Applicant',
      
        options: '',
      
      },
      {
        
        key: 'jobOffer',
      
        label: 'Job Offer',
      
        type: 'select',
      
        placeholder: 'Input Job Offer',
      
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
        
        key: 'employee',
      
        label: 'Employee',
      
        type: 'select',
      
        placeholder: 'Input Employee',
      
        options: '',
      
      },
      {
        
        key: 'dateOfJoining',
      
        label: 'Date Of Joining',
      
        type: 'input',
      
        placeholder: 'Input Date Of Joining',
      
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
        
        key: '',
      
        label: '',
      
        type: 'input',
      
        placeholder: 'Input ',
      
        options: '',
      
      },
      {
        
        key: 'employeeOnboardingTemplate',
      
        label: 'Employee Onboarding Template',
      
        type: 'select',
      
        placeholder: 'Input Employee Onboarding Template',
      
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
        
        key: 'activities',
      
        label: 'Activities',
      
        type: 'select',
      
        placeholder: 'Input Activities',
      
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
