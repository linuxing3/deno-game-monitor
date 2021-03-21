// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: AssetMaintenance
|--------------------------------------------------------------------------
|
| Model Class and Interface of assetMaintenances
|
*/
import {
  BaseModel,
  Field,
  FieldType,
  Model
} from "https://deno.land/x/dso@v1.0.0/mod.ts";

@Model("assetMaintenances")
export class AssetMaintenance extends BaseModel { 

  @Field({
    type: FieldType.INT,
    primary: true,
    length: 11,
    autoIncrement: true
  })
  id!: number;

  @Field({ type: FieldType.STRING })
  assetName!: string;
  
  @Field({ type: FieldType.STRING })
  assetCategory!: string;
  
  @Field({ type: FieldType.STRING })
  itemCode!: string;
  
  @Field({ type: FieldType.STRING })
  itemName!: string;
  
  @Field({ type: FieldType.STRING })
  company!: string;
  
  @Field({ type: FieldType.STRING })
  selectSerialNo!: string;
  
  @Field({ type: FieldType.STRING })
  serialNo!: string;
  
  @Field({ type: FieldType.STRING })
  maintenanceTeam!: string;
  
  @Field({ type: FieldType.STRING })
  maintenanceManager!: string;
  
  @Field({ type: FieldType.STRING })
  maintenanceManagerName!: string;
  
  @Field({ type: FieldType.STRING })
  tasks!: string;
  
  @Field({ type: FieldType.STRING })
  maintenanceTasks!: string;
  
  
}

export interface IAssetMaintenance {
  id: number;
  assetName: string;
  assetCategory: string;
  itemCode: string;
  itemName: string;
  company: string;
  selectSerialNo: string;
  serialNo: string;
  maintenanceTeam: string;
  maintenanceManager: string;
  maintenanceManagerName: string;
  tasks: string;
  maintenanceTasks: string;
  
}
