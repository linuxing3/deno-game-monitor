// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: AssetMaintenanceTeam
|--------------------------------------------------------------------------
|
| Model Class and Interface of assetMaintenanceTeams
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


export class AssetMaintenanceTeam extends Model { 
  static table = "assetMaintenanceTeams";
  static timestamps = true;
  
  static fields: ModelFields = {
    // fields list for ORM Maping
    id: { primaryKey: true, autoIncrement: true },
    maintenanceTeamName: DataTypes.STRING,
    maintenanceManager: DataTypes.STRING,
    maintenanceManagerName: DataTypes.STRING,
    company: DataTypes.STRING,
    maintenanceTeamMembers: DataTypes.STRING,
    
  };

  static meta = {
    // field meta information for UI render
    fieldProperty: [
      {
        key: 'maintenanceTeamName',
        label: 'Maintenance Team Name',
        type: 'input',
        placeholder: 'Input Maintenance Team Name',
        options: '',
        
      },
      {
        key: 'maintenanceManager',
        label: 'Maintenance Manager',
        type: 'select',
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
        key: '',
        label: '',
        type: 'input',
        placeholder: 'Input ',
        options: '',
        
      },
      {
        key: 'maintenanceTeamMembers',
        label: 'Maintenance Team Members',
        type: 'select',
        placeholder: 'Input Maintenance Team Members',
        options: '',
        
      },
      
    ]
  };
}

export interface IAssetMaintenanceTeam {
  id: FieldValue;
  maintenanceTeamName: FieldValue;
  maintenanceManager: FieldValue;
  maintenanceManagerName: FieldValue;
  company: FieldValue;
  maintenanceTeamMembers: FieldValue;
  
}
