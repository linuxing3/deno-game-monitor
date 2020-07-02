// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: ItemTaxTemplateDetail
|--------------------------------------------------------------------------
|
| Model Class and Interface of itemTaxTemplateDetails
|
*/
import {
  BaseModel,
  Field,
  FieldType,
  Model
} from "https://deno.land/x/dso@v1.0.0/mod.ts";

@Model("itemTaxTemplateDetails")
export class ItemTaxTemplateDetail extends BaseModel { 

  @Field({
    type: FieldType.INT,
    primary: true,
    length: 11,
    autoIncrement: true
  })
  id!: number;

  @Field({ type: FieldType.STRING })
  tax!: string;
  
  @Field({ type: FieldType.STRING })
  taxRate!: string;
  
  
}

export interface IItemTaxTemplateDetail {
  id: number;
  tax: string;
  taxRate: string;
  
}
