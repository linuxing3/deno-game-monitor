// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: CostCenter
|--------------------------------------------------------------------------
|
| Model Class and Interface of costCenters
|
*/
import {
  BaseModel,
  Field,
  FieldType,
  Model
} from "https://deno.land/x/dso@v1.0.0/mod.ts";

@Model("costCenters")
export class CostCenter extends BaseModel { 

  @Field({
    type: FieldType.INT,
    primary: true,
    length: 11,
    autoIncrement: true
  })
  id!: number;

  @Field({ type: FieldType.STRING })
  costCenterName!: string;
  
  @Field({ type: FieldType.STRING })
  costCenterNumber!: string;
  
  @Field({ type: FieldType.STRING })
  parentCostCenter!: string;
  
  @Field({ type: FieldType.STRING })
  company!: string;
  
  @Field({ type: FieldType.STRING })
  isGroup!: string;
  
  @Field({ type: FieldType.STRING })
  lft!: string;
  
  @Field({ type: FieldType.STRING })
  rgt!: string;
  
  @Field({ type: FieldType.STRING })
  oldParent!: string;
  
  
}

export interface ICostCenter {
  id: number;
  costCenterName: string;
  costCenterNumber: string;
  parentCostCenter: string;
  company: string;
  isGroup: string;
  lft: string;
  rgt: string;
  oldParent: string;
  
}
