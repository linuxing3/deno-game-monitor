// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: AssetFinanceBook
|--------------------------------------------------------------------------
|
| Model Class and Interface of assetFinanceBooks
|
*/
import {
  BaseModel,
  Field,
  FieldType,
  Model
} from "https://deno.land/x/dso@v1.0.0/mod.ts";

@Model("assetFinanceBooks")
export class AssetFinanceBook extends BaseModel { 

  @Field({
    type: FieldType.INT,
    primary: true,
    length: 11,
    autoIncrement: true
  })
  id!: number;

  @Field({ type: FieldType.STRING })
  financeBook!: string;
  
  @Field({ type: FieldType.STRING })
  depreciationMethod!: string;
  
  @Field({ type: FieldType.STRING })
  totalNumberOfDepreciations!: string;
  
  @Field({ type: FieldType.STRING })
  frequencyOfDepreciationMonths!: string;
  
  @Field({ type: FieldType.STRING })
  depreciationStartDate!: string;
  
  @Field({ type: FieldType.STRING })
  expectedValueAfterUsefulLife!: string;
  
  @Field({ type: FieldType.STRING })
  valueAfterDepreciation!: string;
  
  
}

export interface IAssetFinanceBook {
  id: number;
  financeBook: string;
  depreciationMethod: string;
  totalNumberOfDepreciations: string;
  frequencyOfDepreciationMonths: string;
  depreciationStartDate: string;
  expectedValueAfterUsefulLife: string;
  valueAfterDepreciation: string;
  
}
