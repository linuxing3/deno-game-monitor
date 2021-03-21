// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: MaintenanceTeamMember
|--------------------------------------------------------------------------
|
| Model Class and Interface of maintenanceTeamMembers
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

}
