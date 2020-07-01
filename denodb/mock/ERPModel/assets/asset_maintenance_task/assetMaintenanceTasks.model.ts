// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: AssetMaintenanceTask
|--------------------------------------------------------------------------
|
| Model of assetMaintenanceTasks
|
*/
import {
  DataTypes,
  Model
} from "https://deno.land/x/denodb/mod.ts";

export class AssetMaintenanceTask extends Model { 
  static table = "assetMaintenanceTasks";
  static timestamps = true;
  
  static fields = {
    // fields list for ORM Maping
    id: { primaryKey: true, autoIncrement: true },
    maintenanceTask: DataTypes.STRING,
    maintenanceType: DataTypes.STRING,
    maintenanceStatus: DataTypes.STRING,
    startDate: DataTypes.STRING,
    periodicity: DataTypes.STRING,
    endDate: DataTypes.STRING,
    certificateRequired: DataTypes.STRING,
    assignTo: DataTypes.STRING,
    assignToName: DataTypes.STRING,
    nextDueDate: DataTypes.STRING,
    lastCompletionDate: DataTypes.STRING,
    description: DataTypes.STRING,
    
  };

  static meta = {
    // field meta information for UI render
    fieldProperty: [
      {
        
        key: 'maintenanceTask',
      
        label: 'Maintenance Task',
      
        type: 'input',
      
        placeholder: 'Input Maintenance Task',
      
        options: '',
      
      },
      {
        
        key: 'maintenanceType',
      
        label: 'Maintenance Type',
      
        type: 'select',
      
        placeholder: 'Input Maintenance Type',
      
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
        
        key: 'maintenanceStatus',
      
        label: 'Maintenance Status',
      
        type: 'select',
      
        placeholder: 'Input Maintenance Status',
      
        options: '[object Object],[object Object]',
      
      },
      {
        
        key: '',
      
        label: '',
      
        type: 'input',
      
        placeholder: 'Input ',
      
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
        
        key: 'periodicity',
      
        label: 'Periodicity',
      
        type: 'select',
      
        placeholder: 'Input Periodicity',
      
        options: '[object Object],[object Object],[object Object],[object Object],[object Object],[object Object]',
      
      },
      {
        
        key: '',
      
        label: '',
      
        type: 'input',
      
        placeholder: 'Input ',
      
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
        
        key: 'certificateRequired',
      
        label: 'Certificate Required',
      
        type: 'input',
      
        placeholder: 'Input Certificate Required',
      
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
        
        key: 'assignTo',
      
        label: 'Assign To',
      
        type: 'select',
      
        placeholder: 'Input Assign To',
      
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
        
        key: 'assignToName',
      
        label: 'Assign To Name',
      
        type: 'input',
      
        placeholder: 'Input Assign To Name',
      
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
        
        key: 'nextDueDate',
      
        label: 'Next Due Date',
      
        type: 'input',
      
        placeholder: 'Input Next Due Date',
      
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
        
        key: 'lastCompletionDate',
      
        label: 'Last Completion Date',
      
        type: 'input',
      
        placeholder: 'Input Last Completion Date',
      
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
