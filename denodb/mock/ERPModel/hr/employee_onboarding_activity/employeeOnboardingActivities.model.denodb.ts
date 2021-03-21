// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: EmployeeOnboardingActivity
|--------------------------------------------------------------------------
|
| Model Class and Interface of employeeOnboardingActivities
|
*/
import {
  DataTypes,
  Model
} from "https://deno.land/x/denodb/mod.ts";
import {
  ModelFields,
} from "https://deno.land/x/denodb/lib/model.ts";


export class EmployeeOnboardingActivity extends Model { 
  static table = "employeeOnboardingActivities";
  static timestamps = true;
  
  static fields: ModelFields = {
    // fields list for ORM Maping
    id: { primaryKey: true, autoIncrement: true },
    activityName: DataTypes.STRING,
    user: DataTypes.STRING,
    role: DataTypes.STRING,
    completed: DataTypes.STRING,
    requiredForEmployeeCreation: DataTypes.STRING,
    description: DataTypes.STRING,
    
  };

  static meta = {
    // field meta information for UI render
    fieldProperty: [
      {
        key: 'activityName',
        label: 'Activity Name',
        type: 'input',
        placeholder: 'Input Activity Name',
        options: '',
        
      },
      {
        key: 'user',
        label: 'User',
        type: 'select',
        placeholder: 'Input User',
        options: '',
        
      },
      {
        key: 'role',
        label: 'Role',
        type: 'select',
        placeholder: 'Input Role',
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
        key: 'completed',
        label: 'Completed',
        type: 'input',
        placeholder: 'Input Completed',
        options: '',
        
      },
      {
        key: 'requiredForEmployeeCreation',
        label: 'Required For Employee Creation',
        type: 'input',
        placeholder: 'Input Required For Employee Creation',
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
        key: 'description',
        label: 'Description',
        type: 'input',
        placeholder: 'Input Description',
        options: '',
        
      },
      
    ]
  };
}
