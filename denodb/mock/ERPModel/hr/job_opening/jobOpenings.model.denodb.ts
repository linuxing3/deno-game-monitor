// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: JobOpening
|--------------------------------------------------------------------------
|
| Model Class and Interface of jobOpenings
|
*/
import {
  DataTypes,
  Model
} from "https://deno.land/x/denodb/mod.ts";


export class JobOpening extends Model { 
  static table = "jobOpenings";
  static timestamps = true;
  
  static fields = {
    // fields list for ORM Maping
    id: { primaryKey: true, autoIncrement: true },
    jobTitle: DataTypes.STRING,
    company: DataTypes.STRING,
    status: DataTypes.STRING,
    designation: DataTypes.STRING,
    department: DataTypes.STRING,
    staffingPlan: DataTypes.STRING,
    plannedNumberOfPositions: DataTypes.STRING,
    publishOnWebsite: DataTypes.STRING,
    route: DataTypes.STRING,
    description: DataTypes.STRING,
    
  };

  static meta = {
    // field meta information for UI render
    fieldProperty: [
      {
        key: 'jobTitle',
        label: 'Job Title',
        type: 'input',
        placeholder: 'Input Job Title',
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
        key: 'status',
        label: 'Status',
        type: 'select',
        placeholder: 'Input Status',
        options: '[object Object]',
        
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
        key: 'department',
        label: 'Department',
        type: 'select',
        placeholder: 'Input Department',
        options: '',
        
      },
      {
        key: 'staffingPlan',
        label: 'Staffing Plan',
        type: 'select',
        placeholder: 'Input Staffing Plan',
        options: '',
        
      },
      {
        key: 'plannedNumberOfPositions',
        label: 'Planned Number Of Positions',
        type: 'input',
        placeholder: 'Input Planned Number Of Positions',
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
        key: 'publishOnWebsite',
        label: 'Publish On Website',
        type: 'input',
        placeholder: 'Input Publish On Website',
        options: '',
        
      },
      {
        key: 'route',
        label: 'Route',
        type: 'input',
        placeholder: 'Input Route',
        options: '',
        
      },
      {
        key: 'description',
        label: 'Description',
        type: 'input',
        placeholder: 'Input Description',
        options: '',
        
      },
      
    ]
  };
}
