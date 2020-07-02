// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: TaxWithholdingCategory
|--------------------------------------------------------------------------
|
| Model Class and Interface of taxWithholdingCategories
|
*/
import {
  BaseModel,
  Field,
  FieldType,
  Model
} from "https://deno.land/x/dso@v1.0.0/mod.ts";

@Model("taxWithholdingCategories")
export class TaxWithholdingCategory extends BaseModel { 

  @Field({
    type: FieldType.INT,
    primary: true,
    length: 11,
    autoIncrement: true
  })
  id!: number;

  @Field({ type: FieldType.STRING })
  categoryName!: string;
  
  @Field({ type: FieldType.STRING })
  taxWithholdingRates!: string;
  
  @Field({ type: FieldType.STRING })
  rates!: string;
  
  @Field({ type: FieldType.STRING })
  accountDetails!: string;
  
  @Field({ type: FieldType.STRING })
  accounts!: string;
  
  
}

export interface ITaxWithholdingCategory {
  id: number;
  categoryName: string;
  taxWithholdingRates: string;
  rates: string;
  accountDetails: string;
  accounts: string;
  
}
