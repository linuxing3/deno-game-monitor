// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: AssetSetting
|--------------------------------------------------------------------------
|
| Model Class and Interface of assetSettings
|
*/
import {
  BaseModel,
  Field,
  FieldType,
  Model
} from "https://deno.land/x/dso@v1.0.0/mod.ts";

@Model("assetSettings")
export class AssetSetting extends BaseModel { 

  @Field({
    type: FieldType.INT,
    primary: true,
    length: 11,
    autoIncrement: true
  })
  id!: number;

  @Field({ type: FieldType.STRING })
  depreciationOptions!: string;
  
  @Field({ type: FieldType.STRING })
  calculateProratedDepreciationScheduleBasedOnFiscalYear!: string;
  
  @Field({ type: FieldType.STRING })
  numberOfDaysInFiscalYear!: string;
  
  
}

export interface IAssetSetting {
  id: number;
  depreciationOptions: string;
  calculateProratedDepreciationScheduleBasedOnFiscalYear: string;
  numberOfDaysInFiscalYear: string;
  
}
