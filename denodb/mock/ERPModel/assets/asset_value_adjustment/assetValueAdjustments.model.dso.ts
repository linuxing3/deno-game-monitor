// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: AssetValueAdjustment
|--------------------------------------------------------------------------
|
| Model Class and Interface of assetValueAdjustments
|
*/
import {
  BaseModel,
  Field,
  FieldType,
  Model
} from "https://deno.land/x/dso@v1.0.0/mod.ts";

@Model("assetValueAdjustments")
export class AssetValueAdjustment extends BaseModel { 

  @Field({
    type: FieldType.INT,
    primary: true,
    length: 11,
    autoIncrement: true
  })
  id!: number;

  @Field({ type: FieldType.STRING })
  company!: string;
  
  @Field({ type: FieldType.STRING })
  asset!: string;
  
  @Field({ type: FieldType.STRING })
  assetCategory!: string;
  
  @Field({ type: FieldType.STRING })
  financeBook!: string;
  
  @Field({ type: FieldType.STRING })
  journalEntry!: string;
  
  @Field({ type: FieldType.STRING })
  date!: string;
  
  @Field({ type: FieldType.STRING })
  currentAssetValue!: string;
  
  @Field({ type: FieldType.STRING })
  newAssetValue!: string;
  
  @Field({ type: FieldType.STRING })
  differenceAmount!: string;
  
  @Field({ type: FieldType.STRING })
  costCenter!: string;
  
  @Field({ type: FieldType.STRING })
  amendedFrom!: string;
  
  
}

export interface IAssetValueAdjustment {
  id: number;
  company: string;
  asset: string;
  assetCategory: string;
  financeBook: string;
  journalEntry: string;
  date: string;
  currentAssetValue: string;
  newAssetValue: string;
  differenceAmount: string;
  costCenter: string;
  amendedFrom: string;
  
}
