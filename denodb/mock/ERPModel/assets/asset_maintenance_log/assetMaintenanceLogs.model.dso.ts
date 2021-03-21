// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: AssetMaintenanceLog
|--------------------------------------------------------------------------
|
| Model Class and Interface of assetMaintenanceLogs
|
*/
import {
  BaseModel,
  Field,
  FieldType,
  Model
} from "https://deno.land/x/dso@v1.0.0/mod.ts";

@Model("assetMaintenanceLogs")
export class AssetMaintenanceLog extends BaseModel { 

  @Field({
    type: FieldType.INT,
    primary: true,
    length: 11,
    autoIncrement: true
  })
  id!: number;

  @Field({ type: FieldType.STRING })
  assetMaintenance!: string;
  
  @Field({ type: FieldType.STRING })
  series!: string;
  
  @Field({ type: FieldType.STRING })
  assetName!: string;
  
  @Field({ type: FieldType.STRING })
  itemCode!: string;
  
  @Field({ type: FieldType.STRING })
  itemName!: string;
  
  @Field({ type: FieldType.STRING })
  task!: string;
  
  @Field({ type: FieldType.STRING })
  maintenanceType!: string;
  
  @Field({ type: FieldType.STRING })
  periodicity!: string;
  
  @Field({ type: FieldType.STRING })
  assignTo!: string;
  
  @Field({ type: FieldType.STRING })
  dueDate!: string;
  
  @Field({ type: FieldType.STRING })
  completionDate!: string;
  
  @Field({ type: FieldType.STRING })
  maintenanceStatus!: string;
  
  @Field({ type: FieldType.STRING })
  hasCertificate!: string;
  
  @Field({ type: FieldType.STRING })
  certificate!: string;
  
  @Field({ type: FieldType.STRING })
  description!: string;
  
  @Field({ type: FieldType.STRING })
  actionsPerformed!: string;
  
  @Field({ type: FieldType.STRING })
  amendedFrom!: string;
  
  
}

export interface IAssetMaintenanceLog {
  id: number;
  assetMaintenance: string;
  series: string;
  assetName: string;
  itemCode: string;
  itemName: string;
  task: string;
  maintenanceType: string;
  periodicity: string;
  assignTo: string;
  dueDate: string;
  completionDate: string;
  maintenanceStatus: string;
  hasCertificate: string;
  certificate: string;
  description: string;
  actionsPerformed: string;
  amendedFrom: string;
  
}
