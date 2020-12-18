// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: TrainingResultEmployee
|--------------------------------------------------------------------------
|
| Model Class and Interface of trainingResultEmployees
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


export class TrainingResultEmployee extends Model { 
  static table = "trainingResultEmployees";
  static timestamps = true;
  
  static fields: ModelFields = {
    // fields list for ORM Maping
    id: { primaryKey: true, autoIncrement: true },
    employee: DataTypes.STRING,
    employeeName: DataTypes.STRING,
    department: DataTypes.STRING,
    hours: DataTypes.STRING,
    grade: DataTypes.STRING,
    comments: DataTypes.STRING,
    
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
        key: '',
        label: '',
        type: 'input',
        placeholder: 'Input ',
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
        key: '',
        label: '',
        type: 'input',
        placeholder: 'Input ',
        options: '',
        
      },
      {
        key: 'hours',
        label: 'Hours',
        type: 'input',
        placeholder: 'Input Hours',
        options: '',
        
      },
      {
        key: 'grade',
        label: 'Grade',
        type: 'input',
        placeholder: 'Input Grade',
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
        key: 'comments',
        label: 'Comments',
        type: 'input',
        placeholder: 'Input Comments',
        options: '',
        
      },
      
    ]
  };
}

export interface ITrainingResultEmployee {
  id: FieldValue;
  employee: FieldValue;
  employeeName: FieldValue;
  department: FieldValue;
  hours: FieldValue;
  grade: FieldValue;
  comments: FieldValue;
  
}
