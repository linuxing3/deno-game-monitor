// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: Appraisal
|--------------------------------------------------------------------------
|
| Model Class and Interface of appraisals
|
*/
import {
  DataTypes,
  Model
} from "https://deno.land/x/denodb/mod.ts";
import {
  ModelFields,
} from "https://deno.land/x/denodb/lib/model.ts";


export class Appraisal extends Model { 
  static table = "appraisals";
  static timestamps = true;
  
  static fields: ModelFields = {
    // fields list for ORM Maping
    id: { primaryKey: true, autoIncrement: true },
    forEmployeeName: DataTypes.STRING,
    startDate: DataTypes.STRING,
    endDate: DataTypes.STRING,
    department: DataTypes.STRING,
    goals: DataTypes.STRING,
    totalScoreOutOf_5: DataTypes.STRING,
    remarks: DataTypes.STRING,
    company: DataTypes.STRING,
    
  };

  static meta = {
    // field meta information for UI render
    fieldProperty: [
      {
        key: 'forEmployeeName',
        label: 'For Employee Name',
        type: 'input',
        placeholder: 'Input For Employee Name',
        options: '',
        
      },
      {
        key: 'startDate',
        label: 'Start Date',
        type: 'input',
        placeholder: 'Input Start Date',
        options: '',
        
      },
      {
        key: 'endDate',
        label: 'End Date',
        type: 'input',
        placeholder: 'Input End Date',
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
        key: 'goals',
        label: 'Goals',
        type: 'select',
        placeholder: 'Input Goals',
        options: '',
        
      },
      {
        key: 'totalScoreOutOf_5',
        label: 'Total Score Out Of 5',
        type: 'input',
        placeholder: 'Input Total Score Out Of 5',
        options: '',
        
      },
      {
        key: 'remarks',
        label: 'Remarks',
        type: 'input',
        placeholder: 'Input Remarks',
        options: '',
        
      },
      {
        key: 'company',
        label: 'Company',
        type: 'select',
        placeholder: 'Input Company',
        options: '',
        
      },
      
    ]
  };
}
