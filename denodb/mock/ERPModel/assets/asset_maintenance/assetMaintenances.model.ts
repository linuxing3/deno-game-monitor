// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: AssetMaintenance
|--------------------------------------------------------------------------
|
| Model of assetMaintenances
|
*/
import {
  DataTypes,
  Model
} from "https://deno.land/x/denodb/mod.ts";

export class AssetMaintenance extends Model { 
  static table = "assetMaintenances";
  static timestamps = true;
  
  static fields = {
    // fields list for ORM Maping
    id: { primaryKey: true, autoIncrement: true },
    assetName: DataTypes.STRING,
    assetCategory: DataTypes.STRING,
    itemCode: DataTypes.STRING,
    itemName: DataTypes.STRING,
    company: DataTypes.STRING,
    selectSerialNo: DataTypes.STRING,
    serialNo: DataTypes.STRING,
    maintenanceTeam: DataTypes.STRING,
    maintenanceManager: DataTypes.STRING,
    maintenanceManagerName: DataTypes.STRING,
    tasks: DataTypes.STRING,
    maintenanceTasks: DataTypes.STRING,
    
  };

  static meta = {
    // field meta information for UI render
    fieldProperty: [
      {
        
        key: 'assetName',
      
        label: 'Asset Name',
      
        type: 'select',
      
        placeholder: 'Input Asset Name',
      
        options: '',
      
      },
      {
        
        key: 'assetCategory',
      
        label: 'Asset Category',
      
        type: 'input',
      
        placeholder: 'Input Asset Category',
      
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
        
        key: 'company',
      
        label: 'Company',
      
        type: 'select',
      
        placeholder: 'Input Company',
      
        options: '',
      
      },
      {
        
        key: 'selectSerialNo',
      
        label: 'Select Serial No',
      
        type: 'select',
      
        placeholder: 'Input Select Serial No',
      
        options: '',
      
      },
      {
        
        key: 'serialNo',
      
        label: 'Serial No',
      
        type: 'input',
      
        placeholder: 'Input Serial No',
      
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
        
        key: 'maintenanceTeam',
      
        label: 'Maintenance Team',
      
        type: 'select',
      
        placeholder: 'Input Maintenance Team',
      
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
        
        key: 'maintenanceManager',
      
        label: 'Maintenance Manager',
      
        type: 'input',
      
        placeholder: 'Input Maintenance Manager',
      
        options: '',
      
      },
      {
        
        key: 'maintenanceManagerName',
      
        label: 'Maintenance Manager Name',
      
        type: 'input',
      
        placeholder: 'Input Maintenance Manager Name',
      
        options: '',
      
      },
      {
        
        key: 'tasks',
      
        label: 'Tasks',
      
        type: 'input',
      
        placeholder: 'Input Tasks',
      
        options: '',
      
      },
      {
        
        key: 'maintenanceTasks',
      
        label: 'Maintenance Tasks',
      
        type: 'select',
      
        placeholder: 'Input Maintenance Tasks',
      
        options: '',
      
      },
      
    ]
  };
} 
