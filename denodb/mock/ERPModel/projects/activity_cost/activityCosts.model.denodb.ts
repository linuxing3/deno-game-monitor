// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: ActivityCost
|--------------------------------------------------------------------------
|
| Model Class and Interface of activityCosts
|
*/
import {
  DataTypes,
  Model
} from "https://deno.land/x/denodb/mod.ts";


export class ActivityCost extends Model { 
  static table = "activityCosts";
  static timestamps = true;
  
  static fields = {
    // fields list for ORM Maping
    id: { primaryKey: true, autoIncrement: true },
    activityType: DataTypes.STRING,
    employee: DataTypes.STRING,
    employeeName: DataTypes.STRING,
    department: DataTypes.STRING,
    billingRate: DataTypes.STRING,
    costingRate: DataTypes.STRING,
    title: DataTypes.STRING,
    
  };

  static meta = {
    // field meta information for UI render
    fieldProperty: [
      {
        key: 'activityType',
        label: 'Activity Type',
        type: 'select',
        placeholder: 'Input Activity Type',
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
        key: 'billingRate',
        label: 'Billing Rate',
        type: 'input',
        placeholder: 'Input Billing Rate',
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
        key: 'costingRate',
        label: 'Costing Rate',
        type: 'input',
        placeholder: 'Input Costing Rate',
        options: '',
        
      },
      {
        key: 'title',
        label: 'Title',
        type: 'input',
        placeholder: 'Input Title',
        options: '',
        
      },
      
    ]
  };
}
