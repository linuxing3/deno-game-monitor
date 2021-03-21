// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: AssetMaintenanceTask
|--------------------------------------------------------------------------
|
| Model Class and Interface of assetMaintenanceTasks
|
*/
import {
  BaseModel,
  Field,
  FieldType,
  Model
} from "https://deno.land/x/dso@v1.0.0/mod.ts";

@Model("assetMaintenanceTasks")
export class AssetMaintenanceTask extends BaseModel { 

  @Field({
    type: FieldType.INT,
    primary: true,
    length: 11,
    autoIncrement: true
  })
  id!: number;

  @Field({ type: FieldType.STRING })
  maintenanceTask!: string;
  
  @Field({ type: FieldType.STRING })
  maintenanceType!: string;
  
  @Field({ type: FieldType.STRING })
  maintenanceStatus!: string;
  
  @Field({ type: FieldType.STRING })
  startDate!: string;
  
  @Field({ type: FieldType.STRING })
  periodicity!: string;
  
  @Field({ type: FieldType.STRING })
  endDate!: string;
  
  @Field({ type: FieldType.STRING })
  certificateRequired!: string;
  
  @Field({ type: FieldType.STRING })
  assignTo!: string;
  
  @Field({ type: FieldType.STRING })
  assignToName!: string;
  
  @Field({ type: FieldType.STRING })
  nextDueDate!: string;
  
  @Field({ type: FieldType.STRING })
  lastCompletionDate!: string;
  
  @Field({ type: FieldType.STRING })
  description!: string;
  
  
}

export interface IAssetMaintenanceTask {
  id: number;
  maintenanceTask: string;
  maintenanceType: string;
  maintenanceStatus: string;
  startDate: string;
  periodicity: string;
  endDate: string;
  certificateRequired: string;
  assignTo: string;
  assignToName: string;
  nextDueDate: string;
  lastCompletionDate: string;
  description: string;
  
}
