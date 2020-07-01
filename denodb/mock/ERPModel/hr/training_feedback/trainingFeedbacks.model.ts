// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: TrainingFeedback
|--------------------------------------------------------------------------
|
| Model of trainingFeedbacks
|
*/
import {
  DataTypes,
  Model
} from "https://deno.land/x/denodb/mod.ts";

export class TrainingFeedback extends Model { 
  static table = "trainingFeedbacks";
  static timestamps = true;
  
  static fields = {
    // fields list for ORM Maping
    id: { primaryKey: true, autoIncrement: true },
    employee: DataTypes.STRING,
    employeeName: DataTypes.STRING,
    department: DataTypes.STRING,
    course: DataTypes.STRING,
    trainingEvent: DataTypes.STRING,
    eventName: DataTypes.STRING,
    trainerName: DataTypes.STRING,
    feedback: DataTypes.STRING,
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
        
        key: 'department',
      
        label: 'Department',
      
        type: 'select',
      
        placeholder: 'Input Department',
      
        options: '',
      
      },
      {
        
        key: 'course',
      
        label: 'Course',
      
        type: 'select',
      
        placeholder: 'Input Course',
      
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
        
        key: 'trainingEvent',
      
        label: 'Training Event',
      
        type: 'select',
      
        placeholder: 'Input Training Event',
      
        options: '',
      
      },
      {
        
        key: 'eventName',
      
        label: 'Event Name',
      
        type: 'input',
      
        placeholder: 'Input Event Name',
      
        options: '',
      
      },
      {
        
        key: 'trainerName',
      
        label: 'Trainer Name',
      
        type: 'input',
      
        placeholder: 'Input Trainer Name',
      
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
        
        key: 'feedback',
      
        label: 'Feedback',
      
        type: 'input',
      
        placeholder: 'Input Feedback',
      
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
