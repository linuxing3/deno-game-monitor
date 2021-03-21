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


export class AssetMaintenanceTeam extends Model { 
  static table = "assetMaintenanceTeams";
  static timestamps = true;
  
  static fields = {
    // fields list for ORM Maping
    id: { primaryKey: true, autoIncrement: true },
    maintenanceTeamName: DataTypes.STRING,
    maintenanceManager: DataTypes.STRING,
    maintenanceManagerName: DataTypes.STRING,
    company: DataTypes.STRING,
    maintenanceTeamMembers: DataTypes.STRING,
    
  };

}
