// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: TrainingResult
|--------------------------------------------------------------------------
|
| Model of trainingResults
|
*/
import {
  DataTypes,
  Model
} from "https://deno.land/x/denodb/mod.ts";

export class TrainingResult extends Model { 
  static table = "trainingResults";
  static timestamps = true;
  
  static fields = {
    // fields list for ORM Maping
    id: { primaryKey: true, autoIncrement: true },
    trainingEvent: DataTypes.STRING,
    employees: DataTypes.STRING,
    amendedFrom: DataTypes.STRING,
    employeeEmails: DataTypes.STRING,
    
  };

  static meta = {
    // field meta information for UI render
    fieldProperty: [
      {
        
        key: 'trainingEvent',
      
        label: 'Training Event',
      
        type: 'select',
      
        placeholder: 'Input Training Event',
      
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
        
        key: 'employees',
      
        label: 'Employees',
      
        type: 'select',
      
        placeholder: 'Input Employees',
      
        options: '',
      
      },
      {
        
        key: 'amendedFrom',
      
        label: 'Amended From',
      
        type: 'select',
      
        placeholder: 'Input Amended From',
      
        options: '',
      
      },
      {
        
        key: 'employeeEmails',
      
        label: 'Employee Emails',
      
        type: 'select',
      
        placeholder: 'Input Employee Emails',
      
        options: '',
      
      },
      
    ]
  };
} 
