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
  BaseModel,
  Field,
  FieldType,
  Model
} from "https://deno.land/x/dso@v1.0.0/mod.ts";

@Model("assetMaintenanceTeams")
export class AssetMaintenanceTeam extends BaseModel { 

  @Field({
    type: FieldType.INT,
    primary: true,
    length: 11,
    autoIncrement: true
  })
  id!: number;

  @Field({ type: FieldType.STRING })
  maintenanceTeamName!: string;
  
  @Field({ type: FieldType.STRING })
  maintenanceManager!: string;
  
  @Field({ type: FieldType.STRING })
  maintenanceManagerName!: string;
  
  @Field({ type: FieldType.STRING })
  company!: string;
  
  @Field({ type: FieldType.STRING })
  maintenanceTeamMembers!: string;
  
  
}

export interface IAssetMaintenanceTeam {
  id: number;
  maintenanceTeamName: string;
  maintenanceManager: string;
  maintenanceManagerName: string;
  company: string;
  maintenanceTeamMembers: string;
  
}
