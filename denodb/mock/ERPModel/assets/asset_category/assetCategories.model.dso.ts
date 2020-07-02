// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: AssetCategory
|--------------------------------------------------------------------------
|
| Model Class and Interface of assetCategories
|
*/
import {
  BaseModel,
  Field,
  FieldType,
  Model
} from "https://deno.land/x/dso@v1.0.0/mod.ts";

@Model("assetCategories")
export class AssetCategory extends BaseModel { 

  @Field({
    type: FieldType.INT,
    primary: true,
    length: 11,
    autoIncrement: true
  })
  id!: number;

  @Field({ type: FieldType.STRING })
  assetCategoryName!: string;
  
  @Field({ type: FieldType.STRING })
  financeBookDetail!: string;
  
  @Field({ type: FieldType.STRING })
  financeBooks!: string;
  
  @Field({ type: FieldType.STRING })
  accounts!: string;
  
  
}

export interface IAssetCategory {
  id: number;
  assetCategoryName: string;
  financeBookDetail: string;
  financeBooks: string;
  accounts: string;
  
}
