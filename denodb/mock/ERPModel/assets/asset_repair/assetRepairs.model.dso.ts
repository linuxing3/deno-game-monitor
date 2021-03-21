// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: AssetRepair
|--------------------------------------------------------------------------
|
| Model Class and Interface of assetRepairs
|
*/
import {
  BaseModel,
  Field,
  FieldType,
  Model
} from "https://deno.land/x/dso@v1.0.0/mod.ts";

@Model("assetRepairs")
export class AssetRepair extends BaseModel { 

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
  series!: string;
  
  @Field({ type: FieldType.STRING })
  itemCode!: string;
  
  @Field({ type: FieldType.STRING })
  itemName!: string;
  
  @Field({ type: FieldType.STRING })
  failureDate!: string;
  
  @Field({ type: FieldType.STRING })
  assignTo!: string;
  
  @Field({ type: FieldType.STRING })
  assignToName!: string;
  
  @Field({ type: FieldType.STRING })
  completionDate!: string;
  
  @Field({ type: FieldType.STRING })
  repairStatus!: string;
  
  @Field({ type: FieldType.STRING })
  errorDescription!: string;
  
  @Field({ type: FieldType.STRING })
  actionsPerformed!: string;
  
  @Field({ type: FieldType.STRING })
  downtime!: string;
  
  @Field({ type: FieldType.STRING })
  repairCost!: string;
  
  @Field({ type: FieldType.STRING })
  amendedFrom!: string;
  
  
}

export interface IAssetRepair {
  id: number;
  assetName: string;
  series: string;
  itemCode: string;
  itemName: string;
  failureDate: string;
  assignTo: string;
  assignToName: string;
  completionDate: string;
  repairStatus: string;
  errorDescription: string;
  actionsPerformed: string;
  downtime: string;
  repairCost: string;
  amendedFrom: string;
  
}
