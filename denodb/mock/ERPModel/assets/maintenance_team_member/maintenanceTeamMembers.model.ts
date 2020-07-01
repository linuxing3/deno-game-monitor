// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: MaintenanceTeamMember
|--------------------------------------------------------------------------
|
| Model of maintenanceTeamMembers
|
*/
import {
  DataTypes,
  Model
} from "https://deno.land/x/denodb/mod.ts";

export class MaintenanceTeamMember extends Model { 
  static table = "maintenanceTeamMembers";
  static timestamps = true;
  
  static fields = {
    // fields list for ORM Maping
    id: { primaryKey: true, autoIncrement: true },
    teamMember: DataTypes.STRING,
    fullName: DataTypes.STRING,
    maintenanceRole: DataTypes.STRING,
    
  };

  static meta = {
    // field meta information for UI render
    fieldProperty: [
      {
        
        key: 'teamMember',
      
        label: 'Team Member',
      
        type: 'select',
      
        placeholder: 'Input Team Member',
      
        options: '',
      
      },
      {
        
        key: 'fullName',
      
        label: 'Full Name',
      
        type: 'input',
      
        placeholder: 'Input Full Name',
      
        options: '',
      
      },
      {
        
        key: 'maintenanceRole',
      
        label: 'Maintenance Role',
      
        type: 'select',
      
        placeholder: 'Input Maintenance Role',
      
        options: '',
      
      },
      
    ]
  };
} 
