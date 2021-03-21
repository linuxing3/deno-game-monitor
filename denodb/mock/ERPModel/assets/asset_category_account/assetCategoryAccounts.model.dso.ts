// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: AssetCategoryAccount
|--------------------------------------------------------------------------
|
| Model Class and Interface of assetCategoryAccounts
|
*/
import {
  BaseModel,
  Field,
  FieldType,
  Model
} from "https://deno.land/x/dso@v1.0.0/mod.ts";

@Model("assetCategoryAccounts")
export class AssetCategoryAccount extends BaseModel { 

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
  fixedAssetAccount!: string;
  
  @Field({ type: FieldType.STRING })
  accumulatedDepreciationAccount!: string;
  
  @Field({ type: FieldType.STRING })
  depreciationExpenseAccount!: string;
  
  @Field({ type: FieldType.STRING })
  capitalWorkInProgressAccount!: string;
  
  
}

export interface IAssetCategoryAccount {
  id: number;
  company: string;
  fixedAssetAccount: string;
  accumulatedDepreciationAccount: string;
  depreciationExpenseAccount: string;
  capitalWorkInProgressAccount: string;
  
}
