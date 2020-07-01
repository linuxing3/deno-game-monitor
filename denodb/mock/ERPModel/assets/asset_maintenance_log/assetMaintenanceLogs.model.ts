// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: AssetMaintenanceLog
|--------------------------------------------------------------------------
|
| Model of assetMaintenanceLogs
|
*/
import {
  DataTypes,
  Model
} from "https://deno.land/x/denodb/mod.ts";

export class AssetMaintenanceLog extends Model { 
  static table = "assetMaintenanceLogs";
  static timestamps = true;
  
  static fields = {
    // fields list for ORM Maping
    id: { primaryKey: true, autoIncrement: true },
    assetMaintenance: DataTypes.STRING,
    series: DataTypes.STRING,
    assetName: DataTypes.STRING,
    itemCode: DataTypes.STRING,
    itemName: DataTypes.STRING,
    task: DataTypes.STRING,
    maintenanceType: DataTypes.STRING,
    periodicity: DataTypes.STRING,
    assignTo: DataTypes.STRING,
    dueDate: DataTypes.STRING,
    completionDate: DataTypes.STRING,
    maintenanceStatus: DataTypes.STRING,
    hasCertificate: DataTypes.STRING,
    certificate: DataTypes.STRING,
    description: DataTypes.STRING,
    actionsPerformed: DataTypes.STRING,
    amendedFrom: DataTypes.STRING,
    
  };

  static meta = {
    // field meta information for UI render
    fieldProperty: [
      {
        key: 'assetMaintenance',
        label: 'Asset Maintenance',
        type: 'select',
        placeholder: 'Input Asset Maintenance',
        options: '',
        
      },
      {
        key: 'series',
        label: 'Series',
        type: 'select',
        placeholder: 'Input Series',
        options: '',
        
      },
      {
        key: 'assetName',
        label: 'Asset Name',
        type: 'input',
        placeholder: 'Input Asset Name',
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
        key: 'itemCode',
        label: 'Item Code',
        type: 'input',
        placeholder: 'Input Item Code',
        options: '',
        
      },
      {
        key: 'itemName',
        label: 'Item Name',
        type: 'input',
        placeholder: 'Input Item Name',
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
        key: 'task',
        label: 'Task',
        type: 'select',
        placeholder: 'Input Task',
        options: '',
        
      },
      {
        key: 'maintenanceType',
        label: 'Maintenance Type',
        type: 'input',
        placeholder: 'Input Maintenance Type',
        options: '',
        
      },
      {
        key: 'periodicity',
        label: 'Periodicity',
        type: 'input',
        placeholder: 'Input Periodicity',
        options: '',
        
      },
      {
        key: 'assignTo',
        label: 'Assign To',
        type: 'input',
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
        key: 'dueDate',
        label: 'Due Date',
        type: 'input',
        placeholder: 'Input Due Date',
        options: '',
        
      },
      {
        key: 'completionDate',
        label: 'Completion Date',
        type: 'input',
        placeholder: 'Input Completion Date',
        options: '',
        
      },
      {
        key: 'maintenanceStatus',
        label: 'Maintenance Status',
        type: 'select',
        placeholder: 'Input Maintenance Status',
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
        key: 'hasCertificate',
        label: 'Has Certificate',
        type: 'input',
        placeholder: 'Input Has Certificate',
        options: '',
        
      },
      {
        key: 'certificate',
        label: 'Certificate',
        type: 'input',
        placeholder: 'Input Certificate',
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
      {
        key: '',
        label: '',
        type: 'input',
        placeholder: 'Input ',
        options: '',
        
      },
      {
        key: 'actionsPerformed',
        label: 'Actions Performed',
        type: 'input',
        placeholder: 'Input Actions Performed',
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
