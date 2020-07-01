// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: ProjectUpdate
|--------------------------------------------------------------------------
|
| Model of projectUpdates
|
*/
import {
  DataTypes,
  Model
} from "https://deno.land/x/denodb/mod.ts";

export class ProjectUpdate extends Model { 
  static table = "projectUpdates";
  static timestamps = true;
  
  static fields = {
    // fields list for ORM Maping
    id: { primaryKey: true, autoIncrement: true },
    series: DataTypes.STRING,
    project: DataTypes.STRING,
    sent: DataTypes.STRING,
    date: DataTypes.STRING,
    time: DataTypes.STRING,
    users: DataTypes.STRING,
    amendedFrom: DataTypes.STRING,
    
  };

  static meta = {
    // field meta information for UI render
    fieldProperty: [
      {
        key: 'series',
        label: 'Series',
        type: 'select',
        placeholder: 'Input Series',
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
        key: 'sent',
        label: 'Sent',
        type: 'input',
        placeholder: 'Input Sent',
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
        key: 'date',
        label: 'Date',
        type: 'input',
        placeholder: 'Input Date',
        options: '',
        
      },
      {
        key: 'time',
        label: 'Time',
        type: 'input',
        placeholder: 'Input Time',
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
        key: 'users',
        label: 'Users',
        type: 'select',
        placeholder: 'Input Users',
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
